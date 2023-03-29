import { Router } from "express";
import { getData2, postData2, updateData2, deleteData2 } from "../controllers/index.controller.js";

const router = Router();

router.get("/data", getData2);
router.post("/data", postData2);
router.put("/data/", updateData2);
router.delete("/data", deleteData2);

export default router;