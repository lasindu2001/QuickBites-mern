import { useParams } from "react-router-dom";

const SearchPage = () => {
    const { city } = useParams();

    return (
        <div>
            <span>User searched for {city}</span>
        </div>
    )
}

export default SearchPage