import Main from "../components/main.jsx";
import Nav from "../components/nav.jsx";
import Content from "../components/content.jsx";

export default function Home() {
	return (
		<>
			<main className="w-screen h-screen bg-orange-400 bg-image dark:bg-image flex items-center justify-center">
				<Main>
					<Nav name="Lorem Ipsum" logo="/favicon.ico" />
					<Content type="home" />
				</Main>
			</main>
		</>
	);
}
