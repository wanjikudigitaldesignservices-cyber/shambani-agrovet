// src/lib/ui-store.ts — UI state (non-persistent)
import { create } from "zustand";
import type { Locale } from "../config/constants";

interface UIState {
  // Mobile menu
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Search
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Language
  locale: Locale;
  setLocale: (locale: Locale) => void;

  // Announcement bar
  announcementDismissed: boolean;
  dismissAnnouncement: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

  searchOpen: false,
  setSearchOpen: (open) => set({ searchOpen: open }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  locale: "en",
  setLocale: (locale) => set({ locale }),

  announcementDismissed: false,
  dismissAnnouncement: () => set({ announcementDismissed: true }),
}));
