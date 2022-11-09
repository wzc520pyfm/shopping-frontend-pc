import { useApi } from "~~/composables/api";

export const test = async function () {
  return await useApi('/test');
};