export const config = {
  secrets: {
    jwt: 'roadmapdev'
  },
  dbUrl:
    process.env.MONGODB_URL_DEV ||
    process.env.MONGODB_URL ||
    'mongodb://127.0.0.1:27017/roadmap'
}
