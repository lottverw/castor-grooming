import { collection, getDocs } from "firebase/firestore";
import { db } from "./../utils/firebase"

export default defineEventHandler(async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "contactInfo"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));        return contactData;
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: error?.message })
    }
})