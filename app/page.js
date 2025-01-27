import React from 'react';
import Link from "next/link";

const Homepage = () => {
    return (
        <div>
           <Link className="btn btn-accent" href="/about">About</Link>
           <Link className="btn btn-accent" href="/category">Category</Link>
        </div>
    );
};

export default Homepage;