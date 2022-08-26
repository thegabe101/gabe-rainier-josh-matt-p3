const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    firstName: {

        type: String,

        unique: true,

        required: 'You must document a first name to sign up.',

        trim: true
    },
    lastName: {

        type: String,

        unique: true,

        required: 'You must document a last name to sign up.',

        trim: true
    },
    username: {

        type: String,

        unique: true,

        required: 'A username must exist for each user.',

        trim: true
    },
    email: {

        type: String,

        unique: true,

        match: [
            /^([a-z0-9]{3,20})+@([a-z])+.([a-z]{2,3})$/,
            "You must enter a valid email address",
        ],
    },

    coaches: [{

        type: Schema.Types.ObjectId,
        ref: 'Coach'
    }],

}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

ClientSchema.virtual('coachCount').get(function () {
    return this.coachs.length;
});

const Client = model('Client', ClientSchema);

module.exports = Client;