import React from "react";

export default function PriceListLip() {
  return (
    <div className="price_box">
      <div className="background_left_side"></div>
      <div className="background_rught_side">
        <div className="price_list">
          <h1>Price List</h1>
          <h2>Lips</h2>
          <div className="item_price">
            <span>LIP BLUSH</span>
            <span>$400</span>
          </div>
          <div className="item_price">
            <span>TOUCH UP</span>
            <span>$200</span>
          </div>
          <div className="item_price">
            <span>REFRESH</span>
            <span>$250</span>
          </div>
          <div className="under_text">
            [From 6 month to 1,5 years after procedure]
          </div>
          <div className="item_price">
            <span>CONSULTATION</span>
            <span>$50</span>
          </div>
          <div className="under_text">
            [The consultation fee is deducted from the final price when a
            procedure is purshosed]
          </div>
        </div>
      </div>
    </div>
  );
}
