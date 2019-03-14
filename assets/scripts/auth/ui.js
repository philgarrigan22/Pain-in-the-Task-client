'use strict'
const store = require('../store.js')
const appActions = require('../application/application-actions.js')
// const taskEvents = require('../task/events.js')

// Display success message, then reset form fields.
// const signUpSuccess = () => {
//   appActions.temporaryMessage('#user-message', 'Successfully Created User')
//   $(`form`).trigger(`reset`)
// $('#sign-up-box').addClass('hide')
// $('#sign-in-box').removeClass('hide')
// }

// Display success message, save the user info to store, and reset form fields.
const signInSuccess = (responseData) => {
  appActions.temporaryMessage('#user-message', 'Successfully Signed in')
  store.user = responseData.user
  $(`form`).trigger(`reset`)

  // Hide Authorization and Show Task Features.
  $('#change-password-modal-trigger').removeClass('hide')
  $('#sign-out-button').removeClass('hide')
  $('.create-task-section').removeClass('hide')
  $('.show-tasks-list').removeClass('hide')
  // $('.sidenav-trigger').removeClass('hide')
  $('.sign-up-box').addClass('hide')
  $('.sign-in-box').addClass('hide')
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
  appActions.temporaryMessage('#user-message', 'Change Password Failure')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const signOutSuccess = () => {
  appActions.temporaryMessage('#user-message', store.user.email + ' has successfully logged out!')
  $(`form`).trigger(`reset`)
  // Hide all logged-in content, show sign-in options
  $('.sign-in-box').removeClass('hide')
  $('#sign-out-button').addClass('hide')
  $('#change-password-modal-trigger').addClass('hide')
  $('.create-task-section').addClass('hide')
  $('.show-tasks-list').empty()
  $('.show-tasks-list').addClass('hide')
  // $('.sidenav-trigger').addClass('hide')
}

// Display failure message, then reset form fields.
const signOutFailure = () => {
  appActions.temporaryMessage('#user-message', 'Sign out error!!')
  $(`form`).trigger(`reset`)
}

module.exports = {
  // signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
