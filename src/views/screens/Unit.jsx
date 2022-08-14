import React ,{useState,useEffect}from 'react';
import httpReq from './../../services/http.service';
import axios from "axios";
const Unit = () => {
    const [ip,setIp]=useState({})
    let tempFun=async()=>{
      await axios.get("https://geolocation-db.com/json/").then(({ data }) => {
         
          if (data?.IPv4) {
              setIp(data?.IPv4 )
          }
      })
  
  
          // make sure to catch any error
          .catch(console.error);;
  }
  const postIp=()=>{
    console.log( ip)
      httpReq.post('visitor', { ip:ip })
    .then(({ success }) => {
       console.log('sc',success)
    })
  }
  postIp()
    useEffect(() => {
    
      tempFun()
    
      const lan = localStorage.getItem('lan')
      if (!lan) {
        localStorage.setItem('lan', 'bn')
      }
  
  
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Unit;