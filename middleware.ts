import { authMiddleware } from '@clerk/nextjs'
export default authMiddleware({
  publicRoutes: ['/'],
  //debug: true,
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/chat', '/(api|trpc)(.*)'],
}
