import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as z from "zod";

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scientificNumber = z
.string({required_error: "Debe ingresar un valor"})
.refine(value => {
  // Use a regular expression to check if the input is in scientific notation
  return /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(value);
}, {
  message: 'Ingrese un número válido en notación decimal o científica (e.g., "23e+2").',
});
