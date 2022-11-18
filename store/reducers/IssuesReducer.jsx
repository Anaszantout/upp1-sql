

const initState = {
    loading: false,
    error: null,
    data: []
}

const IssuesReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().Issues.getIssues:
            return {
                ...state,
                loading: true
            }

        case actiontypes().Issues.getIssuesSuccess:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }

        case actiontypes().products.getIssuesFailure:
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