import actiontypes from '../../store/actiontypes'

const initState = {
    loading: false,
    error: null,
    data: []
}

const CustomerReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().customer.postCustomer:
            return {
                ...state,
                loading: true
            }

        case actiontypes().customer.postCustomerSuccess:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }

        case actiontypes().customer.postCustomerFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default CustomerReducer