import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'



  // Parent component
  function ParentComponent(props) {

    const [parentWallet, parentAmount] = useState(1000);
  
    const parentToChild = () => {
      parentAmount(parentWallet - 100);
    }
  
    return (
      <Fragment>
        <h1>Parent money: {parentWallet}</h1>
        <button onClick={parentToChild}>request money from parent</button>
        <ChildComponent/>
      </Fragment>
    )
  }


// Child component
  const ChildComponent = (props) => {

    const [childWallet, childAmount] = useState(0);

    const recieveMoney = () => {
      childAmount(childWallet + 100);
    }

    return (
      <Fragment>
        <h1>Child wallet: {childWallet}</h1>
        <button onClick={recieveMoney}>request money from parent</button>
      </Fragment>
    )
  }

export default ParentComponent
