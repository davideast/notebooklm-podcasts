"use client";

import styles from "./AuthButton.module.css"
import { firebaseApp } from "@/firebase"
import { getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signInAnonymously } from "firebase/auth"
import { useRouter } from 'next/navigation'

const auth = getAuth(firebaseApp)

export function AuthButton() {
  const router = useRouter()

  // onAuthStateChanged(auth, user => { console.log({ user }) })

  return (
    <button className={styles.button} onClick={() => {
      // signInWithRedirect(auth, new GoogleAuthProvider())
      signInAnonymously(auth).then(() => {
        router.push('/feed')
      })
    }}>
      <span>Start Listening</span>
      <i><img src="/arrow.svg" alt="arrow" /></i>
    </button>
  )
}
