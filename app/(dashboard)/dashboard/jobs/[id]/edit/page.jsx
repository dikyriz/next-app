import connectDB from "@/config/database";
import Job from "@/models/job";
import Categories from "@/models/category";
import EditJob from "@/components/form/EditJob";

const EditJobPage = async ({params}) => {
    await connectDB();
    const job = await Job.findById(params.id);
    const categories = await Categories.find();

    return (
        <>
            <h1 className="text-primary font-bold text-3xl">Edit Job</h1>
            <EditJob category={JSON.parse(JSON.stringify(categories))} job={JSON.parse(JSON.stringify(job))}/>
        </>
    );
};

export default EditJobPage;