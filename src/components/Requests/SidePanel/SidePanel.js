import React from 'react'
import {Route, Switch} from 'react-router-dom';
import AddTask from '../AddTask/AddTask';
import ShowTask from '../ShowTask/ShowTask';
import EditTask from '../EditTask/EditTask';

const SidePanel = ({
    onCloseSidePanel,
    updateTask,
    statuses,
    getOneTasks,
    currentTask
}) => {

    return <>
        <Switch>
            <Route path='/requests/add' component={() => <AddTask onCloseSidePanel={onCloseSidePanel}

            />}/>
            <Route path='/requests/:taskId' component={(obj) => {
                return <ShowTask
                          onCloseSidePanel={onCloseSidePanel}
                          updateTask={updateTask}
                          statuses={statuses}
                          currentTask={currentTask}
                          getOneTasks={getOneTasks}
                />
            }
            }/>
            <Route path='/requests/edit/:taskId' component={() => <EditTask/>}/>
        </Switch>
    </>
}

export default SidePanel