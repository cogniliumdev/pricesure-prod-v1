import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductsContext } from "@global/ProductsContext";
import { getProductsUniqueCategories } from "@utils/product";
import { CategoryThree as Category } from "@components/category";
import { arrSortByCharacter } from "@utils/method";
import { getRandomImage } from "@global/globalFunctions/getRandomImage"
import { topCategories } from "@data/topCategories/topCategories"
import SectionTitle from "@components/ui/section-title";


const CategoriesTen = ({ title, subTitle, className }) => {
    const { products } = useContext(ProductsContext);
    const cats = getProductsUniqueCategories(products, 10);
    const categories = arrSortByCharacter(cats);


    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <SectionTitle title={title} content={subTitle} />
                <div className="tt-btn-img-list">
                    <Row>
                        {topCategories.map((category, idx) => (
                            <Col key={idx} xs={6} sm={4} className="col-5-inrow-lg">
                                <Category
                                    url={category.url}
                                    className="tt-layout-01"
                                    thumb={category.thumb}
                                    title={category.title}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CategoriesTen;