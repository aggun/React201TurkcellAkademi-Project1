import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';

function UserDetails({userid}) {
    const [user, setUser] = useState(null);
    const[loading, setLoading]= useState(false);

    useEffect(()=>{
        setLoading(true);
axios(`https://jsonplaceholder.typicode.com/users/${userid}`)
.then((res)=> setUser(res.data))
.finally(()=> setLoading(false));

    },[userid])
  return (
    <div>
        <h2>Detaylar</h2>
        {loading && <div>Yükleniyor....</div>}
        
{!loading && <pre>{JSON.stringify(user,null,2)}</pre>}
    </div>
  );
}

export default UserDetails