/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
  
    serverActions:true
  },
  images:{
    domains:["cdn.pixabay.com","lh3.googleusercontent.com"]
  },
}

module.exports = nextConfig
