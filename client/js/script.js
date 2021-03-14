let chart;

function renderUnos() {
	api.get("unos").then((response) => {
		let unos = response.data;

		for (i in unos) {
			let div = document.createElement("div");

			div.className = "card theme-dark";

			div.innerHTML = `
				<img src="./img/uno_${unos[i].name.toLowerCase()}.png">
				<h6>Uno ${unos[i].name}</h6>
				<p>Bla bla bla bla</p>
				<button class="theme-deep-purple" onclick="handleVotes(${unos[i].id})">Votar</button>
			`;
			
			document.getElementById("unos-container").appendChild(div);
		}
	});
}
renderUnos();

function renderChart() {
	api.get("unos").then((response) => {
		let votes = response.data.map((uno) => uno.votes);
		let ctx = document.getElementById("myChart").getContext("2d");

		chart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["Antigo", "Clássico", "Turbo", "Novo"],
				datasets: [{ data: votes, backgroundColor: "#673ab7" }],
			},
			options: {
				legend: { display: false },
				scales: {
					yAxes: [{ ticks: { beginAtZero: true } }]
				}
			}
		});
		Chart.defaults.global.defaultFontColor = "#fff";
	});
}
renderChart();

function handleVotes(id) {
	api.put(`unos/vote/${id}`).then(() => {
		alert("Voto contabilizado!");

		api.get("unos").then((response) => {
			let votes = response.data.map((uno) => uno.votes);
			chart.data.datasets[0].data = votes;
			chart.update();
		});
	});
}
