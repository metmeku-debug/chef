import { useState } from "react";
import query from "./query";
import Response from "./Response";
import Loading from "./Loding";
import Ingredients from "./Ingredients";
import Noingredient from "./Noingredient";

export default function Main() {

    const [ingridients, setIngridients] = useState([]);
    const [forminput, setForminput] = useState("");
    const [isloading, setIsloading] = useState(false);
    const [response, setResponse] = useState(null);

    function formSubmitHandler(event) {
        setResponse(null);
        event.preventDefault();
        const index = ingridients.indexOf(forminput);
        if (index !== -1) {
            alert("This ingredient is already added.");
            return;
        }
        setIngridients([...ingridients, forminput]);
        setForminput("");
    }
    function inputChangeHandler(event) {
        setForminput(event.target.value);
    }

    const handleAnalyze = async () => {
        setIsloading(true);
        try {
            const ingredientsSent = ingridients.join("\n");
            const res = await query(ingredientsSent);
            setResponse(res);
            setIsloading(false);
            setIngridients([]);
        } catch (err) {
            console.error(err);
            setResponse("An error occured. Please try again later.");
            setIsloading(false);
        }
    };

    const ingridientList = ingridients.map((ingridient, index) => {
        return <li key={index}>{ingridient}</li>
    })

    const ingredientsinput = !isloading ?
    !response ? 
    ingridients.length > 0 ? 
    <Ingredients ingridientList={ingridientList} ingridients={ingridients} handleAnalyze={handleAnalyze} />: 
    <Noingredient /> : <Response response={response} key = {response}/>
    : <Loading />
    

    return (
        <main>
            <form className="ingridientform" onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    aria-label="Ingridient"
                    placeholder="eg. 1 cup of flour"
                    name="ingridient"
                    onChange={inputChangeHandler}
                    value={forminput}
                />
                <button type="submit">+ Add Ingridient</button>
            </form>
            <div>{ingredientsinput}</div>
        </main>
    )
}