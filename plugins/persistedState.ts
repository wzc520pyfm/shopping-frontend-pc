import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt';
import { defineNuxtPlugin, useCookie } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  // 七天后的时间
  const date = new Date();
  date.setDate(date.getDate() + 7);

  nuxtApp.$pinia.use(
    createNuxtPersistedState(useCookie, {
      cookieOptions: {
        expires: date,
        maxAge: 3600 * 24 * 7,
        sameSite: 'strict',
      }
    })
  )
})