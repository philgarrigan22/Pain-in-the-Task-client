'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onCreateTask = event => {
  event.preventDefault()
  console.log('onCreateTask has started')
  const tasks = getFormFields(event.target)

  console.log('form data is......')
  console.log(tasks)

  const data = {
    tasks
  }

  api.createTask(data)
  // .then(ui.createTaskSuccess)
  // .catch(ui.createTaskFailure)
}

const onShowTasks = event => {
  event.preventDefault()
  api.showTasks()
    .then(ui.showTasksSuccess)
    .catch(ui.showTasksFailure)
}

module.exports = {
  onCreateTask,
  onShowTasks
}
