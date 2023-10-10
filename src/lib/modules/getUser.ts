import config from './config'

export default async function getDiscordUser(userID: string) {
	const urlBased = `https://discordapp.com/api/v9/users/${userID}`
	const fetchData = await fetch(urlBased, {
		method: 'GET',
		headers: new Headers({
			Authorization: `Bot ${config.TOKEN}`
		})
	})

	const parse = await fetchData.json()

	return parse
}
