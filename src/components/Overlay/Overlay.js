import React from "react"
import "./Overlay.css"
const Overlay = ({
  totalPrice,
  showPopup,
  setShowPopup,
  resetAfterTransaction
}) => {
  if (showPopup) {
    return (
      <div className="overlay">
        <div className="pop-up-window">
          <button className="cross-btn" onClick={resetAfterTransaction}>
            X
          </button>
          <p>₹{totalPrice}</p>
          <p>Transaction Successful</p>
          <div className="btn-popup-group">
            <button className="shop-more" onClick={() => setShowPopup(false)}>
              Shop More
            </button>
            <button
              className="shop-more cancel"
              onClick={resetAfterTransaction}
            >
              I am Done
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Overlay
