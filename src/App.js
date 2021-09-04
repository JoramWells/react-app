import React, { useEffect, useState } from "react"
import axios from 'axios'
export default function App(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("https://allquotes.herokuapp.com/quotes/rand")
        .then((response) => {
          setData(response.data);
          localStorage.setItem("data", JSON.stringify(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
        return () => {
            
        }
    }, [])
    console.log(data)
    return (
        <div>
            <h1>wtf bram!</h1>

        </div>
    )
}