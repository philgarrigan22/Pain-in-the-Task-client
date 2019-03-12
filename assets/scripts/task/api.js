const config = require('../config.js')
const store = require('../store.js')

const createTask = (data) => {
  console.log('API REQUEST INVOKED')
  console.log('FORM DATA IS')
  console.log(data)

  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showTasks = () => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTask,
  showTasks
}
