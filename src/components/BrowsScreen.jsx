import React from "react";
import GaleryForBrows from "./GaleryForBrows";
import PriceListBrows from "./PriceListBrows";

export default function BrowsScreen() {
  return (
    <div className="items_box">
      <GaleryForBrows />
      <PriceListBrows />
    </div>
  );
}
