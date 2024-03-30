import React from "react";
import UserContext from "./index.js";
import Card from "./context.js";

function AllData () {

    const ctx = React.useContext(UserContext);

    return (
    <>
        <h1>ALL DATA</h1><br/>
        
        <Card
            bgcolor="primary"
            txtcolor="white"
            header="This is All Data"
            body={JSON.stringify(ctx)}
    />
        
        
        

       

    </>

    );

}

export default AllData;