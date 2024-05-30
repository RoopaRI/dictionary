import React, {useState} from "react";
import "./Dictionary.css";
export default function Dictionary(){
    const dictionary=
    [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]
    
    const [input, setInput] = useState("");
    const [def, setDef] = useState("");

    const handleSearch = () => {
        const foundWord = dictionary.find((e)=>e.word.toLowerCase() === input.toLowerCase());

        if(foundWord){
            setDef(foundWord.meaning);
        }
        else{
            setDef("Word not found in the dictionary.");
        }
    }

    return(
        <div>
            <h1>Dictionary App</h1>
            <input 
                placeholder="Search for a word" 
                type="text"
                name="input" 
                value={input} 
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <h4>Definition:</h4>
            <p>{def}</p>
        </div>
        
    );
}