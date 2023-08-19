import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent 
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

function Tireinformation() {
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
                <p><b>จำนวนยาง</b></p>
                    <div className='col-25'>
                        <b>ใช้อยู่</b>
                        <h1 style={{textAlign:'center'}}>308</h1>
                        <b style={{float:'right'}}>ใช้อยู่</b>
                    </div>
                    <div className='col-25'>
                        <b>ปลดแล้ว</b>
                        <h1 style={{textAlign:'center'}}>0</h1>
                        <b style={{float:'right'}}>เส้น</b>
                    </div>
                    <div className='col-25'>
                        <b>คาดว่าจะเปลี่ยน</b>
                        <h1 style={{textAlign:'center'}}>30</h1>
                        <b style={{float:'right'}}>เส้น</b>
                    </div>
                    <div className='col-25'>
                    <PieChart width={150} height={120}>
                        <Pie data={data} cx={70} cy={55} labelLine={false} label={renderCustomizedLabel} outerRadius={55} fill="#8884d8" dataKey="value">
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    </div>
                </div>

                <div className='containerpc' style={{marginRight:"20px"}}>
                    <h3>ข้อมูลส่วนตัว</h3>
                    <div><p>นายนิพน สนั่นลำ เจ้าหน้าที่ปฏิบัติการขนส่งบริษัท ณัฐพลทรัคแอนด์ออย จำกัด</p></div>
                </div>
            </div>

            <div >
                <button style={{marginLeft:"20px",padding:'10px 20px',backgroundColor:'green',color:'white',border:'none',borderRadius:'10px'}}>เพิ่มข้อมูล</button>
            </div>

            <div className='indexpcfull'>
                <div className='containerpc' style={{marginLeft:"20px",marginRight:'20px'}}>
                    <div className='spean'>
                        <h3>ข้อมูลยาง</h3>
                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div style={{overflowX:'auto'}}>
                        <table>
                            <tr>
                                <th>serial</th>
                                <th>รุ่น/ยี่ห้อ</th>
                                <th>ขนาด</th>
                                <th>ความสูงเริ่มต้น</th>
                                <th>วันที่นำเข้า</th>
                                <th>ผู้เพิ่ม</th>
                                <th>สถานะ</th>
                            </tr>
                            <tr>
                                <td>BD2564 </td>
                                <td>BridgesSton</td>
                                <td>11R22.5 R157</td>
                                <td>24 MM</td>
                                <td>10/11/65</td>
                                <td>นำย...........</td>
                                <td><span style={{color:'green'}}><i class="bi bi-circle-fill"></i></span> ใช้อยู่</td>
                            </tr>
                            <tr>
                                <td>BD2564 </td>
                                <td>BridgesSton</td>
                                <td>11R22.5 R157</td>
                                <td>24 MM</td>
                                <td>10/11/65</td>
                                <td>นำย...........</td>
                                <td><span style={{color:'green'}}><i class="bi bi-circle-fill"></i></span> ใช้อยู่</td>
                            </tr>
                            <tr>
                                <td>BD2564 </td>
                                <td>BridgesSton</td>
                                <td>11R22.5 R157</td>
                                <td>24 MM</td>
                                <td>10/11/65</td>
                                <td>นำย...........</td>
                                <td><span style={{color:'green'}}><i class="bi bi-circle-fill"></i></span> ใช้อยู่</td>
                            </tr>
                            <tr>
                                <td>BD2564 </td>
                                <td>BridgesSton</td>
                                <td>11R22.5 R157</td>
                                <td>24 MM</td>
                                <td>10/11/65</td>
                                <td>นำย...........</td>
                                <td><span style={{color:'green'}}><i class="bi bi-circle-fill"></i></span> ใช้อยู่</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>


        </div>
    </div>
  )
}

export default Tireinformation