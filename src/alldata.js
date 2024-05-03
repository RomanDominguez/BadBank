import React from "react";
import Card from "./context.js";


function AllData () {

    
    const data = {
        users: [
          {
            name: "anon01",
            email: "anon01@mit.edu",
            password: "***********",
            balance: 5000,
          },
          {
            name: "anon02",
            email: "anon02@mit.edu",
            password: "***********",
            balance: 6000,
          },
          {
            name: "anon03",
            email: "anon03@mit.edu",
            password: "***********",
            balance: 7000,
          },
          {
            name: "anon04",
            email: "anon04@mit.edu",
            password: "***********",
            balance: 8000,
          },
          {
            name: "anon05",
            email: "anon05@mit.edu",
            password: "***********",
            balance: 9000,
          },
        ]
      }

    return (
    <>
        <h1>ALL DATA</h1><br/>
        
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="This is All Data"
        body={
          <div className="container overflow-x-auto">
            <table style={{minWidth:'700px'}} className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    #
                  </th>
                  <th scope="col" className="text-center">
                    User
                  </th>
                  <th scope="col" className="text-center">
                    Email
                  </th>
                  <th scope="col" className="text-center">
                    Password
                  </th>
                  <th scope="col" className="text-center">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((user, index) => {
                  return (
                    <tr key={user.name}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>$ {user.balance}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        }
      />
        
      
    </>

    );

}

export default AllData;
