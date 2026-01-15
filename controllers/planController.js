// const User = require("../models/Plan");

// // Create User
// const createUser = async (req, res) => {
//     try {
//         const { name, email, age } = req.body;
//         const user = await User.create({ name, email, age });
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Read All Users
// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Update User
// const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedUser = await User.findByIdAndUpdate(id, req.body, {
//             new: true,
//         });
//         if (!updatedUser) return res.status(404).json({ message: "User not found" });
//         res.json(updatedUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Delete User
// const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedUser = await User.findByIdAndDelete(id);
//         if (!deletedUser) return res.status(404).json({ message: "User not found" });
//         res.json({ message: "User deleted" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { createUser, getUsers, updateUser, deleteUser, };



const Plan = require("../models/Plan");

// ➕ CREATE PLAN (POST)
exports.createPlan = async (req, res) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json({
      success: true,
      message: "Plan created",
      data: plan,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// 📥 GET ALL PLANS (GET)
exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: plans.length,
      data: plans,
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// ✏️ UPDATE PLAN (PUT)
exports.updatePlan = async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json({
      success: true,
      message: "Plan updated",
      data: plan,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// ❌ DELETE PLAN (DELETE)
exports.deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json({
      success: true,
      message: "Plan deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
