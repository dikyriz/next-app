"use client"
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js"

ChartJS.register(
    CategoryScale, LinearScale, Title, BarElement, Tooltip, Legend
)

const ChartBar = ({jobApply}) => {
    const jobTitles = [...new Set(jobApply.map((job) => job._id.jobTitle))];
    const statuses = ["interview","pending","cancel"];

    const datasets = statuses.map((status) => {
        return {
            label: status,
            data: jobTitles.map((jobTitle) => {
                const job = jobApply.find((job) => job._id.jobTitle === jobTitle && job._id.status === status);
                return job ? job.totalJob : 0;
            }),
            backgroundColor: status === "pending" ? "lightyellow" : status === "interview" ? "lightblue" : "red",
            borderColor: status === "pending" ? "orange" : status === "interview" ? "blue" : "darkred",
            borderWidth: 2
        }
    })

    const data = {
        labels: jobTitles,
        datasets
    }

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Total Job Applicant"
            }
        }
    }
    return (
        <Bar data={data} options={options}/>
    );
};

export default ChartBar;