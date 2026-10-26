// scripts/build-menu.js
import { writeFileSync } from "node:fs";

// const BASE_URL = process.env.MENU_URL;             // endpoint without the date
// const API_KEY = process.env.MENU_API_KEY;        // optional
const BASE_URL = "https://api-prd.sodexomyway.net/v0.2/data/menu/10230007/1411020";             // endpoint without the date
const API_KEY = `68717828-b754-420d-9488-4c37cb7d7ef7`;        // optional

// Today's date in Hawaii time, formatted YYYY-MM-DD
const today = new Date().toLocaleDateString("en-CA", { timeZone: "Pacific/Honolulu" });

const url = new URL(BASE_URL);
url.searchParams.set("date", today);

function toText(meals) {
    const lines = [];
    for (const meal of meals) {
        lines.push(meal.name.toUpperCase());
        for (const group of meal.groups) {
            lines.push(`    ${group.name}`);
            for (const item of group.items) {
                if (item.formalName === "Have a Nice Day") continue;
                const tag = item.isVegan ? " [vegan]" : item.isVegetarian ? " [veg]" : "";
                const cal = item.calories ? ` (${item.calories} cal)` : "";
                lines.push(`        - ${item.formalName}${tag}${cal}`);
            }
        }
        lines.push("");
    }
    return lines.join("\n");
}

const headers = API_KEY ? { "Api-Key": API_KEY } : {};
console.log(`fetching... ${url.toString()}`);
const res = await fetch(url, { headers });
if (!res.ok) throw new Error(`HTTP ${res.status} from ${url.origin}`);

const meals = await res.json();
if (!Array.isArray(meals) || meals.length === 0) {
    // Keep the previous menu.txt rather than overwrite it with nothing
    throw new Error("Unexpected or empty response; keeping the previous menu.txt");
}

const stamp = new Date().toLocaleString("en-US", { timeZone: "Pacific/Honolulu" });
writeFileSync("menu.txt", `Menu for ${today}\nUpdated ${stamp} HST\n\n${toText(meals)}`);
console.log(`Wrote menu.txt for ${today}`);