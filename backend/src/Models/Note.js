import mongoose, { Mongoose } from "mongoose";

// step 1 - create the schema
// step 2 - create the model

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
{timestamps: true}
);

const Note = mongoose.model("Note", noteSchema)

export default Note;