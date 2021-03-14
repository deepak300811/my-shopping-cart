import React from "react"
import "./Footer.css"
const Footer = ({
  totalQuantityCount,
  totalPrice,
  setShowPopup,
  showPopup
}) => {
  return (
    <footer className="foooter">
      <div className="ftr-left">
        <p>Qty {totalQuantityCount}</p>
        <p>Total {totalPrice}</p>
      </div>
      <div className="ftr-right">
        <button
          onClick={() => setShowPopup(true)}
          disabled={totalPrice === 0 || totalQuantityCount === 0 || showPopup}
        >
          {" "}
          CHECKOUT
        </button>
      </div>
    </footer>
  )
}

export default Footer
