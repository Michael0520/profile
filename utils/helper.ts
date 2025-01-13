import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function makeFirstCharUpper(val: string) {
  if (val === "") return val
  const firstChar = val.at(0)?.toLocaleUpperCase() || ""
  const otherChar = val.slice(1)
  return firstChar + otherChar
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
