import React from "react";
import { Link } from "react-router-dom";

const SearchByVehicle = () => {
  return (
    <>
      <div className="main-content-wrapper">
        <div className="main-content">
          <h1>Search Tires by Vehicle</h1>
          <p className="size-up">
            Unbeatable tire prices are just a few clicks away! Choose your
            vehicle info from the boxes below to get started.
          </p>
          <div className="tab-bar med-marg-top">
            <div className="tab-bar-item tire-search-tab large selected">
              <span className="search-by">Search by</span>Vehicle
            </div>
            <Link to={"/search-by-size"}>
              <div className="tab-bar-item tire-search-tab large">
                <span className="search-by">Search by</span>Size
              </div>
            </Link>
          </div>
          <div className="tire-search-content">
            <div className="tire-search-param">
              <div className="tire-search-param-head collapsible active">
                <div className="collapse-icon">
                  <i
                    className="fas fa-chevron-circle-right collapse-open"
                    aria-hidden="true"
                  />
                  <i
                    className="fas fa-chevron-circle-down collapse-close"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2>Select Year</h2>
                </div>
              </div>
              <div
                className="tire-search-param-options"
                style={{ display: "block" }}
              >
                <div className="param-options-wrapper">
                  <a href="/tires/search-by/vehicle/?veh_year=2025">
                    <div className="tire-search-option veh-option ">2025</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2024">
                    <div className="tire-search-option veh-option ">2024</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2023">
                    <div className="tire-search-option veh-option ">2023</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2022">
                    <div className="tire-search-option veh-option ">2022</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2021">
                    <div className="tire-search-option veh-option ">2021</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2020">
                    <div className="tire-search-option veh-option ">2020</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2019">
                    <div className="tire-search-option veh-option ">2019</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2018">
                    <div className="tire-search-option veh-option ">2018</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2017">
                    <div className="tire-search-option veh-option ">2017</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2016">
                    <div className="tire-search-option veh-option ">2016</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2015">
                    <div className="tire-search-option veh-option ">2015</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2014">
                    <div className="tire-search-option veh-option ">2014</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2013">
                    <div className="tire-search-option veh-option ">2013</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2012">
                    <div className="tire-search-option veh-option ">2012</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2011">
                    <div className="tire-search-option veh-option ">2011</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2010">
                    <div className="tire-search-option veh-option ">2010</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2009">
                    <div className="tire-search-option veh-option ">2009</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2008">
                    <div className="tire-search-option veh-option ">2008</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2007">
                    <div className="tire-search-option veh-option ">2007</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2006">
                    <div className="tire-search-option veh-option ">2006</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2005">
                    <div className="tire-search-option veh-option ">2005</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2004">
                    <div className="tire-search-option veh-option ">2004</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2003">
                    <div className="tire-search-option veh-option ">2003</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2002">
                    <div className="tire-search-option veh-option ">2002</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2001">
                    <div className="tire-search-option veh-option ">2001</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=2000">
                    <div className="tire-search-option veh-option ">2000</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1999">
                    <div className="tire-search-option veh-option ">1999</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1998">
                    <div className="tire-search-option veh-option ">1998</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1997">
                    <div className="tire-search-option veh-option ">1997</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1996">
                    <div className="tire-search-option veh-option ">1996</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1995">
                    <div className="tire-search-option veh-option ">1995</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1994">
                    <div className="tire-search-option veh-option ">1994</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1993">
                    <div className="tire-search-option veh-option ">1993</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1992">
                    <div className="tire-search-option veh-option ">1992</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1991">
                    <div className="tire-search-option veh-option ">1991</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1990">
                    <div className="tire-search-option veh-option ">1990</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1989">
                    <div className="tire-search-option veh-option ">1989</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1988">
                    <div className="tire-search-option veh-option ">1988</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1987">
                    <div className="tire-search-option veh-option ">1987</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1986">
                    <div className="tire-search-option veh-option ">1986</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1985">
                    <div className="tire-search-option veh-option ">1985</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1984">
                    <div className="tire-search-option veh-option ">1984</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1983">
                    <div className="tire-search-option veh-option ">1983</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1982">
                    <div className="tire-search-option veh-option ">1982</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1981">
                    <div className="tire-search-option veh-option ">1981</div>
                  </a>
                  <a href="/tires/search-by/vehicle/?veh_year=1980">
                    <div className="tire-search-option veh-option ">1980</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="tire-search-param">
              <div className="tire-search-param-head disabled">
                <div className="collapse-icon">
                  <i
                    className="fas fa-chevron-circle-right collapse-open"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2>Select Make</h2>
                </div>
              </div>
            </div>
            <div className="tire-search-param">
              <div className="tire-search-param-head disabled">
                <div className="collapse-icon">
                  <i
                    className="fas fa-chevron-circle-right collapse-open"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2>Select Model</h2>
                </div>
              </div>
            </div>
            <div className="tire-search-param">
              <div className="tire-search-param-head disabled">
                <div className="collapse-icon">
                  <i
                    className="fas fa-chevron-circle-right collapse-open"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2>Select Trim</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByVehicle;
