import React from "react";
import { useGetProductsQuery } from "../../redux/api/UserApi";
import Loader from "../elements/Loader";
import { useState } from "react";

export default function ProductCardSection({ pagination = false, limit }) {
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetProductsQuery("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Failed to load products. Please try again later.</div>;
  }

  // Calculate total pages for pagination
  const totalPages = Math.ceil(products?.length / itemsPerPage);

  // Determine the products to display
  const displayedProducts = pagination
    ? products?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : limit
    ? products?.slice(0, limit)
    : products;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Top Products */}
      <div className="top-products-area mt-4">
        <div className="container">
          <div className="row g-3">
            {displayedProducts?.map((product) => (
              <div key={product._id} className="col-6 col-sm-4 col-lg-3">
                <div className="card single-product-card">
                  <div className="card-body p-3">
                    <a
                      className="product-thumbnail d-block"
                      href={`/shop-details/${product.id}`}
                    >
                      <img
                        src={`https://backend-tastify.onrender.com${product.image}`}
                        alt={product.title}
                      />
                      {product.isOnSale && (
                        <span className="badge bg-warning">Sale</span>
                      )}
                    </a>
                    <a
                      className="product-title d-block text-truncate"
                      href={`/shop-details/${product.id}`}
                    >
                      {product.title}
                    </a>
                    <p className="sale-price">
                      {product.price}/-
                      {product.mrp && <span>Rs.{product.mrp}</span>}
                    </p>
                    <a className="btn btn-dark w-100 btn-md" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="shop-pagination pt-3">
          <div className="container">
            <div className="card">
              <div className="card-body py-3">
                <nav aria-label="Page navigation example">
                  <ul className="pagination pagination-two justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-label="Previous"
                      >
                        <i className="bi bi-chevron-left" />
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-label="Next"
                      >
                        <i className="bi bi-chevron-right" />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
