const connection = require("../database/connection");

module.exports = {

	async index(request, response) {
		const unos = await connection("unos").select("*");

		return response.json(unos);
	},

	async vote(request, response) {
		const { id } = request.params;

		await connection("unos").where("id", id).increment("votes", 1);

		return response.json({ message: "Vote counted" });
	},

};