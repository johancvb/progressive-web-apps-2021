export async function getPlayers(teamId) {

    allFetchedPlayers.forEach(fetchedPlayers => {
        for (const playerFetchedTeam of fetchedPlayers.data) {
            if (playerFetchedTeam.team.id === Number(teamId)) {
                if (playerFetchedTeam.height_feet === null || playerFetchedTeam.height_inches === null ||
                    playerFetchedTeam.position === null || playerFetchedTeam.weight_pounds === null) {

                    players.insertAdjacentHTML('beforeend',
                        `
                    <details>
                        <summary>
                            <h1>${playerFetchedTeam.first_name} ${playerFetchedTeam.last_name}</h1>
                        </summary>
                            <h2>Height: ${playerFetchedTeam.height_feet}'${playerFetchedTeam.height_inches}</h2>
                            <h2>Position: ${playerFetchedTeam.position}</h2>
                            <h2>Weight: ${playerFetchedTeam.weight_pounds} pounds</h2>
                    </details>
                `
                    )
                }
                playersArr.push(playerFetchedTeam)

            }

        }
    })
};