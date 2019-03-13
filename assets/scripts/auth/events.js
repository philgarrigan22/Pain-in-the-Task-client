'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const taskEvents = require('../task/events.js')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(() => { onSignUpSignIn(formData) })
    .catch(ui.signUpFailure)
}

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

const onSignInToggle = () => {
  $('.sign-up-box').addClass('hide')
  $('.sign-in-box').removeClass('hide')
}

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
