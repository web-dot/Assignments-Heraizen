
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
                    label: 'annual_extractable_ground_water_resource',
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
        const response = await fetch("https://api.data.gov.in/resource/b73ec4ba-4e11-4d80-b4ac-8c1568ff266d?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10");
        const data = await response.json();
        const stateInfo = data["records"];
        console.log(stateInfo);
        stateInfo.forEach(state =>{
        console.log(state.states_union_territories);
        console.log(state.annual_extractable_ground_water_resource);
        xlabels.push(state.states_union_territories);
        ytemps.push(state.annual_extractable_ground_water_resource)
        })
    }