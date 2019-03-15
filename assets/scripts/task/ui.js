'use strict'
const showTasksTemplate = require('../templates/task-listing.handlebars')
const appActions = require('../application/application-actions.js')

// Reset form fields after successful request.
const successReset = () => {
  $(`form`).trigger(`reset`)
}

// Display message, reset form fields, then show amount of games played.
const showTasksSuccess = (responseData) => {
  // Generate task listing with handlebars template.
  const showTasksHtml = showTasksTemplate({ tasks: responseData.tasks })
  $('.show-tasks-list').empty()
  $('.show-tasks-list').append(showTasksHtml)
}
// Display error message, then reset form fields.
const showTasksFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to load task listing')
  $(`form`).trigger(`reset`)
}

// Display error message, then reset form fields.
const createTaskFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to create task')
  $(`form`).trigger(`reset`)
}

// Display error message, then reset form fields.
const updateTaskFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to update task')
  $(`form`).trigger(`reset`)
}

// Display error message, then reset form fields.
const deleteTaskFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to delete task')
  $(`form`).trigger(`reset`)
}

module.exports = {
  showTasksSuccess,
  showTasksFailure,
  createTaskFailure,
  updateTaskFailure,
  deleteTaskFailure,
  successReset
}
