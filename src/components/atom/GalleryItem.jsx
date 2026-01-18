const GalleryItem = ({ img, onClick }) => (
  <img 
    src={img.url} 
    className="gallery-thumbnail" 
    onClick={() => onClick(img)}
    alt={img.title} 
  />
);

export default GalleryItem;