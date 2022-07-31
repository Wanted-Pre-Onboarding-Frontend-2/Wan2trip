const schedule = require("./schedule");
const hotel = require("./hotel");
const users = require("./user");

const combinedRoutes = {
  schedule: schedule.card,
  hotel,
  users,
};

module.exports = () => combinedRoutes;
