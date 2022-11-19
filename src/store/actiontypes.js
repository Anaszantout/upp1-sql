const actiontypes = () => {
    return {
        issues:{
            getIssues:'GET_ISSUES',
            getIssuesSuccess:'GET_ISSUES_SUCCESS',
            getIssuesFailure:'GET_ISSUES-FAILURE'
        },
        Customer: {

            postCustomer:  'POST_CUSTOMER',
            postCustomerSuccess: 'POST-CUSTOMER_SUCCESS',
            postCustomerFailure: 'POST_CUSTOMER_FAILURE'
        }
    }
}