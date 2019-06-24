// Order Up Votes
// - Call method: Array.sort(orderUpVotes);
export const orderUpVotes = function order(a, b) {
  if (a.upvotes < b.upvotes) {
    return 1;
  }
  if (a.upvotes > b.upvotes) {
    return -1;
  }
  return 0;
};

// Order Comments
// - Call method: Array.sort(orderComments);
export const orderComments = function order(a, b) {
  if (a.comments < b.comments) {
    return 1;
  }
  if (a.comments > b.comments) {
    return -1;
  }
  return 0;
};

// Order Date
// - Call method: Array.sort(orderDate);
export const orderDate = function order(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  }
  if (a.created_at > b.created_at) {
    return -1;
  }
  return 0;
};

export const markupPost = (item, index) => {
  const listWrapper = document.querySelector(".posts-list");

  const { comments, upvotes, category } = item;
  const { author, title, url } = item.meta;

  const itemLI = document.createElement("LI");

  itemLI.setAttribute("class", "posts-list__item");
  itemLI.setAttribute("data-id", `${index}`);

  /* eslint-disable */
  const categoryValues = () => {
    if (category === "ux_ui") {
      return "UX Theory";
    } else if (category === "case_study") {
      return "Case Study";
    } else if (category === "product_design") {
      return "Product Design";
    } else if (category === "discussion") {
      return "Opinion";
    }
  };
  /* eslint-enable */

  const markup = `
    <div class="post-popularity" title='Popularity'>
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/svg/icons.svg#arrow"></use>
      </svg><span>${upvotes}</span>
    </div>
    <div class="post-content">
      <h6>${url}</h6>
      <h2>${title}</h2>
      <div class="post-content__elements">
        <div class="post-content__elements__tags">
          <span data-tag="${category}">${categoryValues()}</span>
        </div>
        <div class="post-content__elements__info">
          <span class="info-author">${author}</span>
          <span class="info-date">43 minutes ago</span>
          <span class="info-comments" data-comments="${comments}">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/svg/icons.svg#chat"></use>
            </svg>
            ${comments} comments</span>
            <span class="info-edit">Edit</span>
        </div>
      </div>
    </div>
  `;

  itemLI.innerHTML = markup;
  listWrapper.appendChild(itemLI);
  listWrapper.classList.add("is-active");
};
