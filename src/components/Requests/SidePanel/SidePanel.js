import React from 'react'
import {Route, Switch} from 'react-router-dom';
import AddTask from '../AddTask/AddTask';
import ShowTask from '../ShowTask/ShowTask';
import EditTask from '../EditTask/EditTask';
import {compose} from 'redux';
import {connect} from 'react-redux';

const SidePanel = (props) => {
    return <>
        <Switch>
            <Route path='/requests/add' component={() => <AddTask/>}/>
            <Route path='/requests/:taskId' component={(obj) => <ShowTask match={obj.match}
                                                                          tasks={props.tasks}
                                                                          onCloseSidePanel={props.onCloseSidePanel}
            />}/>
            <Route path='/requests/edit/:taskId' component={() => <EditTask/>}/>
        </Switch>
    </>
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasksData
})

export default compose(
    connect(mapStateToProps, {

    })
)(SidePanel)