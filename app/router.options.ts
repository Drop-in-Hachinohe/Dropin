import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
    routes: (_routes) => {
        let routesDirectory: any = null;
        const { ssrContext } = useNuxtApp();

        // check for subdomain in the url on the server
        if (process.server && ssrContext && ssrContext.event.node.req) {
            const req = ssrContext.event.node.req
            const subdomainConcat = req.headers.host?.split('.').concat() as string[]
            const subdomain = subdomainConcat.slice(0, subdomainConcat.length - 2).join('.')
            if (subdomain !== 'guest-house' && subdomain !== 'stg.guest-house') {
                routesDirectory = 'space'
            } else {
                routesDirectory = 'guest-house'
            }

        }

        // check for subdomain in the url on the client
        if (process.client && window.location.hostname) {
            const subdomainConcat = window.location.hostname.split('.').concat()
            const subdomain = subdomainConcat.slice(0, subdomainConcat.length - 2).join('.')
            if (subdomain !== 'guest-house' && subdomain !== 'stg.guest-house') {
                routesDirectory = 'space'
            } else {
                routesDirectory = 'guest-house'
            }
        }

        // function to clear a directory not in use
        function isUnderDirectory (route: any, directory: any) {
            const path = route.path
            return path === '/' + directory || path.startsWith('/' + directory + '/')
        }

        let newRoutes = _routes

        if (routesDirectory) {
            // filter routes
            newRoutes = _routes.filter((route: any) => {
                const toRemove = routesDirectory === 'guest-house' ? 'space' : 'guest-house'
                return !isUnderDirectory(route, toRemove)
            }).map((route: any) => {
                if (isUnderDirectory(route, 'guest-house')) {
                    return {
                        ...route,
                        path: route.path.replace('/guest-house', '/'),
                        name: route.name || 'index'
                    }
                } else if (isUnderDirectory(route, 'space')) {
                    return {
                        ...route,
                        path: route.path.substr(routesDirectory.length + 1) || '/',
                        name: route.name || 'index'
                    }
                }
            })

        return newRoutes
        }

    }
}