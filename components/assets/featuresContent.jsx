import { motion } from "framer-motion";

import Features from "../../components/core/features.json";

const FeaturesContent = () => {
	const features = [];

	{
		for (const i in Features.features) {
			features.push(
				<div
					key={i}
					className="justify-center flex flex-col flex-grow cursor-default"
				>
					<header className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-lg 2xl:my-2 xl:my-2 lg:my-2 md:my-2 sm:my-1 my-0.5">
						{Features.features[i].title}
					</header>
					<hr className="my-2 border-gray-300" />
					<p className="text-gray-400 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
						{Features.features[i].description}
					</p>
					<motion.button
						className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs 2xl:my-2 xl:my-2 lg:my-2 md:my-2 sm:my-1 my-0.5 2xl:p-2 xl:p-2 lg:p-2 md:p-1.5 sm:p-1.5 p-1 glass dark:glass-dark 2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-md sm:rounded-md rounded-sm"
						whileHover={{
							scale: 1.03,
							transition: {
								ease: "easeInOut",
							},
						}}
					>
						Learn More
					</motion.button>
				</div>
			);
		}
	}

	return (
		<div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-center">
			{features.map((content, i) => {
				return (
					<>
						<motion.div
							href="#"
							className="rounded-lg shadow-xl 2xl:mx-4 xl:mx-4 lg:mx-4 md:mx-2 sm:mx-1 mx-1 2xl:my-0 xl:my-0 lg:my-0 md:my-2 sm:my-1.5 my-1 2xl:p-5 xl:p-5 lg:p-5 md:p-4 sm:p-2 p-2 glass dark:glass-dark text-white"
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
								scale: 1.02,
								transition: {
									ease: "easeInOut",
								},
							}}
						>
							{content}
						</motion.div>
					</>
				);
			})}
		</div>
	);
};

export default FeaturesContent;
