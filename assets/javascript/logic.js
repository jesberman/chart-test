const CHART = document.getElementById("lineChart");
CHART.width = 80;

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Steps I took today",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75, 192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 'miter',
                pointBorderColor:"rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth:1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                //pointRadius: 1,
                //pointHitRadius:10,
                data: [65,59,80,81,56,55,80]
            }
        ]

    }
})