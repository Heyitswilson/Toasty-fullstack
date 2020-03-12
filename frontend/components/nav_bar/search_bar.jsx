import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <input className="search-bar" type="text" value="Search for items"/>
        )
    }
}

export default SearchBar