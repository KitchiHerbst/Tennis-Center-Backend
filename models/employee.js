const mongoose = require("mongoose");
const Joi = require("joi");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minlength: 1,
    maxlength: 50,
  },
  lastName: {
    type: String,
    require: true,
    minlength: 1,
    maxlength: 50,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  //incase i want to have a manual signup and login instead of using Oauth for employees
  //   password: {
  //     type: String,
  //     required: true,
  //     minlength: 3,
  //     maxlength: 1024,
  //   },
});

const Employee = new mongoose.Model("Employee", employeeSchema);

const validate = ({ firstName, lastName, email }) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(1).max(50),
    lastName: Joi.string().required().min(1).max(50),
    email: Joi.string().required().min(1).max(50).email(),
  });

  schema.validate({ firstName, lastName, email });
};

exports.employeeSchema = employeeSchema;
exports.Employee = Employee;
exports.validate = validate;
