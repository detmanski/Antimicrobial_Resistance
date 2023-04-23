// Sets the base URL to a variable
const baseUrl = "http://127.0.0.1:5000/"

// Assigns variables to the elements each chart will be in:
// Visualization charts
const amr_visualization = document.getElementById('amr_visualization');
const spending_total_visualization = document.getElementById('spending_total_visualization');
const spending_capita_visualization = document.getElementById('spending_capita_visualization');
// Analysis charts
const spending_delta_capita_analysis = document.getElementById('spending_delta_capita_analysis');
const spending_capita_amr_analysis = document.getElementById('spending_capita_amr_analysis');
const spending_delta_amr_analysis = document.getElementById('spending_delta_amr_analysis');

// Assigns variables to each individual chart
var amr_bar
var spending_total_bar
var spending_capita_bar
var spending_delta_bar
var spending_capita_amr_scatter
var spending_delta_amr_scatter

// Default selection values for chart initialization
var default_amr_pathogen = "All pathogens"
var default_amr_syndrome = "All infectious syndromes"
var default_amr_antibiotic = "Penicillin"
var default_spending_year = 2019
var default_spending_start = 2010
var spending_end = 2019 // This will never change; the end year will always be 2019 since AMR data is for 2019

// Chart initialization
async function init() {
  // Collects the default datasets
  //const region_mapping = await d3.json(baseUrl+`/api/v1.0/countries/all_regions`) //V2
  const region_list = await d3.json(baseUrl + `/api/v1.0/regions`)
  const amr_visualization_data = await d3.json(baseUrl + `/api/v1.0/amr/three_filters/${default_amr_pathogen}/${default_amr_syndrome}/${default_amr_antibiotic}`);
  const spending_data = await d3.json(baseUrl + `/api/v1.0/spending/${default_spending_year}`);
  const spending_delta_data = await d3.json(baseUrl + `/api/v1.0/spending/spending_change/${default_spending_start}/${spending_end}`)
  const pathogen_list = await d3.json(baseUrl + "/api/v1.0/amr/pathogens")
  const antibiotic_list = await d3.json(baseUrl + "/api/v1.0/amr/antibiotic_classes")
  const syndrome_list = await d3.json(baseUrl + "/api/v1.0/amr/infectious_syndromes")
  const year_list = await d3.json(baseUrl + "/api/v1.0/spending/year_list")

  console.log(amr_visualization_data)
  // Sorts the main region list
  region_list.sort((a, b) => a.region.localeCompare(b.region))

  // Makes a new year list of only years before 2019
  const start_year_list = year_list.filter((year) => parseInt(year) < 2019)

  // Formats the data
  const data_parsed = []
  for (const row of region_list) {
    data_parsed.push({
      region: row.region,
      amrBurden: amr_visualization_data.filter((item) => item.location_name === row.region)[0].val,
      totalSpending: spending_data.filter((item) => item.region === row.region)[0].sum_health_spending_mil_USD,
      perCapitaSpending: spending_data.filter((item) => item.region === row.region)[0].sum_health_spending_mil_USD / ((spending_data.filter((item) => item.region === row.region)[0].sum_population_thousands)/1000),
      perCapitaSpendingDelta: spending_delta_data.filter((item) => item.region === row.region)[0].compound_annual_growth_rate
    })
  }

  // Formats data for the spending per capita vs AMR burden scatter plot
  const spending_capita_amr_scatter_parsed = []
  for (const row of data_parsed) {
    spending_capita_amr_scatter_parsed.push({
      label: row.region,
      data: [
        {
          x: row.amrBurden,
          y: row.perCapitaSpending
        }
      ]
    })
  }

  // Formats data for the spending change per capita vs AMR burden scatter plot
  const spending_delta_amr_scatter_parsed = []
  for (const row of data_parsed) {
    spending_delta_amr_scatter_parsed.push({
      label: row.region,
      data: [
        {
          x: row.amrBurden,
          y: row.perCapitaSpendingDelta
        }
      ]
    })
  }

  // Plots the AMR data
  if (amr_visualization) {
    amr_bar = new Chart(amr_visualization, {
      type: 'bar',
      data: {
        labels: data_parsed.map((item) => item.region),
        datasets: [{
          label: `AMR deaths per 100000 population by region`,
          data: data_parsed.map((item) => item.amrBurden),
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "AMR deaths per 100000 population per region (filtered by resistant antibiotic selection)"
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "AMR deaths per 100000 population"
            }
          },
          x: {
            title: {
              display: true,
              text: "Region"
            }
          }
        }
      }
    });
  }

  // Plots the total spending data
  if (spending_total_visualization) {
    spending_total_bar = new Chart(spending_total_visualization, {
      type: 'bar',
      data: {
        labels: data_parsed.map((item) => item.region),
        datasets: [{
          label: `Total health spending (mil USD)`,
          data: data_parsed.map((item) => item.totalSpending),
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Million USD spent on healthcare per region in the selected year"
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Total health spending (million USD) "
            }
          },
          x: {
            title: {
              display: true,
              text: "Region"
            }
          }
        }
      }
    });
  }

  // Plots the spending per capita data
  if (spending_capita_visualization) {
    spending_capita_bar = new Chart(spending_capita_visualization, {
      type: 'bar',
      data: {
        labels: data_parsed.map((item) => item.region),
        datasets: [{
          label: `Per capita health spending by Region`,
          data: data_parsed.map((item) => item.perCapitaSpending),
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Per capita USD spent on healthcare per region in the selected year"
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Per capita healthcare spending (USD) "
            }
          },
          x: {
            title: {
              display: true,
              text: "Region"
            }
          }
        }
      }
    });
  }

  // Plots the spending per capita data
  if (spending_delta_capita_analysis) {
    spending_delta_bar = new Chart(spending_delta_capita_analysis, {
      type: 'bar',
      data: {
        labels: data_parsed.map((item) => item.region),
        datasets: [{
          label: `Per capita health spending change by Region (selected year to 2019)`,
          data: data_parsed.map((item) => item.perCapitaSpendingDelta),
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Change in healthcare spending by region from the selected year to 2019 (compound annual growth rate, USD)"
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Compound annual growth rate of healthcare spending (USD)"
            }
          },
          x: {
            title: {
              display: true,
              text: "Region"
            }
          }
        }
      }
    });
  }

  // Plots the per capita spending vs AMR burden by region
  if (spending_capita_amr_analysis) {
    spending_capita_amr_scatter = new Chart(spending_capita_amr_analysis, {
      type: "scatter", 
      data: { datasets: spending_capita_amr_scatter_parsed },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Per capita healthcare spending (USD) in 2019 vs AMR deaths per 100000 population attributable to antibiotic resistance to the selected drug class by region"
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Per capita healthcare spending in 2019 (USD)"
            }
          },
          x: {
            title: {
              display: true,
              text: "AMR deaths per 100000 population"
            }
          }
        }
      }
    })
  }

  // Plots the per capita health spending change vs AMR burden by region
  if (spending_delta_amr_analysis) {
    spending_delta_amr_scatter = new Chart(spending_delta_amr_analysis, {
      type: "scatter", 
      data: { datasets: spending_delta_amr_scatter_parsed },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Change in healthcare spending (USD) from the selected year to 2019 vs AMR deaths per 100000 population attributable to antibiotic resistance to the selected drug class by region"
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Compound annual growth rate for healthcare spending over the chosen range of years (USD)"
            }
          },
          x: {
            title: {
              display: true,
              text: "AMR deaths per 100000 population"
            }
          }
        }
      }
    })
  }

  // Visualization page dropdowns
  dropdownSetup(pathogen_list, "pathogen_dropdown", default_amr_pathogen, true)
  dropdownSetup(antibiotic_list, "antibiotic_dropdown", default_amr_antibiotic, false)
  dropdownSetup(syndrome_list, "syndrome_dropdown", default_amr_syndrome, true)
  dropdownSetup(year_list, "vis_years_dropdown", default_spending_year, false)
  // Analysis page dropdowns
  dropdownSetup(start_year_list, "analysis_years_dropdown", default_spending_start, false)
  dropdownSetup(start_year_list, "analysis_years_dropdown_2", default_spending_start, false)
  dropdownSetup(pathogen_list, "analysis_pathogen_dropdown", default_amr_pathogen, true)
  dropdownSetup(antibiotic_list, "analysis_antibiotic_dropdown", default_amr_antibiotic, false)
  dropdownSetup(syndrome_list, "analysis_syndrome_dropdown", default_amr_syndrome, true)
}

// Sets up the dropdown box with each individual ID
function dropdownSetup(data, selectId, default_selection, disabled) {
  var selectTag = d3.select(`#${selectId}`);
  var options = selectTag.selectAll("option").data(data);
  options.enter()
    .append('option')
    .text(d => d)
    .attr('value', d => d)
  if (disabled) {selectTag.attr('disabled', true)}
  selectTag.property('value', default_selection);
}

// Defines what to do upon amr dropdown change
async function amrChanged() {
  // Collects the values of each dropdown and assigns to a variable
  const selection_pathogen = d3.select('#pathogen_dropdown').property("value")
  const selection_antibiotic = d3.select('#antibiotic_dropdown').property("value")
  const selection_syndrome = d3.select('#syndrome_dropdown').property("value")
  
  // Collects the filtered data based on the dropdown values
  const updated_amr_visualization_data = await d3.json(baseUrl + `/api/v1.0/amr/three_filters/${selection_pathogen}/${selection_syndrome}/${selection_antibiotic.replace("/","_")}`);

  // Collects the region list
  const region_list = await d3.json(baseUrl + `/api/v1.0/regions`)

  // Sorts the main region list
  region_list.sort((a, b) => a.region.localeCompare(b.region))

  // Formats the data
  const data_parsed = []
  for (const row of region_list) {
    data_parsed.push({
      region: row.region,
      amrBurden: updated_amr_visualization_data.filter((item) => item.location_name === row.region)[0].val,
    })
  }

  removeData(amr_bar)
  addData(amr_bar, data_parsed.map((row) => row.amrBurden))
}

// Defines what to do upon visualization year dropdown change
async function visYearChanged(selection) {
  const region_list = await d3.json(baseUrl + `/api/v1.0/regions`)
  const spending_data = await d3.json(baseUrl + `/api/v1.0/spending/${selection}`);

  // Sorts the main region list
  region_list.sort((a, b) => a.region.localeCompare(b.region))

  // Formats the data
  const data_parsed = []
  for (const row of region_list) {
    data_parsed.push({
      region: row.region,
      totalSpending: spending_data.filter((item) => item.region === row.region)[0].sum_health_spending_mil_USD,
      perCapitaSpending: spending_data.filter((item) => item.region === row.region)[0].sum_health_spending_mil_USD / ((spending_data.filter((item) => item.region === row.region)[0].sum_population_thousands)/1000),
    })
  }

  removeData(spending_total_bar)
  removeData(spending_capita_bar)
  addData(spending_total_bar, data_parsed.map((row) => row.totalSpending))
  addData(spending_capita_bar, data_parsed.map((row) => row.perCapitaSpending))
}

// Defines what to do when the top analysis year dropdown changes
async function analysisYearChanged(selection) {
  // Collects the data
  const region_list = await d3.json(baseUrl + `/api/v1.0/regions`);
  const spending_delta_data = await d3.json(baseUrl + `/api/v1.0/spending/spending_change/${selection}/${spending_end}`);

  // Sorts the main region list
  region_list.sort((a, b) => a.region.localeCompare(b.region));

  // Formats the data
  const data_parsed = []
  for (const row of region_list) {
    data_parsed.push({
      region: row.region,
      perCapitaSpendingDelta: spending_delta_data.filter((item) => item.region === row.region)[0].compound_annual_growth_rate
    })
  }

  removeData(spending_delta_bar)
  addData(spending_delta_bar, data_parsed.map((row) => row.perCapitaSpendingDelta))
}

// Defines what to do when the scatterplot dropdowns change
async function scatterChange() {
  // Collects the values of each dropdown and assigns to a variable
  const selection_pathogen = d3.select('#analysis_pathogen_dropdown').property("value")
  const selection_antibiotic = d3.select('#analysis_antibiotic_dropdown').property("value")
  const selection_syndrome = d3.select('#analysis_syndrome_dropdown').property("value")
  const selection_start_year = d3.select('#analysis_years_dropdown_2').property("value")

  // Collects the filtered data based on the dropdown values
  const updated_amr_visualization_data = await d3.json(baseUrl + `/api/v1.0/amr/three_filters/${selection_pathogen}/${selection_syndrome}/${selection_antibiotic.replace("/","_")}`);
  const updated_spending_data = await d3.json(baseUrl + `/api/v1.0/spending/${default_spending_year}`);
  const updated_spending_delta_data = await d3.json(baseUrl + `/api/v1.0/spending/spending_change/${selection_start_year}/${spending_end}`)

  // Collects the region list
  const region_list = await d3.json(baseUrl + `/api/v1.0/regions`)

  // Sorts the main region list
  region_list.sort((a, b) => a.region.localeCompare(b.region))

  // Formats the data
  const data_parsed = []
  for (const row of region_list) {
    data_parsed.push({
      region: row.region,
      amrBurden: updated_amr_visualization_data.filter((item) => item.location_name === row.region)[0].val,
      perCapitaSpending: updated_spending_data.filter((item) => item.region === row.region)[0].sum_health_spending_mil_USD / ((updated_spending_data.filter((item) => item.region === row.region)[0].sum_population_thousands)/1000),
      perCapitaSpendingDelta: updated_spending_delta_data.filter((item) => item.region === row.region)[0].compound_annual_growth_rate
    })
  }

  // Formats data for the spending per capita vs AMR burden scatter plot
  const spending_capita_amr_scatter_parsed = []
  for (const row of data_parsed) {
    spending_capita_amr_scatter_parsed.push({
      label: row.region,
      data: [
        {
          x: row.amrBurden,
          y: row.perCapitaSpending
        }
      ]
    })
  }

  // Formats data for the spending change per capita vs AMR burden scatter plot
  const spending_delta_amr_scatter_parsed = []
  for (const row of data_parsed) {
    spending_delta_amr_scatter_parsed.push({
      label: row.region,
      data: [
        {
          x: row.amrBurden,
          y: row.perCapitaSpendingDelta
        }
      ]
    })
  }

  removeScatterData(spending_capita_amr_scatter)
  removeScatterData(spending_delta_amr_scatter)
  addScatterData(spending_capita_amr_scatter, spending_capita_amr_scatter_parsed)
  addScatterData(spending_delta_amr_scatter, spending_delta_amr_scatter_parsed)

}

// Adds data to a bar chart
function addData(chart, data) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
  });
  chart.update();
}

// Removes data from a bar chart
function removeData(chart) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data = [];
  });
  chart.update();
}

// Adds data to a scatter plot
function addScatterData(chart, data) {
  for (i=0; i < data.length; i++) {
    chart.data.datasets[i].label = data[i].label
    chart.data.datasets[i].data = data[i].data
  }
  chart.update();
}

// Removes data from a bar chart
function removeScatterData(chart) {
  chart.data.datasets.forEach((dataset) => {
    dataset.label = ''
    dataset.data = [];
  });
  chart.update();
}

init()