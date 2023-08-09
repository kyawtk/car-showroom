"use client";
import   SearchManufactures from "./SearchManufactures";

import {useState} from 'react'
const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacture, setManufacture]  = useState('')
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufactures manufacturer={manufacture} setManufacturer={setManufacture}/>
      </div>
    </form>
  );
};

export default SearchBar;


const SearchButton =()=>{
  return <button type=""></button>
}