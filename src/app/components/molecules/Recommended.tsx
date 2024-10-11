import Card from "../atoms/Card";
import { catgs } from "../categories";

export default function Recommended() {
	return (
		<div className="py-4">
			<h1 className="py-2">Recommended</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-[1240px] mx-auto">
				{catgs.map((catg) => (
					<Card
						key={catg.name}
						imgSrc={catg.src}
						title={catg.title}
						minAmount={catg.minAmount}
						price={catg.price}
					/>
				))}
			</div>
		</div>
	);
}
