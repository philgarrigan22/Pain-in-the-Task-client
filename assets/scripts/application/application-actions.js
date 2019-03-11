'use strict'
// const store = require('../store.js')

// Function to display temporary message to whatever HTML area selected.
const temporaryMessage = (selector, text) => {
  $(selector).html(text)
  setTimeout(() => $(selector).html('<h3></h3>'), 3500)
}

module.exports = {
  temporaryMessage
}
