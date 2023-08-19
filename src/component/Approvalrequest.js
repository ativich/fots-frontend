import React, { useState } from 'react';

function Approvalrequest() {
    const [isiconbutOpen, seticonbutOpen] = useState(false);
    const toggleiconbut = () => {
      seticonbutOpen((prevState) => !prevState);
    };
    const closeiconbut = (event) => {
      if (!event.target.matches('.iconbut')) {
        seticonbutOpen(false);
      }
    };

    const [ismaintenanceOpen, setmaintenanceOpen] = useState(false);
    const togglemaintenance = () => {
      setmaintenanceOpen((prevState) => !prevState);
    };
    const closemaintenance = (event) => {
      if (!event.target.matches('.maintenance')) {
        setmaintenanceOpen(false);
      }
    };
    const [istireOpen, settireOpen] = useState(false);
    const toggletire = () => {
      settireOpen((prevState) => !prevState);
    };
    const closetire = (event) => {
      if (!event.target.matches('.tire')) {
        settireOpen(false);
      }
    };
    const [isrepairapprovalOpen, setrepairapprovalOpen] = useState(false);
    const togglerepairapproval = () => {
      setrepairapprovalOpen((prevState) => !prevState);
    };
    const closerepairapproval = (event) => {
      if (!event.target.matches('.repairapproval')) {
        setrepairapprovalOpen(false);
      }
    };
    function toggleMenu() {
        const menu = document.getElementById('menuPC');
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }


  return (
    <div>
        <headerPC>
            <div style={{display: 'flex', float: 'left', marginLeft: '10px'}}>
                <h1 style={{paddingTop:'10px'}}>HAPPY OIL FOTS</h1>
                <div style={{fontSize: '40px',color: '#ccc',padding: '7px 10px 10px 10px',cursor: 'pointer'}} onClick={toggleMenu}>
                    <b><i className="bi bi-list"></i></b>
                </div>
                <div>
                    <input placeholder="search" style={{ fontSize: '16px' }} className="searchPC"/>
                </div>
            </div>
            {/* <div style={{display:"flex",float:"left",marginLeft:'10px'}}>
                <p>HAPPY OIL FOTS</p>
                <div style={{fontSize:'40px',color:" #ccc",padding:'7px 10px 10px 10px'}}><b><i class="bi bi-list"></i></b></div>
                <div ><input placeholder="search" style={{fontSize:'16px'}} className='searchPC'></input></div>
            </div> */}
            <icon className="iconbut">
            <div onClick={toggleiconbut} className="iconbut" >
                <div className='icon-container'style={{display:"flex",float:"left",marginRight:"10px",marginLeft:'20px'}}><img src='/logo512.png' className='round-icon'/></div>
                <b style={{fontSize:"15px",marginTop:"13px",float:"right",marginRight:"10px"}}>{isiconbutOpen ? <i class="bi bi-chevron-up" ></i> : <i class="bi bi-chevron-down" ></i>}</b>
                <b style={{fontSize:"15px",marginTop:"13px",float:"right",marginRight:"10px"}}>{isiconbutOpen ? ` K. nipon `: ' K. nipon '}</b>   
            </div>
            {isiconbutOpen && (
                <div id="myiconbut" className="iconbut-content" style={{marginLeft:"20px"}}>
                <div style={{marginTop:"10px"}}><a href="#home" >Home</a></div>
                <div style={{marginTop:"10px"}}><a href="#about" >About</a></div>
                </div>
            )}
            </icon>
            <div style={{float:"right",marginTop:"17px"}}>
                <i class="bi bi-bell" style={{fontSize:"20px",marginLeft:"",marginTop:"1px"}}></i>
                <a href="/Message" >
                <i class="bi bi-chat-left-text" style={{fontSize:"20px",marginLeft:"15px",marginTop:"1px"}}></i></a>
            </div>
        </headerPC>

        <menuPC id="menuPC" >
            <div className='button' style={{fontSize:'20px',marginTop:'30px',color:'blue'}}>
              <b><a className="AAA"><i class="bi bi-grid"></i><span> Dashboard</span></a></b>
            </div>
            <div className='button' style={{fontSize:'20px',color:'blue'}}>
                <a href="/Carinformation" className="AAA"><b><i class="bi bi-car-front-fill"></i><span> ข้อมูลรถ</span></b></a>
            </div>
            <div className="maintenance" style={{paddingLeft:'30px',color:'blue'}}>
                <div onClick={togglemaintenance} className="maintenance button">
                    <i class="bi bi-calendar"></i>
                    <b style={{fontSize:'20px'}}>{ismaintenanceOpen ? ` การซ่อมบำรุง `: ' การซ่อมบำรุง ' }</b>
                    {ismaintenanceOpen ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                </div>
                {ismaintenanceOpen && (
                <div id="mymaintenance" className="maintenance-content">
                    <div className='a' style={{marginTop:"5px"}}><a href="/RehearsalhistoryPC"className="AAA" >ประวัติการซ่อม</a></div>
                    <div className='a' style={{marginTop:"5px"}}><a href="/Maintenancedepartment" className="AAA">แผนซ่อมบำรุง</a></div>
                </div>
                )}
            </div>

            <div className="tire" style={{paddingLeft:'30px',color:'blue'}}>
                <div onClick={toggletire} className="tire button">
                    <i class="bi bi-gear"></i>
                    <b style={{fontSize:'20px'}}>{istireOpen ? ` ยางรถ `: ' ยางรถ ' }</b>
                    {istireOpen ? <i class="bi bi-chevron-up" ></i> : <i class="bi bi-chevron-down"></i>}
                </div>
                {istireOpen && (
                <div id="mytire" className="tire-content">
                    <div className='a' style={{marginTop:"5px"}}><a href="/Tireinformation"className="AAA" >ข้อมูลยาง</a></div>
                    <div className='a' style={{marginTop:"5px"}}><a href="/TirehistoryPC"className="AAA" >ประวัติยาง</a></div>
                    <div className='a' style={{marginTop:"5px"}}><a href="/Swaptires"className="AAA" >สลับยาง</a></div>
                </div>
                )}
            </div>

            <div className="repairapproval" style={{paddingLeft:'30px',color:'blue'}}>
                <div onClick={togglerepairapproval} className="repairapproval button">
                    <i class="bi bi-file-earmark"></i>
                    <b style={{fontSize:'20px'}}>{isrepairapprovalOpen ? ` การอนุมัติซ่อม `: ' การอนุมัติซ่อม ' }</b>
                    {isrepairapprovalOpen ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                </div>
                {isrepairapprovalOpen && (
                <div id="myrepairapproval" className="repairapproval-content">
                    <div className='a' style={{marginTop:"5px",color:'blue'}}><a href="/Approval"className="AAA" >รายการอนุมัติ</a></div>
                    <div className='a' style={{marginTop:"5px",color:'blue'}}><a href="/Approvalrequest" className="AAA">คำขออนุมัติ</a></div>
                </div>
                )}
            </div>
            <div className='button' style={{fontSize:'20px',color:'blue'}}>
            <a className="AAA"><b><i class="bi bi-pin"></i><span> ระยะทางการเดินรถ</span></b></a>
            </div>
        </menuPC>

        <div style={{backgroundColor:'#ccc',color:'#ccc'}}>5
        <div className='indexpc2'>
                
                <div className='containerpc' style={{marginLeft:"20px"}}>
                    <h3>ยาง</h3>
                    <div style={{overflowX:'auto'}}>
                        <table>
                            <tr>
                                <th>เลขที่</th>
                                <th>ทะเบียน</th>
                                <th>ผู้ขออนุมัติซ่อม</th>
                                <th>วันที่</th>
                                <th>สถานะ</th>
                            </tr>
                            <tr>
                                <td>0235</td>
                                <td>70-3651 </td>
                                <td>นำยพขร ผู้ขับรถ</td>
                                <td>10/11/65</td>
                                <td><span style={{color:'yellow'}}><i class="bi bi-circle-fill"></i></span> รอพิจารณา</td>
                            </tr>
                            <tr>
                                <td>0235</td>
                                <td>70-3651 </td>
                                <td>นำยพขร ผู้ขับรถ</td>
                                <td>10/11/65</td>
                                <td><span style={{color:'yellow'}}><i class="bi bi-circle-fill"></i></span> รอพิจารณา</td>
                            </tr>
                            <tr>
                                <td>0235</td>
                                <td>70-3651 </td>
                                <td>นำยพขร ผู้ขับรถ</td>
                                <td>10/11/65</td>
                                <td><span style={{color:'yellow'}}><i class="bi bi-circle-fill"></i></span> รอพิจารณา</td>
                            </tr>
                            <tr>
                                <td>0235</td>
                                <td>70-3651 </td>
                                <td>นำยพขร ผู้ขับรถ</td>
                                <td>10/11/65</td>
                                <td><span style={{color:'yellow'}}><i class="bi bi-circle-fill"></i></span> รอพิจารณา</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='containerpc' style={{marginRight:"20px"}}>
                    <h3>ข้อมูลส่วนตัว</h3>
                    <div><p>นาย............. ประธานเจ้าหน้าที่บริหาร บริษัท ณัฐพลทรัคแอนด์ออย จำกัด </p></div>
                </div>
            </div>

            <div className='indexpcfull'>
                <div className='containerpc' style={{marginLeft:"20px",marginRight:'20px'}}>
                    <div>
                        <div className='' style={{color:'black',fontSize:'12px',marginBottom:'10px'}}>
                            <b style={{float:'left',marginLeft:'5px',fontSize:'12px'}}>รายละเอียดคำขอ</b>
                            <div>
                                <b style={{float:'left',marginLeft:'5px'}}>เลขที </b><p style={{float:'left',marginLeft:'5px'}}> 0235 </p>
                                <b style={{float:'left',marginLeft:'10px'}}>ทะเบียน </b><p style={{float:'left',marginLeft:'5px'}}>  70-3651</p>
                                <b style={{float:'left',marginLeft:'10px'}}>ผู้ขอ</b><p style={{float:'left',marginLeft:'5px'}} >นำยพขร ผู้ขับรถ</p>
                                <b style={{float:'left',marginLeft:'10px'}}>วันที</b><p style={{float:'left',marginLeft:'5px'}} >10/11/65</p>
                                <b style={{float:'left',marginLeft:'10px'}}>ไมล์</b><p style={{float:'left',marginLeft:'5px'}} > 335555</p>
                                <b style={{float:'left',marginLeft:'10px'}}>พนักงานขับรถ</b><p style={{float:'left',marginLeft:'5px'}}>นำยทักทำย ไหว้ตลอด</p>
                                <b style={{float:'left',marginLeft:'10px',marginRight:'5px',color:'yellow'}}><i class="bi bi-circle-fill"></i></b><p>รอพิจารณา</p>
                            </div>
                        </div>

                    </div>
                    <div style={{overflowX:'auto'}}>
                        <table>
                            <tr>
                                <th>ภาษี</th>
                                <th>รายละเอียดอาการ</th>
                                <th>สถานที่เสีย</th>
                                <th>อู่/ศูนย์บริการ</th>
                                <th>ประเภท</th>
                                <th>ราคา</th>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="subscribe"></input></td>
                                <td>...........</td>
                                <td>หน้าบิ๊กซีกระนวน</td>
                                <td>ศรีกำรยำงกระนวน</td>
                                <td>เครดิต 30 วัน</td>
                                <td>37400</td>
                            </tr>
                        </table>
                    </div>
                    <div className='indexpc3'>
                        <div>
                            <b>รายการอะไหล</b>
                            <p>พวกมาลัย 180 บาท</p>
                            <p>แหวนลูกสูบ 500 บาท</p>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <p>ภาพประกอบ</p>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <di>
                                <div className='col-50'>
                                    <button style={{width:'90%',fontSize:'16px',borderRadius:'10px',backgroundColor:'green',padding:'10px'}}>อนุมัต</button>
                                </div>
                                <div className='col-50'>
                                    <button style={{width:'90%',fontSize:'16px',borderRadius:'10px',backgroundColor:'red',padding:'10px'}}>ไม่อนุมัติ</button>
                                </div>
                            </di>
                            <p>นาย................ประธานเจ้าหน้าที่</p>
                            <p>11/11/65 <b> ผู้อนุมัติ</b></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Approvalrequest