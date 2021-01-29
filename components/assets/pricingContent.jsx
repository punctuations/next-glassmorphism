import { motion } from "framer-motion";

import Tiers from "../../components/core/tiers.json";

const PricingContent = () => {
	const tiers = [];

	{
		for (const i in Tiers.tiers) {
			tiers.push(
				<div
					key={i}
					className="justify-center flex flex-col flex-grow cursor-default"
				>
					<header className="text-3xl my-2">{Tiers.tiers[i].title}</header>
					<div className="text-lg text-gray-200 my-2">
						{Tiers.tiers[i].symbol}
						<span className="text-2xl">
							{Tiers.tiers[i].price} {Tiers.tiers[i].currency}
						</span>{" "}
						<span className="text-gray-300 text-sm">
							{Tiers.tiers[i].interval}
						</span>
					</div>
					<hr className="my-2 border-gray-300" />
					<div className="flex flex-col items-center">
						<p className="text-gray-400">{Tiers.tiers[i].description}</p>
					</div>
					<motion.button
						className="my-2 p-2 glass dark:glass-dark rounded-lg"
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
		<div className="flex flex-row justify-center">
			{tiers.map((content, i) => {
				return (
					<>
						{Tiers.tiers[i].featured ? (
							<motion.div
								href="#"
								className="flex flex-col cursor-default rounded-lg shadow-xl mx-4 p-4 glass dark:glass-dark text-white border-yellow-400"
								key={i}
								style={{ scale: 1.03 }}
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
								<p>Featured</p>
								{content}
							</motion.div>
						) : (
							<motion.div
								href="#"
								className="rounded-lg shadow-xl mx-4 p-4 glass dark:glass-dark text-white"
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
