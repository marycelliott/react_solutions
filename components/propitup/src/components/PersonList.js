import React, { Component } from 'react';
import PersonCard from './PersonCard';

class PersonList extends Component {
    state = {  }
    render() { 
        const {list} = this.props;
        return (
            <div className="flex w-1/3 flex-col m-5">
                {list.map(person => (
                    <PersonCard person={person} />
                )
                )}
            </div>
        );
    }
}
 
export default PersonList;