const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);

//If No Route is hit, send to homepage
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname +'/dist/Dodgers/index.html'));
});

module.exports = router;