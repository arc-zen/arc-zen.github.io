// scripts/build-menu.js
import { writeFileSync } from "node:fs";

const URL = process.env.MENU_URL;
const API_KEY = process.env.MENU_API_KEY; // optional, only if the endpoint needs one

function toText(meals) {
  const lines = [];
  for (const meal of meals) {
    lines.push(meal.name.toUpperCase());
    for (const group of meal.groups) {
      lines.push(`  ${group.name}`);
      for (const item of group.items) {
        if (item.formalName === "Have a Nice Day") continue;
        const tag = item.isVegan ? " [vegan]" : item.isVegetarian ? " [veg]" : "";
        const cal = item.calories ? ` (${item.calories} cal)` : "";
        lines.push(`    - ${item.formalName}${tag}${cal}`);
      }
    }
    lines.push("");
  }
  return lines.join("\n");
}

const headers = API_KEY ? { "API-Key": API_KEY } : {};
const res = await fetch(URL, { headers });
if (!res.ok) throw new Error(`HTTP ${res.status}`);

const meals = await res.json();
if (!Array.isArray(meals) || meals.length === 0) {
  // Don't overwrite a good menu with an empty or broken response
  throw new Error("Unexpected or empty response; keeping the previous menu.txt");
}

const stamp = new Date().toLocaleString("en-US", { timeZone: "Pacific/Honolulu" });
writeFileSync("menu.txt", `Updated ${stamp} HST\n\n${toText(meals)}`);
console.log("Wrote menu.txt");