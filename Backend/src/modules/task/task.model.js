import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    day: {
        type: Number,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    type: {
        type: String,
    },

    status: {
        type: String,
        enum: ['pending', 'completed', 'missed'],
        default: 'pending'
    }

}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema)

export default Task