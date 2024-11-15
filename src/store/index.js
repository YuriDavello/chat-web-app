import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slicers/auth'
import chatReducer from '../slicers/chat'

export default configureStore({
  reducer: {
    authenticate: authReducer,
    chat: chatReducer
  }
})