import React from "react";
import { CgProfile } from "react-icons/cg";
import MsgBtn from "./MsgBtn";
import AddBtn from "./AddBtn";

export default function ContactList({
	title,
	name,
	route,
	type,
	message,
}: {
	title?: string;
	name: string;
	route: string;
	type?: string;
	message?: string;
}) {
	const msgRoute = route === "/message";
	const notificationRoute = route === "/notification";

	return (
		<div className="flex justify-between items-center w-full border border-gray-800 py-3 px-2">
			<div className="flex items-center gap-2 text-2xl">
				<CgProfile className="text-4xl" />
				<div>
					<p className="font-bold text-3xl">{title}</p>
					<p className="font-bold">{type}</p>
					<p className="">{type ? "Hello " + name : name}</p>
					<p className="">{message}</p>
				</div>
			</div>

			<div className="flex gap-2">
				{!notificationRoute && <MsgBtn />}
				{!msgRoute && !notificationRoute && <AddBtn />}
			</div>
		</div>
	);
}
