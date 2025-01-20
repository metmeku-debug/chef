import { useState } from "react";

export default function Example() {
    const simparr = [1, 2, 3, 4, 5];
    const [statearr, setStatearr] = useState([]);
    const statearrView = statearr.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    function clickhandler() {
        setStatearr((prevarrstate) => {
            let indexToAdd = prevarrstate.length;
            let val = simparr[indexToAdd];
            return [...prevarrstate, val];
        })
    }

    return (
        <div>
            <button onClick={clickhandler}>Add Item</button>
            <ul>{statearrView}</ul>
        </div>
    )    
}