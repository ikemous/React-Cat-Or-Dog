const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const dateObj = {
    type: Date,
    default: Date.now(),
};
  
const UserSchema = new Schema({
    createdDate: dateObj,
    updatedDate: dateObj,
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [({length}) => length >= 6, "Password Needs To Be Greater Than 6 characters"],
    },
    matches : {
        type: Array
    }
});

/**
 * pre()
 * Purpose: Encrypt the password using bcrypt
 * Parameters: None
 * Return: N/A
 */
UserSchema.pre('save', function(){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
});//end pre()

/**
 * hashPassword()
 * Purpose: Encrypt the password using bcrypt
 * Parameters: None
 * Return: N/A
 */
UserSchema.methods.hashPassword = function () {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
}; //end hashPassword()
  
/**
 * validPassword()
 * Purpose: Use bcrypt to check if password is the same as hash
 * Parameters: password - password inputed by the user
 * Return: true/false - if password is the same
 */
UserSchema.methods.validPassword = function (password) {
    //Use bcrypt to check passwords
    return bcrypt.compareSync(password, this.password);
}; //End validPassword()
  
const User = mongoose.model("User", UserSchema);
module.exports = User;
