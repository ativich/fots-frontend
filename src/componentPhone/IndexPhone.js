import React from 'react'

function IndexPhone() {
  return (
    <div >
        <div style={{color:'green',height:'100px'}}>
            <h1>ระบบการซ่อมบำรุง</h1>
            <h1>รถขนส่งน้ำมัน</h1>
        </div>
        <div>
            <div className='boxPhone '>
                <div style={{marginTop:'20px',textAlign:'left'}}>
                    <div className='butindexPhone2' style={{marginLeft:'0px'}}>
                        <a href='/Warn' style={{color:'#a5a4a4'}}><b><i class="bi bi-megaphone-fill"></i></b></a>
                    </div>
                    <h1 style={{color:'blue'}}>ยินดีต้อนรับ</h1>
                </div>
                <div style={{marginBottom:'5px'}}>
                    <div className='icon-containerPhone'style={{display:"flex",float:"left",margin:'20px 10px 10px 30px'}}>
                        <img src='/logo512.png' className='round-icon'/>
                    </div>
                    <h3 style={{color:'#a5a4a4',textAlign:'center'}}>คุณ ทักทาย ไหว้ตลอด</h3>
                </div>   
            </div>
            <div style={{margin:'20px 0px 30px 0px'}}>
                <h2 style={{color:'blue'}}>ตำแหน่ง<span style={{color:'#a5a4a4'}}> ..พขร</span></h2>
                <h2 style={{color:'blue'}}>ทะเบียน<span style={{color:'#a5a4a4'}}> ...หัวลาก/..หาง</span></h2>
                <h2 style={{color:'blue'}}>สถานะ<span style={{color:'green'}}> พร้อมรับออเดอร์</span></h2>
            </div>
            <div className='boxPhone '>
                <div style={{marginBottom:'25px'}}>
                    <a href='/Repairreport' style={{color:'white',textDecoration:'none'}}><div className='butindexPhone' style={{backgroundColor:'orange'}}>
                        <b>รายงานซ่อม</b>
                    </div></a>
                    <p style={{fontSize:'11px'}}>รายงานการซ่อมบำรุงตามระยะตรวจเช็ค</p>
                </div>
                <div style={{marginBottom:'25px'}}>
                    <a href='/Treadheight' style={{color:'white',textDecoration:'none'}}><div className='butindexPhone' style={{backgroundColor:'black'}}>
                        <b>ความสูงดอกยาง</b>
                    </div></a>
                    <p style={{fontSize:'11px'}}>รายงานความสูงดอกยาง</p>
                </div>
                <div style={{marginBottom:'25px'}}>
                    <a href='/Checkinthewarehouse' style={{color:'white',textDecoration:'none'}}><div className='butindexPhone' style={{backgroundColor:'gold'}}>
                        <b>เช็คอินคลัง</b>
                    </div></a>
                    <p style={{fontSize:'11px'}}>เช็คอินเข้ำพื้นที่คลังน้ำมัน</p>
                </div>
                <div style={{marginBottom:'25px'}}>
                    <a href='/Requestforrepairapproval' style={{color:'white',textDecoration:'none'}}><div className='butindexPhone' style={{backgroundColor:'red'}}>
                        <b>ขออนุมัติซ่อม</b>
                    </div></a>
                    <p style={{fontSize:'11px'}}>ขออนุมัติการซ่อมรถกรณีฉุกเฉิน</p>
                </div>
            </div>

            <div className='boxPhone2 '>
                <div style={{marginBottom:'25px',textAlign:'center'}}>
                    <a href='/Swaptiresphone' style={{color:'white',textDecoration:'none'}}><div className='butindexPhone' style={{backgroundColor:'black'}}>
                        <b>สลับยาง</b>
                    </div></a>
                    <p style={{fontSize:'11px'}}>รายงาน/แจ้งการสลับยาง</p>
                </div>
                <div style={{marginBottom:'25px'}}>
                    <a href='/Departure' style={{color:'black',textDecoration:'none'}}><div className='butindexPhone' style={{fontSize:'20px',padding:'15px 20px',borderRadius:'10px',backgroundColor:'gold',color:'black'}}>
                        <b>ออกเดินทาง</b>
                    </div></a>
                    <p style={{fontSize:'11px'}}>รายงานสภาพรถก่อนออกเดินทาง</p>
                </div>
            </div>
        </div>
        <footer>
        <div style={{textAlign:'right'}}>วันอำทิตย์ ที่ 4 ม.ค. 2565 10.00 น</div>
      </footer>
    </div>
  )
}

export default IndexPhone