// import { response } from 'express';
import React, { useState, useEffect } from 'react';
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
          
          const atts1 = Object.values(JSON.parse(JSON.stringify(data)));
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
      

      {/* <div>
        
        {merchants}
      </div> */}
      {/* {merchants ? merchants :   'There is no merchant data available'} */}
      Hi I am tirth the great
      <table>
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
              
              {merchants.map((item,key1) => {
                return(
                <tr key={key1}>
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
           
          </table>

      <br />
      {/* <button onClick={createMerchant}>Add</button> */}
      <br />
      {/* <button onClick={deleteMerchant}>Delete</button> */}
      <h1>product filter</h1>
      {/* {filter ? 'There is no filter data available' : filter} */}
    </div>
  );
}
  

export default App;

