import React from 'react';
import connectDB from "@/config/database";
import Categories from "@/models/category";
import EditCategory from "@/components/form/EditCategory";

const EditCategoryPage = async ({params}) => {
    await connectDB();
    let data = await Categories.findById(params.id);
    return (
        <div>
            <h1 className="text-primary text-3xl font-bold">Edit Category</h1>
            <EditCategory category={data}/>
        </div>
    );
};

export default EditCategoryPage;