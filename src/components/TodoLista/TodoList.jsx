import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Comment from '../Comment'
import Modal from '../ModalDelete'











const TodoList = () => {

const {id} =  useParams ()

const [issue, setIssue] = useState('')
const [comment, setComment] = useState('')
const [status, setStatus] = useState('')
const [error, setError] = useState(false)
const [showForm, setShowForm] = useState(false)
const [showModal, setShowModal] = useState(false)


  
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
    <>
          { showModal && <Modal setShowModal={setShowModal} updateIssue={updateIssue}/> }
          { issue && 
            
    <div className="container my-5">
     

    <section>
      
      <div className="row">
        <div className="col-12">
            <div className="card card-list">
            <div className="card-header white d-flex justify-content-between align-items-center py-3">
              <p className="h5-responsive font-weight-bold mb-0">Lista</p>
              <ul className="list-unstyled d-flex align-items-center mb-0">
                
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
                    <th scope="col">Comment</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    

                    
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                      <p className="fw-bold mb1">{issue.customer.firstName} {issue.customer.lastName}</p>
                      <p className='text-muted mb-0'>{issue.customer.email}</p>
                      <p className='text-muted mb-0'>{issue.customer.phoneNumber}</p>
                        </div>

                      </div>
                      </td>


                    <td> {issue.subject}</td>


                    <td>
                      <div className='d-flex aligen-items-center'>
                        <div className='ms-3'>

                       <div>
                     { status === 1 && <small className='date-text'>Todo cretead {issue.created.slice(0, 10)} kl {issue.created.slice(11, 16)}</small>}
                     { status === 2 && <small className='date-text'>Todo started  {issue.update.slice(0, 10)} kl {issue.update.slice(11, 16)}</small>}
                     { status === 3 && <small className='error'>Todo done {issue.update.slice(0, 10)} kl {issue.update.slice(11, 16)}</small>}
                       </div>

                    <div>
                   { status === 1 && <button className="badge badge-success" onClick={() => updateIssue(2)}>Todo started  </button>}
                   { status === 2 && <button className="badge badge-primary" onClick={() => setShowModal(true)}>Todo done </button>}
                   { status === 3 && <span className="badge badge-warning" >Todo disapear </span>}
                    </div>

                        </div>
                      </div>
                    
                    </td>


                    <td className="pt-2 pb-0">{issue.description}</td>



                    <td>
                        {
                              issue.comments.map(comment => ( <Comment key={comment.id} comment={comment}/> ))
                            }
                          {  !showForm && status !== 3 &&
                             <button type='button' className='btn btn-link btn-sm btn-rounded' onClick={() => setShowForm(true)}>Edite</button>
                          } 

                      
                          { showForm && 
                                  <form onSubmit={handleSubmit}>
                                    <textarea rows="5" className='comment-input' value={comment} onChange={(e => setComment(e.target.value))}></textarea>
                                    <button className='btn btn-new-primary'>Save</button>
                                    { error && <p className='error-warning'>You must write comment </p>}
                                  </form>
                                }
                                </td>

                  </tr>
                  
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </div>
  
    </section>
    
    </div>
    
  }
  </>
  )
}

export default TodoList