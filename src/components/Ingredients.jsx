import PropTypes from 'prop-types';
export default function Ingredients({ingridientList, ingridients, handleAnalyze}) {

    return (
        <div className="listOfIngridients">
            <h2>Ingredients You Have:</h2>
            <ul>{ingridientList}</ul>
            {ingridients.length >= 4 ?
                <section className="actionSection">
                    <div className="actiontext">
                        <h2>Ready for a recipe ?</h2>
                        <p>Generate a recipe from your ingredients</p>
                    </div>
                    <button onClick={handleAnalyze}>Get a recipe</button>
                </section>
                :
                <div className="notfouryet"><div className="container"><p>Add atleast 4 ingredients.</p></div></div>
            }
        </div>
    )
}
Ingredients.propTypes = {
    ingridientList: PropTypes.node.isRequired,
    ingridients: PropTypes.array.isRequired,
    handleAnalyze: PropTypes.func.isRequired,
};