import React, { Component } from 'react';

class PersonCard extends Component {
    state = { 
        age: this.props.person.age
     }
    onClick = () => {
        this.setState({age: this.state.age + 1})
    }
    render() { 
        const {firstName, lastName, age, hairColor} = this.props.person;
        return (
            <div className="w-full rounded overflow-hidden shadow-lg bg-blue-300 mb-2">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{ firstName } { lastName }</div>
                    <p><span className="font-bold">Age:</span> { this.state.age }</p>
                    <p><span className="font-bold">Hair Color:</span> { hairColor }</p>
                    <div className="text-center">
                        <button onClick={this.onClick} className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">Birthday Button</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default PersonCard;