import { motion } from "framer-motion";

import Tiers from "../../components/core/tiers.json";

const PricingContent = () => {
	const tiers = [];

	{
		for (const i in Tiers.tiers) {
			tiers.push(
				<div
					key={i}
					className="justify-center 2xl:items-stretch xl:items-stretch lg:items-stretch md:items-stretch sm:items-stretch items-center flex flex-col flex-grow cursor-default"
				>
					{Tiers.tiers[i].featured ? (
						<p className="2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs">
							Featured
						</p>
					) : (
						""
					)}
					<header className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl sm:text-xl text-lg 2xl:my-2 xl:my-2 lg:my-2 md:my-2 sm:my-1 my-0.5">
						{Tiers.tiers[i].title}
					</header>
					<div className="2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-base text-sm text-gray-200 2xl:my-2 xl:my-2 lg:my-2 md:my-2 sm:my-1 my-0.5">
						{Tiers.tiers[i].symbol}
						<span className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-lg">
							{Tiers.tiers[i].price} {Tiers.tiers[i].currency}
						</span>{" "}
						<span className="text-gray-300 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs">
							{Tiers.tiers[i].interval}
						</span>
					</div>
					<hr className="2xl:my-2 xl:my-2 lg:my-2 md:my-2 sm:my-1 my-0.5 border-gray-300" />
					<div className="flex flex-col items-center">
						<p className="text-gray-400 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
							{Tiers.tiers[i].description}
						</p>
					</div>
					<motion.button
						className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs 2xl:my-2 xl:my-2 lg:my-2 md:my-2 sm:my-1 my-0.5 2xl:p-2 xl:p-2 lg:p-2 md:p-1.5 sm:p-1.5 p-1 glass dark:glass-dark 2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-md sm:rounded-md rounded-sm"
						whileHover={{
							scale: 1.03,
							transition: {
								ease: "easeInOut",
							},
						}}
					>
						Choose Plan
					</motion.button>
				</div>
			);
		}
	}

	return (
		<div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col justify-center">
			{tiers.map((content, i) => {
				return (
					<>
						{Tiers.tiers[i].featured ? (
							<motion.div
								href="#"
								className="rounded-lg shadow-xl 2xl:my-0 xl:my-0 lg:my-0 md:my-0 sm:my-0 my-1 2xl:mx-4 xl:mx-4 lg:mx-4 md:mx-2 sm:mx-1 mx-1 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-1.5 glass dark:glass-dark text-white border-yellow-400"
								key={i}
								style={{ scale: 1.035 }}
								initial={{
									y: 20,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
									transition: {
										duration: 0.6,
										delay: 0.15 + (i / 100 + 0.05) * 5,
										ease: [0.48, 0.15, 0.25, 0.96],
									},
								}}
								whileHover={{
									scale: 1.045,
									transition: {
										ease: "easeInOut",
									},
								}}
							>
								{content}
							</motion.div>
						) : (
							<motion.div
								href="#"
								className="rounded-lg shadow-xl 2xl:my-0 xl:my-0 lg:my-0 md:my-0 sm:my-0 my-1 2xl:mx-4 xl:mx-4 lg:mx-4 md:mx-2 sm:mx-1 mx-1 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-2 p-2 glass dark:glass-dark text-white"
								key={i}
								initial={{
									y: 20,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
									transition: {
										duration: 0.6,
										delay: 0.15 + (i / 100 + 0.05) * 5,
										ease: [0.48, 0.15, 0.25, 0.96],
									},
								}}
								whileHover={{
									scale: 1.03,
									transition: {
										ease: "easeInOut",
									},
								}}
							>
								{content}
							</motion.div>
						)}
					</>
				);
			})}
		</div>
	);
};

export default PricingContent;
