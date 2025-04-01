import { Router } from "express";
import { StatusCodes } from "http-status-codes"

const router = Router();

router.get("/", (_, res) => {
  return res.send("Hello world");
});

router.post("/body", (req, res) => {
  console.log(req.body, req.header);

  return res.json(req.body);
});

router.get("/query", (req, res) => {
  console.log(req.query.teste);

  return res.json(req.body);
});

router.delete("/params/:id", (req, res) => {
  console.log(req.params.id);

  return res.json(req.body);
});

router.get("/cookies", (req, res) => {
  console.log(req.header);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };
