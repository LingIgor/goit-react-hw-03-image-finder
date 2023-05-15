import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallerys } from './ImageGallery.styled';
// import { Modal } from 'components/Modal/Modal';


export const ImageGallery =({images}) => {
  
  return (
    <ImageGallerys className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
          key={image.id}
        />
       
      ))}
    </ImageGallerys>
  );
  
}
