import { Link } from 'react-router-dom'





const TodoCard = ({issue}) => {



  return (
    <div className='Card'>
            <h2 className='card-title'>{issue.Subject}</h2>
            <small className='date-text'>Todo created {issue.created.slice(0, 10)} kl {issue.created.slice(11, 16)}</small>
            <div className='card-flex'>                
                <p><span className='status-text'>Todo state </span> {issue.status.status}</p>                 
                <Link to={`/${issue.id}`}><button className='btn-card'>See detalies </button></Link>
            </div>
        </div>
  )
}

export default TodoCard