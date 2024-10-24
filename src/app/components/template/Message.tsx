"use client";
import { usePathname } from "next/navigation";
import ContactList from "../atoms/ContactList";
import Wrapper from "../molecules/Wrapper";

export default function MessageTemp() {
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
