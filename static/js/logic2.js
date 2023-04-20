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
        
        Promise.all([url, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16,
        url17, url18, url19, url20, url21, url22, url23]).then(([datapoints, datapoints2, datapoints3, datapoints4, datapoints5,
        datapoints6, datapoints7, datapoints8, datapoints9, datapoints10, datapoints11, datapoints12, datapoints13, datapoints14,
        datapoints15, datapoints16, datapoints17, datapoints18, datapoints19, datapoints20, datapoints21, datapoints22, datapoints23]) => {
        console.log(datapoints, datapoints2, datapoints3,datapoints4, datapoints5,
            datapoints6, datapoints7, datapoints8, datapoints9, datapoints10, datapoints11, datapoints12, datapoints13, datapoints14,
            datapoints15, datapoints16, datapoints17, datapoints18, datapoints19, datapoints20, datapoints21, datapoints22, datapoints23); 
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
        console.log(acinetobacterBaumanii, citrobacterSpp, enterobacterSpp, enetrococcusFaecalis, enterococcusFaecium, escherichiaColi, 
            groupAStreptococcus, groupBStreptococcus, haemophilusInfluenzae, klebsiellaPneumoniae, morganellaSpp, mycobacteriumTuberculosis, 
            nonTyphoidalSalmonella, otherEnterococci, proteusSpp, pseudomonasAeruginosa, salmonellaParatyphi, salmonellaTyphi, serratiaSpp, shigellaSpp,
            staphylococcusAureus, streptococcusPneumoniae, neisseriaGonorrhoeae); 
        
   

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