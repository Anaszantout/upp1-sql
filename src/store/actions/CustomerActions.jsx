import actiontypes from '../actiontypes'
import axios from 'axios'

export const postCustomer = () => {
    return async dispatch => {
        dispatch({
            type: actiontypes().customer.postCustomer
        })

        try {
            const res = await axios.post('https://upp1webapp.azurewebsites.net/api/customers')
            if(res.status === 200) {
                dispatch(postCustomerSuccess(res.data))
            } else {
                throw new Error('Could not get the data')
            }
        } catch (err) {
            dispatch(postCustomerFailure(err.message))
        }
    }
}

const postCustomerSuccess = (customer) => {
    return {
        type: actiontypes().customer.postCustomerSuccess,
        payload: customer
    }
}

const postCustomerFailure = (err) => {
    return {
        type: actiontypes().issues.postCustomerFailure,
        payload: err
    }
}