import React from 'react'
import {NavLink } from 'react-router-dom'

const Menu = ({onCloseSidePanel}) => {
    return <div className="menu">
        <div className="logo"><img src="/assets/img/logo.png" alt="logo"/></div>
        <NavLink to={'/knowledgebase'} activeClassName='is-active' onClick={onCloseSidePanel}>
            <div className="menu-item">
                <div className="menu-item__icon">
                    <img src="/assets/img/noun_Book_121819.png" alt="knowledge base" onClick={onCloseSidePanel}/>
                </div>
                <div className="menu-item__text">База знаний</div>
            </div>
        </NavLink >
        <NavLink  to={'/requests'} activeClassName='is-active'>
            <div className="menu-item">
                <div className="menu-item__icon">
                    <img src="/assets/img/noun_File_453295.png" alt="requests" onClick={onCloseSidePanel}/>
                </div>
                <div className="menu-item__text">Заявки</div>
            </div>
        </NavLink >
        <NavLink  to={'/employees'} activeClassName='is-active'>
            <div className="menu-item">
                <div className="menu-item__icon">
                    <img src="/assets/img/noun_people_1923174.png" alt="employees" onClick={onCloseSidePanel}/>
                </div>
                <div className="menu-item__text">Сотрудники</div>
            </div>
        </NavLink >
        <NavLink  to={'/clients'} activeClassName='is-active'>
            <div className="menu-item">
                <div className="menu-item__icon">
                    <img src="/assets/img/noun_City_1923172.png" alt="clients" onClick={onCloseSidePanel}/>
                </div>
                <div className="menu-item__text">Клиенты</div>
            </div>
        </NavLink >
        <NavLink  to={'/assets'} activeClassName='is-active'>
            <div className="menu-item">
                <div className="menu-item__icon">
                    <img src="/assets/img/analytics.png" alt="assets" onClick={onCloseSidePanel}/>
                </div>
                <div className="menu-item__text">Активы</div>
            </div>
        </NavLink >
        <NavLink  to={'/settings'} activeClassName='is-active'>
            <div className="menu-item">
                <div className="menu-item__icon">
                    <img src="/assets/img/noun_Settings_1048928.png" alt="settings" onClick={onCloseSidePanel}/>
                </div>
                <div className="menu-item__text">Настройки</div>
            </div>
        </NavLink >
    </div>
}

export default Menu