const db = require("../models");

module.exports = {
  //Schedule API
  getSchedule: (req, res) => {
    db.Schedule
      .find({})
      .then(schedule => {res.json(schedule)})
      .catch(err => {res.status(422).json(err)})
  },
  addGame: (req, res) => {
    db.Schedule
      .create(req.body)
      .then(game => res.json(game))
      .cath(err => res.status(422).json(err));
  },
  updateGame: (req, res) => {
    db.Schedule
      .findAndModify({ _id: req.params.id }, req.body)
      .then(game => res.json(game))
      .cath(err => res.status(422).json(err));
  },
  deleteGame: (req, res) => {
    db.Schedule
      .remove({ _id: req.params.id })
      .then(game => res.json(game))
      .cath(err => res.status(422).json(err));
  }
};