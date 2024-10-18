"use client";
import React from "react";
import Wrapper from "../molecules/Wrapper";
import { usePathname } from "next/navigation";
import ContactList from "../atoms/ContactList";

export default function NotificationTemp() {
	const notifications = [
		{
			title: "Farmlite",
			name: "Abdulazeez",
			type: "Update",
			message: "Get our latest Christmas offer...",
		},
	];
	const route = usePathname();

	return (
		<Wrapper>
			{notifications.map((notification, index) => (
				<ContactList
					title={notification.title}
					name={notification.name}
					type={notification.type}
					message={notification.message}
					key={index}
					route={route}
				/>
			))}
		</Wrapper>
	);
}
