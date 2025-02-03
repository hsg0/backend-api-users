import express from "express";
// Removed: import User from "../models/usersModel.js"; // No need to import the model here
// Removed: import { get } from "mongoose"; // Not needed

// Import CRUD operations
import {
  createUser,
  getUsers,
  getUserById, // ✅ Fixed: changed from `getUsersById` to `getUserById`
  updateUserById,
  updateUserByEmail,
  deleteUserById,
} from "../controllers/usersControllers.js";

// Create a new router
const router = express.Router();

// 🔹🔹🔹 CRUD OPERATIONS 🔹🔹🔹
/**
 * 🔹 CREATE A NEW USER
 * // Create; C of CRUD ----------------------------------------------
 * URL: POST /users
 */
router.post("/", createUser);

//     async (req, res) => {
//   const { name, age, DOB, email, password } = req.body;

//   if (!name || !age || !DOB || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const newUser = new User({ name, age, DOB, email, password });
//     await newUser.save();
//     res
//       .status(201)
//       .json({ message: "User created successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating user", error });
//   }
// });

// Read; R of CRUD ----------------------------------------------
/**
 * 🔹 GET ALL USERS
 * URL: GET /users
 */
router.get("/", getUsers);

//     async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });

/**
 * 🔹 GET A USER BY ID
 * URL: GET /users/:id
 */
router.get("/:id", getUserById);

//     async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user", error });
//   }
// });

/**
 * 🔹 UPDATE USER BY ID
 * // Update; U of CRUD ----------------------------------------------
 * URL: PUT /users/id/:id
 */
router.put("/id/:id", updateUserById);

//     async (req, res) => {
//   const { id } = req.params;
//   const updates = req.body;

//   if (!updates || Object.keys(updates).length === 0) {
//     return res
//       .status(400)
//       .json({ message: "At least one field is required for update" });
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       { $set: updates },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "User updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// });

/**
 * 🔹 UPDATE USER BY EMAIL
 * URL: PUT /users/email/:email
 */
router.put("/email/:email", updateUserByEmail);

//     async (req, res) => {
//   const { email } = req.params;
//   const updates = req.body;

//   if (!updates || Object.keys(updates).length === 0) {
//     return res
//       .status(400)
//       .json({ message: "At least one field is required for update" });
//   }

//   try {
//     const updatedUser = await User.findOneAndUpdate(
//       { email },
//       { $set: updates },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       message: `User ${updatedUser} updated successfully`,
//       user: updatedUser,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// });

/**
 * 🔹 DELETE USER BY ID
 * // Delete; D of CRUD ----------------------------------------------
 * URL: DELETE /users/id/:id
 */

router.delete("/id/:id", deleteUserById);

//     async (request, response) => {
//   const { id } = request.params;

//   try {
//     const deletedUser = await User.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return response.status(404).json({ message: "User not found" });
//     }

//     response.status(200).json({
//       message: `User ${deletedUser} deleted successfully`,
//       user: deletedUser,
//     });
//   } catch (error) {
//     response.status(500).json({ message: "Error deleting user", error });
//   }
// });

export default router;
