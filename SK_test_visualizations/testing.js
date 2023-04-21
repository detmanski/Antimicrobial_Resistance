// Variable for the url
const baseUrl = "http://127.0.0.1:5000/"

const ctx_spending = document.getElementById('spending_by_year');
const ctx_amr_spending_change = document.getElementById('amr_vs_spending_change');

var year = 2019
var antibiotic_class = 'Penicillin'

var spending_bar
var amr_vs_spending_change

// Sets up the dropdown box with each individual ID
function dropdownSetup(data, selectId) {
  var selectTag = d3.select(`#${selectId}`);
  var options = selectTag.selectAll("option").data(data);
  options.enter().append('option')
    .text(d => d)
    .attr('value', d => d)
}

// Adds data to the chart
function addData(chart, data) {
  //chart.data.labels = labels;
  chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
  });
  chart.update();
}

// Removes data from the chart
function removeData(chart) {
  //chart.data.labels = [];
  chart.data.datasets.forEach((dataset) => {
      dataset.data = [];
  });
  chart.update();
}

// Sets up the change from the dropdown
async function yearChanged(selection) {
  const spending = await d3.json(baseUrl + `/api/v1.0/spending/${selection}`);
  spending.sort((a, b) => a.region.localeCompare(b.region))

  const spending_data = [];
  for (let i = 0; i < spending.length; i++) {
      spending_data.push(spending[i]["sum_health_spending_mil_USD"]);
  }
  
  removeData(spending_bar);
  addData(spending_bar, spending_data);
}

// Function that initializes everything
async function init() {
  const spending = await d3.json(baseUrl + `/api/v1.0/spending/${year}`);
  spending.sort((a, b) => a.region.localeCompare(b.region))
  
  const years = await d3.json(baseUrl+"/api/v1.0/spending/year_list");

  const amr_burden = await d3.json(baseUrl+"/api/v1.0/amr/pathogen/All pathogens");
  console.log(amr_burden)

  //Formats the data
  const regions = []
  const spending_data = []
  for (let i = 0; i < spending.length; i++) {
      regions.push(spending[i]['region'])
      spending_data.push(spending[i]["sum_health_spending_mil_USD"])
  }

  spending_bar = new Chart(ctx_spending, {
      type: 'bar',
      data: {
        labels: regions,
        datasets: [{
          label: `Health Spending in ${year} (Million USD)`,
          data: spending_data,
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

  const amr_data = []
  for (const region of regions) {
    console.log(amr_burden.filter(record => 
      record.location_name === region && 
      record.antibiotic_class === antibiotic_class &&
      record.infectious_syndrome === 'All infectious syndromes'))
    amr_data.push({
      label: region,
      data: [
        { 
          x: spending.filter(record => record.region === region)[0].sum_health_spending_mil_USD,
          y: amr_burden.filter(record => record.location_name === region && record.antibiotic_class === antibiotic_class && record.infectious_syndrome === 'All infectious syndromes')[0].val
        }
      ]
    })
  }

  amr_vs_spending_change = new Chart(ctx_amr_spending_change, {
    type: "scatter", 
    data: { datasets: amr_data },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        },
        y: {
          type: 'linear'
        }
      }
    }
  })

    dropdownSetup(years, "years_dropdown")
}
      
init()