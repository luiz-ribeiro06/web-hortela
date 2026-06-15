const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  especie: {
    type: String,
    required: true,
  },

  dataPlantio: {
    type: Date,
    required: true,
  },

  ultimaRega: {
    type: Date,
    default: null,
  },

  frequenciaRega: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "Plant",
  PlantSchema
);