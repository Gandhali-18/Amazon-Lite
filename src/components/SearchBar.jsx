import { useState } from "react";
import "../styles/searchbar.css";

export default function SearchBar() {
  const [item, setItem] = useState("");
  const [search , setSearch] = useState("");
  const listItem = [
    {id:1 , opt: "All"},
    {id:2 , opt: "All Categories"},
    {id:3 , opt: "Amazon Fashion"},
    {id:4, opt:"Amazon Devices"},
    {id:5 , opt:"Amazon Fresh"},
    {id:6, opt: "Amazon Fresh Meat"},
    {id:7, opt: "Amazon Pharmacy"},
    {id:8, opt: "Appliances"},
    {id:9, opt:"Apps & Games"},
    {id:10, opt:"Audio ebooks"},
    {id:11, opt:"Baby"},
    {id:12, opt:"Beauty"},
    {id:13, opt:"Books"},
    {id:14, opt:"Car and Motorbike"},
    {id:15, opt:"Clothing and Accesories"}
  ];

  return (
    <div className="searchbar">
      <div className="inputs">
        <select onChange={(e) => setItem(e.target.value)}>
          {listItem.map((elem) => (
            <option key={elem.id} value={elem.opt}>
              {elem.opt}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Search Amazon.in" value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    </div>
  );
}
