
const openSkillGuide = function(){
	document.querySelector("main").innerHTML = 	`
	<header class="guide_header">
		<ul class="guide_header_breadcrumbs">
			<li class="guide_header_breadcrumb">
				<a class="guide_header_breadcrumb" onclick="openGuide()">Game Guide &gt;</a>
			</li>
		</ul>
		<span class="guide_header_title">
			<h1 class="guide_header_title">Skill Guide</h1>
		</span>
	</header>
		
	<article class="skillguide">
		

		
			<p class="skillguide_header_text content_rewrite">
				GAMENAME's skills represent your character's capabilities.
				Performing actions associated with a skill earns you experience points (EXP) in that skill, and as you earn EXP your level in that skill will increase.
				Higher skill levels unlock new activities: equipment to make, locations to explore, quests to complete, and much more.
			</p>
		
		<article class="skillguide_category">
			
			<h2 class="skillguide_category_title">Combat Skills</h3>
			<p class="skillguide_category_description content_rewrite">
			These skills dictate what roles the player can take in combat situations, how much damage they can do to their enemies and how much damage they can take before falling into the clutches of death.
			</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
				
				<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Archery')">
					<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ArcheryIcon.png">
							<h3 class="skillguide_skill_title">Archery</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							Archery is designed to do damage from afar with little risk while slowing down targets.
							</p>
							
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Endurance')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/EnduranceIcon.png">
							<h3 class="skillguide_skill_title">Endurance</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to take less damage and wear better sets of armour.
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Health')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/HealthIcon.png">
							<h3 class="skillguide_skill_title">Health</h3>
						</th>
							
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows the player to take more damage before dying. Healthy players will be able to heal faster outside of combat and use techniques that will mitigate damage over time effects such as poison.
							</p>
							
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Maleficium')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/MaleficiumIcon.png">
							<h3 class="skillguide_skill_title">Maleficium</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to cast offensive elemental spells and dampen the mood of their enemies with debuffs
							</p>
							
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Melee')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/MeleeIcon.png">
							<h3 class="skillguide_skill_title">Melee</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							Melee attacks do heavier damage due to the fact that the player must be within reach of the enemies they are attacking
							</p>
							
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Thaumaturgy')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ThaumaturgyIcon.png">
							<h3 class="skillguide_skill_title">Thaumaturgy</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to cast defensive spells, heal their friends, teleport and use a range of other helpful incantations.
							</p>
							
						</td>
					</tr>
					
				</tbody>
			</table>
		
		</article>
		
		<article class="skillguide_category">
			
			<h2 class="skillguide_category_title">Gathering Skills</h3>
			<p class="skillguide_category_description content_rewrite">These skills involve gathering raw materials (resources) directly from the source.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Dowsing')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon"src="img/SkillIcons/DowsingIcon.png">
							<h3 class="skillguide_skill_title">Dowsing</h3>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill is used to harvest energy that can be manipulated into magical weapons and armour using the Imbuing skill.
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Fishing')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/FishingIcon.png">
							<h3 class="skillguide_skill_title">Fishing</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to catch fish that can be cooked using the Cookery skill or added to potions using the Chemistry skill.
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Forestry')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ForestryIcon.png">
							<h3 class="skillguide_skill_title">Forestry</h3>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to gather wood that can be crafted, burnt or fletched.
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Horticulture')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/HorticultureIcon.png">
							<h3 class="skillguide_skill_title">Horticulture</h3>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to grow their own personal produce for consumption. 
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Hunting')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/HuntingIcon.png">
							<h3 class="skillguide_skill_title">Hunting</h3>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to track and hunt animals for fur that can be attached to armour and special ingredients to be used in the Chemistry and Carpentry skills.
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Mining')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/MiningIcon.png">
							<h3 class="skillguide_skill_title">Mining</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to gather ore that can be smelted and forged into weapons armour and tools using the Smithing skill
							</p>
						</td>
					</tr>
					
				</tbody>
			</table>
		</article>
		
		<article class="skillguide_category">
			
			<h2 class="skillguide_category_title">Artisanal Skills</h3>
			<p class="skillguide_category_description content_rewrite">These skills involve using resource items to create other, generally more useful items.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Chemistry')">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ChemistryIcon.png">
							<h3 class="skillguide_skill_title">Chemistry</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to mix potions that can be used to boost their capabilities in combat or enhance their ability to gather resources.
							</p>

						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Cookery')">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CookeryIcon.png">
							<h3 class="skillguide_skill_title">Cookery</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to cook food, which can be used to heal in the middle of a fight.
							</p>

						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Crafting')">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CraftingIcon.png">
							<h3 class="skillguide_skill_title">Crafting</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create stronger archery armour, weave bowstrings.
							</p>
						
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Fletching')">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/FletchingIcon.png">
							<h3 class="skillguide_skill_title">Fletching</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create archery weapons such as bows and arrows.
							</p>

						</td>
						
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Imbuing')">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ImbuingIcon.png">
							<h3 class="skillguide_skill_title">Imbuing</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create magical weapons and armour out of energy they have harvested.
							</p>

						</td>
					</tr>
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Smithing')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/SmithingIcon.png">
							<h3 class="skillguide_skill_title">Smithing</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create melee weapons and armour. This skill also allows players to craft tools for a range of other skills
							</p>
							
						</td>
					</tr>
				</tbody>
			</table>
		</article>
		
		<article class="skillguide_category">
			
			<h2 class="skillguide_category_title">Support Skills</h3>
			<p class="skillguide_category_description content_rewrite">These skills help the player in various different ways.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Athleticism')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/AthleticismIcon.png">
							<h3 class="skillguide_skill_title">Athleticism</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Boosts movement speed, reduces run recharge and provides shortcuts 
							</p>

						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('BountyHunting')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/BountyHuntingIcon.png">
							<h3 class="skillguide_skill_title">Bounty Hunting</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Breaks up the monotony of combat, on task skilled bounty hunters will recieve increased experience rewards and do more damage to their enemies.
							</p>

						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Camaraderie')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CamaraderieIcon.png">
							<h3 class="skillguide_skill_title">Camaraderie</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Gives the player buffs when working alongside other players or special follower NPCs
							</p>

						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Carpentry')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CarpentryIcon.png">
							<h3 class="skillguide_skill_title">Carpentry</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Allows the player to build and improve structures, that will benefit them over the long run.
							</p>
						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Firelighting')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/FirelightingIcon.png">
							<h3 class="skillguide_skill_title">Firelighting</h3>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Allows players to light fires that can be cooked on, increases visibility in dark environments and provides numerous health boosts.
							</p>

						</td>
					</tr>
					
					<tr class="skillguide_skill" onclick="openSpecificSkillGuide('Larceny')">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/LarcenyIcon.png">
							<h3 class="skillguide_skill_title">Larceny</h3>
						</th>
						
						<td class="skillguide_skill_data">
							<p class="skillguide_skill_description content_rewrite">This skill allows players to make money in a pinch, by taking everybody else's. Highly skilled thieves will be able to find extra money hidden on the enemies they kill.</p>
						</td>
					</tr>
					
				</tbody>
			</table>
		</article>
	</article>
	`;
}

const openSpecificSkillGuide = function(theSkill){
	
	document.querySelector("main").innerHTML = `
		<header class="guide_header">
			<ul class="guide_header_breadcrumbs">
				<li class="guide_header_breadcrumb">
					<a class="guide_header_breadcrumb" onclick="openGuide()">Game Guide &gt;</a>
				</li>
				<li class="guide_header_breadcrumb">
					<a class="guide_header_breadcrumb" onclick="openSkillGuide()">Skill Guide &gt;</a>
				</li>
			</ul>
			<span class="guide_header_title">
				<img class="guide_header_img" src="img/SkillIcons/${theSkill}Icon.png" alt="">
				<h1 class="guide_header_title">${theSkill}</h1>
			</span>
		</header>
				
		<article class="specificskill_main" id="specificskill_main">
								
		</article>
		
		<button class="specificskill_back">Top</button>
	`;
	
	if(theSkill == "BountyHunting"){ document.querySelector("h2.specificskill_header_title").innerHTML = "Bounty Hunting"; }
	
	switch(theSkill){
		case "Archery":			OpenArcherySkillGuide(); 		break;	case "Endurance":		OpenEnduranceSkillGuide(); 		break;
		case "Health":			OpenHealthSkillGuide(); 		break;	case "Maleficium":		OpenMaleficiumSkillGuide(); 	break;
		case "Melee":			OpenMeleeSkillGuide(); 			break;	case "Thaumaturgy":		OpenThaumaturgySkillGuide(); 	break;
		case "Dowsing":			OpenDowsingSkillGuide(); 		break;	case "Fishing":			OpenFishingSkillGuide(); 		break;
		case "Forestry":		OpenForestrySkillGuide(); 		break;	case "Horticulture":	OpenHorticultureSkillGuide(); 	break;
		case "Hunting":			OpenHuntingSkillGuide(); 		break;	case "Mining":			OpenMiningSkillGuide(); 		break;
		case "Chemistry":		OpenChemistrySkillGuide(); 		break;	case "Cookery":			OpenCookerySkillGuide(); 		break;
		case "Crafting":		OpenCraftingSkillGuide(); 		break;	case "Fletching":		OpenFletchingSkillGuide(); 		break;
		case "Imbuing":			OpenImbuingSkillGuide(); 		break;	case "Smithing":		OpenSmithingSkillGuide(); 		break;
		case "Athleticism":		OpenAthleticismSkillGuide(); 	break;	case "BountyHunting":	OpenBountyHuntingSkillGuide();	break;
		case "Camaraderie":		OpenCamaraderieSkillGuide();	break;	case "Carpentry":		OpenCamaraderieSkillGuide();	break;
		case "Firelighting":	OpenFirelightingSkillGuide();	break;	case "Larceny":			OpenLarcenySkillGuide(); 		break;
	}
}

const createGrid = function(name, items){
	
	let gridTemplate = ``;
	let type = "Weapon";
	let i = 0;
	if(type == "Weapon"){
		
		gridTemplate +=
			`<header class="weapon_grid_header">
				
				<div class="weapon_grid_header_item">		
					<p class="weapon_grid_header_title">Item</p> 
				</div>
				
				<div class="weapon_grid_header_level">
					<p class="weapon_grid_header_title">Level Required</p>
				</div>
				
				<div class="weapon_grid_header_damage">
					<p class="weapon_grid_header_title">Damage Bonus</p>
					<button class="specificskill_grid_dropdown" onclick="hideSkillGrid('${name}')"></button>					
				</div>
				
			</header>
			<div class="specificskill_grid_outline" id="specificskill_grid_${name}" style="display:block;">
			`;
		
		while(i < items){
			gridTemplate +=
				`<div class="weapon_grid_row" 	  	id="${name}_specificskill_grid_T${i}">
					
					<div class="weapon_grid_item">
						<img 	class="weapon_grid_item_img" 	id="${name}_img_T${i}" src=""/>
						<p 	 	class="weapon_grid_item_name" 	id="${name}_name_T${i}">Name</p> 
					</div>
					
					<div class="weapon_grid_level">
						<p 		class="weapon_grid_level" 	id="${name}_lvl_T${i}" >Level Required</p>
					</div>	
					
					<div class="weapon_grid_damage">
						<p 		class="weapon_grid_damage"  	id="${name}_damage_T${i}" >Damage Bonus</p>
					</div>				

				
				</div>`;
			
			i++;
		}
		gridTemplate += `</div>`;
	}
	else {
		
		while(i < items){
			gridTemplate +=
			`<div class="specificskill_grid" 	  id="${name}_specificskill_grid_T${i}">
				<div class="specificskill_img" id="${name}_img_T${i}"></div>
				<div class="specificskill_name"><p class="specificskill_desc" id="${name}_name_T${i}">Name</p> </div>
				<div class="specificskill_lvl"> <p class="specificskill_desc" id="${name}_lvl_T${i}" >Level</p></div>
				<div class="specificskill_exp">	<p class="specificskill_exp"  id="${name}_exp_T${i}" >EXP</p>	 </div>
				<div class="specificskill_desc"><p class="specificskill_desc" id="${name}_desc_T${i}">Descr</p></div>
			
			</div>`;
			
			i++;
		}
		gridTemplate += `</div>`;
	}
	return gridTemplate;
}

const OpenArcherySkillGuide = function(){
	
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<p class="content_rewrite">
			The Archery skill will help you do damage to your enemies from afar. 
			While you might lose the distance advantage in a fight with a sorcerer, archers do well in combat against magical foes as their plant-based armour is good at diffusing elemental energy.
			However, archers should be wary when fighting in close quarters, as a warrior's metal armour is harder to penetrate.
			As you gain experience you will be able to deal more damage, use more powerful weapons and learn special techniques that will make sure that enemies keep their distance.
		</p>
		
		<div class="skillguide_section">
			<h2>Bows</h2>
			<p>
				As an Archer, bows are the most versatile tools for shooting your enemies from afar.
				They're quick to fire and can serve as a melee weapon in a pinch if someone gets too close or you run out of ammunition.
				Bows are held in both hands, so you won't be able to hold a shield for protection.
			</p>
			<p>
				As your Archery skill improves, you will be able to wield stronger bows that can deal more damage to your opponents. 
				You can create stronger bows using the Fletching and Crafting skills or you can buy them from players and shops.
			</p>
			<div class="specificskill_grid_div">
				${createGrid("archeryBows", 11)}
			</div>
		</div>

		<div class="skillguide_section">
			<h2>Arrows</h3>
			<p>
				Arrows are required to attack enemies from a distance with a bow.
				Arrows can be stored in your quiver and are lost as you fire them into your enemies.
				They have a chance to snap upon hitting an enemy but you'll be able to recover unbroken arrows from enemies once you defeat them.
				Additionally you can use your Chemistry skills to coat them in a variety of different poisons that will do damage over time.
			</p>
			<p>
				As your Archery skill improves, you will be able to use stronger arrows. 			
				You can create stronger arrows using the Fletching and Smithing skills or you can buy them from players and shops.
			</p>

			<div class="specificskill_grid_div">
				${createGrid("archeryArrows", 11)}
			</div>

		</div>
		
		<div class="skillguide_section">
			<h2>Crossbows</h3>
			<p>
				While not as fast as a bow, use of a crossbow frees up a free hand for you to wield a shield to protect you.
				A crossbow uses bolts as ammunition, which are less prone to breakage and hit heavier than arrows do.
				If you think an enemy in full plate armour is inevitably going to invade your personal space, a crossbow is the best choice available for an Archer.
			</p>
			<p>
				As your Archery skill improves, you will be able to use stronger crossbows. 
				You can create stronger Crossbows using the Fletching, Crafting and Smithing skills or you can buy them from players and shops.
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("archeryCrossbows", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Crossbow Bolts</h3>
			<p>
				Bolts are required to attack enemies from a distance with a crossbow.
				Bolts can be stored in your quiver and are lost as you fire them into your enemies.	
				They're less likely to be broken from the impact so you'll be able to recover them from enemies once you defeat them.		
				As they are made out of metal they naturally do more damage than an arrow of the same tier, but they also have a slightly reduced range due to their weight.
			</p>
			<p>
				As your Archery skill improves, you will be able to use stronger bolts.
				You can create stronger crossbow bolts using the Fletching and Smithing skills or you can buy them from players and shops.
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("archeryBolts", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Archery Armour</h3>
			<p>
				As your Endurance skill improves, you will be able to use stronger armour.
				You can create stronger crossbow bolts using the Fletching and Smithing skills or you can buy them from players and shops.
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("archeryArmour", 11)}
			</div>
		</div>
	`;
	
	document.querySelector("#archeryArrows_img_T0").src = "img/items/ARRW/ARRWT0.png";	document.querySelector("#archeryArrows_name_T0").innerHTML = "Tokanum Arrows";	
	document.querySelector("#archeryArrows_lvl_T0").innerHTML = "1";					document.querySelector("#archeryArrows_damage_T0").innerHTML = "0";
	
}

const OpenEnduranceSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Archery Armour</h3>
			
			<p>
			</p>	
			
			<div class="specificskill_grid_div">
				${createGrid("archeryArmour", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Melee Armour</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("meleeArmour", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Maleficium Armour</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("maleficiumArmour", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Thaumaturgy Armour</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("thaumaturgyArmour", 11)}
			</div>
		</div>
	`;
}

const OpenHealthSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Faster Healing out of combat
			</p>
			<p>		
				Abilities:
				Curing Debuffs / Reducing Debuff times		
			</p>
		</div>
	`;
}

const OpenMaleficiumSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Elemental Attacks
				Air Water Earth Fire Electricity 
			</p>
			<p>		
				Debuffs
				Stagger Slow Blind Burn Paralysis?
			</p>
			<p>	
				Attack Combinations
				Air+Water Air+Earth Air+Fire Water+Earth Water+Electricity Earth+Fire?
			</p>
		</div>
				
		<div class="skillguide_section">
			<h2>Maleficium Weapons</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("maleficiumWeapons", 11)}
			</div>
		</div>	

		<div class="skillguide_section">
			<h2>Maleficium Armour</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("maleficiumArmour", 11)}
			</div>
		</div>			
	`;
}

const OpenMeleeSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Melee Weapons</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("meleeWeapons", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Melee Armour</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("meleeWeapons", 11)}
			</div>
		</div>
	`;
}

const OpenThaumaturgySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p>
			</p>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Staves</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("thaumaturgyWeapons", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Armour</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("thaumaturgyArmour", 11)}
			</div>
			
		</div>
	`;
}

const OpenDowsingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = `
		
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Energy destablisation:
				Coerce / Force Energy to take on elemental properties, basically making them runes/ammo for spells			
			</p>
			
			<p> 
				Memories:
				Rare chance to find memories while training
				Learn more about the world / Rella
				Discover her hidden areas?
			</p>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Light Energy</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("light", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Dark Energy</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("dark", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Rods</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("dowsingRods", 11)}
			</div>
			
		</div>
	`
}

const OpenFishingSkillGuide = function(){

	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Trophies:
				Rare chance to catch a big fish.
				Provides a better catch rate for that fish within the area.				
			</p>
			
			<p> 
				Scales:
				Used in Chemistry to make (Fishing?)potions.
			</p>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Fish</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("fish", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Fishing Rods</h3>
			
			<p>
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("fishingRods", 11)}
			</div>
		</div>
	`;
}

const OpenForestrySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Seeds:
				Medium chance to recieve tree seeds when they are felled
			</p>
			
			<p> 
				Overgrowth:
				Can access hidden areas blocked off at certain levels, higher leveled places have better resources.
			</p>
			
			<p> 
				Bark:
				Used in Chemistry to make (Forestry?)potions.
			</p>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Trees</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("trees", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Axes</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("axes", 11)}
			</div>
		</div>
	`;
			
}

const OpenHorticultureSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Bushes</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("bushes", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Herbs</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("growHerbs", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Trees</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("growTrees", 11)}
			</div>
			
		</div>
		
		
	`;
}

const OpenHuntingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Trophies:
				Rare chance to catch a big creature.
				Provides a better catch rate for that creature within the area.	
			</p>
			
			<p> 
				Furs:
				Can be added to armour of the same tier, improves defence capabilities.
			</p>
			
			<p> 
				Meat:
				Creatures are harder to catch than fish by default (more steps involved?) Meat provides slightly more hp upon cooking than fish of the same tier.
			</p>
			
			<p> 
				Butterfly / Moth Wings:
				Used in Chemistry to make (hunting?)potions.
			</p>
			
		</div>
	`;
}

const OpenMiningSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Cave Ins:
				Can access hidden areas blocked off at certain levels, higher leveled places have better resources.
			</p>
		</div>
		
		<div class="skillguide_section">
			<h2>Ores</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("ores", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Pickaxes</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("pickaxes", 11)}
			</div>
			
		</div>
	`;
}

const OpenChemistrySkillGuide = function(){
	
}

const OpenCookerySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Fish</h3>
			
			<p> 
			</p>
						
			<div class="specificskill_grid_div">
				${createGrid("cookFish", 11)};
			</div>
		
		</div>
		
		<div class="skillguide_section">
			<h2>Meat</h3>
			
			<p> 
			</p>
						
			<div class="specificskill_grid_div">
				${createGrid("cookMeat", 11)};
			</div>
		
		</div>
	`;
}

const OpenCraftingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Archery Armour</h3>
			
			<p> 
			</p>
						
			<div class="specificskill_grid_div">
				${createGrid("craftFibres", 11)};
			</div>
		
		</div>l
	`;
}

const OpenFletchingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Bows</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("fletchBows", 11)};
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Arrows</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("fletchArrows", 11)};
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Crossbows</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("fletchCrossbows", 11)};
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Bolts</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("fletchBolts", 11)};
			</div>
			
		</div>
	`;
}

const OpenImbuingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Rename Skill:
				Manifestation
			</p>
			
		</div>
	
		<div class="skillguide_section">
			<h2>Thaumaturgy Staves</h3>
			
			<p> 
			</p>
			
			div class="specificskill_grid_div">
				${createGrid("lightStaves", 11)}
			</div>
			
		</div>
		

		<div class="skillguide_section">
			<h2>Thaumaturgy Armour</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("lightArmour", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Maleficium Staves</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("darkStaves", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Maleficium Armour</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("darkArmour", 11)}
			</div>
			
		</div>
	`;
}

const OpenSmithingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Weapons</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("Weapons", 11)}
			</div>
		</div>
		
		<div class="skillguide_section">
			<h2>Armour</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("meleeArmour", 11)}
			</div>
			
		</div>
		
		<div class="skillguide_section">
			<h2>Tools</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("Tools", 11)}
			</div>
			
		</div>
	`;
}

const OpenAthleticismSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Running Items:
				Taking an item from one npc to another like a mail system. Rewards exp and money
			</p>
			
			<p> 
				Faster base movement speed:
				Player speed improves as they level (100% - ~110%)
			</p>
			
		</div>
	`;
}

const OpenBountyHuntingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Rename Skill:
				Headhunting
			</p>
			
			<p>
				Special Contracts:
				Occasionally gives the player the option to take down a boss mob such as a bandit leader.
				Only one kill but gives improved reards.
			</p>
			
			<p>
				Special Currency:
				Used to buy bounty hunting related items and abilites
			</p>
			
			<p>
				Damage buffs to certain enemies:
				As you gain more experience? / complete more contracts? you get a passive damage buff (100% - ~105%) towards enemies of that type.
			</p>
			
			<p> 
				Trophies / Trinkets:
				Rare chance to take a trophy or trinket upon death. 
				Might be linked to special contract bosses
				Provides inproved damage buffs to certain enemy types within the area.	
			</p>
			
		</div>
	`;
}

const OpenCamaraderieSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
			</p>
		</div>
	`;
}

const OpenCarpentrySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`
		<div class="skillguide_section">
			<h2>Materials</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("planks", 11)};
			</div>
			
		</div>
	`;
}

const OpenFirelightingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Incense:
				Burning different types of incense sticks provide passive buffs when equipped.
			</p>
		</div>
	
		<div class="skillguide_section">
			<h2>Fires</h3>
			
			<p> 
			</p>
			
			<div class="specificskill_grid_div">
				${createGrid("burnLogs", 11)}
			</div>
		</div>
	`;
}

const OpenLarcenySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="skillguide_section">
			<h2>Skill Ideas</h3>
			
			<p> 
				Hidden Pockets:
				More money is found on enemies as you gain more larceny experience (100% - ~110%)
			</p>
			
			<p> 
				Fences:
				Stolen items can't be sold directly to shops or players, they can be sold to fences instead.
				Higher leveld thieves can sell to fences who offer more money
			</p>
			
			<p> 
				Laundering:
				Stolen items can't be sold directly to shops or players, but they can be laundered so that they can.
				Costs a bit of money to launder items
				Higher level thieves can sell to fences who cost less money
			</p>
			
		</div>
	`;
}

const hideSkillGrid = function(theGrid){
	console.log(`#specificskill_grid_${theGrid}`);
	console.log(document.querySelector(`#specificskill_grid_${theGrid}`).style.display);
	
	switch(document.querySelector(`#specificskill_grid_${theGrid}`).style.display){
		case "none":	document.querySelector(`#specificskill_grid_${theGrid}`).style.display = "block"; 	break;	
		case "block":	document.querySelector(`#specificskill_grid_${theGrid}`).style.display = "none";	break;
	}
}