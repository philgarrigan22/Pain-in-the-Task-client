const config = require('../config.js')
const store = require('../store.js')

const createTask = (formData) => {
  console.log('API REQUEST INVOKED')
  console.log('FORM DATA IS')
  console.log(formData)

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
  console.log('API REQUEST INVOKED')
  console.log('FORM DATA IS')
  console.log(formData)

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
  console.log('API REQUEST INVOKED')
  console.log('FORM DATA IS')
  console.log(formData)

  return $.ajax({
    url: config.apiUrl + '/tasks/' + modalId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// const deleteTask = (formData) => {
//   console.log('API REQUEST INVOKED')
//   console.log('FORM DATA IS')
//   console.log(formData)
//
//   return $.ajax({
//     url: config.apiUrl + '/tasks/' + formData.task.task_id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const deleteTask = (taskId) => {
  console.log('API REQUEST INVOKED')
  console.log('taskId')
  console.log(taskId)

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
