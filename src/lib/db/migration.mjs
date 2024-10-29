import { db } from './index.js'
import { sql } from 'drizzle-orm'; // Import the sql function from Drizzle ORM

async function createFeedbacksTable() {
    const createTableQuery = sql`
        CREATE TABLE IF NOT EXISTS feedbacks (
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(256) NOT NULL,
            username VARCHAR(256) NOT NULL,
            profile_img VARCHAR(256),
            content TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
    `;

    await db.execute(createTableQuery);
}

// Call the function to create the table
createFeedbacksTable()
    .then(() => {
        console.log("Feedbacks table created successfully.");
    })
    .catch((error) => {
        console.error("Error creating feedbacks table:", error);
    });
