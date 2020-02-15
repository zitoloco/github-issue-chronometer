// const expect = require('chai').expect

// const issueMock442 = require("../mocks/issue-442.json")

// describe('Issue mock details', () => {

//   it('Issue number should be 442', () => {

//     const issueNumber = issueMock442.number

//     expect(issueNumber).to.equal(442)
//   })

//   it('Labels should have: cos:fixed-date, phase:development and category:feature', () => {

//     const issueLabels = issueMock442.labels.map(label => label.name )

//     expect(issueLabels).to.have.members([ 
//         'cos:fixed-date', 
//         'phase:development',
//         'category:feature'
//       ])
//   })

//   it('Issue should be closed', () => {

//     const issueState = issueMock442.state

//     expect(issueState).to.equal('closed')
//   })

// })