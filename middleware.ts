import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: ['/anyone-can-visit-this-route'],
    // Routes that can always be accessed, and have
    // no authentication information
    ignoredRoutes: [
        '/no-auth-in-this-route',
        '/category/9180a603-4706-43b4-848f-082b3a03d54c' // Adding the specific category route to be ignored by auth
    ],
});

export const config = {
    // Protects all routes, including api/trpc.
    // See https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about configuring your Middleware
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
