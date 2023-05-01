import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPosts] =useState([]);
    const [id,setId] = useState(1);
    const fetchData = async ()=>{
        const response =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response);
        setPosts([...posts,response.data])
    }
    const getIdControl =(id)=>{
if(id>100){
    alert("not enough data")
}else{
    setId(id)
}
    }
    useEffect( ()=>{
        //  axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        //     console.log(response)
        //  }).catch((error)=>{
        //     console.log(error)
        //  });
        const response = fetchData()
        console.log(posts)
    
    },[id])
  return (
    <div>
    <input  type="text" onChange={(e)=>{getIdControl(e.target.value)} }/>
    
    <ul>
        {
            posts.map((el,i)=>{
               
                    return <li key={el.id}>{el.title}</li>
                
               
            })
        }
    </ul>
    </div>
  )
}

export default DataFetching