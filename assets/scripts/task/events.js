'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onCreateTask = event => {
  event.preventDefault()
  console.log('onCreateTask has started')
  const formData = getFormFields(event.target)

  console.log('form data is......')
  console.log(formData)

  api.createTask(formData)
    .then(ui.createTaskSuccess)
    .catch(ui.createTaskFailure)
}

const onShowTasks = event => {
  event.preventDefault()
  api.showTasks()
    .then(ui.showTasksSuccess)
    .catch(ui.showTasksFailure)
}

const onShowTasksUpdate = event => {
  $('.show-tasks-list').text('')
  api.showTasks()
    .then(ui.showTasksSuccess)
    .catch(ui.showTasksFailure)
}

const onUpdateTask = event => {
  event.preventDefault()
  console.log('onUpdateTask has started')
  const formData = getFormFields(event.target)

  console.log('form data is......')
  console.log(formData)

  api.updateTask(formData)
    .then(ui.updateTaskSuccess)
    .catch(ui.updateTaskFailure)
}

// const onDeleteTask = event => {
//   event.preventDefault()
//   console.log('onDeleteTask has started')
//   const formData = getFormFields(event.target)
//
//   console.log('form data is......')
//   console.log(formData)
//
//   api.deleteTask(formData)
//     .then(ui.deleteTaskSuccess)
//     .catch(ui.deleteTaskFailure)
// }

const onDeleteTask = event => {
  event.preventDefault()
  console.log('onDeleteTask has started')
  const taskId = $(event.target).data('id')

  console.log('This is task id')
  console.log(event.target)
  console.log(taskId)

  api.deleteTask(taskId)
    .then(onShowTasksUpdate)
    .catch(ui.deleteTaskFailure)
}

module.exports = {
  onCreateTask,
  onShowTasks,
  onUpdateTask,
  onDeleteTask
}
