import { extract_ingredients } from '../../lib/ingredients.js';
import { recipes } from '../../lib/recipes.js';

/** @type {import('./$types.js').PageServerLoad} */
export async function load() {
	return {
		ingredients: extract_ingredients(recipes),
	};
}
