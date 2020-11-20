import React,{useState} from "react";

function SearchBar(props){


const [search, setSearch] = props.state;

function handleChange(event){
    setSearch(event.currentTarget.value);
}

return(

     <div className="form-group">
      <input
        onChange={handleChange}
        type="text"
        className="form-control"
        id="inptSearch"
        name="searchQuery"
        value={search}
        placeholder="Find a beer!"
      />
    </div>

)


}

export default SearchBar;