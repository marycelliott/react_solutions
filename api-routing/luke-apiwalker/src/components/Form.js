import React,{ useContext, useRef } from 'react'
import axios from 'axios';
import Context from './../context/APIContext'
import { navigate } from '@reach/router';

const Form = () => {
    let type = useRef("");
    let ref_num = useRef("");
    const context = useContext(Context);
    
    // const onChange = (e) => {
    //     console.log(type.current.value)
    // }
    const findResult = (e) => {
        e.preventDefault();
        axios.get(`https://swapi.co/api/${type.current.value}/${ref_num.current.value}`)
            .then(data => {
                context.setState({result: data['data']})
                navigate(`/${ref_num.current.value}`)
            })
            .catch(err => {
                navigate("/obiwan")
            })

    }
    return (
        <form id="swapiForm" onSubmit={findResult}>
            <div className="row">
                <div className="input-field col  m4">
                    <span>Search For:</span>
                    <select ref={type} className="browser-default white" name="type" style={{marginTop:'.5em', marginLeft:'1em', width: '60%', display:'inline-block'}}>
                        <option value="" disabled selected>Select...</option>
                        <option value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                </div>
                <div className="input-field col m3">
                    <span>with ID:</span>
                    <input type="text" ref={ref_num} name="ref_num" className="validate white darken-1" style={{borderRadius:'4px', marginLeft:'1em',width: '50%'}}/>
                    
                </div>
                <button type="submit" className="col m btn grey inline" style={{marginTop:'1em'}}>
                        <span>Search</span>
                    </button>
                
            </div>
        </form>
        
    )
}

export default Form;
