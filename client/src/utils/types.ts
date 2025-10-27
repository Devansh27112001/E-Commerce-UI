import z from "zod";

export interface ProductDataType {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
}

export interface CategoryDataType {
  name: string;
  icon?: React.ReactNode;
  slug: string;
}

export interface StepDataType {
  title: string;
  id: number;
}

export interface CartItemDataType extends ProductDataType {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

// This is the schema
export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

// This type represents the shape of shipping form inputs
// It is inferred from the shippingFormSchema validation schema
export type shippingFormInputs = z.infer<typeof shippingFormSchema>;
