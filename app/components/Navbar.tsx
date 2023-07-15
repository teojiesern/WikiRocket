import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
        <nav className="flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl bg-slate-600 p-4 items-center">
            <h1 className="text-white text-3xl font-bold mb-2 md:mb-0">
                <Link href="/">WikiRocket</Link>
            </h1>
            <Search />
        </nav>
    );
}
