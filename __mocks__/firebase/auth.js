export const getAuth = () => ({
    signOut: () => Promise.resolve(),
});
export class GoogleAuthProvider {}
export const signInWithPopup = jest.fn(() => Promise.resolve());
