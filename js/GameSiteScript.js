let activeUser = "";

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
}

const findAllNews = function(totalNews){
	$.getJSON('https://more-pig.firebaseio.com/WebsiteDB.json', function(result){
				
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
		<div class="news"></div>
	`;
	
	let i = 0;
	while(i < 6){
		
		document.querySelector(".news").innerHTML += 
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
		<a class="news_allbutton" onclick="openNewsArchive()">News Archive</a>
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
	<header class="guide_header">
		<h1 class="guide_header_title" onclick="openGuide()">Game Guide &gt;</h1>
		<h1 class="guide_header_title">Combat Guide</h1>
	</header>
	
	<article class="combatguide">
		
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
	document.querySelector("main").innerHTML = 
	`
	<header class="guide_header">
		<h1 class="guide_header_title" onclick="openGuide()">Game Guide &gt;</h1>
		<h1 class="guide_header_title">World Guide</h1>
	</header>
	
	<article class="worldguide">
		
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
	<header class="guide_header">
		<h1 class="guide_header_title" onclick="openGuide()">Game Guide &gt;</h1>
		<h1 class="guide_header_title">Quest Guide</h1>
	</header>
	
	<article class="questguide">
		
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
		
		
			<aside class="HS_categories">
					<a class="HS_category" id="HS_category-first" onclick="openHSPage('Total Level')" 	><img class="HS_categoryIMG" src="" />										<h3 class="name">Total Level</h3></a>
					<a class="HS_category" onclick="openHSPage('Total EXP')" 							><img class="HS_categoryIMG" src="" />										<h3 class="name">Total EXP</h3></a>
					
					<a class="HS_category" onclick="collapseHSList('Skills')" 	>
						<img class="HS_categoryIMG" src="img/SkillIcons/SkillsIcon.png"/>			
						<h3 class="name">Skills</h3> 
						<img class="HS_dropdownIMG" id="HS_dropdownIMG_skills" src="img/SkillIcons/DropdownIcon.png"/>
					</a>
					<div class="HS_dropdown" id="HS_dropdown_skills"></div>
					
					<a class="HS_category" onclick="openHSPage('Quests')" 	><img class="HS_categoryIMG" src="img/SkillIcons/QuestIcon.png" />				<h3 class="name">Quests</h3></a>
					<a class="HS_category" onclick="openHSPage('Bounties')" ><img class="HS_categoryIMG" src="img/SkillIcons/BountyIcon.png" />			<h3 class="name">Bounties</h3></a>
			</aside>
			
			<div id="hs-table" class="hs-table"></div>
			
			<aside class="HS_SearchAndCompare">
				
				<div class="HS_Search">
					<h3 class="HS_SearchTitle">Search For A Player</h3>
					<Input class="HS_SearchInput" id="HS_SearchInput"></Input>
					<p class="hs-search-warning" id="hs-search-warning"></p>
					<a class="HS_Button" onclick="searchPlayer()">Search</a>
				</div>
				
				<div class="HS_Search">
					<h3 class="HS_SearchTitle">Compare Players</h3>
					
					<Input class="HS_SearchInput" id="HS_CompareInputOne"></Input>
					<p class="hs-search-warning" id="hs-player1-warning"></p>
					
					<Input class="HS_SearchInput" id="HS_CompareInputTwo"></Input>
					<p class="hs-search-warning" id="hs-player2-warning"></p>
					
					<a class="HS_Button" onclick="comparePlayers()">Compare</a>
				</div>
			</aside>
		</div>
	</div>`;
	
	openHSPage("Total Level");
}

const openHSPage = function(thePage){
	
	if(thePage == "Quests"){ return; }
	else if(thePage == "Bounties"){ return; }
	
	document.getElementById("hs-table").innerHTML = 
	`
	<div class="skill-grid-container" id="skill-grid-container">
		<div class="hs-skill-title-skill" style="grid-column: 1 / 5">
			<img class="hs-skill-title-skill"src="img/SkillIcons/${thePage}Icon.png">
			<h2 class="hs-skill-title-skill">${thePage}</h2>
		</div>
	
		<div class="hs-skill-title hs-skill-rank"><h3>Rank</h3></div>
		<div class="hs-skill-title"><h3>Name</h3></div>
		<div class="hs-skill-title"><h3>Level</h3></div>
		<div class="hs-skill-title"><h3>Exp</h3></div>
	</div>
	`;
	
	let sortedUsers;
	let indexSkill;
			
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
	else {
		
		indexSkill = users[0].skills.findIndex(x => x.skillName.toUpperCase() == thePage.toUpperCase());
		sortedUsers = users.sort(function(a, b){
				
			if(b.skills[indexSkill].level - a.skills[indexSkill].level == 0){ return b.skills[indexSkill].exp - a.skills[indexSkill].exp; }
			else{ 														  return b.skills[indexSkill].level - a.skills[indexSkill].level; }
		});
	}
	
	let i = 0;
	while(i < users.length){
		
		document.querySelector("#skill-grid-container").innerHTML +=
		`
			<div class="hs-skill-field hs-skill-rank"><h3 class="hs-skill-field">${i + 1}</h3></div>
			<div class="hs-skill-field"><h3 class="hs-skill-field">${sortedUsers[i].username}</h3></div>
		`;
		
		if(thePage == "Total Level" || thePage == "Total EXP"){
			
			document.querySelector("#skill-grid-container").innerHTML +=
			`
			<div class="hs-skill-field"><h3 class="hs-skill-field">${sortedUsers[i].totalLevel}</h3></div>
			<div class="hs-skill-field"><h3 class="hs-skill-field">${sortedUsers[i].totalEXP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3></div>
			`;
		}
		else {
		
			document.querySelector("#skill-grid-container").innerHTML +=
			`
			<div class="hs-skill-field"><h3 class="hs-skill-field">${sortedUsers[i].skills[indexSkill].level}</h3></div>
			<div class="hs-skill-field"><h3 class="hs-skill-field">${sortedUsers[i].skills[indexSkill].exp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3></div>
			`;
		}
		
		i++;
	}
}
	
let rotation = 0;
const collapseHSList = function(theList){
	rotation = rotation + 180;
	if(document.querySelector("#HS_dropdown_skills").innerHTML == ""){
		document.querySelector("#HS_dropdownIMG_skills").style.transform = `rotate(${rotation}deg)`;
		
	document.querySelector("#HS_dropdown_skills").innerHTML = `
		<a class="HS_category" onclick="openHSPage('Archery')" 		><img class="HS_categoryIMG" src="img/SkillIcons/ArcheryIcon.png"/>		<h3 class="name">Archery</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Athleticism')"  ><img class="HS_categoryIMG" src="img/SkillIcons/AthleticismIcon.png"/>	<h3 class="name">Athleticism</h3>		</a>
		<a class="HS_category" onclick="openHSPage('Bounty Hunting')"><img class="HS_categoryIMG" src="img/SkillIcons/BountyHuntingIcon.png"/><h3 class="name">Bounty Hunting</h3>	</a>
		<a class="HS_category" onclick="openHSPage('Camaraderie')" 	><img class="HS_categoryIMG" src="img/SkillIcons/CamaraderieIcon.png"/>	<h3 class="name">Camaraderie</h3>		</a>
		<a class="HS_category" onclick="openHSPage('Carpentry')" 	><img class="HS_categoryIMG" src="img/SkillIcons/CarpentryIcon.png"/>	<h3 class="name">Carpentry</h3>			</a>
		<a class="HS_category"onclick="openHSPage('Chemistry')" 	><img class="HS_categoryIMG" src="img/SkillIcons/ChemistryIcon.png"/>	<h3 class="name">Chemistry</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Cookery')" 		><img class="HS_categoryIMG" src="img/SkillIcons/CookeryIcon.png"/>		<h3 class="name">Cookery</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Crafting')" 	><img class="HS_categoryIMG" src="img/SkillIcons/CraftingIcon.png"/>	<h3 class="name">Crafting</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Dowsing')" 		><img class="HS_categoryIMG" src="img/SkillIcons/DowsingIcon.png"/>		<h3 class="name">Dowsing</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Endurance')" 	><img class="HS_categoryIMG" src="img/SkillIcons/EnduranceIcon.png"/>	<h3 class="name">Endurance</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Firelighting')" ><img class="HS_categoryIMG" src="img/SkillIcons/FirelightingIcon.png"/><h3 class="name">Firelighting</h3>		</a>
		<a class="HS_category" onclick="openHSPage('Fishing')" 		><img class="HS_categoryIMG" src="img/SkillIcons/FishingIcon.png"/>		<h3 class="name">Fishing</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Fletching')" 	><img class="HS_categoryIMG" src="img/SkillIcons/FletchingIcon.png"/>	<h3 class="name">Fletching</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Forestry')" 	><img class="HS_categoryIMG" src="img/SkillIcons/ForestryIcon.png"/>	<h3 class="name">Forestry</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Health')" 		><img class="HS_categoryIMG" src="img/SkillIcons/HealthIcon.png"/>		<h3 class="name">Health</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Horticulture')" ><img class="HS_categoryIMG" src="img/SkillIcons/HorticultureIcon.png"/><h3 class="name">Horticulture</h3>		</a>
		<a class="HS_category" onclick="openHSPage('Hunting')" 		><img class="HS_categoryIMG" src="img/SkillIcons/HuntingIcon.png"/>		<h3 class="name">Hunting</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Imbuing')" 		><img class="HS_categoryIMG" src="img/SkillIcons/ImbuingIcon.png"/>		<h3 class="name">Imbuing</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Larceny')" 		><img class="HS_categoryIMG" src="img/SkillIcons/LarcenyIcon.png"/>		<h3 class="name">Larceny</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Maleficium')" 	><img class="HS_categoryIMG" src="img/SkillIcons/MaleficiumIcon.png"/>	<h3 class="name">Maleficium</h3>		</a>
		<a class="HS_category" onclick="openHSPage('Melee')" 		><img class="HS_categoryIMG" src="img/SkillIcons/MeleeIcon.png"/>		<h3 class="name">Melee</h3>				</a>
		<a class="HS_category" onclick="openHSPage('Mining')" 		><img class="HS_categoryIMG" src="img/SkillIcons/MiningIcon.png"/>		<h3 class="name">Mining</h3> 			</a>
		<a class="HS_category" onclick="openHSPage('Smithing')" 	><img class="HS_categoryIMG" src="img/SkillIcons/SmithingIcon.png"/>	<h3 class="name">Smithing</h3>			</a>
		<a class="HS_category" onclick="openHSPage('Thaumaturgy')" 	><img class="HS_categoryIMG" src="img/SkillIcons/ThaumaturgyIcon.png"/>	<h3 class="name">Thaumaturgy</h3>		</a>
	`;
	}
	else{
		document.querySelector("#HS_dropdown_skills").innerHTML = ``;
		document.querySelector("#HS_dropdownIMG_skills").style.transform = `rotate(${rotation}deg)`;
	}
}

const searchPlayer = function(){
	document.querySelector("#hs-search-warning").innerHTML = "";
	
	if(document.querySelector("#HS_SearchInput").innerHTML.value == ""){
		document.querySelector("#hs-search-warning").innerHTML = "";
	}
	else {
		
	}
}

const comparePlayers = function(){
	
	let userOne = document.querySelector("#HS_CompareInputOne").value;	let userTwo = document.querySelector("#HS_CompareInputTwo").value;
	
	userOne = "timmydasta"; userTwo = "zinch";
	
	document.querySelector("#hs-player1-warning").innerHTML = "";	document.querySelector("#hs-player2-warning").innerHTML = "";
	
	if(userOne == ""){
		document.querySelector("#hs-player1-warning").innerHTML = "Please enter a player name";
	}
	if(userTwo == ""){
		document.querySelector("#hs-player2-warning").innerHTML = "Please enter a player name";
	}
	if(userOne != "" || userTwo != ""){
		
		let userOneFound = false; let userTwoFound = false;
		
		$.getJSON(`https://more-pig.firebaseio.com/Users/${userOne.toUpperCase()}.json`, function(result){
			if(result == null){
				document.querySelector("#hs-player1-warning").innerHTML = "That user doesn't exist";
			}
			else{
				userOneFound = true;
			}
		});
		
		$.getJSON(`https://more-pig.firebaseio.com/Users/${userTwo.toUpperCase()}.json`, function(result){
			if(result == null){
				document.querySelector("#hs-player2-warning").innerHTML = "That user doesn't exist";
			}
			else{
				userTwoFound = true;
			}
		});
		
		setTimeout(function(){
			if(userOneFound == true && userTwoFound == true){
			
				let indexOne = users.findIndex(x => x.username.toUpperCase() == userOne.toUpperCase());
				let indexTwo = users.findIndex(x => x.username.toUpperCase() == userTwo.toUpperCase());
					
				document.getElementById("hs-table").innerHTML = 
				`
				<div class="compare-grid-container" id="compare-grid-container">
					<div class="hs-compare-title-empty" style="grid-column: 1 / 2"></div>
					<div class="hs-compare-title-player" style="grid-column: 2 / 4">
						<h2 class="hs-compare-title-player">${users[indexOne].username}</h2>
					</div>
					<div class="hs-compare-title-player hs-compare-borderright" style="grid-column: 4 / 6">
						<h2 class="hs-compare-title-player">${users[indexTwo].username}</h2>
					</div>
					
					<div class="hs-compare-title-skill" style="grid-column: 1 / 2"><h3>Skill</h3></div>
					<div class="hs-compare-title"><h3>Level</h3></div>
					<div class="hs-compare-title"><h3>Exp</h3></div>
					<div class="hs-compare-title"><h3>Level</h3></div>
					<div class="hs-compare-title hs-compare-borderright"><h3>Exp</h3></div>
				</div>
				`;
				
				let i = 0;
				while(i < 24){
					
					let skillName = users[indexOne].skills[i].skillName;
					if(skillName == "Bounty Hunting"){ skillName = "BountyHunting"; }
				
					document.querySelector("#compare-grid-container").innerHTML +=
					`
					<div class="hs-compare-skill" style="grid-column: 1 / 2">
						<img class="hs-compare-skill" src="img/SkillIcons/${skillName}Icon.png"/>
						<h3 class="hs-compare-field">${users[indexOne].skills[i].skillName}</h3>
					</div>
					
					<div class="hs-compare-level" id="hs-compare-one-level-${skillName}">
						<h3 class="hs-compare-field">${users[indexOne].skills[i].level}</h3>
					</div>
					
					<div class="hs-compare-exp"   id="hs-compare-one-exp-${skillName}">
						<h3 class="hs-compare-field">${users[indexOne].skills[i].exp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
					</div>
					
					<div class="hs-compare-level" id="hs-compare-two-level-${skillName}">
						<h3 class="hs-compare-field">${users[indexTwo].skills[i].level}</h3>
					</div>
					
					<div class="hs-compare-exp hs-compare-borderright"   id="hs-compare-two-exp-${skillName}">
						<h3 class="hs-compare-field">${users[indexTwo].skills[i].exp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
					</div>
					`;
					
					if(users[indexOne].skills[i].exp > users[indexTwo].skills[i].exp){
						document.querySelector(`#hs-compare-one-level-${skillName}`).style.backgroundColor = "#edd682";
						document.querySelector(`#hs-compare-one-exp-${skillName}`).style.backgroundColor = "#edd682";
						
						document.querySelector(`#hs-compare-two-level-${skillName}`).style.backgroundColor = "#c2c2c2";
						document.querySelector(`#hs-compare-two-exp-${skillName}`).style.backgroundColor = "#c2c2c2";
					}
					else if(users[indexOne].skills[i].exp < users[indexTwo].skills[i].exp){
						document.querySelector(`#hs-compare-one-level-${skillName}`).style.backgroundColor = "#c2c2c2";
						document.querySelector(`#hs-compare-one-exp-${skillName}`).style.backgroundColor = "#c2c2c2";
						
						document.querySelector(`#hs-compare-two-level-${skillName}`).style.backgroundColor = "#edd682";
						document.querySelector(`#hs-compare-two-exp-${skillName}`).style.backgroundColor = "#edd682";
					}
					
					i++;
				}

				
				
			}
		}, 1000);
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

const openAccount = function(){
	
	if(activeUser == ""){
		document.getElementById("main").innerHTML = 
		`
		<div class="page-title">
			<h1 class="page-title">Account</h1>
		</div>
		
		<div class="account-forms">
		
			<form class="account-form" method="post">
				
				<h2 class="account-form-title">Sign In</h2>
				<span class="account-form-row">
					<label class="account-form-label">Username:</label>
					<input class="account-form-input" id="signin-input-username" maxlength="200" type="text"></input>
				</span>
				<p class="account-form-warning" id="signin-warning-username"></p>
				
				<span class="account-form-row">
					<label class="account-form-label" >Password:</label>
					<input class="account-form-input" id="signin-input-password" maxlength="200" type="password" maxlength="10">
						<span class="account-form-showpassword">
							<label class="account-form-showpassword">Show</label>
							<input class="account-form-showpassword" id="signin-checkbox-password" type="checkbox" onclick="checkboxEvent('signin')"></input>
						</span>
					</input>
				</span>
				

				
				<p class="account-form-warning" id="signin-warning-password"></p>
				
				<a class="account-form-button" onclick="signIn()">Sign In</a>
				
			</form>
		
			<form class="account-form" method="post">
				
				<h2 class="account-form-title">Sign Up</h2>
				<span class="account-form-row">
					<label class="account-form-label">Username:</label>
					<input class="account-form-input" id="signup-input-username" maxlength="10"></input>
				</span>
				<p class="account-form-warning" id="signup-warning-username"></p>
				
				<span class="account-form-row">
					<label class="account-form-label">Email:</label>
					<input class="account-form-input" id="signup-input-email" maxlength="200" type="email"></input>
				</span>
				<p class="account-form-warning" id="signup-warning-email"></p>
				
				<span class="account-form-row">
					<label class="account-form-label">Password:</label>
					<input class="account-form-input" id="signup-input-password" maxlength="20" type="password">
						<span class="account-form-showpassword">
							<label class="account-form-showpassword">Show</label>
							<input class="account-form-showpassword" id="signup-checkbox-password" type="checkbox" onclick="checkboxEvent('signup')"></input>
						</span>
					</input>
				</span>
								
				<p class="account-form-warning" id="signup-warning-password"></p>
				
				<a class="account-form-button" onclick="signUp()">Sign Up</a>
				
			</form>
			
		</div>
		`;
	}
	else{
		document.getElementById("main").innerHTML = 
		`
		<div class="page-title">
			<h1 class="page-title">Account</h1>
		</div>
		
		<a onclick="logOut()">Log Out</a>
		`;
	}
}

const checkboxEvent = function(theForm){
	if(document.querySelector(`#${theForm}-checkbox-password`).checked){
		document.querySelector(`#${theForm}-input-password`).type = "Text";
	}
	else {
		document.querySelector(`#${theForm}-input-password`).type = "Password";
	}
}

const signIn = function(){
	document.querySelector("#signin-warning-username").innerHTML = "";	document.querySelector("#signin-warning-password").innerHTML = "";
	
	let theUsername = ""; let thePassword = "";
		
	if(document.querySelector("#signin-input-username").value == ""){
		document.querySelector("#signin-warning-username").innerHTML = "This field is required.";
	}
	else{
		theUsername = document.querySelector("#signin-input-username").value;
	}
	
	if(document.querySelector("#signin-input-password").value == ""){
		document.querySelector("#signin-warning-password").innerHTML = "This field is required.";
	}
	else {
		thePassword = document.querySelector("#signin-input-password").value;
	}
	
	if(theUsername != "" && thePassword != ""){
		$.getJSON(`https://more-pig.firebaseio.com/Users/${theUsername.toUpperCase()}.json`, function(result){

			if(result == null){
				document.querySelector("#signin-warning-username").innerHTML = "That user doesn't exist";
			}
			else{
				
				$.getJSON(`https://more-pig.firebaseio.com/Users/${theUsername.toUpperCase()}/Password.json`, function(result){
					
					if(result != thePassword){
						document.querySelector("#signin-warning-password").innerHTML = "You have entered an incorrect password";
					}
					else{
		
						$.getJSON(`https://more-pig.firebaseio.com/Users/${theUsername.toUpperCase()}/Username.json`, function(result){
							activeUser = result;
							document.querySelector("#nav_button_account").innerHTML = activeUser;
							openAccount();
						});
					}
				});
			}
		});
	}
}

const signUp = function(){
	document.querySelector("#signup-warning-username").innerHTML = document.querySelector("#signup-warning-email").innerHTML = document.querySelector("#signup-warning-password").innerHTML = "";
	
	let theUsername = "";	let theEmail = "";	let thePassword = "";
	
	if(document.querySelector("#signup-input-username").value == ""){
		document.querySelector("#signup-warning-username").innerHTML = "This field is required.";
	}
	else if(document.querySelector("#signup-input-username").value.length < 5){
		document.querySelector("#signup-warning-username").innerHTML = "Enter a username between 5 & 18 characters long.";
	}
	else{
		theUsername = document.querySelector("#signup-input-username").value;
	}
	
	if(document.querySelector("#signup-input-email").value == ""){
		document.querySelector("#signup-warning-email").innerHTML = "This field is required.";
	}
	else{
		theEmail = document.querySelector("#signup-input-email").value;
	}
	
	if(document.querySelector("#signup-input-password").value == ""){
		document.querySelector("#signup-warning-password").innerHTML = "This field is required.";
	}
	else if(document.querySelector("#signup-input-password").value.length < 6){
		document.querySelector("#signup-warning-password").innerHTML = "Enter a password between 6 & 20 characters long.";
	}
	else{
		thePassword = document.querySelector("#signup-input-password").value;
	}
	
	if(theUsername != "" && theEmail != "" && theEmail != ""){
			
		$.getJSON(`https://more-pig.firebaseio.com/Users/${theUsername.toUpperCase()}.json`, function(result){
					
			if(result != null){
				document.querySelector("#signup-warning-username").innerHTML = "That username is already in use";
			}
			else {
				
				$.getJSON(`https://more-pig.firebaseio.com/RecoveryEmailAddresses/${theEmail.toUpperCase()}.json`, function(result){

					if(result != null){
						document.querySelector("#signup-warning-email").innerHTML = "That email is already in use";
					}
					else{
						activeUser = theUsername[0].toUpperCase() + theUsername.slice(1);
						document.querySelector("#nav_button_account").innerHTML = activeUser;
						openAccount();
					}
				});
			}
		});
	}
}

const logOut = function(){
	activeUser= "";
	document.querySelector("#nav_button_account").innerHTML = `Account`;
	openAccount();
}

start();




