import Link from "next/link";
import PropTypes from "prop-types";
import { toCapitalize } from "@utils/toCapitalize";

const CategoryThree = ({ url, thumb, catName, title, className }) => {
    return (
        <Link href={url}>
            <a className={`tt-btn-img ${className ? className : ''}`}>
                <div className="tt-img" style={{ backgroundImage: `url(${thumb})` }} />
                <div className="tt-title">{toCapitalize(title)}</div>
            </a>
        </Link>
        // <Link href={`/product/category/${catName?.toLowerCase()}`}>
        //     <a className={`tt-btn-img ${className ? className : ''}`}>
        //         <div className="tt-img" style={{backgroundImage: `url(${thumb})`}}/>
        //         <div className="tt-title">{toCapitalize(catName)}</div>
        //     </a>
        // </Link>
    );
};
CategoryThree.propTypes = {
    thumb: PropTypes.string.isRequired,
    catName: PropTypes.string.isRequired
}


export default CategoryThree;