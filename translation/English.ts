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

import { Dictionary } from "language/ILanguage";
import Language from "language/Language";
import actions from "language/translation/Actions";
import bindables from "language/translation/Bindables";
import bindPresses from "language/translation/BindPresses";
import books from "language/translation/Books";
import corpses from "language/translation/Corpses";
import creatures from "language/translation/Creatures";
import doodads from "language/translation/Doodads";
import growingStages from "language/translation/Growth";
import helpArticles from "language/translation/HelpArticles";
import interruptChoices from "language/translation/InterruptChoices";
import items from "language/translation/Items";
import messages from "language/translation/Messages";
import milestones from "language/translation/Milestones";
import names from "language/translation/Names";
import notes from "language/translation/Notes";
import onEquips from "language/translation/OnEquips";
import skills from "language/translation/Skills";
import sources from "language/translation/Sources";
import terrains from "language/translation/Terrains";
import tileEvents from "language/translation/TileEvents";
import uiTranslations from "language/translation/UiTranslations";

export let english = new Language("English", false, true);
export default english;

english.onPrefix = (prefix: string) => prefix.length > 0 ? `${prefix} ` : "";

// autosort
english.setDictionary(Dictionary.Player, names);
english.setDictionary(Dictionary.Action, actions);
english.setDictionary(Dictionary.Bindable, bindables);
english.setDictionary(Dictionary.BindPress, bindPresses);
english.setDictionary(Dictionary.Creature, creatures);
english.setDictionary(Dictionary.Corpse, corpses);
english.setDictionary(Dictionary.Doodad, doodads);
english.setDictionary(Dictionary.Growth, growingStages);
english.setDictionary(Dictionary.Book, books);
english.setDictionary(Dictionary.Note, notes);
english.setDictionary(Dictionary.Item, items);
english.setDictionary(Dictionary.Message, messages);
english.setDictionary(Dictionary.Milestone, milestones);
english.setDictionary(Dictionary.OnEquip, onEquips);
english.setDictionary(Dictionary.Skill, skills);
english.setDictionary(Dictionary.Terrain, terrains);
english.setDictionary(Dictionary.TileEvent, tileEvents);
english.setDictionary(Dictionary.Ui, uiTranslations);
english.setDictionary(Dictionary.InterruptChoice, interruptChoices);
english.setDictionary(Dictionary.HelpArticle, helpArticles);
english.setDictionary(Dictionary.Source, sources);
