import Link from "next/link";
import React from "react";

const Collectioncards = () => {
  return (
    <>
      <div className="container">
        <div
          class="card-group"
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            justifyItems: "center",
            padding: "0px 15px",
          }}
        >
          <div class="card">
            <Link
              href={"/category?category=redmi+mobiles&domain=www.daraz.pk&vendor=Redmi&sortby=price_desc"}
              passHref
            >
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "275px",
                  width: "275px",
                }}
                class="card-img-top"
                src="https://storage.pricemeter.pk/images/page/400x400/zBJLVAGiWbNY3vS1lg03GtIlFkflBEhNCdipeuCN.jpeg"
                alt="Card image cap"
              />
            </Link>
          </div>

          <div class="card">
            <Link
              href={"/category?category=traditional+laptops&vendor=HP&domain=www.daraz.pk&sortby=price_desc"}
              passHref
            >
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",

                  height: "275px",
                  width: "275px",
                }}
                class="card-img-top"
                src="https://storage.pricemeter.pk/images/page/400x400/5JWtC8pxvPjzRRtv4PslgRg8fI9DoiRNJ3wr2hcd.jpeg"
                alt="Card image cap"
              />
            </Link>
          </div>


          <div class="card">
            <Link
              href={"/category?category=casual+shirts&vendor=StreetMark&domain=www.daraz.pk&sortby=price_desc"}
              passHref
            >
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "275px",
                  width: "275px",
                }}
                class="card-img-top"
                src="https://storage.pricemeter.pk/images/page/400x400/woje8I93O6mQkSl7GMWr3cwlyxqAtNlRs0xlHmmG.jpeg"
                alt="Card image cap"
              />
            </Link>
          </div>

          <div class="card">
            <Link
              href={"/category?category=sarees&domain=www.daraz.pk&vendor=Muntaha+Fabrics&sortby=price_desc"}
              passHref
            >
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "275px",
                  width: "275px",
                }}
                class="card-img-top"
                src="https://storage.pricemeter.pk/images/page/400x400/MWazkh3EfWsMtyXiosURad5NwGc75H3Dc8wu7Pet.jpeg"
                alt="Card image cap"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collectioncards;
