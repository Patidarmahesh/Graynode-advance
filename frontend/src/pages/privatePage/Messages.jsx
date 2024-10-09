import React from "react";
import "../../components/homeComponent/profile.css";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import FunnyCard from "../../components/homeComponent/funnyCard/FunnyCard";
import { Button, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import Avatar from "@mui/material/Avatar";

const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/7da78f3c60ad38c83e86c93f219ceb5b_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/055b7d1a9954156a2a1bbab80f19dd23_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/c5a2e63e33dffd074a7a53a38d31495e_1.gif",
    heading: "Testing 3",
    advertiesment2: "advertiesment2",
  },
];
const Messages = () => {
  return (
    <PrivateMainLayOut>
      <div className="message-container">
        <div className="message-under-content">
          <div className="type-message">
            <Typography variant="h5">
              Messages<Typography>...............................</Typography>
              <Avatar
                sx={{
                  border: "1px solid #c7d5e1",
                  background: "white",
                  color: "gray",
                }}
              >
                <MessageIcon />
              </Avatar>
            </Typography>
            <div className="message-read-button-container">
            <Button id="all-message-button" type="submit">
              All
            </Button>
            <Button id="all-message-button" type="submit">
              unread
            </Button>
            <Button id="all-message-button" type="submit">
              archived
            </Button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="message here.........."
            />
            <Button id="message-button" type="submit">
              Compase New Message
            </Button>
          </div>
          <div className="view-message">
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
            <div className="message left">hellow How are You</div>
            <div className="message right">hellow How are You</div>
          </div>
          <div className="funny-card-con">
            <FunnyCard funnyImage={funnyImage} />
          </div>
        </div>
      </div>
    </PrivateMainLayOut>
  );
};

export default Messages;
