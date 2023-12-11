// Team Members Data

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Barber",
    position: "Master Barber",
    imageUrl: "john.jpg",
    bio: "John has over 10 years of experience in the barbering industry and specializes in classic and modern haircuts.",
  },
  {
    id: 2,
    name: "Sarah Stylist",
    position: "Hair Stylist",
    imageUrl: "sarah.jpg",
    bio: "Sarah is a talented stylist who excels in creating unique and trendy hairstyles for both men and women.",
  },
  {
    id: 3,
    name: "Mike Clipper",
    position: "Clipper Expert",
    imageUrl: "mike.jpg",
    bio: "Mike is known for his precise clipper work and can give you the perfect fade or buzzcut.",
  },
  // Add more team members here as needed
];
export interface Service {
  id: number;
  name: string;
  kind: string;
  price: number;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Classic Haircut",
    kind: "HairCut",
    price: 20,
  },
  {
    id: 2,
    name: "Modern Haircut",
    kind: "HairCut",
    price: 20,
  },
  {
    id: 3,
    name: "Beard Trim",
    kind: "Shawecut",
    price: 20,
  },
  {
    id: 4,
    name: "Complete Shave",
    kind: "Shawecut",
    price: 20,
  },
  {
    id: 5,
    name: "Kids Haircut",
    kind: "HairCut",
    price: 20,
  },
  {
    id: 6,
    name: "Kids Beard Trim",
    kind: "Shawecut",
    price: 20,
  },
];
