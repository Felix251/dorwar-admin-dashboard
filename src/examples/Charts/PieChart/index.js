import React from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    // Assurez-vous que les données sont bien définies
    const series = (props.chart && props.chart.datasets && props.chart.datasets[0].data) || [];
    const labels = (props.chart && props.chart.labels) || [];
    const backgroundColors = (props.chart.datasets[0].backgroundColor) || ["#FF6384", "#36A2EB", "#FFCE56"];

    this.state = {
      series,
      options: {
        chart: {
          type: "donut",
          width: "100%", // Adapter la largeur à 100%
        },
        labels, // Les labels pour les segments
        colors: backgroundColors, // Couleurs pour chaque segment
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    const { title, description, height } = this.props;

    return (
      <Card>
        <SoftBox p={2}>
          {title && (
            <SoftBox mb={1}>
              <SoftTypography variant="h6">{title}</SoftTypography>
            </SoftBox>
          )}
          {description && (
            <SoftBox mb={2}>
              <SoftTypography component="div" variant="button" fontWeight="regular" color="text">
                {description}
              </SoftTypography>
            </SoftBox>
          )}
          <SoftBox height={height}>
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut" // Vous pouvez aussi utiliser "pie" pour un pie chart simple
              height="100%"  // Adapter la hauteur à 100% du conteneur parent
            />
          </SoftBox>
        </SoftBox>
      </Card>
    );
  }
}




// Setting default values for the props of PieChart
PieChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the PieChart
PieChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PieChart;
