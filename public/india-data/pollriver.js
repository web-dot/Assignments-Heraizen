
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
            label: 'number',
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
const response = await fetch("https://api.data.gov.in/resource/2ade6be0-909a-42ca-945a-7d24498615ad?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=30");
const data = await response.json();

//console.log(data["records"]);
const stateInfo = data["records"];
console.log(stateInfo);

stateInfo.forEach(state =>{
console.log(state.name_of_state_);
console.log(state.number);
xlabels.push(state.name_of_state_);
ytemps.push(state.number)
})
}