import brandCollections from "@data/brand/brandCollections";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import { BrandTwo as Brand } from "@components/brand";


const BrandsFour = ({ title, subTitle }) => {
    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title={title} content={subTitle}
                />

                <Row className="tt-layout-promo-box">
                    {brandCollections.map(brand => (
                        <Col xs={6} sm={4} md={3} key={brand.id}>
                            <Brand
                                logo={brand.logo}
                                link={brand.link}
                                thumb={brand.thumb}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BrandsFour;