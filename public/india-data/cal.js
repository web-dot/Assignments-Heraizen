
//state wise ground water

const xlabels = [];
const ytemps = [];

chartIt();

async function chartIt(){
    await groundWaterData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'cal_facility_upper_primary_schools___sections_2012_13',
            data: ytemps,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        //maintainAspectRatio: false,
    }
});
}



async function groundWaterData(){
const response = await fetch("https://api.data.gov.in/resource/8dde8fb6-ba5e-49c1-9618-4e6e61bcc69f?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10");
const data = await response.json();

//console.log(data["records"]);
const stateInfo = data["records"];
console.log(stateInfo);

stateInfo.forEach(state =>{
console.log(state.states_uts);
console.log(state.cal_facility_upper_primary_schools___sections_2012_13);
xlabels.push(state.states_uts);
ytemps.push(state.cal_facility_upper_primary_schools___sections_2012_13)
})
}