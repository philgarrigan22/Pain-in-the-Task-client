'use strict'
const showTasksTemplate = require('../templates/task-listing.handlebars')
const appActions = require('../application/application-actions.js')

// Display message, reset form fields, then show amount of games played.
const showTasksSuccess = (responseData) => {
  console.log(responseData)
  appActions.temporaryMessage('#user-message', 'Successfully accesed tasks.')
  $(`form`).trigger(`reset`)

  // Handlebars
  const showTasksHtml = showTasksTemplate({ tasks: responseData.tasks })
  $('.show-tasks-list').empty()
  $('.show-tasks-list').append(showTasksHtml)
  // responseData.tasks.forEach(task => {
  //   const taskHtml = (`
  //     <h2>Title: ${task.title}</h2>
  //     <p>Description: ${task.description}</p>
  //     <p>Due Date: ${task.target_date}</p>
  //     <br>
  //     `)
  //   $('#show-tasks-list').append(taskHtml)
  // })
}

// Display error message, then reset form fields.
const showTasksFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to show tasks')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const createTaskSuccess = () => {
  appActions.temporaryMessage('#user-message', 'Successfully Created Task')
  $(`form`).trigger(`reset`)
}

// Display error message, then reset form fields.
const createTaskFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to create task')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const updateTaskSuccess = () => {
  appActions.temporaryMessage('#user-message', 'Successfully Updated Task')
  $(`form`).trigger(`reset`)
}

// Display error message, then reset form fields.
const updateTaskFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to update task')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const deleteTaskSuccess = () => {
  appActions.temporaryMessage('#user-message', 'Task deleted')
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
  createTaskSuccess,
  createTaskFailure,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure
}
