import Card from "../atoms/Card";
import { catgs } from "../categories";
export default function CategoriesArea() {
	return (
		<div className="overflow-x-hidden w-full">
			<h1 className="">Categories</h1>

			{/* CATEGORIES CARD CONTAINER  */}
			<div className="overflow-x-scroll w-full flex justify-start items-start gap-3 px-2 py-2">
				{/* CATEGORIES CARDS  */}

				{catgs.map((catg) => (
					<Card
						key={catg.name}
						imgSrc={catg.src}
						name={catg.name}
						className="min-w-[200px]"
					/>
				))}
			</div>
		</div>
	);
}
