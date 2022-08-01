import {
	getFirestore, collection, onSnapshot,
	addDoc, deleteDoc, doc,
	query, where,
	orderBy, serverTimestamp,
	updateDoc
} from 'firebase/firestore';
import { collectionRef, getDoc } from './index';

export interface User {
	id: string;
	fullname: string;
	password: string;
	description: string;
}

export function getData() {
	return new Promise((resolve, reject) => {
		const data: User[] = [];
		const q = query(collectionRef);
		onSnapshot(q, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				data.push({...doc.data(), id: doc.id} as User);
			});
			resolve(data);
		});
	});
}

export function insertData(data: User) {
	return new Promise((resolve, reject) => {
		addDoc(collectionRef, data)
			.then(() => {
				resolve(true);
			})
	});
}

export function deleteData(id: string) {
	return new Promise((resolve, reject) => {
		deleteDoc(getDoc(id))
			.then(() => {
				resolve(true);
			})
	});
}