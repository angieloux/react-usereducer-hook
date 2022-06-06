export default function reducer(state, action) {
    switch(action.type) {
        case 'setProjects': {
            return {
                ...state, // destructure the current state & include that
                projects: action.data // make a change to the projects piece of state
            }
        }
        default: return state
    }
}