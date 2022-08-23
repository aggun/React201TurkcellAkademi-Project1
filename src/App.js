import './App.css';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

import React, { useState } from 'react'

function App() {
  const [userid, setUserid] = useState(null);
  return (
    <div center className="App" >
      <div>
        <Users setUserid= {setUserid} />
      </div>
      <div>
        <UserDetails  userid= {userid}/>
      </div>
    </div>
  );
}

export default App;
