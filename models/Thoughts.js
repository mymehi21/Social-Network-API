//importing model and reaction schema from mongoose and Reactions.js respectively

const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reactions');
//creating thought schema

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username:{
            type: String,  
            required: true,
        },
        reactions:[reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thoughts = model('Thoughts',thoughtSchema)

module.exports = Thoughts