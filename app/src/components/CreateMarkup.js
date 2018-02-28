import GetValues from './GetValues';

const CreateMarkup = () => {
  const dataValues = GetValues('https://www.mocky.io/v2/5a6bc16631000078341b8b77');

  const createItem = (infos) => {
    const itemsList = Object.values(infos);

    const listWrapper = document.querySelector('.posts-list');
    const userInfo = document.querySelector('.user-info__notify');

    itemsList.forEach((item, index) => {
      const { comments, upvotes, category } = item;
      const { author, title, url } = item.meta;

      const itemLI = document.createElement('LI');

      itemLI.setAttribute('class', 'posts-list__item');
      itemLI.setAttribute('data-id', `${index}`);

      const markup = `
        <div class="post-popularity">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/svg/icons.svg#arrow"></use>
          </svg><span>${upvotes}</span>
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

      if (listWrapper.childNodes.length < 5) {
        listWrapper.appendChild(itemLI);
        listWrapper.classList.add('is-active');

        userInfo.textContent = listWrapper.childNodes.length;
      }
    });
  };

  dataValues.then((response) => {
    createItem(response.links);
  });
};

export default CreateMarkup;
