import Image from "next/image";
import Card from "../atoms/Card";
export default function CategoriesArea() {
	const catgs = [
		{ src: "corn.svg", name: "corn" },
		{ src: "fruits.svg", name: "fruits" },
		{ src: "bag-of-rice.svg", name: "rice" },
	];
	return (
		<div className="overflow-x-hidden w-full">
			<h1>Categories</h1>

			{/* CATEGORIES CARD CONTAINER  */}
			<div className="overflow-x-scroll flex justify-start items-start gap-3 py-2">
				{/* CATEGORIES CARDS  */}

				{catgs.map((catg) => (
					<Card key={catg.name} imgSrc={catg.src} name={catg.name} />
				))}
			</div>
		</div>
	);
}
