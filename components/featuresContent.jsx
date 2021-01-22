import { motion } from "framer-motion";

import Features from "../components/features.json";

const FeaturesContent = () => {
	const features = [];

	{
		for (const i in Features.features) {
			features.push(
				<div className="justify-center flex flex-col flex-grow cursor-default">
					<header className="text-3xl my-2">
						{Features.features[i].title}
					</header>
					<hr className="my-2 border-gray-300" />
					<p className="text-gray-400">{Features.features[i].description}</p>
					<motion.button
						className="my-2 p-2 glass rounded-lg"
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
		<div className="flex flex-row justify-center">
			{features.map((content, i) => {
				return (
					<>
						<motion.div
							href="#"
							className="rounded-lg shadow-xl mx-4 p-4 glass text-white"
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

	return (
		<div className="flex flex-row flex-grow justify-center items-center">
			<div className="glass p-4 rounded-lg shadow-md text-white">Yo</div>
			<div className="glass p-4 rounded-lg shadow-md text-white">Yo</div>
			<div className="glass p-4 rounded-lg shadow-md text-white">Yo</div>
		</div>
	);
};

export default FeaturesContent;
