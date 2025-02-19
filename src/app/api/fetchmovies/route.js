import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create MySQL connection pool
const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// GET method to fetch all movies
export async function GET() {
  try {
    const [movies] = await db.query("SELECT * FROM movies");
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Database error", error: error.message }),
      { status: 500 }
    );
  }
}
