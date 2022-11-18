import actiontypes from '../actiontypes'
import axios from 'axios'

export const getIssues = () => {
    return async dispatch => {
        dispatch({
            type: actiontypes().issues.getIssues
        })

        try {
            const res = await axios.get('https://upp1webapp.azurewebsites.net/api/issues')
            if(res.status === 200) {
                dispatch(getIssuesSuccess(res.data))
            } else {
                throw new Error('Could not get the data')
            }
        } catch (err) {
            dispatch(getIssuesFailure(err.message))
        }
    }
}

const getIssuesSuccess = (issues) => {
    return {
        type: actiontypes().issues.getIssuesSuccess,
        payload: issues
    }
}

const getIssuesFailure = (err) => {
    return {
        type: actiontypes().issues.getIssuesFailure,
        payload: err
    }
}