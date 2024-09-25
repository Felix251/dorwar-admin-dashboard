/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/ivancik.jpg";

function WorkWithTheRockets() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${ivancik})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              Social network
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="white">
            Plateforme de réseautage professionnel qui révolutionne la manière dont les individus et les entreprises interagissent dans le monde professionnel Senegalais. Conçue pour favoriser les connexions significatives, notre reseau permet aux utilisateurs de créer un profil professionnel enrichi, de partager leurs expériences, et de se connecter avec des collègues, des partenaires et des recruteurs.
            </SoftTypography>
          </SoftBox>
          <SoftTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Connect
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
