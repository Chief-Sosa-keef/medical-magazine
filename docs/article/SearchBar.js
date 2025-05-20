import { jsx as _jsx } from "react/jsx-runtime";
import './SearchBar.css';
const SearchBar = ({ searchQuery, setSearchQuery, txt }) => {
    return (_jsx("div", { className: "search-container", children: _jsx("input", { type: "text", placeholder: txt, value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "search-input" }) }));
};
export default SearchBar;
