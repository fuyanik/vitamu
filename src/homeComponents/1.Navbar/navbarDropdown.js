
import {Routes, Route, Link, NavLink} from 'react-router-dom';



const NavbarDropdown = ({onMouseLeave,image, line1head1,line1text1,line1head2,line1text2,line1head3,line1text3,line2head1,line2text1,line2head2,line2text2,line2head3,line2text3}) => {

  return(

   <div className="navbar-dropdown" 
            onMouseLeave={onMouseLeave} >
   
       <div className="navbar-dropdown-content">

             <img  src={image}  className="dropdown-left"/>

            
             <div className="dropdown-right">

                  
                   <div className="dropdown-line1"> 
                        
                       <div className="line1-content"> 
                     <h2>  {line1head1}  </h2>

                        <p> {line1text1}</p>
                        </div>

                          
                       <div className="line1-content"> 
                        <h2>   {line1head2} </h2>

                        <p> {line1text2}</p>
                        </div>
                   
                       <div className="line1-content"> 
                        <h2>   {line1head3} </h2>

                        <p> {line1text3}</p>
                        </div>

                       
                 
                 
                   </div> 
                 
                 
                 
                 
                   <div className="dropdown-line1">
                    
                     <div className="line1-content"> 
                        <h2>  {line2head1}  </h2>

                        <p> {line2text1}</p>
                     </div>

                     <div className="line1-content"> 
                        <h2>  {line2head2}   </h2>

                        <p> {line2text2} </p>
                     </div>

                     <div className="line1-content"> 
                        <h2> {line2head3} </h2>

                        <p>{line2text3}</p>
                     </div>

                          
                  
                    
                    
                    
                    
                    </div>


             </div>


      
    
    
       </div>
            
              

   </div>

  )


 }

 export default NavbarDropdown;