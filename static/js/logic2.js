function updateChart() {
     {
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
        const url23 = fetch('http://127.0.0.1:5000/api/v1.0/amr/pathogen/Neisseria gonorrhoeae').then(response => response.json());
        const url24 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Aminoglycosides').then(response => response.json());
        const url25 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Anti-pseudomonal penicillin Beta-Lactamase inhibitors').then(response => response.json());
        const url26 = fetch('http://127.0.0.1:5000/api/v1.0/amr/antibiotic_class/Beta Lactam Beta-lactamase inhibitors').then(response => response.json());
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
        
        Promise.all([url, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16,
        url17, url18, url19, url20, url21, url22, url23, url24, url25, url26, url27, url28, url29, url30, url31, url32, url33, 
        url34, url35, url36, url37, url38, url39, url40, url41, url42]).then(([datapoints, datapoints2, datapoints3, datapoints4, datapoints5,
        datapoints6, datapoints7, datapoints8, datapoints9, datapoints10, datapoints11, datapoints12, datapoints13, datapoints14,
        datapoints15, datapoints16, datapoints17, datapoints18, datapoints19, datapoints20, datapoints21, datapoints22, datapoints23,
        datapoints24, datapoints25, datapoints26, datapoints27, datapoints28, datapoints29, datapoints30, datapoints31, datapoints32,
        datapoints33, datapoints34, datapoints35, datapoints36, datapoints37, datapoints38, datapoints39, datapoints40, datapoints41,
        datapoints42]) => {
        console.log(datapoints, datapoints2, datapoints3,datapoints4, datapoints5,
            datapoints6, datapoints7, datapoints8, datapoints9, datapoints10, datapoints11, datapoints12, datapoints13, datapoints14,
            datapoints15, datapoints16, datapoints17, datapoints18, datapoints19, datapoints20, datapoints21, datapoints22, datapoints23,
            datapoints24, datapoints25, datapoints26, datapoints27, datapoints28, datapoints29, datapoints30, datapoints31, datapoints32, datapoints33,
            datapoints34, datapoints35, datapoints36, datapoints37, datapoints38, datapoints39, datapoints40, datapoints41); 
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
        const neisseriaGonorrhoeae = Object.keys(datapoints23).length;
        const aminoglycosides = Object.keys(datapoints24).length;
        const antipseudomonalPenicillin = Object.keys(datapoints25).length;
        const betaLactam = Object.keys(datapoints26).length;
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
        console.log(acinetobacterBaumanii, citrobacterSpp, enterobacterSpp, enetrococcusFaecalis, enterococcusFaecium, escherichiaColi, 
            groupAStreptococcus, groupBStreptococcus, haemophilusInfluenzae, klebsiellaPneumoniae, morganellaSpp, mycobacteriumTuberculosis, 
            nonTyphoidalSalmonella, otherEnterococci, proteusSpp, pseudomonasAeruginosa, salmonellaParatyphi, salmonellaTyphi, serratiaSpp, shigellaSpp,
            staphylococcusAureus, streptococcusPneumoniae, neisseriaGonorrhoeae, aminoglycosides, antipseudomonalPenicillin, betaLactam, carbapenems,
            fluoroquinolones, cephalosporins, resistanceOneOrMore, cephalosporins3rdGen, aminopenicillin, resistanceTB,isoniazidResistance, macrolide,
            methicillin, multiResistanceExcludingTB, multiResistanceSamonella, penicillin, rifampicin, trimethoprimSulfamethoxazole, vancomycin); 
        
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
        const ctx = document.getElementById('myChart');
        let trace1 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: pathogens,
              datasets: [{
                label: "Number of Deaths by Pathogen",
                data: [acinetobacterBaumanii, citrobacterSpp, enterobacterSpp, enetrococcusFaecalis, enterococcusFaecium, escherichiaColi, 
                    groupAStreptococcus, groupBStreptococcus, haemophilusInfluenzae, klebsiellaPneumoniae, morganellaSpp, mycobacteriumTuberculosis, 
                    nonTyphoidalSalmonella, otherEnterococci, proteusSpp, pseudomonasAeruginosa, salmonellaParatyphi, salmonellaTyphi, serratiaSpp, shigellaSpp,
                    staphylococcusAureus, streptococcusPneumoniae, neisseriaGonorrhoeae],
                borderWidth: 1
              }],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }});
    })
};

};