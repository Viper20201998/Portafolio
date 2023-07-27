import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<About />
			<Services />
			<Portfolio />
			<Footer />
		</>
	);
}

export default App;
