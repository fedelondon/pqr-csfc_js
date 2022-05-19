import { Router } from "express";

const router: Router = Router();

router.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
