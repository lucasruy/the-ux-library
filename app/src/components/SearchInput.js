const SearchInput = () => {
  const inputSearch = document.querySelector(".input--search");

  const setActive = (el, currentIndex, activeClass) => {
    for (let i = 0; i < el.length; i += 1) {
      el[i].classList.remove(activeClass);
      el[i].classList.add("is-hidden");
    }
    el[currentIndex].classList.remove("is-hidden");
    el[currentIndex].classList.add(activeClass);
  };

  const setDisable = el => {
    const notFound = document.querySelector(".u-not-found");

    for (let i = 0; i < el.length; i += 1) {
      el[i].classList.remove("is-filtered");
      el[i].classList.remove("is-hidden");
    }

    notFound.classList.remove("is-active");
  };

  const filterElements = () => {
    const postItems = document.querySelectorAll(".posts-list__item");
    const postItemsTitle = document.querySelectorAll(".posts-list__item h2");
    const filter = inputSearch.value.toLowerCase();

    postItemsTitle.forEach((item, index) => {
      const currentText = item.textContent.toLowerCase();

      if (filter.length > 2 && currentText.includes(filter)) {
        setActive(postItems, index, "is-filtered");
      } else if (filter.length === 0) {
        setDisable(postItems);
      }
    });
  };

  inputSearch.addEventListener("keyup", filterElements, false);
};

export default SearchInput;
