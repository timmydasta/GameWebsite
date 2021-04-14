let newsArticles = new Array();

class NewsArticle {
	
	constructor(newsTitle, newsDate, newsLink, newsType, newsDescription){
		this.newsTitle = newsTitle;
		this.newsDate = newsDate;
		this.newsLink = newsLink;
		this.newsType = newsType;
		this.newsDescription = newsDescription;
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
	document.querySelector("#nav_button_media").addEventListener('click', function() { openMedia()  });
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
			let newsDate = newsPost[1].Date;
			let newsLink = newsPost[1].Link;
			let newsType = newsPost[1].Type;
			let newsDescription = newsPost[1].Description;
			
			newNews = new NewsArticle(newsTitle, newsDate, newsLink, newsType, newsDescription);
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
		
	document.getElementById("main").innerHTML = 
	`
		<h1 class="page-title">News</h1>
	`;
	
	let i = 0;
	while(i < 6){
		
		document.getElementById("main").innerHTML += 
		`
		<a class="news_button" id="news_button${i}" onclick="loadNewsPage('news/${newsArticles[i].newsLink}.html')">
			
			<article class="news_article" id="news_article${i}">
			
				<div class="news_img">
					<img class="news_img" id="news_img${i}" src="img/PNG/news-${newsArticles[i].newsType}.png">
				</div>
					
				<div class="news_main">
					<header class="news_header" id="news_header">
					
						<h2 class="news_title" id="news_title${i}">${newsArticles[i].newsTitle}</h2>
							
							<div class="news_typedate">
								<p class="news_type" id="news_type${i}">${newsArticles[i].newsType}</p>
								<p class="news_date" id="news_date${i}">${newsArticles[i].newsDate}</p>
							</div>
				
					</header>
					
					<p class="news_brief" id="news_brief${i}">${newsArticles[i].newsDescription}</p>
					
				</div>
				
			</article>
			
		</a>
		`;
		
		i++;
	}
	
	document.getElementById("main").innerHTML += 
	`
		<a news_allbutton onclick="openNewsArchive()"><h2 class="news_allText">News Archive</h1></a>
	`;
}

const openNewsArchive = function(){
	document.getElementById("main").innerHTML = 
	`
		<h1 class="page-title">News Archive</h1>
	`;
	
	let i = 0;
	while(i < newsArticles.length){
		
		document.getElementById("main").innerHTML += 
		`
		<a class="newsarchive_button" id="news_button${i}" onclick="loadNewsPage('news/${newsArticles[i].newsLink}.html')">
			
			<article class="newsarchive_article" id="newsarchive_article${i}">
			
				<div class="newsarchive_img">
					<img class="newsarchive_img" id="newsarchive_img${i}" src="img/PNG/news-${newsArticles[i].newsType}.png">
				</div>
					
				<div class="newsarchive_main">
				
					<h2 class="newsarchive_title" id="newsarchive_title${i}">${newsArticles[i].newsTitle}</h2>
							
					<div class="newsarchive_typedate">
						<p class="newsarchive_type" id="newsarchive_type${i}">${newsArticles[i].newsType}</p>
						<p class="newsarchive_date" id="newsarchive_date${i}">${newsArticles[i].newsDate}</p>
					</div>
									
				</div>
				
			</article>
			
		</a>
		`;
		
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
	`
	<h1 class="page-title">Game Guide</h1>

	<article class="guide_article" id="guide_article_skills">
		
		<a class="guide_button" id="guide_button_skills">
			
			<div class="guide_img_shell">
				<div class="guide_img" id="guide_img_skills" alt="A lumberjack, carpenter and chef show off their skills" title="Skillers"></div>
			</div>
			
			<aside class="guide_aside guide_aside_right">
				
				<h2 class="guide_title">Skill</h2>
				<p class="guide_description content_rewrite">GAMENAME has 24 skills for you to master these and you'll advance through the game and deeper into the adventure!</p>
			</aside>
			
		</a>
		
	</article>
	
	<article class="guide_article" id="guide_article_combat">
	
		<a class="guide_button" id="guide_button_combat" onclick="">
			
			<div class="guide_img_shell">
				<div class="guide_img" id="guide_img_combat" alt="A thaumaturge and a warrior show off their skills" title="Fighters"></div>
			</div>
			
			<aside class="guide_aside guide_aside_left">
				
				<h2 class="guide_title">Combat</h2>
				<p class="guide_description content_rewrite">Looking for a fight? In GAMENAME you can become the strongest of all warriors, master the art of destruction and creation through magic, or efficiently take out your targets from afar with a barrage of arrows</p>
				
			</aside>
		</a>
	</article>
	
	<article class="guide_article" id="guide_article_world">
	
		<a class="guide_button" id="guide_button_world" onclick="">
			
			<div class="guide_img_shell">
				<div class="guide_img" id="guide_img_skills" alt="A thaumaturge and a warrior show off their skills" title="Fighters"></div>
			</div>
			
			<aside class="guide_aside guide_aside_right">
				
				<h2 class="guide_title">The World</h2>
				<p class="guide_description content_rewrite">There's a whole world to explore when you play GAMENAME; from ruined cities and towns, to dungeons and general stores</p>
				
			
			</aside>
		</a>
		
	</article>
	
	<article class="guide_article" id="guide_article_quests">
		
		<a class="guide_button" id="guide_button_quests" onclick="">
			
			<div class="guide_img_shell">
				<div class="guide_img" id="guide_img_combat" alt="A thaumaturge and a warrior show off their skills" title="Fighters"></div>
			</div>
			
			<aside class="guide_aside guide_aside_left">
				
				<h2 class="guide_title">Quests</h2>
				<p class="guide_description content_rewrite">Quests are the events that impact the world of GAMENAME. Gain hefty experience, meet new characters, develop your skills, earn new found treasure and much more.</p>
			
			</aside>
		</a>
	</article>`;
	
	document.querySelector("#guide_button_skills").addEventListener('click', function(){ openSkillGuide()  }); document.querySelector("#guide_button_combat").addEventListener('click', function(){ openCombatGuide() });	
	document.querySelector("#guide_button_world").addEventListener('click', function() { openWorldGuide()  }); document.querySelector("#guide_button_quests").addEventListener('click', function(){ openQuestGuide()  });
}

const openCombatGuide = function(){
	document.querySelector("main").innerHTML = 
	`
	<div class="guide_breadcrumbs">
		<a class="guide_breadcrumb" onclick="openGuide()">Guides &gt;</a>
		<a class="guide_breadcrumb" onclick="openCombatGuide()">Combat Guide<a>
	</div>
	
	<article class="combatguide">
		<header class="combatguide_header">
			<h2 class="combatguide_header_title">Combat Guide</h2>
		</header>
		
		<p class="combatguide_header_text content_rewrite">
			GAMENAME's combat is exciting and challenging, with many different options and abilities to choose from. Thousands of armour and weapon combinations are available, and the strongest players are those who prepare well for battle.
			Players can try to defeat hundreds of different NPCs as they progress with their adventure or can engage in combat with other players in dedicated PvP areas.
			Read on to find out why Combat is such a huge part of GAMENAME's gameplay.
		</p>
	
		<article class="combatguide_article">
			<h3 class="combatguide_article_title">Combat Styles</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
			<h3 class="combatguide_article_title">Warrior</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
			<h3 class="combatguide_article_title">Archer</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
			<h3 class="combatguide_article_title">Black Mage</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
			
			<h3 class="combatguide_article_title">White Mage</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
		</article>
		
		<article class="combatguide_article">
			<h3 class="combatguide_article_title">Health</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
			<h3 class="combatguide_article_title">Death</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
		</article>
		
		<article class="combatguide_article">
			<h3 class="combatguide_article_title">Equipment</h3>
			<p class="combatguide_article_description content_rewrite">description</p>
			
		</article>
	</article>
	`;
}

const openWorldGuide = function(){
	document.querySelector("main").innerHTML = `
	
	<div class="guide_breadcrumbs">
		<a class="guide_breadcrumb" onclick="openGuide()">Guides &gt;</a>
		<a class="guide_breadcrumb" onclick="openWorldGuide()"> World Guide<a>
	</div>
	
	<article class="worldguide">
	
		<header class="worldguide_header">
			<h2 class="worldguide_header_title">World Guide</h2>
		</header>
		
			<p class="worldguide_header_text content_rewrite">
				description
			</p>
			
		<article class="worldguide_article">
			<h3 class="worldguide_article_title">Finding Your Way</h3>
			<p class="worldguide_article_description content_rewrite">description</p>
			
		</article>
		
		<article class="worldguide_article">
			<h3 class="worldguide_article_title">Factions</h3>
			<p class="worldguide_article_description content_rewrite">description</p>
			
		</article>
		
		<article class="worldguide_article">
			<h3 class="worldguide_article_title">Characters</h3>
			<p class="worldguide_article_description content_rewrite">description</p>
			
			<h3 class="worldguide_article_title">The Gods</h3>
			
			<h4 class="worldguide_title">Erdolle (ER- DOLL) The God of Tradition.</h4>
			<p class="worldguide_article_description content_rewrite">
			Erdolle was born a mortal and ascended to godhood.
			Erdolle is a staunch believer in the old ways of doing things. Rella approached him in mortal form and eased him out of this mindset over time.
			Together they had a family and grew old together before Rella revealed her true nature. Initially reluctant to become a god, he was convinced to learn more about her world.
			After Celiele comes to the world and convinces humanity to build a better world, he reverts back to his old beliefs and leaves the planet.
			ISTJ – SI, TE, FI, NE
			</p>
			
			<h4 class="worldguide_title">Rella (RELL- AH) The Goddess of Diplomacy.</h4>
			<p class="worldguide_article_description content_rewrite">
			Rella is a goddess born from two mortal-born Gods, a god of sunlight and a goddess of rain. She found her place in the universe as a diplomat between other Gods.
			During a time of great dispute she watched over her parent’s homeworld and ended up falling in love with Erdolle. Together they had a family and grew old. Not wanting to part with them, she split her power eight ways and transferred it to her family members. Returning to her role as a diplomat, her reduced power was noticed relatively quickly. As a result of this she was killed by a young, naiive war god. Her family took her body and used her energy to form a beautiful planet around her. 
			INFJ – NI, FE, TI, SE
			</p>
			
			<h4 class="worldguide_title">Arrale (AH- RA- LEE) The God of Textiles.</h4>
			<p class="worldguide_article_description content_rewrite">
			Arrale was born a mortal; he is the eldest child of Erdolle and Rella. 
			After Celiele comes to the world and convinces humanity to build a better world, Arrale left with his father. 
			ISTP – TI, SE, NI, FE
			</p>
			
			<h4 class="worldguide_title">Ukin (OO - KIN), Goddess of the Hearth.</h4>
			<p class="worldguide_article_description content_rewrite">
			Ukin was born a mortal and ascended to godhood; she is the second child of Erdolle and Rella.
			After Celiele comes to the world and convinces humanity to build a better world, Ukin left with her father. 
			ESFJ – FE, SI, NE, FI
			</p>
			
			<h4 class="worldguide_title">Ajeeha (AH- GEE- AH), God of Rivers</h4>
			<p class="worldguide_article_description content_rewrite">
			Ajeeha was born a mortal and ascended to godhood; she is the third child of Erdolle and Rella. 
			As a mortal, Ajeeha enjoyed watercolour painting in her spare time. As a god she used this talent to paint the rivers of the garden planet.
			After Celiele comes to the world and convinces humanity to build a better world, Ajeeha left the planet with Olarah.
			ISFP – FI, SE, NI, TE
			</p>
			
			<h4 class="worldguide_title">Wahieyle (WAH - HE -ILL), God of Breezes</h4>
			<p class="worldguide_article_description content_rewrite">
			Wahieyle was born a mortal and ascended to godhood; he is the fourth child of Erdolle and Rella. 
			He is the quietest of the children and tends to whisper when he talks.
			After Celiele comes to the world and convinces humanity to build a better world, Wahieyle retreats deep into the forests of the planet, leaving him the only remaining original god left on the planet.
			ISFJ – SI, FE, TI, NE
			</p>
			
			<h4 class="worldguide_title">Rou (ROW): God of Pathways</h4>
			<p class="worldguide_article_description content_rewrite">
			Rou was born a mortal and ascended to godhood; he is the fifth child of Erdolle and Rella. As a child he was the most adventurous of the lot. 
			Sometime after Rella’s death, he wanted to explore the worlds outside of the Garden so he constructed his own methods of teleportation. Over the course of his journey he met and became friends with numerous forms of life, and offered them a place to live on his mother’s planet.
			Unaware that Celiele was a goddess, he helped her and humanity flee the destruction caused by Kejeir and Cintr.
			After Celiele comes to the world and convinces humanity to build a better world, he left the planet to continue his journey across the cosmos, however he does drop in occasionally to visit Wahieyle.

			ENFP – NE, FI, TE, SI
			</p>
			
			<h4 class="worldguide_title">Olarah (OH-LA-RAH), God of Wellbeing</h4>
			<p class="worldguide_article_description content_rewrite">
			Olarah was born a mortal and ascended to godhood; he is the sixth child of Erdolle and Rella and is Elarah’s twin brother.
			As a child Olarah looked after the sick animals on the farm, as an adult he studied medicine in order to become a doctor.
			As a god, he looked after the races that Rou brought from other worlds as they were often wounded upon arrival.
			When Celiele arrived on the garden planet, he fell in love with her and her ambitions for a better world. However these feelings weren’t reciprocated, so he was convinced to leave with Ajeeha to find people worthy of his care. 
			INFP – FI, NE, SI, TE
			</p>
			
			<h4 class="worldguide_title">Elarah (EL-AR-AH), Goddess of Storms</h4>
			<p class="worldguide_article_description content_rewrite">
			Elarah was born a mortal and ascended to godhood; she is the seventh and youngest child of Erdolle and Rella and is Olarah’s twin sister.
			Elarah loves to fight, and fought the champions of every race that Rou brought to the garden planet. 
			After Celiele comes to the world and convinces humanity to build a better world, she left the garden to find a mentor, and the power needed to kill her mother’s murderer. 
			ESTP – SE, TI, FE, NI
			</p>
			
			
		</article>
	</article>
	`;
}

const openQuestGuide = function(){
	
	document.querySelector("main").innerHTML = 
	`
	<div class="guide_breadcrumbs">
		<a class="guide_breadcrumb" onclick="openGuide()">Guides &gt;</a>
		<a class="guide_breadcrumb" onclick="openQuestGuide()"> World Guide<a>
	</div>
	
	<article class="questguide">
		<header class="questguide_header">
			<h2 class="questguide_header_title">Quest Guide</h2>
		</header>
		
		<p class="questguide_header_text content_rewrite">
			description
		</p>
			
	</article>
	`;
}

const openHS = function(){
	
	document.getElementById("main").innerHTML = 
	`<div class="HighScores">
			
		<h1 class="page-title">HighScores</h1>
			
		<div class="HS-Main">
		
			<aside class="HS_SkillButtons">
					<a class="HS_SkillButton" onclick="openHSPage('Total Level')" 	><img class="HS_SkillIMG" src="" />										<h3 class="name">Total Level</h3></a>
					<a class="HS_SkillButton" onclick="openHSPage('Total EXP')" 	><img class="HS_SkillIMG" src="" />										<h3 class="name">Total EXP</h3></a>
					<a class="HS_SkillButton" onclick="collapseHSList('Skills')" 	><img class="HS_SkillIMG" src=""/>										<h3 class="name">Skills</h3> <img class="HS_SkillIMG" src=""/>	</a>
					<div class="HS_dropdown" id="HS_Dropdown_Skills"></div>
					<a class="HS_SkillButton" onclick="openHSPage('Quests')" 	><img class="HS_SkillIMG" src="" />										<h3 class="name">Quests</h3></a>
			</aside>
			
			<div class="HS_Main">
				
				<h2 class="HS_SkillTitle" id="HS_SkillTitle"></h2>
				<div id="HS_Players" class="HS_Players">	
				</div>
			</div>
			
			<aside class="HS_SearchAndCompare">
				
				<div class="HS_Search">
					<div class="HS_Margin">
						<h3 class="HS_SearchTitle">Search For A Player</h3>
						<Input class="HS_SearchInput" id="HS_SearchInput"></Input>
						<div class="HS_SearchCenter">
							<a class="HS_Button" onclick="searchPlayer()">Search</a>
						</div>
					</div>
				</div>
				
				<div class="HS_Compare">
					<div class="HS_Margin">
						<h3 class="HS_CompareTitle">Compare Players</h3>
						<Input class="HS_CompareInput" id="HS_CompareInputOne"></Input>
						<Input class="HS_CompareInput" id="HS_CompareInputTwo"></Input>
						<div class="HS_CompareCenter">
							<a class="HS_Button" onclick="comparePlayers()">Compare</a>
						</div>
					</div>
				</div>
			</aside>
		</div>
	</div>`;
	
	openHSPage("Total Level");
}

const collapseHSList = function(theList){
	if(document.querySelector("#HS_Dropdown_Skills").innerHTML == ""){
	document.querySelector("#HS_Dropdown_Skills").innerHTML = `
		<a class="HS_SkillButton" onclick="openHSPage('Archery')" 		><img class="HS_SkillIMG" src="img/SkillIcons/ArcheryIcon.png"/>		<h3 class="name">Archery</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Athleticism')"  	><img class="HS_SkillIMG" src="img/SkillIcons/AthleticismIcon.png"/>	<h3 class="name">Athleticism</h3>		</a>
		<a class="HS_SkillButton" onclick="openHSPage('Bounty Hunting')"><img class="HS_SkillIMG" src="img/SkillIcons/BountyHuntingIcon.png"/	><h3 class="name">Bounty Hunting</h3>	</a>
		<a class="HS_SkillButton" onclick="openHSPage('Camaraderie')" 	><img class="HS_SkillIMG" src="img/SkillIcons/CamaraderieIcon.png"/>	<h3 class="name">Camaraderie</h3>		</a>
		<a class="HS_SkillButton" onclick="openHSPage('Carpentry')" 	><img class="HS_SkillIMG" src="img/SkillIcons/CarpentryIcon.png"/>		<h3 class="name">Carpentry</h3>			</a>
		<a class="HS_SkillButton"onclick="openHSPage('Chemistry')" 		><img class="HS_SkillIMG" src="img/SkillIcons/ChemistryIcon.png"/>		<h3 class="name">Chemistry</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Cookery')" 		><img class="HS_SkillIMG" src="img/SkillIcons/CookeryIcon.png"/>		<h3 class="name">Cookery</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Crafting')" 		"><img class="HS_SkillIMG" src="img/SkillIcons/CraftingIcon.png"/>		<h3 class="name">Crafting</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Dowsing')" 		><img class="HS_SkillIMG" src="img/SkillIcons/DowsingIcon.png"/>		<h3 class="name">Dowsing</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Endurance')" 	><img class="HS_SkillIMG" src="img/SkillIcons/EnduranceIcon.png"/>		<h3 class="name">Endurance</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Firelighting')" 	><img class="HS_SkillIMG" src="img/SkillIcons/FirelightingIcon.png"/>	<h3 class="name">Firelighting</h3>		</a>
		<a class="HS_SkillButton" onclick="openHSPage('Fishing')" 		><img class="HS_SkillIMG" src="img/SkillIcons/FishingIcon.png"/>		<h3 class="name">Fishing</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Fletching')" 	><img class="HS_SkillIMG" src="img/SkillIcons/FletchingIcon.png"/>		<h3 class="name">Fletching</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Forestry')" 		><img class="HS_SkillIMG" src="img/SkillIcons/ForestryIcon.png"/>		<h3 class="name">Forestry</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Health')" 		><img class="HS_SkillIMG" src="img/SkillIcons/HealthIcon.png"/>			<h3 class="name">Health</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Horticulture')" 	><img class="HS_SkillIMG" src="img/SkillIcons/HorticultureIcon.png"/>	<h3 class="name">Horticulture</h3>		</a>
		<a class="HS_SkillButton" onclick="openHSPage('Hunting')" 		><img class="HS_SkillIMG" src="img/SkillIcons/HuntingIcon.png"/>		<h3 class="name">Hunting</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Imbuing')" 		><img class="HS_SkillIMG" src="img/SkillIcons/ImbuingIcon.png"/>		<h3 class="name">Imbuing</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Larceny')" 		><img class="HS_SkillIMG" src="img/SkillIcons/LarcenyIcon.png"/>		<h3 class="name">Larceny</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Maleficium')" 	><img class="HS_SkillIMG" src="img/SkillIcons/MaleficiumIcon.png"/>		<h3 class="name">Maleficium</h3>		</a>
		<a class="HS_SkillButton" onclick="openHSPage('Melee')" 		><img class="HS_SkillIMG" src="img/SkillIcons/MeleeIcon.png"/>			<h3 class="name">Melee</h3>				</a>
		<a class="HS_SkillButton" onclick="openHSPage('Mining')" 		><img class="HS_SkillIMG" src="img/SkillIcons/MiningIcon.png"/>			<h3 class="name">Mining</h3> 			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Smithing')" 		><img class="HS_SkillIMG" src="img/SkillIcons/SmithingIcon.png"/>		<h3 class="name">Smithing</h3>			</a>
		<a class="HS_SkillButton" onclick="openHSPage('Thaumaturgy')" 	><img class="HS_SkillIMG" src="img/SkillIcons/ThaumaturgyIcon.png"/>	<h3 class="name">Thaumaturgy</h3>		</a>
	`;
	}
	else{
		document.querySelector("#HS_Dropdown_Skills").innerHTML = ``;
	}

}

const openForums = function(){
	
	document.getElementById("main").innerHTML = 
	`
	<h1>Forums</h1>
	`;
}

const openMedia = function(){
		
	document.getElementById("main").innerHTML = 
	`
	<div class="page-title">
		<h1 class="page-title">Media</h1>
	</div>

	<article>
		<h2>Screenshots</h2>
	<article>
	
	<article>
		<h2>Wallpapers</h2>
	<article>`;
}

const openSignIn = function(){
	
	document.getElementById("main").innerHTML = 
	`
	<div class="page-title">
		<h1 class="page-title">Sign In</h1>
	</div>
	`;
}

const openSignUp = function(){
	
	document.getElementById("main").innerHTML = 
	`
	<div class="page-title">
		<h1 class="page-title">Sign Up</h1>
	</div>
	`;
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

	



