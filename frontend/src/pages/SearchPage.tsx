import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import SearchBar from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useParams } from "react-router-dom";

const SearchPage = () => {
    const { city } = useParams();

    const { results, isLoading } = useSearchRestaurants(city);

    if (isLoading) {
        <span>Loading ...</span>;
    }

    if (!results?.data || !city) {
        return <span>No results found</span>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="cuisines-list">
                <CuisineFilter />
            </div>
            <div id="main-content" className="flex flex-col gap-5">
                <SearchBar
                    searchQuery=""
                    placeHolder="Search by Cuisine or Restaurant Name"
                    onSubmit={() => { }}
                />
                <div className="flex justify-between flex-col gap-3 lg:flex-row">
                    <SearchResultInfo
                        total={results.pagination.total}
                        city={city}
                    />
                    <SortOptionDropdown />
                </div>
                {results.data.map((restaurant) => (
                    <SearchResultCard restaurant={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage