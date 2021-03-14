import React from "react"
import "./Loader.css"
const Loader = () => {
  return (
    <>
      {" "}
      <div className="loader-main">
        <div className="loader"></div>
        <div className="loader-text">
          Fetching Data from Heroku, it might take some time.
        </div>
      </div>
    </>
  )
}

export default Loader
