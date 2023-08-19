import React from 'react'

function Warn() {
  return (
    <div>
        <div style={{backgroundColor:'green',height:'100px'}}>
            <h1>ระบบการซ่อมบำรุง</h1>
            <h1>รถขนส่งน้ำมัน</h1>
        </div>
        <div>
            <div >
                <h1 style={{color:'blue',textAlign:'center',margin:'15px 0px 5px 0px'}}>รายการแจ้งเตือน</h1>
            </div>

            <div style={{overflowX:'auto'}} >
              <div className='boxWarn'>
                <div className='spean'>
                  <b>คำขออนุมัติซ่อม ที่231 ได้รับการอนุมัติ...</b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>

              <div className='boxWarn'>
                <div className='spean'>
                  <b>ทะเบียน 70-4014 ตอ้งเปลี่ยนน ้ามันเครื่อ...</b>
                  <i class="bi bi-eye"></i>
                </div>
              </div>

              <div className='boxWarn'>
                <div className='spean'>
                  <b>คำขออนุมัตซิ่อม ที่230 ได้รับการอนุมัต</b>
                  <i class="bi bi-eye"></i>
                </div>
                <p>เลขที่คา ขอ 230 วันที่อนุมัติ10/12/65ผู้อนุมัตินาย..... อื่น ๆ ...</p>
              </div>

            </div>

          


        </div>
    </div>
  )
}

export default Warn