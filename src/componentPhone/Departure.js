import React from 'react'

function Departure() {
  return (
    <div>
        <div style={{color:'green',height:'100px'}}>
            <h1>ระบบการซ่อมบำรุง</h1>
            <h1>รถขนส่งน้ำมัน</h1>
        </div>
        <div>
            <div >
                <h2 style={{color:'blue'}}>รายงานสภาพรถก่อนออกเดินทาง</h2>
            </div>
            <div style={{padding:'5px'}}>
                <p style={{textAlign:'right',color:'red'}}>แนบภาพประกอบ</p>
                <div className='boxPhone3'>
                    <div>
                        <h2>1.ระบบเบรก</h2>
                    </div>
                    <div className='spean'>
                        <b style={{fontSize:'23px'}}><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> ปกติ </b>
                        <b style={{fontSize:'23px'}}><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> ไม่ปกติ </b>
                    </div>
                    <div style={{fontSize:'25px',padding:'0px 5px'}} className='spean'>
                        <i class="bi bi-camera2"></i>
                        <i class="bi bi-camera2"></i>
                    </div>

                    <div style={{textAlign:'right',padding:'0px 5px'}}>
                        <p>รายละเอียด</p>
                        <p>*กรณีไม่ปกติ</p>
                    </div>
                    <div>
                        <input style={{width:'90%',height:'60px'}}></input>
                    </div>
                    <div style={{width:'95%',background:'rgb(205,205,205)'}}></div>
                </div>
                <div className='boxPhone3'>
                    <div>
                        <h2>2.หม้อน้ำ</h2>
                    </div>
                    <div className='spean'>
                        <b style={{fontSize:'23px'}}><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> ปกติ </b>
                        <b style={{fontSize:'23px'}}><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> ไม่ปกติ </b>
                    </div>
                    <div style={{fontSize:'25px',padding:'0px 5px'}} className='spean'>
                        <i class="bi bi-camera2"></i>
                        <i class="bi bi-camera2"></i>
                    </div>
                    <div style={{textAlign:'right',padding:'0px 5px'}}>
                        <p>รายละเอียด</p>
                        <p>*กรณีไม่ปกติ</p>
                    </div>
                    <div>
                        <input style={{width:'90%',height:'60px'}}></input>
                    </div>
                    <div style={{width:'95%',background:'rgb(205,205,205)'}}></div>
                </div>
            </div>
           
            <div style={{backgroundColor:'red',height:'250px'}}>
            </div>

            <div className='boxPhone3'>
                <div>
                    <h2>เลขไมล์ปัจจุบัน</h2>
                </div>
                <div>
                    <input></input>
                </div>
                <div style={{fontSize:'25px',padding:'0px 5px'}} className='spean'>
                    <i class="bi bi-camera2"></i>
                    <i class="bi bi-camera2"></i>
                </div>
            </div>
            <div className='boxPhone '>
                <div style={{marginBottom:'25px',textAlign:'center'}}>
                    <p><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> *ข้าพเจ้ารับรองว่าข้อมูลข้างต้นเป็นความจริงทั้งหมด</p>
                </div>
                <div style={{marginBottom:'25px'}}>
                    <a href='/Departure' style={{color:'black',textDecoration:'none'}}><div className='butindexPhone' style={{fontSize:'20px',padding:'5px 10px',borderRadius:'10px',backgroundColor:'gold',color:'black'}}>
                        <b>รายงาน</b>
                    </div></a>
                </div>
            </div>


        </div>
        <footer>
        <div style={{textAlign:'right'}}>วันอำทิตย์ ที่ 4 ม.ค. 2565 10.00 น</div>
      </footer>
    </div>
  )
}

export default Departure