import "./radiologists.css"
import {Routes, Route, Link, NavLink} from 'react-router-dom';

const Radiologists = ( ) => {

return (

    <div className="main">


    <p className="divider">_________________________________________________________________________________________________________</p>

    <div className="text0">World class radiologists, centered around you. </div>
    <div className="text1"> World class radiologists. </div>
    <div className="text2">Centered around you.</div>
    <div className="text3"> Swipe right to see more</div>


    <div className="row">

        <div class="container" id="specialCont">
            <div className="img"> </div>
            <h5 className="docName"> Jessica Pallerson </h5>
            <p className="schName">University of Kansas School of Medicine</p>
            <p className="exp"> 20+ years of experience </p>
        </div>



        <div class="container">
            <div className="img-2"> </div>
            <h5 className="docName"> Kimberly Windson</h5>
            <p className="schName">Yale University School of Medicine</p>
            <p className="exp"> 8+ years of experience </p>
        </div>


        <div class="container">
            <div className="img-3"> </div>
            <h5 className="docName">Elaonar Noen</h5>
            <p className="schName">David Geffen School of Medicine UCLA</p>
            <p className="exp"> 20+ years of experience </p>
        </div>


        <div class="container">
            <div className="img-4"> </div>
            <h5 className="docName">Sarel M. Gaur</h5>
            <p className="schName">University of Rochester School of Medicine</p>
            <p className="exp"> 20+ years of experience </p>
        </div>

    </div>


    <p className="divider">_________________________________________________________________________________________________________</p>
    <p className="textBottom">We have 80+ certified radiologist in our team. </p>



    <Link
    style={{  textDecoration: "none",}}
    to="/form">   <a className="button31" href="#">

        <span className="buttonText31"> Get Started</span>
        <span className="line31">|</span>
        <span className="arrow31"> ➔</span>

    </a> </Link>
   

    <p className="divider">_________________________________________________________________________________________________________</p>



  


</div>




)


}

export default Radiologists;