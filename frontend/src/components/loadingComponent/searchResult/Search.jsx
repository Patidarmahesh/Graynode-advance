import React from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShowResult from "./ShowResult";
import NewsCard from "./NewsCard";

const Search = ({ show, img, active,placeHolder,textButton }) => {
  return (
    <div className="user-business-container">
      <div className="user-business-graynod">
        <div className="graynod-text-middle-con">
          <div
            className={
              show
                ? "graynod-text-and-image-container"
                : "active-graynod-text-and-image-container"
            }
          >
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
                Find a Graynod{" "}
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#00dab0" }}
                >
                  {" "}
                  Business
                </Typography>
              </Typography>
              <br />
              <Typography variant="h6" sx={{ color: "black" }}>
                Lorem ipssm dollor dummy text{" "}
              </Typography>
              <Typography variant="h6" sx={{ color: "black" }}>
                type real model world
              </Typography>
            </div>
            <div className="business-search"></div>

            <div className="proffecer">
              <img src={img} />
            </div>
          </div>
          {active ? (
            <div className="col-md-12 height">
              <div className="search">
                <i className="fa fa-search">
                  <SearchIcon sx={{ fontSize: "24px" }} />
                </i>
                <input
                  type="text"
                  className="form-control"
                  placeholder={placeHolder}
                />
                <button className="btn btn-primary">{textButton}</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {show ? (
        <div className="user-business-middle-contentss">
          <div className="business-nod-data">
            <div className="business-imag">
              <img src="http://graynod.dollopinfotech.com/assets/web/images/no_data_found.png" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {active ? (
            <>
              <Typography
                variant="h5"
                sx={{ width: "90%", marginBottom: "20px", color: "black" }}
              >
                Showing 100+ results for john
              </Typography>

              <div className="people-card-middle-contentss">
                <ShowResult />
                <ShowResult />
                <ShowResult />
                <ShowResult />
                <ShowResult />
                <ShowResult />
              </div>
            </>
          ) : (
            <>
              <Typography
                variant="h5"
                sx={{ width: "90%", marginBottom: "20px", color: "black" }}
              >
                Top & Latest News
              </Typography>

              <div className="people-card-middle-contentss">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
