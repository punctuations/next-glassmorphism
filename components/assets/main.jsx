import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Main = ({ children }) => {
	const router = useRouter();
	const path = router.pathname;

	if (path != "/") {
		if (Math.round(Math.random()) == 0) {
			return (
				<motion.section
					initial={{
						x: -40,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
						transition: {
							duration: 0.6,
							delay: 0.1,
							ease: [0.48, 0.15, 0.25, 0.96],
						},
					}}
					id="main"
					className="overflow-auto flex flex-col glass p-8 m-6 rounded-xl 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-screen 2xl:h-3/4 xl:h-3/4 lg:h-3/4 sm:h-3/4 h-screen shadow-sm"
				>
					{children}
				</motion.section>
			);
		} else {
			return (
				<motion.section
					initial={{
						x: 40,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
						transition: {
							duration: 0.6,
							delay: 0.1,
							ease: [0.48, 0.15, 0.25, 0.96],
						},
					}}
					id="main"
					className="overflow-auto flex flex-col glass p-8 m-6 rounded-xl 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-screen 2xl:h-3/4 xl:h-3/4 lg:h-3/4 sm:h-3/4 h-screen shadow-sm"
				>
					{children}
				</motion.section>
			);
		}
	} else {
		return (
			<motion.section
				initial={{
					y: 40,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
					transition: {
						duration: 0.6,
						delay: 0.1,
						ease: [0.48, 0.15, 0.25, 0.96],
					},
				}}
				id="main"
				className="overflow-auto flex flex-col glass p-8 m-6 rounded-xl 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-screen 2xl:h-3/4 xl:h-3/4 lg:h-3/4 sm:h-3/4 h-screen shadow-sm"
			>
				{children}
			</motion.section>
		);
	}
};

export default Main;
