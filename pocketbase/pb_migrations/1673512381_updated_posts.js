migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bis30ujpgmuwk86")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "92qdy1n9",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bis30ujpgmuwk86")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "92qdy1n9",
    "name": "user",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
