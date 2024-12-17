import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Horarios = () => {
  const [selectedSport, setSelectedSport] = useState('futbol');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Lunes 21/10');
  const [selectedStartIndex, setSelectedStartIndex] = useState(null);
  const [hours, setHours] = useState(1);
  const [selectedRange, setSelectedRange] = useState([]);
  const [error, setError] = useState('');

  const deportes = [
    { value: 'futbol', icon: <SportsSoccerIcon />, label: 'Fútbol' },
    { value: 'voley', icon: <SportsVolleyballIcon />, label: 'Voley' },
    { value: 'baloncesto', icon: <SportsBasketballIcon />, label: 'Baloncesto' },
  ];

  const fechas = ['Lunes 21/10', 'Martes 22/10', 'Miércoles 23/10'];

  const timeSlots = [
    '7:00 - 8:00', '8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00',
    '17:00 - 18:00'
  ];

  const calculateTotal = () => (45 * hours).toFixed(2);

  useEffect(() => {
    if (selectedStartIndex !== null) {
      const endIndex = selectedStartIndex + hours;
      if (endIndex > timeSlots.length) {
        setError('No hay suficientes horas disponibles en este horario');
        setSelectedRange([]);
      } else {
        setError('');
        const newRange = timeSlots.slice(selectedStartIndex, endIndex);
        setSelectedRange(newRange);
      }
    }
  }, [hours, selectedStartIndex]);

  const handleTimeSlotClick = (index) => {
    const endIndex = index + hours;
    if (endIndex > timeSlots.length) {
      setError('No hay suficientes horas disponibles en este horario');
      return;
    }
    setError('');
    setSelectedStartIndex(index);
    const newRange = timeSlots.slice(index, endIndex);
    setSelectedRange(newRange);
  };

  const adjustHours = (increment) => {
    const newHours = Math.max(1, Math.min(5, hours + increment));
    setHours(newHours);
  };

  const getSelectedSportIcon = () => deportes.find((d) => d.value === selectedSport)?.icon;

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="p-4 space-y-6 h-full overflow-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Sport Selector */}
        <div className="relative w-full sm:w-auto">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onKeyDown={(e) => handleKeyPress(e, () => setIsDropdownOpen(!isDropdownOpen))}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            {getSelectedSportIcon()}
            <span>{deportes.find((d) => d.value === selectedSport)?.label}</span>
            <ExpandMoreIcon className="w-4 h-4" />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700">
              {deportes.map((deporte) => (
                <button
                  key={deporte.value}
                  className={`w-full flex items-center gap-2 p-3 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-black dark:text-white
                    ${selectedSport === deporte.value ? 'bg-green-100 dark:bg-green-900/30' : ''}`}
                  onClick={() => {
                    setSelectedSport(deporte.value);
                    setIsDropdownOpen(false);
                  }}
                  aria-selected={selectedSport === deporte.value}
                >
                  {deporte.icon}
                  {deporte.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 disabled:opacity-50 text-gray-600 dark:text-gray-300"
            onClick={() => setSelectedDate(fechas[Math.max(0, fechas.indexOf(selectedDate) - 1)])}
            disabled={fechas.indexOf(selectedDate) === 0}
            aria-label="Día anterior"
          >
            <ArrowBackIosIcon className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-neutral-800 rounded-lg">
            <CalendarMonthIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="font-medium dark:text-white">{selectedDate}</span>
          </div>

          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 disabled:opacity-50 text-gray-600 dark:text-gray-300"
            onClick={() => setSelectedDate(fechas[Math.min(fechas.length - 1, fechas.indexOf(selectedDate) + 1)])}
            disabled={fechas.indexOf(selectedDate) === fechas.length - 1}
            aria-label="Día siguiente"
          >
            <ArrowForwardIosIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Time Slots Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 p-3 rounded-lg border dark:border-neutral-700 transition-colors
              ${selectedRange.includes(slot) 
                ? 'bg-green-500 text-white border-green-500 dark:border-green-600' 
                : 'hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500 dark:text-white'}`}
            onClick={() => handleTimeSlotClick(index)}
            disabled={index + hours > timeSlots.length}
            aria-selected={selectedRange.includes(slot)}
            aria-label={`Seleccionar horario ${slot}`}
          >
            <AccessTimeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">{slot}</span>
          </button>
        ))}
      </div>

      {/* Hours and Total Section */}
      <div className="max-w-sm mx-auto space-y-6">
        <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border dark:border-neutral-700 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium dark:text-white">Cantidad de horas:</span>
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-full border dark:border-neutral-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 dark:text-white"
                onClick={() => adjustHours(-1)}
                disabled={hours === 1}
                aria-label="Reducir horas"
              >
                -
              </button>
              <span className="w-8 text-center font-medium dark:text-white">{hours}</span>
              <button
                className="w-8 h-8 rounded-full border dark:border-neutral-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 dark:text-white"
                onClick={() => adjustHours(1)}
                disabled={hours === 5}
                aria-label="Aumentar horas"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t dark:border-neutral-700">
            <span className="font-medium dark:text-white">Total:</span>
            <span className="text-lg font-semibold dark:text-white">S/. {calculateTotal()}</span>
          </div>
        </div>

        <button
          className="w-full bg-green-500 text-white p-3 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selectedRange.length === 0}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Horarios;