import React from 'react'

const TodoList = () => {
  return (
    <div className="container my-5">

  
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
                    <th scope="col">Item</th>
                    <th scope="col">Status</th>
                    <th scope="col">Discreption</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Time</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a className="text-primary">OR9842</a></th>
                    <td> Call of Duty IV </td>
                    <td><span className="badge badge-success">Shipped</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar" width="40" height="40"></canvas></td>
                    <td><i className="far fa-edit"></i></td>
                    <td><span className="badge badge-danger ml-3"><i className="far fa-clock pr-1"></i>2 mins</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a className="text-primary">OR1848</a></th>
                    <td>Samsung Smart TV</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar1" width="40" height="40"></canvas></td>
                  </tr>
                  <tr>
                    <th scope="row"><a className="text-primary">OR7429</a></th>
                    <td>iPhone 6 Plus</td>
                    <td><span className="badge badge-danger">Delivered</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar2" width="40" height="40"></canvas></td>
                  </tr>
                  <tr>
                    <th scope="row"><a className="text-primary">OR7429</a></th>
                    <td>Samsung Smart TV</td>
                    <td><span className="badge badge-info">Processing</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar3" width="40" height="40"></canvas></td>
                  </tr>
                  <tr>
                    <th scope="row"><a className="text-primary">OR1848</a></th>
                    <td>Samsung Smart TV</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar4" width="40" height="40"></canvas></td>
                  </tr>
                  <tr>
                    <th scope="row"><a className="text-primary">OR7429</a></th>
                    <td>iPhone 6 Plus</td>
                    <td><span className="badge badge-danger">Delivered</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar5" width="40" height="40"></canvas></td>
                  </tr>
                  <tr>
                    <th scope="row"><a className="text-primary">OR9842</a></th>
                    <td>Call of Duty IV</td>
                    <td><span className="badge badge-success">Shipped</span></td>
                    <td className="pt-2 pb-0"><canvas id="bar6" width="40" height="40"></canvas></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer white py-3 d-flex justify-content-between">
              <button className="btn btn-primary btn-md px-3 my-0 mr-0">Place New Order</button> 
              <button className="btn btn-light btn-md px-3 my-0 ml-0">View All Orders</button>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  
    
  </div>
  )
}

export default TodoList