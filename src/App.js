import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import RequestsList from './components/Requests/RequestsList';
import {Switch, Route} from 'react-router-dom';
import SidePanel from './components/Requests/SidePanel/SidePanel';
import KnowledgeBase from './components/OtherPages/KnowledgeBase';
import Assets from './components/OtherPages/Assets';
import Clients from './components/OtherPages/Clients';
import Employees from './components/OtherPages/Employees';
import Settings from './components/OtherPages/Settings';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {loadingTasksPage, updateTask} from './redux/tasksReducer';


function App(props) {
    const [openSidePanel, setOpenSidePanel] = useState(false)

    useEffect(() => {
        props.loadingTasksPage()
    }, [])
    const onOpenSidePanel = () => {
        setOpenSidePanel(true)
    }
    const onCloseSidePanel = () => {
        setOpenSidePanel(false)
    }

    return (
        <div className="app-wrapper">
            <Menu onCloseSidePanel={onCloseSidePanel}/>
            <div className="right-wrapper">
                <Header/>
                <div className="content-wrapper">
                    <Switch>
                        <Route path='/knowledgebase' component={KnowledgeBase}/>
                        <Route path='/assets' component={Assets}/>
                        <Route path='/clients' component={Clients}/>
                        <Route path='/employees' component={Employees}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/requests' component={() => {
                            return <RequestsList onOpenSidePanel={onOpenSidePanel}
                                                 loadingTasksPage={props.loadingTasksPage}
                                                 tasks={props.tasks}
                                                 priorities={props.priorities}
                            />
                        }}/>
                    </Switch>
                </div>
            </div>
            <div className="side-panel-wrapper" style={{right: openSidePanel ? 0 : '-50%'}}>
                <SidePanel onCloseSidePanel={onCloseSidePanel}
                           tasks={props.tasks}
                           updateTask={props.updateTask}
                           statuses={props.statuses}
                />
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    priorities: state.tasks.priorities,
    statuses: state.tasks.statuses,
    tags: state.tasks.tags,
    tasks: state.tasks.tasksData,
})

export default compose(
    connect(mapStateToProps, {
        loadingTasksPage,
        updateTask
    })
)(App)
