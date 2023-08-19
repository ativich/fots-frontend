import React from 'react'

function Repairreport() {
  return (
    <div >
      <div style={{backgroundColor:'green',height:'100px'}}>
        <h1>ระบบการซ่อมบำรุง</h1>
        <h1>รถขนส่งน้ำมัน</h1>
      </div>
      <div style={{padding:'10px'}}>
        <div>
          <h2 style={{color:'blue'}}>รายงานการซ่อมบำรุงตามระยะ</h2>
        </div>
        <div style={{padding:'5px'}}>
            <div>
              <h2 style={{float:'left',marginRight:'5px'}}>ทะเบียน</h2><p style={{float:'left',paddingTop:'8px'}}>70-5685 ขก</p>
              <h2 style={{float:'left',marginLeft:'15px',marginRight:'5px'}}>ยี่ห้อ</h2><p style={{float:'left',paddingTop:'8px'}}> อีซูซ</p>
              <h2 style={{float:'left',marginLeft:'15px',marginRight:'5px'}}>รุ่น</h2><p style={{paddingTop:'8px'}}>GLXZ77</p>
            </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr'}}>
            <div style={{fontSize:'30px'}}>
              <i class="bi bi-calendar2" ></i> 
              <label style={{fontSize:'16px',margin:'0px 5px'}}>วัน/เดือน/ปี</label>
              <input style={{margin:'0px 5px'}} type="date" class="ct" name="birth" />
            </div>
            <h2>วันที่เข้าซ่อม</h2>
        </div>

        <div className='boxPhone3'>
            <div style={{textAlign:'right'}}>
              <h2>เลขไมล์</h2>
            </div>
            <div >
              <input style={{width:'90%',margin:'0px 5px'}}></input>
            </div>
            <div style={{fontSize:'25px',padding:'0px 5px'}} className='spean'>
              <i class="bi bi-camera2"></i>
              <i class="bi bi-camera2"></i>
            </div>
        </div>

        <div className='boxPhone3111'>
            <div style={{textAlign:'right'}}>
              <h2></h2>
            </div>
            <div style={{width:'90%',marginLeft:'10px'}}></div>
            <div style={{fontSize:'16px',padding:'0px 5px'}} >
              <p><i class="bi bi-plus-square-fill" style={{fontSize:'20px',color:'green'}}></i> เพิ่มรายการ</p>
              <p><i class="bi bi-dash-square-fill" style={{fontSize:'20px',color:'red'}}></i> ลบรายการ</p>
            </div>
        </div>

        <div>
          <p>รายการที่1</p>
        </div>
 
        <div >
          <input style={{height:'100px',width:'95%'}} ></input>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'3fr 4fr',marginTop:'20px'}}>
          <div >
            <h2>ผู้ให้บริการ</h2>
          </div>
          <div></div>
          <div style={{height:'30px'}}>
            <input></input>
          </div>
          <div></div>
          <div>
            <p style={{textAlign:'right'}}>อู่/ร้านซ่อม/ศูนย์บริการ</p>
          </div>
          <div></div>
        </div>


        <div className='boxPhone' style={{marginTop:'50px'}}>
          <div style={{marginBottom:'25px',textAlign:'center'}}>
            <p><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> *ข้าพเจ้ารับรองว่าข้อมูลข้างต้นเป็นความจริงทั้งหมด</p>
          </div>
          <div style={{marginBottom:'25px'}}>
            <a href='#' style={{color:'black',textDecoration:'none'}}><div className='butindexPhone' style={{fontSize:'20px',padding:'5px 10px',borderRadius:'10px',backgroundColor:'gold',color:'black'}}>
              <b>รายงาน</b></div></a>
          </div>
        </div>

      </div>
      <footer>
        <div style={{textAlign:'right'}}>วันอำทิตย์ ที่ 4 ม.ค. 2565 10.00 น</div>
      </footer>
    </div>
  )
}

export default Repairreport