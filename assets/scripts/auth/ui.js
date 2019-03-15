'use strict'
const store = require('../store.js')
const appActions = require('../application/application-actions.js')

// Display success message, save the user info to store, and reset form fields.
const signInSuccess = (responseData) => {
  store.user = responseData.user
  $(`form`).trigger(`reset`)
  // Hide Authorization and Show Task Features.
  $('#change-password-modal-trigger').removeClass('hide')
  $('#sign-out-button').removeClass('hide')
  $('.create-task-section').removeClass('hide')
  $('.show-tasks-list').removeClass('hide')
  $('.sign-up-box').addClass('hide')
  $('.sign-in-box').addClass('hide')
  // Add username in sidenav display and show welcome
  $(`#username`).text(`${store.user.email}`)
  $(`#user-status`).text('Welcome to Pain in the Task!')
}

// Used for both sign up and sign in failure. display message, then reset form fields.
const signUpFailure = () => {
  appActions.temporaryMessage('#user-message', 'Authentication error, please try again.')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const changePasswordSuccess = () => {
  appActions.temporaryMessage('#user-message', store.user.email + ' Successfully updated password')
  $(`form`).trigger(`reset`)
}

// Display failure message, then reset form fields.
const changePasswordFailure = () => {
  appActions.temporaryMessage('#user-message', 'Attempt to change password was unsuccessful')
  $(`form`).trigger(`reset`)
}

// Reset form fields upon sign out.
const signOutSuccess = () => {
  $(`form`).trigger(`reset`)
  // Hide all logged-in content, show sign-in options
  $('.sign-in-box').removeClass('hide')
  $('#sign-out-button').addClass('hide')
  $('#change-password-modal-trigger').addClass('hide')
  $('.create-task-section').addClass('hide')
  $('.show-tasks-list').empty()
  $('.show-tasks-list').addClass('hide')
  // clear username in sidenav display and show not logged in
  $(`#username`).text(``)
  $(`#user-status`).text(`Log In to Get Started`)
}

// Display failure message, then reset form fields.
const signOutFailure = () => {
  appActions.temporaryMessage('#user-message', 'Sign out error!!')
  $(`form`).trigger(`reset`)
}

module.exports = {
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
