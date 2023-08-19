import React from 'react'
import './main.css'
function LoginPC() {
  return (
    <div className='row'>
        <div className='col-50' style={{backgroundColor:'#f1f1f1',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'50px'}}>
            <div className='col-70'  >
                <h2 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>CSS Newsletter</h2>
                <div className="containerPC" style={{backgroundColor:"white",padding:'20px'}}>
                    <h2 style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'15px'}}> Fix Oil Tank System</h2>
                    <label>Usermane</label>
                    <input type="text" placeholder="Usermane" name="Usermane" required/>
                    <label>Password</label>
                    <input type="text" placeholder="Password" name="Password" required/>
                    <label>
                        <input type="checkbox" name="subscribe"></input>Remember me
                    </label>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <a href='/IndexPC'>
                            <input type="submit" style={{fontSize:'16px',cursor:'pointer'}} value="เข้าสู่ระบบ"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='col-50'>
            <div>
                <img src='shutterstock_769253206.jpg' width={700} height={600}></img>
            </div>
        </div>
    </div>
  )
}

export default LoginPC