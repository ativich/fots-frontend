import React from 'react'
import './mainPhone.css'

function LoginPhone() {
    return (
      <div>
          <div style={{backgroundColor:'green',height:'50px',color:'#ffff',padding:'10px'}}>
            <h1>Fix Oil Tank System</h1>
          </div>
          <div style={{backgroundColor:'Red',height:'40px'}}></div>
          <div style={{backgroundColor:'yellow',height:'40px'}}></div>
          <div class="centeredphone"> 
              <div style={{marginTop:'20%',padding:'30px',width:'250px',color:'#a5a4a4',backgroundColor:'',marginBottom:'70px'}}>
                  <h1>ลงชื่อเข้าสู่ระบบ</h1>
                  <div style={{marginTop:'20px'}}>
                      <div>
                          <label><b>ชื่อผู้ใช</b></label>
                      </div>
                      <div>
                          <input className='inputloginphone' style={{width:'100%'}}></input>
                      </div>
                  </div>
                  <div style={{marginTop:'20px'}}>
                      <div>
                          <label><b>รหัสผ่าน</b></label>
                      </div>
                      <div>
                          <input className='inputloginphone' style={{width:'100%'}}></input>
                      </div>
                  </div>
                  <div className='spean'>
                      <div style={{marginTop:'5px'}}>
                          <a href='/IndexPhone' style={{margin:'0px'}}><p>ลืมรหัสผ่าน</p></a> 
                          <input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> จำฉันไว้
                      </div>
                      <div style={{marginTop:'10px'}}>
                          <a href='/IndexPhone'><button className='butloginphone'><b style={{color:'white'}}>เข้าสุ่ระบบ</b></button></a>
                      </div>
                      
                  </div>
                  
              </div>
          </div>
          <div>
              <img src='shutterstock_769253206.jpg' width={390} height={250}></img>
          </div>
      </div>
    )
  }
  
  export default LoginPhone
  