const router = require("express").Router();
const Message = require("../models/message");

router.post("/submit", ({body}, res) => {
    const message = new Message (body);
    Message.create(message)
      .then(db => {
        res.json(db);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;