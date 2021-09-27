import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Estudio from "./components/Estudios/Estudio";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<Portfolio />
			<Estudio />
			<Footer />
		</>
	);
}

export default App;
