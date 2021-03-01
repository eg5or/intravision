import React, {useEffect} from 'react'
import Request from './Request/Request';
import {Link} from 'react-router-dom';

const RequestsList = ({
    onOpenSidePanel,
    tasks,
    priorities
                      }) => {


    const tasksElements = tasks.map(item => <Request key={item.id}
                                                     onOpenSidePanel={onOpenSidePanel}
                                                     task={item}
                                                     priorities={priorities}
    />)

    return <div className="requests-wrapper">
        <div className="requests-top-header">
            <Link to={'/requests/add'} className="create-request-btn btn-primary" onClick={onOpenSidePanel}>
                Создать заявку
            </Link>
        </div>
        <div className="requests-table">
            <div className="requests-table__headlines">
                <div className="headlines-item column__id">ID</div>
                <div className="headlines-item column__name">Название</div>
                <div className="headlines-item column__status">Статус</div>
                <div className="headlines-item column__executor">Исполнитель</div>
            </div>
            <div className="request-table__list">
                {tasksElements}
            </div>
        </div>

    </div>
}

export default RequestsList