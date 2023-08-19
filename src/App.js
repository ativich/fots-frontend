import { Route, Routes } from 'react-router-dom';
import IndexPC from './component/IndexPC';
import LoginPC from './component/LoginPC';
import RehearsalhistoryPC from './component/RehearsalhistoryPC';
import Carinformation from './component/Carinformation';
import Maintenancedepartment from './component/Maintenancedepartment';
import Tireinformation from './component/Tireinformation';
import TirehistoryPC from './component/TirehistoryPC';
import Approval from './component/Approval';
import Approvalrequest from './component/Approvalrequest';
import Swaptires from './component/Swaptires';

import LoginPhone from './componentPhone/LoginPhone';
import IndexPhone from './componentPhone/IndexPhone';
import Departure from './componentPhone/Departure';
import Repairreport from './componentPhone/Repairreport';
import Treadheight from './componentPhone/Treadheight';
import Checkinthewarehouse from './componentPhone/Checkinthewarehouse';
import Requestforrepairapproval from './componentPhone/Requestforrepairapproval';
import Swaptiresphone from './componentPhone/Swaptiresphone';
import Warn from './componentPhone/Warn';
import './App.css';

function App() {
  return (
    <Routes >
      <Route path='/' element={<LoginPC />}></Route>
      <Route path='/IndexPC' element={<IndexPC />}></Route>
      <Route path='/RehearsalhistoryPC' element={<RehearsalhistoryPC />}></Route>
      <Route path='/Carinformation' element={<Carinformation />}></Route>
      <Route path='/Maintenancedepartment' element={<Maintenancedepartment />}></Route>
      <Route path='/Tireinformation' element={<Tireinformation />}></Route>
      <Route path='/TirehistoryPC' element={<TirehistoryPC />}></Route>
      <Route path='/Approval' element={<Approval />}></Route>
      <Route path='/Approvalrequest' element={<Approvalrequest />}></Route>
      <Route path='/Swaptires' element={<Swaptires />}></Route>

      <Route path='/LoginPhone' element={<LoginPhone />}></Route>
      <Route path='/IndexPhone' element={<IndexPhone />}></Route>
      <Route path='/Departure' element={<Departure />}></Route>
      <Route path='/Repairreport' element={<Repairreport />}></Route>
      <Route path='/Treadheight' element={<Treadheight />}></Route>
      <Route path='/Checkinthewarehouse' element={<Checkinthewarehouse />}></Route>
      <Route path='/Requestforrepairapproval' element={<Requestforrepairapproval />}></Route>
      <Route path='/Swaptiresphone' element={<Swaptiresphone />}></Route>
      <Route path='/Warn' element={<Warn />}></Route>
    </Routes>
  );
}

export default App;
