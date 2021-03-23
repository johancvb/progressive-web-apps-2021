export async function fetchAllPlayersFromApi() {
    try {
        let allPlayers = [];
        
        for (let j = 1; j < 36; j++) {
            const response = await fetch(`https://free-nba.p.rapidapi.com/players?page=${j}&per_page=100`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
                        "x-rapidapi-host": "free-nba.p.rapidapi.com"
                    }
            });
            response.json().then(fetchedPlayers => {
                allPlayers.push(fetchedPlayers);
            })
            await sleep(50);
        }
        return allPlayers;
    } catch(error) {
        console.log(error);
    }
}