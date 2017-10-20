/**
 * @author Shawn
 */

var grammar = {

	"occupation": ["Baker","Farmer","Soldier","Reverend","Teacher","Lumberjack","Nurse","Mayor","Council","Smith"],

	"number": ["two","three","four","five","six","seven"],
	"weather": ["hail","thunder","storms","snow","rain","mist","fog","sunshine","ice"],
	
	"firstName": ["Timothy","Susan","Charles","Agnes","Arabella","Mabel","Elizabeth","Alfred","Charles","Francois","Jean","Marie","Aloysius","Micheline","Michel"],
	"lastName": ["Smith","Stewart","McGill","Green","Brown","Cooper","Graham","Nadeau","Thibodeau","Fleury","Potvin","Argue","Heffernen"],
	"town": ["Bristol","Shawville","Quyon","Caldwell","Portage","Chapeau","Weirstead","Campbell's Bay","Fort Coulonge","Fort William","Sheenboro","Chichester","The Swisha"],

	"preamble": ["#firstName# #lastName#, of #town#, was surprised when", "#firstName# #lastName#, denizen of #town#, had just gone to do the chores when"],
	"accident": ["a pig escaped from its pen, knocking","a beam broke, hitting", "a log gave way, smashing","a cow kicked hard, banging", "a bale fell suddenly, crushing"],
	"injury":["a leg","an arm","the hips","the ribs","a rib", "the skull"],
	"aftermath":["died","lived in excruciating pain for a few days, then died","wasted away"],
	"disease":["cholera","smallpox","chickenpox","cowpox","miasma","yellow feaver","typhus"],
	
	"origin2": ["News reaches us that #preamble# #accident# the poor individual, breaking #injury#. This of course hurt the poor soul grievously, who after, #aftermath#", "Our correspondent hears that #preamble# #accident# the poor individual, breaking #injury#. While the injuries did not appear at first serious the poor soul #aftermath#","#firstName# #lastName# reports an enjoyable evening was had by all but for when #accident# #firstName# #lastName#. Friends and family wish a speedy recovery.","We hear that Mr. #lastName# is engaged to Miss #lastName# of #town#","Government officials were in #town#, warning of the dangers of #disease#."],

	"reactionURL": [
		"https://c2.staticflickr.com/4/3707/11006936494_d97d44763e_m.jpg",
		"https://c2.staticflickr.com/8/7312/11128508335_38191f0d3d_m.jpg",
		"https://c2.staticflickr.com/8/7354/11131233955_fdb24dc3ac_m.jpg",
		"https://c2.staticflickr.com/4/3755/11114592606_dbd5f760fb_m.jpg",
		"https://c2.staticflickr.com/6/5523/11107579966_e232f3a18f_m.jpg",
		"https://c2.staticflickr.com/6/5479/11232638046_e401b00832_b.jpg",
		"https://c1.staticflickr.com/3/2872/11141536145_54e78f8e53_m.jpg",
		"https://c2.staticflickr.com/4/3790/11250093255_1e93e2f4ac_m.jpg",
		"https://c2.staticflickr.com/4/3780/11249961524_e3dc4c59a0_m.jpg",
		"https://c2.staticflickr.com/6/5490/11301482866_3dbdaa6cbd_m.jpg",
		"https://c2.staticflickr.com/6/5492/11299082635_21af8ae1a2_m.jpg",
		"https://c2.staticflickr.com/4/3831/11169692923_eee96ef4a1_m.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/f/fd/Cardiff_giant_exhumed_1869.jpg"
	],
	"newsPhoto": [
		"<br><img class='media' src='#reactionURL#' width='220'><br>"
	],
	"insertpictures": [
		"#newsPhoto#<figcaption class='figcaption'>The Principle Actors</figcaption>","#newsPhoto#<figcaption class='figcaption'>#lastName# says 'stunned!'</figcaption>","#newsPhoto#<figcaption class='figcaption'>We have yet to hear from the #occupation#.</figcaption>","","",""
	],
	"manName": ["John","Bill","James","William","Thomas","Mark","Matthew","Luke","Obadiah","Augustus","Marcus","Jeremiah"],
	"oldstories": ["Mr. #lastName# of #town# was out hunting recently with his brother. At a certain point they seperated to take different roads which would eventually bring them together again. #manName# however changed his mind and taking another road fell into his brother's backs. He mounted a log summit - what icy to discover the whereabouts of bis brother and a sudden noise behind him caused him to turn sharply. He slipped on the log his hand lowing the gun which was UiseluugeU by a projection of the log; and the bullet went through his left twice entering the under side of the arm near the wrist and coming out finally underneath just below the elbow. A number of small bones were broken;  Mr #lastName# was under surgical treatment in #town# for a day or so. He had a narrow escape from more  serious injuries.","Girls should be taught something of what they owe to posterity as well as to themselves, for in their hands lie the health and happiness of the entire nation. They are too often reared in total ignorance of the commonest physiological facts, since some mothers suppose that a fine pure young mind would be depraved by the slightest study of the simple rules of health. Hundreds of young girls injure themselves irreparably through this false doctrine, and never know it till they are wives and mothers. Late hours, cramped positions during study, overexertion, and, worst of all, acceptance of fashions which displace the bones and internal organs till the mischief has become irreparable even by the surgeon, are some, says Mr. #lastName#, of the vicious habits which are sapping the comfort of this generation and the mental and physical well-being of the next.","About half-past two on Saturday morning last while a freight train from the east was slowly pulling into tho #town# yard #firstName# #lastName# one of the brakesmen aged about twenty one was accidentally killed having fallen between two of the cars the body being dragged three or four car lengths along the track. Death must have resulted quickly as the neck was broken. The arm mid shoulder bones were also broken and injuries on other parts of the body.","The strange transformation of this body is not the only instance recorded. The small number of dead removed has not afforded an opportunity to learn how common an occurrence this may be but learned gentlemen tell me that when Gabriel blows hie bugle or the disinterring of bodies becomes necessary in the Black Hills country many bodies will be found turned to stone. The other Instance related is that of #firstName# #lastName# murdered in #town# by #firstName# #lastName# ten years ago. The body was buried on the mountain aide and the building of residences compelled the unearthing of his bones. What was the surprise of his friends when they discovered that the famous frontiersman was a solid stone petrified. This revelation may appear strange to Eastern readers but here it is an open secret.","We were very much surprised last week on perusing the columns of the #town# Standard to observe that that journal boldly accuses us of having stolen body and bones from its columns a communication from its correspondent  Shanty Boy . This is rather a sweeping accusation to make and if we resented it by administering the lash somewhat severely it would be nothing more than our contemporary richly deserves. Nevertheless we are not disposed to deal harshly with it by using the weapon of defence which its inexperience and exuberant  freshness has placed within our reach. Old Bones doesn't have to steal correspondence from the Standard or any other publication.","While pressing hay at Mr. E. #lastName#'s on Wednesday last, Mr. Wm. #lastName# had one of his feet badly jammed in the machine. Although severely bruised, Dr. #lastName# found no bones broken upon examination.<Br>The hay press is responsible for more accidents than any other machine used in connection with agricultural pursuits. It seems very strange that no better and safer way of feeding the hay to the machine can be discovered than by cramming it in with the foot.","The #town# Giant continues to be the all-absorbing topic hearabouts. It has awakened a strong interest all over the country, and men of intelligence, of the professions, and of note in the sciences, come hundreds of miles to see it. Among the visitors yesterday, come for that purpose only, were representatives from Michigan, Massachusetts, Illinois, Pennsylvania, and #town#. We should like to quote from the press of other localities matters of interest regarding the Giant, but cannot this morning for lack of space.","A DEPOSITION concerning the GIANT sworn before the Notary Public #firstName# #lastName# - #town# - #firstName# #lastName# being sworn, says he resides near #town# and a short distance from the place where the Stone Giant was discovered; that on the morning of the day of the discovery deponent was assisting William C. #lastName# in loading and drawing stone for a well which was being dug; that after several loads of stone had been delivered, the persons engaged in excavating said well struck a large stone, which, upon further examination revealed the Giant; that deponent is 45 years of age and upwards, and verily believes that <i> the soil where said Giant was found had never been distrubed prior thereto</i> exepct in the ordinary use of the same for farming purposes, and further says not."],

	"origin": [
		"#origin2#","#oldstories#"],

	"headline": ["GIANT bones discovered near #town#","#firstName# #lastName# in #scandal# scandal!","'Fire the #occupation#!' says #lastName#","#machine# kills #lastName#","Man Bites Dog","#lastName# and #lastName# to Wed","New Gov't Regs Coming says #occupation#","How to #task#","The #lastName# Murder", "#town# Troubles","A #occupation#'s view of #occupation.s#","Love in #town#","Latest #product# Prices","Social Notes from #town#"],
	"product": ["Bonemeal","Salt","Seed","Machinery","Wheat","Barley","Grain","Corn","Pig","Cattle","Dairy","Harness","Horticultural","White Goods","Domestic"],
	"task": ["Modernize Dresses", "Treat Sunstroke", "Waterproof Linen", "Feed Pigs"],

	"scandal": ["Elections","Gov't","Bones","#product#"],
	"machine": ["Thresher","Combine","Harvester","Logdrive","Kiln","Railcar","Woman","Man","#occupation#"],
	"emotion": ["Flummoxed","Baffled","Concerned","Puzzled","Troubled"],
	"bylines": ["<span class='headline hl4'> by #firstName# #lastName# </span>","<span class='headline hl6'>#occupation# is #emotion#</span>","<span class='headline hl2'>#machine# seen as Culpable</span>","<span class='headline hl2'>#headline#</span>"]
}
