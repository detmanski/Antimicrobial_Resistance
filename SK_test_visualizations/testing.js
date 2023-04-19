// Variable for the url
const baseUrl = "http://127.0.0.1:5000/"

const ctx = document.getElementById('myChart');

const year = 2010

async function init() {

        const spending = await d3.json(baseUrl + `/api/v1.0/spending/${year}`);

        console.log(spending)

        const regions = []
        const spending_data = []
        for (let i = 0; i < spending.length; i++) {
            regions.push(spending[i]['region'])
            spending_data.push(spending[i]["sum_health_spending_mil_USD"])
        }

        console.log(spending_data)

        new Chart(ctx, {
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
}
      
init()