import React,{useState} from 'react';
export default function Form (){    
  
         const[username,setUsername]=useState('')
            const[demail,setDemail]=useState('')
            const[dpassword,setDpassword]=useState('')
            const[confirm,setConfirm]=useState('')
            
            const[pusername,setPusername]=useState('')
            const[pemail,setPemail]=useState('')
            const[apassword,setApassword]=useState('')
            const[cconfirm,setcconfirm]=useState('')
            const[ucolor, setUcolor]=useState('')  
            const[rcolor,setrcolor]=useState('')
            const[qcolor,setQcolor]=useState('')
            const[mcolor,setmcolor]=useState('')
  
            function validate() {
        console.log(username + demail + dpassword + confirm)
            if(username.length  > 8){
            setPusername('')
            setUcolor("00ff00")
            
          
        }  
        else {
          setPusername("username must be 8 letter")
            setUcolor("ff0000")
        
        }   
        
        if(demail.includes('@gmail.com'))
        {
          setPemail('')
          setrcolor('green')

        }
        else{
          setPemail("email should contain @gmail.com  ")
          setrcolor('red')
        

        }
        if(dpassword.length>8)
        {
          setApassword('')
          setQcolor('green')
          
          
        }
        else{
          setApassword(' password must contain 8 letter')
          setQcolor('red')
        }
        
    
    if(dpassword!=='' && confirm==dpassword )
    {
      setcconfirm('')
      setmcolor('green')

    }
    else{
      setcconfirm('the password is not matching')
      setmcolor('red')
    }

    
  }
          return ( 
            <div className="wq">
                <div className="row justtify-content-center">
                    <div className='shadow-sm p-3 mb-5 bg-white rounded'>
            <h1> Form validation </h1>
            
        <input type="text" placeholder='username' style={{borderColor:{ucolor}}} className='form-control'   value={username}  onChange={(e)=>{setUsername(e.target.value)}} />
          <p >{pusername}</p>

            <input type="text" placeholder='Email'  className='form-control' style={{borderColor:{rcolor}}} value={demail} onChange={(e)=>{setDemail(e.target.value)}} /> 
            <p>{pemail}</p>
                           <input type="text" placeholder='Password' className='form-control' style ={{bordercolor:{qcolor}}} value={dpassword} onChange={(e)=>{setDpassword(e.target.value)}} /><p>{apassword}</p>

            <input type="text" placeholder='Comfir-password'  className='form-control' style={{borderColor:{mcolor}}} value={confirm} onChange={(e)=>{setConfirm(e.target.value)}}  />
          <p>{cconfirm}</p>
           <button  className='btn btn-success'  onClick={validate}>SUBMIT</button>
             

      </div>      </div></div>
           

            
            
      
                   
            
          
        
          );
            }