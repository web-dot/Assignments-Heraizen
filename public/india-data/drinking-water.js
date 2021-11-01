
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
            label: 'State-wise Percentage of Schools having Drinking Water Facility',
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
const response = await fetch("https://api.data.gov.in/resource/fe39af67-f231-4f83-bb4a-e9a5ecb29e33?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10");
const data = await response.json();

//console.log(data["records"]);
const stateInfo = data["records"];
console.log(stateInfo);

stateInfo.forEach(state =>{
console.log(state.state_ut);
console.log(state.all_schools_2010_11);
xlabels.push(state.state_ut);
ytemps.push(state.all_schools_2010_11)
})
}