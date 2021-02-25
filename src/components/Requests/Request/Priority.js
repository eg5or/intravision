import React from 'react'

const Priority = ({priorities, id}) => {
    const priority = priorities.filter(item => item.id === id)
    return <div className="request__priority" style={{backgroundColor: priority[0].rgb}}/>
}

export default Priority