// =========================================
// Import Functions  -----------------------

// Dropdown -------------------------------
import Dropdown from './components/Dropdown';

// CreateMarkup ---------------------------
import CreateMarkup from './components/CreateMarkup';

// LoadMore -------------------------------
import LoadMore from './components/LoadMore';

// ========================================
// Init Events  ---------------------------
window.addEventListener('load', () => {
  Dropdown();
  CreateMarkup();
  LoadMore();
});
