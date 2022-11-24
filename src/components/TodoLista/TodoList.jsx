import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Comment from '../Comment'











const TodoList = () => {

const {id} =  useParams ()

const [issue, setIssue] = useState('')
const [comment, setComment] = useState('')
const [status, setStatus] = useState('')
const [error, setError] = useState(false)
const [showForm, setShowForm] = useState(false)


  
const getIssue = useCallback(async () => {
  const res = await axios.get(`https://upp1webapp.azurewebsites.net/api/issues/${id}`)
  setIssue(res.data)
  setStatus(res.data.status.id)
}, [id])

useEffect(() => {
  getIssue()
}, [getIssue, comment, status])

const handleSubmit = async e => {
    e.preventDefault()

    if(comment.trim() === ''){
      setError(true)
    }
    else
    {
      const issueId = id
      const customerId = issue.customer.id
      const json = JSON.stringify({comment, issueId, customerId})

      const res = await fetch('https://upp1webapp.azurewebsites.net/api/Comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: json
      })

      if(res.status === 200) {
        setComment('')
        setError(false)
        setShowForm(false)
      }

    }    
}

const updateIssue = async statusId => {

  const json = JSON.stringify({ id, statusId })
  const res = await fetch(`https://upp1webapp.azurewebsites.net/api/issues/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
  if(res.status === 200) {
    setStatus(statusId)
  }
}

  return (
    <div className="container my-5">

          { issue &&  

    <section>
      
      <div className="row">
        <div className="col-12">
            <div className="card card-list">
            <div className="card-header white d-flex justify-content-between align-items-center py-3">
              <p className="h5-responsive font-weight-bold mb-0">Lista</p>
              <ul className="list-unstyled d-flex align-items-center mb-0">
                <li><i className="far fa-window-minimize fa-sm pl-3"></i></li>
                <li><i className="fas fa-times fa-sm pl-3"></i></li>
              </ul>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Status</th>
                    <th scope="col">Discreption</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Time</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><p className="text-primary">{issue.customer.firstName} {issue.customer.lastName}</p></th>
                    <td> {issue.subject}</td>

                    <option>

                   { status ===1 && <td><span className="badge badge-success" onClick={() => updateIssue(1)}>Todo cretead </span></td>}
                   { status ===2 && <td><span className="badge badge-success" onClick={() => updateIssue(2)}>Todo started </span></td>}
                   { status ===3 && <td><span className="badge badge-success" onClick={() => updateIssue(3)}>Todo done </span></td>}
                    </option>
                    
                    <td className="pt-2 pb-0"><canvas id="bar" width="40" height="40">{issue.discreption}</canvas></td>

                    <td>
                        {
                              issue.comments.map(comment => ( <Comment key={comment.id} comment={comment}/> ))
                            }
                          {  !showForm && status !== 3 &&
                             <button className='btn btn-new' onClick={() => setShowForm(true)}><i className="far fa-edit"></i></button>
                          } 

                      
                      </td>
                          { showForm && 
                                  <form onSubmit={handleSubmit}>
                                    <textarea rows="10" className='comment-input' value={comment} onChange={(e => setComment(e.target.value))}></textarea>
                                    <button className='btn btn-new'>SPARA</button>
                                    { error && <p className='error'>Du måste ange en kommentar</p>}
                                  </form>
                                }

                    <td><span className="badge badge-danger ml-3"><i className="far fa-clock pr-1"></i>{issue.created}</span></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <div className="card-footer white py-3 d-flex justify-content-between">
              <button className="btn btn-primary btn-md px-3 my-0 mr-0">Place New Todo</button> 
            </div>
          </div>
        </div>
      </div>
  
    </section>
  }
    
  </div>
  )
}

export default TodoList