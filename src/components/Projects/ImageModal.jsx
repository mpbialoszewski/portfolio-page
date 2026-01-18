const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-image-wrapper">
          <img src={image.url} alt={image.title} />
        </div>

        <div className="modal-text-wrapper">
          <h2>{image.title}</h2>
          <p className="author-name"><strong>Stack:</strong> {image.author}</p>
          <div className="history-content">
            <p>{image.history}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;