import React from 'react'
import Status from './Status';
import Priority from './Priority';
import {Link} from 'react-router-dom';

const Request = ({task, priorities, onOpenSidePanel}) => {
    return <Link to={`/requests/${task.id}`} onClick={onOpenSidePanel}><div className="request">
        <div className="request__id">
            <Priority priorities={priorities} id={task.priorityId}/>
            <div className="request__column request__id-text">{task.id}</div>
        </div>
        <div className="request__column request__name">
            <div className="request__name--inner">{task.name}</div>
        </div>
        <div className="request__column request__status">
            <Status id={task.statusId} name={task.statusName} color={task.statusRgb}/>
        </div>
        <div className="request__column request__executor">{task.executorName}</div>
    </div></Link>
}
//priorityId

export default Request