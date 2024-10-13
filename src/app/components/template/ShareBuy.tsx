"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Wrapper from "../molecules/Wrapper";
import ContactList from "../atoms/ContactList";

export default function ShareBuyTemp() {
	const names = ["Ali Musa", "Precious", "Mummy Deborah", "Kola", "Hajia"];
	const route = usePathname();

	return (
		<Wrapper>
			{names.map((name, index) => (
				<ContactList name={name} key={index} route={route} />
			))}
		</Wrapper>
	);
}
