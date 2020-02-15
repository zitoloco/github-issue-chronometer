const moment = require('moment')

function parseEvents (events) {

  let labels = events.filter(event => event.event === "labeled")
  .map(event => {
    return {
      name: event.label.name,
      state: "open",
      started_at: event.created_at,
      finished_at: null,
      timestamp_duration: null
    }
  })

  events.filter(event => event.event === "unlabeled").forEach(event => {

    let labelToUpdate = labels.find(label => label.name === event.label.name)

    labelToUpdate.state = "closed"
    labelToUpdate.finished_at = event.created_at

    const start = moment(labelToUpdate.started_at)
    const end = moment(labelToUpdate.finished_at)

    labelToUpdate.timestamp_duration = end.diff(start).valueOf()
  })

  return { labels }
  
}

module.exports = parseEvents