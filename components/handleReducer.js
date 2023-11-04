import { userRows } from "@/src/data";
import { useImmerReducer } from "use-immer";

export function useUserState() {
    const [ userRowsState, dispatch ] = useImmerReducer(tasksReducer, userRows)
    
    return {userRowsState, dispatch}
}

let nextId = 16

function tasksReducer(draft, action) {
    switch(action.type) {
        case 'added': {
            draft.push({
                id:nextId++,
                img: null,
                lastName: action.lastName,
                firstName: action.firstName,
                email: action.email,
                phone: action.phone,
                createdAt: action.createdAt,
                verified: action.verified,
            })
            break;
        }

        case 'deleted': {
            return draft.filter((c) => c.id !== action.id)
        }
    }
}
