import React from "react";
import Navbar from "./Navbar";
import Location from "../atoms/Location";
import SearchArea from "../atoms/SearchArea";

export default function Header() {
	return (
		<header className="w-full pb-2">
			<Navbar />
			<Location />
			<SearchArea />
		</header>
	);
}
