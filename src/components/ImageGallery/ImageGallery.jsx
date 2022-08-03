import ImageGalleryItems from "./ImageGalleryItems/ImageGalleryItems";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={css.gallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItems
          key={id}
          picture={webformatURL}
          largeImage={largeImageURL}
          tags={tags}
          onImage={onImageClick}
        />
      ))}
    </ul>
    )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
}

export default ImageGallery;