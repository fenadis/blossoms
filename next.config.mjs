/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repo = process.env.GITHUB_REPOSITORY?.split("/")?.[1]
const isUserOrOrgPages = Boolean(repo && repo.endsWith(".github.io"))

const inferredBasePath = isGithubActions && repo && !isUserOrOrgPages ? `/${repo}` : ""
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath

const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
