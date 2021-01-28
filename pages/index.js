import Main from "../components/assets/main.jsx";
import Nav from "../components/assets/nav.jsx";
import Content from "../components/assets/content.jsx";

export default function Home() {
	return (
		<>
			<main className="w-screen h-screen bg-orange-400 bg-image dark:bg-image flex items-center justify-center overflow-y-auto">
				<Main>
					<Nav name="Lorem Ipsum" logo="/favicon.ico" />
					<Content type="home" />
				</Main>
			</main>
		</>
	);
}
