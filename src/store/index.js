import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slicers/auth'

export default configureStore({
  reducer: {
    authenticate: authReducer
  }
})