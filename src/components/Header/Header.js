import React from 'react'

const Header = (props) => {
    return <div className="header">
        <div className="search-container">
            <input id="search" name="search" type="text" className="search" placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки..."/>
            <img src="/assets/img/noun_Search_449332.png" alt="search" className="search-icon"/>
        </div>
    </div>
}

export default Header