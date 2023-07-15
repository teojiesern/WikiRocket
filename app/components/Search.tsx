"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/${search}/`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-50 flex justify-center md:justify-between"
        >
            <input
                type="text"
                value={search}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-xl p-2 text-xl"
            />
            <button className="text-xl p-2 bg-slate-300 ml-2 rounded-xl font-bold">🚀</button>
        </form>
    );
}
