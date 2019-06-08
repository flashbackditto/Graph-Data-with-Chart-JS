
  let myChart = document.getElementById('myChart').getContext('2d');

  let request = new XMLHttpRequest();
  let API_Key = "9wBvaArNUU45cBCLIDJloq11LmH7nQQcEggnp3J9KFF0Wmm5ypZK8V53locn";


  request.open('GET',`https://www.worldtradingdata.com/api/v1/history?symbol=AAPL&sort=newest&api_token=${API_Key}`, true);

  let data;
  let date;
  request.onload = function () {
    if(this.status === 200) {

      let data = JSON.parse(request.response);
      console.log(data);

      let chartData = Object.entries(data).slice(1).map(entry => entry[1]);
      Object.keys(chartData[0]).forEach(function (date) {
      // console.log(item);
      //console.log(date); // returns only dates
      });
    }
  }

//Alright, heres what i need to do. Make an api request with global data. Create empty label
//and data arrays and push dates as a label for chart and dollar value for data.



  //Global options
  Chart.defaults.global.defaultFontSize = 15;

  let appleChart = new Chart(myChart, {
    type:'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento'],
      datasets:[{
        label:'Population',
        data: data,
      backgroundColor:[
      'red',
      'green',
      'yellow',
      'blue',
      'orange',
      'purple'
    ],
    borderWidth:2,
    borderColor: 'gray',
    hoverBorderWidth: 3,
    hoverBorderColor: 'black',
      }]
    },
    options:{
      title:{
        display:true,
        text:'Largest Cities In California',
        fontSize:25
      },
      legend:{
        display:true,
        position:'right',
        labels: {
          fontColor:'black'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom: 0,
          top:0
        }
      }
    }
    });


    let stockChart = document.getElementById('stockChart').getContext('2d');

    //Global options
    Chart.defaults.global.defaultFontSize = 15;

    let teslaChart = new Chart(stockChart, {
      type:'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento'],
        datasets:[
          {
          label:'Median Annual Income',
          data:[
          60197,
          76662,
          104675,
          110816,
          48600,
          56943
        ],
      backgroundColor: 'rgba(33, 186, 94, 0.4)',
      borderWidth:2,
      borderColor: 'rgba(40, 167, 108, 0.9)',
      hoverBorderWidth: 3,
      hoverBorderColor: 'black',
      pointRadius: 4,
      pointHoverRadius: 5,
      pointBorderColor:'rgba(19, 147, 70, 0.9)',
      pointBackgroundColor: 'rgba(252, 255, 237, 0.7)',
      pointHoverBackgroundColor: 'rgba(247, 255, 70, 0.9)'
    },
    {
              label:'Population',
              data:[
                3792621,
                1307402,
                945942,
                805235,
                494665,
                466488
            ],
          backgroundColor: 'rgba(75, 192, 192, 0.3)',
          borderWidth:2,
          borderColor: 'rgba(98, 80, 196, 0.9)',
          hoverBorderWidth: 3,
          hoverBorderColor: 'black',
          pointRadius: 4,
          pointHoverRadius: 5,
          pointBorderColor:'rgba(78, 60, 156, 0.9)',
          pointBackgroundColor: 'rgba(252, 255, 237, 0.7)',
          pointHoverBackgroundColor: 'rgba(247, 255, 70, 0.9)'
          },
          {
          label:'Median Home Price',
          data:[
          525520,
          623800,
          989000,
          1637500,
          280000,
          365000
        ],
      backgroundColor: 'rgba(192, 0, 0, 0.4)',
      borderWidth:2,
      borderColor: 'rgba(211, 65, 65, 0.9)',
      hoverBorderWidth: 3,
      hoverBorderColor: 'black',
      pointRadius: 4,
      pointHoverRadius: 5,
      pointBorderColor:'rgba(145, 0, 0, 0.9)',
      pointBackgroundColor: 'rgba(252, 255, 237, 0.7)',
      pointHoverBackgroundColor: 'rgba(247, 255, 70, 0.9)'
        }
       ]
      },
      options:{
        title:{
          display:true,
          text:'Largest Cities In California',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels: {
            fontColor:'black'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom: 0,
            top:0
          }
        }
      }
      });







      let rentIncomeChart = document.getElementById('rInChart').getContext('2d');


      //Global options
      Chart.defaults.global.defaultFontSize = 15;

      let rentIncome = new Chart(rentIncomeChart, {
        type:'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento'],
          datasets:[
            {
              label:'Median Home Price',
              data:[
              525520,
              623800,
              989000,
              1637500,
              280000,
              365000
            ],
        backgroundColor: 'rgba(33, 186, 94, 0.4)',
        borderWidth:2,
        borderColor: 'rgba(40, 167, 108, 0.9)',
        hoverBorderWidth: 3,
        hoverBorderColor: 'black',
        pointRadius: 4,
        pointHoverRadius: 5,
        pointBorderColor:'rgba(19, 147, 70, 0.9)',
        pointBackgroundColor: 'rgba(252, 255, 237, 0.7)',
        pointHoverBackgroundColor: 'rgba(247, 255, 70, 0.9)'
      },
            {
            label:'Median Annual Income',
            data:[
            60197,
            76662,
            104675,
            110816,
            48600,
            56943
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.3)',
          borderWidth:2,
          borderColor: 'rgba(98, 80, 196, 0.9)',
          hoverBorderWidth: 3,
          hoverBorderColor: 'black',
          pointRadius: 4,
          pointHoverRadius: 5,
          pointBorderColor:'rgba(78, 60, 156, 0.9)',
          pointBackgroundColor: 'rgba(252, 255, 237, 0.9)',
          pointHoverBackgroundColor: 'rgba(247, 255, 70, 0.9)'
      },
      {
      label:'Average Annual Rent',
      data:[
        28452,
        26016,
        32760,
        43308,
        12540,
        16356
    ],
    backgroundColor: 'rgba(192, 0, 0, 0.4)',
    borderWidth:2,
    borderColor: 'rgba(211, 65, 65, 0.9)',
    hoverBorderWidth: 3,
    hoverBorderColor: 'black',
    pointRadius: 4,
    pointHoverRadius: 5,
    pointBorderColor:'rgba(145, 0, 0, 0.9)',
    pointBackgroundColor: 'rgba(252, 255, 237, 0.7)',
    pointHoverBackgroundColor: 'rgba(247, 255, 70, 0.9)'

  }
         ]
        },
        options:{
          title:{
            display:true,
            text:'Median Annual Rent vs. Average Annual Income',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels: {
              fontColor:'black'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom: 0,
              top:0
            }
          }
        }
        });
