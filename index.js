import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';

const firebaseConfig = {
    // Add config here 
}


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function export_collection(name){
    fs.appendFile(`${name}.json`, '[' + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
    const querySnapshot = await getDocs(collection(db, name));
    querySnapshot.forEach((doc) => {
        // append to [name].json
        fs.appendFile(`${name}.json`, JSON.stringify(doc.data()) + ",\n", function (err) {
            if (err) throw err;
            console.log('Saved!');
        })
    });
    fs.appendFile(`${name}.json`, ']', function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
}

let collections = [
    // Add collections here
]

for (let i = 0; i < collections.length; i++) {
    await export_collection(collections[i])
}
