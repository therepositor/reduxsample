import { createStore } from 'redux'
import reducer from './components/reducer/reducer'

const store = createStore(reducer);


export default store