// path to csv files
region_1_data = "../../Resources/region_1_deaths.csv"

var pathogens = [
"Acinetobacter baumannii",
"Citrobacter spp.",
"Enterobacter spp.",
"Enterococcus faecalis",
"Enterococcus faecium",
"Escherichia coli",
"Group A Streptococcus",
"Group B Streptococcus",
"Haemophilus influenzae",
"Klebsiella pneumoniae",
"Morganella spp.",
"Mycobacterium tuberculosis",
"Non-typhoidal Salmonella",
"Other enterococci",
"Proteus spp.",
"Pseudomonas aeruginosa",
"Salmonella Paratyphi",
"Salmonella Typhi",
"Serratia spp.",
"Shigella spp.",
"Staphylococcus aureus",
"Streptococcus pneumoniae",
"Neisseria gonorrhoeae"
]
var regions = [
  "East Asia",
  "Southeast Asia",
  "Oceania",
  "Central Asia",
  "Central Europe",
  "Eastern Europe",
  "High-income Asia Pacific",
  "Australasia",
  "Western Europe",
  "Southern Latin America",
  "High-income North America",
  "Caribbean",
  "Andean Latin America",
  "Central Latin America",
  "Tropical Latin America",
  "North Africa and Middle East",
  "South Asia",
  "Central Sub-Saharan Africa",
  "Eastern Sub-Saharan Africa",
  "Southern Sub-Saharan Africa",
  "Western Sub-Saharan Africa"
]

const ctx = document.getElementById('myChart');
ctx.addEventListener('change', init);
function init() {
  var dropDown = Chart.selectBox("#selDataset");
  Chart.regions.then(function(data) {
    var regionNames = data.regions;
    regionNames.forEach((regions)=> {
      dropDown.append("option").regions
    });
    var initRegions = regionNames[0];
    myChart.update();
  });
};



let trace1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pathogens,
        datasets: [{
          label: "Number of Deaths",
          data: [480, 280, 560, 210, 180, 800, 100, 320, 90, 630, 80, 80, 100, 150, 360, 560, 48, 114, 350, 40, 540, 400, 0],
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