


// path to json files
const amrPath = "../../../../project_data/amr.json"
const countriesPath = "../../../../project_data/countries.json"
const regionsPath = "../../../../project_data/regions.json"
const spendingPath = "../../../../project_data/spending_pop.json"
var pathogens = "http://127.0.0.1:5000/api/v1.0/amr/pathogens"
var data = amrPath
const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pathogens,
        datasets: [{
          label: 'Pathogens',
          data: amrPath,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  });