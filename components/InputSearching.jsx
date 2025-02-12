"use client"
import {useState} from 'react';
import Link from "next/link";
const InputSearching = () => {
    const [search, setSearch] = useState("");
    return (
        <form>
            <input type="text" placeholder="Input Job Title" className="input w-full" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Link href={`/job?search=${search}`} className="btn btn-primary btn-block mt-3 text-white">Search</Link>
        </form>
    );
};

export default InputSearching;