import React from 'react'
import {Route, Switch} from 'react-router-dom';
import AddTask from '../AddTask/AddTask';
import ShowTask from '../ShowTask/ShowTask';
import EditTask from '../EditTask/EditTask';

const SidePanel = ({
    onCloseSidePanel,
    tasks,
    updateTask,
    statuses
}) => {

    return <>
        <Switch>
            <Route path='/requests/add' component={() => <AddTask onCloseSidePanel={onCloseSidePanel}

            />}/>
            <Route path='/requests/:taskId' component={(obj) => {
                const currentTask = tasks.filter(item => item.id === +obj.match.params.taskId)[0]
                return <ShowTask
                          task={currentTask}
                          onCloseSidePanel={onCloseSidePanel}
                          updateTask={updateTask}
                          statuses={statuses}
                />
            }
            }/>
            <Route path='/requests/edit/:taskId' component={() => <EditTask/>}/>
        </Switch>
    </>
}

export default SidePanel