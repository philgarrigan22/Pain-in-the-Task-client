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
  if (event) { event.preventDefault() }
  api.showTasks()
    .then(ui.showTasksSuccess)
    .catch(ui.showTasksFailure)
}

// const onShowTasksUpdate = event => {
//   api.showTasks()
//     .then(ui.showTasksSuccess)
//     .catch(ui.showTasksFailure)
// }

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

const onUpdateTaskModal = event => {
  event.preventDefault()
  console.log('onUpdateTaskModal has started')
  console.log(event)
  console.log('THIS is event.target')
  console.log(event.target)

  const formData = getFormFields(event.target)
  const modalId = $(event.target).data('id')

  console.log('this is form data then modalId')
  console.log(formData)
  console.log(modalId)

  api.updateTaskModal(formData, modalId)
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
    .then(onShowTasks)
    .catch(ui.deleteTaskFailure)
}

module.exports = {
  onCreateTask,
  onShowTasks,
  onUpdateTask,
  onDeleteTask,
  onUpdateTaskModal
}
