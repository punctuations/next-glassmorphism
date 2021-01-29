import Link from "next/link";
import navContent from "../core/navContent";
import { Toggle } from "../core/Toggle";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ name, logo }) => {
	const [menuState, setMenuState] = useState(false);

	const [style, setStyle] = useState({
		backdropFilter: "",
		borderBottom: "",
	});

	useEffect(() => {
		window.addEventListener("resize", () => {
			window.innerWidth >= 1024 ? setMenuState(false) : "";
		});
	}, []);

	return (
		<>
			<div className="rounded-md nav-glass z-20 sticky top-0 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden flex-row justify-evenly items-center h-16 w-full shadow-sm">
				<Link href="/">
					<div className="duration-500 transition-opacity inline-flex items-center cursor-pointer hover:opacity-75">
						<img src={logo} />
						<header className="text-3xl font-medium name">{name}</header>
					</div>
				</Link>

				{navContent.map((content, i) => {
					return (
						<div
							className="duration-500 transition-opacity text-white text-xl opacity-75 hover:opacity-100"
							key={i}
						>
							<Link href={content.toLowerCase().split(" ")[0]}>{content}</Link>
						</div>
					);
				})}
				<Toggle />
			</div>

			<div className="rounded-md nav-glass z-20 sticky top-0 2xl:hidden xl:hidden lg:hidden md:flex sm:flex flex flex-row justify-evenly items-center h-16 w-full">
				<Link href="/">
					<div className="duration-500 transition-opacity inline-flex items-center cursor-pointer hover:opacity-75">
						<img src={logo} />
						<header className="text-3xl font-medium name">{name}</header>
					</div>
				</Link>
				<div
					className="glass dark:glass-dark p-2 rounded-md cursor-pointer select-none"
					onClick={() => setMenuState(!menuState)}
				>
					{menuState ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={20}
							height={20}
							stroke="white"
							className="opacity-75 hover:opacity-95"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={20}
							height={20}
							stroke="white"
							className="opacity-75 hover:opacity-95"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</div>
				<AnimatePresence initial={false}>
					{menuState && (
						<motion.div
							className="glass dark:glass-dark absolute p-3 rounded-lg -top-3/4 flex flex-row z-20"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
						>
							{navContent.map((content, i) => {
								return (
									<div
										className="mx-2 flex duration-500 transition-opacity text-white text-xl opacity-75 hover:opacity-100"
										key={i}
									>
										<Link href={content.toLowerCase().split(" ")[0]}>
											{content}
										</Link>
									</div>
								);
							})}
							<Toggle />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Nav;
