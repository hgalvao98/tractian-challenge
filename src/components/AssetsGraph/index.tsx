import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import "./styles.scss";

export const AssetsGraph = () => {
  const options = {
    chart: {
      marginRight: 100,
      type: "line",
      backgroundColor: "rgba(0,0,0,0)",
    },
    title: {
      text: "Asset Status",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: null,
      },
      type: "category",
      categories: [
        "In Operation",
        "Planned Stop",
        "In Alert",
        "In Downtime",
        "Unplanned Stop",
      ],
    },
    series: [
      {
        name: "Motor H13D-1",
        data: [
          [new Date("2022-12-01T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-08T00:00:00.000Z").getTime(), 3],
          [new Date("2022-12-15T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-22T00:00:00.000Z").getTime(), 2],
          [new Date("2022-12-29T00:00:00.000Z").getTime(), 4],
        ],
      },
      {
        name: "Motor H12D-1",
        data: [
          [new Date("2022-12-01T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-08T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-15T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-22T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-29T00:00:00.000Z").getTime(), 0],
        ],
      },
      {
        name: "Motor H12D-3",
        data: [
          [new Date("2022-12-01T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-08T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-15T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-22T00:00:00.000Z").getTime(), 2],
          [new Date("2022-12-29T00:00:00.000Z").getTime(), 0],
        ],
      },
      {
        name: "Motor H12D-2",
        data: [
          [new Date("2022-12-01T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-08T00:00:00.000Z").getTime(), 1],
          [new Date("2022-12-15T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-22T00:00:00.000Z").getTime(), 1],
          [new Date("2022-12-29T00:00:00.000Z").getTime(), 0],
        ],
      },
      {
        name: "Fan D21",
        data: [
          [new Date("2022-12-01T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-08T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-15T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-22T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-29T00:00:00.000Z").getTime(), 0],
        ],
      },
      {
        name: "Fan D22",
        data: [
          [new Date("2022-12-01T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-08T00:00:00.000Z").getTime(), 0],
          [new Date("2022-12-15T00:00:00.000Z").getTime(), 1],
          [new Date("2022-12-22T00:00:00.000Z").getTime(), 1],
          [new Date("2022-12-29T00:00:00.000Z").getTime(), 0],
        ],
      },
    ],
  };

  return (
    <div className="asset-graph">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
