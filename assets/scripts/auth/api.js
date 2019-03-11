const config = require('../config.js')
// const store = require('../store.js')

// From auth sign up
const signUp = (formData) => {
  console.log('API signUP engaged')

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
  // signIn,
  // changePassword,
  // signOut
}
