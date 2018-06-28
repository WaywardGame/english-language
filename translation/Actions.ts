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

import { ActionType as Action } from "Enums";
import { IActionDictionary } from "language/ILanguage";

let actions: IActionDictionary;
export default actions = {
	// autosort
	[Action.AddFuel]: ["Add Fuel", ""],
	[Action.Attack]: ["Attack", ""],
	[Action.Build]: ["Build", "Attempt to construct or assemble the item on the tile you are facing towards."],
	[Action.Carve]: ["Carve", "Used to carve creature corpses or to remove objects attached to the ground."],
	[Action.Cast]: ["Cast", "Find a fish in a body of water and attempt to cast your line or net to catch it."],
	[Action.CloseContainer]: ["Close Container", ""],
	[Action.CloseDoor]: ["Close Door", ""],
	[Action.Craft]: ["Craft", ""],
	[Action.Decode]: ["Decode", "Used for attempting to read the map. Use by the treasure location to reveal how far or close you are."],
	[Action.Dig]: ["Dig", "Used to dig up resources and items from the ground."],
	[Action.Disassemble]: ["Disassemble", ""],
	[Action.Dismantle]: ["Dismantle", ""],
	[Action.DrawMap]: ["Draw Map", "Draw a map using your skill in cartography of the surrounding area."],
	[Action.DrinkCure]: ["Drink Cure", "Consumed on use. Used to cure poisoning while sometimes providing other health benefits."],
	[Action.DrinkInFront]: ["Drink in Front", ""],
	[Action.DrinkItem]: ["Drink", "Consumed on use. Will reduce your thirst; however, will provide negative effects when drinking sea/unpurified water."],
	[Action.Drop]: ["Drop", ""],
	[Action.Eat]: ["Eat", "Consumed on use. May provide benefits to hunger, thirst, health and stamina; however, may reduce them as well depending on the food."],
	[Action.Equip]: ["Equip", ""],
	[Action.Extinguish]: ["Extinguish", "Douse the torch, extinguishing the flame."],
	[Action.Fire]: ["Fire", "Using a mixture of black powder along with a bullet, you may fire this weapon."],
	[Action.Gather]: ["Gather", "Can be used directly to gather from an adjacent resource tile/object. Gathering will attempt to gather everything, destroying the plant or mushroom in the process."],
	[Action.GatherMilk]: ["Gather Milk", "Attempt to gather milk from a creature you are facing."],
	[Action.GatherTreasure]: ["Gather Treasure", "Attempt to gather a treasure in the vicinity of use based on a decoded treasure map. Range of gather is dependent on your mining skill."],
	[Action.GatherWater]: ["Gather Water", "Used to gather water into the item."],
	[Action.Grasp]: ["Grasp", "Used to pick-up items using another item for safety reasons such as grasping items in a fire."],
	[Action.Harvest]: ["Harvest", "Can be used to harvest an adjacent plant or mushroom without destroying the plant itself, harvesting just the produce."],
	[Action.Heal]: ["Heal", "Consumed on use. Used to restore a varied amount of health."],
	[Action.HealOther]: ["Heal Other", "Consumed on use. Used to restore a varied amount of health to a creature or human entity."],
	[Action.Idle]: ["Idle", ""],
	[Action.Ignite]: ["Ignite", "Use this item on a fire source to start it on fire."],
	[Action.Jump]: ["Jump", ""],
	[Action.Learn]: ["Learn", "Consumed on use. Reading usually provides useful knowledge."],
	[Action.LockPick]: ["Lock Pick", "Used to unlock locked objects."],
	[Action.Move]: ["Move", ""],
	[Action.MoveItem]: ["Move Item", ""],
	[Action.MoveTo]: ["Move To", ""],
	[Action.Offer]: ["Offer", ""],
	[Action.OpenBottle]: ["Open Bottle", "Consumed on use. Using this will open it, providing new and unknown items."],
	[Action.OpenContainer]: ["Open Container", "Using this will open it where you may drag and drop items to and from. Weight reduction and decay reduction bonuses may apply to items inside."],
	[Action.OpenDoor]: ["Open Door", ""],
	[Action.Paddle]: ["Paddle", "Used to travel over water without getting your feet wet. Your speed is not reduced in water while paddling."],
	[Action.Pet]: ["Pet", ""],
	[Action.Pickup]: ["Pick-up", ""],
	[Action.PickupAllItems]: ["Pickup All Items", ""],
	[Action.PickupItem]: ["Pickup Item", ""],
	[Action.PlaceDown]: ["Place Down", "Place the item down to the adjacent tile so it can be used on the ground instead of directly from your inventory."],
	[Action.Plant]: ["Plant", "Attempts to plant the item on the tile you are facing towards. Some plants may require certain ground types or conditions to be planted."],
	[Action.Pour]: ["Pour", "Pour on fire to extinguish the flames, pour inside a water still to begin water filtration, pour on a suitable plant to increase its health, or just simply empty out."],
	[Action.PourOnYourself]: ["Pour on Yourself", "Liquid is consumed on use. Used to sooth burn injuries."],
	[Action.Preserve]: ["Preserve", "Used with food items to extend their life and decay rate."],
	[Action.Read]: ["Read", "Open the book and read the contents."],
	[Action.Reinforce]: ["Reinforce", "Consumed on use. Use while facing a damaged item to attempt to increase the overall maximum and minimum durability. Success based on skill used to make the item."],
	[Action.Release]: ["Release", ""],
	[Action.Rename]: ["Rename", ""],
	[Action.Repair]: ["Repair", "Use while facing a damaged item to attempt to repair it. Success based on skill used to make the item."],
	[Action.Rest]: ["Rest", "Used to rest for a period of time to regain health and stamina. You will stop resting when reaching full stamina."],
	[Action.RubClockwise]: ["Rub Clockwise", "Rubbing this item manifests its effects to the holder."],
	[Action.RubCounterclockwise]: ["Rub Counterclockwise", "Rubbing this item manifests its effects to the holder."],
	[Action.SailToCivilization]: ["Sail To Civilization", "After collecting all the pieces of treasure, you can return to civilization and bask in the glory of your riches and fame. You can always return back to these lands afterwards."],
	[Action.SetDown]: ["Set Down", "Using this item will place it on top of whatever tile is present in your facing direction. This is different than just dropping the item."],
	[Action.Shoot]: ["Shoot", "You can shoot arrows with this item."],
	[Action.Sleep]: ["Sleep", "Used to sleep for a period of time to regain health and stamina. Duration is based on camping skill and time of day. A bonus to all effects (including length) will be granted if facing a fire or lit object. Hunger and dehydration increase slower while sleeping."],
	[Action.Sling]: ["Sling", "You can sling bullets with this item."],
	[Action.SmotherFire]: ["Smother Fire", "Using this will extinguish fires as well as cover the facing tile with this item."],
	[Action.Squeeze]: ["Squeeze", "Consumed on use. Spews a stream of fire in your facing direction."],
	[Action.StartFire]: ["Start Fire", "Used to start a fire. Use on campfires, furnaces, etc. to light them or on an empty tile. Using this action may require kindling, tinder and a fuel item in your inventory depending on the circumstance."],
	[Action.StokeFire]: ["Stoke Fire", "Used on a fire source to increase the strength of the flame."],
	[Action.Tame]: ["Tame", ""],
	[Action.Teleport]: ["Teleport", "With a flick of the wand, teleport to a location in front of where you are facing."],
	[Action.TellTime]: ["Tell Time", "Used to measure the time of day or night."],
	[Action.Throw]: ["Throw", ""],
	[Action.Till]: ["Till", "Use while facing a tile you wish to till, granting it properties for better plant growth."],
	[Action.Trade]: ["Trade", ""],
	[Action.Transmogrify]: ["Transmogrify", "Use while facing an equippable item to attempt to infuse with magical properties."],
	[Action.TraverseTheSea]: ["Traverse the Sea", "Used to travel to new, unexplored lands, leaving behind your current surroundings."],
	[Action.Unequip]: ["Unequip", ""],
	[Action.UpdateDirection]: ["Update Direction", ""],
	[Action.UseItem]: ["Use Item", ""]
};
