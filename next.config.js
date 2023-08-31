/** @type {import('next').NextConfig} */



const repo = 'liuning108.github.io'
const assetPrefix = `https://liuning108.github.io`
const basePath = `/`

const nextConfig=()=>{
    return {
        output: 'export',
        assetPrefix: assetPrefix,
        // basePath: basePath,
        images: { unoptimized: true }

    }
}

module.exports = nextConfig
