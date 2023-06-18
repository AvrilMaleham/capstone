const express = require("express");
const router = express.Router();

const {
  getAllServices,
  getServiceById,
} = require("../controller/serviceControllers");

router.get("/", getAllServices);

router.get("/:id", getServiceById);

module.exports = router;
