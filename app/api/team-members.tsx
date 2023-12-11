// Define interfaces for your data models
interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Define TypeScript types for API responses
type ApiResponse<T> = {
  data: T;
  error?: string;
};

// API endpoints
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Base URL for the API

// Function to fetch team members
export async function getTeamMembers(): Promise<ApiResponse<TeamMember[]>> {
  try {
    const response = await fetch(`${API_URL}/team-members`);
    const data: TeamMember[] = await response.json();
    return { data };
  } catch (error: unknown) {
    return { data: [], error: error as string }; // Explicitly type error as a string
  }
}

// Function to fetch services
export async function getServices(): Promise<ApiResponse<Service[]>> {
  try {
    const response = await fetch(`${API_URL}/services`);
    const data: Service[] = await response.json();
    return { data };
  } catch (error: unknown) {
    return { data: [], error: error as string }; // Explicitly type error as a string
  }
}
