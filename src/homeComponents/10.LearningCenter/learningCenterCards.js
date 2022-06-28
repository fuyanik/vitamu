const LearningCenterCards = ({Background,Display,LongText,ShortText}) => {


   return (
       
   
   
   <div className="learning-center-cards-main">


       <div className="learning-center-cards-main-img"
       style={{
           backgroundImage:  `url(${Background})` 
       }}
       
       
       > </div>


       <div className="learning-center-cards-main-text">

         <p
         style={{
             
         display: Display,}}
         >Must-read</p>
       
         <p>{LongText}</p>
         <p>{ShortText}</p>


       </div>
        
        
        
  
  
   </div>



   )

}


export default LearningCenterCards;

    



   

