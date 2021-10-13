//copied from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = "", data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json"
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	})
	return response.json() // parses JSON response into native JavaScript objects
}

export default function (req, res) {
	return new Promise((resolve, reject) => {
		postData("https://www.macupgrades.co.uk/store/fakemail.php", {
			token: process.env.TOKEN_MAIL,
			data: req.body
		})
			.then((data) => {
				if (data.val == "1") {
					res.status(200).send()
					resolve()
				} else {
					res.status(500).end()
					return resolve()
				}
			})
			.catch((error) => {
				res.status(500).end()
				return resolve()
			})
	})
}
