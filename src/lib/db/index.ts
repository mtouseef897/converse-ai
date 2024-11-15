import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
neonConfig.fetchConnectionCache =true

if(!process.env.NEXT_PUBLIC_DATABASE_URL) { 

    throw new Error('data base url not found')
}

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL)

export const db = drizzle(sql);