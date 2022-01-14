<template>
  <div>
    <p class="title">HERE IS YOUR REPORT</p>
    <div id="pdfDom" :style="{height: height + 'px'}">
      <div class="firstPage" :style="{height: height/3 + 'px'}">
        <div>
          <div class="logo">
            <img :src="logo" alt="">
          </div>
          <div class="report-title">
            <p>ANALYSING REPORT</p>
          </div>
        </div>
        <div class="company">
          <div class="company-title">
            <p>OUR GOAL</p>
          </div>
          <div class="goal">
            <div class="goal-left">
              <p>{{ this.pdfPage.goalLeft }}</p>
            </div>
            <div class="goal-right">
              <p>{{ this.pdfPage.goalRight }}</p>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="bulk-analysis">
            <div class="bulk-analysis-intro">
              <p class="analysis-title">BULK ANALYSIS</p>
              <p class="analysis-main">{{ this.pdfPage.bulkAnalysis }}</p>
            </div>
            <div class="chart">
              <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondPage" :style="{height: height/3 + 'px'}">
        <div class="fine-analysis">
          <p class="analysis-title">FINE ANALYSIS</p>
          <ul>
            <li v-for="(item,index) in this.pdfPage.graph.fineAnalysis">
              <div class="fine-analysis-main">
                <p class="fine-analysis-title">{{ item.title }}</p>
                <div class="fine-analysis-text">
                  <p>{{ item.analysis }}</p>
                </div>
                <div class="chart">
                  <div :id="'fineGraph'+index" :style="{width: '100%', height: '100%'}"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button type="primary" @click="getPdf(htmlTitle)">Click here to download your report's pdf file!</button>
  </div>
</template>

<script>
import logo from '../assets/HRlogo.jpeg'

export default {
  name: "PDFDownload",
  data() {
    return {
      htmlTitle: 'HR_Report',
      logo: logo,
      height: 3 * window.innerWidth * 0.9 / 592.28 * 841.89,
      pdfPage: {
        bulkAnalysis: 'Outsourced HR and Payroll services eliminates the need for full-time employees on staff. Over\n' +
            '        our 85 years of combined team experience, we have gained a reputation for delivering innovative\n' +
            '        solutions to support our client’s strategic goals. We support many sectors and industries, and\n' +
            '        we support business at all stages of growth from high-potential start-ups to well established\n' +
            '        companies producing turnover in the millions.',

        graph: {
          data: {},
          fineAnalysis: [],
        },



        goalLeft: 'Outsourced HR and Payroll services eliminates the need for full-time employees on staff. Over\n' +
            '        our 85 years of combined team experience, we have gained a reputation for delivering innovative\n' +
            '        solutions to support our client’s strategic goals. We support many sectors and industries, and\n' +
            '        we support business at all stages of growth from high-potential start-ups to well established\n' +
            '        companies producing turnover in the millions.',
        goalRight: 'Outsourced HR and Payroll services eliminates the need for full-time employees on staff. Over\n' +
            '        our 85 years of combined team experience, we have gained a reputation for delivering innovative\n' +
            '        solutions to support our client’s strategic goals. We support many sectors and industries, and\n' +
            '        we support business at all stages of growth from high-potential start-ups to well established\n' +
            '        companies producing turnover in the millions.',
      }
    }
  },
  mounted() {
    this.graph();
    for (let i = 0; i < this.pdfPage.fineAnalysis.length; i++) {
      this.fineGraph(i)
    }
  },
  methods: {
    graph() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var app = {};
      var option;
      var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
      ];

      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: 'left',
            center: 'center',
            right: 'right'
          }
        },
        verticalAlign: {
          options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
          }
        },
        position: {
          options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };

      app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
          var labelOption = {
            normal: {
              rotate: app.config.rotate,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              position: app.config.position,
              distance: app.config.distance
            }
          };
          myChart.setOption({
            series: [{
              label: labelOption
            }]
          });
        }
      };

      var labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}',
        fontSize: 16,
        rich: {
          name: {}
        }
      };

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color: ['#a4e2a4', '#fdd8a5', '#ee9898'],
        legend: {
          data: ['GREEN', 'AMBER', 'RED'],
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: this.pdfPage.graph.data.xAxis
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '%'
          }
        ],
        series: [
          {
            name: 'GREEN',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: this.pdfPage.graph.data.green
          },
          {
            name: 'AMBER',
            type: 'bar',
            label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: this.pdfPage.graph.data.amber
          },
          {
            name: 'RED',
            type: 'bar',
            label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: this.pdfPage.graph.data.red
          }
        ]
      };
      option && myChart.setOption(option);
    },
    fineGraph(index) {
      let myChart = this.$echarts.init(document.getElementById('fineGraph' + index))
      var option;

      option = {
        tooltip: {
          trigger: 'item'
        },
        color: ['#a4e2a4', '#fdd8a5', '#ee9898'],
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              {value: this.pdfPage.fineAnalysis[index].data[0], name: 'GREEN'},
              {value: this.pdfPage.fineAnalysis[index].data[1], name: 'AMBER'},
              {value: this.pdfPage.fineAnalysis[index].data[2], name: 'RED'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      option && myChart.setOption(option);

    },
    async getData() {
      const {data: res} = await this.$http.get("sendanswercard");
      this.pdfPage.graph = res;
    },
  }
}
</script>
<style scoped>
div {
  text-align: center;
}

.title {
  margin: 2% 0;
  font-size: 50px;
}

button {
  padding: 1%;
  background-color: white;
  border: 3px solid #70AD47;
  border-radius: 10px;
  color: #818080;
  margin: 5% 0;
}

button:hover {
  background-color: #70AD47;
  color: white;
}

#pdfDom {
  margin: 2% auto;
  width: 90%;
  border: 1px solid black;
}

.firstPage, .secondPage {
  position: relative;
}

.logo {
  position: absolute;
  left: 2%;
  top: 2%;
  width: 30%;
}

.logo img {
  width: 100%;
}

.report-title {
  position: absolute;
  right: 1%;
  top: 3%;
  width: 70%;
}

.report-title p {
  font-size: 80px;
}

.main {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 54.2%;
  padding-bottom: 4%;
}

.bulk-analysis {
  position: absolute;
  top: 0;
  left: 2%;
  width: 95%;
  height: 80%;
  padding-right: 1%;
}

.analysis-title {
  font-size: 45px;
  font-weight: normal;
  text-align: left;
  color: #70AD47;
  margin: 2% 0;
}

.analysis-main {
  font-size: 25px;
  text-align: left;
}

.bulk-analysis-intro {
  position: absolute;
  top: 0%;
}

.chart {
  position: absolute;
  right: 1%;
  top: 40%;
  width: 100%;
  height: 70%;
}

.company {
  position: absolute;
  top: 12%;
  margin: 0 2%;
}

.company-title {
  text-align: left;
  font-size: 60px;
  color: #70AD47;
}

.goal {
  text-align: left;
}

.goal div {
  text-align: left;
  display: inline-block;
  width: 45%;
  font-size: 30px;
  padding: 3% 2%;
}

.goal-right {
  margin-left: 2%;
}

.fine-analysis {
  position: absolute;
  top: 0;
  width: 94%;
  height: 100%;
  padding: 0 3%;
  text-align: left;
}

.fine-analysis-main {
  width: 100%;
  height: 20%;
  text-align: left;
  position: relative;
}

.fine-analysis-title {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 35px;
  font-weight: bolder;
}

.fine-analysis-text {
  position: absolute;
  top: 120%;
  left: 1%;
  height: 60%;
  width: 72%;
  text-align: left;
  font-size: 20px;
}

.fine-analysis .chart {
  position: absolute;
  top: 2%;
  right: 0;
  width: 25%;
  height: 600%;
}

ul {
  position: absolute;
  width: 94%;
  height: 90%;
}

li {
  height: 15%;
  list-style: none;
}
</style>
