import React from 'react';
import Card from './context';

function Home () {

    

    return (
       
            <Card

            bgcolor="dark"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text="You can use this Bank"
            body={(<img src="./image.png" className="img-fluid" alt="Responsive"/>)}
            />
       

    );

}

export default Home;