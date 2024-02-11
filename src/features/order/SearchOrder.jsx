import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    query("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar orden #"
        value={query}
        className=" h-10 w-72 rounded-xl bg-red-200 pl-3 text-stone-800 transition-all duration-300  placeholder:text-stone-500 focus:outline-none  focus:ring focus:ring-red-300  focus:ring-opacity-50  max-md:w-44 sm:focus:w-80"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchOrder;
