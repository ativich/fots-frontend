import React from 'react'

function Checkinthewarehouse() {
  return (
    <div>
      <div style={{backgroundColor:'green',height:'100px'}}>
        <h1>ระบบการซ่อมบำรุง</h1>
        <h1>รถขนส่งน้ำมัน</h1>
      </div>

      <div style={{columnRuleColor:'red',padding:'30px 10px'}}>
        <div >
          <h1 style={{color:'blue'}}>เช็คอินเข้าพื้นที่คลังน้ำมัน</h1>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 5fr 5fr 5fr 1fr'}}>
          <div></div>
          <div><h2 style={{textAlign:'center'}}>เลขไมล์</h2></div>
          <div style={{width:'100%',background:'rgb(205,205,205)'}}></div>
          <div style={{fontSize:'25px',padding:'0px 5px'}} >
            <i  style={{padding:'0px 10px'}}class="bi bi-camera2"></i>
            <i class="bi bi-camera2"></i>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'3fr 3fr',marginTop:'10px'}}>
          <div>
            <b>สถานะ <i class="bi bi-circle-fill"  style={{color:'gold',fontSize:'30px'}}></i></b>
            <p><i class="bi bi-circle-fill" style={{color:'gold'}}></i> รอเซลล์สั่งออเดอร์</p>
            <p><i class="bi bi-circle-fill" style={{color:'green'}}></i> สั่งออเดอร์สำเร็จ กำลังจัดส่ง</p>
            <p><i class="bi bi-circle-fill" style={{color:'red'}}></i> ยังไม่เข้าพื้นที่คลังน้ำมัน</p>
          </div>
            <a href='/Departure' style={{color:'black',textDecoration:'none',marginTop:'20px'}}><div className='butindexPhone' style={{fontSize:'20px',padding:'20px 20px',borderRadius:'10px',backgroundColor:'blue',color:'rgb(255 255 255)'}}>
            <b><i class="bi bi-geo-alt-fill"></i> เช็คอิน</b>
          </div></a>
        </div>
      </div>


      <div style={{width:'100%',backgroundColor:'#ccc',height:'20px'}}></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 3fr 1fr',marginTop:'10px'}}>
          <div></div>
          <div>
            <div style={{marginBottom:'5px'}}>
              <p><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> รับออเดอร์สำเร็จเตรียมจัดส่ง</p>
            </div>
            <div style={{marginBottom:'5px'}}>
              <p><input type="checkbox" name="subscribe" style={{margin:'0px'}}></input> รับออเดอร์ไม่สำเร็จ</p>
            </div>
          </div>
          <div></div>

          <div></div>
          <div>
            <p>ระบุสาเหตุ</p>
          </div>
          <div></div>

          <div></div>
          <input style={{width:'100%',height:'70px',backgroundColor:''}}></input>
          <div></div>
        </div>
        
        <div style={{marginTop:'20px'}}>
          <a href='/LoginPhone' style={{color:'black',textDecoration:'none'}}>
            <div className='butindexPhone' style={{fontSize:'40px',padding:'10px 20px',borderRadius:'10px',backgroundColor:'blue',color:'gold'}}>
              <b><i class="bi bi-escape"></i> เช็คเอาท์</b>
            </div>
          </a>
        </div>
        

      <div style={{columnRuleColor:'red',padding:'10px',marginTop:'20px'}}>
        <div>
          <p style={{textAlign:'right'}}>กรณีรับไม่สำเร็จให้เช็คอินอีกครั้งหากต้องการรอออเดอร์ที่คลังเดิมหรือสามารถไปเช็คอินที่คลังอื่นก็ได้</p>
        </div>



      </div>
      <footer>
        <div style={{textAlign:'right'}}>วันอำทิตย์ ที่ 4 ม.ค. 2565 10.00 น</div>
      </footer>
    </div>
  )
}

export default Checkinthewarehouse