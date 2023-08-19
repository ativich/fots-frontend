import React from 'react'

function Treadheight() {
  return (
    <div >
      <div style={{backgroundColor:'green',height:'100px'}}>
        <h1>ระบบการซ่อมบำรุง</h1>
        <h1>รถขนส่งน้ำมัน</h1>
      </div>
      <div style={{padding:'10px'}}>
        <div>
          <h2 style={{color:'blue'}}>รายงานความสูงดอกยาง</h2>
        </div>
        <div style={{padding:'5px'}}>
          <div>
            <h2 style={{float:'left',marginRight:'5px'}}>ทะเบียน</h2><p style={{float:'left',paddingTop:'8px'}}>70-5685 ขก</p>
            <h2 style={{float:'left',marginLeft:'15px',marginRight:'5px'}}>ยี่ห้อ</h2><p style={{float:'left',paddingTop:'8px'}}> อีซูซ</p>
            <h2 style={{float:'left',marginLeft:'15px',marginRight:'5px'}}>รุ่น</h2><p style={{paddingTop:'8px'}}>GLXZ77</p>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',marginTop:'10px'}}>
          <div style={{fontSize:'30px'}}>
            <i class="bi bi-calendar2" ></i> 
            <label style={{fontSize:'16px',margin:'0px 5px'}}></label>
            <input style={{margin:'0px 5px'}} type="date" class="ct" name="birth" />
          </div>
          <h2>วันที่เข้าซ่อม</h2>
        </div>

        <div className='boxPhone3' style={{marginTop:'10px'}}>
          <div style={{textAlign:'right'}}>
            <h2>เลขไมล์</h2>
          </div>
          <div >
            <input style={{width:'90%',background:'rgb(205,205,205)',margin:'0px 5px'}}></input>
          </div>
          <div style={{fontSize:'25px',padding:'0px 5px'}} className='spean'>
            <i class="bi bi-camera2"></i>
            <i class="bi bi-camera2"></i>
          </div>
        </div>

        <div className='spean'>
          <p style={{color:'blue'}}>กรอกรายละเอียดทีละรายการ</p>
          <p> <i class="bi bi-file-earmark-excel-fill"></i> เคลียร์รายการ</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 3fr 3fr',marginTop:'20px'}}>
          <b>ล้อที่ 1</b>
          <b>serial</b>
          <b>ความสูงดอกยาง</b>
          <input type="checkbox" name="subscribe" style={{margin:'0px'}}></input>
          <div>
            <input style={{padding:'5px 8px',width:'70%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px'}}></input>
          </div>
          <div>
            <input style={{padding:'5px 8px',width:'50%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px',float:'left'}}></input>
            <b style={{marginLeft:'5px',fontSize:'20px'}}> mm.</b>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 3fr 3fr',marginTop:'20px'}}>
          <b>ล้อที่ 2</b>
          <b>serial</b>
          <b>ความสูงดอกยาง</b>
          <input type="checkbox" name="subscribe" style={{margin:'0px'}}></input>
          <div>
            <input style={{padding:'5px 8px',width:'70%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px'}}></input>
          </div>
          <div>
            <input style={{padding:'5px 8px',width:'50%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px',float:'left'}}></input>
            <b style={{marginLeft:'5px',fontSize:'20px'}}> mm.</b>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 3fr 3fr',marginTop:'20px'}}>
          <b>ล้อที่ 3</b>
          <b>serial</b>
          <b>ความสูงดอกยาง</b>
          <input type="checkbox" name="subscribe" style={{margin:'0px'}}></input>
          <div>
            <input style={{padding:'5px 8px',width:'70%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px'}}></input>
          </div>
          <div>
            <input style={{padding:'5px 8px',width:'50%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px',float:'left'}}></input>
            <b style={{marginLeft:'5px',fontSize:'20px'}}> mm.</b>
          </div>
        </div>

        <div className='boxPhone' style={{marginTop:'70px'}}>
          <div style={{marginBottom:'25px',textAlign:'center'}}>
            <p><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> *ข้าพเจ้ารับรองว่าข้อมูลข้างต้นเป็นความจริงทั้งหมด</p>
          </div>
          <div style={{marginBottom:'25px'}}>
            <a href='#' style={{color:'black',textDecoration:'none'}}><div className='butindexPhone' style={{fontSize:'20px',padding:'5px 10px',borderRadius:'10px',backgroundColor:'black',color:'white'}}>
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

export default Treadheight