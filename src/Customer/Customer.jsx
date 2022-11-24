import React, { useState } from 'react'

const Customer = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = async (e) => {
      e.preventDefault()
      
      const json = JSON.stringify({firstName, lastName, email, phoneNumber})

      const res = await fetch('https://upp1webapp.azurewebsites.net/api/customers', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: json
      })
      if (res.status === 200) {

        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
      }
      
  }






  return (

<div> 
<div className="container my-5">

<section onSubmit={handleSubmit}>

  <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Todo List</h6>
  <h3 className="font-weight-normal text-center dark-grey-text pb-2 display-4"><strong>Please log in </strong></h3>
  <hr className="w-header my-4"/>
  <p className="lead text-center text-muted pt-2 mb-5">You are welcome to use Todo list</p>
  
  <div className="row d-flex justify-content-center">

    <div className="col-6">

      <div className="md-form md-outline form-lg">
        <input type="text" id="form1" className=" form-control"  onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
        <label htmlFor="form1">First Name</label>
      </div>

      <div className="md-form md-outline form-lg">
        <input type="text" id="form1" className=" form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
        <label htmlFor="form1">Last Name</label>
      </div>
      
      <div className="md-form md-outline form-lg">
        <input type="text" id="form2" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label htmlFor="form2">Email</label>
      </div>
    

      <div className="md-form md-outline form-lg">
        <input type="text" id="form1" className="form-control"  onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
        <label htmlFor="form1">Phone Number</label>
      </div>
      
      <button className="btn btn-block btn-primary btn-lg" >Log in </button>

    </div>

  </div>

</section>

</div>
</div>



  )
}

export default Customer