"use strict";
exports.__esModule = true;
// questionModel.ts
var mongoose_1 = require("mongoose");
var optionSchema = new mongoose_1.Schema({
    text: { type: String, required: true },
    isCorrect: { type: Boolean, required: true, "default": false }
});
var questionSchema = new mongoose_1.Schema({
    quizId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
        index: true // Thêm index để tối ưu queries
    },
    questionText: {
        type: String,
        required: true
    },
    options: [optionSchema],
    category: {
        type: Number,
        required: true,
        "enum": [1, 2, 3, 4]
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
var Question = mongoose_1["default"].model('Question', questionSchema);
exports["default"] = Question;
