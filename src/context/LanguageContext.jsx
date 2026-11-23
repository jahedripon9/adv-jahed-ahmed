import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

/**
 * Supported language codes.
 */
export const SUPPORTED_LANGUAGES = ['en', 'bn'];

/**
 * Default fallback language.
 */
export const DEFAULT_LANGUAGE = 'en';

/**
 * Storage key for language preference persistence.
 */
export const LANGUAGE_STORAGE_KEY = 'adv_jahed_lang';

/**
 * React Context for language state.
 */
const LanguageContext = createContext(undefined);

/**
 * Validates whether a provided language code is supported.
 *
 * @param {string} lang
 * @returns {boolean}
 */
export function isValidLanguage(lang) {
  return typeof lang === 'string' && SUPPORTED_LANGUAGES.includes(lang);
}

/**
 * Reads the initially saved language from localStorage safely,
 * defaulting to English ('en') if absent or invalid.
 *
 * @returns {string}
 */
function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isValidLanguage(saved)) {
      return saved;
    }
  } catch (error) {
    console.warn('Unable to access localStorage for language preference:', error);
  }
  return DEFAULT_LANGUAGE;
}

/**
 * LanguageProvider Component.
 * Wraps application components and provides language state, persistence,
 * and HTML lang attribute synchronization.
 */
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  // Synchronize document.documentElement.lang with the current language
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Set language with validation and localStorage persistence
  const setLanguage = useCallback((newLang) => {
    if (!isValidLanguage(newLang)) {
      console.warn(
        `Unsupported language "${newLang}". Supported options: ${SUPPORTED_LANGUAGES.join(', ')}`
      );
      return;
    }

    setLanguageState(newLang);

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    } catch (error) {
      console.warn('Unable to persist language preference to localStorage:', error);
    }
  }, []);

  const value = {
    language,
    setLanguage,
    isBengali: language === 'bn',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to access language context.
 *
 * @returns {{ language: string, setLanguage: (lang: string) => void, isBengali: boolean }}
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
