exports.up = function (knex) {
	return knex.schema.createTable("unos", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.integer("votes").notNullable().defaultTo(0);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("unos");
};
