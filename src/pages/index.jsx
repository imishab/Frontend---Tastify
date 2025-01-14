import CategorySlider from "@/components/products/CategorySlider";
import ProductCardSection from "@/components/products/ProductCardSection";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      {/* Tiny Slider One Wrapper */}
      <div className="tiny-slider-one-wrapper">
        <div className="tiny-slider-one">
          {/* Single Hero Slide */}
          <div>
            <div
              className="single-hero-slide bg-overlay"
              style={{ backgroundImage: 'url("/assets/images/banner.png")' }}
            >
              <div className="h-100 d-flex align-items-center text-center">
                <div className="container">
                  <h5 className="text-white mb-1">Welcome to Tastify</h5>
                  <p className="text-white mb-4">
                    We will give you what you need.
                  </p>

                  <a className="btn btn-creative btn-dark" href="/">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
        </div>
      </div>
      <div className="pt-3" />

      <div className="mt-3 mb-3">
        <div className="container mb-4">
          <h6>Top Categories</h6>
        </div>

        <CategorySlider />
      </div>
      <div className="pt-2" />
      <div className="container mb-0">
        <h6>Recommented Products</h6>
      </div>
      <ProductCardSection pagination={false} limit={10} />
      <center>
        <Link href="/menu" className="btn btn-dark mt-4 ">
          View All Products{" "}
        </Link>
      </center>
      <div className="pb-3" />
    </>
  );
}
