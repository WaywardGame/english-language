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

import { GrowthStageTranslation as GrowingStage } from "language/ILanguage";

let growth: any;
export default growth = {
	[GrowingStage.Germinating]: ["a", "germinating"],
	[GrowingStage.Seedling]: ["a", "seedling"],
	[GrowingStage.Vegetative]: ["a", "vegetative"],
	[GrowingStage.Budding]: ["a", "budding"],
	[GrowingStage.Flowering]: ["a", "flowering"],
	[GrowingStage.Ripening]: ["a", "ripening"],
	[GrowingStage.Dead]: ["a", "dead"],
	[GrowingStage.FungusGerminating]: ["a", "germinating"],
	[GrowingStage.FungusSpreading]: ["a", "spreading"],
	[GrowingStage.FungusForming]: ["a", "forming"],
	[GrowingStage.FungusYoung]: ["a", "young"],
	[GrowingStage.FungusFruiting]: ["a", "fruiting"],
	[GrowingStage.FungusFull]: ["a", "full"],
	[GrowingStage.FungusDead]: ["a", "dead"]
};
