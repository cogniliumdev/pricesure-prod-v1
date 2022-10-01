import {
    ReactiveBase,
    DataSearch,
} from '@appbaseio/reactivesearch';
import style from "./SearchBar.module.css";
import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchBar = () => {
    const [input, setInput] = useState("");
    const router = useRouter();

    const searchQuery = (value) => {
        router.push({
            pathname: "/category",
            query: {searchQuery: input },
        });
    };

    return (
        <div className='d-flex'>
            <ReactiveBase
                app="pricesure" // pricesure.
                url="https://contentapi-searchbox-prod.vercel.app/" // https://contentapi-searchbox-prod.vercel.app/
            >
                <DataSearch
                    className={style.searchbox}
                    dataField={['title']}
                    componentId="searchbox"
                    iconPosition="left"
                    filterLabel="search"
                    innerClass={{
                        input: style.searchbox,
                        outerWidth: style.searchbox,
                        list: "suggestionlist",
                    }}
                    size={5}
                    onValueSelected={function (value, cause, source) {
                        searchQuery();
                    }}
                    value={input}
                    onChange={(value, triggerQuery, event) => {
                        setInput(value);
                    }}
                />
            </ReactiveBase>
            <button onClick={searchQuery} className="tt-btn-search">SEARCH</button>
        </div>);
};
export default SearchBar;
