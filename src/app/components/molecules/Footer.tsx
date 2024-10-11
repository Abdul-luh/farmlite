import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaUserFriends, FaBell } from "react-icons/fa";
import { LuHome } from "react-icons/lu";

export default function Footer() {
	return (
		<footer className="sticky bottom-5 grid grid-cols-4 justify-evenly  bg-[#008000] text-white text-base sm:text-2xl text-center w-full p-2">
			<Link href="/" className="flex flex-col items-center">
				<LuHome />
				<p className="capitalize">Home</p>
			</Link>
			<Link href="/driver" className="flex flex-col items-center">
				<FaUserFriends />
				<p className="capitalize">Driver</p>
			</Link>
			<Link href="/message" className="flex flex-col items-center">
				<AiFillMessage />
				<p className="capitalize">Message</p>
			</Link>
			<Link href="/notification" className="flex flex-col items-center">
				<FaBell />
				<p className="capitalize">Notification</p>
			</Link>
		</footer>
	);
}
