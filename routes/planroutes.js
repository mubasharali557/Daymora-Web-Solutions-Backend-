const express = require("express");
const router = express.Router();
const {
  createPlan,
  getPlans,
  updatePlan,
  deletePlan,
} = require("../controllers/planController");

// ➕ POST
router.post("/", createPlan);

// 📥 GET
router.get("", getPlans);

// ✏️ PUT
router.put("/:id", updatePlan);

// ❌ DELETE
router.delete("/:id", deletePlan);

module.exports = router;
