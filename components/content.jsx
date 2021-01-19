import HomeContent from "../components/homeContent.jsx";
import AboutContent from "../components/aboutContent.jsx";

const Content = ({ type }) => {
	switch (type) {
		case "home":
			return (
				<div className="absolute top-1/4">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum</span>
							<p className="relative left-1/4">
								An easy way to{" "}
								<span className="keyword bg-gradient-to-tr to-purple-500 from-pink-500 font-medium tracking-tighter">
									Innovate
								</span>
							</p>
							<summary className="relative left-4 text-gray-300 text-xl">
								A simple glassmorphism boilerplate ui
							</summary>
						</div>
					</header>
					<br />
					<HomeContent />
				</div>
			);
		case "about":
			return (
				<div className="absolute top-1/4">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum</span>
							<p className="relative left-1/4">
								About{" "}
								<span className="keyword bg-gradient-to-tr to-purple-500 from-pink-500 font-medium tracking-tighter">
									us
								</span>
							</p>
							<summary className="relative left-4 text-gray-300 text-xl">
								A simple glassmorphism boilerplate ui
							</summary>
						</div>
					</header>
					<br />
					<AboutContent />
				</div>
			);
		case "pricing":
			return (
				<div className="absolute top-1/4">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum</span>
							<p className="relative left-1/4">
								About{" "}
								<span className="keyword bg-gradient-to-tr to-purple-500 from-pink-500 font-medium tracking-tighter">
									us
								</span>
							</p>
						</div>
					</header>
					<br />
				</div>
			);
		case "features":
			return (
				<div className="absolute top-1/4">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum</span>
							<p className="relative left-1/4">
								About{" "}
								<span className="keyword bg-gradient-to-tr to-purple-500 from-pink-500 font-medium tracking-tighter">
									us
								</span>
							</p>
						</div>
					</header>
					<br />
				</div>
			);
		case "careers":
			return (
				<div className="absolute top-1/4">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum</span>
							<p className="relative left-1/4">
								About{" "}
								<span className="keyword bg-gradient-to-tr to-purple-500 from-pink-500 font-medium tracking-tighter">
									us
								</span>
							</p>
						</div>
					</header>
					<br />
				</div>
			);
	}
};

export default Content;
