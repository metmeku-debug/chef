import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

export default function Response(props) {
    return (
        <div className="response">
                <section>
                    <h2>🍽️ The Food is Ready!!🍲</h2>
                    <ReactMarkdown>{props.response}</ReactMarkdown>
                    <h1 className="lastemoji">🍲</h1>
                </section>
        </div>
    )
}

Response.propTypes = {
    response: PropTypes.string.isRequired,
};       
