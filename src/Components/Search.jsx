import React from 'react'
import searchIcon from './../Assets/images/magnifying-glass-solid.svg'
export default function Search() {
  return (
    <div className="search-input">
        <img src={searchIcon}/>
        <input  type="search" placeholder="search"/>
    </div>
  )
}
