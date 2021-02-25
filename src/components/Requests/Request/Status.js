import React from 'react'

const Status = ({id, name, color}) => {
    return <div className="status-item" style={{backgroundColor: color}}>{name}</div>
}

export default Status