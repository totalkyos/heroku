'use strict'

exports.topic = {
  name: 'buildkits',
  description: 'manage buildpacks'
}

exports.commands = [
  require('./commands')
]
