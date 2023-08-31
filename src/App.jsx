import './App.css';
// import Slider from './components/Slider';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Footer from './components/Footer';
// import Donate from './components/Donate';
// import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const images = [
  'https://media.istockphoto.com/id/922653184/photo/volunteers-feed-the-homeless-free-soup-in-a-bowl-of-beggar.webp?b=1&s=170667a&w=0&k=20&c=5MJRV6J2aeQFkNEHCL6QaMP-nGt1G2O0C48t4wrQH1A=',
  'https://media.istockphoto.com/id/1422544830/photo/homeless-man-in-the-city.jpg?s=612x612&w=0&k=20&c=Pnshin_0XYTs-cgtO86pA96HKNzi01qgW91GGhTvSTc=',
  'https://media.istockphoto.com/id/483813120/photo/african-hands-begging-help.jpg?s=612x612&w=0&k=20&c=ouobTUrbIPpxR82CLrvCQhH3DQnkeMxffTbdT4ODDWs=',

];



function App() {
  return (
    <>
      <div className='px-10'>
        {/* <Navbar /> */}
        {/* <Hero /> */}
        <Slider images={images} />
        {/* <Footer /> */}
        <Router>
          <Routes>
            <Route exact path='/' element={< Footer />}></Route>
            <Route exact path='/foundation' element={< Register />}></Route>
            <Route exact path='/donate' element={< Donate />}></Route>
            <Route exact path='/help' element={< Register />}></Route>
            <Route exact path='/events' element={< Register />}></Route>
            <Route exact path='/contact' element={< Register />}></Route>
            <Route exact path='/contact' element={< Register />}></Route>
            {/* <Route exact path='/contact' element={< Contact />}></Route> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
