/** @type {import('next').NextConfig} */



const repo = 'liuning108.github.io'
const assetPrefix = `/`
const basePath = `/${repo}`

const nextConfig=()=>{
    return {
        output: 'export',
        assetPrefix: assetPrefix,
 basePath: basePath,
        images: { unoptimized: true }

    }
}

module.exports = nextConfig
