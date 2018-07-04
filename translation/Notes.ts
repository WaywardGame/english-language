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

import { Note } from "player/NoteManager";

let notes: any;
export default notes = {
	[Note.Bleeding]: ["Bleeding", "{0?{0}:Using my bare hands to {1}} has caused me to begin bleeding. If I do not cease the flow of blood, my situation will quickly become much grimmer. I must stem the flow of blood using a bandage, tourniquet, or suture. I'm starting to feel a bit faint…"],

	[Note.Burned]: ["Burned", "My seared flesh remains as painful as the moment I burned it. I know that while I am in this constant and unabating pain, my focus and wellbeing will be hampered. It may be wise to attempt to soothe this pain. Perhaps with pouring liquid over the burn, I can stifle the agony. It may be an even wiser idea to take a swim and use the minerals within the water to both sooth and heal the afflicted wound."],

	[Note.Caving]: ["Caving", `When outside, I hear the chirps and calls of birds and small animals, and I hear the strong winds from the ocean rustle the leaves of trees and other fauna. Every once in a while, in the distance, I hear a loud growl or the sounds of a fevered chase through the underbrush, of a predator and its prey. 
	
	Down here, however, is different story. It is eerily quiet in the depths of the island. And unlike above, the infrequent sounds that I  /do/  hear send shivers down my spine. A faint tip, tap, as water drips in the distance, a thin whistle as air passes through cracks in the rough stone. An intermittent clicking noise, of what I can only imagine must be the claws of a large arthropod.
	
	It would be surprising if these caves didn't have  /something/  within them. There are other signs of human activity on this island, the caves should be no different. Maybe treasure or other riches. However, I would be lying to myself if I said I wasn't horrified at the thought of continuing deeper.`],

	[Note.Combat]: ["Combat", `As I engage in combat with {0}, I acknowledge it may not be the best course of actions, given my current situation. The concept of  /"fight or flight"/  remains lingering in my mind. Perhaps running from {0} could be a consideration in the future. Attempting to tame or offer food to the creature has also crossed my mind.
	
	If all else fails, I must protect my life through mortal conflict and dispatch of the creature. I will endeavor to record my findings on the effectiveness of my weapons against certain types of creatures. I note for example, that {0} is seemingly resistant to {1} damage types, and vulnerable to {2} damage types. This also applies to the potential damage the creature inflicts on me against my own armor.
	
	In a previous situation, parrying proved to be very valuable, allowing me to block incoming attacks from my sparring partner. As long as I hold two weapons or a shield in my off-hand, I should be able to mitigate some damage from my opponent.`],

	[Note.Corpse]: ["Corpse", "{0} lays there, lifeless. In order to maintain my own life, perhaps it would be beneficial to use a sharp tool or material to carve this corpse and gather the usable remains."],

	[Note.CreatureTaming]: ["Creature Taming", `I recall a more innocent time in my life as I witness the deceased {0}. The adage,  /"violence is not the answer"/  floods my mind as I ponder practicing benevolence against the creatures here.
	
	I could attempt to tame creatures using my skills; however, perhaps an even better idea would be to offer the creature food it would like to consume. Both options involve getting close to the creature. Perhaps I can simply leave the items on the ground and see if they will act in kindness towards me after accepting my offering as they move towards it. I know I will become more successful with any of these options as my skills grow.`],

	[Note.Dehydration]: ["Dehydration", `The rhyme echoes in my head,  /"water, water, everywhere, nor any drop to drink"/ . My mind runs cloudy; my mouth bone-dry. I'll require water if I am to last any longer.
	
	Unfortunately, the largest body of water in my vision is nearly undrinkable in its natural form. I'll need to construct a water still if I am to convert the salinated sea water to potable water. It is quite the endeavor indeed.
	
	If I am lucky, I may be able to find fresh water sources inland or in the caves below. It should be drinkable in its natural form, but erring on the side of caution, it may be prudent to boil it for safety.`],

	[Note.Durability]: ["Durability", `My {item} is close to breaking from use. {canRepair?Using my {repairItemName}, I should be able to repair it easily enough:With the right resources, I should be able to fashion myself a hammer to repair it}.
	
	If I actively search out high quality materials to craft my tools, armor, and weapons with, I can expect much higher durability on them, especially after my skills have improved. {canGlue?I can also craft glue to:If I ever manage to find out how to concoct a glue, I can} further reinforce my items, providing much higher durability.`],

	[Note.Encumbered]: ["Encumbered", `This confounded burden! My pack is overflowing with heavy items that I will need to purge in order to decrease my encumbrance. Carrying this many items will slow down my movement and heavily impact my stamina.
	
	Some of the heaviest things in my inventory include {0}, {1}, and {2}.`],

	[Note.FailureInCrafting]: ["Failure In Crafting", `I failed in my attempt to craft {0}, mostly due to my lack of skill and knowledge in {1}. I think with repeated attempts, I'll gain some knowledge to hopefully succeed in crafting {0} eventually. I also hope that the materials can suffer the wear that my poor crafting skills are placing on them. I may even need to replace some components that I am damaging on each attempt.
	
	Although I have many ideas on what to craft with the items in my inventory, some of them may be quite difficult to craft without first having an intermediate, advanced or even expert skill level in the craft for each item.`],

	[Note.Gardening]: ["Gardening", `As I work on {0}, I reflect on the growth stages of vegetation that I have witnessed. Most plants seem to begin producing the most valuable resources at around the flowering stage, but I have observed the most bountiful haul comes during the ripening stage, when the fruits and vegetables are ripe for the taking and the seeds are available to gather.
	
	If I want to succeed at gardening, I may also need to consider trying my hand at crafting fertilizer and fertile soil for my garden. I mustn't also forget to water my plants. Watering them will surely help them grow and survive long enough to produce the resources which seem all too dire in my situation.`],

	[Note.HealthIssues]: ["Health Issues", `My wellbeing is at an all-time low. I'm bruised, battered, and nearly defeated. My only chance at a respite is through medical intervention, rest, healthy foods, or ideally, all three.
	
	{clothing?As much as it pains me to consider it, disassembling my clothing to craft makeshift bandages appears to be a good option in my current predicament.}{healing?Luckily, I do have some items to be used for healing within my inventory including {healingItemName}.}`],

	[Note.Inedible]: ["Inedible", "Consuming {item} may not have been the best of ideas. I {poisoned?think I may:am probably lucky not to} have been poisoned by it... It would be prudent to pay better attention to what I ingest. Something like that should only be consumed when I am in dire straits."],

	[Note.Merchantile]: ["Merchantile", `I meet {0} today, a person in a similar state as myself; surviving on this island and living off the land. They seemed friendly enough and offered to trade items they had found with me.
	
	My skill in bartering may pay off when deciding on a trade value, which we have signified with a credit system. {0} gives me credit when I give items to them, and reversely, removes credits when I find an item in their inventory worth taking for myself.
	
	Even though I found this valuable trading partner, the thought of something more nefarious has crossed my mind. Taking their supply by force would likely put me at odds with the island, but it may be worth it for their belongings and equipment.`],

	[Note.Nightfall]: ["Nightfall", "Dusk is quickly approaching. Who could know what creatures lurk in the darkness — it would be wise to seek shelter or make a camp for the night."],

	[Note.Poisoned]: ["Poisoned", "My vision blurs as I write this; my stomach tied in knots. {0} has caused me to become poisoned. I can feel myself getting weaker even through the process of writing this note. Thirst and hunger consumes me, and my wellbeing is in jeopardy. I must attempt to fabricate a cure. Perhaps plants of a medicinal nature may aid me in this bodily turmoil."],

	[Note.Reputation]: ["Reputation", `It seems that as time passes and the struggle for survival continues, the actions I take which are averse to the benefit of the island come back to haunt me.
	
	When I sow plants, or respect the island's inhabitants, less of them seem to be hostile. Likewise, when I gather resources, deface the landscape, or attack creatures, I see malicious beasts much more frequently.
	
	As of writing this, it seems as though the island is {0?{#--message-type-good:benign}:{#--message-type-bad:malign}}. For the benefit of my survival, I may want to limit the scope of my damage to the natural environment.`],

	[Note.StaminaReplenishment]: ["Stamina Replenishment", "My breath is fast and heavy. I'm nearly worked to the point of exhaustion. I should proceed to slow my work to a bare minimum while my stamina replenishes itself. More efficiently, I could try resting on the ground, or even sleep in a bedroll for maximum benefits. Rest is important for my sanity and my survival."],

	[Note.Stranded]: ["Stranded", `I awake to find myself no longer in the company of good men or a fine seafaring vessel. Instead I discover myself in tattered clothing, with but a few possessions: {0}, and other shoddy items. 
	
	Treasure... The thought is vague and fleeting, but... I remember something about treasure.`],

	[Note.ToolUse]: ["Tool Use", `I'm reminded of the proverb,  /"the right tool for the right job"/  as I attempt to {0} using my bare hands. I know that using a tool for {1} would reduce my change of injury as well as provide much needed efficiency.
	
	Furthermore, I've observed the increased efficiency of using a bladed tool while lumberjacking and using a blunt tool while mining. The proverb proves its innate truth.`]
};
