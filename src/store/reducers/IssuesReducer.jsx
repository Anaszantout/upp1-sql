import actiontypes from '../../store/actiontypes'

const initState = {
    loading: false,
    error: null,
    data: []
}

const IssuesReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().issues.getIssues:
            return {
                ...state,
                loading: true
            }

        case actiontypes().issues.getIssuesSuccess:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }

        case actiontypes().issues.getIssuesFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default IssuesReducer