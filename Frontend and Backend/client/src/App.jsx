import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ask from './assets/ask'
import Signup from './assets/Signup'; 
import Login from './assets/Login';
import Home from './assets/Home'
import Fresherexperienced from './assets/fresherexperienced';
import Workerdetails from './assets/Workerdetails';
import Recommendation from './assets/recommendation';
import FindJob from './assets/findjob';
import Hireexpert from './assets/hireexpert';
import Fetchmachine from './assets/fetchmachine';
import Fetchwebdevelop from './assets/Fetchwebdevelop';
import Datascience from './assets/datascience';
import DeliverTask from './assets/DeliverTask';
import JobDetails from './JobDetails'; // Import your job details component
import Dashboard from './assets/Dashboard';
import FindWork from './assets/findwork';
import ManageFinance from './assets/managefinance';
import FreelanceMarketplace from './assets/freelanceMarketplace';
import Profile from './assets/profile';
import EditProfile from './assets/editprofile';
import MessagePage from './assets/messagepage';
import PaymentWorkflow from './assets/paymentworkflow';
import PaymentPage from './assets/paymentpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Route for the root path */}
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ask' element={<Ask />} />
        <Route path='/fresherexperienced' element={< Fresherexperienced  />} />
        <Route path='/recommendation' element={< Recommendation />} />
        <Route path='/workerdetails' element={< Workerdetails />} />
        <Route path='/findjob' element={<FindJob/>}/>
        <Route path='/hireexpert' element={<Hireexpert/>}/>
        <Route path='/fetchmachine' element={<Fetchmachine/>}/>
        <Route path='/fetchwebdevelop' element={<Fetchwebdevelop/>}/>
        <Route path='/datascience' element={<Datascience/>}/>
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path='/DeliverTask' element={<DeliverTask/>}/>
        <Route path='/Dash' element={<Dashboard/>}/>
        <Route path='/findwork' element={<FindWork/>}/>
        <Route path='/managefinance' element={<ManageFinance/>}/>
        <Route path='/freelanceMarketplace' element={<FreelanceMarketplace/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/messagepage' element={<MessagePage/>}/>
        <Route path='/paymentworkflow' element={<PaymentWorkflow/>}/>
        <Route path='/paymentpage' element={<PaymentPage/>}/>

 {/* Job details page */}
 

        {/* <Route path='/postjobs' element={<Hireexpert/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
