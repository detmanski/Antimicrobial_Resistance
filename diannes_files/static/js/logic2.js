// Pathogen endpoints
const url = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Acinetobacter%20baumannii').then(response => response.json());
const url2 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Citrobacter spp.').then(response => response.json());
const url3 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Enterobacter spp.').then(response => response.json());
const url4 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Enterococcus faecalis').then(response => response.json());
const url5 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Enterococcus faecium').then(response => response.json());
const url6 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Escherichia coli').then(response => response.json());
const url7 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Group A Streptococcus').then(response => response.json());
const url8 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Group B Streptococcus').then(response => response.json());
const url9 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Haemophilus influenzae').then(response => response.json());
const url10 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Klebsiella pneumoniae').then(response => response.json());
const url11 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Morganella spp.').then(response => response.json());
const url12= fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Mycobacterium tuberculosis').then(response => response.json());
const url13 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Non-typhoidal Salmonella').then(response => response.json());
const url14 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Other enterococci').then(response => response.json());
const url15 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Proteus spp.').then(response => response.json());
const url16 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Pseudomonas aeruginosa').then(response => response.json());
const url17 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Salmonella Paratyphi').then(response => response.json());
const url18 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Salmonella Typhi').then(response => response.json());
const url19 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Serratia spp.').then(response => response.json());
const url20 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Shigella spp.').then(response => response.json());
const url21 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Staphylococcus aureus').then(response => response.json());
const url22 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Streptococcus pneumoniae').then(response => response.json());
//removed endpoint not associated with deaths
//const url23 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Neisseria gonorrhoeae').then(response => response.json());


// Antibiotic class endpoints
const url24 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Aminoglycosides').then(response => response.json());
//removed endpoints not associated with deaths
//const url25 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Anti-pseudomonal penicillin Beta-Lactamase inhibitors').then(response => response.json());
//const url26 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Beta Lactam Beta-lactamase inhibitors').then(response => response.json());
const url27 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Carbapenems').then(response => response.json());
const url28 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Fluoroquinolones').then(response => response.json());
const url29 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Fourth-generation cephalosporins').then(response => response.json());
const url30 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Resistance to one or more antibiotics').then(response => response.json());
const url31 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Third-generation cephalosporins').then(response => response.json());
const url32 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Aminopenicillin').then(response => response.json());
const url33 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Extensive drug resistance in TB').then(response => response.json());
const url34 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Isoniazid mono-resistance').then(response => response.json());
const url35 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Macrolide').then(response => response.json());
const url36 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Methicillin').then(response => response.json());
const url37 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Multi-drug resistance excluding extensive drug resistance in TB').then(response => response.json());
const url38 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Multi-drug resistance in Salmonella Typhi and Paratyphi').then(response => response.json());
const url39 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Penicillin').then(response => response.json());
const url40 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Rifampicin mono-resistance').then(response => response.json());
const url41 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Trimethoprim-Sulfamethoxazole').then(response => response.json());
const url42 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Vancomycin').then(response => response.json()); 

// Infectious Sydrome endpoints
const url43 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Bacterial infections of the skin and subcutaneous systems').then(response => response.json()); 
const url44 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Bloodstream infections').then(response => response.json()); 
const url45 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Diarrhoea').then(response => response.json()); 
const url46 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Endocarditis and other cardiac infections').then(response => response.json()); 
const url47 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Infections of bones, joints, and related organs').then(response => response.json()); 
const url48 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Lower respiratory infections and all related infections in the thorax').then(response => response.json()); 
const url49 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Meningitis and other bacterial central nervous system infections').then(response => response.json()); 
const url50 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Peritoneal and intra-abdominal infections').then(response => response.json()); 
const url51 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Tuberculosis').then(response => response.json()); 
const url52 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Typhoid%20fever,%20paratyphoid%20fever,%20and%20invasive%20non-typhoidal%20Salmonella').then(response => response.json()); 
const url53 = fetch('http://127.0.0.1:5000/api/v1.0/amr/infectious_syndrome/Urinary tract infections and pyelonephritis').then(response => response.json()); 

// Creating datapoints(datapoints 23,25,26 removed due to null value)
Promise.all([url, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16,
url17, url18, url19, url20, url21, url22, url24, url27, url28, url29, url30, url31, url32, url33, 
url34, url35, url36, url37, url38, url39, url40, url41, url42, url43, url44, url45, url46, url47, url48, url49, url50, url51, url52, url53]).then
(([datapoints, datapoints2, datapoints3, datapoints4, datapoints5,
datapoints6, datapoints7, datapoints8, datapoints9, datapoints10, datapoints11, datapoints12, datapoints13, datapoints14,
datapoints15, datapoints16, datapoints17, datapoints18, datapoints19, datapoints20, datapoints21, datapoints22, 
datapoints24, datapoints27, datapoints28, datapoints29, datapoints30, datapoints31, datapoints32,
datapoints33, datapoints34, datapoints35, datapoints36, datapoints37, datapoints38, datapoints39, datapoints40, datapoints41,
datapoints42, datapoints43, datapoints44, datapoints45, datapoints46, datapoints47, datapoints48, datapoints49, datapoints50, datapoints51,
datapoints52, datapoints53]) => {

//printing json endpoints to console for reference
console.log("Pathogen Datapoints:", datapoints, datapoints2, datapoints3,datapoints4, datapoints5,
            datapoints6, datapoints7, datapoints8, datapoints9, datapoints10, datapoints11, datapoints12, datapoints13, datapoints14,
            datapoints15, datapoints16, datapoints17, datapoints18, datapoints19, datapoints20, datapoints21, datapoints22,
            datapoints24, datapoints27, datapoints28, datapoints29, datapoints30, datapoints31, datapoints32, datapoints33,
            datapoints34, datapoints35, datapoints36, datapoints37, datapoints38, datapoints39, datapoints40, datapoints41, datapoints42, 
            datapoints43, datapoints44, datapoints45, datapoints46, datapoints47, datapoints48, datapoints49, datapoints50, datapoints51,
            datapoints52, datapoints53); 

//creating constants based on length of dataset(dataset has already been filtered from app.py to only include parameters associated with deaths)

//pathogens
const acinetobacterBaumanii = Object.keys(datapoints).length;
const citrobacterSpp = Object.keys(datapoints2).length;
const enterobacterSpp = Object.keys(datapoints3).length;
const enetrococcusFaecalis = Object.keys(datapoints4).length;
const enterococcusFaecium = Object.keys(datapoints5).length;
const escherichiaColi = Object.keys(datapoints6).length;
const groupAStreptococcus = Object.keys(datapoints7).length;
const groupBStreptococcus = Object.keys(datapoints8).length;
const haemophilusInfluenzae = Object.keys(datapoints9).length;
const klebsiellaPneumoniae = Object.keys(datapoints10).length;
const morganellaSpp = Object.keys(datapoints11).length;
const mycobacteriumTuberculosis = Object.keys(datapoints12).length;
const nonTyphoidalSalmonella = Object.keys(datapoints13).length;
const otherEnterococci = Object.keys(datapoints14).length;
const proteusSpp = Object.keys(datapoints15).length;
const pseudomonasAeruginosa = Object.keys(datapoints16).length;
const salmonellaParatyphi = Object.keys(datapoints17).length;
const salmonellaTyphi = Object.keys(datapoints18).length;
const serratiaSpp = Object.keys(datapoints19).length;
const shigellaSpp = Object.keys(datapoints20).length;
const staphylococcusAureus = Object.keys(datapoints21).length;
const streptococcusPneumoniae = Object.keys(datapoints22).length;
//const neisseriaGonorrhoeae = Object.keys(datapoints23).length;

//antibiotic class
const aminoglycosides = Object.keys(datapoints24).length;
//const antipseudomonalPenicillin = Object.keys(datapoints25).length;
//const betaLactam = Object.keys(datapoints26).length;
const carbapenems = Object.keys(datapoints27).length;
const fluoroquinolones = Object.keys(datapoints28).length;
const cephalosporins = Object.keys(datapoints29).length;
const resistanceOneOrMore = Object.keys(datapoints30).length;
const cephalosporins3rdGen = Object.keys(datapoints31).length;
const aminopenicillin = Object.keys(datapoints32).length;
const resistanceTB = Object.keys(datapoints33).length;
const isoniazidResistance = Object.keys(datapoints34).length;
const macrolide = Object.keys(datapoints35).length;
const methicillin = Object.keys(datapoints36).length;
const multiResistanceExcludingTB = Object.keys(datapoints37).length;
const multiResistanceSamonella = Object.keys(datapoints38).length;
const penicillin = Object.keys(datapoints39).length;
const rifampicin = Object.keys(datapoints40).length;
const trimethoprimSulfamethoxazole = Object.keys(datapoints41).length;
const vancomycin = Object.keys(datapoints42).length;

//infectious syndrome
const skinInfections = Object.keys(datapoints43).length;
const bloodInfections = Object.keys(datapoints44).length;
const diarrhoea = Object.keys(datapoints45).length;
const endocarditis = Object.keys(datapoints46).length;
const boneInfections = Object.keys(datapoints47).length;
const lowerRespInfections = Object.keys(datapoints48).length;
const meningitis = Object.keys(datapoints49).length;
const peritonealInfections = Object.keys(datapoints50).length;
const tuberculosis = Object.keys(datapoints51).length;
const typhoid = Object.keys(datapoints52).length;
const urinaryInfections = Object.keys(datapoints53).length;



//printing values to the console
console.log("pathogen values", acinetobacterBaumanii, citrobacterSpp, enterobacterSpp, enetrococcusFaecalis, enterococcusFaecium, escherichiaColi, 
            groupAStreptococcus, groupBStreptococcus, haemophilusInfluenzae, klebsiellaPneumoniae, morganellaSpp, mycobacteriumTuberculosis, 
            nonTyphoidalSalmonella, otherEnterococci, proteusSpp, pseudomonasAeruginosa, salmonellaParatyphi, salmonellaTyphi, serratiaSpp, shigellaSpp,
            staphylococcusAureus, streptococcusPneumoniae, "antibiotic values", aminoglycosides, carbapenems,
            fluoroquinolones, cephalosporins, resistanceOneOrMore, cephalosporins3rdGen, aminopenicillin, resistanceTB,isoniazidResistance, macrolide,
            methicillin, multiResistanceExcludingTB, multiResistanceSamonella, penicillin, rifampicin, trimethoprimSulfamethoxazole, vancomycin, "infectious syndromes", 
            skinInfections, bloodInfections, diarrhoea, endocarditis, boneInfections, lowerRespInfections, meningitis, peritonealInfections, tuberculosis,
            typhoid, urinaryInfections); 

//lists for plot labels

const infectiousSyndrome = 
      ["Bacterial infections of the skin and subcutaneous systems",
      "Bloodstream infections",
      "Diarrhoea",
      "Endocarditis and other cardiac infections",
      "Infections of bones, joints, and related organs",
      "Lower respiratory infections and all related infections in the thorax",
      "Meningitis and other bacterial central nervous system infections",
      "Peritoneal and intra-abdominal infections",
      "Tuberculosis",
      "Typhoid fever, paratyphoid fever, and invasive non-typhoidal Salmonella",
      "Urinary tract infections and pyelonephritis"];
      //"Gonorrhoea and chlamydia"

const antibioticClass = [
      "Aminoglycosides",
     // "Anti-pseudomonal penicillin/Beta-Lactamase inhibitors",
     // "Beta Lactam/Beta-lactamase inhibitors",
      "Carbapenems",
      "Fluoroquinolones",
      "Fourth-generation cephalosporins",
      "Resistance to one or more antibiotics",
      "Third-generation cephalosporins",
      "Aminopenicillin",
      "Extensive drug resistance in TB",
      "Isoniazid mono-resistance",
      "Macrolide",
      "Methicillin",
      "Multi-drug resistance excluding extensive drug resistance in TB",
      "Multi-drug resistance in Salmonella Typhi and Paratyphi",
      "Penicillin",
      "Rifampicin mono-resistance",
      "Trimethoprim-Sulfamethoxazole",
      "Vancomycin"];
                

const pathogens= [
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
     // "Neisseria gonorrhoeae"
      ];
 
//datasets to plug into plot on change of dropdown
const dataSet1 = [acinetobacterBaumanii, citrobacterSpp, enterobacterSpp, enetrococcusFaecalis, enterococcusFaecium, escherichiaColi, 
        groupAStreptococcus, groupBStreptococcus, haemophilusInfluenzae, klebsiellaPneumoniae, morganellaSpp, mycobacteriumTuberculosis, 
        nonTyphoidalSalmonella, otherEnterococci, proteusSpp, pseudomonasAeruginosa, salmonellaParatyphi, salmonellaTyphi, serratiaSpp, shigellaSpp,
        staphylococcusAureus, streptococcusPneumoniae];

      
const dataSet2 = [aminoglycosides, carbapenems,
        fluoroquinolones, cephalosporins, resistanceOneOrMore, cephalosporins3rdGen, aminopenicillin, resistanceTB,isoniazidResistance, macrolide,
        methicillin, multiResistanceExcludingTB, multiResistanceSamonella, penicillin, rifampicin, trimethoprimSulfamethoxazole, vancomycin];

const dataSet3 = [skinInfections, bloodInfections, diarrhoea, endocarditis, boneInfections, lowerRespInfections, meningitis, peritonealInfections, tuberculosis,
        typhoid, urinaryInfections];

// Creating the chart
async function init() {

  const ctx = document.getElementById('myChart');
      trace1 = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: "",
            datasets: [{
              label: "",
              data: "",
              backgroundColor: "",
              borderWidth: 2.5
            }
           
          ]},        
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}); 

//connecting js to html dropdown menu
d3.selectAll("#selDataset").on("change", updateChart);   
const dropDown = d3.select("#selDataset");

//activating function to update the chart with new values
function updateChart() {
  let dataset = dropDown.property("value");
  console.log(dataset);

  if (dataset === "0") {
    trace1.data.datasets[0].data = dataSet1;
    trace1.data.labels = pathogens;
    trace1.data.datasets[0].label = "Datapoints Associated with AMR Deaths by Pathogen";
    trace1.update(); 
  }
  else if (dataset === "1") {
    trace1.data.datasets[0].data = dataSet2;
    trace1.data.datasets[0].label = "Datapoints Associated with AMR Deaths by Antibiotic Class";
    trace1.data.labels = antibioticClass;
    trace1.data.datasets[0].backgroundColor = "rgba(245,40,145,0.44)";
    trace1.data.datasets[0].borderColor = "rgba(245,40,145,0.62)";
    trace1.update();
  }
  else if (dataset === "2") {
    trace1.data.datasets[0].data = dataSet3;
    trace1.data.datasets[0].label = "Datapoints Associated with AMR Deaths by Infectious Syndrome";
    trace1.data.labels = infectiousSyndrome;
    trace1.data.datasets[0].backgroundColor = "rgba(245,245,39,0.44";
    trace1.data.datasets[0].borderColor = "rgba(245,245,39,0.62";
    trace1.update()
  };
  }
}
init() 
}    
      )

    