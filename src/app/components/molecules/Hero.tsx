import React from "react";
import SearchArea from "../atoms/SearchArea";
import CategoriesArea from "../molecules/CategoriesArea";

export default function Hero() {
	return (
		<div className="w-full bg-[url('/images/seeds.svg')">
			<SearchArea />
			<CategoriesArea />
		</div>
	);
}
