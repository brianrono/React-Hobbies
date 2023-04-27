import React from 'react'

const Hobby = ({hobby, setHobbies, hobbies}) => {

    const handleClick = () => {

            fetch(`http://localhost:3000/hobbies/${hobby.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json',
                },
            })
            .then(res => res.json())
            .then(data => {
                let remainingHobbies = hobbies.filter(hobbiesItem => hobbiesItem.id !== hobby.id)
                setHobbies(remainingHobbies)
            }) 

        
    }

  return (

    <>
    <tr>
        <td>{hobby.id}</td>
        <td>{hobby.name}</td>
        <td><button onClick={handleClick}>Delete</button></td>
        
    </tr>
    </>
    
  )
}

export default Hobby