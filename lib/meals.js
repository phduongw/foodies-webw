import sql from "better-sqlite3"

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((res) => setTimeout(res, 2000));

    // throw new Error("Loading meals failed")
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    // throw new Error("Loading meals failed")
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}