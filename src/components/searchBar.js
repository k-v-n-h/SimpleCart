import React from 'react'

const SearchBar = ({ keyword, setKeyword }) => {
    const BarStyling = { width: "", background: "#F2F1F9", border: "transparent", padding: "1.5rem", outline: 'none'};
    return (
        <div className='pr-12 text-right border-transparent pt-8 '>
            <input
                className='w-4/5 h-12 bg-gray-300 rounded-r-lg rounded-l-lg shadow-md'
                style={BarStyling}
                key="random1"
                value={keyword}
                placeholder={"Search"}
            // onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    );
}

export default SearchBar