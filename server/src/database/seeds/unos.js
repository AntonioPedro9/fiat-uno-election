exports.seed = function (knex) {
	return knex("unos").del().then(() => {
		return knex("unos").insert([
			{ id: 1, name: "Antigo", votes: 0 },
			{ id: 2, name: "Classico", votes: 0 },
			{ id: 3, name: "Turbo", votes: 0 },
			{ id: 4, name: "Novo", votes: 0 },
		]);
	});
};
