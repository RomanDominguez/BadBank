import React from "react";
import Card from "./context";

function Withdraw () {

    

    return (
        <>
        <h1>WITHDRAW</h1><br/>
        
            <Card
                    bgcolor="primary"
                    txtcolor="white"
                    header="Make a Deposit"
                    body={<button>Withdraw</button>}
            />
               
        
        </>
        

    );

}

export default Withdraw;