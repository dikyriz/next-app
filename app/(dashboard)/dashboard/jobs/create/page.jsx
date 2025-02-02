import Categories from "@/models/category";
import connectDB from "@/config/database";
import AddJob from "@/components/form/AddJob";

const CreateJobPage = async () => {
    await connectDB();
    let data = await Categories.find();
    return (
        <>
         <h1 className="text-primary font-bold text-3xl">Create Job</h1>
         <AddJob category={JSON.parse(JSON.stringify(data))} />
        </>
    );
};

export default CreateJobPage;