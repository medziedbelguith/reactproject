import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import {RemoveScroll} from 'react-remove-scroll';
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
function App() {

  return(
  
    <RemoveScroll>
    <Container className="d-felx align-items-center justify-content-center" style={{minHeight:"100vh",marginTop:"130px",marginLeft:"430px"}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
        <Router>
          <AuthProvider>
            <Routes>
            <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoute />}>
            <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
     
    </Container>
    </RemoveScroll>
    
 
  )
   
}

export default App;
