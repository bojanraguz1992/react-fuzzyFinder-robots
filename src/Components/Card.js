import React from 'react';

// ES6 destructuring cleaner way
const Card = ({ name, email, id}) => {
    // ES6 destructuring
    // const { name, email, id} = props;

    return (
        <div className="card bg-light-green dib pa2 ma2 grow bw2 shadow-5">
            <div className="card--image">
                <img src={`https://robohash.org/${id}?200x200`} alt=""/>
            </div>
            <div className="card--description">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;