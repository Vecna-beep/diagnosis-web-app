new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ['Accuracy', 'Close to accurate', 'not accurate'],
        datasets: [
            {
                backgroundColor: ["rgb(204, 102, 102)", "rgb(230, 0, 230)", "rgb(102, 102, 255)", "rgb(0, 153, 51)", "rgb(179, 179, 0)", "rgb(255, 77, 148)", "rgb(77, 0, 153)", "rgb(51, 204, 204)", "rgb(51, 255, 119)", "rgb(204, 102, 255)", "rgb(128, 128, 0)", "rgb(102, 102, 153)", "rgb(255, 153, 0)", "rgb(0, 102, 204)", "rgb(153, 153, 102)", "rgb(102, 153, 153)", "rgb(252, 174, 174)", "rgb(0, 255, 153)", "rgb(230, 230, 0)"],


                data: [90, 10, 40],
                datalabels: {
                    display: false,
                    color: "black",
                },
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
})