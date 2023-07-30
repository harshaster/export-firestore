A script to export data from firebase firestore into JSON files.

### How to use?

- Clone this repo.
- Open terminal in this folder.
- Run `npm install`.
- Go to `index.js`.
- Paste your firebase config into the variable `firebaseConfig`.
- Enter name of your collections that you want to export into the variable `collections`.
- Run `npm start`.
- You will have your JSON files with the names of your collections.

**There is a small bug**: There is an extra comma in the last object of collection. So the last second line will have a comma which will make whole JSON file invalid. Remove that from each file before using JSON files.

Thanks !!