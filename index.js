#!/usr/bin/env node
'use strict'
var Push = require('pushover-notifications')
var rp = require('request-promise')

rp({
  url: 'https://api.github.com/users/' + process.argv[2] + '/repos?type=public',
  headers: {
    'User-Agent': 'jamescostian/pushpush'
  }
}).then(function (data) {
  var repos = JSON.parse(data)

  var today = new Date()
  var date = today.getDate()
  var month = today.getMonth()
  var year = today.getFullYear()

  var hasPushedToday = false

  for (var i = 0; i < repos.length; i++) {
    if (typeof repos[i].pushed_at === 'undefined') {
      continue
    } else {
      var commitDate = new Date(repos[i].pushed_at)
      if (commitDate.getDate() === date && commitDate.getMonth() === month && commitDate.getFullYear() === year) {
        hasPushedToday = true
        break
      }
    }
  }

  if (hasPushedToday) {
    console.log('Good job!')
  } else {
    console.log('PUSH!')
    sendPushover()
  }
}).error(function (error) {
  console.log(error)
  throw new Error('There was an error! Put all of the above in a new issue at https://github.com/jamescostian/pushpush/issues')
})

var sendPushover = function () {
  var msg = {
    message: "Hi, this is pushpush. You haven't pushed any open source commits today. Y U NO OPEN SOURCE ALL TEH THINGS?",
    title: 'PUSH OPEN SOURCE!'
  }

  var p = new Push({
    token: process.argv[3],
    user: process.argv[4]
  })

  p.send(msg, function (err) {
    if (err) {
      throw err
    }
  })
}
