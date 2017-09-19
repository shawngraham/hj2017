/**
 * @author Shawn
 */

var grammar = {

	"name": [
		"Bertram",
		"Arabella",
		"Cecil"
	],
	"occupation": [
		"baker",
		"wizard",
		"soldier"
	],

	"firstName": ["Tim","Susan","Charles","Agnes"],
	"lastName": ["Smith","Black","Green","Brown"],
	"town": ["Bristol","Shawville","Quyon","Caldwell","Portage","Chapeau"],

	"preamble": ["#firstName# #lastName#, of #town#, was walking in the forest when", "#firstName# #lastName#, denizen of #town#, had just gone to do the chores when"],
	"accident": ["a pig escaped from its pen, knocking","a beam broke, hitting"],
	"injury":["a leg","an arm","hips","ribs","rib"],
	"aftermath":["suffering for days, who then died","living in excruciating pain, who then died"],

	"origin2": ["News reaches us that #preamble# #accident# the poor individual, breaking #injury#, hurting the poor soul, #aftermath#", "Our correspondent hears that #preamble# #accident# the poor individual, breaking #injury#, hurting the poor soul, #aftermath#"],

	"kittenPhotoURL": [
		"http://media.tumblr.com/tumblr_laxjtlso9K1qzjix8.gif"
	],
	"reactionURL": [
		"http://tinyurl.com/nf8t58q",
		"http://tinyurl.com/p7lhd4r",
		"http://tinyurl.com/p8jzq4g",
		"http://tinyurl.com/lt42vrx",
		"http://tinyurl.com/3ghat59",
		"http://tinyurl.com/mx4yqk9",
		"http://tinyurl.com/lssxt9v",
		"http://tinyurl.com/nf6oy85",
		"https://i.giphy.com/media/h5NLPVn3rg0Rq/giphy.webp",
		"/imgs/PW7MoTD2d9pJK.gif"
	],
	"newsPhoto": [
		"<br><img class='media' src='#reactionURL#' width='220'><br>"
	],
	"insertpictures": [
		"#newsPhoto#<figcaption class='figcaption'>How computer scientists see IF authors</figcaption>","#newsPhoto#<figcaption class='figcaption'>#lastName# says 'stunned!'</figcaption>","#newsPhoto#<figcaption class='figcaption'>How the rest of the world sees both of them</figcaption>","","",""
	],
	"oldstories": ["Mr. John Bums of Admaston was out hunting recently on the Opeongo with his brother. At a certain point they seperated to take different roads which would eventually bring them together again. John however changed his mind and taking another road fell into his brother's backs. He mounted a log summit - what icy to discover the whereabouts of bis brother and a sudden noise behind him caused him to turn sharply. He slipped on the log his hand lowing the gun which was UiseluugeU by a projection of the log; and the bullet went through his left twice entering the under side of the arm near the wrist and coming out finally underneath just below the elbow. A number of small bones were broken;  Mr Burns was under surgical treatment in Renfrew for a day or so. He had a narrow escape from more  serious injuries."],

	"origin": [
		"#origin2#","#oldstories#"],

	"headline": ["#firstName# #lastName# in the #occupation# scandal!","'Kill the #occupation#!' says #name#"],
}
