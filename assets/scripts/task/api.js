const config = require('../config.js')
const store = require('../store.js')

const createTask = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const showTasks = () => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTask = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + formData.task.task_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateTaskModal = (formData, modalId) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + modalId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteTask = (taskId) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + taskId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTask,
  showTasks,
  updateTask,
  deleteTask,
  updateTaskModal
}
