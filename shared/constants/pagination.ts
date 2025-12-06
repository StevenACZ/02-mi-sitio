/**
 * Pagination Configuration
 *
 * Centralized pagination constants used across the application.
 * Modify these values to change pagination behavior globally.
 */

export const PAGINATION = {
  /** Default number of items per page */
  DEFAULT_PAGE_SIZE: 20,

  /** Minimum allowed page size */
  MIN_PAGE_SIZE: 1,

  /** Maximum allowed page size (prevents abuse) */
  MAX_PAGE_SIZE: 100,

  /** Default starting page */
  DEFAULT_PAGE: 1,
} as const;

// Type for page size options (useful for dropdowns)
export type PageSizeOption = 5 | 8 | 10 | 20 | 50;

export const PAGE_SIZE_OPTIONS: PageSizeOption[] = [5, 8, 10, 20, 50];
