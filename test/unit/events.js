const expect = require('chai').expect

const issueMockEvents = require("../mocks/issue-442-events.json")

describe('Test if mock json have the correct infos', () => {

  it('Mock should be an array of events', () => {

    expect(issueMockEvents).to.be.an('array')
  })

  it('Mock array should not be empty', () => {

    expect(issueMockEvents).to.not.be.empty
  })

  it('Each event should have an event field', () => {

    const totalEvents = issueMockEvents.length
    
    const events = issueMockEvents
      .map( event => event.event ? event.event : null  )
      .filter( event => event !== null )

    const totalEventsFields = events.length

    expect(totalEventsFields).to.be.equal(totalEvents)
  })

})