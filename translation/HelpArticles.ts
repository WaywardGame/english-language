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

// tslint:disable trailing-comma

import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";

let articles: Descriptions<HelpArticle, [string, string, string, string]>;
export default articles = {
	[HelpArticle.Welcome]: [
		"Welcome to Wayward",
		"A short summary of the help menu, and links to more resources on the game.",
		"Welcome to the Early Access version of Wayward!",
		`Disclaimer: Wayward is currently in beta status and many things will change and improve over time.
	
		This is the help menu, which you can use to learn mechanics of the game. If you can't find the information you're looking for in this menu, you can also visit the {link(http://steamcommunity.com/app/379210/discussions/):Steam Discussion forums}.
	
		If you want to keep up with Wayward, please visit the {link(http://www.waywardgame.com):Wayward Website}, {link(http://www.reddit.com/r/Wayward):Subreddit}, or {link(https://discord.gg/wayward):Discord}.
	
		Want to help Wayward? Spread the word, or follow us on one of the following sites: {link(https://www.facebook.com/waywardgame):Facebook}, {link(https://twitter.com/Wayward_Game):Twitter}, or {link(http://www.indiedb.com/games/wayward):IndieDB}.`
	],

	[HelpArticle.Controls]: [
		"Controls",
		"A guide on using the keybindings associated with common actions in the game, to speed up gameplay, and other related tips and tricks.",
		"Learn common keybinds for the game.",
		`{heading:Main Keybinds}
	
		{#--text-color-faded:Pause Menu:} {Bindable.GamePause}
		{#--text-color-faded:Save Game:} {Bindable.GameSave}
		{#--text-color-faded:Help:} {Bindable.DialogHelp}
		{#--text-color-faded:Options:} {Bindable.DialogOptions}
		{#--text-color-faded:Milestones:} {Bindable.DialogMilestones}
		{#--text-color-faded:Notes:} {Bindable.DialogNotes}
		{#--text-color-faded:Messages:} {Bindable.DialogMessages}
		{#--text-color-faded:Actions:} {Bindable.GameActions}
		{#--text-color-faded:Inventory:} {Bindable.DialogInventory}
		{#--text-color-faded:Crafting:} {Bindable.DialogCrafting}
		{#--text-color-faded:Equipment:} {Bindable.DialogEquipment}
		{#--text-color-faded:Skills:} {Bindable.DialogSkills}
		{#--text-color-faded:Close All Dialogs:} {Bindable.DialogCloseAll}
		
		Keybindings can be changed in the {link(Menu.Options.5):Options Menu}. 
		
		For more binds, see the {link(Menu.Options.5):Options Menu}.
		
		{heading:Movement}
		
		{#--text-color-faded:Directional movement:} {Bindable.GameMoveUp} (up), {Bindable.GameMoveLeft} (left), {Bindable.GameMoveDown} (down), {Bindable.GameMoveRight} (right)
		
		{#--text-color-faded:Move towards mouse:} {Bindable.GameMoveDirection}

		{#--text-color-faded:Move to the tile under the mouse:} {Bindable.GameMoveToTile}
		
		{#--text-color-faded:Skip/pass a turn:} {Bindable.GameIdle} or {Bindable.GameMoveDirection} (with your mouse over your character).
		
		{#--text-color-faded:Facing a direction without moving:} {Bindable.GameFaceDirection} and your character will face towards your mouse (there are corresponding facing binds for all directions as well).
		
		If there is too much or too little delay between turning a direction and moving, you can fine-tune it in the {link(Menu.Options.3):Options Menu}.
		
		{heading:Actions}
		
		Interacting through the world is done mostly through the {link(Menu.HelpArticle.Actions):actions} menu, opened using {Bindable.GameActions}.
		
		{heading:Using Items}
		
		See {link(Menu.HelpArticle.Actions):Actions} and {link(Menu.HelpArticle.Quickslots):Quickslots}.
		
		{heading:Item Management}
		
		 _Dropping items_ 
		
		{#--text-color-faded:Drop an item:} {Bindable.GameItemDrop} (when the mouse is over the item), or use the {link(Menu.HelpArticle.Actions):"Drop" action} on the item. 
		
		{#--text-color-faded:Drop all of a type of item:} {Bindable.GameItemDropAll} (when the mouse is over the type of item to drop), or use the {link(Menu.HelpArticle.Actions):"Drop All" action}.
		
		If there is a tile in the way of dropping an item, by default nothing will happen. You may change this functionality in the "Drop Location" setting, available in the {link(Menu.Options.3):Options Menu} and the Quick Settings dialog.
		
		 _Moving items_ 
		
		{#--text-color-faded:Quickly moving items between containers:} {Bindable.GameItemQuickMove} (when the mouse is over the item)
		
		{#--text-color-faded:Quickly moving all of the same type of item between containers:} {Bindable.GameItemQuickMoveAll} (when the mouse is over the type of item)
		
		Quick-moving items works with your open container dialog, or, if there is no container dialog open, the container your character is facing.
		
		{heading:More Information}
		
		Hovering over elements on screen will typically reveal more information, usually in a tooltip. Some examples include items in dialogs, and doodads, creatures, and items in the world. Items in the crafting dialog will highlight the items that will be used when they are crafted.
		
		Tooltips for tiles in the world can be disabled. When this is the case, you can still get information about the tile you are hovering over with {Bindable.GameInspect}.`
	],

	[HelpArticle.Interface]: [
		"Interface",
		"How to interact with and customize the windows/dialogs.",
		"The customizable windows/dialogs of Wayward.",
		`Wayward uses dialogs, or windows, for displaying most in-game information. This means the interface is almost completely customizable.
	
		You can move the dialogs by dragging them by the title bar, and you can resize them by dragging on their edges or corners.
	
		The "static" elements on the screen, namely, your stats, the menu bar, and the list of messages, can all be moved to other corners or edges of the screen, using the options in their context menus ({Bindable.MenuContextMenu}). The list of messages can be put into a dialog with {Bindable.DialogMessages} or using the "Show as Dialog" option in its context menu.
	
		The interface setup for each world is retained between saving and loading the game.`
	],

	[HelpArticle.InventoryManagement]: [
		"Inventory\nManagement",
		"Learn ways of organizing, moving, and dropping items.",
		"Organizing, moving, and dropping items.",
		`There are many ways to organize and move items in Wayward.
	
		1.  _Drag and Drop_ : By holding {Bindable.GameItemMove}, you may drag and drop items into a container window, quickslot, equipment slot, or directly on to the ground. Dragging and dropping to the game screen will drop it in front of you, or inside a chest if you are facing one.
		
		2.  _Quickmoving_ : With {Bindable.GameItemQuickMove} you can move an item instantly from your inventory to a container or vice-versa. You can use this while the container is not open, if your character is facing towards it. You may also use {Bindable.GameItemQuickMoveAll} to instantly move all items of the same type.
		
		3.  _From the item's menu_ : You can use {link(Menu.HelpArticle.Actions):actions} to drop and move items as well: namely, "Drop", "Drop All", "Move", and "Move All". The "Move" actions will only appear if there is a container window open. If the item in question is of a high quality, there will be actions for dropping or moving all items of that quality.
		
		4.  _Dropping items_ : By pressing {Bindable.GameItemDrop}, you may drop an item onto the ground. If the tile in front of you is blocked, nothing will happen, or the item will be dropped at your feet, if your "Drop Location" option is set to "Drop at Feet When Blocked". You may also press {Bindable.GameItemDropAll} to drop all items of the same type.`
	],

	[HelpArticle.Quickslots]: [
		"Quickslots",
		"Learn the easier way to use actions on items.",
		"The easier way to use actions on items.",
		`{link(Menu.HelpArticle.Actions):Opening an item's menu to perform actions} can be tiresome. Quickslots are for using an action on an item with the press of a bind.
	
		{heading:Quickslotting an Item}
		
		You can drag any item into one of your nine quickslots to quickslot the item in that slot. You can also use any of the quickslot binds to toggle the item being quickslotted to the slot of the bind you press. Alternatively, you can use the {link(Menu.HelpArticle.Actions):"Add to Quickslot" action} to add it to an open quickslot.
		
		{heading:Using a Quickslotted Item}
		
		By default, pressing the bind for a quickslot will perform the default {link(Menu.HelpArticle.Actions):action} for the item in that slot; the action depends on what kind of item it is. 
		
		You can change the action to perform for a quickslot item by opening the actions menu ({Bindable.GameItemMenu}), and clicking the x icon next to the preferred action, turning it into a √.
		
		{heading:Removing a Quickslotted Item}
		
		There are two binds provided for removing items from quickslots. You can press {Bindable.GameQuickSlotClear} to clear the hovered item from its quickslot, or to clear the hovered quickslot. You can also press any of the quickslot binds to toggle the hovered item being quickslotted to that slot.`
	],

	[HelpArticle.FastPickup]: [
		"Fast Pick-up",
		"A summary on ways to pick up items on the ground.",
		"A quick way to get items on the ground.",
		`If there is an item on a tile that you would like to pick up, you can either walk onto the tile (if the {link(Menu.Options.3):"Auto Pick-up" option} is enabled) or use the {link(Menu.HelpArticle.Actions):"Pick-up Item" action} while facing the tile. 
		
		There can be multiple items on a tile. When you are standing over them, you can press {Bindable.GameIdle} to pass the turn and gather the items one at a time. Alternatively, you can pick up all the items on the tile by facing the tile, then using the {link(Menu.HelpArticle.Actions):"Pick-up All Items" action}.`
	],

	[HelpArticle.Actions]: [
		"Actions",
		"A guide on how to interact with items, tiles, or the things on a tile.",
		"Interacting with tiles and items.",
		`Opening up the actions menu ({Bindable.GameActions}) will bring up a list of actions you can perform, usually on the tile or object you're facing. Some examples include collecting fruits from plants, picking up {link(Menu.HelpArticle.Doodads):doodads} you've placed, and resting. There is also the "Jump" action that can help you get out of tight spots, but be careful when using it as it reduces stamina based on the weight you're carrying.
		
		All items also have actions that can be performed on them. The item actions menu is opened by pressing {Bindable.GameItemMenu}. Tools will usually have actions that can be used on the facing tile, while other items will have actions that affect the tile you're standing on, or just you, such as consuming a food with the "Eat" action.
		
		Since finding an item in your inventory and using the item action menu on it can be a pain, you can use {link(Menu.HelpArticle.Quickslots):quickslots} to speed up the process.`
	],

	[HelpArticle.Stats]: [
		"Stats",
		"Learn how to understand and manage your health, stamina, hunger, and thirst.",
		"A numerical representation of your wellbeing.",
		`You have four core stats: {#--stat-color-health:Health}, {#--stat-color-stamina:Stamina}, {#--stat-color-hunger:Hunger}, and {#--stat-color-thirst:Thirst}.
		
		{heading:Decaying Stats}
		
		If your {#--stat-color-stamina:stamina} is 0 and you take an action, you will lose {#--stat-color-health:health}.
		
		When your {#--stat-color-hunger:hunger} or {#--stat-color-thirst:thirst} tick below zero, each subsequent time they go down, your health will be reduced by their current amount. For example, if you have -4 {#--stat-color-hunger:hunger}, and it goes down to -5, you will lose 5 {#--stat-color-health:health}.
		
		When your {#--stat-color-health:health} reaches 0, you will die.
		
		{heading:Replenishing Stats}
		 
		{#--stat-color-stamina:Stamina} replenishes slowly over time, but can also be replenished by resting, sleeping, and most food items.
		 
		{#--stat-color-hunger:Hunger} and {#--stat-color-thirst:thirst} can be replenished by food and water.
		 
		{#--stat-color-health:Health} recovers slowly over time, but can be restored with bandages, other health items, and some types of food.
		
		{heading:Maximum Stats}
		
		Using skills have the chance to increase the maximum values of your stats. An increase in strength will increase the maximum value of your {#--stat-color-health:health} as well as your {link(Menu.HelpArticle.Overweight):weight limit}. An increase in dexterity will increase your maximum {#--stat-color-stamina:stamina}. An increase in metabolism will increase both {#--stat-color-hunger:hunger} and {#--stat-color-thirst:thirst}.
		
		There are also legendary items that can be {link(Menu.HelpArticle.Crafting):crafted} or found that will increase your stats when equipped.`
	],

	[HelpArticle.Doodads]: [
		"Doodads",
		"Learn about, and how to interact with, objects placed in the world, such as plants or structures.",
		"A guide on plants, structures, and other objects affixed to the ground.",
		`Objects attached to the ground like plants, piles of rocks, furnaces, and even campfires are considered to be a "doodad". 
		
		To "collect" them (pick them up), you can do one of the following:
	
		1. While facing the doodad, use the {link(Menu.HelpArticle.Actions):"Collect Object With Hands" action}.
		2. Use an item with a "Digging" use, such as a stone shovel.
		3. Use an item with a "Carving" use, such as a sharp rock.
		4. Use an item with a "Gather" use, such as a wooden pole.
		5. Use an item with a "Harvest" use, such as a stone knife.
		
		Using your bare hands (the first of the above options) can sometimes harm you. The other options are safe, as they use tools, but they will decrease the durability of that tool.`
	],

	[HelpArticle.ResourceGathering]: [
		"Resource\nGathering",
		"A guide on collecting items from the environment or creatures.",
		"Collecting items from the environment.",
		`To gather resources from trees or rocks, you must use the "Gather" action from an item's menu. It is also recommended you quickslot it for quick usage. You may have to default its usage as "Gather" if it is not the default action. See {link(Menu.HelpArticle.Quickslots):Quickslots} for more information on this functionality. You may not always succeed in gathering materials (the chances are based on your skill and tool).
	
		Alternatively, if you have the "Auto Gather/Harvest" option set, you can simply move into resource tiles that block movement to gather. You will use whatever is in your hands to gather. You can choose what tool specifically is used in either your left or right hand by selecting which to use at the bottom of your equipment menu. It is harmful to try to resource gather without tools.
	
		Some resources are not gathered in this fashion. Things like small plants and other objects attached to the ground (referred to as doodads) require different methods. Review the {link(Menu.HelpArticle.Doodads):"Doodads" help entry} for more information on these items.
		
		{heading:Resource Stages}
		
		Many plant-based resources have cycles of growth, following a predictable pattern from "germinating" all the way up to "ripening". Every plant and fungus features unique resources at each stage of growth. If you attempt to gather or harvest from a plant too early, you may not get the full amount of resources. Knowing the steps of growth is also important when {link(Menu.HelpArticle.Gardening):gardening}.
		
		{heading:Gathering & Harvesting}
		
		Gathering is a destructive process, meaning, you will attempt to gather everything from the plant. Some vegetables and fruits require this to get the edible portion, such as potatoes or carrots for example.

		Harvesting a plant will only attempt to get what will keep the plant alive and/or sustainable. This is not always an option for all plants, and sometimes will only result in getting their seeds.`
	],

	[HelpArticle.Milestones]: [
		"Milestones",
		"A short guide on Wayward's achievement system.",
		"The achievement system of the game.",
		`Milestones are a list of goals or achievements you can work towards. Milestone progress is retained between characters and saves. Completing a milestone unlocks higher starting skills, stat points, and even more items.
		
		Most milestones add up over time, such as "Friendly", which counts how many creatures you tame, or "Chef", which counts how many times you cook food. However, there are a few milestones that simply require an amount of something to be unlocked. Examples of this milestone type are "Malevolent" and "Benevolent", which require your malignity or benignity to be at 64000.`
	],

	[HelpArticle.HeldItems]: [
		"Held Items",
		"Using the left and right hand equipment slots.",
		"Understanding the use of both of your hands.",
		`Your left and right hand equipment slots are interchangeable. You can equip two weapons, two tools, two shields or any combination in between. 
		
		You will notice the options "Left Hand" and "Right Hand" in the equipment dialog ({Bindable.DialogEquipment}). With both options enabled, you will use both hands (and whatever is equipped in each slot) in combat and in gathering/harvesting (with "Auto Gather/Harvest" enabled). Only one hand is used per turn, so both being enabled means the hands switch off. Be careful to disable a hand if you don't have something equipped in it, as you could harm a hand by mistake. 
		
		If both hands are disabled, automatic gathering and combat is not possible.
	
		To receive a parrying defense bonus, you must be holding an item in each hand (one to parry with, one to fight with).`
	],

	[HelpArticle.Crafting]: [
		"Crafting",
		"A guide to the crafting system: What items to use, and affecting the output durability and quality.",
		"The ins and outs of smashing materials together.",
		`You can open the crafting dialog with the "Crafting" menu bar button, or with {Bindable.DialogCrafting}.
		
		Crafting is simple to perform, but the system has a lot of depth.
		
		 _Which Items Are Used_ 

		When hovering over a recipe (item) in the crafting window, the items that will be used to craft it will be highlighted with a white border. 
		
		You may notice that the recipe always uses the first instance of the item in your inventory. To change what items are used in a craft, you can simply change the order of the items in your inventory.
		
		 _Durability and Quality_ 
		
		The durability and quality of crafting ingredients affects the durability and quality of the resulting item: 
		- Ingredients that are damaged will cause the resulting item to be less durable. 
		- Using remarkable, exceptional or legendary items increases your chances to craft a high-quality item. 
		- Decayable items (such as food) also gain decay bonuses from using higher quality items in the craft.
		
		 _Unlocking New Recipes_ 
		
		You can find new crafting recipes by gathering the required items in your inventory and by finding old instructional scrolls.`
	],

	[HelpArticle.Death]: [
		"Death",
		"It will happen to us all eventually. This contains information about what carries over between lives.",
		"What carries over between lives.",
		"Death is permanent. Although you may have died, all of the crafting recipes you have discovered will be ready on your next playthrough. Your {link(Menu.HelpArticle.Milestones):milestones} will also carry over, providing you multiple starting benefits."
		// TODO include some insights on how to avoid death maybe?
	],

	[HelpArticle.Taming]: [
		"Creature Taming",
		"A small guide on how to tame creatures using a variety of methods.",
		"Learn about all the options for taming creatures.",
		`There's a variety of methods for attempting to tame creatures in Wayward. These include:
		
		1. Using the {link(Menu.HelpArticle.Actions): "Tame" action in the action menu} when facing a 
		creature. The chances of success of this method are quite low, especially at lower skill levels and varies depending on what the creature is and their difficulty.
		2. Using the "Offer" option on an item when facing a creature. If the creature wants the item, it will accept you as its owner.
		3. Dropping items on the ground and having creatures move over it will have them become tame towards you (or any player that is closest to the creature) if they accept the item.
		
		Aberrant creatures are harder to tame and will sometimes reject you as its owner even when offering items. This chance is based on your animal taming skill.`
	],

	[HelpArticle.Gardening]: [
		"Gardening",
		"Learn about the cycles of growth for plant-life and tips on gardening.",
		"Tips on gardening and information on growth cycles.",
		`The full plant life cycle is represented within Wayward. In order, these are: germinating, seedling, vegetative, budding, flowering, ripening, and dead. Fungus follows the same steps, but are named: germinating, spreading, forming, young, fruiting, and full. Each of these stages provide different {link(Menu.HelpArticle.ResourceGathering):resources when gathering or harvesting}.
		
		You can attempt to water plants (by using the "Pour" action on water containers) or plant them on fertile soil to reduce their growth time and increase their fertility for spreading when mature enough to spread.
		
		Through the use of fertilization, you can promote the fertility of plants (spreading and propagation) and decrease growing time. By combining compostable items to produce compost, and making bone meal through the grinding of bones, you can craft fertilizer. Combine it with soil (produced when digging dirt) to create fertile soil. Fertile soil can be placed down, tilled, then used as the target for planting seeds and mushrooms.`
	],

	[HelpArticle.Overweight]: [
		"Overweight",
		"Learn the impacts of being overweight.",
		"Understanding being encumbered and overburdened.",
		`If you are carrying too much weight, you will be "Encumbered". The first level of encumbrance will slow down your movement and reduce {link(Menu.HelpArticle.Stats):stamina regeneration}. If it progresses to the second level, "Overburdened", you will take damage as you move. 
	
		You can drop items from your inventory with {Bindable.GameItemDrop}, {Bindable.GameItemDropAll} (to drop all of one type of item), you can use the {link(Menu.HelpArticle.Actions):"Drop" action on the item}, or you can drag and drop them on to the game screen.`
	],

	[HelpArticle.Merchants]: [
		"Merchants",
		"Learn how to trade and interact with wandering merchants.",
		"Interacting with non-playable characters.",
		`You can drag items into the wandering merchant's inventory to receive barter credit. Alternatively, you can also use the item's menu to trade as well. You can use this barter credit to trade for other items that you wish to receive in return. You can come back at any time to trade with the merchant, but be careful, they may "wander" away for good eventually.
		
		Your bartering skill influences the amount of barter credit received when trading items; however, merchants will always trade items back at a higher value.
		
		If you do not wish to trade with the merchant, you can also choose to instigate an attack towards the wanderer using the {link(Menu.HelpArticle.Actions):"Attack" option in the action menu}. But, be careful; they won't take kindly to such hostile actions.`
	],

	[HelpArticle.Multiplayer]: [
		"Multiplayer",
		"Information on the multiplayer system in Wayward.",
		"Survival is easier with company!",
		`Multiplayer in Wayward is enabled for up to 32 players. Multiplayer works on a simulated real-time mode where each turn happens on a fixed interval. "Casual" and "Hardcore" modes work a bit differently than in single player. Casual mode allows players to respawn as per normal, but in hardcore mode, when you die you will continue to play in ghost form, allowing you to spectate but not interact normally. Multiplayer also allows for a special PVP flag to be set to allow players to hurt and kill other players. Multiplayer options can be set in the multiplayer menu via the pause menu accessed with {Bindable.GamePause}.
	
		Creature spawn rates, creature difficulty, and reputation are all based on how many connected players there are and will scale and average based on each individual player.
		
		{heading:Commands}
		You can use several special commands while playing multiplayer. To see a list of all possible commands, type "/commands" in the chat bar and hit enter. The following commands are also available for use:
	
		{#--text-color-faded:/players} — Shows a list of all connected players.
		{#--text-color-faded:/ping} — Shows your latency to the host player.
		{#--text-color-faded:/kick} — Allows the host to kick a player.
		{#--text-color-faded:/banned} — Shows a list of all banned players.
		{#--text-color-faded:/ban} — Allows the host to ban a player.
		{#--text-color-faded:/unban} — Allows the host to unban a player.`
	],

	[HelpArticle.Bugs]: [
		"Bugs and Errors",
		"Did you get an error? Please report it!",
		"Learn how to report bugs and debug Wayward.",
		`Please report all the issues you spot! While we try to ensure Wayward is very stable, some things fall through the cracks. Wayward is still in beta status and our development team is very small. Therefore, without players reporting issues, they may stay unresolved. If you do report your bugs, we cannot express just how much we appreciate them! 
		
		With that being said, {link(https://steamcommunity.com/sharedfiles/filedetails/?id=798938225):here is a guide on how to report and debug issues you have with Wayward}.
		
		Report bugs and issues at:
		1. {link(http://steamcommunity.com/app/379210/discussions/1/):Steam Discussions Bug Reports forum} OR
		2. {link(https://discord.gg/wayward):Discord}`
	]
};
