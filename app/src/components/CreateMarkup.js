import { markupPost } from '../utils';
import GetValues from './GetValues';

const CreateMarkup = () => {
  const dataValues = GetValues('https://www.mocky.io/v2/5a6bc16631000078341b8b77');

  const createItem = (infos) => {
    const itemsList = Object.values(infos);

    const listWrapper = document.querySelector('.posts-list');
    const userInfo = document.querySelector('.user-info__notify');

    itemsList.forEach((item, index) => {
      if (listWrapper.childNodes.length < 6) {
        markupPost(item, index);
        userInfo.textContent = listWrapper.childNodes.length;
      }
    });
  };

  dataValues.then((response) => {
    createItem(response.links);
  });
};

export default CreateMarkup;
