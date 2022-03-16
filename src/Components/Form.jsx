import Button from './Button';

export default function Form() {


    const btnProperty={
      label:"submit",
      type:"submit",
        theme:{
            backgroundColor:"green",
        },
        onclick:handleSubmit
    }
    
    
    function handleSubmit(){
        
        
    }
  return (
      <>

    <form>
    <h1> Contact me</h1>
    <label>Name</label>
    <input type="text" required/>
    <label>Email</label>
    <input type="email" required/>
    <Button passProperty={btnProperty}/>
    </form>
    </>
  )
}
