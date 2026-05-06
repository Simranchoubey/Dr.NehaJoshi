import { MongoClient } from 'mongodb'

let cached = global._mongoClient
if(!cached) cached = global._mongoClient = { conn: null }

export default async function connectToDb(){
  if(cached.conn) return cached.conn
  const uri = process.env.MONGODB_URI
  if(!uri) throw new Error('Please define the MONGODB_URI environment variable')
  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(process.env.MONGODB_DB || 'clinic')
  cached.conn = db
  return db
}
