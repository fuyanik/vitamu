import gV from "../../gV";
import "./card9.css";

import { useState } from "react";
import { storage } from "../../firebase";
import { db } from "../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';

import { Timestamp,collection,addDocument, addDoc } from 'firebase/firestore';



const Card9 = ({display}) => { 
 

 const [progress, setProgress] = useState(0);

var fakeArray = [];

const [arrays, setArray] = useState(fakeArray);



    const handleImageChange = (e) => { 

        //  arrays.push(...Array.from(e.target.files)); 
 
         fakeArray.push(...Array.from(e.target.files))

       //  setArray(Array.from(e.target.files));
        
         console.log(fakeArray);
         setArray(fakeArray);
         
      
       
        

       
       //IMAGELERİ STORAGE YÜKLEME
       fakeArray.map((item) => {
        
        const storageRef = ref(storage, `/${gV.userName}/${ item.name }` );
  
        const uploadImage =  uploadBytesResumable(storageRef, item)
   
         uploadImage.on("state_changed", 
          (snapshot)=>{ 
            const progressPercent = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercent);
           
          getDownloadURL(uploadImage.snapshot.ref)
            .then((url)=>{
             const articleRef = collection(db,`${gV.userName}`);
         addDoc(articleRef,{
            
        ImageUrl: url,
        createdAt: Timestamp.now().toDate(),

    })})
            



    });
})
  
       



     
   
      






       }
       
     




    return(
        <div className="card9" style={{display:display}}> 
        <div className="card9-main">
            <div className="card9-main-texts">
                <p>Alright then, here is where <span>  you can upload your mammogram.</span>You can drag and drop your files to the area below or click on the area and choose the files to be uploaded.</p>
                <p>the files may have .dcm, .dicom, or .jpeg extensions. You may upload them separately or together. Also, it is good to upload your recheck and physician reports.</p>
          { /*  { gV.image !== "" && 
           
             
    <div  for="file" className="card9-main-texts-image-name"> {gV.image.name} <p>(</p>{((progress))}<p>%</p><p>)</p></div> }  */ }
              
            {
               arrays.map((item,idx) => (
                  <div className="card9-main-texts-image-name" key={idx}>  {item.name} <label>(</label>{((progress))}<p>%</p><p>)</p></div>
                       )    )
            }
         
                  
              
                    
           
              
                  
      
          
                
                
             
                <input
                 multiple="multiple"
                className="card9-main-texts-input"
                type="file" 
                name="image" 
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                
                />
                <label  for="file" className="card9-main-texts-button"> Choose File</label>

            </div>

        </div>
        </div>
    )
}

export default Card9;