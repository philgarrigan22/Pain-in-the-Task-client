'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const taskEvents = require('../task/events.js')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    // Auto sign-up to sign-in.
    .then(() => { onSignUpSignIn(formData) })
    .catch(ui.signUpFailure)
}

// Allows for user to automatically be signed in on successful sign-up.
const onSignUpSignIn = (formData) => {
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
    // After successful sign in, directs to show tasks in order to load tasks
    // upon sign in.
    .then(taskEvents.onShowTasks)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Toggle between sign-up and sign-in forms
const onSignInToggle = () => {
  $('.sign-up-box').addClass('hide')
  $('.sign-in-box').removeClass('hide')
}

// Toggle between sign-up and sign-in forms
const onSignUpToggle = () => {
  $('.sign-up-box').removeClass('hide')
  $('.sign-in-box').addClass('hide')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSignInToggle,
  onSignUpToggle
}
