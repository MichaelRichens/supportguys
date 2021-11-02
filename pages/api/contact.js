import postData from "../../functions/postData"

export default async function (req, res) {
	return new Promise((resolve, reject) => {
		postData(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.token}`
		)
			.then((googleResponse) => {
				if (googleResponse.success) {
					postData(process.env.MAIL_URL, {
						token: process.env.TOKEN_MAIL,
						data: req.body
					})
						.then((data) => {
							if (data.val == "1") {
								res.status(200).send()
								return resolve()
							} else {
								res.status(500).end()
								return resolve()
							}
						})
						.catch((error) => {
							res.status(500).end()
							return resolve()
						})
				} else {
					res.status(401).end()
					return resolve()
				}
			})
			.catch((error) => {
				res.status(500).end()
				return resolve()
			})
	})
}
