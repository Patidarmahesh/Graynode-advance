import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Linkify from "react-linkify";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { EmailShareButton, EmailIcon } from "react-share";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "61%",
  left: "61.5%",
  transform: "translate(-50%, -50%)",
  width: 290,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
  p: 2,
};
const ShareModal = ({ share, setShare }) => {
  const shareHandleClose = () => setShare(false);
  let location = useLocation();
  let currentUrl = "http://localhost:3000" + location.pathname
  const shareThought = [
    {
      ShareButton: FacebookShareButton,
      ShareIcon: <FacebookIcon size={50} round />,
    },
    {
      ShareButton: WhatsappShareButton,
      ShareIcon: <WhatsappIcon size={50} round />,
    },
    {
      ShareButton: TwitterShareButton,
      ShareIcon: <TwitterIcon size={50} round />,
    },
    {
      ShareButton: LinkedinShareButton,
      ShareIcon: <LinkedinIcon size={50} round />,
    },
    {
      ShareButton: EmailShareButton,
      ShareIcon: <EmailIcon size={50} round />,
    },
  ];
  return (
    <div>
      <Modal
        keepMounted
        open={share}
        onClose={shareHandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              height: "70px",
              width: "100%",
              display: "flex",
              gap: "3px",
            }}
          >
            {shareThought.map((P, index) => {
              return (
                <P.ShareButton
                  key={index}
                  url={currentUrl}
                  quote={"My 4th project"}
                  hashtag="#React"
                >
                  {P.ShareIcon}
                </P.ShareButton>
              );
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ShareModal;
