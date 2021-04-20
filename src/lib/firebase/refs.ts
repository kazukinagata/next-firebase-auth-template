import { firestore } from ".";
import firebase from "firebase";
import { IModelPost } from "./schema";

type CollectionRef<
  T extends firebase.firestore.DocumentData
> = firebase.firestore.CollectionReference<T>;

export const postsRef = () =>
  firestore.collection("posts") as CollectionRef<IModelPost>;