import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Dropdown = () => {
    const {setSortData} = useContext(DataContext)
  return (
    <div>
        <select name="" id="" onChange={(e)=>setSortData(e.target.value)}>
            <option value="">Select event type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="All">Both</option>
        </select>
    </div>
  )
}

export default Dropdown