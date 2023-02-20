export const deleteDTB = async () => {
  const dbs = await window.indexedDB.databases();
  dbs.forEach((db) => {
    window.indexedDB.deleteDatabase(db.name);
  });
};
export function getContactById(db, id) {
  const txn = db.transaction('firebaseLocalStorage', 'readonly');
  const store = txn.objectStore('firebaseLocalStorageDb');

  let query = store.get(id);

  query.onsuccess = (event) => {
    if (!event.target.result) {
      console.log(`The contact with ${id} not found`);
    } else {
      console.table(event.target.result);
    }
  };

  query.onerror = (event) => {
    console.log(event.target.errorCode);
  };

  txn.oncomplete = function () {
    db.close();
  };
}
