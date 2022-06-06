export default function reducer(state, action) {
    switch(action.type) {
        case 'setProjects': {
            return {
                ...state, // destructure the current state & include that
                projects: action.data // make a change to the projects piece of state
            }
        }
        case 'addProject': {
            // can do some validation on action.data (i.e. the new project)
            let name = action.data['name']
            let description = action.data['description']
            if (name && description) {
                return {
                    ...state,
                    // action.data = new project
                    // state.projects = existing projects in state
                    projects: [action.data, ...state.projects]
            }
            
            } else if (!name || !description){
                alert('Type in a project name & description')
            }
        /* falls through */
        }
        
        default: return state
    }
}