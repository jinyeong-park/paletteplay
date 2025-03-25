import { google } from "googleapis";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

export interface User {
  id: string;
  email: string;
  password: string;
  name?: string;
  createdAt: string;
}

export interface Palette {
  id: string;
  name: string;
  colors: string;
  userId: string;
  createdAt: string;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Users!A:E",
    });

    const rows = response.data.values;
    if (!rows) return null;

    const user = rows.find((row) => row[1] === email);
    if (!user) return null;

    return {
      id: user[0],
      email: user[1],
      password: user[2],
      name: user[3],
      createdAt: user[4],
    };
  } catch (error) {
    console.error("Error finding user:", error);
    return null;
  }
}

export async function createUser(user: Omit<User, "id" | "createdAt">): Promise<User> {
  try {
    const id = Math.random().toString(36).substring(7);
    const createdAt = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Users!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [[id, user.email, user.password, user.name || "", createdAt]],
      },
    });

    return {
      id,
      email: user.email,
      password: user.password,
      name: user.name,
      createdAt,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getUserPalettes(userId: string): Promise<Palette[]> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Palettes!A:E",
    });

    const rows = response.data.values;
    if (!rows) return [];

    return rows
      .filter((row) => row[3] === userId)
      .map((row) => ({
        id: row[0],
        name: row[1],
        colors: row[2],
        userId: row[3],
        createdAt: row[4],
      }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error("Error getting user palettes:", error);
    return [];
  }
}

export async function createPalette(palette: Omit<Palette, "id" | "createdAt">): Promise<Palette> {
  try {
    const id = Math.random().toString(36).substring(7);
    const createdAt = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Palettes!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [[id, palette.name, palette.colors, palette.userId, createdAt]],
      },
    });

    return {
      id,
      name: palette.name,
      colors: palette.colors,
      userId: palette.userId,
      createdAt,
    };
  } catch (error) {
    console.error("Error creating palette:", error);
    throw error;
  }
} 