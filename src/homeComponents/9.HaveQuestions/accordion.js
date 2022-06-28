import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./haveQuestions.css"


import { MdExpandMore } from "react-icons/md";
import { red } from "@mui/material/colors";
import { style } from "@mui/system";



//#FBFBFB;

//açılan pencerenin içi ve bottom çizgiler
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#FBFBFB",
  
  "&:not(:last-child)": {
    borderBottom: " 1px solid rgba(128, 128, 128, 0.31)"
  },

  "&:before": {
    display: "inline"
  }
}));

// yandaki iconlar
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      
     <MdExpandMore className="accordion-icon"
    
     
     />
    }

    {...props}
  />

  //İÇ GENEL
))(({ theme }) => ({
  paddingRight: "0px",
  backgroundColor: "#FBFBFB;",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-content": {
   
    marginLeft: theme.spacing(-2),
  
  }
}));

//iç METİN
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: "1px",

  
}));


export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "18.6px",
              fontWeight: "500"

          }} >Have questions? We have answers.</Typography>
        </AccordionSummary>

        <AccordionDetails>

          <Typography style={{
             
              fontSize: "18px",
              fontFamily : "'Sofia Pro'",
              color: "#656565"
          }} > Talk to <span style={{ fontWeight: "600"}}>Live Chat </span> </Typography>
        
          <Typography style={{
              marginTop:"9px",
              fontSize: "18px",
              fontFamily : "'Sofia Pro'",
              color: "#656565"
          }}> Visit  <span id="spanikova" style={{
            color: "black",
            fontWeight: "700",
          }}>F.A.Q. </span> </Typography>
          <Typography style={{
             marginTop:"9px",
              fontSize: "18px",
              fontFamily : "'Sofia Pro'",
              color: "#656565"
          }}
          
          > Send an email:  <span style={{
            color: "black",
            fontWeight: "700"
          }}> hello@vitamu.com </span> </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "18.6px",
              fontWeight: "500"

          }} >Office Addresses</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
          style={{
            marginTop : "-8px",
            marginBottom: "10px",
            fontWeight: "700",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#656565"
          }}
          > US Office:  </Typography>
          <Typography

           style={{
            marginBottom: "10px",
            fontWeight: "700",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#000000"
          }}
          
          > 33 Irving Pl, New York 10003</Typography>
          <Typography
           style={{
            marginBottom: "10px",
            fontWeight: "700",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#656565"
          }}
          > US Office:  </Typography>
          <Typography
          
          style={{
            fontWeight: "700",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#000000"
          }}
          
          > Ross Building Adastral Park IP5 3RE</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "18.6px",
              fontWeight: "500"

          }}  >Corporate Inquiries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          style={{
            marginBottom: "10px",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#656565"
          }}
          > Investor relations:  </Typography>
          <Typography

           style={{
            marginBottom: "10px",
            fontWeight: "700",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#000000"
          }}
          
          > investor@vitamu.com</Typography>
          <Typography
           style={{
            marginBottom: "10px",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#656565"
          }}
          > Press Inquiries:  </Typography>
          <Typography
          
          style={{
            fontWeight: "700",
            fontSize: "18px",
            fontFamily:"'Sofia Pro'",
            color:"#000000"
          }}
          
          > press@vitamu.com</Typography>
     
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

