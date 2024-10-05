"use client";
import Link from "next/link";
import MenuBtn from "../atoms/MenuBtn";
import { useState } from "react";

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	function handleNavClick() {
		setIsNavOpen(!isNavOpen);
	}
	return (
		<div className="flex justify-start items-center max-w-l  px-4 py-2  border-[#008000] border-b text-2xl sm:text-3xl">
			<MenuBtn handleNavClick={handleNavClick} />
			<div className="w-full ">
				<p className="text-[#008000] text-center">
					{" "}
					pyr<span className="text-[black]">a</span>myd
				</p>
			</div>

			{isNavOpen && (
				<div
					className="absolute w-screen h-screen top-0 left-0 z-10 bg-gray-50/25"
					onClick={handleNavClick}>
					<div className="relative bg-white w-72 h-screen p-2">
						<p className="capitalize bold text-right ">Abdulazeez MAestro</p>
						<ul className="flex flex-col gap-2 py-4 text-2xl">
							<li className="cursor-pointer pl-4">
								<Link href="/">My Community</Link>
							</li>
							<li className="cursor-pointer pl-4">
								<Link href="/">Saved</Link>
							</li>
							<li className="cursor-pointer pl-4">
								<Link href="/">Store Owners</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
