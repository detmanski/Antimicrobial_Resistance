const url = "http://127.0.0.1:5000/api/v1.0/amr"



d3.json(url).then(function(data) {
  console.log(data);
});

//Flask endpoints: Pathogens

const acinetobacterBaumanii = url + "/pathogen/Acinetobacter%20baumannii"
  console.log(acinetobacterBaumanii);
const acinetobacterBaumaniiFilter = Object.keys(acinetobacterBaumanii).length
  console.log(acinetobacterBaumaniiFilter);

const citrobacterSpp= url + "/pathogen/Citrobacter%20spp. "
  console.log(citrobacterSpp);
const citrobacterSppFilter = Object.keys(citrobacterSpp).length
  console.log(citrobacterSppFilter);

const enterobacterSpp= url + "/pathogen/Enterobacter%20spp. "
  console.log(enterobacterSpp);
const enterobacterSppFilter = Object.keys(enterobacterSpp).length;
  console.log(enterobacterSppFilter);

const enetrococcusFaecalis= url + "/pathogen/Enterococcus%20faecalis"
  console.log(enetrococcusFaecalis);
const enetrococcusFaecalisFilter = Object.keys(enetrococcusFaecalis).length;
  console.log(enetrococcusFaecalisFilter);

const enterococcusFaecium= url + "/pathogen/Enterococcus%20faecium"
  console.log(enterococcusFaecium);
const enterococcusFaeciumFilter = Object.keys(enterococcusFaecium).length;
  console.log(enterococcusFaeciumFilter);
  
const escherichiaColi = url + "/pathogen/Escherichia%20coli"
  console.log(escherichiaColi);
const escherichiaColiFilter = Object.keys(escherichiaColi).length;
  console.log(escherichiaColiFilter);

const groupAStreptococcus = url + "/pathogen/Group%20A%20Streptococcus"
  console.log(groupAStreptococcus);
const groupAStreptococcusFilter = Object.keys(groupAStreptococcus).length; 
  console.log(groupAStreptococcusFilter);

const groupBStreptococcus = url + "/pathogen/Group%20B%20Streptococcus"
  console.log(groupBStreptococcus);
const groupBStreptococcusFilter = Object.keys(groupBStreptococcus).length; 
  console.log(groupBStreptococcusFilter);

const haemophilusInfluenzae = url + "/pathogen/Haemophilus%20influenzae"
  console.log(haemophilusInfluenzae);
const haemophilusInfluenzaeFilter = Object.keys(haemophilusInfluenzae).length; 
  console.log(haemophilusInfluenzaeFilter);

const klebsiellaPneumoniae = url + "/pathogen/Klebsiella%20pneumoniae"
  console.log(klebsiellaPneumoniae);
const klebsiellaPneumoniaeFilter = Object.keys(klebsiellaPneumoniae).length; 
  console.log(klebsiellaPneumoniaeFilter);

const morganellaSpp = url + "/pathogen/Morganella%20spp. "
  console.log(morganellaSpp);
  const morganellaSppFilter = Object.keys(morganellaSpp).length; 
  console.log(morganellaSppFilter);

const mycobacteriumTuberculosis= url + "/pathogen/Mycobacterium%20tuberculosis"
  console.log(mycobacteriumTuberculosis);
  const mycobacteriumTuberculosisFilter = Object.keys(mycobacteriumTuberculosis).length; 
  console.log(mycobacteriumTuberculosisFilter);

const nonTyphoidalSalmonella = url + "/pathogen/Non-typhoidal%20Salmonella"
  console.log(nonTyphoidalSalmonella);
  const nonTyphoidalSalmonellaFilter = Object.keys(nonTyphoidalSalmonella).length; 
  console.log(nonTyphoidalSalmonellaFilter);

const otherEnterococci = url + "/pathogen/Other%20enterococci"
  console.log(otherEnterococci);
  const otherEnterococciFilter= Object.keys(otherEnterococci).length; 
  console.log(otherEnterococciFilter);

const proteusSpp = url + "/pathogen/Proteus%20spp. "
  console.log(proteusSpp);
  const proteusSppFilter = Object.keys(proteusSpp).length; 
  console.log(proteusSppFilter);

const pseudomonasAeruginosa = url + "/pathogen/Pseudomonas%20aeruginosa"
  console.log(pseudomonasAeruginosa);
  const pseudomonasAeruginosaFilter= Object.keys(pseudomonasAeruginosa).length; 
  console.log(pseudomonasAeruginosaFilter);

const salmonellaParatyphi = url + "/pathogen/Salmonella%20Paratyphi"
  console.log(salmonellaParatyphi);
  const salmonellaParatyphiFilter = Object.keys(salmonellaParatyphi).length; 
  console.log(salmonellaParatyphiFilter);

const salmonellaTyphi = url + "/pathogen/Salmonella%20Typhi"
  console.log(salmonellaTyphi);
  const salmonellaTyphiFilter = Object.keys(salmonellaTyphi).length; 
  console.log(salmonellaTyphiFilter);

const serratiaSpp = url + "/pathogen/Serratia%20spp."
  console.log(serratiaSpp);
  const serratiaSppFilter = Object.keys(serratiaSpp).length; 
  console.log(serratiaSppFilter);

const shigellaSpp = url + "/pathogen/Shigella%20spp."
  console.log(shigellaSpp);
  const shigellaSppFilter = Object.keys(shigellaSpp).length; 
  console.log(shigellaSppFilter);

const staphylococcusAureus = url + "/pathogen/Staphylococcus%20aureus"
  console.log(staphylococcusAureus);
  const staphylococcusAureusFilter = Object.keys(staphylococcusAureus).length; 
  console.log(staphylococcusAureusFilter);

const streptococcusPneumoniae = url + "/pathogen/streptococcusPneumoniae"
  console.log(streptococcusPneumoniae);
  const streptococcusPneumoniaeFilter = Object.keys(streptococcusPneumoniae).length; 
  console.log(streptococcusPneumoniaeFilter);

const neisseriaGonorrhoeae = url + "/pathogen/Neisseria%20gonorrhoeae"
  console.log(neisseriaGonorrhoeae);
  const neisseriaGonorrhoeaeFilter = Object.keys(neisseriaGonorrhoeae).length; 
  console.log(neisseriaGonorrhoeaeFilter);



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
"Neisseria gonorrhoeae"
]

const aminoglycosides = url + "/antibiotic_class/Aminoglycosides"
  console.log(aminoglycosides);
const aminoglycosidesFilter = Object.keys(aminoglycosides).length; 
  console.log(aminoglycosidesFilter);

const antipseudomonalPenicillin = url + "/antibiotic_class/Anti-pseudomonal%20penicillin/Beta-Lactamase%20inhibitors"
  console.log(antipseudomonalPenicillin);
const antipseudomonalPenicillinFilter = Object.keys(antipseudomonalPenicillin).length; 
  console.log(antipseudomonalPenicillinFilter);

const betaLactam = url + "/antibiotic_class/Beta%20Lactam/Beta-lactamase%20inhibitors"
  console.log(betaLactam);
const betaLactamFilter = Object.keys(betaLactam).length; 
  console.log(betaLactamFilter);

const carbapenems = url + "/antibiotic_class/Carbapenems"
  console.log(carbapenems);
const carbapenemsFilter = Object.keys(carbapenems).length; 
  console.log(carbapenemsFilter);

const fluoroquinolones = url + "/antibiotic_class/Fluoroquinolones"
  console.log(fluoroquinolones);
const fluoroquinolonesFilter= Object.keys(fluoroquinolones).length; 
  console.log(fluoroquinolonesFilter);

const cephalosporins = url + "/antibiotic_class/Fourth-generation%20cephalosporins"
  console.log(cephalosporins);
const cephalosporinsFilter= Object.keys(cephalosporins).length; 
  console.log(cephalosporinsFilter);

const resistanceOneOrMore = url + "/antibiotic_class/Resistance%20to%20one%20or%20more%20antibiotics"
  console.log(resistanceOneOrMore);
const resistanceOneOrMoreFilter= Object.keys(resistanceOneOrMore).length; 
  console.log(resistanceOneOrMoreFilter); 

const cephalosporins3rdGen = url + "/antibiotic_class/Third-generation%20cephalosporins"
  console.log(cephalosporins3rdGen);
const cephalosporins3rdGenFilter= Object.keys(cephalosporins3rdGen).length; 
  console.log(cephalosporins3rdGenFilter);  

const aminopenicillin = url + "/antibiotic_class/Aminopenicillin"
  console.log(aminopenicillin);
const aminopenicillinFilter = Object.keys(aminopenicillin).length; 
  console.log(aminopenicillinFilter); 

const resistanceTB = url + "/antibiotic_class/Extensive%20drug%20resistance%20in%20TB"
  console.log(resistanceTB);
const resistanceTBFilter = Object.keys(resistanceTB).length; 
  console.log(resistanceTBFilter); 

const isoniazidResistance= url + "/antibiotic_class/Isoniazid%20mono-resistance"
  console.log(isoniazidResistance);
const isoniazidResistanceFilter = Object.keys(isoniazidResistance).length; 
  console.log(isoniazidResistanceFilter); 

const macrolide= url + "/antibiotic_class/Macrolide"
  console.log(macrolide);
const macrolideFilter = Object.keys(macrolide).length; 
  console.log(macrolideFilter);   

const methicillin = url + "/antibiotic_class/Methicillin"
  console.log(methicillin);
const methicillinFilter = Object.keys(methicillin).length; 
  console.log(methicillinFilter); 

const multiResistanceExcludingTB = url + "/antibiotic_class/Multi-drug%20resistance%20excluding%20extensive%20drug%20resistance%20in%20TB"
  console.log(multiResistanceExcludingTB);
const multiResistanceExcludingTBFilter = Object.keys(multiResistanceExcludingTB).length; 
  console.log(multiResistanceExcludingTBFilter);

const multiResistanceSamonella = url + "/antibiotic_class/Multi-drug%20resistance%20in%20Salmonella%20Typhi%20and%20Paratyphi"
  console.log(multiResistanceSamonella);
const multiResistanceSamonellaFilter = Object.keys(multiResistanceSamonella).length; 
  console.log(multiResistanceSamonellaFilter);

const penicillin = url + "/antibiotic_class/Penicillin"
  console.log(penicillin);
const penicillinFilter = Object.keys(penicillin).length; 
  console.log(penicillinFilter);  

const rifampicin = url + "/antibiotic_class/Rifampicin%20mono-resistance"
  console.log(rifampicin);
const rifampicinFilter = Object.keys(rifampicin).length; 
  console.log(rifampicinFilter); 

const trimethoprimSulfamethoxazole = url + "/antibiotic_class/Trimethoprim-Sulfamethoxazole"
  console.log(trimethoprimSulfamethoxazole);
const trimethoprimSulfamethoxazoleFilter = Object.keys(trimethoprimSulfamethoxazole).length; 
  console.log(trimethoprimSulfamethoxazoleFilter); 

const vancomycin = url + "/antibiotic_class/Vancomycin"
  console.log(vancomycin);
const vancomycinFilter = Object.keys(vancomycin).length; 
  console.log(vancomycinFilter);   

const antibioticClass = [
"Aminoglycosides",
  "Anti-pseudomonal penicillin/Beta-Lactamase inhibitors",
  "Beta Lactam/Beta-lactamase inhibitors",
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
  "Vancomycin"]

const regions = [
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

async function init() {
  const antiboticClasses = await d3.json(url + "/antibiotic_classes");
  console.log(antiboticClasses);
  
  const deathAttributed = []

}
const ctx = document.getElementById('myChart');
function init() {
  var dropDown = d3.select("#selDataset");
  d3.json(url).then(function(trace1) {
      var classesNames = trace1.names; 
      classesNames.forEach((antibioticClass)=> {
          dropDown.append("option").text(antibioticClass).property("value", antibioticClass)
      });
      var initSample = classesNames[0];
      buildCharts(initClass);
     
  });
};



let trace1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pathogens,
        datasets: [{
          label: "Number of Deaths by Pathogen",
          data: [acinetobacterBaumaniiFilter, citrobacterSppFilter, enterobacterSppFilter, enetrococcusFaecalisFilter, enterococcusFaeciumFilter, escherichiaColiFilter, 
            groupAStreptococcusFilter, groupBStreptococcusFilter, haemophilusInfluenzaeFilter, klebsiellaPneumoniaeFilter, morganellaSppFilter
            , mycobacteriumTuberculosisFilter, nonTyphoidalSalmonellaFilter, otherEnterococciFilter, proteusSppFilter, pseudomonasAeruginosaFilter,
             salmonellaParatyphiFilter, salmonellaTyphiFilter, serratiaSppFilter, shigellaSppFilter, staphylococcusAureusFilter, streptococcusPneumoniaeFilter,
              neisseriaGonorrhoeaeFilter],
          borderWidth: 1
        }],

      },
        
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  });