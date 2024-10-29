import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/', '/api/create-chat'], // Add '/api/create-chat' to public routes if you don't want auth here
});


export const config = {
  matcher: [
    /*
     * Protect all routes unless explicitly public
     * Ensure that `_next/static` and similar Next.js internal routes are skipped
     */
    '/((?!_next|.*\\.(?:html|css|js|json|jpg|jpeg|png|gif|svg|ico|woff2)).*)',
    '/(api|trpc)(.*)', // Always run for API routes
  ],
};


