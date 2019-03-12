'use strict'
// const store = require('../store.js')
const appActions = require('../application/application-actions.js')

// Display message, reset form fields, then show amount of games played.
const showTasksSuccess = (responseData) => {
  console.log(responseData)
  appActions.temporaryMessage('#user-message', 'Successfully accesed tasks.')
  $(`form`).trigger(`reset`)

  responseData.tasks.forEach(task => {
    const taskHtml = (`
      <h3>Title: ${task.title}</h3>
      <p>Description: ${task.description}</p>
      <p>Due Date: ${task.target_date}</p>
      <br>
      `)
    $('#show-tasks-list').append(taskHtml)
  })
  // $('#show-games-list').removeClass('hidden')
  // $('.game-stats').removeClass('hidden')
}

// Display error message, then reset form fields.
const showTasksFailure = () => {
  appActions.temporaryMessage('#user-message', 'Unable to show tasks')
  $(`form`).trigger(`reset`)
}

module.exports = {
  showTasksSuccess,
  showTasksFailure
}
