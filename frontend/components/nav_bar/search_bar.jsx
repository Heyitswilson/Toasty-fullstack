import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div >
                <input className="search-bar" type="text" value="Search for items"/>
            </div>
        )
    }
}

export default SearchBar