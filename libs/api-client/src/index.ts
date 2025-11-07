// API Client for The Crew 2 backend
// To be implemented when backend is integrated

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Example methods - to be implemented
  async getVehicles() {
    // TODO: Implement
    return [];
  }

  async getVehicleById(id: string) {
    // TODO: Implement
    return null;
  }

  async saveVehicleSettings(vehicleId: string, settings: any) {
    // TODO: Implement
    return null;
  }
}

export const apiClient = new ApiClient(process.env.REACT_APP_API_URL || 'http://localhost:3001');
