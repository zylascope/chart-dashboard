import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import AChart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  sliceIsVisible,
  ciambellachartplugin,
  ciambellaChartOptions,
  ciambellaChartData,
  legendClick,
} from "./ciambella-chart-plugin.js";
import "./styles.css";
import { bgcolor } from "@mui/system";
import $ from "jquery";
import { DinnerDining } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://strive2thrive.earth/">
        Strive2Thrive.Earth
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  //should be a function here to load db data into a js var call chartdata that can be used in the chart component

  // Register the plugin to all charts:
  //Chart.register(ciambellachartplugin);           //don't need this anymore, the plugin is registered by putting the plugin object into the react doughnut component (chart.js 3.6)

  var legendItemsHTML = "";
  /* for(var i=0; i<ciambellaChartData.datasets[0].alloc.length; i++) 
       {
        legendItemsHTML += '<div class="legendItem"><div class="legendColor" style="background-color:' + ciambellaChartData.datasets[0].backgroundColor[i] + '"></div><div class="legendLabel">' + ciambellaChartData.labels[i] + '</div></div>';
      } */

  var bg = "red;";

  $(function () {
    console.log("load event");
    LegendBox(); //it runs everytime the menu icon is clicked! Why
  });

  function toggleTopic(itemNum) {
    console.log("toggleTopic: " + itemNum);
    //meta = chart.getDatasetMeta(0).data[itemNum];
    //var meta = Chart.getDatasetMeta(0).data[itemNum];
    var meta = Chart.getDatasetMeta(0).data[itemNum];

    // toggle visibility of index if exists
    if (meta) {
      meta.hidden = !meta.hidden;
    }

    var labelPlusNumber = "#label" + itemNum;
    //var labelPlusNumber="#label";

    //toggle the value of the boolean array sliceIsVisible[sliceNumber]...
    if (sliceIsVisible[itemNum] == false) {
      sliceIsVisible[itemNum] = true;
      $(labelPlusNumber).css("text-decoration", "none");
      //toggle strikethrough on span id label1, label2, label3, etc...
      //$(labelPlusNumber).removeClass(".strikeLabel");
    } else {
      sliceIsVisible[itemNum] = false;
      $(labelPlusNumber).css("text-decoration", "line-through");
      //toggle strikethrough on span id label1, label2, label3, etc...
      //$(labelPlusNumber).addClass(".strikeLabel");
    }

    Chart.update();
    console.log("topic clicked:" + itemNum);
  }

  function LegendBox() {
    $("#legendBox").html("");
    $("#legendBox").append("<table class='legendTable'>");
    for (var i = 0; i < ciambellaChartData.datasets[0].alloc.length; i++) {
      $("#legendBox").append(
        "<tr><td style='height: 40px;' valign='middle'><button onclick='toggleTopic(" +
          i +
          ");' style='background: " +
          ciambellaChartData.datasets[0].backgroundColor[i] +
          "; width: 45px; height: 30px; border: 0; margin-bottom: 0px;'></button></td><td style='padding-left: 10px;' valign='middle'><span id='label" +
          i +
          "'  onclick='toggleTopic(" +
          i +
          ");'>" +
          ciambellaChartData.datasets[0].topicId[i] +
          " &nbsp; " +
          ciambellaChartData.labels[i] +
          "</span></td></tr>"
      );
    }
    $("#legendBox").append("</table>");

    /*         var r;
        r="<table class='legendTable'>";
        for(var i=0; i<ciambellaChartData.datasets[0].alloc.length; i++) 
        {
         r+="<tr><td style='height: 40px;' valign='middle'><button onclick='toggleTopic(" + i + ");' style='background: "+ciambellaChartData.datasets[0].backgroundColor[i]+"; width: 45px; height: 30px; border: 0; margin-bottom: 0px;'></button></td><td style='padding-left: 10px;' valign='middle'><span id='label"+i+"'  onclick='toggleTopic(" + i + ");'>"+ ciambellaChartData.datasets[0].topicId[i] +" &nbsp; "+ ciambellaChartData.labels[i]+"</span></td></tr>";
        }
        r+="</table>"; */

    /* return (r); */
    return null;
  }

  function TopicsList() {
    //couldn't get this way to work
    var i = 0;

    return (
      //make unordered list of topics with no bullet point
      <div style={{ listStyleType: "none" }}>
        {ciambellaChartData.labels.map((dataKey) => (
          <div>
            {/* <span style={{bgcolor: "red", height: "50px"}}> &nbsp; X &nbsp;</span> */}
            <span
              className="ColorBox"
              style={{ backgroundColor: "red" }}
              onClick={toggleTopic[i]}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            &nbsp;
            {ciambellaChartData.datasets[0].topicId[i]} &nbsp;
            {/* {ciambellaChartData.datasets[0].backgroundColor[i]} */} &nbsp;
            {ciambellaChartData.labels[i++]}
          </div>
        ))}
      </div>
    );
  }

  function LegendTable() {
    //couldn't get this way to work
    var i = 0;
    var xx = "#00f";
    //xx[1]="#faa";
    return (
      <div>
        <table>
          <tr>
            <th>Topic</th>
            <th>Color</th>
          </tr>
          {ciambellaChartData.labels.map((dataKey) => (
            <tr>
              {/* cant get it to use ciambellaChartData.datasets[0].backgroundColor[i] for background of table cell */}
              <td>{ciambellaChartData.datasets[0].topicId[i]}</td>
              <td>{ciambellaChartData.datasets[0].backgroundColor[i++]}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }

  //{{ciambellaChartData.datasets[0].backgroundColor[i]}}

  var handleClick = (e) => {
    console.log("custom Legend Clicked: " + e.target.style.backgroundColor);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            THRIVE Platform - V3.1
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={7}>
                {/*  <Grid item xs={12} md={12} lg={12}> */}

                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 660,
                  }}
                >
                  {/* sample data for doughnut chart.js */}
                  <Doughnut
                    id="doughnutChart"
                    data={ciambellaChartData}
                    options={ciambellaChartOptions}
                    plugins={[ciambellachartplugin]}
                  />
                  {/*   <div id="legend" />   */}
                </Paper>
              </Grid>

              {/* SPI Score and Rank */}
              <Grid item xs={12} md={4} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 660,
                  }}
                >
                  {/*  {legendItemsHTML} */}

                  {/* <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >


                 </Typography> */}

                  <Typography id="legendTitle" component="h1">
                    Classification:{" "}
                    {ciambellaChartData.datasets[0].classification}
                  </Typography>

                  <Typography
                    id="legendBox"
                    component="h1"
                    variant="body2"
                    /* noWrap */
                    color="inherit"
                    sx={{ flexGrow: 1 }}
                    overflow="auto"
                  >
                    {/* <LegendBox /> */}

                    {/* <LegendTable /> */}

                    {/* <TopicsList /> */}
                  </Typography>
                </Paper>
              </Grid>

              {/* SPI Score and Rank */}
              <Grid item xs={12} md={4} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>

              {/* Material Topics Table */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
