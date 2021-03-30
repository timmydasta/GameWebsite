let newsArticles = new Array();

class NewsArticle {
	
	constructor(newsTitle, newsDate, newsLink, newsType){
		this.newsTitle = newsTitle;
		this.newsDate = newsDate;
		this.newsLink = newsLink;
		this.newsType = newsType;
	}
}

let users = new Array();

class User {
	
	constructor(theUsername, theSkills, theTotalEXP, theTotalLevel){
		this.username = theUsername;
		this.skills = theSkills;
		this.totalEXP = theTotalEXP;
		this.totalLevel = theTotalLevel;
	}
}

class Skill{
	
	constructor(theName, theEXP, theLevel){
		this.skillName = theName;
		this.exp = theEXP;
		this.level = theLevel;
	}
}

const start = function(){
	findAllNews();
	findAllUsers();
	
	document.querySelector("#nav_button_news").addEventListener('click', function()  { openNews()   });	document.querySelector("#nav_button_guide").addEventListener('click', function() { openGuide()  });
	document.querySelector("#nav_button_scores").addEventListener('click', function(){ openHS()     });	document.querySelector("#nav_button_forums").addEventListener('click', function(){ openForums() });
	document.querySelector("#nav_button_media").addEventListener('click', function() { openMedia()  });
}

const findAllNews = function(totalNews){
	$.getJSON('https://more-pig.firebaseio.com/WebsiteDB.json', function(result){
		console.log("keys " + Object.keys(result).length);
		
		let i = 0;
		while( i < Object.keys(result).length){
						
			let newsPost = Object.entries(result)[i];
			console.log(newsPost);
			
			let newsTitle = newsPost[1].Title;
			let newsDate = newsPost[1].PostDate;
			let newsLink = newsPost[1].Link;
			let newsType = newsPost[1].Type;
			
			newNews = new NewsArticle(newsTitle, newsDate, newsLink, newsType);
			newsArticles.push(newNews);
			i++;
		}
		openNews();
	})
}

const findAllUsers = function(){
	$.getJSON('https://more-pig.firebaseio.com/Users.json', function(result){
		
		let i = 0;
		while( i < Object.keys(result).length){
			
			let totalEXP = 0; let totalLevel = 0;
			
			let user = Object.entries(result)[i];
			let skills = new Array();		
			
			let skillsNames = Object.keys(user[1].Skills);
			let skillsList = Object.values(user[1].Skills);
			
			let j = 0;
			while(j < 24){	
				
				let skillValues = Object.values(Object.values(skillsList[j]));
				
				totalEXP += parseInt(skillValues[0]);
				totalLevel += parseInt(skillValues[1]);
				
				newSkill = new Skill(skillsNames[j], skillValues[0], skillValues[1]) 
				skills.push(newSkill);
				
				j++;
			}
			
			newUser = new User(user[1].Username, skills, totalEXP, totalLevel);
			users.push(newUser);
			//console.log(newUser);

			i++;
		}
	
	});
}

const openNews = function(){
	
	document.getElementById("main").innerHTML = "";
	let i = 0;
	
	while(i < newsArticles.length){
		document.getElementById("main").innerHTML += 
		`<article class="news_article" id="news_article${i}">
		
			<header class="news_header" id="news_header">
				
				<h2 class="news_title" id="news_title${i}">${newsArticles[i].newsTitle}</h2>
			
			</header>
			
			<div class="news_body" class="news_body${i}">
				
				<img class="news_img" class="news_img${i}">
				
				<div class="news_main" class="news_main${i}">
					<div class="news_info"   id="news_info${i}">
						
						<p class="news_type" id="news_type${i}">${newsArticles[i].newsType}</p>
						<p class="news_date" id="news_date${i}">${newsArticles[i].newsDate}</p>
					
					</div>
					
					<a class="news_button" id="news_button${i}" onclick="loadNewsPage('news/${newsArticles[i].newsLink}.html')">View</a>
				</div>
				
			</div>
			
		</article>`;
		
		i++;
	}
}

const loadNewsPage = function(theLink){
	console.log(theLink);
	/*
	$.getJSON(`${theLink}.json`, function(data){
        console.log(data);
    });	
	*/
	
	document.getElementById("main").innerHTML =
	`<article>
		<header>
			<h2>News Title</h2>
			<p>News Date</p>
			<p>News Type</p>
		</header>
		
		<p>News Content</p>
	</article>
	`;
}

const openGuide = function(){
	
	document.getElementById("main").innerHTML =
	`<article class="guide_article" id="guide_article_skills">
		<aside class="guide_aside">
			
			<h2 class="guide_title">Skill</h2>
			<p class="guide_description content_rewrite">GAMENAME has 24 skills for you to master these and you'll advance through the game and deeper into the adventure!</p>
			<a class="guide_button" id="guide_button_skills" onclick="">View</a>
		
		</aside>
	</article>
	
	<article class="guide_article" id="guide_article_combat">
		<aside class="guide_aside">
			
			<h2 class="guide_title">Combat</h2>
			<p class="guide_description content_rewrite">Looking for a fight? In GAMENAME you can become the strongest of all warriors, master the art of destruction and creation through magic, or efficiently take out your targets from afar with a barrage of arrows</p>
			<a class="guide_button" id="guide_button_combat" onclick="">View</a>
		
		</aside>
	</article>
	
	<article class="guide_article" id="guide_article_world">
		<aside class="guide_aside">
			
			<h2 class="guide_title">The World</h2>
			<p class="guide_description content_rewrite">There's a whole world to explore when you play GAMENAME; from ruined cities and towns, to dungeons and general stores</p>
			<a class="guide_button" id="guide_button_world" onclick="">View</a>
		
		</aside>
	</article>
	
	<article class="guide_article" id="guide_article_quests">
		<aside class="guide_aside">
			
			<h2 class="guide_title">Quests</h2>
			<p class="guide_description content_rewrite">Quests are the events that impact the world of GAMENAME. Gain hefty experience, meet new characters, develop your skills, earn new found treasure and much more.</p>
			<a class="guide_button" id="guide_button_quests" onclick="">View</a>
		
		</aside>
	</article>`;
	
	document.querySelector("#guide_button_skills").addEventListener('click', function(){ openSkillGuide()  }); document.querySelector("#guide_button_combat").addEventListener('click', function(){ openCombatGuide() });	
	document.querySelector("#guide_button_world").addEventListener('click', function() { openWorldGuide()  }); document.querySelector("#guide_button_quests").addEventListener('click', function(){ openQuestGuide()  });
}

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
		<div id="specificskill_main">
		</div>
	</article>
	`;
	
	switch(theSkill){
		case "Forestry":
			document.querySelector("#specificskill_main").innerHTML = `
				<p>Opened the forestry section</p>
				<div class="specificskill_grid_outline">
					<div class="specificskill_grid">
						<div class="specificskill_Name">Name</div>
						<div class="specificskill_Level">Level</div>
						<div class="specificskill_Exp">Exp</div>
						<div class="specificskill_Description">
							<td>Description</td>
						</div>
					</div>
					
					<div class="specificskill_grid">
						<div class="specificskill_Name">Name</div>
						<div class="specificskill_Level">Level</div>
						<div class="specificskill_Exp">Exp</div>
						<div class="specificskill_Description">
							<td>Description</td>
						</div>
					</div>
				</div>
			`;
			break;
		case "Mining":
			document.querySelector("#specificskill_main").innerHTML = `
				<p>Opened the mining section</p>
			`;
			break;
	}
}

const openCombatGuide = function(){
	document.querySelector("main").innerHTML = 
	`<header>
		<h2 class="combatguide_header_title">Combat Guide</h2>
		<p class="combatguide_header_text content_rewrite">
			GAMENAME's combat is exciting and challenging, with many different options and abilities to choose from. Thousands of armour and weapon combinations are available, and the strongest players are those who prepare well for battle.
			Players can try to defeat hundreds of different NPCs as they progress with their adventure or can engage in combat with other players in dedicated PvP areas.
			Read on to find out why Combat is such a huge part of GAMENAME's gameplay.
		</p>
	</header>
	
	<article class="combatguide_article">
		<h2 class="combatguide_title">Combat Styles</h2>
		<p class="content_rewrite">description</p>
		
		<h2 class="combatguide_title">Warrior</h2>
		<p class="content_rewrite">description</p>
		
		<h2 class="combatguide_title">Archer</h2>
		<p class="content_rewrite">description</p>
		
		<h2 class="combatguide_title">Black Mage</h2>
		<p class="content_rewrite">description</p>
		
		
		<h2 class="combatguide_title">White Mage</h2>
		<p class="content_rewrite">description</p>
		
	</article>
	
	<article class="combatguide_article">
		<h2 class="combatguide_title">Health</h2>
		<p class="content_rewrite">description</p>
		
		<h2 class="combatguide_title">Death</h2>
		<p class="content_rewrite">description</p>
	</article>
	
	<article class="combatguide_article">
		<h2 class="combatguide_title">Equipment</h2>
		<p class="content_rewrite">description</p>
		
	</article>`;
}

const openWorldGuide = function(){
	document.querySelector("main").innerHTML = `
	
	<header>
		<h2 class="worldguide_header_title">World Guide</h2>
		<p class="worldguide_header_text content_rewrite">
			description
		</p>
	</header>
	
	<article class="worldguide_article">
		<h2 class="worldguide_title">Finding Your Way</h2>
		<p class="content_rewrite">description</p>
		
	</article>
	
	<article class="worldguide_article">
		<h2 class="worldguide_title">Factions</h2>
		<p class="content_rewrite">description</p>
		
	</article>`;
}

const openQuestGuide = function(){
	
	document.querySelector("main").innerHTML = 
	`<header>
		<h2 class="questguide_header_title">Quest Guide</h2>
		<p class="questguide_header_text content_rewrite">
			description
		</p>
	</header>`;
}

const openHS = function(){
	document.getElementById("main").innerHTML = 
	`<div class="HighScores">
			
		<div class="hs-title">
			<h2 class="hs-title">HighScores</h3>
		</div>
			
		<div class="HS-Main">
			<aside class="HS_SkillButtons">
			<ul class="HS_SkillButtons">
				<Button onclick="openHSPage('Total Level')" 	class="HS_SkillButton"><img class="HS_SkillIMG" src="" />									</Button>
				<Button onclick="openHSPage('Total EXP')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="" />									</Button>
				<Button onclick="openHSPage('Archery')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/ArcheryIcon.png"/>		</Button>
				<Button onclick="openHSPage('Athleticism')"  	class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/AthleticismIcon.png"/>	</Button>
				<Button onclick="openHSPage('Bounty Hunting')" 	class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/BountyHuntingIcon.png"/></Button>
				<Button onclick="openHSPage('Camaraderie')" 	class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/CamaraderieIcon.png"/>	</Button>
				<Button onclick="openHSPage('Carpentry')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/CarpentryIcon.png"/>	</Button>
				<Button onclick="openHSPage('Chemistry')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/ChemistryIcon.png"/>	</Button>
				<Button onclick="openHSPage('Cookery')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/CookeryIcon.png"/>		</Button>
				<Button onclick="openHSPage('Crafting')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/CraftingIcon.png"/>		</Button>
				<Button onclick="openHSPage('Dowsing')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/DowsingIcon.png"/>		</Button>
				<Button onclick="openHSPage('Endurance')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/EnduranceIcon.png"/>	</Button>
				<Button onclick="openHSPage('Firelighting')" 	class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/FirelightingIcon.png"/>	</Button>
				<Button onclick="openHSPage('Fishing')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/FishingIcon.png"/>		</Button>
				<Button onclick="openHSPage('Fletching')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/FletchingIcon.png"/>	</Button>
				<Button	onclick="openHSPage('Forestry')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/ForestryIcon.png"/>		</Button>
				<Button onclick="openHSPage('Health')" 			class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/HealthIcon.png"/>		</Button>
				<Button onclick="openHSPage('Horticulture')" 	class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/HorticultureIcon.png"/>	</Button>
				<Button onclick="openHSPage('Hunting')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/HuntingIcon.png"/>		</Button>
				<Button onclick="openHSPage('Imbuing')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/ImbuingIcon.png"/>		</Button>
				<Button onclick="openHSPage('Larceny')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/LarcenyIcon.png"/>		</Button>
				<Button onclick="openHSPage('Maleficium')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/MaleficiumIcon.png"/>	</Button>
				<Button onclick="openHSPage('Melee')" 			class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/MeleeIcon.png"/>		</Button>
				<Button onclick="openHSPage('Mining')" 			class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/MiningIcon.png"/>		</Button>
				<Button onclick="openHSPage('Smithing')" 		class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/SmithingIcon.png"/>		</Button>
				<Button onclick="openHSPage('Thaumaturgy')" 	class="HS_SkillButton"><img class="HS_SkillIMG" src="img/SkillIcons/ThaumaturgyIcon.png"/>	</Button>
			<ul>
			</aside>
			<div class="HS_Main">
				
				<h3 class="HS_SkillTitle" id="HS_SkillTitle"></h3>
				<div id="HS_Players" class="HS_Players">	
				</div>
			</div>
			
			<aside class="HS_SearchAndCompare">
				
				<div class="HS_Search">
					<div class="HS_Margin">
						<h3 class="HS_SearchTitle">Search For A Player</h3>
						<Input class="HS_SearchInput" id="HS_SearchInput"></Input>
						<div class="HS_SearchCenter">
							<Button class="HS_SearchButton">Search</Button>
						</div>
					</div>
				</div>
				
				<div class="HS_Compare">
					<div class="HS_Margin">
						<h3 class="HS_CompareTitle">Compare Players</h3>
						<Input class="HS_CompareInput" id="HS_CompareInputOne"></Input>
						<Input class="HS_CompareInput" id="HS_CompareInputTwo"></Input>
						<div class="HS_CompareCenter">
							<Button class="HS_CompareButton">Compare</Button>
						</div>
					</div>
				</div>
			</aside>
		</div>
	</div>`;
	
	openHSPage("Total Level");
}


const openForums = function(){
	document.getElementById("main").innerHTML = 
	`<article>
		<h2>Forums</h2>
	<article>`;
}

const openMedia = function(){
	document.getElementById("main").innerHTML = 
	`<article>
		<h2>Screenshots</h2>
	<article>
	
	<article>
		<h2>Wallpapers</h2>
	<article>`;
}


start();

function openHSPage(thePage){
	
	document.getElementById("HS_Players").innerHTML = 
	`<div class="HS_Titles">
		<h3 class="HS_PlayerRankTitle">Rank</h3>
		<h3 class="HS_PlayerNameTitle">Player</h3>
		<h3 class="HS_PlayerLevelTitle">Level</h3>
		<h3 class="HS_PlayerExpTitle">Exp</h3>
	</div>
	`;
	document.getElementById("HS_SkillTitle").innerHTML = thePage;
		
	let playersOnScreen = 0;
	console.log(users.length);
	while(playersOnScreen < users.length){
		
		document.getElementById("HS_Players").innerHTML +=
		`<div class="HS_Player">
			<h3 id="HS_Player` + playersOnScreen + `Rank" class="HS_PlayerRank"></h3>
			<h3 id="HS_Player` + playersOnScreen + `Name" class="HS_PlayerName"></h3>
			<h3 id="HS_Player` + playersOnScreen + `Level" class="HS_PlayerLevel"></h3>
			<h3 id="HS_Player` + playersOnScreen + `EXP" class="HS_PlayerEXP"></h3>
		</div>`;
				
		if(thePage == "Total Level" || thePage == "Total EXP"){
			
			let sortedUsers;
			
			if(thePage == "Total Level"){
				
				sortedUsers = users.sort(function(a, b){
				
					if(b.totalLevel - a.totalLevel == 0){ return b.totalEXP - a.totalEXP;     }
					else{ 								  return b.totalLevel - a.totalLevel; }
				});
			}
			else if(thePage == "Total EXP"){
				
				sortedUsers = users.sort(function(a, b){
				
					if(b.totalEXP - a.totalEXP == 0){ return b.totalLevel - a.totalLevel; }
					else{ 	  						  return b.totalEXP - a.totalEXP;     }
				});
			}
			
			document.getElementById("HS_Player" + playersOnScreen + "Rank").innerHTML =  (playersOnScreen + 1);
			document.getElementById("HS_Player" + playersOnScreen + "Name").innerHTML =	 sortedUsers[playersOnScreen].username;
			document.getElementById("HS_Player" + playersOnScreen + "Level").innerHTML = sortedUsers[playersOnScreen].totalLevel.toLocaleString();
			document.getElementById("HS_Player" + playersOnScreen + "EXP").innerHTML =	 sortedUsers[playersOnScreen].totalEXP.toLocaleString();
			
		}
		else {
			
			for(var i = 0; i < users[playersOnScreen].skills.length; i++){
				if(users[playersOnScreen].skills[i].skillName == thePage){ break; }
			}
			
			let sortedUsers = users.sort(function(a, b){
				
				if(b.skills[i].level - a.skills[i].level == 0){	return b.skills[i].exp - a.skills[i].exp;     }
				else{ 											return b.skills[i].level - a.skills[i].level; }
			});
			
			document.getElementById("HS_Player" + playersOnScreen + "Rank").innerHTML = (playersOnScreen + 1);
			document.getElementById("HS_Player" + playersOnScreen + "Name").innerHTML =	 sortedUsers[playersOnScreen].username;
			document.getElementById("HS_Player" + playersOnScreen + "Level").innerHTML = sortedUsers[playersOnScreen].skills[i].level.toLocaleString();
			document.getElementById("HS_Player" + playersOnScreen + "EXP").innerHTML =	 sortedUsers[playersOnScreen].skills[i].exp.toLocaleString();

		}
		playersOnScreen++;			
	}
}

	



