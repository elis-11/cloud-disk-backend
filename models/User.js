const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  link: [{type: Types.ObjectId, ref: 'Link'}]
});
module.exports = model("User", schema);
