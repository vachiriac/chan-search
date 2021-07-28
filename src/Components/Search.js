import React from 'react';
import { useState } from 'react';
import Results from './Results.js';
const Search = () => {
	const [character, setCharacter] = useState('');
	const [quoteData, setQuoteData] = useState([]);




	async function requestQuote() {
		const res = await fetch(
			`https://animechan.vercel.app/api/quotes/character?name=${character}`
		);
		const json = await res.json();
		setQuoteData(json);
	}
	if (quoteData['error'] === "No related quotes found!") {
		alert("No related quotes found!");
		setQuoteData([]);
		setCharacter("");
	};




	return (
		<div className="Search-Params flex flex-col justify-center p-6 bg-gray-900	">
			<div className="flex flex-row justify-center">
				<form
					action=""
					onSubmit={e => {
						e.preventDefault();
						requestQuote();
					}}
				>
					<label htmlFor="character" className="mr-6">
						<input
							type="text"
							id="character"
							value={character}
							placeholder="Character"
							onChange={event => setCharacter(event.target.value)}
                            className="border-2 rounded px-4 py-2 border-indigo-600 placeholder-transparent::placeholder bg-gray-800 text-white"
						/>
					</label>
					<button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold lg:py-2 lg:px-4 rounded py-2 px-2">Submit</button>
				</form>
			</div>
			<div className="p-6">
				<Results data={quoteData}/>
			</div>
		</div>
	);
};

export default Search;
