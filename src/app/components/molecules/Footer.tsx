import { AiFillMessage } from "react-icons/ai";
import { FaUserFriends, FaBell } from "react-icons/fa";
import { LuHome } from "react-icons/lu";

export default function Footer() {
	return (
		<div className="absolute bottom-0 flex justify-evenly bg-[#008000] text-white text-2xl  w-full p-2">
			<LuHome />
			<FaUserFriends />
			<AiFillMessage />
			<FaBell />
		</div>
	);
}
