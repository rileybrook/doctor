import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"
import joinPatientInfoMiddleware from "./middleware/joinPatientInfoMiddleware"
import validateClaimMiddleware from "./middleware/validateClaimMiddleware"
import validateBillingLinePropertyUpdateMiddleware from "./middleware/validateBillingLinePropertyUpdateMiddleware"
import apiMiddleware from "./middleware/apiMiddleware"

const initialState = {}

const middleware = [
  thunk,
  joinPatientInfoMiddleware,
  validateClaimMiddleware,
  validateBillingLinePropertyUpdateMiddleware,
  apiMiddleware
]

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)
// compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
export default store
