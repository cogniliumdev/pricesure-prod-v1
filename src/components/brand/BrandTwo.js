import Link from "next/link";

const BrandTwo = ({ className, logo, link, thumb }) => {
    return (
        <Link href={link ? link : '/'}>
            <a className={`tt-promo-box tt-one-child ${className ? className : ''}`}>
                <img src={thumb} alt="wokiee" />
                <div className="tt-description">
                    <div className="tt-description-wrapper">
                        <div
                            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                            className="tt-background"
                        >
                            <p style={{color:"black",fontWeight:"bold", fontSize:"20px"}}>visit</p>
                        </div>
                        {/* <img   src={logo} alt="wokiee"/> */}
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default BrandTwo;