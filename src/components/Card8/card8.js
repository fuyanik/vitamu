import  "./card8.css"

import React from 'react';
const Card8 = ({display}) => {

    return (
        <div className="card8 "  style={{display: display}}>

        <h2>Alright then, here is the upload place. You can drag and drop your files to the area below, or click on the area an choose the files to be uploaded.</h2>
        <p> The files may have .dcm, .dicom, or .jpeg extensions. You may upload them seperately or together. Also, it is good to upload your recheck and physician reports.</p>


        <section className="progress-area"></section>
        <section className="uploaded-area"></section>

        <div className="wrapper">

            <form action="#">
                <input className="file-input" type="file" name="file" hidden/>

                <p id="uploadText">Choose a file</p>
            </form>

        </div>




     </div>

    )
}

export default Card8