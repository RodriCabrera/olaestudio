import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Studio from "./components/Studio/Studio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

function App() {
	return (
		<>
			<BrowserRouter basename="olaestudio">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/studio" component={Studio} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/project/:id" component={Project} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
