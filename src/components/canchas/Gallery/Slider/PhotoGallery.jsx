import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CustomGallery from "../NavBar/CustomGallery"; // Importar el componente CustomGallery
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = ({ isGalleryOpen, setIsGalleryOpen, galleryImages }) => {
  const [isCustomGalleryOpen, setIsCustomGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Desactiva el scroll del fondo cuando la galería esté abierta
  useEffect(() => {
    if (isGalleryOpen || isCustomGalleryOpen) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = ""; // Restaura el scroll
    }
    return () => {
      document.body.style.overflow = ""; // Limpieza al desmontar
    };
  }, [isGalleryOpen, isCustomGalleryOpen]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsCustomGalleryOpen(true); // Abrir CustomGallery
  };

  if (!isGalleryOpen && !isCustomGalleryOpen) return null;

  return (
    <>
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center flex-col overflow-y-auto">
          {/* Botón de cierre (oculto cuando se abre CustomGallery) */}
          {!isCustomGalleryOpen && (
            <button
              className="absolute top-4 right-4 text-white border border-neutral-700 hover:bg-red-500 p-3 rounded-full z-[10000]"
              onClick={() => setIsGalleryOpen(false)}
            >
              <CloseIcon sx={{ color: "white" }} />
            </button>
          )}

          {/* Contenedor de imágenes */}
          <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-full">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer ${
                  index % 4 === 0 || index % 4 === 3 ? "col-span-2" : "col-span-1"
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image.original}
                  alt={`Gallery photo ${index}`}
                  style={{ maxHeight: '80vh', width: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Renderizar CustomGallery cuando esté abierto */}
      {isCustomGalleryOpen && (
        <CustomGallery
          isGalleryOpen={isCustomGalleryOpen}
          setPhotoGalleryOpen={setIsGalleryOpen} // Reabrir PhotoGallery
          setIsGalleryOpen={(state) => {
            setIsCustomGalleryOpen(state);
            setIsGalleryOpen(state);
          }}
          galleryImages={galleryImages}
          initialIndex={selectedImageIndex}
        />
      )}
    </>
  );
};

export default PhotoGallery;
