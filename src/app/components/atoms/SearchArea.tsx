"use client";
import { CiSearch } from "react-icons/ci";
import CartBtn from "./CartBtn";
import { ChangeEvent, useState } from "react";

export default function SearchArea({ route }: { route: string }) {
	const [search, setSearch] = useState("");

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		console.log(search);
	};

	console.log(route);
	const msgRoute = route === "/message";
	const shareRoute = route === "/sharebuy";
	// const notificationRoute = route === "/notification";
	return (
		<div className="flex flex-col justify-between gap-8 w-[80%] p-2 shadow-inner shadow-gray-400 mx-auto">
			<div className={`flex justify-between gap-2 w-full`}>
				<div
					className={`flex items-center rounded-full p-1 w-full ${
						msgRoute && shareRoute
							? "bg-[#008000] text-white flex-row-reverse"
							: " bg-gray-300 text-[#008000] "
					}`}>
					<CiSearch className="text-2xl font-bold" />
					<input
						type="text"
						placeholder="search"
						name="search"
						onChange={handleSearch}
						className={`bg-transparent h-full w-full rounded-full sm:text-2xl  outline-[#008000] py-1 px-2 focus:outline-none ${
							msgRoute && shareRoute
								? "text-white placeholder:text-white"
								: "text-[#008000]"
						} `}
					/>
				</div>
				{!msgRoute && !shareRoute && <CartBtn />}
				{shareRoute && (
					<div className="text-[#008000] capitalize flex flex-nowrap gap-2 items-center justify-evenly">
						<label htmlFor="status">status</label>
						<input
							type="radio"
							name="status"
							checked
							className={"checked:outline-[#008000]"}
						/>
					</div>
				)}
			</div>

			{msgRoute && (
				<div className="flex justify-between">
					<p>Total friends: {6}</p>
					<p className="font-[600]">Unread: {0}</p>
				</div>
			)}

			{shareRoute && (
				<div className="">
					<p>Sharer Available: {6}</p>
				</div>
			)}
		</div>
	);
}
