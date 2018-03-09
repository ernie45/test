/** Require express */
const express = require("express");
/** Create a router */
const router = express.Router();
/** Require path */
const path = require("path");
/** Bring in the apiRoutes */
const apiRoutes = require("./users");


/** Allow the router to use the apiRoutes */
/** Note that this adds the final part to the path url */
/** This changes the /suite and suite/:api paths in api folder to */
/** /api/suite and /api/suite/:id */
router.use("/api", apiRoutes);

module.exports = router;
