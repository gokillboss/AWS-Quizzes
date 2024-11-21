"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var quizSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long']
    },
    description: {
        type: String,
        "default": ''
    },
    questions: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Question',
            required: true
        }],
    price: {
        type: Number,
        "default": 0,
        min: [0, 'Price must be a positive number']
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
// Thêm virtual populate để tối ưu hóa việc lấy questions
quizSchema.virtual('questionDetails', {
    ref: 'Question',
    localField: 'questions',
    foreignField: '_id'
});
var Quiz = mongoose_1["default"].model('Quiz', quizSchema);
exports["default"] = Quiz;
