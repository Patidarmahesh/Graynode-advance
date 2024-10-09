import React from 'react'
import PrivateMainLayOut from '../../layout/mainlayout/PrivateMainLayOut'
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FunnyCard from '../../components/homeComponent/funnyCard/FunnyCard';

const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/43876eb859a20a6826ec62910c616a45_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/6037b9518b33c18aec8ef47af267a8a0_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/055b7d1a9954156a2a1bbab80f19dd23_1.gif",
    heading: "Testing 3",
    advertiesment2: "advertiesment2",
  },
];

const Notification = () => {
  return (
    <PrivateMainLayOut>
       <div className="notification-container">
        <div className="notification-content">
          <div className="notification-img-content">
            <div className="boomark-arrow-content">
              <NavLink to="/home">
                <Button
                  sx={{
                    background: "white",
                    color: "gray",
                    border: "1px solid #c7d5e1",
                    height: "64px",
                    borderRadius: "50%",
                    width: "20px",
                    fontSize: "24px",
                  }}
                >
                  <KeyboardBackspaceIcon />
                </Button>
              </NavLink>
              <Typography variant="h5">Notification</Typography>
            </div>
            <div className="notification-error-image">
              <img src='http://graynod.dollopinfotech.com/assets/web/images/no_data_found.png' style={{width:"100%",height:"100%"}}/>
            </div>
          </div>
          <div className="bookmark-fuuny-emoji">
            <FunnyCard funnyImage={funnyImage} />
          </div>
        </div>
      </div>
    </PrivateMainLayOut>
  )
}

export default Notification
