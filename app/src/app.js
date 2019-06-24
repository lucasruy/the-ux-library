// =========================================
// Import Functions  -----------------------

// Polyfill -----------------------------
import "whatwg-fetch";
import "promise/polyfill";
import "nodelist-foreach-polyfill";

// Dropdown -------------------------------
import Dropdown from "./components/Dropdown";

// CreateMarkup ---------------------------
import CreateMarkup from "./components/CreateMarkup";

// LoadMore -------------------------------
import LoadMore from "./components/LoadMore";

// SearchInput ----------------------------
import SearchInput from "./components/SearchInput";

// FilterBy -------------------------------
import FilterBy from "./components/FilterBy";

// ========================================
// Init Events  ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  Dropdown();
  CreateMarkup();
  LoadMore();
  SearchInput();
  FilterBy();
});
