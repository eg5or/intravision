import React, {useEffect} from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getUsers, updateTask} from '../../../redux/tasksReducer';

const ExecutorSelect = ({users, getUsers, changeExecutor, executorId}) => {

    useEffect(() => {
        getUsers()
    },[])

    const selectElements = users.map(item => item.id !== executorId ? <div className="task__sidebar--executor-select--item" onClick={() => changeExecutor(item.id)}
                                                  key={item.id}>
        {item.name}
    </div> : null)
    return <div className="task__sidebar--executor-select">
        {selectElements}
    </div>
}


const mapStateToProps = (state) => ({
    users: state.tasks.users
})

export default compose(
    connect(mapStateToProps, {
        getUsers,
        updateTask
    })
)(ExecutorSelect)