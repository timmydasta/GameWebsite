
const openSkillGuide = function(){
	document.querySelector("main").innerHTML = 	`
	
	<header class="guide_header">
		<h1 class="guide_header_title" onclick="openGuide()">Game Guide &gt;</h1>
		<h1 class="guide_header_title">Skill Guide</h1>
	</header>
		
	<article class="skillguide">
		

		
			<p class="skillguide_header_text content_rewrite">
				GAMENAME's skills represent your character's capabilities.
				Performing actions associated with a skill earns you experience points (EXP) in that skill, and as you earn EXP your level in that skill will increase.
				Higher skill levels unlock new activities: equipment to make, locations to explore, quests to complete, and much more.
			</p>
		
		<article class="skillguide_category">
			
			<h3 class="skillguide_category_title">Combat Skills</h3>
			<p class="skillguide_category_description content_rewrite">These skills involve fighting in Combat.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
				
				<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ArcheryIcon.png">
							<h4 class="skillguide_skill_title">Archery</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							Archery is designed to do damage from afar with little risk.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Archery')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/EnduranceIcon.png">
							<h4 class="skillguide_skill_title">Endurance</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to take less damage and wear better sets of armour.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Endurance')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/HealthIcon.png">
							<h4 class="skillguide_skill_title">Health</h4>
						</th>
							
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows the player to take more damage before dying. 
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Health')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/MaleficiumIcon.png">
							<h4 class="skillguide_skill_title">Maleficium</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to cast offensive elemental spells and dampen the mood of their enemies with debuffs
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Maleficium')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/MeleeIcon.png">
							<h4 class="skillguide_skill_title">Melee</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							Melee combat is designed to do heavier damage than the other two combat styles due to the fact that the player must be within reach of the enemies they are attacking
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Melee')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ThaumaturgyIcon.png">
							<h4 class="skillguide_skill_title">Thaumaturgy</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to cast defensive spells, heal their friends, teleport and use a range of other helpful incantations that can help no matter where in the world they might be.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Thaumaturgy')">Learn More</a>
						</td>
					</tr>
					
				</tbody>
			</table>
		
		</article>
		
		<article class="skillguide_category">
			
			<h3 class="skillguide_category_title">Gathering Skills</h3>
			<p class="skillguide_category_description content_rewrite">	These skills involve gathering raw materials (resources) directly from the source.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon"src="img/SkillIcons/DowsingIcon.png">
							<h4 class="skillguide_skill_title">Dowsing</h4>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill is used to harvest energy that can be manipulated into magical weapons and armour using the Imbuing skill.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Dowsing')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/FishingIcon.png">
							<h4 class="skillguide_skill_title">Fishing</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to catch fish that can be cooked using the Cookery skill.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Fishing')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ForestryIcon.png">
							<h4 class="skillguide_skill_title">Forestry</h4>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to gather wood that can be crafted, burnt or fletched.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Forestry')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/HorticultureIcon.png">
							<h4 class="skillguide_skill_title">Horticulture</h4>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to grow their own personal produce for consumption. 
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Horticulture')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/HuntingIcon.png">
							<h4 class="skillguide_skill_title">Hunting</h4>
						</th>
						
						<td class="skillguide_skill_data">
						
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to track and hunt animals for fur that can be attached to armour and special ingredients to be used in the Chemistry and Carpentry skills.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Hunting')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/MiningIcon.png">
							<h4 class="skillguide_skill_title">Mining</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to gather ore that can be smelted and forged into weapons armour and tools using the Smithing skill
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Mining')">Learn More</a>
						</td>
					</tr>
					
				</tbody>
			</table>
		</article>
		
		<article class="skillguide_category">
			
			<h3 class="skillguide_category_title">Artisanal Skills</h3>
			<p class="skillguide_category_description content_rewrite">These skills involve using resource items to create other, generally more useful items.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
					<tr class="skillguide_skill">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ChemistryIcon.png">
							<h4 class="skillguide_skill_title">Chemistry</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to mix potions that can be used to boost their capabilities in combat or enhance their ability to gather resources.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Chemistry')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CookeryIcon.png">
							<h4 class="skillguide_skill_title">Cookery</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill gives the player the ability to cook food, which can be used to heal in the middle of a fight.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Cookery')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CraftingIcon.png">
							<h4 class="skillguide_skill_title">Crafting</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create stronger archery armour, weave bowstrings.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Crafting')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/FletchingIcon.png">
							<h4 class="skillguide_skill_title">Fletching</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create archery weapons such as bows and arrows.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Fletching')">Learn More</a>
						</td>
						
					</tr>
					
					<tr class="skillguide_skill">
						
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/ImbuingIcon.png">
							<h4 class="skillguide_skill_title">Imbuing</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create magical weapons and armour out of energy they have harvested.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Imbuing')">Learn More</a>
						</td>
					</tr>
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/SmithingIcon.png">
							<h4 class="skillguide_skill_title">Smithing</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
							This skill allows players to create melee weapons and armour. This skill also allows players to craft tools for a range of other skills
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Smithing')">Learn More</a>
						</td>
					</tr>
				</tbody>
			</table>
		</article>
		
		<article class="skillguide_category">
			
			<h3 class="skillguide_category_title">Support Skills</h3>
			<p class="skillguide_category_description content_rewrite">These skills help the player in various different ways.</p>
			
			<table class="skillguide_skills">
				<tbody class="skillguide_skills">
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/AthleticismIcon.png">
							<h4 class="skillguide_skill_title">Athleticism</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Boosts movement speed, reduces run recharge and provides shortcuts 
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Athleticism')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/BountyHuntingIcon.png">
							<h4 class="skillguide_skill_title">Bounty Hunting</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Breaks up the monotony of combat, kills on task give increased experience rewards.
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('BountyHunting')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CamaraderieIcon.png">
							<h4 class="skillguide_skill_title">Camaraderie</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Gives the player buffs when working alongside other players or special follower NPCs
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Camaraderie')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/CarpentryIcon.png">
							<h4 class="skillguide_skill_title">Carpentry</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Allows the player to build and improve structures, that will benefit them over the long run.
							.</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Carpentry')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/FirelightingIcon.png">
							<h4 class="skillguide_skill_title">Firelighting</h4>
						</th>
						
						<td class="skillguide_skill_data">
							
							<p class="skillguide_skill_description content_rewrite">
								Allows players to light fires that can be cooked on, increases visibility in dark environments, provides numerous health boosts and allows players to heal in combat if close enough to a fire
							</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Firelighting')">Learn More</a>
						</td>
					</tr>
					
					<tr class="skillguide_skill">
						<th class="skillguide_skill_header">
							<img class="skillguide_skillicon" src="img/SkillIcons/LarcenyIcon.png">
							<h4 class="skillguide_skill_title">Larceny</h4>
						</th>
						
						<td class="skillguide_skill_data">
							<p class="skillguide_skill_description content_rewrite">description</p>
							
							<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Larceny')">Learn More</a>
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
		<div class="guide_breadcrumbs">
			<a class="guide_breadcrumb" onclick="openGuide()">Guides &gt;</a>
			<a class="guide_breadcrumb" onclick="openSkillGuide()">Skill Guide &gt;<a>
			<a class="guide_breadcrumb" onclick="openSpecificSkillGuide(${theSkill})">${theSkill}<a>
		</div>
		
		<article class="specificskill">
			
			<header class="specificskill_header">
				<img class="specificskill_header_img" src="img/SkillIcons/${theSkill}Icon.png" alt="">
				<h2 class="specificskill_header_title">${theSkill}</h2>
			</header>
			
			<div id="specificskill_main"></div>
			
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

	let gridTemplate = `<div class="specificskill_grid_outline">`;
	let i = 0;
	
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
	return gridTemplate;
}

const OpenArcherySkillGuide = function(){
	
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<p class="content_rewrite">Archery is designed to do damage from afar with little risk.</p>
		
		<h3>Bows</h3>
		<p>As your Archery skill improves, you can use stronger bows. You can create stronger bows using the Fletching skill.</p>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Weapons</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("archeryBows", 11)}
		</div>
	`;
	
	document.querySelector("#archeryBows_img_T0").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST0.png">`; 	document.querySelector("#archeryBows_name_T0").innerHTML = "Dridych Bow";		document.querySelector("#archeryBows_lvl_T0").innerHTML = "1";
	document.querySelector("#archeryBows_img_T1").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST1.png">`; 	document.querySelector("#archeryBows_name_T1").innerHTML = "Redring Bow";		document.querySelector("#archeryBows_lvl_T1").innerHTML = "10";
	document.querySelector("#archeryBows_img_T2").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST2.png">`; 	document.querySelector("#archeryBows_name_T2").innerHTML = "Arnach Bow";		document.querySelector("#archeryBows_lvl_T2").innerHTML = "20";
	document.querySelector("#archeryBows_img_T3").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST3.png">`; 	document.querySelector("#archeryBows_name_T3").innerHTML = "Twainleaf Bow";		document.querySelector("#archeryBows_lvl_T3").innerHTML = "30";
	document.querySelector("#archeryBows_img_T4").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST4.png">`; 	document.querySelector("#archeryBows_name_T4").innerHTML = "Barowin Bow";		document.querySelector("#archeryBows_lvl_T4").innerHTML = "40";
	document.querySelector("#archeryBows_img_T5").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST5.png">`; 	document.querySelector("#archeryBows_name_T5").innerHTML = "Augerwood Bow";		document.querySelector("#archeryBows_lvl_T5").innerHTML = "50";
	document.querySelector("#archeryBows_img_T6").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST6.png">`; 	document.querySelector("#archeryBows_name_T6").innerHTML = "Wahieyle Bow";		document.querySelector("#archeryBows_lvl_T6").innerHTML = "60";
	document.querySelector("#archeryBows_img_T7").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST7.png">`; 	document.querySelector("#archeryBows_name_T7").innerHTML = "Nadela Bow";		document.querySelector("#archeryBows_lvl_T7").innerHTML = "70";
	document.querySelector("#archeryBows_img_T8").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST8.png">`; 	document.querySelector("#archeryBows_name_T8").innerHTML = "Sunderfrond Bow";	document.querySelector("#archeryBows_lvl_T8").innerHTML = "80";
	document.querySelector("#archeryBows_img_T9").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWST9.png">`;	document.querySelector("#archeryBows_name_T9").innerHTML = "Evehnscrest Bow";	document.querySelector("#archeryBows_lvl_T9").innerHTML = "90";
	document.querySelector("#archeryBows_img_T10").innerHTML = `<img class="specificskill_img" src="img/items/BOWS/BOWSTX.png">`; 	document.querySelector("#archeryBows_name_T10").innerHTML = "Dayveil Bow";		document.querySelector("#archeryBows_lvl_T10").innerHTML = "100";

	document.querySelector("#specificskill_main").innerHTML += 
	`	
		<h3>Arrows</h3>
		<p>As your Archery skill improves, you can use stronger arrows. You can create stronger arrows using the Fletching and Smithing skills.</p>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Arrows</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("archeryArrows", 11)}
		</div>
	`;
		
	document.querySelector("#archeryArrows_img_T0").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT0.png">`;	document.querySelector("#archeryArrows_name_T0").innerHTML = "Tokanum Arrows";		document.querySelector("#archeryArrows_lvl_T0").innerHTML = "1";
	document.querySelector("#archeryArrows_img_T1").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT1.png">`;	document.querySelector("#archeryArrows_name_T1").innerHTML = "Sachium Arrows";		document.querySelector("#archeryArrows_lvl_T1").innerHTML = "10";
	document.querySelector("#archeryArrows_img_T2").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT2.png">`;	document.querySelector("#archeryArrows_name_T2").innerHTML = "Perseum Arrows";		document.querySelector("#archeryArrows_lvl_T2").innerHTML = "20";
	document.querySelector("#archeryArrows_img_T3").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT3.png">`;	document.querySelector("#archeryArrows_name_T3").innerHTML = "Fortifidium Arrows";	document.querySelector("#archeryArrows_lvl_T3").innerHTML = "30";
	document.querySelector("#archeryArrows_img_T4").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT4.png">`;	document.querySelector("#archeryArrows_name_T4").innerHTML = "Aglemium Arrows";		document.querySelector("#archeryArrows_lvl_T4").innerHTML = "40";
	document.querySelector("#archeryArrows_img_T5").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT5.png">`;	document.querySelector("#archeryArrows_name_T5").innerHTML = "Ukinum Arrows";		document.querySelector("#archeryArrows_lvl_T5").innerHTML = "50";
	document.querySelector("#archeryArrows_img_T6").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT6.png">`;	document.querySelector("#archeryArrows_name_T6").innerHTML = "Melium Arrows";		document.querySelector("#archeryArrows_lvl_T6").innerHTML = "60";
	document.querySelector("#archeryArrows_img_T7").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT7.png">`;	document.querySelector("#archeryArrows_name_T7").innerHTML = "Frauws Arrows";		document.querySelector("#archeryArrows_lvl_T7").innerHTML = "70";
	document.querySelector("#archeryArrows_img_T8").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT8.png">`;	document.querySelector("#archeryArrows_name_T8").innerHTML = "Pyranidium Arrows";	document.querySelector("#archeryArrows_lvl_T8").innerHTML = "80";
	document.querySelector("#archeryArrows_img_T9").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWT9.png">`;	document.querySelector("#archeryArrows_name_T9").innerHTML = "Aresem Arrows";		document.querySelector("#archeryArrows_lvl_T9").innerHTML = "90";
	document.querySelector("#archeryArrows_img_T10").innerHTML = `<img class="specificskill_img" src="img/items/ARRW/ARRWTX.png">`;	document.querySelector("#archeryArrows_name_T10").innerHTML = "Ellexium Arrows";	document.querySelector("#archeryArrows_lvl_T10").innerHTML = "100";
}

const OpenEnduranceSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Archery Armour</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("archeryArmour", 11)}
		</div>
		
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Melee Armour</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("meleeArmour", 11)}
		</div>
		
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Maleficium Armour</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("maleficiumArmour", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Thaumaturgy Armour</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("thaumaturgyArmour", 11)}
		</div>
	`;
}

const OpenHealthSkillGuide = function(){
	
}

const OpenMaleficiumSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Weapons</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("maleficiumWeapons", 11)}
		</div>
	`;
}

const OpenMeleeSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Weapons</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("meleeWeapons", 11)}
		</div>
	`;
}

const OpenThaumaturgySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = e
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Weapons</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("thaumaturgyWeapons", 11)}
		</div>
	`;
}

const OpenDowsingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = `
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Positive Energy</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("light", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header>
				<h3 class="specificskill_grid_title">Negative Energy</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("dark", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Dowsing Rods</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("dowsingRods", 11)}
		</div>
	`
}

const OpenFishingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Fish</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("fish", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Fishing Rods</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("fishingRods", 11)}
		</div>
	`;
}

const OpenForestrySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Trees</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("trees", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Axes</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("axes", 11)}
		</div>
	`;
			
}

const OpenHorticultureSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Bushes</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("bushes", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Trees</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("growTrees", 11)}
		</div>
	`;
}

const OpenHuntingSkillGuide = function(){
	
}

const OpenMiningSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Ores</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("ores", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Pickaxes</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("pickaxes", 11)}
		</div>
	`;
}

const OpenChemistrySkillGuide = function(){
	
}

const OpenCookerySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Fish</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("cookFish", 11)};
		</div>
	`;
}

const OpenCraftingSkillGuide = function(){
	
}

const OpenFletchingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Bows</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("fletchBows", 11)};
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Arrows</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("fletchArrows", 11)};
		</div>
	`;
}

const OpenImbuingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	<div class="specificskill_grid_div">
			<header>
				<h3 class="specificskill_grid_title">Thaumaturgy Staves</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("lightWeapons", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Maleficium Staves</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Thaumaturgy Robes</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("lightArmour", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Maleficium Robes</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("darkArmour", 11)}
		</div>
	`;
}

const OpenSmithingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Weapons</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("meleeWeapons", 11)}
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Armour</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("meleeArmour", 11)}
		</div>
	`;
}

const OpenAthleticismSkillGuide = function(){
	
}

const OpenBountyHuntingSkillGuide = function(){

}

const OpenCamaraderieSkillGuide = function(){
	
}

const OpenCarpentrySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Planks</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("planks", 11)};
		</div>
		
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Nails</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("planks", 11)};
		</div>
	`;
}

const OpenFirelightingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = 
	`	
		<div class="specificskill_grid_div">
			<header class="specificskill_grid_header">
				<h3 class="specificskill_grid_title">Fires</h3>
				<button class="specificskill_grid_dropdown"></button>
			</header>
			${createGrid("burnLogs", 11)}
		</div>
	`;
}

const OpenLarcenySkillGuide = function(){
	
}