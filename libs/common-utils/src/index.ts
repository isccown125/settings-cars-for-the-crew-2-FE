// Common utilities for The Crew 2 monorepo
// Shared helper functions

export const formatVehicleName = (name: string): string => {
  return name.trim().toUpperCase();
};

export const isValidVehicleId = (id: string): boolean => {
  return id !== null && id !== undefined && id.length > 0;
};

// Add more utility functions as needed
