import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFirstLetters(inputString: string): string {
  // Split the string into an array of words
  const words: string[] = inputString.split(" ");

  // Initialize an empty string to store the first letters
  let firstLetters: string = "";

  // Iterate over each word in the array
  words.forEach(function(word) {
      // Append the uppercase first character of each word to the firstLetters string
      firstLetters += word.charAt(0).toUpperCase();
  });

  // Return the resulting string containing the uppercase first letters of each word
  return firstLetters;
}