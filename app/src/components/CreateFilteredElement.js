import { markupPost } from '../utils'

const CreateFilteredElement = infos => {
  const itemsList = Object.values(infos)

  const listWrapper = document.querySelector('.posts-list')
  const userInfo = document.querySelector('.user-info__notify')

  itemsList.forEach((item, index) => {
    markupPost(item, index)
    userInfo.textContent = listWrapper.childNodes.length
  })
}

export default CreateFilteredElement
