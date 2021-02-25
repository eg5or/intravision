import React, {useEffect} from 'react'
import Request from './Request/Request';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {loadingTasksPage} from '../../redux/tasksReducer';
import {Link} from 'react-router-dom';

const RequestsList = (props) => {
    useEffect(() => {
        props.loadingTasksPage()
    }, [])

    const tasksElements = props.tasks.map(item => <Request key={item.id}
                                                           onOpenSidePanel={props.onOpenSidePanel}
                                                           task={item}
                                                           priorities={props.priorities}
    />)

    return <div className="requests-wrapper">
        <div className="requests-top-header">
            <Link to={'/requests/add'} className="create-request-btn" onClick={props.onOpenSidePanel}>
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

const mapStateToProps = (state) => ({
    priorities: state.tasks.priorities,
    statuses: state.tasks.statuses,
    tags: state.tasks.tags,
    tasks: state.tasks.tasksData
})

export default compose(
    connect(mapStateToProps, {
        loadingTasksPage
    })
)(RequestsList)