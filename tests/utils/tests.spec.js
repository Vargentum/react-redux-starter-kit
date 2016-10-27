'use strict'
import * as utils from 'utils/tests'

describe(`makeFakeStore`, () => {
  const REDUX_STORE_API = ['getState', 'dispatch', 'subscribe', 'replaceReducer']
  let emptyStore
  beforeEach(() => {
    emptyStore = utils.makeFakeStore()
  })

  it(`should generate an object`, () => {
    expect(emptyStore).to.be.an('object')
  })
  it(`fabriqued element should has Redux Store API`, () => {
    REDUX_STORE_API.forEach((method) => 
      expect(emptyStore).to.have.property(method).that.is.a('function')
    )
  });
})