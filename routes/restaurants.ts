import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("GET /restaurants");
});

export default router;
