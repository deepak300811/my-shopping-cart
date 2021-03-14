import React from "react"
import "./SingleItem.css"
const SingleItem = ({ product, itemAction }) => {
  const {
    id,
    brandName,
    productName,
    Quantity,
    MRP,
    Price,
    ImageUrl,
    offerText,
    count
  } = product

  return (
    <div className="main-card">
      <div className="left">
        <img className="left-img" src={ImageUrl} alt="" />
        <p className="left-offer">
          {" "}
          {offerText === 0 ? "No Discount" : `${offerText}% OFF`}
        </p>
      </div>
      <div className="right">
        <p>{brandName}</p>
        <p>{productName}</p>
        <p>{Quantity}</p>
        <p>MRP {MRP}</p>
        <p>Rs {Price}</p>
        <div className="button-group">
          <button
            className="btn btn-add-cart"
            onClick={() => itemAction(id, "+")}
          >
            ADD CART
          </button>
          <div className="plus-minus">
            <button
              className="btn btn-circle"
              onClick={() => itemAction(id, "+")}
            >
              +
            </button>{" "}
            <span className="per-item-count">{count}</span>
            <button
              className="btn btn-circle"
              onClick={() => itemAction(id, "-")}
              disabled={count === 0}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SingleItem)
