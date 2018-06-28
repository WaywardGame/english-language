/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */

import { SkillType as Skill } from "Enums";

let skills: any;
export default skills = {
	// autosort
	[Skill.Anatomy]: ["Anatomy", "<li>Increases accuracy of creature health, resistance, and vulnerability descriptions.</li><li>Decreases chance of bleeding, poisoning, and burning pain from creatures.</li><li>Increases effectiveness of healing consumables.</li><li>Increases success chance when healing.</li><li>Decreases chance of bleeding when using bare hands during combat/gathering.</li><li>Increases the amount of resources carved at a time.</li>"],
	[Skill.Bartering]: ["Bartering", "<li>Influences the amount of barter credit received when trading items.</li>"],
	[Skill.Blacksmithing]: ["Blacksmithing", "<li>Influences quality, repair, and success rate of crafted items using metal.</li>"],
	[Skill.Botany]: ["Botany", "<li>Increases effectiveness of eating plant-based consumables.</li><li>Decreases chance of trampling plants when stepping on them.</li><li>Increases chance of gathering/harvesting resources on plants.</li><li>Decreases chance of stamina reduction while gathering/harvesting from plants.</li><li>Decreases seed germination time.</li><li>Increases the amount of resources gathered/harvested at a time.</li>"],
	[Skill.Camping]: ["Camping", "<li>Increases the amount of turns slept when using a bedroll.</li><li>Increases chance of starting a fire.</li><li>Increases the accuracy of telling the time with a sundial.</li><li>Increases the effectiveness of extinguishing open fires with the smother action.</li>"],
	[Skill.Cartography]: ["Cartography", "<li>Increases chance to successfully read tattered maps.</li><li>Decreases obscurity when reading tattered maps.</li>"],
	[Skill.Chemistry]: ["Chemistry", "<li>Influences quality and success rate of crafted items using chemical mixtures.</li>"],
	[Skill.Claythrowing]: ["Clay Throwing", "<li>Influences quality and success rate of crafting items using clay.</li>"],
	[Skill.Cooking]: ["Cooking", "<li>Influences quality and success rate of cooking items (via crafting).</li><li>Influences decay of cooked items.</li>"],
	[Skill.Fishing]: ["Fishing", "<li>Increases chance to successfully catch a fish. Increases maximum range when using a fishing rod.</li><li>Increases the range in which you can gather underwater treasure from.</li>"],
	[Skill.Fletching]: ["Fletching & Rangedcraft", "<li>Influences quality and repair rate of crafted arrows, bows, and slings.</li>"],
	[Skill.Gardening]: ["Gardening", "<li>Increases chance of planting a plant or mushroom.</li><li>Increases chance of successfully tilling.</li><li>Decreases chance of stamina reduction while tilling.</li><li>Influences quality and success rate of crafting items requiring gardening skill.</li>"],
	[Skill.Glassblowing]: ["Glassblowing", "<li>Influences quality and success rate of crafted items using glass.</li>"],
	[Skill.Leatherworking]: ["Leatherworking", "<li>Influences quality, repair, and success rate of crafted items using leather.</li>"],
	[Skill.LockPicking]: ["Lock Picking", "<li>Increases chance to successfully unlock a chest.</li>"],
	[Skill.Lumberjacking]: ["Lumberjacking", "<li>Increases chance of gathering resources on trees.</li><li>Decreases chance of stamina reduction while lumberjacking.</li><li>Increases the amount of resources gathered at a time.</li>"],
	[Skill.Marksmanship]: ["Marksmanship", "<li>Increases attack damage, accuracy, and maximum range when using bows and firearms.</li>"],
	[Skill.Mining]: ["Mining", "<li>Increases chance of gathering resources while hitting rock/sandstone or digging.</li><li>Decreases chance of stamina reduction while mining and digging.</li><li>Increases the range in which you can gather treasure from.</li><li>Increases the amount of resources gathered at a time.</li>"],
	[Skill.Mycology]: ["Mycology", "<li>Increases effectiveness of eating mushroom consumables.</li><li>Decreases chance of trampling mushrooms when stepping on them.</li><li>Increases chance of gathering/harvested resources on mushrooms.</li><li>Decreases chance of stamina reduction while gathering/harvesting from mushrooms.</li><li>Decreases spore germination time.</li><li>Increases the amount of resources gathered/harvested at a time.</li>"],
	[Skill.Parrying]: ["Parrying", "<li>Increases your base defense value when holding an item in each hand.</li><li>Increases chance to take less damage in combat.</li><li>Decreases chance of stamina reduction from being attacked.</li>"],
	[Skill.Stonecrafting]: ["Stonecrafting", "<li>Influences quality, repair, and success rate of crafted items using stones and rocks.</li>"],
	[Skill.Swimming]: ["Swimming", "<li>Increases speed in water travel.</li><li>Decreases chance of stamina reduction in water.</li>"],
	[Skill.Tactics]: ["Tactics", "<li>Increases your base attack value.</li><li>Increases chance to hit targets in combat.</li><li>Decreases chance of stamina reduction while attacking.</li>"],
	[Skill.Tailoring]: ["Tailoring", "<li>Influences quality, repair, and success rate of crafted items using cloth or fabric.</li>"],
	[Skill.Taming]: ["Taming", "<li>Increases chance of successfully taming a creature.</li><li>Increases length of time creature will be tamed for.</li><li>Decreases chance of stamina reduction when taming/offering/milking.</li><li>Decreases amount of happiness reduced when milking goats.</li><li>Increases chance of taming when offering an aberrant creature items.</li>"],
	[Skill.Throwing]: ["Throwing", "<li>Increases attack damage, accuracy, and maximum range when throwing or slinging an item.</li>"],
	[Skill.Tinkering]: ["Tinkering", "<li>Influences quality, repair, and success rate of crafted items using miscellaneous resources and methods.</li>"],
	[Skill.Trapping]: ["Trapping", "<li>Increases the amount of damage and success rate of trapping creatures.</li><li>Reduces chance of setting off traps and reduces damage taken from traps.</li>"],
	[Skill.Woodworking]: ["Woodworking", "<li>Influences quality, repair, and success rate of crafted items using wood.</li>"]
};
