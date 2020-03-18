import React, { useReducer } from 'react';
 
const FormReducer = () => {
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        },
    };
     
    function reducer(state, action) {
        console.log(state);
        return {
            ...state,
            [action.type]: action.payload[0],
            error: action.payload[1]
        };
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
 
    function handleChange(e) {
        const { name, value } = e.target;
        if(name==="firstName"){
            if(value<2) {
                dispatch({
                    type: name,
                    payload: {value: value, error: "First Name must be at least 2 characters."}
                });
            }
        }
        else if(name==="lastName"){
            if(value<2) {
                dispatch({
                    type: name,
                    payload: {value: value, error: "Last Name must be at least 2 characters."}
                });
            }
        }
        else if(name==="email"){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                dispatch({
                    type: name,
                    payload: {value: value, error: "Email address is not valid."}
                });
            }
        }
        else {
            dispatch({
                type: name,
                payload: {value: value, error: null}
            });
        }
        
    }
 
    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    {state.firstName.error !== null && (
                        <span className="error">{state.firstName.error}</span>
                    )}
                    <input
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    {state.lastName.error !== null && (
                        <span className="error">{state.lastName.error}</span>
                    )}
                    <input
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    {state.email.error !== null && (
                        <span className="error">{state.email.error}</span>
                    )}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

export default FormReducer;