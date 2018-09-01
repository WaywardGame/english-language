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

const interruptChoices: Descriptions<Choice, string> = {
	// autosort
	[Choice.Cancel]: "Cancel",
	[Choice.ContinueAnyway]: "Continue Anyway",
	[Choice.LocalFile]: "Local File",
	[Choice.No]: "No",
	[Choice.Ok]: "OK",
	[Choice.OpenSaveFolderAndQuit]: "Open Save Folder and Quit",
	[Choice.Rejoin]: "Rejoin",
	[Choice.Rename]: "Rename",
	[Choice.Retry]: "Retry",
	[Choice.SteamWorkshop]: "Steam Workshop",
	[Choice.Yes]: "Yes",
	[Choice.Quit]: "Quit"
};

export default interruptChoices;
