const express = require("express");

const {
  validateLogin,
  validateRegister,
} = require("../middleware/users.middleware");
const {
  studentLogin,
  studentRegister,
  //studentProfileById
} = require("../controller/students.controller");

const studentsRouter = express.Router();

studentsRouter.post("/login", validateLogin, studentLogin);
studentsRouter.post("/register", validateRegister, studentRegister);
//studentsRouter.get("/profile/:id",studentProfileById);


studentsRouter.all("*", (req, res) => {
  return res.status(404).json({ message: "404 Invalid Route" });
});

module.exports = { studentsRouter };
