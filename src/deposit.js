import React from "react";
import Card from "./context";

function Deposit () {

   
    return (
<>
<h1>DEPOSIT</h1><br/>

    <Card
            bgcolor="primary"
            txtcolor="white"
            header="Make a Deposit"
            body={<button>Deposit</button>}
    />
       

</>

    );

}

export default Deposit;