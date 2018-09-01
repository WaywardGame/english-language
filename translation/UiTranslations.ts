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

import { UiTranslation as Ui } from "language/ILanguage";

const uiTranslations: { [key in Ui]: string } = {

	// ui rewrite
	// in game
	[Ui.GameActionGather]: "gather",
	[Ui.GameQualityExceptional]: "Exceptional", // Dynamic
	[Ui.GameQualityRemarkable]: "Remarkable", // Dynamic
	[Ui.GameQualityLegendary]: "Legendary", // Dynamic
	[Ui.GameDamageTypeBlunt]: "Blunt", // Dynamic
	[Ui.GameDamageTypeSlashing]: "Slashing", // Dynamic
	[Ui.GameDamageTypePiercing]: "Piercing", // Dynamic
	[Ui.GameDamageTypeFire]: "Fire", // Dynamic

	[Ui.GameDialogMessagesName]: "Messages",
	[Ui.GameDialogMessagesEditFiltersName]: "Edit Filters",
	[Ui.GameDialogMessagesEditFiltersLabelName]: "Name",
	[Ui.GameDialogMessagesEditFiltersButtonDelete]: "Delete",
	[Ui.GameDialogMessagesEditFiltersButtonSave]: "Save",
	[Ui.GameDialogMessagesEditFiltersButtonNew]: "New",
	[Ui.GameDialogMessagesEditFiltersButtonReset]: "Reset",
	[Ui.GameDialogMessagesEditFiltersInterruptSaveOverExisting]: "There is already a filter with this name.",
	[Ui.GameDialogMessagesEditFiltersInterruptSaveOverExistingDescription]: "Would you like to save over it?",
	[Ui.GameDialogMessagesEditFiltersInterruptResetConfirm]: "Are you sure you want\nto reset your filters?",
	[Ui.GameDialogMessagesEditFiltersInterruptResetConfirmDescription]: "There is no undo.",

	[Ui.GameDialogNotesName]: "Notes",
	[Ui.GameDialogNotesNoteTime]: "Day {0}, {1}",
	[Ui.GameDialogNotesNoteNumber]: "{0} / {1}",
	[Ui.GameDialogNotesNoteLockedTitle]: "?",
	[Ui.GameDialogNotesNoteLockedDescription]: "...",
	[Ui.GameDialogNotesLinkId]: "#{0}",
	[Ui.GameDialogNotesLinkLearnMore]: "Learn More",

	[Ui.GameDialogQuickSettingsName]: "Quick Settings",

	[Ui.GameStatsPercentage]: "{0}%",
	[Ui.GameStatsStatAttack]: "{0}/{1}",
	[Ui.GameStatsStatGeneric]: "{0}",
	[Ui.GameStatsStatGenericWithMax]: "{0}/{1}",
	[Ui.GameStatsStatbar]: "{0} ({1}%)",
	[Ui.GameStatsStatHealthTooltip]: "Health {#--text-color-faded:(Strength)}",
	[Ui.GameStatsStatStaminaTooltip]: "Stamina {#--text-color-faded:(Dexterity)}",
	[Ui.GameStatsStatHungerTooltip]: "Hunger {#--text-color-faded:(Metabolism/Starvation)}",
	[Ui.GameStatsStatThirstTooltip]: "Thirst {#--text-color-faded:(Metabolism/Dehydration)}",
	[Ui.GameStatsStatReputationTooltipDifficulty]: "Difficulty: {#--stat-color:{0}}",
	[Ui.GameStatsStatReputationTooltipDifficultyEasy]: "Easy",
	[Ui.GameStatsStatReputationTooltipDifficultyHard]: "Hard",
	[Ui.GameStatsStatReputationTooltipDifficultyInsane]: "Insane",
	[Ui.GameStatsStatReputationTooltipDifficultyMedium]: "Medium",
	[Ui.GameStatsStatReputationTooltipDifficultySimple]: "Simple",
	[Ui.GameStatsStatReputationTooltipDifficultyVeryEasy]: "Very Easy",
	[Ui.GameStatsStatReputationTooltipDifficultyVeryHard]: "Very Hard",
	[Ui.GameStatsStatReputationTooltipBenignity]: "Benignity: {#--stat-color:{0}/{1}}",
	[Ui.GameStatsStatReputationTooltipMalignity]: "Malignity: {#--stat-color:{0}/{1}}",
	[Ui.GameStatsStatReputationTooltipScore]: "Score: {#--stat-color:{0}}",
	[Ui.GameStatsStatReputationTooltipTurn]: "Turn: {#--stat-color:{0}}",
	[Ui.GameStatsStatReputationTooltipTicks]: "Ticks: {#--stat-color:{0}}",
	[Ui.GameStatsStatWeightTooltip]: "Weight {#--text-color-faded:(Strength)}",
	[Ui.GameStatsStatAttackTooltipTactics]: "Attack from Tactics: {#--stat-color:{0}}",
	[Ui.GameStatsStatAttackTooltipLeftHand]: "Left Hand Attack: {#--stat-color:{0}} {#--text-color-faded:({1})}",
	[Ui.GameStatsStatAttackTooltipRightHand]: "Right Hand Attack: {#--stat-color:{0}} {#--text-color-faded:({1})}",
	[Ui.GameStatsStatDefenseTooltipBase]: "Base Defense: {#--stat-color:{0}}",
	[Ui.GameStatsStatDefenseTooltipBlunt]: "Blunt Resist: {#--stat-color:{0}}",
	[Ui.GameStatsStatDefenseTooltipParrying]: "Defense From Parrying: {#--stat-color:{0}}",
	[Ui.GameStatsStatDefenseTooltipFire]: "Fire Resist: {#--stat-color:{0}}",
	[Ui.GameStatsStatDefenseTooltipPiercing]: "Piercing Resist: {#--stat-color:{0}}",
	[Ui.GameStatsStatDefenseTooltipSlashing]: "Slashing Resist: {#--stat-color:{0}}",
	[Ui.GameStatsStatusEffectBleedingTooltip]: "Bleeding",
	[Ui.GameStatsStatusEffectBurnedTooltip]: "Burned",
	[Ui.GameStatsStatusEffectPoisonedTooltip]: "Poisoned",

	[Ui.GameQuadrantElementStats]: "Stats",
	[Ui.GameQuadrantElementMenuBar]: "Menu Bar",
	[Ui.GameQuadrantElementQuickslots]: "Quickslots",
	[Ui.GameQuadrantElementMessages]: "Messages",
	[Ui.GameQuadrantElementContextMenuMoveTo]: "Move {0} To",
	[Ui.GameQuadrantElementContextMenuSwitchWith]: "Switch With",
	[Ui.GameQuadrantNone]: "Storage",
	[Ui.GameQuadrantLeft]: "Left",
	[Ui.GameQuadrantTopLeft]: "Top Left",
	[Ui.GameQuadrantTop]: "Top",
	[Ui.GameQuadrantTopRight]: "Top Right",
	[Ui.GameQuadrantRight]: "Right",
	[Ui.GameQuadrantBottomRight]: "Bottom Right",
	[Ui.GameQuadrantBottom]: "Bottom",
	[Ui.GameQuadrantBottomLeft]: "Bottom Left",

	[Ui.GameLegendaryAttack]: "Attack", // Dynamic
	[Ui.GameLegendaryDefense]: "Defense", // Dynamic
	[Ui.GameLegendaryIllumination]: "Illumination", // Dynamic
	[Ui.GameLegendaryWeightCapacity]: "Weight Capacity", // Dynamic
	[Ui.GameLegendaryItemWeight]: "Weight", // Dynamic
	[Ui.GameLegendaryStat]: "Stat", // Dynamic
	[Ui.GameLegendarySkill]: "Skill", // Dynamic
	[Ui.GameLegendaryBenignity]: "Benignity", // Dynamic
	[Ui.GameLegendaryMalignity]: "Malignity", // Dynamic
	[Ui.GameLegendaryRange]: "Range", // Dynamic
	[Ui.GameLegendaryUseBenefits]: "Use Benefits", // Dynamic
	[Ui.GameLegendaryWorth]: "Worth", // Dynamic
	[Ui.GameLegendaryStatHealth]: "Strength", // Dynamic
	[Ui.GameLegendaryStatStamina]: "Dexterity", // Dynamic
	[Ui.GameLegendaryStatMetabolism]: "Metabolism", // Dynamic

	[Ui.GameItemBarterCredit]: "Barter Credit: ",
	[Ui.GameItemBarterCreditTrade]: "Barter Credit Trade: ",

	[Ui.GameInterruptItemMayBeDestroyedOnUse]: "Item may be destroyed on use.",
	[Ui.GameInterruptItemMayBeDestroyedOnUseDescription]: "Do you wish to continue?",
	[Ui.GameInterruptItemMayBeDestroyedInCraft]: "Items in the craft may be destroyed on failure or use.",
	[Ui.GameInterruptItemMayBeDestroyedInCraftDescription]: "Do you wish to continue?",
	[Ui.GameInterruptReleaseCreature]: "Are you sure you want to release {0}?",
	[Ui.GameInterruptReleaseCreatureDescription]: "",
	[Ui.GameInterruptRenameItem]: "What would you like to name the {0}?",
	[Ui.GameInterruptRenameItemDescription]: "",
	[Ui.GameInterruptRenameDoodad]: "What would you like to name the {0}?",
	[Ui.GameInterruptRenameDoodadDescription]: "",
	[Ui.GameInterruptRenameCreature]: "What would you like to name the {0}?",
	[Ui.GameInterruptRenameCreatureDescription]: "",
	[Ui.GameInterruptReturnToTitleScreen]: "Are you sure you want to\nreturn to the title screen?",
	[Ui.GameInterruptReturnToTitleScreenDescription]: "Your progress will be saved automatically.",
	[Ui.GameInterruptReturnToTitleScreenDailyChallenge]: "Are you sure you want to\nreturn to the title screen?",
	[Ui.GameInterruptReturnToTitleScreenDailyChallengeDescription]: "Your progress is not saved in Daily Challenge Mode!",
	[Ui.GameInterruptLoadingSaving]: "Saving Game",
	[Ui.GameInterruptLoadingSavingDescription]: "",
	[Ui.GameInterruptLoadingQuitting]: "Quitting Game",
	[Ui.GameInterruptLoadingQuittingDescription]: "",
	[Ui.GameInterruptLoadingWorld]: "Loading World",
	[Ui.GameInterruptLoadingWorldDescription]: "",
	[Ui.GameInterruptLoadingGeneratingWorld]: "Generating World",
	[Ui.GameInterruptLoadingGeneratingWorldDescription]: "",
	[Ui.GameInterruptLoadingFinalizingWorld]: "Finalizing World",
	[Ui.GameInterruptLoadingFinalizingWorldDescription]: "",
	[Ui.GameInterruptSailAwayEnd]: "Are you sure you want\nto sail to civilization?",
	[Ui.GameInterruptSailAwayEndDescription]: "Your journey will be over.",
	[Ui.GameInterruptSailAwayReturnable]: "Are you sure you want\nto sail to civilization?",
	[Ui.GameInterruptSailAwayReturnableDescription]: "Your journey will be over, but you can always return back to these lands.\nFood and water are recommended.",
	[Ui.GameInterruptTravelAway]: "Are you sure you want to\ntravel away from these lands?",
	[Ui.GameInterruptTravelAwayDescription]: "You can never return. Make sure to grab all you need!\nFood and water are recommended.",
	[Ui.GameInterruptLoadingResting]: "Resting",
	[Ui.GameInterruptLoadingRestingDescription]: "",
	[Ui.GameInterruptLoadingSleeping]: "Sleeping",
	[Ui.GameInterruptLoadingSleepingDescription]: "",
	[Ui.GameInterruptLoadingTraveling]: "Traveling",
	[Ui.GameInterruptLoadingTravelingDescription]: "",
	[Ui.GameInterruptLoadingLostGLContext]: "Lost GL Context",
	[Ui.GameInterruptLoadingLostGLContextDescription]: "",
	[Ui.GameInterruptLoadingAutoSaving]: "Auto Saving",
	[Ui.GameInterruptLoadingAutoSavingDescription]: "",
	[Ui.GameInterruptLoadingMods]: "Loading Mods",
	[Ui.GameInterruptLoadingModsDescription]: "",
	[Ui.GameInterruptLoadingMultiplayerPlayerConnecting]: "Player Connecting",
	[Ui.GameInterruptLoadingMultiplayerSyncing]: "Syncing With Server",
	[Ui.GameInterruptDangerousStep]: "Are you sure you want to step there?",
	[Ui.GameInterruptDangerousStepDescription]: "Stepping onto {0} is dangerous!",
	[Ui.GameInterruptSaveFailure]: "Failed to Save the Game",
	[Ui.GameInterruptSaveFailureDescription]: "Please create a topic and send us your logs on the {link(https://steamcommunity.com/app/379210/discussions/1/):Bug Reports Forum}.",
	[Ui.GameInterruptLoadFailure]: "Failed to Load the Game",
	[Ui.GameInterruptLoadFailureDescription]: "Please create a topic and send us your logs on the {link(https://steamcommunity.com/app/379210/discussions/1/):Bug Reports Forum}.",
	[Ui.GameInterruptDesalinationNoNeed]: "This water does not need to undergo the desalination process.",
	[Ui.GameInterruptDesalinationNoNeedDescription]: "Do you want to pour it in the still to purify?",
	[Ui.GameInterruptNoHealingRequired]: "Your target for healing is not damaged or bleeding.",
	[Ui.GameInterruptNoHealingRequiredDescription]: "Are you sure you want to heal anyways?",
	[Ui.GameInterruptConfirmationActionOnFire]: "Are you sure you want to\n{1} from {0}?",
	[Ui.GameInterruptConfirmationActionOnFireDescription]: "It is on fire!",
	[Ui.GameInterruptConfirmationDestroyOnGather]: "{0} does not have any resources to gather or harvest yet.",
	[Ui.GameInterruptConfirmationDestroyOnGatherDescription]: "Are you sure you want to destroy it?",
	[Ui.GameInterruptLoadingGame]: "Loading Game",
	[Ui.GameInterruptLoadingGameDescription]: "",
	[Ui.GameInterruptLoadingSprites]: "Loading Sprites",
	[Ui.GameInterruptLoadingSpritesDescription]: "",
	[Ui.GameInterruptMultiplayerSynchronizing]: "Synchronizing",
	[Ui.GameInterruptMultiplayerSynchronizingDescription]: "Synchronizing game state with the server.",
	[Ui.GameInterruptNoSaveOnDeath]: "You Have Died",
	[Ui.GameInterruptNoSaveOnDeathDescription]: "You cannot save while dead in hardcore mode.",

	[Ui.GameMenuBarButtonTooltipBindable]: " {#--text-color-faded:({Bindable.{0}})}",
	[Ui.GameMenuBarButtonTooltipMenu]: "Menu",
	[Ui.GameMenuBarButtonTooltipSave]: "Save",
	[Ui.GameMenuBarButtonTooltipHelp]: "Help",
	[Ui.GameMenuBarButtonTooltipNotes]: "Notes",
	[Ui.GameMenuBarButtonTooltipMilestones]: "Milestones",
	[Ui.GameMenuBarButtonTooltipMessages]: "Messages",
	[Ui.GameMenuBarButtonTooltipQuickSettings]: "Quick Settings",
	[Ui.GameMenuBarButtonTooltipActions]: "Actions",
	[Ui.GameMenuBarButtonTooltipInventory]: "Inventory",
	[Ui.GameMenuBarButtonTooltipCrafting]: "Crafting",
	[Ui.GameMenuBarButtonTooltipEquipment]: "Equipment",
	[Ui.GameMenuBarButtonTooltipSkills]: "Skills",

	[Ui.GameMessagesButtonSend]: "Chat",
	[Ui.GameMessagesContextMenuShowAsDialog]: "Show Messages As Dialog",
	[Ui.GameMessagesContextMenuClear]: "Clear Message History",
	[Ui.GameMessagesContextMenuCopy]: "Copy Log",
	[Ui.GameMessagesContextMenuExport]: "Export Filtered History",
	[Ui.GameMessagesContextMenuClearInterrupt]: "Are you sure you want to clear\nyour  /entire/  message history?",
	[Ui.GameMessagesContextMenuClearInterruptDescription]: "There is no undo.",
	[Ui.GameMessagesFilter]: "Filter: {0}",
	[Ui.GameMessagesFilterAll]: "All",
	[Ui.GameMessagesFilterGame]: "Game",
	[Ui.GameMessagesFilterChat]: "Chat",
	[Ui.GameMessagesFiltersEdit]: "Edit",
	[Ui.GameMessagesNewNote]: "You have written a note: {0}",

	[Ui.GameMultiplayerInterruptBanned]: "You have been banned from the server.",
	[Ui.GameMultiplayerInterruptConnecting]: "Connecting",
	[Ui.GameMultiplayerInterruptConnectingDescription]: "Waiting for the server to respond",
	[Ui.GameMultiplayerInterruptConnected]: "Connected",
	[Ui.GameMultiplayerInterruptConnectedDescriptionWaitingForWorldData]: "Waiting for world data",
	[Ui.GameMultiplayerInterruptConnectedDescriptionDownloadingWorldData]: "Downloading world data - {0}%",
	[Ui.GameMultiplayerInterruptFailedToConnect]: "Failed to connect.",
	[Ui.GameMultiplayerInterruptFailedToLoadMods]: "Required mod(s) have the following issues:\n{0}",
	[Ui.GameMultiplayerInterruptKicked]: "You have been kicked from the server.",
	[Ui.GameMultiplayerInterruptLostConnection]: "Lost connection to server.",
	[Ui.GameMultiplayerInterruptServerShutdown]: "The server is shutting down.",
	[Ui.GameMultiplayerInterruptSynchronizationError]: "Your game became\nout of sync with the server.",
	[Ui.GameMultiplayerInterruptSynchronizationErrorDescription]: "Would you like to rejoin?",
	[Ui.GameMultiplayerInterruptUnableToJoinGame]: "Unable to Join the Game",
	[Ui.GameMultiplayerInterruptUnableToJoinGameBuildMismatch]: "The server build ({0}) is different than your build ({1}).",
	[Ui.GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier]: "A player with your ID is already playing on this server.\nTry to rejoin in a minute.",
	[Ui.GameMultiplayerInterruptUnableToJoinGameFriendsOnly]: "The server only allows friends to join.",
	[Ui.GameMultiplayerInterruptUnableToJoinGameServerFull]: "The server is full.",
	[Ui.GameMultiplayerInterruptUnableToJoinGameUnknownError]: "Error code {0}.",
	[Ui.GameMultiplayerInterruptUnableToJoinGameVersionMismatch]: "The server version ({0}) is different than your version ({1}).",
	[Ui.GameMultiplayerInterruptRequiredModIsDisabled]: "{name}@{version} is disabled",
	[Ui.GameMultiplayerInterruptRequiredModNotInstalled]: "{name}@{version} is not installed",
	[Ui.GameMultiplayerInterruptRequiredModVersionMismatch]: "Required {name}@{version}. Currently running version {1}",
	[Ui.GameMultiplayerInterruptRequiredModNotMultiplayerCompatible]: "{name}@{version} is not a multiplayer-compatible mod.",
	[Ui.GameMultiplayerInterruptRequiredModUnableToLoad]: "Unable to load {name}@{version}",

	// main menu
	[Ui.MenuAboutTitle]: "About",
	[Ui.MenuAboutDescription]: "Learn more about Wayward.",
	[Ui.MenuAboutGameDescription]: "Wayward is a challenging turn-based, top-down, wilderness survival roguelike. Explore, build, and most importantly, survive in these unforgiving lands.",
	[Ui.MenuAboutSectionTeam]: "Team",
	[Ui.MenuAboutTeamMemberResponsibilities]: "{0}", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityProgramming]: "Programming", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityDesign]: "Design", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityWeb]: "Web", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityArt]: "Art", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityPR]: "PR", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityUX]: "UX", // Dynamic
	[Ui.MenuAboutTeamMemberResponsibilityMusic]: "Music", // Dynamic
	[Ui.MenuAboutTeamMemberName]: "{0} {2}{1}",
	[Ui.MenuAboutTeamMemberNickname]: "\"{0}\" ",
	[Ui.MenuAboutSectionContributors]: "Contributors",
	[Ui.MenuAboutSectionSpecialThanks]: "Special Thanks",
	[Ui.MenuAboutTextSpecialThanksTestorsAndDonators]: "An extra special thank you to all the early testers, donators, and other supporters.",
	[Ui.MenuAboutSectionLibraries]: "Libraries",
	[Ui.MenuAboutSectionLibrariesDescription]: "Wayward is made possible with the following projects:",

	[Ui.MenuChangelogTitle]: "Changelog",
	[Ui.MenuChangelogDescription]: "View major and minor updates to Wayward.",
	[Ui.MenuChangelogSectionBalance]: "Balance", // Dynamic
	[Ui.MenuChangelogSectionBugFixes]: "Bug Fixes", // Dynamic
	[Ui.MenuChangelogSectionImprovements]: "Improvements", // Dynamic
	[Ui.MenuChangelogSectionMod]: "Mods", // Dynamic
	[Ui.MenuChangelogSectionModding]: "Modding", // Dynamic
	[Ui.MenuChangelogSectionNew]: "New", // Dynamic
	[Ui.MenuChangelogSectionTechnical]: "Technical", // Dynamic
	[Ui.MenuChangelogHeadingFailedLoad]: "Failed to load the changelog for {0}.",
	[Ui.MenuChangelogHeadingChangeCount]: "({0} changes)",
	[Ui.MenuChangelogInterruptLoadingChangelog]: "Loading Changelog",
	[Ui.MenuChangelogInterruptLoadingChangelogDescription]: "",

	[Ui.MenuCharacterCreationButtonRandomizeName]: "Random",
	[Ui.MenuCharacterCreationLabelName]: "Name",
	[Ui.MenuCharacterCreationButtonExportTooltip]: "Export",
	[Ui.MenuCharacterCreationButtonImportTooltip]: "Import",
	[Ui.MenuCharacterCreationButtonStartGame]: "Start Game",
	[Ui.MenuCharacterCreationButtonJoinGame]: "Join Game",
	[Ui.MenuCharacterCreationDescription]: "Customize your character.",
	[Ui.MenuCharacterCreationHeadingHairColor]: "Hair Color",
	[Ui.MenuCharacterCreationHeadingHairStyle]: "Hairstyle",
	[Ui.MenuCharacterCreationHeadingSkinTone]: "Skin Tone",
	[Ui.MenuCharacterCreationTitle]: "Character Creation",
	[Ui.MenuCharacterCreationInterruptImportCharacterFailure]: "Unable to Import Character",
	[Ui.MenuCharacterCreationInterruptImportCharacterFailureDescription]: "",
	[Ui.MenuCharacterCreationButtonRotateLeftTooltip]: "Rotate Clockwise",
	[Ui.MenuCharacterCreationButtonRotateRightTooltip]: "Rotate Counter-clockwise",
	[Ui.MenuCharacterCreationButtonRandomizeTooltip]: "Randomize",

	[Ui.MenuCharacterSelectionButtonNewCharacter]: "New Character",
	[Ui.MenuCharacterSelectionCharacterSortLastUse]: "Last Use", // Dynamic
	[Ui.MenuCharacterSelectionCharacterSortName]: "Name", // Dynamic
	[Ui.MenuCharacterSelectionCharacterSortUseCount]: "Times Used", // Dynamic
	[Ui.MenuCharacterSelectionDescription]: "Randomize a new character or create from a template.",
	[Ui.MenuCharacterSelectionHeadingNoCharacters]: "No Saved Templates",
	[Ui.MenuCharacterSelectionLabelLastUse]: "Last Used: {0}",
	[Ui.MenuCharacterSelectionLabelUseCount]: "Used {0} times",
	[Ui.MenuCharacterSelectionTitle]: "Character Selection",
	[Ui.MenuCharacterSelectionCharacterButtonDeleteTooltip]: "Delete",
	[Ui.MenuCharacterSelectionCharacterButtonCustomizeTooltip]: "Customize",
	[Ui.MenuCharacterSelectionInterruptDeleteCharacter]: "Are you sure you want to delete the character template '{0}'?",

	[Ui.MenuFriendsDescription]: "Join your companions on their adventures.",
	[Ui.MenuFriendsHeadingNotPlayingWayward]: "Other",
	[Ui.MenuFriendsHeadingPlayingWayward]: "In Game",
	[Ui.MenuFriendsSectionNoFriendsOnline]: "No friends are currently online.",
	[Ui.MenuFriendsSectionNoFriendsWayward]: "No friends are currently playing Wayward.",
	[Ui.MenuFriendsTitle]: "Friends",
	[Ui.MenuFriendsUnableToLoad]: "Unable to Load Friends",
	[Ui.MenuFriendsButtonJoinDedicatedServer]: "Join a Dedicated Server",

	[Ui.MenuGameEndTitleDead]: "You Died",
	[Ui.MenuGameEndTitleWon]: "You Won",
	[Ui.MenuGameEndDescriptionDead1]: "Your bones lay bleaching, lost to time.", // Dynamic
	[Ui.MenuGameEndDescriptionDead2]: "The end is just the beginning.", // Dynamic
	[Ui.MenuGameEndDescriptionDead3]: "Sadly, no trace of you was ever found.", // Dynamic
	[Ui.MenuGameEndDescriptionWin1]: "You find your way back to civilization and end your journey.", // Dynamic
	[Ui.MenuGameEndDescriptionWin2]: "You sail back and enjoyed a good life with your riches.", // Dynamic
	[Ui.MenuGameEndDescriptionWin3]: "You travelled back to civilization, but is this the end?", // Dynamic
	[Ui.MenuGameEndShareFacebook]: "Share on Facebook",
	[Ui.MenuGameEndShareTwitter]: "Share on Twitter",
	[Ui.MenuGameEndContinueAsGhost]: "Explore as Ghost",
	[Ui.MenuGameEndReturnToIsland]: "Return to the Island",
	[Ui.MenuGameEndExitToMenu]: "Exit to Title Screen",
	[Ui.MenuGameEndInterruptGhostDeleteSave]: "You are dead.\nDo you want to keep this save?",
	[Ui.MenuGameEndInterruptWonDeleteSave]: "You have won.\nDo you want to keep this save?",
	[Ui.MenuGameEndInterruptDeleteSaveDescription]: "Your highscore and unlocks are saved.",

	[Ui.MenuHelpTitle]: "Help",
	[Ui.MenuHelpDescription]: "Information, guides, and other help for playing Wayward.",
	[Ui.MenuHelpLabelSearch]: "Search",

	[Ui.MenuHighscoresTitle]: "Highscores",
	[Ui.MenuHighscoresDescription]: "See how well you did in your past adventures.",
	[Ui.MenuHighscoresDifficultyFilterHardcore]: "Hardcore", // Dynamic
	[Ui.MenuHighscoresDifficultyFilterCasual]: "Casual", // Dynamic
	[Ui.MenuHighscoresDifficultyFilterDailyChallenge]: "Daily Challenge", // Dynamic
	[Ui.MenuHighscoresDifficultyFilterAll]: "All", // Dynamic
	[Ui.MenuHighscoresSortScore]: "Score", // Dynamic
	[Ui.MenuHighscoresSortSaveName]: "Save Name", // Dynamic
	[Ui.MenuHighscoresSortRecency]: "Last Played", // Dynamic
	[Ui.MenuHighscoresHighscoreLabelDifficulty]: "{0}",
	[Ui.MenuHighscoresHighscoreLabelTurns]: "Turns: {0}",
	[Ui.MenuHighscoresHighscoreLabelScore]: "Score: {0}",
	[Ui.MenuHighscoresHighscoreLabelDate]: "{0}",
	[Ui.MenuHighscoresHighscoreLabelPlace]: "{0}.",
	[Ui.MenuHighscoresHighscoreLabelDeathBy]: "{0}",
	[Ui.MenuHighscoresHighscoreTitle]: "{0}, {1}",
	[Ui.MenuHighscoresCharacterNameUnknown]: "Unknown",

	[Ui.MenuLoadGameButtonNewGame]: "New Game",
	[Ui.MenuLoadGameButtonNewGameButtonImportTooltip]: "Import Save",
	[Ui.MenuLoadGameDescription]: "Continue a past game, or create a new game.",
	[Ui.MenuLoadGameSaveButtonDeleteTooltip]: "Delete Save",
	[Ui.MenuLoadGameSaveButtonEditNameTooltip]: "Edit Name",
	[Ui.MenuLoadGameSaveButtonExportTooltip]: "Export Save",
	[Ui.MenuLoadGameSaveSortCreatedTime]: "Creation Time", // Dynamic
	[Ui.MenuLoadGameSaveSortName]: "Name", // Dynamic
	[Ui.MenuLoadGameSaveSortSaveTime]: "Last Played", // Dynamic
	[Ui.MenuLoadGameSaveSortTurnCount]: "Turn Count", // Dynamic
	[Ui.MenuLoadGameSaveTooltipLabelCreatedTime]: "{#--text-color-faded:Created Time:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelSaveTime]: "{#--text-color-faded:Save Time:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelDifficulty]: "{#--text-color-faded:Difficulty:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelScore]: "{#--text-color-faded:Score:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelSeed]: "{#--text-color-faded:Seed:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelTurns]: "{#--text-color-faded:Turns:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelMods]: "{#--text-color-faded:Mods:} {0}",
	[Ui.MenuLoadGameSaveTooltipLabelOriginalVersion]: "{#--text-color-faded:Original Version:} {0}",
	[Ui.MenuLoadGameSaveTooltipMod]: "{#--{1}:{0}}",
	[Ui.MenuLoadGameSlotsRemaining]: "Slots remaining: {0}",
	[Ui.MenuLoadGameTitle]: "Load Game",
	[Ui.MenuLoadGameInterruptDeleteSave]: "Are you sure you want to\ndelete the save '{0}'?",
	[Ui.MenuLoadGameInterruptDeleteSaveDescription]: "",
	[Ui.MenuLoadGameInterruptLoadingExportingSave]: "Exporting Save",
	[Ui.MenuLoadGameInterruptLoadingExportingSaveDescription]: "",
	[Ui.MenuLoadGameInterruptLoadingImportingSave]: "Importing Save",
	[Ui.MenuLoadGameInterruptLoadingImportingSaveDescription]: "",
	[Ui.MenuLoadGameInterruptImportSaveFailure]: "Unable to Import Save",
	[Ui.MenuLoadGameInterruptImportSaveFailureDescription]: "",
	[Ui.MenuLoadGameInterruptExportType]: "How would you like to export this save?",
	[Ui.MenuLoadGameInterruptExportTypeDescription]: "",
	[Ui.MenuLoadGameInterruptPublishingSave]: "Publishing Save",
	[Ui.MenuLoadGameInterruptPublishingSaveDescription]: "",
	[Ui.MenuLoadGameInterruptMissingMod]: "Are you sure you want to load this save?\nMod(s) are missing. This may cause bugs.",
	[Ui.MenuLoadGameInterruptMissingModDescription]: "{0}\n{1}",
	[Ui.MenuLoadGameInterruptMissingModDescriptionLabelModsMissing]: "Missing Mods: {0}",
	[Ui.MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled]: "Disabled Mods: {0}",
	[Ui.MenuLoadGameInterruptLoading]: "Loading Saves",
	[Ui.MenuLoadGameInterruptLoadingDescription]: "",

	[Ui.MenuMainButtonAbout]: "About",
	[Ui.MenuMainButtonChangelog]: "Changelog",
	[Ui.MenuMainButtonContinueGame]: "Continue Game",
	[Ui.MenuMainButtonFriends]: "Friends",
	[Ui.MenuMainButtonFriendsWithCount]: "Friends ({0})",
	[Ui.MenuMainButtonHighscores]: "Highscores",
	[Ui.MenuMainButtonLoadGame]: "Load Game",
	[Ui.MenuMainButtonMods]: "Mods",
	[Ui.MenuMainButtonNewGame]: "New Game",
	[Ui.MenuMainButtonNews]: "News",
	[Ui.MenuMainButtonOptions]: "Options",
	[Ui.MenuMainButtonQuitGame]: "Quit Game",
	[Ui.MenuMainInterruptLoadingNews]: "Loading News",
	[Ui.MenuMainInterruptLoadingNewsDescription]: "",
	[Ui.MenuMainInterruptLoadingChangelog]: "Loading Changelog",
	[Ui.MenuMainInterruptLoadingChangelogDescription]: "",
	[Ui.MenuMainInterruptWelcomeToVersion]: "Welcome to Wayward {0}!",
	[Ui.MenuMainInterruptWelcomeToVersionDescription]: "Please visit the News menu to see what's new.\nAll mods have been disabled by default.",
	[Ui.MenuMainInterruptOldVersionWarning]: "You've loaded an older version\nof the game!",
	[Ui.MenuMainInterruptOldVersionWarningDescription]: "You previously played {0}. You're now playing {1}.\nUnintended side effects may occur, such as losing all save data.\nIt is highly recommended you backup the Wayward save folder before continuing.",

	[Ui.MenuModsButtonDisableAll]: "Disable All",
	[Ui.MenuModsButtonEnableAll]: "Enable All",
	[Ui.MenuModsButtonModdingGuide]: "Modding Guide",
	[Ui.MenuModsButtonOpenFolder]: "Open Mods Folder",
	[Ui.MenuModsButtonOpenWorkshop]: "Open Steam Workshop",
	[Ui.MenuModsDescription]: "Manage installed mods and publish your own.",
	[Ui.MenuModsHeadingInternal]: "Internal Mods", // Dynamic
	[Ui.MenuModsHeadingLocal]: "Local Mods", // Dynamic
	[Ui.MenuModsHeadingNoMods]: "You have no mods installed.", // Dynamic
	[Ui.MenuModsHeadingWorkshop]: "Workshop Mods", // Dynamic
	[Ui.MenuModsInterruptConfirmPublish]: "Are you sure you want\nto publish this mod?",
	[Ui.MenuModsInterruptConfirmPublishUpdate]: "Are you sure you want to publish\nan update to this mod?",
	[Ui.MenuModsInterruptModEnableMultipleLanguages]: "This mod provides multiple languages.",
	[Ui.MenuModsInterruptModEnableMultipleLanguagesDescription]: "Would you like to go to the\noptions menu and change language?",
	[Ui.MenuModsInterruptModEnableUseLanguage]: "This mod provides a language.\nWould you like to switch to it?",
	[Ui.MenuModsInterruptModEnableUseLanguageDescription]: "",
	[Ui.MenuModsInterruptPublishedReminderRequiredModsOnWorkshop]: "Don't forget to add the required mods\non the Steam Workshop page!",
	[Ui.MenuModsInterruptInfoMissingDependencies]: "{0} can't be enabled because it is missing other required mods.",
	[Ui.MenuModsInterruptInfoMissingDependenciesDescription]: "Required mods: {0}",
	[Ui.MenuModsInterruptConfirmEnableDisabledDependencies]: "{0} can't be enabled without enabling its required mods. Would you like to enable them?",
	[Ui.MenuModsInterruptConfirmEnableDisabledDependenciesDescription]: "Required mods: {0}",
	[Ui.MenuModsInterruptConfirmDisableDependents]: "{0} can't be disabled without disabling its dependent mods. Would you like to disable them?",
	[Ui.MenuModsInterruptConfirmDisableDependentsDescription]: "Dependents: {0}",
	[Ui.MenuModsInterruptConfirmUninstallMod]: "Are you sure you want to\nuninstall {0}?",
	[Ui.MenuModsInterruptConfirmUninstallModDescription]: "",
	[Ui.MenuModsInterruptUnloadableSaveGameMod]: "Unloadable Save Game",
	[Ui.MenuModsInterruptUnloadableSaveGameModDescription]: "The save game '{0}' cannot be loaded due to being too old or incompatible with this version of Wayward.",
	[Ui.MenuModsSortAuthor]: "Author", // Dynamic
	[Ui.MenuModsSortCreatedDate]: "Created Date", // Dynamic
	[Ui.MenuModsSortInstallDate]: "Install Date", // Dynamic
	[Ui.MenuModsSortName]: "Name", // Dynamic
	[Ui.MenuModsSortLastUpdated]: "Last Update Date", // Dynamic
	[Ui.MenuModsTabInternal]: "Internal", // Dynamic
	[Ui.MenuModsTabLocal]: "Local", // Dynamic
	[Ui.MenuModsTabWorkshop]: "Workshop", // Dynamic 
	[Ui.MenuModsTitle]: "Mods",
	[Ui.MenuModsTooltipLabelAuthor]: "{#--text-color-faded:Author:} {0}",
	[Ui.MenuModsTooltipLabelDependencies]: "{#--text-color-faded:Dependencies:} {0}",
	[Ui.MenuModsTooltipLabelProvides]: "{#--text-color-faded:Provides:} {0}",
	[Ui.MenuModsTooltipLabelVersion]: "{#--text-color-faded:Version:} {0}",
	[Ui.MenuModsTooltipLabelDescription]: "{#--text-color-faded:Description:} {0}",
	[Ui.MenuModsTooltipLabelInstallDate]: "{#--text-color-faded:Install Date:} {0}",
	[Ui.MenuModsTooltipLabelCreatedDate]: "{#--text-color-faded:Created Date:} {0}",
	[Ui.MenuModsTooltipLabelLastUpdatedDate]: "{#--text-color-faded:Last Updated Date:} {0}",
	[Ui.MenuModsTooltipMultiplayerCompatibility]: "{0?Clientside:{1?Multiplayer Compatible:Singleplayer Only}}",
	[Ui.MenuModsTooltipModOptions]: "Mod Options",
	[Ui.MenuModsTooltipProvidesCustomizations]: "Customizations",
	[Ui.MenuModsTooltipProvidesImageOverrides]: "Retextures",
	[Ui.MenuModsTooltipProvidesLanguage]: "Language",
	[Ui.MenuModsTooltipProvidesScript]: "Scripts",
	[Ui.MenuModsTooltipProvidesStylesheet]: "Restyles",
	[Ui.MenuModsTooltipPublishMod]: "Publish Mod",
	[Ui.MenuModsTooltipUninstallMod]: "Uninstall Mod",
	[Ui.MenuModsTooltipViewInSteamWorkshop]: "View Steam Workshop Page",
	[Ui.MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription]: "",
	[Ui.MenuModsInterruptConfirmPublishDescription]: "",
	[Ui.MenuModsInterruptConfirmPublishUpdateDescription]: "",
	[Ui.MenuModsInterruptPublishingMod]: "Publishing Mod",
	[Ui.MenuModsInterruptPublishingModDescription]: "",
	[Ui.MenuModsInterruptPublishError]: "Could Not Publish Mod",
	[Ui.MenuModsInterruptPublishErrorDescription]: "Error: {0}",
	[Ui.MenuModsInterruptUpdatingMod]: "Publishing Mod Update",
	[Ui.MenuModsInterruptUpdatingModDescription]: "",
	[Ui.MenuModsInterruptPublishUpdateError]: "Could Not Publish Mod Update",
	[Ui.MenuModsInterruptPublishUpdateErrorDescription]: "Error: {0}",
	[Ui.MenuModsTooltipCanLoadStateModLoadError]: "Error loading mod.", // Dynamic
	[Ui.MenuModsTooltipCanLoadStateDependencyIssue]: "Issues found with dependencies.", // Dynamic
	[Ui.MenuModsTooltipCanLoadStateModRequiresItself]: "Mod requires itself.", // Dynamic
	[Ui.MenuModsTooltipCanLoadStateMissingRequiredMod]: "Missing a required mod.", // Dynamic
	[Ui.MenuModsTooltipCanLoadStateReqiredModNotLoaded]: "Required mod is not loaded.", // Dynamic
	[Ui.MenuModsTooltipCanLoadStateLocalModPrecedence]: "Installed locally; local mods have precedence.", // Dynamic
	[Ui.MenuModsTooltipCanLoadStateIncompatibleVersion]: "Incompatible with this version.", // Dynamic

	[Ui.MenuNewGameButtonNext]: "Next",
	[Ui.MenuNewGameButtonStartServer]: "Start Server",
	[Ui.MenuNewGameDescription]: "Create a new world with your choice of settings.",
	[Ui.MenuNewGameLabelEditName]: "Name",
	[Ui.MenuNewGameLabelEditSeed]: "Seed",
	[Ui.MenuNewGamePlaceholderEditSeed]: "Random",
	[Ui.MenuNewGameTitle]: "New Game",
	[Ui.MenuNewGameChoiceDifficultyCasual]: "Casual Mode", // Dynamic
	[Ui.MenuNewGameChoiceDifficultyCasualDescription]: "Dying will respawn you in the last place you rested or slept. All items will be dropped at the location of your demise.", // Dynamic
	[Ui.MenuNewGameChoiceDifficultyHardcore]: "Hardcore Mode", // Dynamic
	[Ui.MenuNewGameChoiceDifficultyHardcoreDescription]: "The default and definitive way to play. Permanent character death is enabled.", // Dynamic
	[Ui.MenuNewGameChoiceDifficultyDailyChallenge]: "Daily Challenge", // Dynamic
	[Ui.MenuNewGameChoiceDifficultyDailyChallengeDescription]: "Uses a random seed which changes every 24 hours. This mode features low starting reputation, lower skills, less items, and difficult starting creatures for an extreme challenge. Skills are gained four times faster. Saving is disabled in this mode.", // Dynamic
	[Ui.MenuNewGameChoiceSingleplayer]: "Singleplayer",
	[Ui.MenuNewGameChoiceSingleplayerDescription]: "Survive on your own.",
	[Ui.MenuNewGameChoiceMultiplayer]: "Multiplayer",
	[Ui.MenuNewGameChoiceMultiplayerDescription]: "Allow friends to join your world. Limited to real-time turns mode.",
	[Ui.MenuNewGameChoiceTurnModeManual]: "Manual Turns",
	[Ui.MenuNewGameChoiceTurnModeManualDescription]: 'Turns only pass as players perform actions (also known as "turn-based").',
	[Ui.MenuNewGameChoiceTurnModeSimulated]: "Simulated Turns",
	[Ui.MenuNewGameChoiceTurnModeSimulatedDescription]: "Turns happen automatically as long as player(s) are performing actions.",
	[Ui.MenuNewGameChoiceTurnModeRealTime]: "Real-time Turns",
	[Ui.MenuNewGameChoiceTurnModeRealTimeDescription]: "Turns happen automatically as time passes.",
	[Ui.MenuNewGameChoiceDifficultyTooltipMaxSaves]: "You have used all {0} save slots. As Daily Challenge requires no save slot, it is the only difficulty you may choose.",

	[Ui.MenuNewsButtonDiscord]: "Discord",
	[Ui.MenuNewsButtonFacebook]: "Facebook",
	[Ui.MenuNewsButtonReddit]: "Reddit",
	[Ui.MenuNewsButtonTwitter]: "Twitter",
	[Ui.MenuNewsDescription]: "Find information pertaining to the game and its updates.",
	[Ui.MenuNewsHeadingSocial]: "Join Our Community:",
	[Ui.MenuNewsTitle]: "News",
	[Ui.MenuNewsHeadingUnableToLoad]: "Unable to Load News",
	[Ui.MenuNewsButtonAllNews]: "See All News on Steam",

	[Ui.MenuOptionsDeveloperLogSourceFilterHeading]: "Console Log Filtering",
	[Ui.MenuOptionsInterruptLoading]: "Loading Options",
	[Ui.MenuOptionsInterruptLoadingDescription]: "",
	[Ui.MenuOptionsButtonDitherFogOfWar]: "Dither Style Fog of War",
	[Ui.MenuOptionsButtonFullscreen]: "Fullscreen",
	[Ui.MenuOptionsButtonPixelFont]: "Pixel Font",
	[Ui.MenuOptionsButtonDisableCustomCursor]: "Disable Custom Cursor",
	[Ui.MenuOptionsButtonDeveloperMode]: "Developer Mode",
	[Ui.MenuOptionsButtonDeveloperModeContextMenu]: "Context Menu",
	[Ui.MenuOptionsButtonReloadGame]: "Reload Game",
	[Ui.MenuOptionsButtonSaveDataClearAll]: "Remove All Save Data",
	[Ui.MenuOptionsButtonSaveDataClearHighscores]: "Remove Highscores",
	[Ui.MenuOptionsButtonSaveDataClearMilestones]: "Reset Milestone Progress",
	[Ui.MenuOptionsButtonSaveDataClearOptions]: "Reset All Options to Defaults",
	[Ui.MenuOptionsButtonSaveDataClearCraftingRecipes]: "Reset Unlocked Crafting Recipes",
	[Ui.MenuOptionsButtonSaveDataClearSaves]: "Remove Saved Games",
	[Ui.MenuOptionsButtonSkipSplash]: "Skip Splash Screen",
	[Ui.MenuOptionsButtonToggleDevTools]: "Toggle Developer Tools",
	[Ui.MenuOptionsButtonTooltipsCreatures]: "Creatures",
	[Ui.MenuOptionsButtonTooltipsDoodads]: "Doodads",
	[Ui.MenuOptionsButtonTooltipsItems]: "Items",
	[Ui.MenuOptionsButtonTooltipsTerrain]: "Terrain",
	[Ui.MenuOptionsButtonOpenLogsFolder]: "Open Logs Folder",
	[Ui.MenuOptionsDescription]: "Change your game settings.",
	[Ui.MenuOptionsHeadingAudio]: "Audio",
	[Ui.MenuOptionsHeadingDeveloper]: "Developer Options",
	[Ui.MenuOptionsHeadingGameplayOptions]: "Gameplay Options",
	[Ui.MenuOptionsHeadingGeneralOptions]: "General",
	[Ui.MenuOptionsHeadingControls]: "Controls",
	[Ui.MenuOptionsHeadingLanguage]: "Language",
	[Ui.MenuOptionsHeadingModOptions]: "Mod Options",
	[Ui.MenuOptionsHeadingOther]: "Other Options",
	[Ui.MenuOptionsHeadingSaveData]: "Save Data",
	[Ui.MenuOptionsHeadingTooltips]: "Tooltips",
	[Ui.MenuOptionsHeadingVideo]: "Video",
	[Ui.MenuOptionsInterruptReloadGame]: "Are you sure you want\nto reload the game?",
	[Ui.MenuOptionsInterruptSaveDataClearAll]: "Are you sure you want\nto clear all save data?",
	[Ui.MenuOptionsInterruptSaveDataClearAllDescription]: "This includes options, game saves, and milestone progress.",
	[Ui.MenuOptionsInterruptSaveDataClearHighscores]: "Are you sure you want to\nremove your highscores?",
	[Ui.MenuOptionsInterruptSaveDataClearMilestones]: "Are you sure you want to\nreset your milestone progress?",
	[Ui.MenuOptionsInterruptSaveDataClearOptions]: "Are you sure you want to\nreset all of your options?",
	[Ui.MenuOptionsInterruptSaveDataClearSaves]: "Are you sure you want to\ndelete all of your game saves?",
	[Ui.MenuOptionsInterruptSaveDataClearCraftingRecipes]: "Are you sure you want to reset\nyour unlocked crafting recipes?",
	[Ui.MenuOptionsLabelInterfaceScale]: "Interface Scale",
	[Ui.MenuOptionsLabelTurnDelay]: "Turn Delay",
	[Ui.MenuOptionsLabelVolumeEffects]: "Effects",
	[Ui.MenuOptionsLabelVolumeMusic]: "Music",
	[Ui.MenuOptionsLabelControlsFilter]: "Filter",
	[Ui.MenuOptionsTabAudio]: "Audio",
	[Ui.MenuOptionsTabDeveloper]: "Developer",
	[Ui.MenuOptionsTabGameplay]: "Gameplay",
	[Ui.MenuOptionsTabGeneral]: "General",
	[Ui.MenuOptionsTabControls]: "Controls",
	[Ui.MenuOptionsTabMods]: "Mod Options",
	[Ui.MenuOptionsTabSaveData]: "Save Data",
	[Ui.MenuOptionsTabVideo]: "Video",
	[Ui.MenuOptionsTitle]: "Options",
	[Ui.MenuOptionsTooltipMusicNextTrack]: "Next Track",
	[Ui.MenuOptionsInterruptSaveDataClearCharacters]: "Are you sure you want to\ndelete all of your previous characters?",
	[Ui.MenuOptionsButtonSaveDataClearCharacters]: "Remove Saved Characters",
	[Ui.MenuOptionsBindChoose]: "Press anything to choose the bind.",
	[Ui.MenuOptionsBindChooseAdd]: "Press anything to choose the secondary bind.",
	[Ui.MenuOptionsBindableTypeGame]: "Gameplay", // Dynamic
	[Ui.MenuOptionsBindableTypeDialog]: "Dialogs", // Dynamic
	[Ui.MenuOptionsBindableTypeMenu]: "Menus", // Dynamic
	[Ui.MenuOptionsBindableTypeDeveloper]: "Developer", // Dynamic
	[Ui.MenuOptionsBindableTypeMod]: "Mods", // Dynamic
	[Ui.MenuOptionsBindLabelModifier]: "{0} + ",
	[Ui.MenuOptionsBindButtonResetTooltip]: "Reset to Default",
	[Ui.MenuOptionsBindButtonDeleteTooltip]: "Remove Binding",
	[Ui.MenuOptionsBindButtonAddTooltip]: "Add Secondary Binding",
	[Ui.MenuOptionsButtonAllowDiagonalMovement]: "Allow Diagonal Movement",
	[Ui.MenuOptionsButtonAlwaysShowMoreInformation]: "Always Show More Information",
	[Ui.MenuOptionsButtonAutoGatherHarvest]: "Auto Gather/Harvest",
	[Ui.MenuOptionsButtonAutoGatherHarvestTooltip]: "If checked, you will automatically gather/harvest when moving into resource tiles (with whichever hand(s) you have selected).",
	[Ui.MenuOptionsButtonAutoPickup]: "Auto Pick-up",
	[Ui.MenuOptionsButtonAutoPickupTooltip]: "If checked, you will automatically pick-up items as you move on top of them.",
	[Ui.MenuOptionsButtonDropOnGatherHarvest]: "Drop on Gather/Harvest",
	[Ui.MenuOptionsButtonDropOnGatherHarvestTooltip]: "If checked, you will automatically drop items under your character as you gather/harvest them.",
	[Ui.MenuOptionsButtonDropLocationFacing]: "Drop Items on Facing Tile",
	[Ui.MenuOptionsButtonDropLocationFeet]: "Drop Items at Feet",
	[Ui.MenuOptionsButtonDropLocationFeetWhenFacingBlocked]: "Drop Items at Feet When Facing Tile is Blocked",
	[Ui.MenuOptionsButtonKeepSortActive]: "Keep Sort Active",
	[Ui.MenuOptionsButtonKeepSortActiveTooltip]: "If checked, your inventory will keep sorting automatically as you get items.",
	[Ui.MenuOptionsButtonProtectedCraftingItems]: "Protected Crafting Items",
	[Ui.MenuOptionsButtonProtectedCraftingItemsTooltip]: "If checked, equipped and quickslotted items won't be used in crafting.",
	[Ui.MenuOptionsButtonUseAdjacentContainers]: "Use Adjacent Containers/Items",
	[Ui.MenuOptionsButtonUseAdjacentContainersTooltip]: "If checked, items in adjacent containers or tiles can be used in crafting and other actions.",
	[Ui.MenuOptionsButtonHideEquippedHeadgear]: "Hide Equipped Headgear",
	[Ui.MenuOptionsButtonHideEquippedHeadgearTooltip]: "If checked, equipped headgear on your character will not be visible to you.",
	[Ui.MenuOptionsButtonEnableAutoSave]: "Enable Auto Save",
	[Ui.MenuOptionsButtonEnableAutoSaveTooltip]: "If checked, your game will periodically be saved to help avoid data loss.",
	[Ui.MenuOptionsButtonWarnOnDangerousActions]: "Warn on Dangerous Actions",
	[Ui.MenuOptionsButtonWarnOnDangerousActionsTooltip]: "If checked, a confirmation screen will display when stepping over doodads or objects that could injure you.",
	[Ui.MenuOptionsButtonWarnWhenBreakingItemsOnCraft]: "On Craft/Dismantle",
	[Ui.MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip]: "If checked, a confirmation screen will display when trying to craft/dismantle using items that will break on use or failure.",
	[Ui.MenuOptionsButtonWarnWhenBreakingItemsOnUse]: "On Use",
	[Ui.MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip]: "If checked, a confirmation screen will display when trying to use damaged items that may break on use.",
	[Ui.MenuOptionsHeadingWarnWhenBreakingItems]: "Warn when Breaking Items",
	[Ui.MenuOptionsTooltipTurnDelay]: "The amount of movement delay that occurs after switching a direction or turning.",
	[Ui.MenuOptionsTooltipUiScaleClamped]: "Currently clamped to {#--text-color-faded:{0}} by the viewport resolution.",
	[Ui.MenuOptionsTooltipControlsFilter]: "Filter the game's bindable actions. You can do multiple selections at once with a comma {#--text-color-faded:({#--text-color-bind:,})} and invert a selection by prefixing it with an exclamation point {#--text-color-faded:({#--text-color-bind:!})}",
	[Ui.MenuOptionsButtonAlwaysShowMoreInformationTooltip]: "If checked, you will never have to hold down a key to show more information in tooltips.",
	[Ui.MenuOptionsButtonSaveDataClearBindings]: "Reset All Bindings",
	[Ui.MenuOptionsInterruptSaveDataClearBindings]: "Are you sure you want to\nreset all bindings to defaults?",
	[Ui.MenuOptionsTooltipDialogOpacity]: "Controls how opaque the in-game dialogs are.",
	[Ui.MenuOptionsLabelDialogOpacity]: "Dialog Opacity",

	[Ui.MenuPauseButtonContinue]: "Continue Game",
	[Ui.MenuPauseButtonOptions]: "Options",
	[Ui.MenuPauseButtonWorld]: "World",
	[Ui.MenuPauseButtonTitleScreen]: "Return to Title Screen",
	[Ui.MenuPauseButtonStopServer]: "Stop Server",
	[Ui.MenuPauseHeadingPaused]: "The Game Is Paused",
	[Ui.MenuPauseParagraphPaused]: "",
	[Ui.MenuPauseHeadingNotPaused]: "The Game Is Not Paused!",
	[Ui.MenuPauseParagraphNotPaused]: "In multiplayer, the game does not pause unless the host has paused it.",
	[Ui.MenuPauseHeadingDedicatedServer]: "Dedicated Server",
	[Ui.MenuPauseParagraphDedicatedServer]: "The server is up and running.",
	[Ui.MenuPauseInterruptGhostKeepSave]: "You are dead.\nDo you want to keep this save?",
	[Ui.MenuPauseInterruptGhostKeepSaveDescription]: "Your highscore and unlocks are saved.",

	[Ui.MenuWorldTitle]: "World",
	[Ui.MenuWorldDescription]: "Configure world settings.",
	[Ui.MenuWorldHeadingMultiplayer]: "Multiplayer",
	[Ui.MenuWorldOpenServer]: "Open Server",
	[Ui.MenuWorldOpenServerDescription]: "Allow players to join your game.",
	[Ui.MenuWorldPauseServer]: "Pause Server",
	[Ui.MenuWorldPauseServerDescription]: "Pause or resume the game.",

	[Ui.MenuJoinDedicatedServerTitle]: "Join a Dedicated Server",
	[Ui.MenuJoinDedicatedServerDescription]: "Join a dedicated multiplayer server.",
	[Ui.MenuJoinDedicatedServerIP]: "IP",
	[Ui.MenuJoinDedicatedServerIPPlaceholder]: "Server IP or Hostname",
	[Ui.MenuJoinDedicatedServerNext]: "Next",

	[Ui.MenuSharedSortBy]: "Sort By",
	[Ui.MenuSharedSortDirection]: "Sort Direction",
	[Ui.MenuSharedMultiplayerChoiceLobbyTypeFriends]: "Open to Friends",
	[Ui.MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription]: "Anyone may be invited to the server, and the game will be visible and joinable to your friends.",
	[Ui.MenuSharedMultiplayerChoiceLobbyTypePublic]: "Open to Anyone",
	[Ui.MenuSharedMultiplayerChoiceLobbyTypePublicDescription]: "The game will be visible and joinable for anyone.",
	[Ui.MenuSharedMultiplayerChoiceLobbyTypePrivate]: "Private",
	[Ui.MenuSharedMultiplayerChoiceLobbyTypePrivateDescription]: "The only way for players to join the game is to be invited.",
	[Ui.MenuSharedMultiplayerChoicePVP]: "PVP",
	[Ui.MenuSharedMultiplayerChoicePVPDescription]: "Allow players to attack each other.",
	[Ui.MenuSharedMultiplayerMaxPlayers]: "Max Players",
	[Ui.MenuSharedRealTimeTickSpeedTooltip]: "The time it takes for a tick to occur in real-time mode.",
	[Ui.MenuSharedRealTimeTickSpeedLabel]: "Tick Time",
	[Ui.MenuSharedButtonDefault]: "Default",
	[Ui.MenuSharedValueTickSpeed]: "{0}ms",
	[Ui.MenuSharedValuePercentage]: "{0}%",

	[Ui.MiscPlayerNameDefault]: "Player",
	[Ui.MiscPlayerNameServer]: "Server",
	[Ui.MiscSaveNameDefault]: "Untitled Save {0}",
	[Ui.MiscSaveVersionUnknown]: "Unknown",
	[Ui.MiscDailyChallengeName]: "Daily Challenge {0}",
	[Ui.MiscDifficultyHardcore]: "Hardcore", // Dynamic
	[Ui.MiscDifficultyCasual]: "Casual", // Dynamic
	[Ui.MiscDifficultyDailyChallenge]: "Daily Challenge", // Dynamic
	[Ui.MiscVersion]: "{0} {1}.{2}.{3}",
	[Ui.MiscVersionBeta]: "Beta", // Dynamic
	[Ui.MiscVersionRelease]: "Release", // Dynamic
	// TODO after language rewrite move to new dictionary
	[Ui.MiscPartOfDayDawn]: "Dawn", // Dynamic
	[Ui.MiscPartOfDaySunrise]: "Sunrise", // Dynamic
	[Ui.MiscPartOfDayDaytime]: "Daytime", // Dynamic
	[Ui.MiscPartOfDaySunset]: "Sunset", // Dynamic
	[Ui.MiscPartOfDayDusk]: "Dusk", // Dynamic
	[Ui.MiscPartOfDayNighttime]: "Nighttime", // Dynamic
	[Ui.MiscBindableOr]: "{0} OR ",
	[Ui.MiscBindableNoBindings]: "No Bindings",
	[Ui.MiscTime]: "{0}{2?::{1}}{3?{3}}",
	[Ui.MiscTimeMeridiem]: " {0?AM:PM}",

	[Ui.SharedListSeparator]: ", ",

	[Ui.SteamworksInterruptURLOpenedInBrowser]: "The URL has been opened in your default web browser.",
	[Ui.SteamworksInterruptURLOpenedInBrowserDescription]: "",
	[Ui.SteamworksInterruptWorkshopOpenedInBrowser]: "The Steam Workshop has been opened in a browser.",
	[Ui.SteamworksInterruptWorkshopOpenedInBrowserDescription]: "Press OK after you're done viewing the Workshop.",
	[Ui.SteamworksInterruptModWithNameAlreadyExists]: "A mod with that name already exists. Try changing the name of the slot.",
	[Ui.SteamworksInterruptModWithNameAlreadyExistsDescription]: "",
	[Ui.SteamworksInterruptModImportSaveGameFailure]: "Failed to import the save game from the mod '{0}'.",
	[Ui.SteamworksInterruptModImportSaveGameFailureDescription]: "",
	[Ui.SteamworksInterruptModImportedSaveGame]: "The mod '{0}' has imported a saved game.",
	[Ui.SteamworksInterruptModImportedSaveGameDescription]: "",
	[Ui.SteamworksInterruptLoadingRefreshingMods]: "Refreshing Mods",
	[Ui.SteamworksInterruptLoadingRefreshingModsDescription]: "",
	[Ui.SteamworksInterruptOpenFolderFailure]: "Failed to open the folder.",
	[Ui.SteamworksInterruptOpenFolderFailureDescription]: "Please navigate to the folder manually.",

	// old
	// autosort
	[Ui.EquipmentBack]: "Back",
	[Ui.EquipmentBelt]: "Belt",
	[Ui.EquipmentChest]: "Chest",
	[Ui.EquipmentFeet]: "Feet",
	[Ui.EquipmentHands]: "Hands",
	[Ui.EquipmentHead]: "Head",
	[Ui.EquipmentLeftHand]: "Left Hand (Held)",
	[Ui.EquipmentLeftHandOption]: "Left Hand",
	[Ui.EquipmentLegs]: "Legs",
	[Ui.EquipmentNeck]: "Neck",
	[Ui.EquipmentRightHand]: "Right Hand (Held)",
	[Ui.EquipmentRightHandOption]: "Right Hand",
	[Ui.EquipmentUse]: "Use",
	[Ui.HudFilter]: "Filter",
	[Ui.QuickSlot1]: "1",
	[Ui.QuickSlot2]: "2",
	[Ui.QuickSlot3]: "3",
	[Ui.QuickSlot4]: "4",
	[Ui.QuickSlot5]: "5",
	[Ui.QuickSlot6]: "6",
	[Ui.QuickSlot7]: "7",
	[Ui.QuickSlot8]: "8",
	[Ui.QuickSlot9]: "9",
	[Ui.TabCrafting]: "Crafting",
	[Ui.TabDismantle]: "Dismantle",
	[Ui.Version]: "Wayward _0_",
	[Ui.WindowTitleContainer]: "Container",
	[Ui.WindowTitleCrafting]: "Crafting",
	[Ui.WindowTitleEquipment]: "Equipment",
	[Ui.WindowTitleInventory]: "Inventory",
	[Ui.WindowTitleMap]: "Map",
	[Ui.WindowTitleMilestones]: "Milestones",
	[Ui.WindowTitleSkills]: "Skills"
};

export default uiTranslations;
