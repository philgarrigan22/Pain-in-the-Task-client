'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const taskEvents = require('./task/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sidenav').sidenav() // materialize scss sidenav action
  $('.modal').modal() // materialize scss modal action

  // Authorization events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('.sign-in-toggle').on('click', authEvents.onSignInToggle)
  $('.sign-up-toggle').on('click', authEvents.onSignUpToggle)

  // Task events
  $('#create-task-form').on('submit', taskEvents.onCreateTask)
  $('#show-tasks-button').on('click', taskEvents.onShowTasks)
  // $('#update-task-form').on('submit', taskEvents.onUpdateTask)
  // $('#delete-task-form').on('submit', taskEvents.onDeleteTask)
  // $('#update-task-modal-btn').on('click', taskEvents.onstoreModalUpdateId)

  // Handlebars data events
  $('#show-tasks-list').on('submit', '.update-task-modal-form', taskEvents.onUpdateTaskModal)
  $('#show-tasks-list').on('click', '.delete-task-btn', taskEvents.onDeleteTask)
})
