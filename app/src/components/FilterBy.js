import { orderUpVotes, orderComments, orderDate } from '../utils'
import CreateFilteredElement from './CreateFilteredElement'
import GetValues from './GetValues'

const FilterBy = () => {
  const filterItems = document.querySelectorAll('.menu-dropdown__list__item')
  const dataValues = GetValues(
    'https://www.mocky.io/v2/5a6bc16631000078341b8b77'
  )

  const filters = element => {
    const postList = document.querySelectorAll('.posts-list__item')
    for (let i = 0; i < postList.length; i += 1) {
      postList[i].remove()
    }

    if (element.dataset.type === 'popularity') {
      dataValues.then(response => {
        CreateFilteredElement(response.links.sort(orderUpVotes))
      })
    } else if (element.dataset.type === 'date') {
      dataValues.then(response => {
        CreateFilteredElement(response.links.sort(orderDate))
      })
    } else if (element.dataset.type === 'comments') {
      dataValues.then(response => {
        CreateFilteredElement(response.links.sort(orderComments))
      })
    }
  }

  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      filters(item)
    })
  })
}

export default FilterBy
