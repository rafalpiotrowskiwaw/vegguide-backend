import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
})
const Review = mongoose.model('Review', ReviewSchema);

export { Review }
