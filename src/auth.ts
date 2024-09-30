import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
 
export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [
      GitHub({
        clientId: 'Ov23lisUVyxAf977ObrY',
        clientSecret: '85ce8985f037b6444fbb49a21b16485b6108fb25'
      })
    ],
    secret: 'qwer1234',
    trustHost: true
  }
  return authOptions
})