import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'


const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [roadMaps, setRoadMaps] = useState([])
  const [loading, setLoading] = useState(true)
//   const [allUsers, setUsers] = useState([])

  useEffect(()=>{
    async () => {
      const res = (await fetch(`http://localhost:3000/api/v1/roadmaps`))
      const roadmaps = await res.json()
      setRoadMaps(roadmaps.data)
    }

  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

//   const getUsers = () => {
//     getUsers(auth, 10)
//    .then((result) => {
//     // The listUsers() method returns a UserRecord[]
//     const users = result.users;

//     // Loop through the array of UserRecord objects
//     users.forEach((user) => {
//       console.log(user.uid); // Log the user ID
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching users:", error);
//   });

//   };


  return (
    <AuthContext.Provider value={{ user, login, signup, logout, roadMaps, setRoadMaps}}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}