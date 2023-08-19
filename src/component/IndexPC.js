// import React, { useState } from 'react';
import React, { useCallback, useState } from "react";
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import './main.css'

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
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
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
};


const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

function IndexPC() {
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

        <div style={{backgroundColor:'#ccc'}}>
            <div className="row">
                <div className="col-75">
                    <div className="" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
                        <div className='containerIndexPC' style={{marginLeft:"20px"}}>
                            <div className=' spean'>
                                <h3>จำนวนรถ</h3>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <h1 style={{textAlign:'center'}}>14<span style={{fontSize:'20px'}}> คัน</span></h1>
                        </div>
                        <div className='containerIndexPC '>
                            <div className=' spean'>
                                <h3>จำนวนยาง</h3>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <h1 style={{textAlign:'center'}}>308<span style={{fontSize:'20px'}}> เส้น</span></h1>
                        </div>
                        <div className='containerIndexPC '>
                            <div className=' spean'>
                                <h3>คนขับรถ</h3>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <h1 style={{textAlign:'center'}}>10<span style={{fontSize:'20px'}}> คน</span></h1>
                        </div>
                    
                    </div>
                    <div className='containerIndexPC' style={{marginLeft:"20px"}}>
                        <div className='spean'>
                            <h3>รถขนส่งส่งน้ำมัน</h3>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div style={{overflowX:'auto'}}>
                            <table>
                                <tr>
                                    <th>ทะเบียน</th>
                                    <th>รุ่น/ยี่ห้อ</th>
                                    <th>ชนิด</th>
                                    <th>ไมล์ปัจจุบัน</th>
                                    <th>กลุ่มรถ</th>
                                    <th>เชื้อเพลิง</th>
                                    <th>ปิด</th>
                                </tr>
                                <tr>
                                    <td>70-7702</td>
                                    <td>SCANIA</td>
                                    <td>ลำกจูง</td>
                                    <td>351,256</td>
                                    <td>รถช่อง</td>
                                    <td>ดีเซล</td>
                                    <td><i class="bi bi-eye"></i></td>
                                </tr>
                                <tr>
                                    <td>70-7702</td>
                                    <td>SCANIA</td>
                                    <td>ลำกจูง</td>
                                    <td>351,256</td>
                                    <td>รถช่อง</td>
                                    <td>ดีเซล</td>
                                    <td><i class="bi bi-eye"></i></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='containerIndexPC' style={{marginLeft:"20px",display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                        <div >
                            <AreaChart width={600} height={200} data={data2} margin={{top: 10,right: 30,left: 0,bottom: 0}}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8"/>
                                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
                                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658"/>
                            </AreaChart>
                        </div>
                        <div style={{padding:'10px 10px'}}>
                            <h2>รายงานรถประจำวัน</h2><br></br>
                            <div className="spean">
                                <p><i class="bi bi-circle-fill" style={{color:'blue'}}></i> ยังไม่เช็คอินเข้ำพื้นที</p>
                                <p>2</p>
                            </div>
                            <div className="spean">
                                <p><i class="bi bi-circle-fill" style={{color:'green'}}></i> พร้อมส่ง/รอออเดอร</p>
                                <p>8</p>
                            </div>
                            <div className="spean">
                                <p><i class="bi bi-circle-fill" style={{color:'orange'}}></i> กำลังส่ง</p>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-25">
                    <div className="containerIndexPC" style={{padding:'10px'}}>
                        <div className="spean">
                            <h3>ประสิทธิภาพยาง</h3>
                            <i class="bi bi-three-dots"></i>
                        </div>

                    </div>



                    <div className="containerIndexPC" style={{padding:'10px'}}>
                        <div className="spean">
                            <h3>ประสิทธิภาพยาง</h3>
                            <i class="bi bi-three-dots"></i>
                        </div>

                        <div >
                            <PieChart width={200} height={180}>
                                <Pie data={data} cx={90} cy={85} labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="value">
                                    {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    </div>
  )
}

export default IndexPC