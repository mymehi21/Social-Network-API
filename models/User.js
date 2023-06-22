//importing dependencies from mongoose
const { Schema, model, Types } = require("mongoose");

//defining user schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          );
        },
      },
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//defing a virtual property which returns number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
//creating the user model from the userSchema
const User = model("User", userSchema);
//exporting user model as module

module.exports = User;
