import { firebase, firestore } from './FirebaseConfig';

export const signUp = async (username, email, password) => {
  try {
    // Create user with email and password
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Attempt to store additional user data in Firestore
    try {
      await firestore.collection('users').doc(user.uid).set({
        username: username,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (firestoreError) {
      console.error("Error adding user to Firestore: ", firestoreError);
      throw new Error("Failed to store user information. Please try again later.");
    }

    return user;
  } catch (error) {
    let errorMessage = "An error occurred during signup";
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = "This email is already registered";
        break;
      case 'auth/invalid-email':
        errorMessage = "Please enter a valid email address";
        break;
      case 'auth/weak-password':
        errorMessage = "Password should be at least 6 characters";
        break;
      default:
        errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const doc = await firestore.collection('users').doc(userId).get();
    return doc.exists ? doc.data() : null;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw error;
  }
};