import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Direction = 'ltr' | 'rtl';

interface DirectionState {
  direction: Direction;
  rtlEnabled: boolean;
  language: string;
  
  setDirection: (direction: Direction) => void;
  toggleDirection: () => void;
  setLanguage: (language: string) => void;
}

export const useDirectionStore = create<DirectionState>()(
  persist(
    (set, get) => ({
      direction: (import.meta.env.VITE_DEFAULT_LANGUAGE === 'ar' ? 'rtl' : 'ltr') as Direction,
      rtlEnabled: import.meta.env.VITE_RTL_ENABLED === 'true',
      language: import.meta.env.VITE_DEFAULT_LANGUAGE || 'en',

      setDirection: (direction) => {
        set({ direction, rtlEnabled: direction === 'rtl' });
      },

      toggleDirection: () => {
        const currentDirection = get().direction;
        const newDirection: Direction = currentDirection === 'ltr' ? 'rtl' : 'ltr';
        set({ direction: newDirection, rtlEnabled: newDirection === 'rtl' });
      },

      setLanguage: (language) => {
        const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
        set({ language, direction, rtlEnabled: direction === 'rtl' });
      },
    }),
    {
      name: 'direction-storage',
    }
  )
);
