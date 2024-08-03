const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Task', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to mongodb");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1); // Exit process with failure
    }
};

connectDB();

const TaskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        isComplete: { type: Boolean, default: false },
        // owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
    },
    { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
