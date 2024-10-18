"use client";
import Navbar from "./Navbar";
import Location from "../atoms/Location";
import SearchArea from "../atoms/SearchArea";
import { usePathname } from "next/navigation";

export default function Header() {
	const route = usePathname();
	console.log(route);
	return (
		<header className="w-full pb-2 px-5">
			<Navbar />

			{/* WILL BE RENDERED ON A CONDITION  */}
			<p className="w-[80%] mx-auto text-2xl font-[600]">{2} new messages</p>

			{route !== "/message" && <Location />}
			<SearchArea route={route} />
		</header>
	);
}
