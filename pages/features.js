import Main from "../components/assets/main.jsx";
import Nav from "../components/assets/nav.jsx";
import Content from "../components/assets/content.jsx";

export default function Features() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#f5bf7c" />
			</Head>
			<NextSeo
				title="features"
				titleTemplate="%s - glassmorphism"
				description="An easy way to Innovate"
				openGraph={{
					type: "website",
					url: "https://glassmorphism.vercel.app/features",
					title: "features - glassmorphism",
					description: "An easy way to Innovate",
					images: [
						{
							url:
								"https://www.albertwalicki.com/static/4202381f85c32dc451fd79c4177992c9/hero.png",
							width: "400px",
							height: "200px",
						},
					],
				}}
				twitter={{
					handle: "@atmattt",
					site: "@atmattt",
					cardType: "summary_large_image",
				}}
			/>
			<main className="w-screen h-screen bg-orange-400 dark:bg-black bg-image dark:bg-image-dark flex items-center justify-center transition-all duration-500 overflow-hidden">
				<Main>
					<Nav name="Lorem Ipsum" logo="/favicon.ico" />
					<Content type="features" />
				</Main>
			</main>
		</>
	);
}
