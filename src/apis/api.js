
import axios from 'axios'


const url ='http://localhost:8000/'

export const createpost =(ne) =>{
   return axios.post("http://localhost:8000/add",ne)
}

export const fetchpost=()=> {
  return  axios.get('http://localhost:8000/get')
}

export const removepost = (id) => {
  return axios.delete(`http://localhost:8000/remove/${id}`)
}

export const updatepost = (id, newpost)=> { return axios.put(`http://localhost:8000/update/${id}`,newpost)}
