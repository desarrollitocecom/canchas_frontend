import React from "react";
import {
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";

// Función para formatear la fecha
const formatDate = (fecha) => {
  const date = new Date(fecha);
  const day = date.getDate();
  const month = date.toLocaleString("es-PE", { month: "short" }).toUpperCase();
  return { day, month };
};

const TablaHistorial = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ position: "relative", width: "100%", mx: "auto", pt: 4 }}>
      {data.length > 0 ? (
        <Grid container spacing={3}>
          {data.map((item, index) => {
            const { day, month } = formatDate(item.fecha);
            return (
              <Grid item xs={12} key={item.id}>
                <Box display="flex" alignItems="flex-start"  sx={{ position: "relative" }}>
                  <div>
                    {index < data.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "22px",
                          top: 0,
                          bottom: 0,
                          width: "2px",
                          height: {
                            xs: "123%",
                            sm: "142%",
                            md: "143%",
                          },
                          backgroundColor: "#e0e0e0",
                        }}
                      />
                    )}

                    <Box
                      sx={{
                        position: "absolute",
                        left: "17px",
                        top: "30px",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "50%",
                        zIndex: 1,
                      }}
                    />
                  </div>

                  <Card
                    elevation={3}
                    sx={{
                      ml: 6,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: { sm: "row", xs: "column" },
                      width: "100%",
                      borderRadius: 3,
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        minWidth: "80px",
                        p: 2,
                        ml: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ lineHeight: 1 }}
                      >
                        {day}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ textTransform: "uppercase" }}
                      >
                        {month}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <Typography
                        fontWeight="bold"
                        sx={{
                          lineHeight: 1,
                          textAlign: "center",
                        }}
                      >
                        {item.horario}
                      </Typography>
                    </Box>
                    <Divider
                      orientation={isSmallScreen ? "horizontal" : "vertical"}
                      flexItem
                      sx={{ mx: 2 }}
                    />
                    <CardContent sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {item.cancha}
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Box
                        display="flex"
                        alignItems={{ xs: "center", md: "flex-start" }}
                        justifyContent={{ xs: "center", md: "space-between" }}
                      >
                        <Typography color="textSecondary" variant="body2">
                          Estado de Pago:
                        </Typography>
                        {item.estadoPago === "Pagado" && (
                          <Chip icon={<PaidIcon />} label="Pagado" color="success" />
                        )}
                        {item.estadoPago === "Pendiente" && (
                          <Chip
                            icon={<HourglassEmptyIcon />}
                            label="Pendiente"
                            color="warning"
                          />
                        )}
                        {item.estadoPago === "Cancelado" && (
                          <Chip
                            icon={<CancelIcon />}
                            label="Cancelado"
                            color="error"
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Typography align="center" color="textSecondary">
          No se encontraron registros.
        </Typography>
      )}
    </Box>
  );
};

export default TablaHistorial;
