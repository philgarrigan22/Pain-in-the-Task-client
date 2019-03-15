'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const taskEvents = require('./task/events.js')

$(() => {
  $('.sidenav').sidenav() // materialize scss sidenav action.
  $('.modal').modal() // materialize scss modal action.

  // Authorization events.
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('.sign-in-toggle').on('click', authEvents.onSignInToggle)
  $('.sign-up-toggle').on('click', authEvents.onSignUpToggle)

  // Task events.
  $('#create-task-form').on('submit', taskEvents.onCreateTask)
  $('#show-tasks-button').on('click', taskEvents.onShowTasks)

  // Handlebars data events.
  // Event listener to add modal action / open modal.
  $('#show-tasks-list').on('click', '.update-task-modal-btn', taskEvents.onShowUpdateTaskModal)

  // Event listener to update task on modal submit.
  $('#show-tasks-list').on('submit', '.update-task-modal-form', taskEvents.onUpdateTaskModal)

  // Event listener to delete task on delete click.
  $('#show-tasks-list').on('click', '.delete-task-btn', taskEvents.onDeleteTask)

  // Event listener to add collapsible property after handlebars loads all
  // resources, but before any click is made to the collapsible element.
  $('#show-tasks-list').on('click', '.taskDropdown', () => {
    $('.collapsible').collapsible()
  })
})
