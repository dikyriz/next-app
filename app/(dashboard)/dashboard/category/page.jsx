import React from 'react';
import Link from "next/link";
import Categories from "@/models/category";
import connectDB from "@/config/database";

const CategoryPage = async () => {
    await connectDB()
    const categories = await Categories.find();
    return (
        <>
            <Link className="btn btn-primary btn-sm" href="/dashboard/category/create">
                Create
            </Link>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row  */}
                    {categories.map((item, index) => (
                        <tr className="hover" key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>
                                <Link href={`/dashboard/category/${item._id}/edit`} className="btn btn-sm btn-info">Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CategoryPage;