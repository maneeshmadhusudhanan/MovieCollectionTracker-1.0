import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse request body
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

    // Check if user exists
    const [user] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);

    if (user.length === 0) {
      await connection.end();
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);

    if (!validPassword) {
      await connection.end();
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Generate JWT Token
    const token = jwt.sign({ email: user[0].email, id: user[0].id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    await connection.end();

    return new Response(JSON.stringify({ message: "Login successful", token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
