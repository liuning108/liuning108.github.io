/** @type {import('next').NextConfig} */



const repo = 'liuning108.github.io'
const assetPrefix = `/`
const basePath = `/${repo}`

const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    // basePath: basePath,
}

module.exports = nextConfig
