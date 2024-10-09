import React from "react";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowRightIcon
        sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
  const [expande, setExpandedd] = React.useState("panel1");
  const handleChangeee = (panel) => (event, newExpanded) => {
    setExpandedd(newExpanded ? panel : false);
  };
  return (
    <PrivateMainLayOut>
      <div className="faq-business-container">
        <div className="user-business-graynod">
          <div className="graynod-text-middle-con">
            <div className="graynod-text-and-image-container">
              <div className="graynod-text">
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    fontWeight: "bold",
                    gap: "6px",
                    marginTop: "30px",
                  }}
                >
                  {" "}
                  FAQ!{" "}
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#00dab0" }}
                  >
                    {" "}
                    Need Help ?
                  </Typography>
                </Typography>
                <br />
                <Typography variant="h6" sx={{ color: "black" }}>
                  We've got you covered{" "}
                </Typography>
              </div>
              <div className="business-search"></div>
              <div className="proffecer">
                <img src="http://graynod.dollopinfotech.com/assets/web/images/bussiness-peop.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-accordian">
        <div className="faq-middle-accordian">
          {[
            {text:"Am I able to sort updates in my feed?"},
            {text:"How do I customize my feed?"},
            {text:"What is the difference between editing my profile and my public profile?"},
            {text:"How do I access and edit my GrayNod Page?"},
            {text:"How do I share an update or post?"},
            {text:"How can I adjust the notifications I receive?"},
            {text:"Where is my Settings & Privacy page?"},
            {text:"How do I search on Graynod?"},
          ].map((p, index) => {
            return (
              <Accordion
                key={index}
                expande={expande === "panel1"}
                onChange={handleChangeee("panel1")}
                sx={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  border: "none",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  sx={{ background: "white" }}
                >
                  <Typography variant="h5">{p.text}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none" }}>
                  <Typography sx={{ color: "black" }} variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </PrivateMainLayOut>
  );
};

export default FAQ;
