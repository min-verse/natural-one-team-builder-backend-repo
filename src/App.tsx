import { useState } from 'react'
import DungeonNavBar from './components/DungeonNavBar';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from './components/PartyCard';
import PartyMaker from './pages/PartyMaker';
import EditParty from './pages/EditParty';
import MemberMaker from './pages/MemberMaker';
import SignInPage from './pages/SignInPage';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import EditMembersPage from './pages/EditMembersPage';
import SeeAllPartiesEdit from './pages/SeeAllPartiesEdit';
import DungeonHome from './pages/DungeonHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/party-home" />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/party-home" element={<DungeonHome />} />
      <Route path="/make-party" element={<PartyMaker />} />
      <Route path="/see-all-parties" element={<SeeAllPartiesEdit />} />
      <Route path="/edit-members" element={<EditMembersPage />} />
      <Route path="/edit-party" element={<EditParty />} />
      <Route path="/add-member" element={<MemberMaker />} />
      {/* <Route path="/" element={isAuth ? <Navigate to="/new-log" /> : <Navigate to="/login" />} /> */}
    </Routes>
  )
}

export default App;
