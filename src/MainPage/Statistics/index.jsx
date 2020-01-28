import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Statistics extends Component {
  render() {
    const schoolData = {
      labels: [
        "Thomas Jefferson High School for Science and Technology",
        "Wilbert Tucker Woodson High School",
        "Ocean Lakes High School",
        "Westfield High School",
        "Bishop Ireton High School",
        "Chantilly High School",
        "Wheaton High School",
        "Montgomery Blair High School",
        "Rock Ridge High School",
        "James Madison High School",
        "Poolesville High School",
        "West Springfield High School",
        "Oakton High School",
        "Academies of Loudoun",
        "Edison High School",
        "Forest Park High School",
        "Thomas S. Wootton High School",
        "West Potomac High School",
        "Briar Woods High School",
        "Centreville High School",
        "Herndon High School",
        "Other"
      ],
      datasets: [
        {
          data: [
            530,
            35,
            18,
            10,
            9,
            7,
            6,
            5,
            5,
            4,
            4,
            4,
            3,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            23
          ]
        }
      ]
    };

    const genderData = {
      labels: ["Male", "Female", "Other"],
      datasets: [
        {
          data: [445, 238, 4],
          backgroundColor: ["#00caab", "#a000fd", "#bbbbbb"]
        }
      ]
    };

    const ethnicityData = {
      labels: [
        "Asian or Asian Indian",
        "Caucasian",
        "Black or African-American",
        "Hispanic, Latino, or Spanish",
        "Other"
      ],
      datasets: [
        {
          data: [524, 92, 18, 15, 38],
          backgroundColor: [
            "#ff0000",
            "#73a9ff",
            "#00ff00",
            "#ffaa00",
            "#8e5544"
          ]
        }
      ]
    };

    const graduationData = {
      labels: ["2022", "2021", "2020", "2019"],
      datasets: [
        {
          data: [106, 197, 161, 125]
        }
      ]
    };

    return (
      <>
        <a className="anchor" id="demographics"></a>
        <section id="demographics">
          <div className="container">
            <div className="animation-container vertical top right extra-right extra-height">
              <div className="animated"></div>
            </div>
            <h1 className="section-title">Demographics</h1>
            <div>
              <Pie data={schoolData} />
            </div>
            <div>
              <Pie data={genderData} />
            </div>
            <div>
              <Pie data={ethnicityData} />
            </div>
            <div>
              <Pie data={graduationData} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Statistics;
