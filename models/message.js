const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for the message!"
    },
    email: {
      type: String,
      required: "Enter an email!"
    },
    text : {
      type: String,
      required: "Enter a message!"

    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
