import express from "express";
import pool from "./src/db.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM clients_users");
    res.status(201).send({ children: data.rows });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, age } = req.body;
  try {
    await pool.query("INSERT INTO clients_users(name, age) VALUES ($1, $2)", [
      name,
      age,
    ]);
    res.status(201).send({ message: "Successfully add child" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE clients_users(id SERIAL PRIMARY KEY, name VARCHAR(244), age INT)"
    );

    res.status(201).send({ message: "Successfully created table" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});