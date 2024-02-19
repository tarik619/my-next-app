"use client";

import { Rating } from "@mui/material";
import React from "react";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productRatings =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
      <div className=""></div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRatings} readOnly />
          <div className="">{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div className="font-semibold">
          <span className="font-bold">Categorie:</span> {product.category}
        </div>
        <div className="font-semibold">
          <span className="font-bold">Brand:</span> {product.brand}
        </div>
        <div
          className={`${product.inStock ? "text-teal-400" : "text-red-400"}`}
        >
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <div className="">color: </div>
        <Horizontal />
        <div className="">quantity</div>
        <Horizontal />
        <div className="">add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
