import React from 'react';
import Link from "next/link";

const CategoryPage = () => {
    return (
        <Link className="btn btn-primary btn-sm" href="/dashboard/category/create">
            Create
        </Link>
    );
};

export default CategoryPage;