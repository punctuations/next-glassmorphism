import { motion } from "framer-motion";

const CareersContent = () => {
	return (
		<div className="text-white">
			<div className="ml-8 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
				deserunt quo et esse mollitia nesciunt consequuntur odio molestiae?
				Laudantium, optio? Officiis molestiae nemo unde delectus adipisci
				accusamus nostrum, iure hic voluptatum itaque obcaecati quos ullam ad
				numquam! Doloribus odio aperiam commodi rerum alias, ea in culpa officia
				aliquam ratione iste.
			</div>
			<br />
			<header className="ml-16 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl sm:text-xl text-lg">
				<h1>Position Name</h1>
				<p className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					deserunt quo et esse mollitia nesciunt consequuntur odio molestiae?
					Laudantium, optio? Officiis molestiae nemo unde delectus adipisci
					accusamus nostrum, iure hic voluptatum itaque obcaecati quos ullam ad
					numquam! Doloribus odio aperiam commodi rerum alias, ea in culpa
					officia aliquam ratione iste.
				</p>
				<br />
				<h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md">
					Benfits:
				</h3>
				<p className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					deserunt quo et esse mollitia nesciunt consequuntur odio molestiae?
					Laudantium, optio? Officiis molestiae nemo unde delectus adipisci
					accusamus nostrum, iure hic voluptatum itaque obcaecati quos ullam ad
					numquam! Doloribus odio aperiam commodi rerum alias, ea in culpa
					officia aliquam ratione iste.
				</p>
			</header>
			<footer className="flex justify-center items-center 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-12 sm:mt-12 mt-10">
				<motion.button
					className="glass dark:glass-dark 2xl:p-4 xl:p-4 lg:p-4 md:p-3 sm:p-3 p-2 2xl:shadow-xl xl:shadow-xl lg:shadow-xl md:shadow-lg sm:shadow-lg shadow-md 2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-md sm:rounded-md rounded-sm"
					whileHover={{ scale: 1.03 }}
				>
					Apply Now
				</motion.button>
			</footer>
		</div>
	);
};

export default CareersContent;
