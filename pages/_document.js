import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" className="w-screen h-screen overflow-y-auto">
				<Head />
				<body className="w-screen h-screen overflow-y-auto">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
