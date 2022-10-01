import styles from "./productsSummary.module.css";
import { truncateText } from "../../global/globalFunctions/truncateText"
import { useState } from "react";

const ProductsSummary = ({ details }) => {

    const [showDescription, setShowDescription] = useState(false);

    return (<>
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <p className={styles.mainHeading}>{details.search_term_elastic}</p>
                <p className={styles.description}>
                    {`The Lowest price of ${details.search_term_elastic} in Pakistan is Rs.${details.min_price} and estimated average price is Rs.${details.avg_price}.`}
                </p>
                <br />
                <p className={styles.mainHeading} style={{ display: "flex", }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="17" height="17"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"></path></svg>
                    &nbsp; Description
                </p>
                {
                    !showDescription ?
                        <p className={styles.description}>
                            {truncateText(details.summary, 400)}
                        </p> :
                        <p className={styles.description}>
                            {details.summary}
                        </p>
                }
                <div className="d-flex justify-content-center w-100">
                <button className={styles.readMoreBtn} onClick={() => setShowDescription(!showDescription)}>Read More</button>
                </div>
            </div>
        </div>
    </>);
}

export default ProductsSummary;