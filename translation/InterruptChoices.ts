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

import { InterruptChoice as Choice } from "language/ILanguage";

let interruptChoices: any;
export default interruptChoices = {
	// autosort
	[Choice.Cancel]: "Cancel",
	[Choice.ContinueAnyway]: "Continue anyway",
	[Choice.LocalFile]: "Local File",
	[Choice.No]: "No",
	[Choice.Ok]: "OK",
	[Choice.OpenSaveFolderAndQuit]: "Open save folder and quit",
	[Choice.Rejoin]: "Rejoin",
	[Choice.Rename]: "Rename",
	[Choice.Retry]: "Retry",
	[Choice.SteamWorkshop]: "Steam Workshop",
	[Choice.Yes]: "Yes"
};
