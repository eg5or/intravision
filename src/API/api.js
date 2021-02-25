import * as axios from 'axios';

const tenantGuid = '15f6c111-6e0e-4dfb-972b-d1bd7494fce6'

const instance = axios.create({
    baseURL: `http://intravision-task.test01.intravision.ru/`,
});

export const tasksAPI = {
    getAllTasks() {
        return instance.get(`odata/tasks?tenantguid=${tenantGuid}`)
    },
    getPriorities() {
        return instance.get(`api/${tenantGuid}/Priorities`)
    },
    getServices() {
        return instance.get(`api/${tenantGuid}/Services`)
    },
    getStatuses() {
        return instance.get(`api/${tenantGuid}/Statuses`)
    },
    getTags() {
        return instance.get(`api/${tenantGuid}/Tags`)
    },
    getTaskById(id) {
        return instance.get(`api/${tenantGuid}/Tasks/${id}`)
    },
    createTask() {
        return instance.post(`api/${tenantGuid}/Tasks/`)
    },
}