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

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "Dakar",
      progress: { content: "2M", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "Thies",
      progress: { content: "400k", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "Louga",
      progress: { content: "235k", percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "Tamba",
      progress: { content: "120k", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
