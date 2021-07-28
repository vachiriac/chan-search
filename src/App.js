import './App.css';
import Search from './Components/Search';

function App() {
	return (
		<div className="App flex flex-col bg-gray-900 h-screen">
			<h1 className=" text-7xl mt-32 text-white">Chan Search</h1>
			<h2 className="mt-6 text-2xl text-white">
				Search your favourite anime character quotes!
			</h2>
			<div className="pt-16">
				<Search />
			</div>
			<div className="bg-gray-900">
				<h3 className="p-6 text-white">
					Made with 💗 by{' '}
					<a href="https://github.com/zapacitu18/" >Chiriac Andrei</a>
				</h3>
			</div>
		</div>
	);
}

export default App;
