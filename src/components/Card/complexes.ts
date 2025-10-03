// complexes.ts

import type { Complexes, ComplexType } from "./types";

const API_URL = "https://test.smarto.agency/smarto_complexes_list.json";

export async function complexes(): Promise<Complexes> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Complexes = await response.json();
    return data;
  } catch (error) {
    console.error("Complexes loading error", error);
    throw error;
  }
}

export async function getComplexesType(): Promise<ComplexType[]> {
  const data = await complexes();
  const types = [...new Set(data.map((item) => item.type))];
  return types;
}
