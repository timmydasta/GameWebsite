
const openSkillGuide = function(){
	document.querySelector("main").innerHTML = 	`
	<header>
		<h2 class="skillguide_header_title">Skill Guide</h2>
		<p class="skillguide_header_text content_rewrite">
			GAMENAME's skills represent your character's capabilities.
			Performing actions associated with a skill earns you experience points (EXP) in that skill, and as you earn EXP your level in that skill will increase.
			Higher skill levels unlock new activities: equipment to make, locations to explore, quests to complete, and much more.
		</p>
	</header>
	
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
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Archery')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/EnduranceIcon.png">
						<h4 class="skillguide_skill_title">Endurance</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Endurance')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/HealthIcon.png">
						<h4 class="skillguide_skill_title">Health</h4>
					</th>
						
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Health')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/MaleficiumIcon.png">
						<h4 class="skillguide_skill_title">Maleficium</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Maleficium')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/MeleeIcon.png">
						<h4 class="skillguide_skill_title">Melee</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Melee')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/ThaumaturgyIcon.png">
						<h4 class="skillguide_skill_title">Thaumaturgy</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Thaumaturgy')">Learn More</a>
					</td>
				</tr>
				
			</tbody>
		</table>
	
	</article>
	
	<article class="skillguide_category">
		
		<h3>Gathering Skills</h3>
		<p class="skillguide_category_description content_rewrite">	These skills involve gathering raw materials (resources) directly from the source.</p>
		
		<table class="skillguide_skills">
			<tbody class="skillguide_skills">
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon"src="img/SkillIcons/DowsingIcon.png">
						<h4 class="skillguide_skill_title">Dowsing</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Dowsing')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/FishingIcon.png">
						<h4 class="skillguide_skill_title">Fishing</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Fishing')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/ForestryIcon.png">
						<h4 class="skillguide_skill_title">Forestry</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Forestry')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/HorticultureIcon.png">
						<h4 class="skillguide_skill_title">Horticulture</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Horticulture')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/HuntingIcon.png">
						<h4 class="skillguide_skill_title">Hunting</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Hunting')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/MiningIcon.png">
						<h4 class="skillguide_skill_title">Mining</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Mining')">Learn More</a>
					</td>
				</tr>
				
			</tbody>
		</table>
	</article>
	
	<article class="skillguide_category">
		
		<h3>Artisanal Skills</h3>
		<p class="skillguide_category_description content_rewrite">These skills involve using resource items to create other, generally more useful items.</p>
		
		<table class="skillguide_skills">
			<tbody class="skillguide_skills">
				<tr class="skillguide_skill">
					
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/ChemistryIcon.png">
						<h4 class="skillguide_skill_title">Chemistry</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Chemistry')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/CookeryIcon.png">
						<h4 class="skillguide_skill_title">Cookery</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Cookery')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/CraftingIcon.png">
						<h4 class="skillguide_skill_title">Crafting</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Crafting')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/FletchingIcon.png">
						<h4 class="skillguide_skill_title">Fletching</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Fletching')">Learn More</a>
					</td>
					
				</tr>
				
				<tr class="skillguide_skill">
					
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/ImbuingIcon.png">
						<h4 class="skillguide_skill_title">Imbuing</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Imbuing')">Learn More</a>
					</td>
				</tr>
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/SmithingIcon.png">
						<h4 class="skillguide_skill_title">Smithing</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Smithing')">Learn More</a>
					</td>
				</tr>
			</tbody>
		</table>
	</article>
	
	<article class="skillguide_category">
		
		<h3>Support Skills</h3>
		<p class="skillguide_category_description content_rewrite">These skills help the player in various different ways.</p>
		
		<table class="skillguide_skills">
			<tbody class="skillguide_skills">
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/AthleticismIcon.png">
						<h4 class="skillguide_skill_title">Athleticism</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Athleticism')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/BountyHuntingIcon.png">
						<h4 class="skillguide_skill_title">Bounty Hunting</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Bounty Hunting')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/CamaraderieIcon.png">
						<h4 class="skillguide_skill_title">Camaraderie</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
						<a class="skillguide_skill_button" onclick="openSpecificSkillGuide('Camaraderie')">Learn More</a>
					</td>
				</tr>
				
				<tr class="skillguide_skill">
					<th class="skillguide_skill_header">
						<img class="skillguide_skillicon" src="img/SkillIcons/FirelightingIcon.png">
						<h4 class="skillguide_skill_title">Firelighting</h4>
					</th>
					
					<td class="skillguide_skill_data">
						<p class="skillguide_skill_description content_rewrite">description</p>
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
	<article>
	`;
}


const openSpecificSkillGuide = function(theSkill){
	
	document.querySelector("main").innerHTML = `
		<header>
			<h2>${theSkill}</h2>
		</header>
		<article>
			<div id="specificskill_main"></div>
		</article>
	`;
	
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
		case "Camaraderie":		OpenCamaraderieSkillGuide();	break;	case "Firelighting":	OpenFirelightingSkillGuide();	break;
		case "Larceny":			OpenLarcenySkillGuide(); 		break;
	}
}

const createGrid = function(name, items){

	let gridTemplate = `<div class="specificskill_grid_outline">`;
	let i = 0;
	
	while(i < items){
		gridTemplate +=
		`<div class="specificskill_grid" 	  id="${name}_specificskill_grid_T${i}">
			
			<div class="specificskill_name"><p class="specificskill_desc" id="${name}_specificskill_name_T${i}">Name</p> </div>
			<div class="specificskill_lvl"> <p class="specificskill_desc" id="${name}_specificskill_lvl_T${i}" >Level</p></div>
			<div class="specificskill_exp">	<p class="specificskill_exp"  id="${name}_specificskill_exp_T${i}" >EXP</p>	 </div>
			<div class="specificskill_desc"><p class="specificskill_desc" id="${name}_specificskill_desc_T${i}">Descr</p></div>
		
		</div>`;
		
		i++;
	}
	gridTemplate += `</div>`;
	return gridTemplate;
}

const OpenArcherySkillGuide = function(){
	
}

const OpenEnduranceSkillGuide = function(){
	
}

const OpenHealthSkillGuide = function(){
	
}

const OpenMaleficiumSkillGuide = function(){
	
}

const OpenMeleeSkillGuide = function(){
	
}

const OpenThaumaturgySkillGuide = function(){
	
}

const OpenDowsingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = ``;
	
	document.querySelector("#specificskill_main").innerHTML += createGrid("light", 11);
	document.querySelector("#specificskill_main").innerHTML += createGrid("dark", 11);
}

const OpenFishingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = ``;
	
	document.querySelector("#specificskill_main").innerHTML += createGrid("fish", 11);
}

const OpenForestrySkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = ``;
				
	document.querySelector("#specificskill_main").innerHTML += createGrid("trees", 11);
			
}

const OpenHorticultureSkillGuide = function(){
	
}

const OpenHuntingSkillGuide = function(){
	
}

const OpenMiningSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = ``;
	
	document.querySelector("#specificskill_main").innerHTML += createGrid("ores", 11);
}

const OpenChemistrySkillGuide = function(){
	
}

const OpenCookerySkillGuide = function(){
	
}

const OpenCraftingSkillGuide = function(){
	
}

const OpenFletchingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML = ``;
	
	document.querySelector("#specificskill_main").innerHTML += createGrid("bows", 11);
}

const OpenImbuingSkillGuide = function(){
	
}

const OpenSmithingSkillGuide = function(){
	
}

const OpenAthleticismSkillGuide = function(){
	
}

const OpenBountyHuntingSkillGuide = function(){
	
}

const OpenCamaraderieSkillGuide = function(){
	
}

const OpenFirelightingSkillGuide = function(){
	document.querySelector("#specificskill_main").innerHTML += createGrid("logs", 11);
}

const OpenLarcenySkillGuide = function(){
	
}