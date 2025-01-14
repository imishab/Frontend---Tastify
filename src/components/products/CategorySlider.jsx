import React from "react";
import { useGetCategoriesQuery } from "../../redux/api/UserApi";
import Loader from "../elements/Loader";

export default function CategorySlider() {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesQuery("");

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Failed to load products. Please try again later.</div>;
  }
  return (
    <div className="">
      <div className="d-flex overflow-auto py-0">
        {categories?.map((category) => (
          <div
            key={category}
            className="text-center justify-center mx-3 slider-item"
            style={{ minWidth: "80px" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2276/2276931.png"
              alt="Item 1"
              className="rounded"
              style={{
                width: "100px",
                height: "80px",
                borderRadius: "100px",
              }}
            />
            <center>
              <p className="mt-2 text-center truncated-title">
                {category.title}
              </p>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
}
