import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import HeroSection from "./pages/hero-section/hero-section";
import PaymentsSection from "./pages/payments-section/payments-section";
import Banking from "./pages/banking/banking";
import Card from "./pages/card/card";
import Investing from "./pages/investing/investing";

function App() {

    // useEffect(()=>{
    //     const element = document.getElementsByClassName("monster").item(0);
    //     console.log(element)
    //     const observer = new IntersectionObserver(entries => {
    //         entries.at(0)?.target.classList.toggle("show",entries.at(0)?.isIntersecting)
    //         },{
    //         threshold:1,
    //         }
    //     );
    //
    //     observer.observe( element! );
    // },[])

  return (
    <div className="App">
      <HeroSection/>
        <PaymentsSection/>
        <Banking/>
      <Card/>
    <Investing/>
    </div>
  );
}

export default App;
