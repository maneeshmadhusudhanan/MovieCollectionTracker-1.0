import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create MySQL connection pool
const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// POST method: Add new movie
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, image, description } = body;

    if (!title || !image || !description) {
      return new Response(
        JSON.stringify({
          message: "Title, Image, and Description are required.",
        }),
        { status: 400 }
      );
    }

    // Insert movie into database
    const query =
      "INSERT INTO movies (title, image_url, description) VALUES (?, ?, ?)";
    const values = [title, image, description];

    await db.query(query, values);

    return new Response(
      JSON.stringify({ message: "Movie added successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Database Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Database error", error: error.message }),
      { status: 500 }
    );
  }
}

// GET method: Fetch all movies
export async function GET() {
  try {
    const [movies] = await db.query("SELECT * FROM movies");
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    console.error("Database Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Database error", error: error.message }),
      { status: 500 }
    );
  }
}
