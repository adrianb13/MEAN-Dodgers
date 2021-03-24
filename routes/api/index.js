const router = require("express").Router();
const scheduleRoutes = require("./scheduleRoutes");

//Schedule Routes
router.use("/schedule", scheduleRoutes);

module.exports = router;