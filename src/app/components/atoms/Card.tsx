import Image from "next/image";

export default function Card({
	imgSrc,
	name,
}: {
	imgSrc: string;
	name: string;
}) {
	return (
		<div className="p-1 min-w-[250px]">
			<Image
				className="object-contain h-[250px] w-[250px]"
				src={`/images/${imgSrc}`}
				alt={name}
				width={250}
				height={250}
			/>
			<p className="text-center capitalize text-2xl text-[#008000]">{name}</p>
		</div>
	);
}
