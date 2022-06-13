// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	NextOrObserver,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

import { Category } from '../../store/category/category.types';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBedyAnSBueV-Q5ToOBjaP8v9HMuNafnAI',
	authDomain: 'crown-clothing-db-8a3a3.firebaseapp.com',
	projectId: 'crown-clothing-db-8a3a3',
	storageBucket: 'crown-clothing-db-8a3a3.appspot.com',
	messagingSenderId: '400074190320',
	appId: '1:400074190320:web:23d26a4b897a71b5ea4135',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
	title: string;
};
//batch adding data
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(collectionKey: string, objectsToAdd: T[]): Promise<void> => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		//checking the referance value of the database
		//if the ref not found firebase will automatically create the feild
		const docRef = doc(collectionRef, object.title.toLowerCase());
		//adding the data to the relevent docRef ex Hats
		batch.set(docRef, object);
	});
	await batch.commit();
	console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	const querySnapShop = await getDocs(q);
	return querySnapShop.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

export type AdditionalInformation = {
	displayName?: string;
};
export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};
export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapShot = await getDoc(userDocRef);
	//check if userdata exists
	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return userDocRef as QueryDocumentSnapshot<UserData>;
	//if userdata doesnt exist create
	//return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	if (!email || !password) return;
	const createdUser = await createUserWithEmailAndPassword(auth, email, password);
	return createdUser;
};

export const signInWithGoogleEmailAndPassword = async (email: string, password: string) => {
	console.log({ auth });
	await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => {
	await signOut(auth);
};
export const onAuthStateChangeListner = async (callback: NextOrObserver<User>) => {
	return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
