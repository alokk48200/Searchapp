import { useState } from "react";
import Card from "./Faker";
import SuggestionData from "./SuggestionData";

import Data from './Data'

const Header=()=>{
    const [inputText, setInputText]=useState('');
    const [search, setSearch]=useState(false);
    const card=[];
    for(var i=0;i<10;i++){
        card.push(Card);
    }
    
    function a(e){
        setSearch(true);
        setInputText(e.target.value);
        
    }
    function b(e){
        setSearch(false);
        setInputText('');
        
    }
    function a1(e){
        
        setInputText(e.target.value);
        setSearch(true);
    }
    function d(){
          setSearch(true)
    }
    return(
        <>
        <div className="cart" onMouseDown={b}>
        {<input id="input" type="text" value={inputText} onChange={a1} onMouseEnter={a} onMouseLeave={b} onClick={d}/>}
            <button>SearchData</button>

        
        </div>
          { search?<SuggestionData/>:<Data/>}

        </>
    )
}
export default Header;