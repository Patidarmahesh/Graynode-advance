import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import { useBookMark } from "../../Context/BookMarks";

const style = {
  position: "absolute",
  top: "48%",
  left: "64.5%",
  transform: "translate(-50%, -50%)",
  width: 190,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
  p: 2,
};
const BookmarkModel = ({
  bookMarkModal,
  setBookMarkModal,
  bookMarkThisTab,
  bookMarkData,
  bookMarkRemoveThisTab,
  handleClose,
}) => {
  const [bookMarkkk, setbookMark] = useBookMark();
  return (
    <div>
      <Modal
        keepMounted
        open={bookMarkModal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div style={{ height: "70px", width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignContent: "center",
                gap: "4px",
                marginBottom: "6px",
                cursor: "pointer",
                background: "transparent",
              }}
            >
              {bookMarkkk.some((p) => p.name === bookMarkData?.postedBy.name) ? (
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    gap: "4px",
                  }}
                  onClick={() => bookMarkRemoveThisTab()}
                >
                  <BookmarkIcon sx={{ fontSize: "32px", color: "black" }} />
                  saved
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    gap: "4px",
                  }}
                  onClick={() => bookMarkThisTab()}
                >
                  <BookmarkBorderIcon sx={{ fontSize: "32px" }} />
                  save
                </div>
              )}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignContent: "center",
                gap: "4px",
                cursor: "pointer",
                background: "transparent",
              }}
            >
              <EmojiFlagsIcon sx={{ fontSize: "32px" }} /> Report This Post
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BookmarkModel;
