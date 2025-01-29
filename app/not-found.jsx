import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 bg-base-100 text-center items-center">
            <h1 className="text-6xl font-bold text-error">404</h1>
            <p className="mt-4">Page Not Found</p>
            <Link href="/" className="btn btn-secondary my-8">Back to Home</Link>
        </div>
    );
};

export default NotFound;