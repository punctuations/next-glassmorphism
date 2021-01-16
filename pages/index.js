import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		var c = document.getElementById("canv");
		var $ = c.getContext("2d");

		let col = function (x, y, r, g, b) {
			$.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
			$.fillRect(x, y, 1, 1);
		};
		let R = function (x, y, t) {
			return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
		};

		let G = function (x, y, t) {
			return Math.floor(
				192 +
					64 *
						Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
			);
		};

		let B = function (x, y, t) {
			return Math.floor(
				192 +
					64 *
						Math.sin(
							5 * Math.sin(t / 9) +
								((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
						)
			);
		};

		let t = 0;

		const run = function () {
			for (let x = 0; x <= 35; x++) {
				for (let y = 0; y <= 35; y++) {
					setTimeout(() => {
						col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
					}, 1000);
				}
			}
			t = t + 0.12;
			window.requestAnimationFrame(run);
		};

		run();
	}, []);

	return (
		<>
			<canvas
				id="canv"
				width="32"
				height="32"
				className="absolute w-screen h-screen"
			/>

			<main className="w-screen h-screen flex items-center justify-center">
				<section className="flex glass p-8 m-6 rounded-xl w-1/2 h-1/2 shadow-sm">
					foo bar
				</section>
			</main>
		</>
	);
}
