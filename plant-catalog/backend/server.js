const connectDB = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const API_TOKEN = "usr-2tCmVVDGjMBhVALfOSGzPVjcMKd15rqlszdBlzQa8fc";

app.get("/plants", async (req, res) => {
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${API_TOKEN}`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erro ao buscar plantas",
    });
  }
});

app.get("/plants/:id", async (req, res) => {
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants/${req.params.id}?token=${API_TOKEN}`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erro ao buscar planta",
    });
  }
});

connectDB();

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});