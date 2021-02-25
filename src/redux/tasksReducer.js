import {tasksAPI} from '../API/api';


// constants
const SET_TASKS_DATA = 'intravision/tasks/SET_TASKS_DATA'
const SET_PRIORITIES_DATA = 'intravision/tasks/SET_PRIORITIES_DATA'
const SET_STATUSES_DATA = 'intravision/tasks/SET_STATUSES_DATA'
const SET_TAGS_DATA = 'intravision/tasks/SET_TAGS_DATA'

// state
let initialState = {
    tasksData: [],
    priorities: [],
    statuses: [],
    tags: [],
}

// cases
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS_DATA:
            return {
                ...state,
                tasksData: action.data
            }
        case SET_PRIORITIES_DATA:
            return {
                ...state,
                priorities: action.data
            }
        case SET_STATUSES_DATA:
            return {
                ...state,
                statuses: action.data
            }
        case SET_TAGS_DATA:
            return {
                ...state,
                tags: action.data
            }
        default:
            return state
    }
}

// actionCreators
export const setTasksData = (data) => ({type: SET_TASKS_DATA, data})
export const setPrioritiesData = (data) => ({type: SET_PRIORITIES_DATA, data})
export const setStatusesData = (data) => ({type: SET_STATUSES_DATA, data})
export const setTagsData = (data) => ({type: SET_TAGS_DATA, data})

// thunks
export const getTasksData = () => async (dispatch) => {
    try {
        const data = await tasksAPI.getAllTasks()
        dispatch(setTasksData(data.data.value))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export const getPriorities = () => async (dispatch) => {
    try {
        const data = await tasksAPI.getPriorities()
        dispatch(setPrioritiesData(data.data))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export const getStatuses = () => async (dispatch) => {
    try {
        const data = await tasksAPI.getStatuses()
        dispatch(setStatusesData(data.data))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export const getTags = () => async (dispatch) => {
    try {
        const data = await tasksAPI.getTags()
        dispatch(setTagsData(data.data))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export const loadingDictionaries = () => (dispatch) => {
    dispatch(getPriorities())
    dispatch(getStatuses())
    dispatch(getTags())
}

export const loadingTasksPage = () => (dispatch) => {
    dispatch(getPriorities())
    dispatch(getStatuses())
    dispatch(getTags())
    dispatch(getTasksData())
}



export default appReducer