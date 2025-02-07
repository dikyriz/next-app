import connectDB from "@/config/database";
import Categories from "@/models/category";
import CardJobs from "@/components/CardJobs";

const DetailCategory = async ({params}) => {
    await connectDB();
    const data = await Categories.findById(params.id).populate("ListJob").lean();
    const category = JSON.parse(JSON.stringify(data));

    return (
        <>
            <h1 className="text-2xl font-bold my-4 text-info">{category.name}</h1>
            <p className="">{category.description}</p>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 my-5 gap-5">
                {category.ListJob.map((item) => (
                    <CardJobs job={item} url={`/job/${item._id}`} key={item._id}/>
                ))}
            </div>
        </>
    );
};

export default DetailCategory;