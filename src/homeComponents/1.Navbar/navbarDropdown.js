import dropdown1 from "./images/dropdown1.jpg"

const NavbarDropdown = ({onMouseLeave,image}) => {

  return(

   <div className="navbar-dropdown" 
            onMouseLeave={onMouseLeave} >
   
       <div className="navbar-dropdown-content">

             <img  src={image}  className="dropdown-left"/>

            
             <div className="dropdown-right">

                  
                   <div className="dropdown-line1"> 
                        
                       <div className="line1-content"> 
                        <h2>  Human Error ➔  </h2>

                        <p> Learn what human error is and why it happens.</p>
                        </div>

                          
                       <div className="line1-content"> 
                        <h2>  Missed Diagnosis ➔ </h2>

                        <p> %10 of breast cancer cases are missed on mammogram screening. Learn how it affects lives.</p>
                        </div>

                       
                 
                 
                   </div> 
                 
                 
                 
                 
                   <div className="dropdown-line1">
                    
                     <div className="line1-content"> 
                        <h2>  Early Detection ➔ </h2>

                        <p> It saves lives. More than you think.</p>
                     </div>

                     <div className="line1-content"> 
                        <h2>  Statistics ➔  </h2>

                        <p> U.S. breast cancer statistics are here.</p>
                     </div>

                     <div className="line1-content"> 
                        <h2>  Resources ➔  </h2>

                        <p> Breast cancer, A to Z.</p>
                     </div>

                          
                  
                    
                    
                    
                    
                    </div>


             </div>


      
    
    
       </div>
            
              

   </div>

  )


 }

 export default NavbarDropdown;