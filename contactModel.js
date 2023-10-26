const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        retuired: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        retuired: [true, "Please add the email address"],
    },
    phone: {
        type: String,
        retuired: [true, "Please add the contact phone"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);