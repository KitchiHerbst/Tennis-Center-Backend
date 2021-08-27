const express = require("express");
const router = express.Router();

// TODO need to create separate middleware checks for employees, members and admin
const isLoggedInMember = require("../middleware/isLoggedInMember");
const { employeeSchema, Employee, validate } = require("../models/employee");

router.get("/", isLoggedInMember, async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

router.post("/", async (req, res) => {
  const employee = new Employee({
    firstName: "Triston",
    lastName: "Herbst",
    email: "tristonherbst97@gmail.com",
    isAdmin: true,
  });

  try {
    await employee.save();
    res.send(employee);
  } catch (ex) {
    res.status(400).send("Employee already has account");
  }
});

module.exports = router;
