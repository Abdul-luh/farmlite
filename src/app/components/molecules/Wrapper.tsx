import Header from "./Header";
import Footer from "./Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen h-full max-w-screen gap-6 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<div className="pb-8 flex-1">{children}</div>
			<Footer />
		</div>
		// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		// 	<Navbar />
		// </div>
	);
}
