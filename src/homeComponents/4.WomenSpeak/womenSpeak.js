import WomenCards from "./womenCards";
import "./womenSpeak.css";


const WomenSpeak = () => {
  // width: "470px",
   //height: "267px",

   var mq = window.matchMedia( "(max-width: 768px)" );
  

   return (
<div className="women-speak">  

   <div className="women-area"> 

   {mq.matches ?  <WomenCards
   imageWidth={'280px'}
   imageHeight={"167px"}
   Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/18b6535c-a5ef-4212-9f03-fae79f76403a/Story-+Rachel.jpeg?format=750w"}
   textLong= {"In June 2020, we found out Rachel’s breast cancer was missed by her radiologist. Today, she is breast cancer-free. Just a recheck has changed her life. "}
   textShort={"Read her story here ➔"}
   /> : <WomenCards
   imageWidth={'470px'}
   imageHeight={"267px"}
   Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/18b6535c-a5ef-4212-9f03-fae79f76403a/Story-+Rachel.jpeg?format=750w"}
   textLong= {"In June 2020, we found out Rachel’s breast cancer was missed by her radiologist. Today, she is breast cancer-free. Just a recheck has changed her life. "}
   textShort={"Read her story here ➔"}
   />  }

   
{mq.matches ? <WomenCards
   
   headerDisplay={'none'}
   imageWidth={'320px'}
   imageHeight={"210px"}
   Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/ef6a2d9b-9e51-4ecd-9d24-659b4d6324fb/Story-+Nora.jpeg?format=750w"}
   textLong= {"“As a single mother, I have to be strong and healthy for my two boys. I feel so lucky to have caught the cancer before it metastasized.” "}
   textShort={"Nora speaks here ➔"}
   marginTop={"45px"}
   MarginRight={"55px"}
   /> :   <WomenCards
   
   headerDisplay={'none'}
   imageWidth={'470px'}
   imageHeight={"348px"}
   Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/ef6a2d9b-9e51-4ecd-9d24-659b4d6324fb/Story-+Nora.jpeg?format=750w"}
   textLong= {"“As a single mother, I have to be strong and healthy for my two boys. I feel so lucky to have caught the cancer before it metastasized.” "}
   textShort={"Nora speaks here ➔"}
   marginTop={"136px"}
   />}
 
  
  {!mq.matches  &&   <WomenCards
 marginTop={""}
   headerDisplay={'none'}
  imageWidth={'470px'}
  imageHeight={"358px"}
   Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/39081ed5-5ccb-4c67-9257-0bdbc524947c/Story-+Alexandra.jpeg?format=750w"}
   textLong= {"“I felt like crying, but her reassuring tone gave me enough strength to call my mother to break the news.” "}
   textShort={"Alexandra has things to say ➔"}
   />}

{!mq.matches  &&   <WomenCards
 marginTop={"-85px"}
  headerDisplay={'none'}
  imageWidth={'470px'}
  imageHeight={"405px"}
   Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/4adc0ffd-1147-4a10-a20b-9e50f90a6381/Story-+Laura.jpeg?format=1000w"}
   textLong= {"“I got the call the next day, saying that something about my mammogram didn’t seem right. I booked a doctor’s appointment right away.”"}
   textShort={"Read here ➔"}
   />}


   

  
   </div>
   
</div>
   )


}

export default WomenSpeak;