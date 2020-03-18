import React from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props.person;
    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-blue-300 mb-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{ firstName } { lastName }</div>
                <p><span className="font-bold">Age:</span> { age }</p>
                <p><span className="font-bold">Hair Color:</span> { hairColor }</p>
                
            </div>
        </div>
    );
}
 
export default PersonCard;