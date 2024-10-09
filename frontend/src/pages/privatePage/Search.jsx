import React, { useState } from "react";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import "../../components/homeComponent/profile.css";
import { Typography } from "@mui/material";
import { useSearch } from "../../Context/Search";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [all, setAll] = useState(true);
  const [people, setPeople] = useState(false);
  const [post, setPost] = useState(false);
  const [business, setBusiness] = useState(false);
  const [groups, setGroups] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [search] = useSearch();
  console.log("search", search);

  return (
    <PrivateMainLayOut>
      <div className="search-conteiner">
        <div className="search-content">
          <div className="you-see-button">
            <div
              className={all ? "active" : "all"}
              onClick={() => {
                setAll(true);
                setPeople(false);
                setPost(false);
                setBusiness(false);
                setGroups(false);
                setJobs(false);
              }}
            >
              All
            </div>
            <div
              className={people ? "active" : "all"}
              onClick={() => {
                setAll(false);
                setPeople(true);
                setPost(false);
                setBusiness(false);
                setGroups(false);
                setJobs(false);
              }}
            >
              People
            </div>
            <div
              className={post ? "active" : "all"}
              onClick={() => {
                setAll(false);
                setPeople(false);
                setPost(true);
                setBusiness(false);
                setGroups(false);
                setJobs(false);
              }}
            >
              Posts
            </div>
            <div
              className={business ? "active" : "all"}
              onClick={() => {
                setAll(false);
                setPeople(false);
                setPost(false);
                setBusiness(true);
                setGroups(false);
                setJobs(false);
              }}
            >
              Business
            </div>
            <div
              className={groups ? "active" : "all"}
              onClick={() => {
                setAll(false);
                setPeople(false);
                setPost(false);
                setBusiness(false);
                setGroups(true);
                setJobs(false);
              }}
            >
              Groups
            </div>
            <div
              className={jobs ? "active" : "all"}
              onClick={() => {
                setAll(false);
                setPeople(false);
                setPost(false);
                setBusiness(false);
                setGroups(false);
                setJobs(true);
              }}
            >
              Jobs
            </div>
          </div>
          <div className="differt-people">
            {all && (
              <>
                <div className="all-people">
                  <Typography variant="h4" sx={{ color: "black" }}>
                    People
                  </Typography>
                  <div className="map-conteiner">
                    {search.results.map((p, index) => {
                      return (
                        <div key={index} className="user-content">
                          <img src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png" />
                          <NavLink
                            to={`/profile/${p.name.replace(/ /g, "")}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              variant="h5"
                              sx={{ color: "black", fontWeight: "bold" }}
                            >
                              {p.name}
                            </Typography>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            {people && (
              <div className="all-people">
                <div className="map-conteiner">
                  {search.results.map((p, index) => {
                    return (
                      <div key={index} className="user-content">
                        <img src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png" />
                        <Typography
                          to={`/userprofile/${p.name}`}
                          variant="h5"
                          sx={{ color: "black", fontWeight: "bold" }}
                        >
                          {p.name}
                        </Typography>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {post && (
              <h2 style={{ color: "black" }}>
                Sorry, there are no results for
              </h2>
            )}
            {business && (
              <h2 style={{ color: "black" }}>
                Sorry, there are no results for
              </h2>
            )}
          </div>
        </div>
      </div>
    </PrivateMainLayOut>
  );
};

export default Search;
