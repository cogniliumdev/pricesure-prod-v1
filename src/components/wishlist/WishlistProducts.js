import { Fragment, useContext } from "react";
import { ProductOne as Product } from "@components/product";
import { Col, Container, Row } from "react-bootstrap";
import { WishlistContext } from "@global/WishlistContext";
import Productx from "@components/product/Productx";


const WishlistProducts = ({ products }) => {
    const { wishlist } = useContext(WishlistContext);
    console.log(products);
    return (
        <Fragment>
            <Container className="container-fluid-custom-mobile-padding">
                <h1 className="tt-title-subpages noborder">WISHLIST</h1>
                <div className="tt-wishlist-box">
                    <div className="tt-wishlist-list">
                        <Row className="tt-layout-product-item">
                            {products?.map(product => (
                                <Col key={product.id} sm={6} md={4} lg={3}>
                                    {/* <Product
                                        page="wishlist"
                                        product={product}
                                        showVariant={false}
                                    /> */}
                                    <Productx page={"wishlist"} product={product} showVariant={true} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    )

};

export default WishlistProducts;