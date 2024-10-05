import React from "react";
import Navbar from "./Navbar";
import Location from "../atoms/Location";

export default function Header() {
	return (
		<header className="w-full pb-8">
			<Navbar />
			<Location />
		</header>
	);
}
