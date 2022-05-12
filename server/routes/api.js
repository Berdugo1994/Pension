const express = require("express");
const { query, validationResult } = require("express-validator/check");
require("dotenv").config();
const router = express.Router();
const { dowJonesSince } = require("../utils/stock");
//api Route
/**
 * @method - GET
 * @path - /since/
 * @param - date
 * @param - salary
 * @param - empr_sev
 * @param - empr_gem
 * @param - empe_gem
 * @description - pension calculation for how much I could have today if I was starting deposit every month since a particular date.
 */
router.get("/since/", [], async (req, res, next) => {
  const date = req.query.date;
  const salary = parseInt(req.query.salary);
  const empr_sev = parseFloat(req.query.empr_sev);
  const empr_gem = parseFloat(req.query.empr_gem);
  const empe_gem = parseFloat(req.query.empe_gem);
  let dowResult = dowJonesSince(date, salary, empr_sev, empr_gem, empe_gem);
  return res.status(200).send(dowResult);
});

module.exports = router;
