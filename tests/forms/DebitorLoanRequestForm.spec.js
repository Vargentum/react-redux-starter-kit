'use strict'
import React, { Component, PropTypes as PT } from 'react'
import _ from 'lodash'
import { shallow, mount, render } from 'enzyme'
import DebitorLoanRequest, {fields} from 'forms/DebitorLoanRequestForm/DebitorLoanRequestForm'
import {makeFakeStore} from 'utils/tests'
import {Provider} from 'react-redux'


describe('(Form) DebitorLoanRequest', () => {
  let Component
  beforeEach(() => {
    const store = makeFakeStore()
    Component = mount(<Provider store={store}>
      <DebitorLoanRequest />
    </Provider>)
  })

  it(`should render a component`, () => {
    expect(Component).to.be.present();
  });

  it(`should render as many inputs as described in "fields" variable`, () => {
    debugger
    expect(Component).to.have.exactly(fields.length).descendants('input');
  });
})
