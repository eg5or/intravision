import React from 'react'
import {Link} from 'react-router-dom';

const ShowTask = ({match, tasks, onCloseSidePanel}) => {
    const currentTask = tasks.filter(item => item.id === +match.params.taskId)[0]

    return <div className="show-tasks">
        <div className="task-header">
            <Link to={'/requests'} onClick={onCloseSidePanel}>
                <div className="task-header__btn-close">X</div>
            </Link>
            <div className="task-header__id">№ {currentTask.id.toLocaleString()}</div>
            <div className="task-header__name">{currentTask.name}</div>
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
                        <input type="text"/>
                    </div>
                    <div className="task__content--add-comment-btn">Сохранить</div>
                </div>
                <div className="task__content--comments">
                    {currentTask.comment}
                </div>
            </div>
            <div className="task__sidebar">
                <div className="task__sidebar--block task__sidebar--status">
                    <div className="task__sidebar--status-color" style={{backgroundColor: currentTask.statusRgb}}/>
                    <div className="task__sidebar--status-text">{currentTask.statusName}</div>
                </div>
                <div className="task__sidebar--block task__sidebar--initiator">
                    <div className="task__title">Заявитель</div>
                    <div className="task__text">{currentTask.initiatorName}</div>
                </div>
                <div className="task__sidebar--block task__sidebar--executor">
                    <div className="task__title">Исполнитель</div>
                    <div className="task__text">{currentTask.executorName}</div>
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

export default ShowTask