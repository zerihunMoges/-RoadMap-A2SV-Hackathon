export const config = {
  secrets: {
    jwt: 'roadmapdev'
  },
  dbUrl:
    process.env.MONGODB_URL_DEV ||
    process.env.MONGODB_URL ||
    'mongodb://localhost:27017/roadmap'
}
