const Location = require("./location");
const Traveller = require("./traveller");
const Trip = require("./trip");

Traveller.belongsToMany(Location, {
  //define table
  through: {
    model: Trip,
    unique: false,
  },
  //define alias for includes
  as: "planned_trips",
});

Location.belongsToMany(Traveller, {
  //define table
  through: {
    model: Trip,
    unique: false,
  },
  //define alias for includes
  as: "places_travelled",
});

module.exports = { Location, Trip, Traveller };
