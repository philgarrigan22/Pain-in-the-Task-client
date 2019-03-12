'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const taskEvents = require('./task/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sidenav').sidenav() // materialize scss sidenav action

  // Authorization events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // Task events
  $('#create-task-form').on('submit', taskEvents.onCreateTask)
  $('#show-tasks-button').on('click', taskEvents.onShowTasks)
  $('#update-task-form').on('submit', taskEvents.onUpdateTask)
  // $('#delete-task-form').on('submit', taskEvents.onDeleteTask)
  $('#show-tasks-list').on('click', '.btn-danger', taskEvents.onDeleteTask)
})
