import axios from "axios";
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  
  
  export const publicGet= async(url)=>{
    
    const res= await axios.get(`https://dance-flow-backend.onrender.com${url}`);
    return res.data;
    
  }
  
  
  


export const publicPost= async(url,data)=>{
    const res= await axios.post(`https://dance-flow-backend.onrender.com${url}`,data);
    return res.data;
    
}


export const privatePost= async(url,data)=>{
    const token= localStorage.getItem('dance-flow-token');
    config.headers.authorization = `Bearer ${token}`;
    const res= await axios.post(`https://dance-flow-backend.onrender.com${url}`,data,config);
   
    return res.data;
    
}

export const privateGet= async(url)=>{
  const token= localStorage.getItem('dance-flow-token');
  config.headers.authorization = `Bearer ${token}`;
  const res= await axios.get(`https://dance-flow-backend.onrender.com${url}`,config);
  return res.data;
  
}



export const updateStatus= async(data)=>{
  const token= localStorage.getItem('dance-flow-token');
    config.headers.authorization = `Bearer ${token}`;
    const res= await axios.put(`https://dance-flow-backend.onrender.com/status`,data,config);
   
    return res.data;

}


export const privatePut= async(url,data)=>{
  const token= localStorage.getItem('dance-flow-token');
    config.headers.authorization = `Bearer ${token}`;
    const res= await axios.put(`https://dance-flow-backend.onrender.com${url}`,data,config);
   
    return res.data;

}

export const privateDelete= async(url,data)=>{
  const token= localStorage.getItem('dance-flow-token');
    config.headers.authorization = `Bearer ${token}`;
    const res= await axios.delete(`https://dance-flow-backend.onrender.com${url}`,config);
   
    return res.data;

}