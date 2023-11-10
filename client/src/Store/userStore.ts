import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type userStoreType } from './types'
export const userStore = create<userStoreType>()(
  devtools(
    persist(
      (set) => ({
        userLogin: undefined,
        register: (newUser) => {
          set((state) => ({
            ...state,
            userLogin: newUser,
          }))
        },
      }),
      { name: 'food-storage' },
    ),
  ),
)
