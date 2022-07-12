import { db } from "../firebase";
import {
	collection,
	getDocs,
	doc,
	updateDoc,
	deleteDoc,
	addDoc,
} from "firebase/firestore";

async function fetchData() {
	let docs = [];
	const query = await getDocs(collection(db, "todos"));
	query.forEach((doc) => {
		docs.push({ id: doc.id, ...doc.data() });
	});
	return docs;
}

async function updateData(id, completed) {
	const docRef = doc(db, "todos", id);
	updateDoc(docRef, { completed: !completed });
}

async function deleteData(idx) {
	const docRef = doc(db, "todos", idx);
	deleteDoc(docRef);
}

async function addData(text) {
	addDoc(collection(db, "todos"), {
		text,
		completed: false,
	});
}

export { fetchData, updateData, deleteData, addData };
