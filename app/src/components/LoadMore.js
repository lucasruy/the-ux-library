import { markupPost } from "../utils";
import GetValues from "./GetValues";

const LoadMore = () => {
  const dataValues = GetValues(
    "https://www.mocky.io/v2/5a6bc16631000078341b8b77"
  );

  const buttonLoad = document.querySelector(".button--more");
  const listWrapper = document.querySelector(".posts-list");

  const createLoadedItems = (infos, index) => {
    markupPost(infos, index);
  };

  buttonLoad.addEventListener("click", () => {
    const listItems = document.querySelectorAll(".posts-list__item");

    buttonLoad.classList.add("is-active");

    if (listWrapper.childNodes.length <= 6) {
      dataValues.then(response => {
        const items = response.links;

        items.forEach((item, index) => {
          const currentListItem = listItems[index];

          if (currentListItem === undefined) {
            createLoadedItems(item, index);
            buttonLoad.classList.remove("is-active");
          } else {
            buttonLoad.textContent = "No items to load";
            buttonLoad.setAttribute("disabled", "disabled");
          }
        });
      });
    }
  });
};

export default LoadMore;
