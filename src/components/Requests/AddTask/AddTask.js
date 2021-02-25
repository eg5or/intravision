import React from 'react'
import {Link} from 'react-router-dom';

const AddTask = (props) => {
    return <div className="add-tasks">
        Добавление
        <Link to={'/requests/id'}>Редактировать</Link>
    </div>
}

export default AddTask