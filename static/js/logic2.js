function updateChart() {
    async function fetchData () {
        const url = 'http://127.0.0.1:5000/api/v1.0/amr/pathogen/Acinetobacter%20baumannii';
        const response = await fetch(url);
        const datapoints = await response.json(url);
        console.log(datapoints);
        return datapoints
    };

    fetchData().then(datapoints => {
        const acinetobacterBaumanii = Object.keys(datapoints).length;
        console.log(acinetobacterBaumanii);
   

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
                data: [acinetobacterBaumanii],
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
    })
});

}
   