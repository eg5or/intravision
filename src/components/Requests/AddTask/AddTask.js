import React from 'react'
import {Link} from 'react-router-dom';

const AddTask = ({onCloseSidePanel}) => {
    return <div className="add-tasks">
        <div className="task-header">
            <div className="task-header__name">Новая заявка</div>
            <Link to={'/requests'} onClick={onCloseSidePanel}>
                <div className="task-header__btn-close">
                    <img src="/assets/img/close.png" alt="close"/>
                </div>
            </Link>
        </div>
        <div className="task">
            <div className="task__content">
                <div className="task__content--form-name">
                    <div className="task__title">Название</div>
                    <div className="task__content--add-comment-input">
                        <textarea className="task__content--textarea"
                                  tabindex="1"

                        />
                    </div>
                </div>
                <div className="task__content--form-description">
                    <div className="task__title">Описание</div>
                    <div className="task__content--add-comment-input">
                        <textarea className="task__content--textarea"
                                  tabindex="2"

                        />
                    </div>
                </div>
                <div className="task__content--btn">
                    <div className="btn-primary">Сохранить</div>
                </div>
            </div>
        </div>
    </div>
}

export default AddTask