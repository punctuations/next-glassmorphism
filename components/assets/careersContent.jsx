import { motion } from "framer-motion";

const CareersContent = () => {
	return (
		<div className="text-white">
			<div className="ml-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
				deserunt quo et esse mollitia nesciunt consequuntur odio molestiae?
				Laudantium, optio? Officiis molestiae nemo unde delectus adipisci
				accusamus nostrum, iure hic voluptatum itaque obcaecati quos ullam ad
				numquam! Doloribus odio aperiam commodi rerum alias, ea in culpa officia
				aliquam ratione iste.
			</div>
			<br />
			<header className="ml-16 text-3xl">
				<h1>Position Name</h1>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					deserunt quo et esse mollitia nesciunt consequuntur odio molestiae?
					Laudantium, optio? Officiis molestiae nemo unde delectus adipisci
					accusamus nostrum, iure hic voluptatum itaque obcaecati quos ullam ad
					numquam! Doloribus odio aperiam commodi rerum alias, ea in culpa
					officia aliquam ratione iste.
				</p>
				<br />
				<h3 className="text-xl">Benfits:</h3>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					deserunt quo et esse mollitia nesciunt consequuntur odio molestiae?
					Laudantium, optio? Officiis molestiae nemo unde delectus adipisci
					accusamus nostrum, iure hic voluptatum itaque obcaecati quos ullam ad
					numquam! Doloribus odio aperiam commodi rerum alias, ea in culpa
					officia aliquam ratione iste.
				</p>
			</header>
			<footer className="flex justify-center items-center mt-16">
				<motion.button
					className="glass dark:glass-dark p-4 shadow-xl rounded-lg"
					whileHover={{ scale: 1.03 }}
				>
					Apply Now
				</motion.button>
			</footer>
		</div>
	);
};

export default CareersContent;
