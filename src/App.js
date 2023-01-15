
import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './pages/Home.css';
import Protected from './components/Protected';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { Route , Routes,  BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import AbstractSubmission from './pages/AbstractSubmition';
import InvitedSpeakers from './pages/InvitedSpeakers';
import OrganizingComite from './pages/OrganizingComite';
import ScientificComite from './pages/ScientificComite';
import BookOfAbstract from './pages/BookOfAbsract';
import Sponsors from './pages/Sponsors';
import FirstCircular from './pages/FirstCircular';
import SecondCircular from './pages/SecondCircular';
import ThirdCircular from './pages/ThirdCircular';
import ParticipationFees from './pages/ParticipationFees';
import ProgramICSA2023 from './pages/ProgramICSA2023';
import ImportantDates from './pages/ImportantDates';
import LoginForms from './components/LoginForms';
import TTable from './components/TTable';
function App() {
  const isLoggedIn=()=>{return localStorage.getItem("login")}
  return (
    <div className='App'>
     <Header/>
      <div className='body'>
      <div className='side'><SideBar/></div>
      <div className='content'> 
      <BrowserRouter>
      <Routes> 
      <Route exact path='/' element={<Home/>} ></Route> 
      <Route exact path='/Home' element={<Home/>} ></Route> 
      <Route exact path='/AbstractSubmission' element={<AbstractSubmission/>} ></Route> 
      <Route exact path='/InvitedSpeakers' element={<InvitedSpeakers/>} ></Route> 
      <Route exact path='/OrganizingComite' element={<OrganizingComite/>} ></Route>       
      <Route exact path='/ScientificComite' element={<ScientificComite/>} ></Route> 
      <Route exact path='/Sponsors' element={<Sponsors/>} ></Route> 
      <Route exact path='/ParticipationFees' element={<ParticipationFees/>} ></Route> 
      <Route exact path='/ImportantDates' element={<ImportantDates/>} ></Route> 
      <Route exact path='/FirstCircular' element={<FirstCircular/>} ></Route> 
      <Route exact path='/SecondCircular' element={<SecondCircular/>} ></Route> 
      <Route exact path='/ThirdCircular' element={<ThirdCircular/>} ></Route> 
      <Route exact path='/ProgramICSA2023' element={<ProgramICSA2023/>} ></Route> 
      <Route exact path='/BookOfAbstract' element={<BookOfAbstract/>} ></Route> 
      <Route exact path='/LoginForms' element={<LoginForms/>} ></Route>
      <Route exact path='/TTable' element={
      <Protected isLoggedIn={isLoggedIn}><TTable/>
      </Protected>} ></Route>
      </Routes>
      </BrowserRouter> 
      </div>
      </div>
      <Footer/>
    </div>
  );
}
export default App; 


