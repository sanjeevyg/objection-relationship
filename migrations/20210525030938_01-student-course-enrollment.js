exports.up = async knex => {
    await knex.schema.createTable("student", table => {
        table.increments("id")
        table.string("name")
    })
    
    await knex.schema.createTable("course", table => {
        // table.increments("id")
        // table.string("title")
    })
  
    await knex.schema.createTable("enrollment", table => {
        table.integer("student_id").references("id").inTable("student")
        table.integer("course_id").references("id").inTable("course")
    })
  
  };
  
  
  exports.down = async knex => {
      await knex.schema.dropTableIfExists("enrollment")
      await knex.schema.dropTableIfExists("course")
      await knex.schema.dropTableIfExists("student")
    
  };
  