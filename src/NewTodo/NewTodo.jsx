import React, { useEffect, useState,useCallback } from 'react'
import axios from 'axios'

const NewTodo = () => {
  const [customers, setCustomers] = useState([])
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [customerId, setCustomerId] = useState(0)
  

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://upp1webapp.azurewebsites.net/api/customers')
        setCustomers(await res.json())
    }
    fetchData()
}, [])

  const handleSubmit = async (e) => {
      e.preventDefault()
      
      if (customerId !== 0) {
          const json = JSON.stringify({ subject, description, customerId })
          const res = await fetch('https://upp1webapp.azurewebsites.net/api/issues',{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: json
          })
          if(res.status === 200) {

              setSubject('')
              setDescription('')
              setCustomerId(0)
          }
      }
  }

  return (
      <form onSubmit={handleSubmit}>
          <div className="mb-3  mt-5">
              <label className="form-label">Choose Customer</label>
              <select className="form-select" onChange={(e) => setCustomerId(e.target.value)}>
                  <option value={0}>-- Choose Customer --</option>
                  {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>)}
              </select>
          </div>
          <div className="mb-3">
              <label className="form-label">Write Tilttle</label>
              <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="mb-3">
              <label className="form-label">Write Description </label>
              <textarea type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
          </div>
          
          <button type="submit" className="btn btn-success">Save</button>
      </form>
  )
}

export default NewTodo