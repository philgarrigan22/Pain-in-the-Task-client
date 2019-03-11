'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
// const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()

  console.log('onSignUp engaged')

  const formData = getFormFields(event.target)

  console.log('check form data')
  console.log(formData)

  api.signUp(formData)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)

  console.log('onSignUp ended')
}

module.exports = {
  onSignUp
}
