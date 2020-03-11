import express from "express";
const routes = express.Router();

const users = [{ nome: "Joao" }, { nome: "Paulo" }, { nome: "Lucas" }];

routes.get("/users", (req, res) => {
  res.json(users);
});

module.exports = routes;
