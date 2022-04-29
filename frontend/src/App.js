// import { response } from 'express';
import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css'
function App() {
  const [merchants, setMerchants] = useState([]);
  // const [us_de1]=getMerchant()
  // const [filter, setFilter] = useState(false);
  useEffect(() => {
     getMerchant();
    // product_filter();
  }, []);
//   var us_de1=getMerchant();
//   return(
//   <table>
//   <thead>
//     <tr>
//       <th>User ID</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Phone No1</th>
//       <th>Phone</th>
//       <th>Email</th>
//     </tr>
//   </thead>
//   <tbody>
//     {us_de1.map(item => {
//       return (
//         <tr key={item.user_id}>
//           <td>{ item.f_name }</td>
//           <td>{ item.l_name }</td>
//           <td>{ item.phone_no1 }</td>
//           <td>{ item.phone_no2 }</td>
//           <td>{ item.email_id }</td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
//   )
  

  // function getMerchant() {
  //   fetch('http://localhost:3001')
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       setMerchants(data);
  //     });
  // }
  

  function getMerchant() {
    fetch('http://localhost:3001')
      .then((response) => {
        // var us_de1=response.text()
       
        return response.text();
        
      })
        .then((data) => {
          
          const atts1 = Object.values(JSON.parse(data));
          console.log(typeof(atts1));          
          setMerchants(atts1);
          
         
        });
      
      
  }
  // function dis_user(){
  //   var us_de1=getMerchant();
  //   return(
  //   <table>
  //   <thead>
  //     <tr>
  //       <th>User ID</th>
  //       <th>First Name</th>
  //       <th>Last Name</th>
  //       <th>Phone No1</th>
  //       <th>Phone</th>
  //       <th>Email</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {us_de1.map(item => {
  //       return (
  //         <tr key={item.user_id}>
  //           <td>{ item.f_name }</td>
  //           <td>{ item.l_name }</td>
  //           <td>{ item.phone_no1 }</td>
  //           <td>{ item.phone_no2 }</td>
  //           <td>{ item.email_id }</td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table>
  //   )
  // }
  //function product_filter() {
  //   fetch('http://localhost:3001/filter')
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       setMerchants(data);
  //     });
  // }

  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');

  //   fetch('http://localhost:3001/merchants', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email }),
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getMerchant();
  //     });
  // }

  // function deleteMerchant() {
  //   let id = prompt('Enter merchant id');

  //   fetch(`http://localhost:3001/merchants/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getMerchant();
  //     });
   }

  return (
    
    <div id='merchants'>
      {console.log(typeof(merchants))}
      {console.table(merchants)}
      {/* {merchants.map(home => <div id="llll" className='flex text-red-500'><div id="l">{home.user_id}</div><div id="l">{home.f_name}</div><div id="l">{home.l_name}</div></div>)} */}
    <div id='books'>
    <span id="heading">DBMS</span>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone No1</th>
          <th scope="col">Phone No2</th>
          <th scope="col">Email ID</th>
          
        </tr>
      </thead>
      {merchants.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.user_id}</td>
            <td>{el.f_name}</td>
            <td>{el.l_name}</td>
            <td>{el.phone_no1}</td>
            <td>{el.phone_no2}</td>
            <td>{el.email_id}</td>
            
          </tr>
        );
      })}
    </table>
    
    </div>

      {/* <div>
        
        {merchants}
      </div> */}
      {/* {merchants ? merchants :   'There is no merchant data available'} */}
      {/* <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone No1</th>
                <th>Phone No2</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              
              {merchants.map((item,key) => {
                return(
                <tr key={key}>
                    <td>{ item.user_id }</td>
                    <td>{ item.f_name }</td>
                    <td>{ item.l_name }</td>
                    <td>{ item.phone_no1 }</td>
                    <td>{ item.phone_no2 }</td>
                    <td>{ item.email_id }</td>
                  </tr>
                );
                })}
            </tbody>
           
          </table> */}

      
      
     
    </div>
    
  );
}
  

export default App;

