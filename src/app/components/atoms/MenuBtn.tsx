import { TfiMenuAlt } from "react-icons/tfi";
export default function MenuBtn({
	handleNavClick,
}: {
	handleNavClick(): void;
}) {
	return (
		<div
			className="bg-[#008000] p-3 text-white font-bold"
			onClick={handleNavClick}>
			<TfiMenuAlt />
		</div>
	);
}
