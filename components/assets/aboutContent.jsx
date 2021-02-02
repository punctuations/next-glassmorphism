import { motion } from "framer-motion";

import Team from "../../components/core/team";

const AboutContent = () => {
	return (
		<div className="text-white">
			<div className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic
				totam perferendis, eius illum excepturi sint quos ad in qui. Alias
				aliquam voluptatibus, nulla molestiae voluptatum odio quae
				necessitatibus nemo.
			</div>
			<header className="flex justify-center items-center">
				<h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl name">
					Team
				</h2>
			</header>
			<div className="flex items-center justify-evenly">
				{Team.map((member, i) => {
					return (
						<motion.div
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
							className="mt-6 inline-flex rounded-lg glass dark:glass-dark shadow-2xl"
							key={i}
						>
							<a
								className="2xl:p-6 xl:p-6 lg:p-6 md:p-4 sm:p-4 p-2"
								href={`https://twitter.com/${member.split(",")[1]}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<figure className="py-4 flex flex-col items-center">
									<img
										className="2xl:w-20 xl:w-20 lg:w-20 md:w-16 sm:w-16 w-16 2xl:h-20 xl:h-20 lg:h-20 md:h-16 sm:h-16 h-16 rounded-full border-2 border-white"
										src={member.split(",")[2]}
										alt={member.split(",")[0]}
									/>
									<figcaption className="text-center 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
										{member.split(",")[0]}
									</figcaption>
									<figcaption className="text-gray-300 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
										Full-Stack JavaScript Engineer
									</figcaption>
								</figure>
							</a>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default AboutContent;
