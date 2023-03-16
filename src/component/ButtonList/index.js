import './index.css'

const ButtonList = props => {
  const {eachBtn, onChangeCategory, activeBtn} = props
  const {displayText, tabId} = eachBtn
  const btnStyle = activeBtn ? 'fruits-btn-display' : 'fruits-btn'

  const onCategoryChange = () => onChangeCategory(tabId)
  return (
    <li className="button-list">
      <button type="button" className={btnStyle} onClick={onCategoryChange}>
        {displayText}
      </button>
    </li>
  )
}

export default ButtonList
