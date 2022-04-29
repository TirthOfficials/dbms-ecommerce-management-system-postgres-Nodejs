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


   }

  return (
    
    <div>
      {console.log(typeof(merchants))}
      {console.table(merchants)}
      <h1 align="center">E-Commerce Management System</h1>
      {/* {merchants.map(home => <div id="llll" className='flex text-red-500'><div id="l">{home.user_id}</div><div id="l">{home.f_name}</div><div id="l">{home.l_name}</div></div>)} */}
    {/* <div id='books'>
    <span id="heading">User Details</span>
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
    
    </div> */}
    
    
    {/* <div id='books'>
    <span id="heading">Cancelled Orders</span>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">Order ID</th>
          <th scope="col">Customer ID</th>
          <th scope="col">Order Date</th>
          <th scope="col">Cancellation ID</th>
          <th scope="col">Cancellation Date</th>
          
        </tr>
      </thead>
      {merchants.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.cancelled_orders.substring(1,4)}</td>
            <td>{el.cancelled_orders.substring(5,8)}</td>
            <td>{el.cancelled_orders.substring(9,19)}</td>
            <td>{el.cancelled_orders.substring(20,23)}</td>
            <td>{el.cancelled_orders.substring(24,34)}</td>
            
          </tr>
        );
      })}
    </table>
    
    </div> */}
    
    {/* <div id='books'>
    <span id="heading">Orders Between 2022-03-15 to 2022-03-27</span>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">Order ID</th>
          <th scope="col">Customer ID</th>
          
          
        </tr>
      </thead>
      {merchants.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.orders.substring(1,4)}</td>
            <td>{el.orders.substring(5,8)}</td>
            
            
          </tr>
        );
      })}
    </table>
    
    </div> */}
    {/* <div id='books'>
    <span id="heading">Product Filter</span>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          
          
        </tr>
      </thead>
      {merchants.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.product_filter.substring(1,4)}</td>
            <td>{el.product_filter.substring(6,27)}</td>
            <td>{el.product_filter.substring(29,32)}</td>
            
            
          </tr>
        );
      })}
    </table>
    
    </div> */}
    {/* <div id='books'>
    <span id="heading">Category</span>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Total Count</th>
          
          
        </tr>
      </thead>
      {merchants.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.products.substring(2,17)}</td>
            <td>{el.products.substring(20,21)}</td>
            
            
          </tr>
        );
      })}
    </table>
    
    </div> */}
    <div id='books'>
    <span id="heading">Cart Info</span>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">Customer ID</th>
          <th scope="col">Cart ID</th>
          <th scope="col">Total Quantity</th>
          <th scope="col">Total Amount(Rs.)</th>
          
          
        </tr>
      </thead>
      {merchants.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.cart_info.substring(1,4)}</td>
            <td>{el.cart_info.substring(5,8)}</td>
            <td>{el.cart_info.substring(9,10)}</td>
            <td>{el.cart_info.substring(11,18)}</td>
            
            
          </tr>
        );
      })}
    </table>
    
    </div>

    <div class="center">  
    <button type="button">Cancelled Orders</button>
    <button type="button">Orders between 2 Dates</button>
    <button type="button">Product Filter</button>
    <button type="button">Category</button>
    <button type="button">Cart Info</button>
    </div>  
      {/* <div>
        
        {merchants}
      </div> */}
      {/* {merchants ? merchants :   'There is no merchant data available'} */}
      
    </div>
    
  );
}
  

export default App;

