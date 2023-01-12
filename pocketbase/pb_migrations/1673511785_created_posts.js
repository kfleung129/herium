migrate((db) => {
  const collection = new Collection({
    "id": "bis30ujpgmuwk86",
    "created": "2023-01-12 08:23:05.333Z",
    "updated": "2023-01-12 08:23:05.333Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rjl1s9e4",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rpvumzjq",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5tvuz0qq",
        "name": "category",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bis30ujpgmuwk86");

  return dao.deleteCollection(collection);
})
