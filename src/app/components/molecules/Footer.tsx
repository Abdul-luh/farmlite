import { AiFillMessage } from "react-icons/ai";
import { FaUserFriends, FaBell } from "react-icons/fa";
import { LuHome } from "react-icons/lu";

export default function Footer() {
	return (
		<div className="sticky bottom-0 grid grid-cols-4 justify-evenly  bg-[#008000] text-white text-2xl  w-full p-2">
			<div className="flex flex-col items-center">
				<LuHome />
				<p className="capitalize">Home</p>
			</div>
			<div className="flex flex-col items-center">
				<FaUserFriends />
				<p className="capitalize">Driver</p>
			</div>
			<div className="flex flex-col items-center">
				<AiFillMessage />

				<p className="capitalize">Message</p>
			</div>
			<div className="flex flex-col items-center">
				<FaBell />

				<p className="capitalize">Notification</p>
			</div>
		</div>
	);
}
