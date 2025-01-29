import mongoose from "mongoose";
const {Schema, models, model} = mongoose

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [6, "min 6 character"]
    },
    description: {
        type: String,
        required: true
    }
})

const Categories = models.Categories || model("Categories", CategorySchema);

export default Categories