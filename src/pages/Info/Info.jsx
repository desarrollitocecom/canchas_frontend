import React, { useState } from "react";
import { Container, Rating, IconButton } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StoreIcon from "@mui/icons-material/Store";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import WcIcon from "@mui/icons-material/Wc";
import Header from "../../components/general/header/Header";
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import Mapa from "../../components/canchas/Mapa/Mapa";
import "react-image-gallery/styles/css/image-gallery.css";
import PhotoGallery from "../../components/canchas/Gallery/Slider/PhotoGallery";
import { Marker, Popup } from "react-leaflet";

const CanchaPage = () => {
  const urls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFj9nfuwo1SbjNLD_AL0xKwQAY-cmgVgcSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFj9nfuwo1SbjNLD_AL0xKwQAY-cmgVgcSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFj9nfuwo1SbjNLD_AL0xKwQAY-cmgVgcSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFj9nfuwo1SbjNLD_AL0xKwQAY-cmgVgcSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFj9nfuwo1SbjNLD_AL0xKwQAY-cmgVgcSA&s",
  ];
  
  // Convertir el array de URLs en el formato que necesita galleryImages
  const galleryImages = urls.map((url) => ({ original: url }));
  
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);


  const informacion = [
    { label: "Cantidad de canchas", value: "3" },
    { label: "Número de jugadores", value: "6v6, 7v7" },
  ];

  const servicios = [
    { label: "Polideportivo", icon: <SportsSoccerIcon sx={{ color: "black" }} /> },
    { label: "Chaleco", icon: <StoreIcon sx={{ color: "black" }} /> },
    { label: "Quiosco", icon: <LocalConvenienceStoreIcon sx={{ color: "black" }} /> },
    { label: "Servicios Higiénicos", icon: <WcIcon sx={{ color: "black" }} /> },
  ];

  const horarios = [
    "7:00 - 8:00",
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
  ];

  // Marcadores del mapa
  const markers = [[-11.989988, -77.007206]];

  return (
    <div className="items-center justify-center w-100% min-h-screen bg-cover bg-center ">
      <Header />
      <div className="w-full shadow-lg rounded-lg p-6 mb-16 z-10">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-6 ">
          <Container maxWidth="md" className=" rounded-lg p-6 mb-6">
            <div className="grid grid-cols-4 grid-rows-2 gap-2 collage-container relative">
              <div
                className="col-span-2 row-span-2 overflow-hidden rounded-tl-lg rounded-bl-lg cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={galleryImages[0].original}
                  alt="Principal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={galleryImages[1].original}
                  alt="Secundaria 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div
                className="overflow-hidden rounded-tr-lg cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={galleryImages[2].original}
                  alt="Secundaria 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div
                className="overflow-hidden  cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={galleryImages[3].original}
                  alt="Secundaria 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div
                className="overflow-hidden rounded-br-lg cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={galleryImages[4].original}
                  alt="Secundaria 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              {/* Botón posicionado dentro del contenedor */}
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 rounded-lg shadow-lg hover:bg-green-700"
                onClick={() => setIsGalleryOpen(true)}
              >
                <CollectionsRoundedIcon sx={{ color: "white" }} />
                Mostrar fotos
              </button>
              <PhotoGallery
                isGalleryOpen={isGalleryOpen}
                setIsGalleryOpen={setIsGalleryOpen}
                galleryImages={galleryImages}
              />
            </div>
          </Container>


          <h1 className="text-2xl font-bold text-center">CAMPO DEPORTIVO JUAN MOSCOSO</h1>
          <p className="text-gray-500 text-center">
            Av. N. Martínez, altura del paradero la curva Mariátegui
          </p>
          <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {/* Información */}
          <div className="col-span-2">
            <Container maxWidth="md" className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 ">
              <div className="flex items-center gap-2 mb-3">
                <ContentPasteOutlinedIcon sx={{ color: "white" }} />
                <h2 className="text-lg font-semibold">Información de la cancha</h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {informacion.map((info, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-600">{info.label}</h3>
                    <p className="text-gray-800">{info.value}</p>
                  </div>
                ))}
              </div>
            </Container>

            {/* Servicios */}
            <Container maxWidth="md" className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 mt-2 ">
              <div className="flex items-center gap-2">
                <SportsSoccerIcon sx={{ color: "white" }} />
                <h2 className="text-lg font-semibold">Servicios del lugar</h2>
              </div>
              <ul className="grid grid-cols-2 gap-3 mt-3">
                {servicios.map((servicio, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg shadow"
                  >
                    {servicio.icon}
                    <span className="text-gray-800 text-sm">{servicio.label}</span>
                  </li>
                ))}
              </ul>
            </Container>
          </div>

          {/* Horarios */}
          <div className="col-span-2">
            <Container maxWidth="md" className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 ">
              <div className="flex items-center gap-2">
                <AccessTimeIcon sx={{ color: "white" }} />
                <h2 className="text-lg font-semibold">Horarios Disponibles</h2>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-3">
                {horarios.map((horario) => (
                  <button
                    key={horario}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 w-full font-semibold"
                  >
                    {horario}
                  </button>
                ))}
              </div>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg w-full">
                Reservar
              </button>
              <p className="mt-2 text-gray-500 text-center text-sm">Atención 07:00 - 22:00</p>
            </Container>
          </div>

          {/* Mapa */}
          <div className="col-span-2">
            <Container maxWidth="md" className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 ">
              <div className="flex items-center gap-2">
                <MapOutlinedIcon sx={{ color: "white" }} />
                <h2 className="grid text-lg font-semibold">Ubicación</h2>
              </div>
              <div className="w-full h-96 bg-gray-200 mt-2">
                <Mapa position={[-11.989988, -77.007206]} zoom={17} scrollWheelZoom={false} >
                  {markers.map((marker, index) => (
                    <Marker key={index} position={marker}>
                      <Popup>
                        Ubicación #{index + 1}: Latitud {marker[0]}, Longitud {marker[1]}
                      </Popup>
                    </Marker>
                  ))}
                </Mapa>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanchaPage;
