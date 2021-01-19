import Link from "next/link";
import navContent from "../components/navContent";

const Nav = ({ name, logo }) => {
	return (
		<div className="flex flex-row justify-evenly items-center h-16 w-full">
			<Link href="/">
				<div className="duration-500 transition-opacity inline-flex items-center cursor-pointer hover:opacity-75">
					<img src={logo} />
					<header className="text-3xl font-medium name">{name}</header>
				</div>
			</Link>

			{navContent.map((content) => {
				return (
					<div className="duration-500 transition-opacity text-white text-xl opacity-75 hover:opacity-100">
						<Link href={content.toLowerCase().split(" ")[0]}>{content}</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Nav;
