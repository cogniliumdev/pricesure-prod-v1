import PropType from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SortBy = () => {

  const router = useRouter();

  function handleChange(e) {
    const sort = e.target.value;
    router.push({
      pathname: "/category",
      query: { ...router.query, sortby: sort },
    });
  }

  const removeprice = () => {
    delete router?.query?.sortby;
    router.push({
      pathname: "/category",
      query: router?.query,
    });
  };

  return (
    <>
      <select style={{ width: "150px" }} value={router?.query?.sortby} onChange={handleChange}>
        <option value="relevance">Relevance</option>
        <option value="price_asc">Price low to high</option>
        <option value="price_desc">Price high to low</option>
        <option value="discount_asc">Discount low to high</option>
        <option value="discount_desc">Discount high to low</option>
      </select>

      {router?.query?.sortby && (
        <button
          onClick={removeprice}
          style={{
            marginLeft: "20px",
            fontSize: "10px",
            border: "none",
          }}
        >
          ❌
        </button>
      ) }
    </>
  );
};
// delete router.query.something;
// router.push(router);
// SortBy.propTypes = {
//   onSortHandler: PropType.func.isRequired,
// };

export default SortBy;
