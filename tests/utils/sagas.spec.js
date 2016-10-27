'use strict'
import * as utils from 'utils/sagas'

describe(`createReduxFormActionMatcher`, () => {
  const formName = 'TestForm'
  const actionType = 'CHANGE'
  const matchedAction = {
    type: `redux-form/${actionType}`,
    meta: {form: formName}
  }
  const incorrectActions = [
    {type: `redux-form/${actionType}`},
    {type: `redux-form/${actionType}`, meta: {form: `${formName}1`}},
    {type: `redux-form/${actionType}1`, meta: {form: formName}},
    {},
    null
  ]

  const matcher = utils.createReduxFormActionMatcher(actionType, formName)

  it(`should return a Function, that returns a Boolean`, () => {
    expect(matcher).to.be.a('Function')
    expect(matcher(matchedAction)).to.be.a('Boolean')
  })
  it(`should match actions of given formName and type`, () => {
    expect(matcher(matchedAction)).to.be.true
  })
  it(`should return false in any other case`, () => {
    incorrectActions.forEach((action) => 
      expect(matcher(action)).and.to.be.false
    )
  })
})