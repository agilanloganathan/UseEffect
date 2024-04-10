import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

    const [users,setUsers] = useState([])

    const getAllUsers = async () => {
        await axios.get("https://6614dda02fc47b4cf27d4589.mockapi.io/sample")
        .then ((res) =>{
            console.log(res.data)
           setUsers(res.data) 
        })
    }
useEffect (() =>{
    getAllUsers()
},[])


  return (
    
    <div className='container'>
      <h1> Use Effort Hooks</h1>
      <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users && users.map((user,index)=>{
                return(
                    <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td><button className='btn green'>Edit</button></td>
                    <td><button className='btn red'>Delete</button></td>
                </tr>
                )
            })}

            
            {/* <tr>
                <td>2</td>
                <td>Karthick</td>
                <td>55</td>
                <td>Pondy</td>
                <td><button className='btn green'>Edit</button></td>
                <td><button className='btn red'>Delete</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Karthick</td>
                <td>55</td>
                <td>Pondy</td>
                <td><button className='btn green'>Edit</button></td>
                <td><button className='btn red'>Delete</button></td>
            </tr> */}
           
        </tbody>
      </table>
        </div>
    
  )
}

export default App






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ItemList() {
//   const [items, setItems] = useState([]);
//   const [pagination, setPagination] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   useEffect(() => {
//     fetchItems();
//   }, [currentPage, itemsPerPage]);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get("https://6614dda02fc47b4cf27d4589.mockapi.io/sample")
//       setItems(response.data.items);
//       setPagination(response.data.pagination);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleItemsPerPageChange = (e) => {
//     setItemsPerPage(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Item List</h1>
//       <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
//         <option value="10">10 per page</option>
//         <option value="20">20 per page</option>
//         <option value="30">30 per page</option>
//       </select>
//       <ul>
//         {items.map(item => (
//           <li key={item._id}>{item.name} - {item.description}</li>
//         ))}
//       </ul>
//       <div>
//         {pagination.prevPage && (
//           <button onClick={() => handlePageChange(pagination.prevPage)}>Previous</button>
//         )}
//         <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
//         {pagination.nextPage && (
//           <button onClick={() => handlePageChange(pagination.nextPage)}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ItemList;