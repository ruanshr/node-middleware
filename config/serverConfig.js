module.exports = {
    port: 3300,
    proxy: {
        '/' : {
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '/blog/app' : '/blog-app',
                '/blog/api': '/blog-api'
            }
        }
    }
}