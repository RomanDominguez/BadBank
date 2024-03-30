import React from "react";
import Card from "./context";

function Balance () {

    

    return (
        <>
        <h1>BALANCE</h1><br/>
        
            <Card
                    bgcolor="primary"
                    txtcolor="white"
                    header="Make a Deposit"
                    body={<button>Balance</button>}
            />
               
        
        </>
        

    );

}

export default Balance;