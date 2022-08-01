const hotels = require("./hotels");
const booked = require("./booked");

const combinedRoutes = {
  hotels: hotels.hotels,
  booked: booked.booked,
};

module.exports = () => combinedRoutes;
