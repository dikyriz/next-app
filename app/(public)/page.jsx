import InputSearching from "@/components/InputSearching";
import Jobs from "@/models/job";
import CardJobs from "@/components/CardJobs";
import connectDB from "@/config/database";

const Homepage = async () => {
    await connectDB();
    const data = await Jobs.find().limit(3).sort({createdAt: -1});
    return (
        <>
          <section className="bg-info px-7 py-4">
            <InputSearching/>
          </section>
          <h1 className="text-3xl font-bold text-info underline my-5">New Job</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 my-3 gap-5">
              {data.map((item) => (
                  <CardJobs job={JSON.parse(JSON.stringify(item))} url={`/job/${item._id}`} key={item._id} />
              ))}
          </div>
        </>
    );
};

export default Homepage;