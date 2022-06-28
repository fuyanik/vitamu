import {Routes, Route, Link, NavLink} from 'react-router-dom';


const Serviceİtems = ({Background,textShort,textLong,textFooter,displayElement}) => {


    return(

      <div className="service-items">

       <div 
       style={{
        backgroundImage : `url(${Background})`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        width : "373px",
        height : "66px",

       }}> </div>

      <p>{textShort}</p>
      <p>{textLong}</p>

      {displayElement 
      
      ? 
      
      <Link
      style={{  textDecoration: "none",}}
      to="/form">     <a class="button" href="../FormPage/index.html">
      <span className="buttonText"> Get Started</span>
      <span className="line">|</span>
     
      <span className="arrow">➔</span>
   
       </a> </Link>
     
      :
      
      
     <span className="spaniko"> {textFooter} </span>
    
    }
      

      </div>

    )
}

export default Serviceİtems;