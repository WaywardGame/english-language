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

import { Source } from "player/IMessageManager";

const sources: Descriptions<Source, string> = {
	[Source.All]: "All",
	[Source.Action]: "Action",
	[Source.Allies]: "Humans and Pets",
	[Source.Chat]: "Chat",
	[Source.Combat]: "Combat",
	[Source.Command]: "Command",
	[Source.Creature]: "Creature",
	[Source.Equipment]: "Equipment",
	[Source.Game]: "Game",
	[Source.Item]: "Item",
	[Source.Meta]: "Meta",
	[Source.Milestone]: "Milestone",
	[Source.Multiplayer]: "Multiplayer",
	[Source.Resource]: "Resource Collection",
	[Source.Skill]: "Skill",
	[Source.Wellbeing]: "Well-Being"
};

export default sources;
