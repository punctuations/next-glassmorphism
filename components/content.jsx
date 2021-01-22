import HomeContent from "../components/homeContent.jsx";
import AboutContent from "../components/aboutContent.jsx";
import PricingContent from "../components/pricingContent.jsx";
import FeaturesContent from "../components/featuresContent.jsx";
import CareersContent from "../components/careersContent.jsx";

const Content = ({ type }) => {
	switch (type) {
		case "home":
			return (
				<div className="absolute top-1/4 mr-12">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum</span>
							<p className="relative left-1/4">
								An easy way to{" "}
								<span className="keyword bg-gradient-to-tr to-blue-500 from-orange-500 font-medium tracking-tighter">
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
								<span className="keyword bg-gradient-to-tr to-green-500 from-yellow-500 font-medium tracking-tighter">
									us
								</span>
							</p>
							<summary className="relative left-4 text-gray-300 text-xl">
								A simple boilerplate helping people for eons!
							</summary>
						</div>
					</header>
					<br />
					<AboutContent />
				</div>
			);
		case "pricing":
			return (
				<div className="absolute left-0 top-1/4 flex flex-col w-full justify-center items-center">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum - </span>
							<span className="keyword bg-gradient-to-tr to-green-400 from-indigo-500 font-medium">
								Pricing
							</span>
						</div>
					</header>
					<br />
					<PricingContent />
				</div>
			);
		case "features":
			return (
				<div className="absolute left-0 top-1/4 flex flex-col w-full justify-center items-center">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="name font-medium">Lorem Ipsum - </span>
							<span className="keyword bg-gradient-to-tr to-indigo-400 from-yellow-500 font-medium">
								Features
							</span>
						</div>
					</header>
					<br />
					<FeaturesContent />
				</div>
			);
		case "careers":
			return (
				<div className="absolute left-0 top-1/4 flex flex-col w-full justify-center items-center">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							<span className="keyword bg-gradient-to-tr to-indigo-500 from-green-500 font-medium tracking-tighter">
								Join
							</span>
							<span className="name font-medium"> Lorem Ipsum</span>
						</div>
					</header>
					<br />
					<CareersContent />
				</div>
			);
		default:
			return (
				<div className="absolute top-1/4">
					<header className="text-white flex text-4xl tracking-tight">
						<div className="font-normal">
							Please fix the cases in the switch statement located in
							/components/content.jsx
						</div>
					</header>
				</div>
			);
	}
};

export default Content;
