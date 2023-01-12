migrate((db) => {
  const collection = new Collection({
    "id": "3109zxjn6zufmjm",
    "created": "2023-01-12 05:59:48.110Z",
    "updated": "2023-01-12 05:59:48.110Z",
    "name": "menu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p8k2ww94",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bghks7ce",
        "name": "path",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3109zxjn6zufmjm");

  return dao.deleteCollection(collection);
})
