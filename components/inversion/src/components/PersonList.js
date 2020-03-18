import React from 'react';
import PersonCard from './PersonCard';

const PersonList = (props) => {
    return (
        <div className="flex w-1/3 flex-col m-5">
            {props.list.map(person => (
                <PersonCard key={person.key} person={person} />
            )
            )}
        </div>
    );
}
 
export default PersonList;