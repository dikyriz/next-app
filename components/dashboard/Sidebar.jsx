"use client"
import {usePathname} from "next/navigation";
import DashboardList from "@/utils/DashboardNavList";
import Logo from "@/app/assets/logo.png"
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <aside className="py-2 px-4 bg-base-100 h-full">
            <Image src={Logo} alt="logo" width={100} height={100} className="mx-auto"/>
            <div className="flex flex-col mt-10 gap-y-2">
                {DashboardList.map((item)=> (
                    <Link key={item.label} href={item.url} className={`btn btn-md ${pathName === item.url ? "btn btn-primary" : ""}`}>
                        <span className="capitalize">{item.label}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;