"use client";
import Navbar from "./Navbar";
import Location from "../atoms/Location";
import SearchArea from "../atoms/SearchArea";
import { usePathname } from "next/navigation";

export default function Header() {
	const route = usePathname();
	console.log(route);
	return (
		<header className="w-full pb-2">
			<Navbar />
			<Location />
			<SearchArea />
		</header>
	);
}
