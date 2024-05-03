import React from "react";
import Card from "./context";
import ReactDOM from 'react-dom';


function Withdraw () {

    const ATMWithdraw = ({ onChange, isWithdraw, isValid }) => {
        const choice = ['Withdraw'];
        console.log(`ATM isWithdraw: ${isWithdraw}`);
        return (
          <label className="label huge">
            <h3> {choice[Number(!isWithdraw)]}</h3>
            <input id="number-input" type="number" width="200" onChange={onChange}></input>
            <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
          </label>
        );
      }; 
    
      const Discount = () => {
        //let Withdraw = 10000; // state of this transaction
        const [Withdraw,     setWithdraw]             = React.useState(    0);
        const [totalState, setTotalState]             = React.useState( 1000);
        const [isWithdraw, setIsWithdraw]             = React.useState( true);
        const [atmMode,       setAtmMode]             = React.useState(   '');
        const [validTransaction, setValidTransaction] = React.useState(false);
      
        let status = `Account Balance $ ${totalState} `;
        console.log(`Account Rendered with isWithdraw: ${isWithdraw}`);
        const handleChange = (event) => {
          console.log(Number(event.target.value));
          if (Number(event.target.value) <= 0) {
            return setValidTransaction(false);
          }
          if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
            setValidTransaction(false);
          } else {
            setValidTransaction(true);
          }
          setWithdraw(Number(event.target.value));
        };
        const handleSubmit = (event) => {
          let newTotal = totalState - Withdraw;
          setTotalState(newTotal);
          setValidTransaction(false);
          event.preventDefault();
        };
      
        const handleModeSelect = (event) => {
          console.log(event.target.value);
          setAtmMode(event.target.value);
          setValidTransaction(false);
          if (event.target.value === 'Withdraw') {
            setIsWithdraw(true);
          } else {
            setIsWithdraw(false);
            console.log("go to deposit page");
          }
        };
      
    

    return (
        <>
        <h1>WITHDRAW</h1><br/>
        
            <Card
                    bgcolor="primary"
                    txtcolor="white"
                    header="Make a Withdraw"
                    body={<form onSubmit={handleSubmit}>
                    <>
                      <h2 id="total">{status}</h2>
                      <label>Select an action below to continue</label>
                      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                        <option id="no-selection" value=""></option>
                        <option id="Withdraw-selection" value="Withdraw">
                          Withdraw
                        </option>
                        
                      </select>
                      {atmMode && (
                        <ATMWithdraw
                          onChange={handleChange}
                          isWithdraw={isWithdraw}
                          isValid={validTransaction}
                        ></ATMWithdraw>
                      )}
                    </>
                  </form>}
            />
               
        
        </>
        

    );

}
ReactDOM.render(<Discount />, document.getElementById('root'));

}

export default Withdraw;