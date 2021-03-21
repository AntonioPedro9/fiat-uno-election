exports.seed = function (knex) {
	return knex("unos").del().then(() => {
		return knex("unos").insert([
			{ id: 1, name: "Antigo", description: "Nasce uma lenda", votes: 0 },
			{ id: 2, name: "Classico", description: "O melhor melhorado", votes: 0 },
			{ id: 3, name: "Turbo", description: "Lenda versão turbo", votes: 0 },
			{ id: 4, name: "Novo", description: "Há controvérsias", votes: 0 },
		]);
	});
};
