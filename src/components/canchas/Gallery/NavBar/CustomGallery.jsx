import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-image-gallery/styles/css/image-gallery.css";

const CustomGallery = ({ isGalleryOpen, setIsGalleryOpen, setPhotoGalleryOpen, galleryImages, initialIndex }) => {
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Desactiva el scroll del fondo cuando la galería esté abierta
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = ""; // Restaura el scroll
    }
    return () => {
      document.body.style.overflow = ""; // Limpieza al desmontar
    };
  }, [isGalleryOpen]);

  // Mueve el slide a la imagen inicial seleccionada
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.slideToIndex(initialIndex);
    }
  }, [initialIndex]);

  // Actualiza el índice actual cuando cambia la imagen
  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!isGalleryOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center">
      {/* Contador de imágenes */}
      <div className="absolute top-4 text-white text-center w-full text-lg font-semibold z-[10000]">
        {currentIndex + 1} / {galleryImages.length}
      </div>

      {/* Botón de navegación izquierdo */}
      {currentIndex > 0 && (
        <button
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-[10000]"
          onClick={() => galleryRef.current.slideToIndex(currentIndex - 1)}
        >
          <ArrowBackIosIcon />
        </button>
      )}

      {/* Galería de imágenes */}
      <div className="relative w-full max-w-4xl">
        <ImageGallery
          ref={galleryRef}
          items={galleryImages}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          renderLeftNav={() => null}
          renderRightNav={() => null}
          onSlide={handleSlide}
          startIndex={initialIndex} // Empezar desde la imagen seleccionada
        />
      </div>

      {/* Botón de navegación derecho */}
      {currentIndex < galleryImages.length - 1 && (
        <button
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-[10000]"
          onClick={() => galleryRef.current.slideToIndex(currentIndex + 1)}
        >
          <ArrowForwardIosIcon />
        </button>
      )}

      {/* Botón de cierre */}
      <button
        className="absolute top-4 right-4 text-white border border-neutral-700 hover:bg-red-500 p-3 rounded-full z-[10000]"
        onClick={() => {
          setIsGalleryOpen(false); // Cierra el CustomGallery
          setPhotoGalleryOpen(true); // Vuelve a abrir PhotoGallery
        }}
      >
        <CloseIcon sx={{ color: "white" }} />
      </button>
    </div>
  );
};

export default CustomGallery;
