const expect = require('chai').expect
const parseEvents = require('../../lib/parseEvents')

const issueMockEvents = require("../mocks/issue-442-events.json")

describe('Expected result', () => {

  it('The result.labels should be an array', () => {

    const result = parseEvents(issueMockEvents)

    expect(result.labels).to.be.an('array')
  })

  it('The result should haven an label field', () => {

    const result = parseEvents(issueMockEvents)

    expect(result).to.have.keys('labels')
  })

  it('Each label item should have a field: name', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const nameCount = result.labels
      .map(label => "name" in label ? true : false)
      .filter(name => name).length

    expect(nameCount).to.be.equal(labelCount)
  })

  it('Each label item should have a field: state', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const stateCount = result.labels
      .map(label => "state" in label ? true : false)
      .filter(state => state).length

    expect(stateCount).to.be.equal(labelCount)
  })

  it('Each label item should have a field: started_at', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const started_atCount = result.labels
      .map(label => "started_at" in label ? true : false)
      .filter(started_at => started_at).length

    expect(started_atCount).to.be.equal(labelCount)
  })

  it('Each label item should have a field: finished_at', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const finished_atCount = result.labels
      .map(label => "finished_at" in label ? true : false)
      .filter(finished_at => finished_at).length

    expect(finished_atCount).to.be.equal(labelCount)
  })

  it('Each label item should have a field: timestamp_duration', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const timestamp_durationCount = result.labels
      .map(label => "timestamp_duration" in label ? true : false)
      .filter(timestamp_duration => timestamp_duration).length

    expect(timestamp_durationCount).to.be.equal(labelCount)
  })

  it('Field name should have value', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const nameValueCount = result.labels
      .map(label => label.name ? true : false)
      .filter(name => name).length

    expect(nameValueCount).to.be.equal(labelCount)
  })

  it('Field state should have value', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const stateValueCount = result.labels
      .map(label => label.state ? true : false)
      .filter(state => state).length

    expect(stateValueCount).to.be.equal(labelCount)
  })

  it('Field started_at should have value', () => {

    const result = parseEvents(issueMockEvents)

    const labelCount = result.labels.length
    const started_atValueCount = result.labels
      .map(label => label.started_at ? true : false)
      .filter(started_at => started_at).length

    expect(started_atValueCount).to.be.equal(labelCount)
  })

  it('Field state should be open or closed', () => {

    const result = parseEvents(issueMockEvents)

    const states = result.labels.map(label => {

      if (label.state === 'open' || label.state === 'closed') {

        return true
      }

      return false
    })

    expect(states).to.not.include(false)
  })

  it('Labels with status "open" the field finished_at should be null', () => {

    const result = parseEvents(issueMockEvents)

    const states = result.labels.filter(label => label.state === "open")
      .map((label) => {

        if(label.finished_at === null) {

          return true
        }

        return false
      })

      expect(states).to.not.include(false)
  })

  it('Labels with status "open" the field timestamp_duration should be null', () => {

    const result = parseEvents(issueMockEvents)

    const states = result.labels.filter(label => label.state === "open")
      .map((label) => {

        if(label.timestamp_duration === null) {

          return true
        }

        return false
      })

      expect(states).to.not.include(false)
  })

  it('Unlabeled event shold be closed in result', () => {

    const unlabeledEventCount = issueMockEvents
      .filter(event => event.event === "unlabeled").length

    const result = parseEvents(issueMockEvents)

    const closedLabelCount = result.labels.filter(label => label.state === "closed").length

    expect(unlabeledEventCount).to.be.equal(closedLabelCount)
  })

})