import {BUG_ADDED, BUG_REMOVED} from '../action/types'

const reducer = (state = [], action) => {
    switch(action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    description: action.payload.description
                }
                
            ]
                
            
        case BUG_REMOVED:
            return [
                ...state,
                {
                    ...state.filter(bug => bug.id !== action.payload.id)
                }
            ] 
        default:
            return state
    }
}

export default reducer