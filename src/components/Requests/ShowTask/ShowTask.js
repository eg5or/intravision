import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom';
import ExecutorSelect from './ExecutorSelect';
import {useFormik} from 'formik';
import {compose} from 'redux';

const ShowTask = (props) => {
    const {getOneTasks, onCloseSidePanel, updateTask, statuses, currentTask} = props

    useEffect(() => {
        getOneTasks(props.match.params.taskId)
    }, [])
    // -------------------- FORMIK ------------------------------------------
    const formik = useFormik({
        initialValues: {
            comment: ''
        }
    })

    // -------------------- / FORMIK ----------------------------------------
    // -------------------- LOCAL STATE -------------------------------------
    const [executorSelectOpen, setExecutorSelectOpen] = useState(false)
    const [statusSelectOpen, setStatusSelectOpen] = useState(false)
    // -------------------- / LOCAL STATE -----------------------------------
    // -------------------- FUNCTIONS ---------------------------------------
    const onOpenExecutorSelect = () => {
        setExecutorSelectOpen(!executorSelectOpen)
    }
    const onCloseExecutorSelect = () => {
        setExecutorSelectOpen(false)
    }
    const onOpenStatusSelect = () => {
        setStatusSelectOpen(!statusSelectOpen)
    }
    const onCloseStatusSelect = () => {
        setStatusSelectOpen(false)
    }
    const changeExecutor = (executorId) => {
        updateTask(
            currentTask.id,
            currentTask.name,
            currentTask.description,
            currentTask.comment,
            currentTask.price,
            currentTask.taskTypeId,
            currentTask.statusId,
            currentTask.priorityId,
            currentTask.serviceId,
            currentTask.resolutionDatePlan,
            [...currentTask.tags.map(i => i.id)],
            currentTask.initiatorId,
            executorId,
            currentTask.executorGroupId
        )
        onCloseExecutorSelect()
    }
    const changeStatus = (statusId) => {
        updateTask(
            currentTask.id,
            currentTask.name,
            currentTask.description,
            currentTask.comment,
            currentTask.price,
            currentTask.taskTypeId,
            statusId,
            currentTask.priorityId,
            currentTask.serviceId,
            currentTask.resolutionDatePlan,
            [...currentTask.tags.map(i => i.id)],
            currentTask.initiatorId,
            currentTask.executorId,
            currentTask.executorGroupId
        )
        onCloseStatusSelect()
    }
    const addComment = () => {
        updateTask(
            currentTask.id,
            currentTask.name,
            currentTask.description,
            formik.values.comment,
            currentTask.price,
            currentTask.taskTypeId,
            currentTask.statusId,
            currentTask.priorityId,
            currentTask.serviceId,
            currentTask.resolutionDatePlan,
            [...currentTask.tags.map(i => i.id)],
            currentTask.initiatorId,
            currentTask.executorId,
            currentTask.executorGroupId
        )
        onCloseStatusSelect()
    }
    // -------------------- / FUNCTIONS -------------------------------------
    const statusesElements = statuses.map(item => item.id !== currentTask.statusId && <div onClick={() => changeStatus(item.id)} className="task__sidebar--status-select--item task__sidebar--status">
        <div className="task__sidebar--status-color" style={{backgroundColor: item.rgb}}/>
        <div className="task__sidebar--status-text">{item.name}</div>
    </div>)

    return <div className="show-tasks">
        <div className="task-header">
            <div className="task-header__id">№ {currentTask.id.toLocaleString()}</div>
            <div className="task-header__name">{currentTask.name}</div>
            <Link to={'/requests'} onClick={onCloseSidePanel}>
                <div className="task-header__btn-close">
                    <img src="/assets/img/close.png" alt="close"/>
                </div>
            </Link>
        </div>
        <div className="task">
            <div className="task__content">
                <div className="task__content--description">
                    <div className="task__title">Описание</div>
                    <div className="task__content--description-text">{currentTask.description}</div>
                </div>
                <div className="task__content--add-comment">
                    <div className="task__title">Добавление комментариев</div>
                    <div className="task__content--add-comment-input">
                        <textarea id="comment"
                                  name="comment"
                                  onChange={formik.handleChange}
                                  value={formik.values.comment}
                                  className="task__content--textarea"
                                  tabIndex="2"
                        />
                    </div>
                    <div className="task__content--btn">
                        <div onClick={addComment} className="btn-primary">Сохранить</div>
                    </div>
                </div>
                <div className="task__content--comments">
                    {currentTask.comment}
                </div>
            </div>
            <div className="task__sidebar">
                <div className="task__sidebar--block task__sidebar--status">
                    <div onClick={onOpenStatusSelect} className="task__sidebar--status-inner">
                        <div className="task__sidebar--status-color" style={{backgroundColor: currentTask.statusRgb}}/>
                        <div className="task__sidebar--status-text">{currentTask.statusName}</div>
                        <div className="task__sidebar--status-arrow">
                            <span className="material-icons">
                                keyboard_arrow_down
                            </span>
                        </div>
                    </div>
                    {statusSelectOpen && <div className="task__sidebar--status-select">
                        {statusesElements}
                    </div>}
                </div>
                <div className="task__sidebar--block task__sidebar--initiator">
                    <div className="task__title">Заявитель</div>
                    <div className="task__text">{currentTask.initiatorName}</div>
                </div>
                <div className="task__sidebar--block task__sidebar--executor">
                    <div className="task__title">Исполнитель</div>
                    <div onClick={onOpenExecutorSelect} className="task__text">{currentTask.executorName}</div>
                    {/*{executorSelectOpen && <ExecutorSelect onCloseExecutorSelect={onCloseExecutorSelect}
                                                           changeExecutor={changeExecutor}
                                                           executorId={currentTask.executorId}
                    />}*/}
                </div>
                <div className="task__sidebar--block task__sidebar--priority">
                    <div className="task__title">Приоритет</div>
                    <div className="task__text">{currentTask.priorityName}</div>
                </div>
                <div className="task__sidebar--block task__sidebar--date">
                    <div className="task__title">Срок</div>
                    <div className="task__text">
                        <div className="task__sidebar--date-icon">
                            <img src="/assets/img/noun_Calendar_24186.png" alt="date"/>
                        </div>
                        <div className="task__sidebar--date-text">
                            {new Date(currentTask.resolutionDatePlan).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })} г.
                        </div>
                    </div>
                </div>
                <div className="task__sidebar--block task__sidebar--tags">
                    <div className="task__title">Тэги</div>
                    <div className="task__text">{currentTask.executorName}</div>
                </div>
            </div>
        </div>
    </div>
}

export default compose(
    withRouter
)(ShowTask)