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

import { TileEventType as TileEvent } from "tile/ITileEvent";

let tileEvents: any;
export default tileEvents = {
	// autosort
	[TileEvent.Fire]: ["", "fire", "A dangerous open flame providing heat and light."],
	[TileEvent.HoneyFungus]: ["", "honey fungus", "A parasitic tree fungus that can grow and spread on living, decaying, and dead plant material."],
	[TileEvent.TumblingTumbleweed]: ["a", "tumbling tumbleweed", "A dry and brittle tumbling weed, broken off from its roots and spreading seeds in its meandering path."]
};
