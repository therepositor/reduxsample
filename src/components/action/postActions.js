import { BUG_ADDED, BUG_REMOVED } from "./types";

export const bugAdded = description => ({
        type: BUG_ADDED,
        payload: {
          description
        }
      
    })


export const bugRemoved = id => ({
        type: BUG_REMOVED,
        payload: {
          id
        }
      })
 