import Pagination from "react-bootstrap-4-pagination";
import { useRouter } from "next/router";
const CustomPagination = ({ data }) => {
    const router = useRouter();

    // const paginationOptions = {
    //     threeDots: true,
    //     totalPages: data?.hits?.page?.totalPages,
    //     currentPage: data?.hits?.page?.pageNumber + 1,
    //     showMax: 7,
    //     prevNext: true,
    //     activeBgColor: "#2879fe",
    //     activeBorderColor: "#7bc9c9",
    //     onClick: function (page) {
    //         console.log(page);
    //         router.push({
    //             pathname: router.pathname,
    //             query: { ...router.query, page },
    //         })
    //     }
    // }
    if (!data?.hits?.page?.totalPages && !data?.hits?.page?.pageNumber) {
        return null
    }

    return (
        <Pagination
            threeDots={true}
            totalPages={data?.hits?.page?.totalPages}
            currentPage={data?.hits?.page?.pageNumber + 1}
            showMax={data?.hits?.page?.totalPages == router.query.page? 2: 4}
            prevNext={true}
            activeBgColor="#2879fe"
            activeBorderColor="#7bc9c9"
            circle={true}
            onClick={(page) => {
                console.log(page);
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query, page },
                })
            }}
        />
    )
}

export default CustomPagination;