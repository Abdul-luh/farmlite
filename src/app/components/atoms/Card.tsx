import Image from "next/image";

export default function Card({
	imgSrc,
	name,
	title,
	price,
	minAmount,
	className,
}: {
	imgSrc: string;
	name?: string;
	title?: string;
	price?: string;
	minAmount?: string;
	className?: string;
}) {
	return (
		<div
			className={`py-1 px-2 flex flex-col items-center  border border-gray-500 ${className}  ${
				!name && " bg-[#C4C4C4]"
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
