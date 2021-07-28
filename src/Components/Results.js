import React from 'react';
import Quotecard from './Quotecard';

const Results = ({ data }) => {
	return (
		<div>
			{!data.length ? (
				<div className="bg-gray-900">
					<h2 className="text-white">Enter your character's name and press submit!</h2>
				</div>
			) : (
				data.map(foo => (
					<Quotecard
						anime={foo.anime}
						character={foo.character}
						quote={foo.quote}
						key={ Math.random().toString(36).substr(2, 9) }
					/>
				))
			)}
		</div>
	);
};

export default Results;
