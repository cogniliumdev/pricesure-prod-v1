import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CompareContext } from "@global/CompareContext";
import CompareProducts from "@components/compare/CompareProducts";
import { useSelector } from 'react-redux'

const CompareWrapper = () => {

    // const {compareList} = useContext(CompareContext);
    const compareList = useSelector((state) => state.compareList.products);

    return (
        <Container>
            <h1 className="tt-title-subpages noborder">
                COMPARING <span>{compareList.length}</span> PRODUCTS
            </h1>
            <br/>
            <br/>
            <div className="tt-compare-table02 mt-0">
                <div className="tt-col-title">
                    <div className="mt-2 title-item compare_row compare_row_01"/>
                    <div className="title-item compare_row compare_row_02">
                        Descriptions
                    </div>
                    <div className="title-item compare_row compare_row_03">Vendor</div>
                    <div className="title-item compare_row compare_row_04">Website</div>
                </div>

                <CompareProducts/>
            </div>
        </Container>
    );
};

export default CompareWrapper;