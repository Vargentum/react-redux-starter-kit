/* -----------------------------
  factory for sagas function `pattern`
  This pattern matchis only redux-form actions

  Read more: http://yelouafi.github.io/redux-saga/docs/api/index.html#takepattern
----------------------------- */

export function createReduxFormActionMatcher (actionType, formName) {
  return (action) => { 
    if (!action || !action.meta) return false
    return action.type === `redux-form/${actionType}` && action.meta.form === formName
  }
}
