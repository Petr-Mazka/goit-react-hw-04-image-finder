import PropTypes from "prop-types";
import css from "./ImageGalleryItems.module.css";

const ImageGalleryItems = ({ picture, tags, largeImage, onImage }) => {
    return (
        <li className={css.galleryItem} >
        <img
        className={css.galleryImage}
        src={picture}
        alt={tags}
        onClick={() => onImage(largeImage)}
        />
        </li>
    );
}

ImageGalleryItems.propTypes = {
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    onImage: PropTypes.func.isRequired,
};

export default ImageGalleryItems;