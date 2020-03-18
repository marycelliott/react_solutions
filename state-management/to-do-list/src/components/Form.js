import React from 'react'

const Form = ({setItem}) => {
    let newItem = {
        task: "",
        isComplete: false,
    }
    const onChange = (e) => {
        newItem['task'] = e.target.value;
        console.log(newItem['task'])
    }

    const onSubmit = (e) => {
        console.log(`I'm in submit`)
        e.preventDefault();
        setItem(prevState => (
            [...prevState,newItem]
        ))
        document.getElementById("task").value = ""
    }

    return (
        <form>
            <div className="col s12">
                <div class="input-field inline" style={{width: '40%'}}>
                    <input class="validate" id="task" onChange={onChange} placeholder="Add task description" type="text" />
                </div>
                <div onClick={onSubmit} class="btn" style={{marginLeft:'1em'}}>
                    <span>Add</span>
                </div>
            </div>
        </form>
    )
}

export default Form
