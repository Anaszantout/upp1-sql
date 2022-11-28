import axios from 'axios'
import {useState, useEffect, useCallback} from 'react'
import TodoCard from './TodoCard'

const Todo = () => {

 const [ issues, setIsuues] = useState([])

const getIssues = useCallback(async ()=> {
    const res = await axios.get ('https://upp1webapp.azurewebsites.net/api/issues')
    setIsuues(res.data)
}, [])
 useEffect (()=> {
    getIssues()

 },[getIssues])



  return (
    <div>
        {
            issues.length ? [...issues].reverse().map(issue => <TodoCard key={issue.id} issue={issue}/>)
            :<p className='customer-text'>Todo lista is loading </p>
        }
    </div>
  )
}

export default Todo