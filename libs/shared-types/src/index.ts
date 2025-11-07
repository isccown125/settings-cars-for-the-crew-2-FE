// Shared TypeScript types for The Crew 2 settings
// Example types - to be implemented

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  settings?: VehicleSettings;
}

export enum VehicleCategory {
  STREET = 'STREET',
  DRIFT = 'DRIFT',
  RACE = 'RACE',
  OFFROAD = 'OFFROAD',
  TOURING = 'TOURING',
  DRAG = 'DRAG',
  RALLY = 'RALLY',
  MONSTER = 'MONSTER',
  ALPHA = 'ALPHA'
}

export interface VehicleSettings {
  suspension?: number;
  brakes?: number;
  tires?: number;
  gearbox?: number;
  engine?: number;
  // Add more settings as needed
}

export interface User {
  id: string;
  username: string;
  vehicles?: Vehicle[];
}
