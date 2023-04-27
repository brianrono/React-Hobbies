import React, { useState } from 'react'

const AddHobby = (props) => {
    const [hobbyInput, setHobbyInput] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(props.url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                { 
                    name:hobbyInput
                })
        })
        .then(res => res.json())
        .then(data => {
            props.setHobbies([...props.hobbies, data])
            setHobbyInput("")
        })

    }

    return (
    <>
    <h2>AddHobby</h2>
    <form onSubmit={handleSubmit} >
        <input type="text" placeholder='enter hobby...' onChange={(e) => setHobbyInput(e.target.value)} />
        <button >Add Hobby</button>
    </form>
    </>
    )
}

export default AddHobby