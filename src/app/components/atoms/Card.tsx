import Image from "next/image";

export default function Card({
	imgSrc,
	name,
	title,
	price,
	minAmount,
}: {
	imgSrc: string;
	name?: string;
	title?: string;
	price?: string;
	minAmount?: string;
}) {
	return (
		<div
			className={`p-1 min-w-[200px] flex flex-col items-center  ${
				!name && " border border-gray-500"
			}`}>
			<Image
				className="object-contain h-[250px] w-[200px]"
				src={`/images/${imgSrc}`}
				alt={name || ""}
				width={250}
				height={250}
			/>
			{name && (
				<p className="text-center capitalize text-2xl text-[#008000]">{name}</p>
			)}
			<div className="py-2">
				{title && <p>{title}</p>}
				{price && <p className="font-bold">#{price}</p>}
				{minAmount && <p>{minAmount}</p>}
			</div>
		</div>
	);
}
