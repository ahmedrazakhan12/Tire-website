import React from 'react'
import { Link } from 'react-router-dom'

const SearchBySize = () => {
  return (
    <>
        <div className="main-content-wrapper">
  <div className="main-content">
    <h1>Search Tires by Size</h1>
    <p className="size-up">
      Unbeatable tire prices are just a few clicks away! Choose your size from
      the boxes below to get started.
    </p>
    <div className="tab-bar med-marg-top">
      <Link to={'/search-by-vehicle'}>
        <div className="tab-bar-item tire-search-tab large">
          <span className="search-by">Search by</span>Vehicle
        </div>
      </Link>
      <div className="tab-bar-item tire-search-tab large selected">
        <span className="search-by">Search by</span>Size
      </div>
     
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
            <h2>Select Width</h2>
          </div>
        </div>
        <div className="tire-search-param-options" style={{ display: "block" }}>
          <div className="param-options-wrapper">
            <a>
              <div className="tire-search-option size-option ">145</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">155</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">165</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">175</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">185</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">195</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">205</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">215</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">225</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">235</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">245</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">255</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">265</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">275</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">285</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">295</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">305</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">315</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">317.5</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">325</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">335</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">8.75</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">9.50</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">10</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">11</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">27</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">28</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">30</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">31</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">32</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">33</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">34</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">35</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">37</div>
            </a>
            <a>
              <div className="tire-search-option size-option ">38</div>
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
            <h2>Select Ratio</h2>
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
            <h2>Select Rim</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SearchBySize