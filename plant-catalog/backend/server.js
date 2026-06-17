require("dotenv").config();
const connectDB = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
const Plant = require("./models/Plant");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

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
    res.status(500).json({ error: "Erro ao buscar plantas" });
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
    res.status(500).json({ error: "Erro ao buscar planta" });
  }
});

console.log("CHEGUEI NAS ROTAS DO MONGODB");

app.post("/myPlants", async (req, res) => {
    try {
        const plant = new Plant(req.body);
        await plant.save();
        res.status(201).json(plant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.get("/myPlants", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar plantas" });
  }
});

app.delete("/myPlants/:id", async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.json({ message: "Planta removida" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/myPlants/:id", async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/myPlants/:id/water", async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(
      req.params.id,
      { ultimaRega: new Date() },
      { new: true }
    );
    res.json(plant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/teste", (req, res) => {
  res.send("funcionou");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
