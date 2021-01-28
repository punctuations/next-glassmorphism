import Main from "../components/assets/main.jsx";
import Nav from "../components/assets/nav.jsx";
import Content from "../components/assets/content.jsx";

export default function Careers() {
	return (
		<>
			<main className="w-screen h-screen bg-orange-300 bg-image dark:bg-image flex items-center justify-center overflow-hidden">
				<Main>
					<Nav name="Lorem Ipsum" logo="/favicon.ico" />
					<Content type="careers" />
				</Main>
			</main>
		</>
	);
}
