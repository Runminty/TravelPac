  $("#chartDiv").JSC({
    mapping: {
      referenceLayers: "World",
      projection: false
    },
    type: "map",
    height: 330,
    legendVisible: false,
    chartArea: {
      fill: "#FFFFFF"
    },
    defaultPointOutlineWidth: 0,
    series: [
      {
        defaultPoint: {
          color: "rgba(245,106,13,0.97)"
        },
        map: "Continent:North America"
      },
      {
        defaultPoint: {
          color: "rgba(254,210,29,0.97)"
        },
        map: "Continent:South America"
      },
      {
        defaultPoint: {
          color: "rgba(126,177,27,0.97)"
        },
        map: "Continent:Europe"
      },
      {
        defaultPoint: {
          color: "rgba(61,55,108,0.97)"
        },
        map: "Continent:Asia"
      },
      {
        defaultPoint: {
          color: "rgba(50,96,182,0.97)"
        },
        map: "Continent:Africa"
      },
      {
        defaultPoint: {
          color: "rgba(52,130,114,0.97)"
        },
        map: "Continent:Oceania"
      }
    ],
    toolbarVisible: false
  });
  