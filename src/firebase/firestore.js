import firebasedb from '@/firebase/firebasedb';
import { getFirestore } from 'firebase/firestore';

const fireStore = getFirestore(firebasedb.firebaseApp);
export default fireStore;