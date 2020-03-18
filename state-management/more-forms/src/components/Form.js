import React from 'react';

const alignCenter = {
    alignSelf: 'center'
}

const Form = ({state,setState}) => {
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state);
        console.log( typeof state);
    }

    return (
        <form className="w-1/3 flex flex-col text-center" style={alignCenter}>
            {Object.keys(state).map(field => (
                <div className>
                    <div className="md:flex md:items-center bg-gray-400 p-4 rounded border-2 border-gray-500">
                    <div className="md:w-1/3">
                        <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                            {field}
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        {field === "password" || field === "confPassword" ?<input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name={field} onChange={onChange}/>:<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name={field} onChange={onChange}/>}
                    </div>    
                    </div>
                    {(field === "firstName" || field === "lastName") && state[field].length <1 ? <span className="text-red-700 text-sm">{field} cannot be blank.</span>:null}
                    {field === "password"  && state["password"] !== state['confPassword'] ? <span className="text-red-700 text-sm">Passwords must match.</span>:null}

                </div>
                )
            )}
        </form>
    );
}
 
export default Form;