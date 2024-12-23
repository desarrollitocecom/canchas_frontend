import React, { useState } from 'react';
import Header from '../../components/general/header/Header';
import { Card, CardContent, TextField, IconButton, Typography, Box, Tab, Tabs } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TablaHistoraial from '../../components/Table/TablaHistorial'



const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [userData, setUserData] = useState({
        dni: '12345678',
        nombre: 'Diego Jesus',
        apellido: 'Matute Espinoza',
        direccion: 'Av. Principal 123',
        ubigeo: '150132',
        email: 'ejemplo@correo.com',
        celular: '999888777',
        historial: [
            {
                id: 1,
                fecha: '2024-12-16',
                horario: '15:00',
                cancha: 'Cancha de Fútbol 1',
                estadoPago: 'Pagado'
            },
            {
                id: 2,
                fecha: '2024-12-15',
                horario: '16:00',
                cancha: 'Cancha de Fútbol 2',
                estadoPago: 'Pendiente'
            },
            {
                id: 3,
                fecha: '2024-12-14',
                horario: '18:30',
                cancha: 'Cancha de Fútbol 3',
                estadoPago: 'Pagado'
            },
            {
                id: 4,
                fecha: '2024-12-10',
                horario: '19:00',
                cancha: 'Cancha de Vóley 1',
                estadoPago: 'Cancelado'
            },
            {
                id: 5,
                fecha: '2024-12-08',
                horario: '17:00',
                cancha: 'Cancha de Básquet 1',
                estadoPago: 'Pagado'
            },
            {
                id: 6,
                fecha: '2024-12-05',
                horario: '16:30',
                cancha: 'Cancha de Fútbol 1',
                estadoPago: 'Pendiente'
            }

        ]

    });


    return (
        <>
            <Header />
            <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-12">
                <Box className="max-w-6xl mx-auto px-4 pt-6">
                    <Tabs
                        value={tabValue}
                        onChange={(_, newValue) => setTabValue(newValue)}
                        className="mb-6"
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .Mui-selected': {
                                color: '#20AC4B !important'
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#20AC4B'
                            }
                        }}
                    >
                        <Tab label="Información Personal" />
                        <Tab label="Historial" />
                    </Tabs>


                    {/* Tab de Información Personal */}
                    <div className="mb-2">
                        {tabValue === 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg">
                                    <CardContent>
                                        <Box className="flex justify-between items-center mb-4">
                                            <Typography variant="h6">Datos Personales</Typography>
                                            {!isEditing ? (
                                                <IconButton
                                                    onClick={() => setIsEditing(true)}
                                                    size="small"
                                                    className="text-[#20AC4B]"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            ) : (
                                                <Box className="flex gap-2">
                                                    <IconButton
                                                        onClick={() => setIsEditing(false)}
                                                        size="small"
                                                        className="text-[#20AC4B]"
                                                    >
                                                        <SaveIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={() => setIsEditing(false)}
                                                        size="small"
                                                        className="text-red-500"
                                                    >
                                                        <CloseIcon />
                                                    </IconButton>
                                                </Box>
                                            )}
                                        </Box>
                                        <Box className="space-y-4">
                                            {!isEditing ? (
                                                <>
                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <PersonIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">Nombre</Typography>
                                                            <Typography>{userData.nombre}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <PersonIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">Apellido</Typography>
                                                            <Typography>{userData.apellido}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <BadgeIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">DNI</Typography>
                                                            <Typography>{userData.dni}</Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <LocationOnIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">Ubigeo</Typography>
                                                            <Typography>{userData.ubigeo}</Typography>
                                                        </Box>
                                                    </Box>
                                                </>
                                            ) : (
                                                <>
                                                    <TextField
                                                        fullWidth
                                                        label="DNI"
                                                        value={userData.dni}
                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <BadgeIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}

                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Nombre"
                                                        value={userData.nombre}

                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <PersonIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}


                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Apellido"
                                                        value={userData.apellido}
                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <PersonIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}

                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Ubigeo"
                                                        value={userData.ubigeo}
                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <LocationOnIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}

                                                    />
                                                </>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg">
                                    <CardContent>
                                        <Box className="space-y-4">
                                            <Typography variant="h6" className="mb-4">Contacto</Typography>
                                            {!isEditing ? (
                                                <>
                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <HomeIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">Dirección</Typography>
                                                            <Typography>{userData.direccion}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <EmailIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">Correo Electrónico</Typography>
                                                            <Typography>{userData.email}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box className="flex items-center gap-2 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                                                        <PhoneIcon className="text-[#20AC4B]" />
                                                        <Box>
                                                            <Typography variant="caption" className="text-neutral-500">Celular</Typography>
                                                            <Typography>{userData.celular}</Typography>
                                                        </Box>
                                                    </Box>
                                                </>
                                            ) : (
                                                <>
                                                    <TextField
                                                        fullWidth
                                                        label="Dirección"
                                                        value={userData.direccion}
                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <HomeIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}

                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Correo Electrónico"
                                                        value={userData.email}
                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <EmailIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}

                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Celular"
                                                        value={userData.celular}
                                                        slotProps={{
                                                            input: {
                                                                startAdornment: <PhoneIcon className="mr-2 text-[#20AC4B]" />
                                                            }
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {tabValue === 1 && (
                            <div className="grid grid-cols-1 gap-6">
                                <Card className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg">
                                    <CardContent>
                                        <Box className="flex items-center gap-2 mb-4">
                                            <CalendarMonthIcon className="text-[#20AC4B]" />
                                            <Typography variant="h6">Mi Historial</Typography>
                                        </Box>
                                        <Box className="space-y-4">
                                            <TablaHistoraial data={userData.historial} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </Box>
            </main>
        </>
    );
};

export default Profile;