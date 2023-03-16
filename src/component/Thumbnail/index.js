import './index.css'

const Thumbnail = props => {
  const {thumbnails, onChangethumbId} = props
  const {thumbnailUrl, id} = thumbnails

  const onPassingThumbId = () => onChangethumbId(id)

  return (
    <li className="thumbnail-list">
      <button className="thumb-btn" type="button" onClick={onPassingThumbId}>
        <div className="thumbnail-img-container">
          <img className="thumb-img" src={thumbnailUrl} alt="thumbnail" />
        </div>
      </button>
    </li>
  )
}

export default Thumbnail
