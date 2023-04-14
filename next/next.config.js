module.exports = {
    transpilePackages: ['@package/bug'],
    experimental:{
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"]
    },
    reactStrictMode: process.env.NODE_ENV === "development" ? false : true
}