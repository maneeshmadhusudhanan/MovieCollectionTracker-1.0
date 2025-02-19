

import db from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;

  try {
    const query = "DELETE FROM movies WHERE id = ?";
    const [result] = await db.query(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
}


// import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// // Create MySQL connection pool
// const db = mysql.createPool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// });

// // DELETE method to remove a movie
// export async function DELETE(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");

//     if (!id) {
//       return new Response(JSON.stringify({ message: "Movie ID is required" }), {
//         status: 400,
//       });
//     }

//     // Delete movie from database
//     const query = "DELETE FROM movies WHERE id = ?";
//     const [result] = await db.query(query, [id]);

//     if (result.affectedRows === 0) {
//       return new Response(JSON.stringify({ message: "Movie not found" }), {
//         status: 404,
//       });
//     }

//     return new Response(
//       JSON.stringify({ message: "Movie deleted successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ message: "Database error", error: error.message }),
//       { status: 500 }
//     );
//   }
// }
