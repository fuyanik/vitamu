import gV from "../../gV";

const Panel = () => { 
return( 
    <div className="Panel">

        <div className="panel-item"> 
        <h2>Username:</h2>
        <p>{gV.userName}</p>
        </div>

        <div className="panel-item"> 
        <h2>Age:</h2>
        <p>{gV.age}</p>
        </div>
        
        <div className="panel-item"> 
        <h2>Did Mamagrom Last 12 Month:</h2>
        <p>{gV.didMamagromLast12Month}</p>
        </div>
     
        <div className="panel-item"> 
        <h2>Did Conduct Self Exam Once Month:</h2>
        <p>{gV.didConductSelfExamOnceMonth}</p>
        </div>
       
        <div className="panel-item"> 
        <h2>Mail Addres:</h2>
        <p>{gV.MailAddres}</p>
        </div>
      
      
        <div className="panel-item"> 
        <h2>Country:</h2>
        <p>{gV.Country}</p>
        </div>
    </div> )
}

export default Panel;