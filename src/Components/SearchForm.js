import { useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * SearchForm component renders and maintains the state of search input
 *
 * @returns {html} search form
 */
const SearchForm = ({ changeQuery }) => {
  // put a ref to the search entry
  const searchText = useRef(null);
  // progrmatically nagivate the url
  let navigate = useNavigate();

  // event handler for submitting the search form
  const handleSubmit = (e) => {
    e.preventDefault();
    // setting the query string to the search text entered by the user
    changeQuery(searchText.current.value);
    //updating URL to search term
    let path = searchText.current.value;
    navigate(path);
    // resetting the search field after submission
    e.currentTarget.reset();
  };

  return (
    // onClick event to trigger handleSubmit function with event object
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        ref={searchText}
        required
      />
      <button type="submit" className="search-button">
        <svg
          fill="#fff"
          height="24"
          viewBox="0 0 23 23"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
