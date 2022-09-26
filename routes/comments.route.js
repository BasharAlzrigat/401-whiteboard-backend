const express = require("express");
const router = express.Router();

const { commentsCollection } = require("../models/index");

router.post("/comments", createComment);
router.get("/comments", getComment);
router.get("/comments/:id", getOneComment);
router.put("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

async function createComment(req, res) {
  const obj = req.body;
  let comments = await commentsCollection.create(obj);
  res.status(201).json(comments);
}

async function getComment(req, res) {
  let comments = await commentsCollection.read();
  res.status(200).json(comments);
}

async function getOneComment(req, res) {
  const id = parseInt(req.params.id);
  let comments = await commentsCollection.read(id);
  res.status(200).json(comments);
}

async function updateComment(req, res) {
  const obj = req.body;
  const id = parseInt(req.params.id);
  let comments = await commentsCollection.update(id, obj);
  res.status(201).json(comments);
}

async function deleteComment(req, res) {
  const id = parseInt(req.params.id);
  let comments = await commentsCollection.delete(id);
  res.status(204).json(comments);
}

module.exports = router;
