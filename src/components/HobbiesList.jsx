import React from 'react'
import Hobby from './Hobby'

const HobbiesList = ({hobbies, setHobbies}) => {
    const hobbyItem = hobbies.map(item => {
        return <Hobby key={item.id} hobby={item} setHobbies={setHobbies} hobbies={hobbies} />
    })
  return (
    <>
    <div>HobbiesList</div>
    <table>
        <thead>
            <tr>
                <td>Number</td>
                <td>Hobby</td>
            </tr>
           
        </thead>
        <tbody>
                {hobbyItem}
        </tbody>
    </table>
    
    </>
    
  )
}

export default HobbiesList