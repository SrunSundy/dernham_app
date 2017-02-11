import { OpaqueToken } from "@angular/core";
// Although the AppConfig interface plays no role in dependency injection, 
// it supports typing of the configuration object within the class.
export interface AppConfig {
  baseUrl: string;
  apiKey: string;
}

// Configuration values for our app
export const SYS_CONFIG: AppConfig = {
  baseUrl: 'http://dernham.com/dernham_API/API',
  apiKey: "123456"
};

// Create a config token to avoid naming conflicts
export let APP_CONFIG = new OpaqueToken('app-config');