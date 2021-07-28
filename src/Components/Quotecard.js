import React from 'react'

const Quotecard = ({anime, character, quote}) => {
    return (
        <div className="w-auto bg-white p-6 m-6 rounded-xl border-2 border-indigo-600">
            <h1 className="font-semibold text-lg">{character}</h1>
            <h2 className="text-base text-gray-500">{anime}</h2>
            <h1 className="pt-6">{quote}</h1>
        </div>
    )
}

export default Quotecard
