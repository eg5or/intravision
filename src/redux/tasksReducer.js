import {tasksAPI} from '../API/api';


// constants
const SET_TASKS_DATA = 'intravision/tasks/SET_TASKS_DATA'
const SET_CURRENT_TASK_DATA = 'intravision/tasks/SET_CURRENT_TASK_DATA'
const SET_PRIORITIES_DATA = 'intravision/tasks/SET_PRIORITIES_DATA'
const SET_STATUSES_DATA = 'intravision/tasks/SET_STATUSES_DATA'
const SET_TAGS_DATA = 'intravision/tasks/SET_TAGS_DATA'
const SET_USERS_DATA = 'intravision/tasks/SET_USERS_DATA'

// state
let initialState = {
    tasksData: [],
    priorities: [],
    statuses: [],
    tags: [],
    users: [],
    currentTask: {
        id: 0,
        name: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        price: 0,
        taskTypeId: 0,
        taskTypeName: '',
        statusId: 0,
        statusName: '',
        statusRgb: "#fff",
        priorityId: 0,
        priorityName: '',
        serviceId: 0,
        serviceName: '',
        resolutionDatePlan: '',
        tags: [],
        initiatorId: 0,
        initiatorName: '',
        executorId: 0,
        executorName: '',
        executorGroupId: 0,
        executorGroupName: '',
        lifetimeItems: []
    }
}

// cases
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS_DATA:
            return {
                ...state,
                tasksData: action.data
            }
        case SET_CURRENT_TASK_DATA:
            return {
                ...state,
                currentTask: action.data
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
        case SET_USERS_DATA:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }
}

// actionCreators
export const setTasksData = (data) => ({type: SET_TASKS_DATA, data})
export const setCurrentTaskData = (data) => ({type: SET_CURRENT_TASK_DATA, data})
export const setPrioritiesData = (data) => ({type: SET_PRIORITIES_DATA, data})
export const setStatusesData = (data) => ({type: SET_STATUSES_DATA, data})
export const setTagsData = (data) => ({type: SET_TAGS_DATA, data})
export const setUsersData = (data) => ({type: SET_USERS_DATA, data})

// thunks
export const getTasksData = () => async (dispatch) => {
    try {
        const data = await tasksAPI.getAllTasks()
        dispatch(setTasksData(data.data.value))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}
export const getOneTask = (id) => async (dispatch) => {
    try {
        const data = await tasksAPI.getTaskById(id)
        dispatch(setCurrentTaskData(data.data))
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

export const getUsers = () => async (dispatch) => {
    try {
        const data = await tasksAPI.getUsers()
        dispatch(setUsersData(data.data))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export const updateTask = (
    id,
    name,
    description,
    comment,
    price,
    taskTypeId,
    statusId,
    priorityId,
    serviceId,
    resolutionDatePlan,
    tags,
    initiatorId,
    executorId,
    executorGroupId
) => async (dispatch) => {
    try {
        const response = await tasksAPI.updateTask(
            id,
            name,
            description,
            comment,
            price,
            taskTypeId,
            statusId,
            priorityId,
            serviceId,
            resolutionDatePlan,
            tags,
            initiatorId,
            executorId,
            executorGroupId
        )
        dispatch(loadingTasksPage())
        console.log(response)
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