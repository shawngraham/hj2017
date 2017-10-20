# Old Bones Daily

_by Shawn Graham and Kate Ellenberger_

+ Visit online at [http://shawngraham.github.io/hj2017](http://shawngraham.github.io/hj2017)
+ Make your browser full-screen for best effect
+ Fully responsive so can be read equally well on mobile
+ Reload the page for the latest headlines and stories and photos

## Paradata

The paradata for the project is printed as the fifth column on the newspaper's front page.

> This 'newspaper' that you are looking at pays hommage to that older newspaper culture of reprinting, while at the same time commenting, on modern 'news media' by procedurally generating texts from the 'bones' of generative grammar. Each time this page is reloaded, the news is generated anew from a Tracery grammar. This grammar is derived from the study of 19th century newspapers in Western Quebec (The Equity) and northern New York State. It selects passages from these papers where the word 'bone' is present or implied, and recombines them in sometimes surprising or revealing ways. There are stories of injury, and columns with helpful advice. Sometimes a humorous anecdote is recounted; sometimes popular accounts of the latest academic research.

> And sometimes, out and out fraud.

> Some of the passages are presented verbatim, using the language and reflecting the mores of the age, with no generative grammar intervention. The passages were collected in the first place by ingesting OCR'd papers into AntConc, and generating a concordance and keywords-in-context file.

> [Tracery](http://tracery.io) was designed and built by Kate Compton @galaxykate. This newspaper layout was designed and shared by user _silkine_ on [codepen.io](https://codepen.io/silkine/pen/jldif). Images are drawn from the British Library's Flickr stream, where they have been tagged with the word 'bone' - thus, another algorithmic expression of the bones underlying the web.

## Source Files

Please see the source repository at [http://github.com/shawngraham/hj2017](http://github.com/shawngraham/hj2017)

To replicate this newspaper for your own amusement, consult the file, `newsgrammar.js` and insert new values in the keys. To alter the layout and placement of these elements on the newspaper, create new `var` and associated `div` in the `js\app.js` file. Place the `div` in the appropriate location in the main `index.html` file. Extra css or html for a particular chunk of text should be wrapped inside the values in the `newsgrammar.js` file. For a tutorial on how Tracery functions, see [Shawn Graham's tutorial at _The Programming Historian_](http://programminghistorian.github.io/ph-submissions/lessons/intro-to-twitterbots). Tracery can power webpages, games, and twitterbots. What would be the effect of 'Old Bones Daily' if it were translated into the new news medium of Twitter?

### Sources for Newspaper articles:

The Shawville Equity (consult [this digital finding aid project](http://jeffblackadar.ca/uncategorized/more-data-better-searching-incremental-progress/) by Carleton undergraduate student Jeff Blackadar)

Syracuse NY Daily Journal via 'Old Fulton NY Post Cards' collection of digitized newspapers at http://www.fultonhistory.com/

## Bio

Shawn Graham is a Roman archaeologist cum digital humanist in the Department of History at Carleton University, who hails from the wilds of the Ottawa Valley and still reads the Shawville Equity every week.

Kate Ellenberger is a digital public archaeologist with a background in public outreach, museum work, mapping and databases currently working towards the PhD in anthropological archaeology at Binghamton University. She enjoys far too many cat memes on the interwebs. 
