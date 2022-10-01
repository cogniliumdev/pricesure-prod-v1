import axios from "axios";

const getRand = async () => {
    try {
        const response = await axios.post(`${process.env.ELASTIC_SEARCH_URL}/${process.env.ELASTIC_SEARCH_INDEX}/_doc/_search`,
            {
                size: 4,
                sort: [
                    {
                        discount: {
                            order: "desc",
                        },
                    },
                ],
            }
        );
        return response.data
    } catch (err) {
        console.log(err);
    }
}

const getFax = async () => {
    try {
        const response = await axios.post(`${process.env.ELASTIC_SEARCH_URL}/${process.env.ELASTIC_SEARCH_INDEX}/_doc/_search`,
            {
                size: 4,
                sort: [
                    {
                        rating: {
                            order: "desc",
                        },
                    },
                ],
            }
        );

        return response.data
    } catch (err) {
        console.log(err);
    }
}

const getFooterQery = async () => {
    try {
        const response = await axios.post(`${process.env.ELASTIC_SEARCH_URL}/${process.env.ELASTIC_SEARCH_INDEX}/_doc/_search`,
            {
                size: 0,
                aggs: {
                    domains: {
                        terms: {
                            field: "domain.keyword",
                            size: 10,
                        },
                    },
                },
            }
        );

        return response.data
    } catch (err) {
        console.log(err);
    }
};


const getNavbarQuery = async () => {
    try {
        const response = await axios.post(`${process.env.ELASTIC_SEARCH_URL}/${process.env.ELASTIC_SEARCH_INDEX}/_doc/_search`,
            {
                size: 4,
                aggs: {
                    catagories: {
                        terms: {
                            field: "category",
                            size: 10,
                        },
                    },
                },
            }
        );
        return response.data
    } catch (err) {
        console.log(err);
    }
};

const getDiscountedProducts = async (randomVendor) => {
    try {
        const response = await axios.post(`${process.env.ELASTIC_SEARCH_URL}/${process.env.ELASTIC_SEARCH_INDEX}/_doc/_search`,
            {
                size:4,
                query: {
                    bool: {
                        filter: [
                            {
                                range: {
                                    discount: {
                                        gte: 5,
                                        lte: 80
                                    }
                                }
                            }, {
                                term: {
                                    vendor: randomVendor
                                }
                            }
                        ]
                    }
                }
                , sort: [
                    {
                        discount: {
                            order: "desc"
                        }
                    }
                ]
            }
        );
        // console.log(response.data)
        return response.data;
    } catch (err) {
        console.log(err);
    }

};


const getProductsByDomain = async (domain) => {
    try {
        const response = await axios.post(`${process.env.ELASTIC_SEARCH_URL}/${process.env.ELASTIC_SEARCH_INDEX}/_doc/_search`,
            {
                size:4,
                "query": {
                    "bool": {
                        "filter": [
                            {
                                "range": {
                                    "discount": {
                                        "gte": 5,
                                        "lte": 80
                                    }
                                }
                            }, {
                                "term": {
                                    "domain": domain
                                }
                            }
                        ]
                    }
                }
                , "sort": [
                    {
                        "discount": {
                            "order": "desc"
                        }
                    }
                ]
            }
        );
        // console.log(response.data)
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export {
    getRand,
    getFax,
    getFooterQery,
    getNavbarQuery,
    getDiscountedProducts,
    getProductsByDomain
}