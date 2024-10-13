import React from "react";
import { CgProfile } from "react-icons/cg";
import MsgBtn from "./MsgBtn";
import AddBtn from "./AddBtn";

export default function ContactList({
	name,
	route,
}: {
	name: string;
	route: string;
}) {
	const msgRoute = route === "/message";

	return (
		<div className="flex justify-between items-center w-full border border-gray-800 py-3 px-2">
			<div className="flex items-center gap-2 text-2xl">
				<CgProfile className="text-4xl" />
				<p>{name}</p>
			</div>

			<div className="flex gap-2">
				<MsgBtn />
				{!msgRoute && <AddBtn />}
			</div>
		</div>
	);
}
