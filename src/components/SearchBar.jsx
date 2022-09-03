import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #E3E3E3",
        borderRadius: 20,
        boxShadow: "none",
        mr: { sm: 5 },
        pl: 2,
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#000000" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
