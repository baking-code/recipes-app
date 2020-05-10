import React from "react";

const FirebaseContext = React.createContext({});
export default FirebaseContext;

export const useFirebase = (Wrapped: any) => (props: object) => (
  <FirebaseContext.Consumer>
    {(firebase: object) => <Wrapped {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

interface firebaseFunc {
  (val: string): Promise<any>;
}
export interface FirebaseTypes {
  once: firebaseFunc;
}
