
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

function Users({setUserid}) {
  const [users, setUsers] = useState([]);
  try {
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
  }
  catch (error) {
    console.log("error", error);
  }
  return (
    <div>
      <h2>Kullanıcılar</h2>
      <Table striped className='users-td'>
        <thead>
            <tr>
              <th>  #        </th>
              <th>  Name     </th>
              <th>  Userame  </th>
              <th>  Email    </th>
            </tr>
        </thead>
        <tbody>

          {users.map((user) => (

            <tr key={user.id}  onClick={() => setUserid(user.id)}>

              <td>  {user.id}        </td>
              <td>  {user.name}      </td>
              <td>  {user.username}  </td>
              <td>  {user.email}     </td>
            </tr>
          ))};
        </tbody>
      </Table>


    </div>
  )
}

export default Users