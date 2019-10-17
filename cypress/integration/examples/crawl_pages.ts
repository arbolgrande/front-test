/// <reference path="../../support/index.d.ts" />
interface Targets {
  url: string
  fileName: string
}
describe('Crwaler', function () {

  const url: Targets[]  = [
    { url: 'https://google.com', fileName: 'top'}
  ]
  it('Visit google.com', function () {
    cy.visit('https://google.com')
    cy.screenshot('top', {capture: "viewport"})
  })
  // before(function () {
  //   // runs once before all tests in the block
  // })

  // after(function () {
  //   // runs once after all tests in the block
  // })

  // beforeEach(function () {
  //   // runs before each test in the block
  // })

  // afterEach(function () {
  //   // runs after each test in the block
  // })
})