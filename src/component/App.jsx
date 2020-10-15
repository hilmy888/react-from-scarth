import React, {useState} from 'react'
import Button from './Button.jsx'
import Input from './Input.jsx'

function App () {

  const [inputValue, setInputValue] = useState('')
    
  const color = "red"      
  function onButtonClick(){
      alert(inputValue)
  }
  
  function onInputChange(event){
        // console.log (event.target.value)
        setInputValue(event.target.value)
  }

    return (
        <div>
            APP : {inputValue}
            <br/>
            <Input
            handleChange={onInputChange}/>
            <br/>
            <Button
                color={color}
                buttonClick={onButtonClick}>
            klik
            </Button>
        </div>
    )
}

export default App