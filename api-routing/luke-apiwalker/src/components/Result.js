import React, { useContext } from 'react'
import Context from './../context/APIContext';

const Result = () => {
    const context = useContext(Context)
    const {result} = context.state;
    return (
        <div className="container left-align" style={{marginTop:'1em'}}>
            <h2>{result.name}</h2>
            {Object.keys(result).map( item => (
                item !== 'name' ? <div><span>{item}</span> <h5 className="purple-text text-darken-2" style={{display:'inline-block',marginLeft:'1em'}}>{result[item]}</h5></div>:null
            ))}
        </div>
    )
}

export default Result;
