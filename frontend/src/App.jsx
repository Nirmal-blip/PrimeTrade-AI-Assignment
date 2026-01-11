import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About'
import Sports from './Components/Sports';
import Playground from './Components/Playground';
import InterestedField from './Components/InterestedField';
import Login from './Auth/Login';
import ProtectedLayout from './Components/ProtectedLayout';
import Register from './Auth/RegisterUser';
import Services from './Components/Services'
import Contact from './Components/Contact'
import Profile from './Components/Profile'
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

        
        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/sports" element={<><Sports /><Playground /></>} />
          <Route path="/explore" element={<><Sports /><Playground /><InterestedField /></>} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/interested-field" element={<InterestedField />} />
          <Route path="/profile" element ={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
