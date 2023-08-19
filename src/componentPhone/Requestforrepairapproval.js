import React from 'react'

function Requestforrepairapproval() {
  return (
    <div >
      <div style={{backgroundColor:'green',height:'100px'}}>
        <h1>ระบบการซ่อมบำรุง</h1>
        <h1>รถขนส่งน้ำมัน</h1>
      </div>
      <div style={{padding:'10px'}}>
        <div>
          <h1 style={{color:'red'}}>ขออนุมัติซ่อมบำรุง</h1>
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

        <div style={{display:'grid',gridTemplateColumns:'1fr 2fr 2fr',marginTop:'20px'}}>
          <div style={{textAlign:'center'}}>
            <h2>เลขไมล์</h2>
          </div>
          <div >
            <input style={{width:'90%',background:'rgb(205,205,205)',marginLeft:'10px'}}></input>
          </div>
          <div >
            <input style={{width:'90%',background:'rgb(205,205,205)',marginLeft:'10px'}}></input>
          </div>
        </div>


        <div className='spean'>
          <b>อาการ</b>
          <p> อู่/ร้ำนซ่อม/ศูนย์บริกำร</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'4fr 1fr 3fr',marginTop:'10px'}}>
          <div style={{marginBottom:'10px'}}>
            <b>อาการ</b>
            <input style={{padding:'20px 8px',width:'80%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px',float:'left'}}></input>
          </div>
          <div style={{fontSize:'30px',margin:'0px'}}>
            <i class="bi bi-camera2" style={{margin:'0px'}}></i>
            <i class="bi bi-camera2" style={{margin:'0px'}}></i>
          </div>
          <div style={{marginBottom:'10px'}}>
            <b>สถานที่เสีย</b>
            <input style={{padding:'20px 8px',width:'80%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px',float:'left'}}></input>
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


        <div className='boxPhone3' style={{marginTop:'0px'}}>
          <div >อะไหล่ ที่ต้องเปลี่ยน</div>
          <div >ราคา</div>
          <div ></div>
          <div>
            <input style={{width:'90%',background:'rgb(205,205,205)',margin:'0px 5px'}}></input>
          </div>
          <div>
            <input style={{width:'90%',background:'rgb(205,205,205)',margin:'0px 5px'}}></input>
          </div>
          <div style={{fontSize:'25px',padding:'0px 5px'}} className='spean'>
            <i class="bi bi-camera2"></i>
            <i class="bi bi-camera2"></i>
          </div>
        </div>

        <div>
          <div style={{float:'left',marginRight:'10px'}}>
            <b>ใบเสนอราคา/บิล</b>
          </div>
          <div style={{fontSize:'25px'}}>
            <i class="bi bi-camera2" style={{marginRight:'10px'}}></i>
            <i class="bi bi-camera2"></i>
          </div>
        </div>

        <div>
          <div style={{textAlign:'center'}}>
            <b >เครดิต</b>
          </div>
          <b style={{float:'left'}}>ประเภท</b>
          <select id="fruit" name="fruit" style={{float:'left',margin:'0px 10px 0px 10px'}}>
            <option value="apple">จ่ายสด</option>
          </select>
          <input></input>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',marginTop:'10px'}}>
          <div style={{marginBottom:'10px',textAlign:'center'}}>
            <p style={{color:'blue'}}><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> ราคารวมภาษีมูลค่าเพิ่ม (vat)</p>
          </div>
          <div style={{marginBottom:'10px'}}>
            <input style={{padding:'5px 8px',width:'50%',fontSize:'12px',backgroundColor:'rgb(230 230 230)',borderRadius:'5px',float:'left'}}></input>
            <b style={{fontSize:'20px'}}>บาท</b>
          </div>
        </div>

        <div className='boxPhone' style={{marginTop:'0px'}}>
          <div style={{marginBottom:'25px',textAlign:'center'}}>
            <p ><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> *ข้าพเจ้ารับรองว่าข้อมูลข้างต้นเป็นความจริงทั้งหมด</p>
          </div>
          <div style={{marginBottom:'25px'}}>
            <a href='#' style={{color:'black',textDecoration:'none'}}><div className='butindexPhone' style={{fontSize:'20px',padding:'5px 10px',borderRadius:'10px',backgroundColor:'red',color:'black'}}>
              <b>ส่งคำขอ</b></div></a>
          </div>
        </div>

      </div>
      <footer>
        <div style={{textAlign:'right'}}>วันอำทิตย์ ที่ 4 ม.ค. 2565 10.00 น</div>
      </footer>
    </div>
  )
}

export default Requestforrepairapproval