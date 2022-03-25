const express = require("express");
const {
  addUser,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controllers/userController");

const router = express.Router();

// http://localhost:3000/api/employee
router.post("/user", addUser);

// http://localhost:3000/api/employees
router.get("/employees", getAllEmployees);

// http://localhost:3000/api/employee/xxxx_employee_id
router.get("/employee/:id", getEmployee);

// http://localhost:3000/api/employee/xxxx_employee_id
router.put("/employee/:id", updateEmployee);

// http://localhost:3000/api/employee/xxxx_employee_id
router.delete("/employee/:id", deleteEmployee);

module.exports = {
  routes: router
};
