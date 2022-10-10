import Link from "next/link";
import { useRouter } from "next/router";
import { useFilter, useWindowSize } from "@hooks";
import { toCapitalize } from "@utils/toCapitalize";
import { Fragment, useContext, useState } from "react";
import SortBy from "@components/shop/elements/SortBy";
import { ProductsContext } from "@global/ProductsContext";
import ShopWidget from "@components/shop/elements/ShopWidget";
import { arrSortByCharacter, getClosest, range } from "@utils/method";
import ProductPerPage from "@components/shop/elements/ProductPerPage";
import {
  getProductsUniqueTags,
  getProductsUniquePrices,
  getProductsUniqueSizes,
  getProductsUniqueColors,
  getProductsUniqueVendor,
  getProductsUniqueCategories,
} from "@utils/product";
import { gql, useQuery } from "@apollo/client";
import { useSearchkitVariables, useSearchkit } from "@searchkit/client";
import { versionInfo } from "graphql";


const querygql = gql`
  query resultSet(
    $query: String
    $filters: [SKFiltersSet]
    $page: SKPageInput
    $sortBy: String
  ) {
    results(query: $query, filters: $filters) {
      summary {
        total
        appliedFilters {
          id
          identifier
          display
          label
          ... on DateRangeSelectedFilter {
            dateMin
            dateMax
            __typename
          }
          ... on ValueSelectedFilter {
            value
            __typename
          }
          __typename
        }
        sortOptions {
          id
          label
          __typename
        }
        query
        __typename
      }
      hits(page: $page, sortBy: $sortBy) {
        page {
          total
          totalPages
          pageNumber
          from
          size
          __typename
        }
        sortedBy
        items {
          ... on ResultHit {
            id
            fields {
              title
              image
              vendor
              price
              price_before_sale
              domain
              category
              is_on_sale
              updatedAt
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      facets {
        identifier
        type
        label
        display
        entries {
          label
          count
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

const ShopFilters = (props) => {
  const {
    sidebar,
    onSortHandler,
    getFilterParam,
    productPerPage,
    filterPanelHandler,
    onProductPerPageHandler,
  } = props;
  const router = useRouter();
  const { vendor, domain } = router.query;
  const {
    query: { slug },
  } = useRouter();
  const [windowSize] = useWindowSize();
  const variables = useSearchkitVariables();
  const {
    previousData,
    data = previousData,
    loading,
  } = useQuery(querygql, {
    variables: variables,
  });
  const [minprice, setMinprice] = useState(router.query.minprice);
  const [maxprice, setMaxprice] = useState(router.query.maxprice);
  const [categoryLimit, setCategoryLimit] = useState(10);
  const [vendorLimit, setVendorLimit] = useState(10);
  const [priceLimit, setPriceLimit] = useState(10);
  const [selected, setSelected] = useState("");
  const [showPriceRangeError, setShowPriceRangeError] = useState(false);

  const submitForm = () => {
    if (parseInt(maxprice) <= parseInt(minprice)) {
      setShowPriceRangeError(true)
      return null;
    }

    router.push({
      pathname: router.pathname,
      query: { ...router.query, minprice, maxprice, page: 1 },
    });
    setShowPriceRangeError(false)

  };

  const filterByHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    const closest = getClosest(target, "UL").childNodes;
    closest.forEach((elem) => {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
        target.parentNode.classList.add("active");
      } else {
        target.parentNode.classList.add("active");
      }
    });
    getFilterParam(target.dataset.filtertype, target.dataset.filtervalue);
  };

  const handlegender = (gender) => {
    setSelected(gender);
    if (gender.length == 1 && gender) {
      delete router?.query?.gender;
      const newGender = {
        ...gender,
      };
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, gender },
        }}
      ></Link>;
    } else {
      const newGender = {
        ...gender,
        gender: gender,
      };
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, gender },
        }}
      ></Link>;
    }
  };

  // const handleCategory = (category) => {
  //   console.log(category)
  //   setSelected(category);
  //   if (category.length == 1 && category) {
  //     delete router?.query?.category;
  //     const newproductype = {
  //       ...category,
  //     };
  //     // <Link
  //     //   href={{
  //     //     pathname: router.pathname,
  //     //     query: { ...router.query, category },
  //     //   }}
  //     // ></Link>;
  //     router.push({
  //       pathname: "/shop",
  //       query: { ...router.query, category },
  //     })

  //   }
  //   else {
  //     const newproductype = {
  //       ...category,
  //       category: category,
  //     };
  //     // <Link
  //     //   href={{
  //     //     pathname: router.pathname,
  //     //     query: { ...router.query, category },
  //     //   }}
  //     // ></Link>;
  //     router.push({
  //       pathname: "/shop",
  //       query: { ...router.query, category },
  //     })
  //   }
  // };

  const handleCategory = (category) => {
    console.log(category);
    if (category) {
      router.push({
        pathname: router.pathname,
        query: { category: category }
      });
    }
  };

  const handledomain = (domain) => {
    setSelected(domain);
    if (domain.length == 1 && domain) {
      delete router?.query?.domain;
      const newdomain = {
        ...domain,
      };
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, domain },
        }}
      ></Link>;
    } else {
      const newdomain = {
        ...domain,
        domain: domain,
      };
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, domain },
        }}
      ></Link>;
    }
  };
  const handlevendor = (vendor) => {
    setSelected(vendor);
    if (vendor.length == 1 && vendor) {
      delete router?.query?.vendor;
      const newvendor = {
        ...vendor,
      };
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, vendor },
        }}
      ></Link>;
    } else {
      const newvendor = {
        ...vendor,
        vendor: vendor,
      };
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, vendor },
        }}
      ></Link>;
    }
  };

  const removeGender = () => {
    delete router?.query?.gender;
    router.push({
      pathname: "/category",
      query: router?.query,
    });
  };

  const removeCategory = () => {
    delete router?.query?.category;
    console.log(router?.query);
    router.push({
      pathname: "/category",
      query: router?.query,
    });
  };

  const removevendor = () => {
    delete router?.query?.vendor;
    router.push({
      pathname: "/category",
      query: router?.query,
    });
  };

  const removedomain = () => {
    delete router?.query?.domain;
    router.push({
      pathname: "/category",
      query: router?.query,
    });
  };


  return (
    <Fragment>
      {!sidebar && (
        <div className="tt-btn-col-close">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              filterPanelHandler();
            }}
          >
            Close
          </a>
        </div>
      )}

      {windowSize < 1025 && sidebar && (
        <Fragment>
          <div className="tt-btn-col-close">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                filterPanelHandler();
              }}
            >
              Close
            </a>
          </div>

          <ShopWidget>
            <div className="tt-filter-detach-option">
              <div className="filters-mobile">
                <div className="filters-row-select">
                  <SortBy />

                  <ProductPerPage
                    productPerPage={productPerPage}
                    onProductPerPageHandler={onProductPerPageHandler}
                  />
                </div>
              </div>
            </div>
          </ShopWidget>
        </Fragment>
      )}

      <ShopWidget title="CATEGORY">
        {/* not scrollable list */}
        <ul className="tt-list-row">
          {data?.results?.facets?.map((item) => {
            if (item.identifier == "category") {
              return item?.entries?.slice(0, categoryLimit).map((_category) => {
                let category = _category?.label;
                return (
                  <li
                    key={category}
                    className={router?.query?.category ? "active" : ""}
                  >
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { ...router.query, category, page: 1 },
                      }}
                      passHref
                      shallow
                      replace
                    >
                      {toCapitalize(category.replace(/-/g, " "))}
                    </Link>
                    {/* {router?.query?.category ? (
                      <button
                        onClick={removeCategory}
                        style={{
                          marginLeft: "20px",
                          fontSize: "10px",
                          border: "none",
                        }}
                      >
                        ❌
                      </button>
                    ) : null} */}
                  </li>
                );
              });
            }
          })}
        </ul>

        {/* {priceRange.length > priceLimit && (
          <button
            className="btn-link-02"
            // onClick={() => setPriceLimit((prevState) => prevState + 3)}
          >
            + More
          </button>
        )} */}
      </ShopWidget>

      <ShopWidget title="VENDOR">
        <ul className="tt-list-row">
          {data?.results?.facets?.map((item) => {
            if (item.identifier == "vendor") {
              return item?.entries?.slice(0, categoryLimit).map((venitem) => {
                let vendor = venitem?.label;

                return (
                  <li
                    // onClick={() => handlevendor(vendor)}
                    key={vendor}
                    className={router?.query?.vendor ? "active" : ""}
                  >
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { ...router.query, vendor, page: 1 },
                      }}
                      passHref
                      shallow
                      replace
                    >
                      {toCapitalize(vendor.replace(/-/g, " "))}
                    </Link>
                    {/* {router?.query?.vendor ? (
                      <button
                        onClick={removevendor}
                        style={{
                          marginLeft: "20px",
                          fontSize: "10px",
                          border: "none",
                        }}
                      >
                        ❌
                      </button>
                    ) : null} */}
                  </li>
                );
              });
            }
          })}
        </ul>
        {/* {vendors.length > vendorLimit && (
          <button
            className="btn-link-02"
            // onClick={() => setVendorLimit((prevState) => prevState + 5)}
          >
            + More
          </button>
        )} */}
      </ShopWidget>
      <ShopWidget title="Domain">
        <ul className="tt-list-row">
          {data?.results?.facets?.map((item) => {
            if (item.identifier == "domain") {
              return item?.entries?.slice(0, categoryLimit).map((domainitem) => {
                let domain = domainitem?.label;
                return (
                  <li
                    // onClick={() => handledomain(domain)}
                    key={domain}
                    className={router?.query?.domain ? "active" : ""}
                  >
                    <Link
                      href={{
                        pathname: router.pathname,
                        query: { ...router.query, domain, page: 1 },
                      }}
                      passHref
                      shallow
                      replace
                    >
                      {toCapitalize(domain.replace(/-/g, " "))}
                    </Link>
                    {/* {router?.query?.domain ? (
                      <button
                        onClick={removedomain}
                        style={{
                          marginLeft: "20px",
                          fontSize: "10px",
                          border: "none",
                        }}
                      >
                        ❌
                      </button>
                    ) : null} */}
                  </li>
                );
                // return (
                //   <li key={domainitem.toLowerCase()}>
                //     <a
                //       href="/"
                //       data-filtertype="vendor"
                //       data-filtervalue={domainitem}
                //       // onClick={(event) => filterByHandler(event)}
                //     >
                //       {domainitem}
                //     </a>
                //   </li>
                // );
              });
            }
          })}
        </ul>
        {/* {vendors.length > vendorLimit && (
          <button
            className="btn-link-02"
            // onClick={() => setVendorLimit((prevState) => prevState + 5)}
          >
            + More
          </button>
        )} */}
      </ShopWidget>

      {/* /////////////////>> PRICE <<//////////////////////// */}
      
      {/* remove d-none property to make it visible */}
      <div className="d-none"> 
        <ShopWidget title="BY PRICE">
          <div className="d-flex">
            <div className="input-container">
              <input
                type="number"
                value={minprice}
                onChange={(e) => setMinprice(e.target.value)}
                min={0}
              />
              <label>Min</label>
            </div>
            <div className="input-container">
              <input
                type="number"
                value={maxprice}
                onChange={(e) => setMaxprice(e.target.value)}
                min={0}
              />
              <label>Max</label>
            </div>
          </div>

          {/* min max error  */}
          {showPriceRangeError &&
            <label style={{ color: "red", marginTop: "-20px", marginBottom: "5px" }}>
              Min price must be smaller than max price.
            </label>
          }

          <div className="d-flex justify-content-start">
            <button
              className="btn-primary"
              // onClick={submitForm}
              style={{ borderRadius: 4, paddingLeft: 15, paddingRight: 15, paddingTop: 3, paddingBottom: 3 }}
            >
              Search
            </button>
          </div>

        </ShopWidget>
      </div>

    </Fragment>
  );
};

export default ShopFilters;
