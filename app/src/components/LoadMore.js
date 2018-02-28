import GetValues from './GetValues';

const LoadMore = () => {
  const dataValues = GetValues('https://www.mocky.io/v2/5a6bc16631000078341b8b77');

  const buttonLoad = document.querySelector('.button--more');
  const listWrapper = document.querySelector('.posts-list');

  const createLoadedItems = (infos, index) => {
    const { comments, upvotes, category } = infos;
    const { author, title, url } = infos.meta;

    const itemLI = document.createElement('LI');

    itemLI.setAttribute('class', 'posts-list__item');
    itemLI.setAttribute('data-id', `${index}`);

    const markup = `
      <div class="post-popularity">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/svg/icons.svg#arrow"></use>
        </svg>
        <span>${upvotes}</span>
      </div>
      <div class="post-content">
        <h6>${url}</h6>
        <h2>${title}</h2>
        <div class="post-content__elements">
        <div class="post-content__elements__tags">
          <span data-tag="${category}">Product Desing</span>
        </div>
        <div class="post-content__elements__info">
          <span class="info-author">${author}</span>
          <span class="info-date">43 minutes ago</span>
          <span class="info-comments">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/svg/icons.svg#chat"></use>
            </svg>${comments} comments</span>
            <span class="info-edit">Edit</span>
          </div>
        </div>
      </div>
    `;

    itemLI.innerHTML = markup;

    listWrapper.appendChild(itemLI);

    listWrapper.classList.add('is-active');
    buttonLoad.classList.remove('is-active');
  };

  buttonLoad.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.posts-list__item');

    buttonLoad.classList.add('is-active');

    if (listWrapper.childNodes.length <= 5) {
      dataValues.then((response) => {
        const items = response.links;

        items.forEach((item, index) => {
          const currentListItem = listItems[index];

          if (currentListItem === undefined) {
            createLoadedItems(item);
          } else {
            buttonLoad.textContent = 'No items to load';
            buttonLoad.setAttribute('disabled', 'disabled');
          }
        });
      });
    }
  });
};

export default LoadMore;
