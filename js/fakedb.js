// declara um conjunto fake de dados para contatos
alert("bem vindo");

var dbfake = {
    "data": [
        {
"id":	1,
"nome":	"Game of Thrones",
"url":	"https://www.imdb.com/title/tt0944947/",
"imdb_rating":	"9,5",
"lancamento":	2011,
"genero":	"Action, Adventure, Drama, Fantasy, Romance",
"atores": "Emilia Clarke, Peter Dinklage, Kit Harington, Lena Headey",
"imagem": "https://m.media-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},	
{	
"id":	2,
"nome":	"Breaking Bad",
"url":	"https://www.imdb.com/title/tt0903747/",
"imdb_rating":	"9,5",
"lancamento":	2008,
"genero":	"Crime, Drama, Thriller",
"atores":	"Bryan Cranston, Aaron Paul, Anna Gunn, Betsy Brandt",
"imagem": ""
},	
{	
"id":	3,
"nome":	"Sherlock",
"url":	"https://www.imdb.com/title/tt1475582/",
"imdb_rating":	"9,2",
"lancamento":	2010,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":	"Benedict Cumberbatch, Martin Freeman, Una Stubbs, Rupert Graves",
"imagem": ""
},	
{	
"id":	4,
"nome":	"Rick and Morty",
"url":	"https://www.imdb.com/title/tt2861424/",
"imdb_rating":	"9,3",
"lancamento":	2013,
"genero":	"Animation, Adventure, Comedy, Sci-Fi",
"atores":	"Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
"imagem": ""
},	
{	
"id":	5,
"nome":	"The Wire",
"url":	"https://www.imdb.com/title/tt0306414/",
"imdb_rating":	"9,3",
"lancamento":	2002,
"genero":	"Crime, Drama, Thriller",
"atores":	"Dominic West, Lance Reddick, Sonja Sohn, Wendell Pierce",
"imagem": ""
},	
{	
"id":	6,
"nome":	"Friends",
"url":	"https://www.imdb.com/title/tt0108778/",
"imdb_rating":	"8,9",
"lancamento":	1994,
"genero":	"Comedy, Romance",
"atores":	"Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc",
"imagem": ""
},	
{	
"id":	7,
"nome":	"True Detective",
"url":	"https://www.imdb.com/title/tt2356777/",
"imdb_rating":	"9",
"lancamento":	2014,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":	"Vince Vaughn, Colin Farrell, Rachel McAdams, Taylor Kitsch",
"imagem": ""
},	
{	
"id":	8,
"nome":	"The Sopranos",
"url":	"https://www.imdb.com/title/tt0141842/",
"imdb_rating":	"9,2",
"lancamento":	1999,
"genero":	"Crime, Drama",
"atores":	"James Gandolfini, Lorraine Bracco, Edie Falco, Michael Imperioli",
"imagem": ""
},	
{	
"id":	9,
"nome":	"Stranger Things",
"url":	"https://www.imdb.com/title/tt4574334/",
"imdb_rating":	"8,9",
"lancamento":	2016,
"genero":	"Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller",
"atores":	"Millie Bobby Brown, Finn Wolfhard, Winona Ryder, David Harbour",
"imagem": ""
},	
{	
"id":	10,
"nome":	"House of Cards",
"url":	"https://www.imdb.com/title/tt1856010/",
"imdb_rating":	"8,9",
"lancamento":	2013,
"genero":	"Drama",
"atores":	"Kevin Spacey, Michel Gill, Robin Wright, Kate Mara",
"imagem": ""
},	
{	
"id":	11,
"nome":	"Avatar: The Last Airbender",
"url":	"https://www.imdb.com/title/tt0417299/",
"imdb_rating":	"9,2",
"lancamento":	2003,
"genero":	"Animation, Action, Adventure, Family, Fantasy, Mystery",
"atores":	"Dee Bradley Baker, Zach Tyler, Mae Whitman, Jack De Sena",
"imagem": ""
},	
{	
"id":	12,
"nome":	"Fargo",
"url":	"https://www.imdb.com/title/tt2802850/",
"imdb_rating":	"9",
"lancamento":	2014,
"genero":	"Crime, Drama, Thriller",
"atores":	"Billy Bob Thornton, Martin Freeman, Allison Tolman, Colin Hanks",
"imagem": ""
},	
{	
"id":	13,
"nome":	"Dexter",
"url":	"https://www.imdb.com/title/tt0773262/",
"imdb_rating":	"8,7",
"lancamento":	2006,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":	"Michael C. Hall, Jennifer Carpenter, David Zayas, James Remar",
"imagem": ""
},	
{	
"id":	14,
"nome":	"Westworld",
"url":	"https://www.imdb.com/title/tt0475784/",
"imdb_rating":	"8,9",
"lancamento":	2016,
"genero":	"Drama, Mystery, Sci-Fi, Western",
"atores":	"Evan Rachel Wood, Jeffrey Wright, Ed Harris, Thandie Newton",
"imagem": ""
},	
{	
"id":	15,
"nome":	"Firefly",
"url":	"https://www.imdb.com/title/tt0303461/",
"imdb_rating":	"9",
"lancamento":	2002,
"genero":	"Adventure, Drama, Sci-Fi",
"atores":	"Nathan Fillion, Gina Torres, Alan Tudyk, Morena Baccarin",
"imagem": ""
},	
{	
"id":	16,
"nome":	"House M.D.",
"url":	"https://www.imdb.com/title/tt0412142/",
"imdb_rating":	"8,8",
"lancamento":	2004,
"genero":	"Drama, Mystery",
"atores":	"Hugh Laurie, Omar Epps, Robert Sean Leonard, Jesse Spencer",
"imagem": ""
},	
{	
"id":	17,
"nome":	"Black Mirror",
"url":	"https://www.imdb.com/title/tt2085059/",
"imdb_rating":	"8,9",
"lancamento":	2011,
"genero":	"Drama, Sci-Fi, Thriller",
"atores":	"Daniel Lapaine, Hannah John-Kamen, Michaela Coel, Beatrice Robertson-Jones",
"imagem": ""
},	
{	
"id":	18,
"nome":	"Arrested Development",
"url":	"https://www.imdb.com/title/tt0367279/",
"imdb_rating":	"8,9",
"lancamento":	2003,
"genero":	"Comedy",
"atores":	"Jason Bateman, Michael Cera, Portia de Rossi, Will Arnett",
"imagem": ""
},	
{	
"id":	19,
"nome":	"Death Note: Desu nôto",
"url":	"https://www.imdb.com/title/tt0877057/",
"imdb_rating":	"9",
"lancamento":	2006,
"genero":	"Animation, Crime, Drama, Fantasy, Mystery, Thriller",
"atores":	"Mamoru Miyano, Brad Swaile, Vincent Tong, Ryô Naitô",
"imagem": ""
},	
{	
"id":	20,
"nome":	"Seinfeld",
"url":	"https://www.imdb.com/title/tt0098904/",
"imdb_rating":	"8,9",
"lancamento":	1989,
"genero":	"Comedy",
"atores":	"Jerry Seinfeld, Julia Louis-Dreyfus, Michael Richards, Jason Alexander",
"imagem": ""
},	
{	
"id":	21,
"nome":	"The Office",
"url":	"https://www.imdb.com/title/tt0386676/",
"imdb_rating":	"8,8",
"lancamento":	2005,
"genero":	"Comedy",
"atores":	"Steve Carell, Jenna Fischer, John Krasinski, Rainn Wilson",
"imagem": ""
},	
{	
"id":	22,
"nome":	"Narcos",
"url":	"https://www.imdb.com/title/tt2707408/",
"imdb_rating":	"8,8",
"lancamento":	2015,
"genero":	"Biography, Crime, Drama, Thriller",
"atores":	"Pedro Pascal, Wagner Moura, Boyd Holbrook, Alberto Ammann",
"imagem": ""
},	
{	
"id":	23,
"nome":	"The Simpsons",
"url":	"https://www.imdb.com/title/tt0096697/",
"imdb_rating":	"8,7",
"lancamento":	1989,
"genero":	"Animation, Comedy",
"atores":	"Dan Castellaneta, Nancy Cartwright, Harry Shearer, Julie Kavner",
"imagem": ""
},	
{	
"id":	24,
"nome":	"Leyla ile Mecnun",
"url":	"https://www.imdb.com/title/tt1831164/",
"imdb_rating":	"9,2",
"lancamento":	2011,
"genero":	"Adventure, Comedy, Drama, Fantasy, Mystery, Romance",
"atores":	"Ali Atay, Cengiz Bozkurt, Serkan Keskin, Osman Sonant",
"imagem": ""
},	
{	
"id":	25,
"nome":	"Daredevil",
"url":	"https://www.imdb.com/title/tt3322312/",
"imdb_rating":	"8,7",
"lancamento":	2015,
"genero":	"Action, Crime, Drama, Fantasy, Sci-Fi, Thriller",
"atores":	"Charlie Cox, Vincent D'Onofrio, Deborah Ann Woll, Elden Henson",
"imagem": ""
},	
{	
"id":	26,
"nome":	"The Walking Dead",
"url":	"https://www.imdb.com/title/tt1520211/",
"imdb_rating":	"8,4",
"lancamento":	2010,
"genero":	"Drama, Horror, Sci-Fi, Thriller",
"atores":	"Andrew Lincoln, Norman Reedus, Melissa McBride, Lauren Cohan",
"imagem": ""
},	
{	
"id":	28,
"nome":	"South Park",
"url":	"https://www.imdb.com/title/tt0121955/",
"imdb_rating":	"8,7",
"lancamento":	1997,
"genero":	"Animation, Comedy",
"atores":	"Thumindu Dodantenne, Kalana Gunasekara, Andrew Pulle, Yureni Noshika",
"imagem": ""
},	
{	
"id":	29,
"nome":	"Koombiyo",
"url":	"https://www.imdb.com/title/tt7450814/",
"imdb_rating":	"9,9",
"lancamento":	2017,
"genero":	"Crime, Drama, Thriller",
"atores":	"Gabriel Macht, Patrick J. Adams, Meghan Markle, Sarah Rafferty",
"imagem": ""
},	
{	
"id":	30,
"nome":	"Suits",
"url":	"https://www.imdb.com/title/tt1632701/",
"imdb_rating":	"8,6",
"lancamento":	2011,
"genero":	"Comedy, Drama",
"atores":	"Bob Odenkirk, Rhea Seehorn, Jonathan Banks, Patrick Fabian",
"imagem": ""
},	
{	
"id":	31,
"nome":	"Better Call Saul",
"url":	"https://www.imdb.com/title/tt3032476/",
"imdb_rating":	"8,7",
"lancamento":	2015,
"genero":	"Crime, Drama",
"atores":	"Gustaf Skarsgård, Katheryn Winnick, Alexander Ludwig, Travis Fimmel",
"imagem": ""
},	
{	
"id":	32,
"nome":	"Vikings",
"url":	"https://www.imdb.com/title/tt2306299/",
"imdb_rating":	"8,6",
"lancamento":	2013,
"genero":	"Action, Adventure, Drama, History, Romance, War",
"atores":	"Manjot Singh, Apoorva Arora, Keshav Sadhna, Hira Ashar",
"imagem": ""
},	
{	
"id":	33,
"nome":	"College Romance",
"url":	"https://www.imdb.com/title/tt8809646/",
"imdb_rating":	"9,8",
"lancamento":	2018,
"genero":	"Comedy, Drama, Romance",
"atores":	"Charlie Day, Glenn Howerton, Rob McElhenney, Kaitlin Olson",
"imagem": ""
},	
{	
"id":	34,
"nome":	"It's Always Sunny in Philadelphia",
"url":	"https://www.imdb.com/title/tt0472954/",
"imdb_rating":	"8,8",
"lancamento":	2005,
"genero":	"Comedy",
"atores":	"Cillian Murphy, Paul Anderson, Helen McCrory, Sophie Rundle",
"imagem": ""
},	
{	
"id":	35,
"nome":	"Peaky Blinders",
"url":	"https://www.imdb.com/title/tt2442560/",
"imdb_rating":	"8,8",
"lancamento":	2013,
"genero":	"Crime, Drama",
"atores":	"Rami Malek, Christian Slater, Portia Doubleday, Carly Chaikin",
"imagem": ""
},	
{	
"id":	36,
"nome":	"Mr. Robot",
"url":	"https://www.imdb.com/title/tt4158110/",
"imdb_rating":	"8,6",
"lancamento":	2015,
"genero":	"Crime, Drama, Thriller",
"atores":	"Kyle MacLachlan, Michael Ontkean, Mädchen Amick, Dana Ashbrook",
"imagem": ""
},	
{	
"id":	37,
"nome":	"Twin Peaks",
"url":	"https://www.imdb.com/title/tt0098936/",
"imdb_rating":	"8,8",
"lancamento":	1990,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":	"Jared Padalecki, Jensen Ackles, Jim Beaver, Misha Collins",
"imagem": ""
},	
{	
"id":	38,
"nome":	"Supernatural",
"url":	"https://www.imdb.com/title/tt0460681/",
"imdb_rating":	"8,5",
"lancamento":	2005,
"genero":	"Drama, Fantasy, Horror, Mystery, Thriller",
"atores":	"Jorge Garcia, Josh Holloway, Yunjin Kim, Evangeline Lilly",
"imagem": ""
},	
{	
"id":	39,
"nome":	"Lost",
"url":	"https://www.imdb.com/title/tt0411008/",
"imdb_rating":	"8,4",
"lancamento":	2004,
"genero":	"Adventure, Drama, Fantasy, Mystery, Sci-Fi, Thriller",
"atores":	"Kevin McKidd, Ray Stevenson, Polly Walker, Kerry Condon",
"imagem": ""
},	
{	
"id":	40,
"nome":	"Rome",
"url":	"https://www.imdb.com/title/tt0384766/",
"imdb_rating":	"8,8",
"lancamento":	2005,
"genero":	"Action, Drama, History, Romance, War",
"atores":	"David Duchovny, Gillian Anderson, Mitch Pileggi, William B. Davis",
"imagem": ""
},	
{	
"id":	41,
"nome":	"The X Files",
"url":	"https://www.imdb.com/title/tt0106179/",
"imdb_rating":	"8,7",
"lancamento":	1993,
"genero":	"Drama, Mystery, Sci-Fi, Thriller",
"atores":	"Iemasa Kayumi, Kent Williams, Muriel Hofmann, Lili Troncale",
"imagem": ""
},	
{	
"id":	42,
"nome":	"Hagane no renkinjutsushi",
"url":	"https://www.imdb.com/title/tt1355642/",
"imdb_rating":	"9",
"lancamento":	2009,
"genero":	"Animation, Action, Adventure, Comedy, Drama, Fantasy, Sci-Fi",
"atores":	"Jodie Whittaker, Peter Capaldi, Pearl Mackie, Matt Smith",
"imagem": ""
},	
{	
"id":	43,
"nome":	"Doctor Who",
"url":	"https://www.imdb.com/title/tt0436992/",
"imdb_rating":	"8,7",
"lancamento":	2005,
"genero":	"Adventure, Drama, Family, Mystery, Sci-Fi",
"atores":	"Dominic Purcell, Wentworth Miller, Amaury Nolasco, Robert Knepper",
"imagem": ""
},	
{	
"id":	44,
"nome":	"Prison Break",
"url":	"https://www.imdb.com/title/tt0455275/",
"imdb_rating":	"8,4",
"lancamento":	2005,
"genero":	"Action, Crime, Drama, Mystery, Thriller",
"atores":	"Ed O'Neill, Sofía Vergara, Julie Bowen, Ty Burrell",
"imagem": ""
},	
{	
"id":	45,
"nome":	"Modern Family",
"url":	"https://www.imdb.com/title/tt1442437/",
"imdb_rating":	"8,5",
"lancamento":	2009,
"genero":	"Comedy, Romance",
"atores":	"Charlie Hunnam, Katey Sagal, Mark Boone Junior, Kim Coates",
"imagem": ""
},	
{	
"id":	46,
"nome":	"Sons of Anarchy",
"url":	"https://www.imdb.com/title/tt1124373/",
"imdb_rating":	"8,6",
"lancamento":	2008,
"genero":	"Crime, Drama, Thriller",
"atores":	"Josh Radnor, Jason Segel, Cobie Smulders, Neil Patrick Harris",
"imagem": ""
},	
{	
"id":	47,
"nome":	"How I Met Your Mother",
"url":	"https://www.imdb.com/title/tt0460649/",
"imdb_rating":	"8,3",
"lancamento":	2005,
"genero":	"Comedy, Romance",
"atores":	"Emmy Rossum, William H. Macy, Ethan Cutkosky, Shanola Hampton"
},	
{	
"id":	48,
"nome":	"Shameless",
"url":	"https://www.imdb.com/title/tt1586680/",
"imdb_rating":	"8,7",
"lancamento":	2011,
"genero":	"Comedy, Drama",
"atores":	"Linda Cardellini, John Francis Daley, James Franco, Samm Levine",
"imagem": ""
},	
{	
"id":	49,
"nome":	"Freaks and Geeks",
"url":	"https://www.imdb.com/title/tt0193676/",
"imdb_rating":	"8,8",
"lancamento":	1999,
"genero":	"Comedy, Drama",
"atores":	"Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg",
"imagem": ""
},	
{	
"id":	50,
"nome":	"The Big Bang Theory",
"url":	"https://www.imdb.com/title/tt0898266/",
"imdb_rating":	"8,2",
"lancamento":	2007,
"genero":	"Comedy, Romance",
"atores":	"Edward James Olmos, Mary McDonnell, Jamie Bamber, James Callis",
"imagem": ""
},	
{	
"id":	51,
"nome":	"Battlestar Galactica",
"url":	"https://www.imdb.com/title/tt0407362/",
"imdb_rating":	"8,7",
"lancamento":	2004,
"genero":	"Action, Adventure, Drama, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	52,
"nome":	"Downton Abbey",
"url":	"https://www.imdb.com/title/tt1606375/",
"imdb_rating":	"8,7",
"lancamento":	2010,
"genero":	"Drama, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	53,
"nome":	"Flames",
"url":	"https://www.imdb.com/title/tt7927936/",
"imdb_rating":	"9,7",
"lancamento":	2018,
"genero":	"Comedy, Drama, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	54,
"nome":	"Shingeki no kyojin",
"url":	"https://www.imdb.com/title/tt2560140/",
"imdb_rating":	"8,8",
"lancamento":	2013,
"genero":	"Animation, Action, Adventure, Drama, Fantasy, Horror",
"atores":  "",
"imagem": ""
},	
{	
"id":	55,
"nome":	"Mad Men",
"url":	"https://www.imdb.com/title/tt0804503/",
"imdb_rating":	"8,6",
"lancamento":	2007,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	56,
"nome":	"The Haunting of Hill House",
"url":	"https://www.imdb.com/title/tt6763664/",
"imdb_rating":	"8,9",
"lancamento":	2018,
"genero":	"Drama, Horror, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	57,
"nome":	"Parks and Recreation",
"url":	"https://www.imdb.com/title/tt1266020/",
"imdb_rating":	"8,6",
"lancamento":	2009,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	58,
"nome":	"The Twilight Zone",
"url":	"https://www.imdb.com/title/tt0052520/",
"imdb_rating":	"9",
"lancamento":	1959,
"genero":	"Fantasy, Horror, Mystery, Sci-Fi, Thriller",
"atores": ""
},	
{	
"id":	59,
"nome":	"One Punch Man: Wanpanman",
"url":	"https://www.imdb.com/title/tt4508902/",
"imdb_rating":	"8,9",
"lancamento":	2015,
"genero":	"Animation, Action, Comedy, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	60,
"nome":	"Archer",
"url":	"https://www.imdb.com/title/tt1486217/",
"imdb_rating":	"8,7",
"lancamento":	2009,
"genero":	"Animation, Action, Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	61,
"nome":	"Kaubôi bibappu",
"url":	"https://www.imdb.com/title/tt0213338/",
"imdb_rating":	"8,9",
"lancamento":	1998,
"genero":	"Animation, Action, Adventure, Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	62,
"nome":	"Boardwalk Empire",
"url":	"https://www.imdb.com/title/tt0979432/",
"imdb_rating":	"8,6",
"lancamento":	2010,
"genero":	"Crime, Drama, History",
"atores":  "",
"imagem": ""
},	
{	
"id":	63,
"nome":	"Batman: The Animated Series",
"url":	"https://www.imdb.com/title/tt0103359/",
"imdb_rating":	"8,9",
"lancamento":	1992,
"genero":	"Animation, Action, Adventure, Family, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	64,
"nome":	"Spartacus: Blood and Sand",
"url":	"https://www.imdb.com/title/tt1442449/",
"imdb_rating":	"8,5",
"lancamento":	2010,
"genero":	"Action, Adventure, Biography, Drama, History, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	65,
"nome":	"Hannibal",
"url":	"https://www.imdb.com/title/tt2243973/",
"imdb_rating":	"8,5",
"lancamento":	2013,
"genero":	"Crime, Drama, Horror, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	66,
"nome":	"Yeh Meri Family",
"url":	"https://www.imdb.com/title/tt8595766/",
"imdb_rating":	"9,6",
"lancamento":	2018,
"genero":	"Comedy, Drama, Family, Musical, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	67,
"nome":	"Futurama",
"url":	"https://www.imdb.com/title/tt0149460/",
"imdb_rating":	"8,5",
"lancamento":	1999,
"genero":	"Animation, Comedy, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	68,
"nome":	"Six Feet Under",
"url":	"https://www.imdb.com/title/tt0248654/",
"imdb_rating":	"8,7",
"lancamento":	2001,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	69,
"nome":	"Community",
"url":	"https://www.imdb.com/title/tt1439629/",
"imdb_rating":	"8,5",
"lancamento":	2009,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	70,
"nome":	"Dragon Ball Z",
"url":	"https://www.imdb.com/title/tt0214341/",
"imdb_rating":	"8,7",
"lancamento":	1996,
"genero":	"Animation, Action, Adventure, Fantasy, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	71,
"nome":	"Scrubs",
"url":	"https://www.imdb.com/title/tt0285403/",
"imdb_rating":	"8,4",
"lancamento":	2001,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	72,
"nome":	"Fawlty Towers",
"url":	"https://www.imdb.com/title/tt0072500/",
"imdb_rating":	"8,8",
"lancamento":	1975,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	73,
"nome":	"Sacred Games",
"url":	"https://www.imdb.com/title/tt6077448/",
"imdb_rating":	"9",
"lancamento":	2018,
"genero":	"Action, Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	74,
"nome":	"Fringe",
"url":	"https://www.imdb.com/title/tt1119644/",
"imdb_rating":	"8,4",
"lancamento":	2008,
"genero":	"Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	75,
"nome":	"Homeland",
"url":	"https://www.imdb.com/title/tt1796960/",
"imdb_rating":	"8,3",
"lancamento":	2011,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	76,
"nome":	"The Punisher",
"url":	"https://www.imdb.com/title/tt5675620/",
"imdb_rating":	"8,6",
"lancamento":	2017,
"genero":	"Action, Adventure, Crime, Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	77,
"nome":	"Entourage",
"url":	"https://www.imdb.com/title/tt0387199/",
"imdb_rating":	"8,5",
"lancamento":	2004,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	78,
"nome":	"This Is Us",
"url":	"https://www.imdb.com/title/tt5555260/",
"imdb_rating":	"8,8",
"lancamento":	2016,
"genero":	"Comedy, Drama, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	79,
"nome":	"Curb Your Enthusiasm",
"url":	"https://www.imdb.com/title/tt0264235/",
"imdb_rating":	"8,7",
"lancamento":	2000,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	80,
"nome":	"Oz",
"url":	"https://www.imdb.com/title/tt0118421/",
"imdb_rating":	"8,7",
"lancamento":	1997,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	81,
"nome":	"Deadwood",
"url":	"https://www.imdb.com/title/tt0348914/",
"imdb_rating":	"8,7",
"lancamento":	2004,
"genero":	"Crime, Drama, History, Western",
"atores":  "",
"imagem": ""
},	
{	
"id":	82,
"nome":	"Mindhunter",
"url":	"https://www.imdb.com/title/tt5290382/",
"imdb_rating":	"8,6",
"lancamento":	2017,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	83,
"nome":	"Gravity Falls",
"url":	"https://www.imdb.com/title/tt1865718/",
"imdb_rating":	"8,9",
"lancamento":	2012,
"genero":	"Animation, Adventure, Comedy, Family, Fantasy, Mystery, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	84,
"nome":	"La casa de papel",
"url":	"https://www.imdb.com/title/tt6468322/",
"imdb_rating":	"8,6",
"lancamento":	2017,
"genero":	"Action, Crime, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	85,
"nome":	"Silicon Valley",
"url":	"https://www.imdb.com/title/tt2575988/",
"imdb_rating":	"8,6",
"lancamento":	2014,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	86,
"nome":	"The Handmaid's Tale",
"url":	"https://www.imdb.com/title/tt5834204/",
"imdb_rating":	"8,6",
"lancamento":	2017,
"genero":	"Drama, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	87,
"nome":	"Monty Python's Flying Circus",
"url":	"https://www.imdb.com/title/tt0063929/",
"imdb_rating":	"8,8",
"lancamento":	1969,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	88,
"nome":	"The Crown",
"url":	"https://www.imdb.com/title/tt4786824/",
"imdb_rating":	"8,7",
"lancamento":	2016,
"genero":	"Drama, History",
"atores":  "",
"imagem": ""
},	
{	
"id":	89,
"nome":	"The Newsroom",
"url":	"https://www.imdb.com/title/tt1870479/",
"imdb_rating":	"8,6",
"lancamento":	2012,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	90,
"nome":	"24",
"url":	"https://www.imdb.com/title/tt0285331/",
"imdb_rating":	"8,4",
"lancamento":	2001,
"genero":	"Action, Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	91,
"nome":	"Big Little Lies",
"url":	"https://www.imdb.com/title/tt3920596/",
"imdb_rating":	"8,6",
"lancamento":	2017,
"genero":	"Crime, Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	92,
"nome":	"Family Guy",
"url":	"https://www.imdb.com/title/tt0182576/",
"imdb_rating":	"8,2",
"lancamento":	1998,
"genero":	"Animation, Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	93,
"nome":	"Person of Interest",
"url":	"https://www.imdb.com/title/tt1839578/",
"imdb_rating":	"8,4",
"lancamento":	2011,
"genero":	"Action, Crime, Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	94,
"nome":	"The IT Crowd",
"url":	"https://www.imdb.com/title/tt0487831/",
"imdb_rating":	"8,5",
"lancamento":	2006,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	95,
"nome":	"Dark",
"url":	"https://www.imdb.com/title/tt5753856/",
"imdb_rating":	"8,6",
"lancamento":	2017,
"genero":	"Crime, Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	96,
"nome":	"The Shield",
"url":	"https://www.imdb.com/title/tt0286486/",
"imdb_rating":	"8,7",
"lancamento":	2002,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	97,
"nome":	"Star Trek: The Next Generation",
"url":	"https://www.imdb.com/title/tt0092455/",
"imdb_rating":	"8,6",
"lancamento":	1987,
"genero":	"Action, Adventure, Mystery, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	98,
"nome":	"Only Fools and Horses....",
"url":	"https://www.imdb.com/title/tt0081912/",
"imdb_rating":	"8,9",
"lancamento":	1981,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	99,
"nome":	"Justified",
"url":	"https://www.imdb.com/title/tt1489428/",
"imdb_rating":	"8,6",
"lancamento":	2010,
"genero":	"Action, Crime, Drama, Romance, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	100,
"nome":	"Luther",
"url":	"https://www.imdb.com/title/tt1474684/",
"imdb_rating":	"8,5",
"lancamento":	2010,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	101,
"nome":	"Taboo",
"url":	"https://www.imdb.com/title/tt3647998/",
"imdb_rating":	"8,5",
"lancamento":	2017,
"genero":	"Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	102,
"nome":	"Dragon Ball Z: Doragon bôru zetto",
"url":	"https://www.imdb.com/title/tt0121220/",
"imdb_rating":	"8,7",
"lancamento":	1989,
"genero":	"Animation, Action, Adventure, Comedy, Drama, Fantasy, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	103,
"nome":	"Californication",
"url":	"https://www.imdb.com/title/tt0904208/",
"imdb_rating":	"8,3",
"lancamento":	2007,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	104,
"nome":	"Brooklyn Nine-Nine",
"url":	"https://www.imdb.com/title/tt2467372/",
"imdb_rating":	"8,4",
"lancamento":	2013,
"genero":	"Comedy, Crime",
"atores":  "",
"imagem": ""
},	
{	
"id":	105,
"nome":	"The West Wing",
"url":	"https://www.imdb.com/title/tt0200276/",
"imdb_rating":	"8,7",
"lancamento":	1999,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	106,
"nome":	"Louie",
"url":	"https://www.imdb.com/title/tt1492966/",
"imdb_rating":	"8,6",
"lancamento":	2010,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	107,
"nome":	"Sense8",
"url":	"https://www.imdb.com/title/tt2431438/",
"imdb_rating":	"8,4",
"lancamento":	2015,
"genero":	"Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	108,
"nome":	"O Mecanismo",
"url":	"https://www.imdb.com/title/tt6873658/",
"imdb_rating":	"8,9",
"lancamento":	2018,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	109,
"nome":	"Blackadder Goes Forth",
"url":	"https://www.imdb.com/title/tt0096548/",
"imdb_rating":	"8,8",
"lancamento":	1989,
"genero":	"Comedy, War",
"atores":  "",
"imagem": ""
},	
{	
"id":	110,
"nome":	"Mr. Bean",
"url":	"https://www.imdb.com/title/tt0096657/",
"imdb_rating":	"8,5",
"lancamento":	1990,
"genero":	"Comedy, Family",
"atores":  "",
"imagem": ""
},	
{	
"id":	111,
"nome":	"Friday Night Lights",
"url":	"https://www.imdb.com/title/tt0758745/",
"imdb_rating":	"8,7",
"lancamento":	2006,
"genero":	"Drama, Sport",
"atores":  "",
"imagem": ""
},	
{	
"id":	112,
"nome":	"The Office",
"url":	"https://www.imdb.com/title/tt0290978/",
"imdb_rating":	"8,5",
"lancamento":	2001,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	113,
"nome":	"Outlander",
"url":	"https://www.imdb.com/title/tt3006802/",
"imdb_rating":	"8,5",
"lancamento":	2014,
"genero":	"Drama, Fantasy, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	114,
"nome":	"The Legend of Korra",
"url":	"https://www.imdb.com/title/tt1695360/",
"imdb_rating":	"8,5",
"lancamento":	2012,
"genero":	"Animation, Action, Adventure, Drama, Family, Fantasy, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	115,
"nome":	"Adventure Time with Finn & Jake",
"url":	"https://www.imdb.com/title/tt1305826/",
"imdb_rating":	"8,6",
"lancamento":	2010,
"genero":	"Animation, Action, Adventure, Comedy, Drama, Fantasy, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	116,
"nome":	"Orange Is the New Black",
"url":	"https://www.imdb.com/title/tt2372162/",
"imdb_rating":	"8,1",
"lancamento":	2013,
"genero":	"Comedy, Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	117,
"nome":	"American Horror Story",
"url":	"https://www.imdb.com/title/tt1844624/",
"imdb_rating":	"8,1",
"lancamento":	2011,
"genero":	"Drama, Horror, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	118,
"nome":	"Bron/Broen",
"url":	"https://www.imdb.com/title/tt1733785/",
"imdb_rating":	"8,7",
"lancamento":	2011,
"genero":	"Crime, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	119,
"nome":	"One Piece: Wan pîsu",
"url":	"https://www.imdb.com/title/tt0388629/",
"imdb_rating":	"8,6",
"lancamento":	1999,
"genero":	"Animation, Action, Adventure, Comedy, Fantasy",
"atores":  "",
"imagem": ""
},	
{	
"id":	120,
"nome":	"Ozark",
"url":	"https://www.imdb.com/title/tt5071412/",
"imdb_rating":	"8,4",
"lancamento":	2017,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	121,
"nome":	"Pod prikritie",
"url":	"https://www.imdb.com/title/tt1909015/",
"imdb_rating":	"8,9",
"lancamento":	2011,
"genero":	"Action, Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	122,
"nome":	"Hagane no renkinjutsushi",
"url":	"https://www.imdb.com/title/tt0421357/",
"imdb_rating":	"8,6",
"lancamento":	2003,
"genero":	"Animation, Action, Adventure, Comedy, Drama, Fantasy, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	123,
"nome":	"Cobra Kai",
"url":	"https://www.imdb.com/title/tt7221388/",
"imdb_rating":	"8,9",
"lancamento":	2018,
"genero":	"Action, Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	124,
"nome":	"13 Reasons Why",
"url":	"https://www.imdb.com/title/tt1837492/",
"imdb_rating":	"8,1",
"lancamento":	2017,
"genero":	"Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	125,
"nome":	"White Collar",
"url":	"https://www.imdb.com/title/tt1358522/",
"imdb_rating":	"8,3",
"lancamento":	2009,
"genero":	"Comedy, Crime, Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	126,
"nome":	"Kôdo giasu: Hangyaku no rurûshu",
"url":	"https://www.imdb.com/title/tt0994314/",
"imdb_rating":	"8,7",
"lancamento":	2006,
"genero":	"Animation, Action, Adventure, Drama, Mystery, Sci-Fi, Thriller, War",
"atores":  "",
"imagem": ""
},	
{	
"id":	127,
"nome":	"BoJack Horseman",
"url":	"https://www.imdb.com/title/tt3398228/",
"imdb_rating":	"8,5",
"lancamento":	2014,
"genero":	"Animation, Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	128,
"nome":	"American Crime Story",
"url":	"https://www.imdb.com/title/tt2788432/",
"imdb_rating":	"8,5",
"lancamento":	2016,
"genero":	"Biography, Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	129,
"nome":	"The Originals",
"url":	"https://www.imdb.com/title/tt2632424/",
"imdb_rating":	"8,3",
"lancamento":	2013,
"genero":	"Drama, Fantasy, Horror, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	130,
"nome":	"Spaced",
"url":	"https://www.imdb.com/title/tt0187664/",
"imdb_rating":	"8,6",
"lancamento":	1999,
"genero":	"Action, Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	131,
"nome":	"Psych",
"url":	"https://www.imdb.com/title/tt0491738/",
"imdb_rating":	"8,4",
"lancamento":	2006,
"genero":	"Comedy, Crime, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	132,
"nome":	"Stargate SG-1",
"url":	"https://www.imdb.com/title/tt0118480/",
"imdb_rating":	"8,4",
"lancamento":	1997,
"genero":	"Action, Adventure, Drama, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	133,
"nome":	"Castle",
"url":	"https://www.imdb.com/title/tt1219024/",
"imdb_rating":	"8,2",
"lancamento":	2009,
"genero":	"Comedy, Crime, Drama, Mystery, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	134,
"nome":	"Dragon Ball",
"url":	"https://www.imdb.com/title/tt0280249/",
"imdb_rating":	"8,5",
"lancamento":	1986,
"genero":	"Animation, Action, Adventure, Fantasy, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	135,
"nome":	"Banshee",
"url":	"https://www.imdb.com/title/tt2017109/",
"imdb_rating":	"8,4",
"lancamento":	2013,
"genero":	"Action, Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	136,
"nome":	"Peep Show",
"url":	"https://www.imdb.com/title/tt0387764/",
"imdb_rating":	"8,6",
"lancamento":	2003,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	137,
"nome":	"Lucifer",
"url":	"https://www.imdb.com/title/tt4052886/",
"imdb_rating":	"8,2",
"lancamento":	2015,
"genero":	"Crime, Drama, Fantasy",
"atores":  "",
"imagem": ""
},	
{	
"id":	138,
"nome":	"Jessica Jones",
"url":	"https://www.imdb.com/title/tt2357547/",
"imdb_rating":	"8,1",
"lancamento":	2015,
"genero":	"Action, Crime, Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	139,
"nome":	"Ash vs Evil Dead",
"url":	"https://www.imdb.com/title/tt4189022/",
"imdb_rating":	"8,5",
"lancamento":	2015,
"genero":	"Action, Comedy, Fantasy, Horror",
"atores":  "",
"imagem": ""
},	
{	
"id":	140,
"nome":	"Orphan Black",
"url":	"https://www.imdb.com/title/tt2234222/",
"imdb_rating":	"8,3",
"lancamento":	2013,
"genero":	"Action, Drama, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	141,
"nome":	"Chuck",
"url":	"https://www.imdb.com/title/tt0934814/",
"imdb_rating":	"8,2",
"lancamento":	2007,
"genero":	"Action, Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	142,
"nome":	"The Americans",
"url":	"https://www.imdb.com/title/tt2149175/",
"imdb_rating":	"8,4",
"lancamento":	2013,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	143,
"nome":	"Legion",
"url":	"https://www.imdb.com/title/tt5114356/",
"imdb_rating":	"8,4",
"lancamento":	2017,
"genero":	"Action, Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	144,
"nome":	"Broadchurch",
"url":	"https://www.imdb.com/title/tt2249364/",
"imdb_rating":	"8,4",
"lancamento":	2013,
"genero":	"Crime, Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	145,
"nome":	"Buffy the Vampire Slayer",
"url":	"https://www.imdb.com/title/tt0118276/",
"imdb_rating":	"8,2",
"lancamento":	1996,
"genero":	"Action, Drama, Fantasy, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	146,
"nome":	"Hunter x Hunter",
"url":	"https://www.imdb.com/title/tt2098220/",
"imdb_rating":	"8,7",
"lancamento":	2011,
"genero":	"Animation, Action, Adventure, Comedy, Fantasy",
"atores":  "",
"imagem": ""
},	
{	
"id":	147,
"nome":	"The Killing",
"url":	"https://www.imdb.com/title/tt1637727/",
"imdb_rating":	"8,3",
"lancamento":	2011,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	148,
"nome":	"Coupling",
"url":	"https://www.imdb.com/title/tt0237123/",
"imdb_rating":	"8,6",
"lancamento":	2000,
"genero":	"Comedy, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	149,
"nome":	"The Mentalist",
"url":	"https://www.imdb.com/title/tt1196946/",
"imdb_rating":	"8,1",
"lancamento":	2008,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	150,
"nome":	"Dragon Ball: Doragon bôru",
"url":	"https://www.imdb.com/title/tt0088509/",
"imdb_rating":	"8,5",
"lancamento":	1986,
"genero":	"Animation, Action, Adventure, Comedy, Fantasy, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	151,
"nome":	"The Blacklist",
"url":	"https://www.imdb.com/title/tt2741602/",
"imdb_rating":	"8,1",
"lancamento":	2013,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	152,
"nome":	"Steins",
"url":	"Gate",
"imdb_rating":	"tvSeries",
"lancamento":	24,
"genero":	"2011",
"atores": "",
"imagem": ""
},	
{	
"id":	153,
"nome":	"Black Books",
"url":	"https://www.imdb.com/title/tt0262150/",
"imdb_rating":	"8,5",
"lancamento":	2000,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	154,
"nome":	"The Flash",
"url":	"https://www.imdb.com/title/tt3107288/",
"imdb_rating":	"7,9",
"lancamento":	2014,
"genero":	"Action, Adventure, Drama, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	155,
"nome":	"Black-Adder II",
"url":	"https://www.imdb.com/title/tt0088484/",
"imdb_rating":	"8,6",
"lancamento":	1986,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	156,
"nome":	"The Expanse",
"url":	"https://www.imdb.com/title/tt3230854/",
"imdb_rating":	"8,4",
"lancamento":	2015,
"genero":	"Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	157,
"nome":	"Naruto: Shippûden",
"url":	"https://www.imdb.com/title/tt0988824/",
"imdb_rating":	"8,4",
"lancamento":	2007,
"genero":	"Animation, Action, Adventure, Drama, Fantasy",
"atores":  "",
"imagem": ""
},	
{	
"id":	158,
"nome":	"Black Sails",
"url":	"https://www.imdb.com/title/tt2375692/",
"imdb_rating":	"8,3",
"lancamento":	2014,
"genero":	"Adventure, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	159,
"nome":	"Veronica Mars",
"url":	"https://www.imdb.com/title/tt0412253/",
"imdb_rating":	"8,4",
"lancamento":	2004,
"genero":	"Crime, Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	160,
"nome":	"That '70s Show",
"url":	"https://www.imdb.com/title/tt0165598/",
"imdb_rating":	"8,1",
"lancamento":	1998,
"genero":	"Comedy, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	161,
"nome":	"30 Rock",
"url":	"https://www.imdb.com/title/tt0496424/",
"imdb_rating":	"8,2",
"lancamento":	2006,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	162,
"nome":	"Black Adder the Third",
"url":	"https://www.imdb.com/title/tt0092324/",
"imdb_rating":	"8,6",
"lancamento":	1987,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	163,
"nome":	"Criminal Minds",
"url":	"https://www.imdb.com/title/tt0452046/",
"imdb_rating":	"8,1",
"lancamento":	2005,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	164,
"nome":	"Justice League",
"url":	"https://www.imdb.com/title/tt0275137/",
"imdb_rating":	"8,6",
"lancamento":	2001,
"genero":	"Animation, Action, Adventure, Drama, Family, Fantasy, Mystery, Romance, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	165,
"nome":	"Shin Seiki Evangerion",
"url":	"https://www.imdb.com/title/tt0112159/",
"imdb_rating":	"8,6",
"lancamento":	1995,
"genero":	"Animation, Action, Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	166,
"nome":	"Atlanta",
"url":	"https://www.imdb.com/title/tt4288182/",
"imdb_rating":	"8,6",
"lancamento":	2016,
"genero":	"Comedy, Drama, Music",
"atores":  "",
"imagem": ""
},	
{	
"id":	167,
"nome":	"Penny Dreadful",
"url":	"https://www.imdb.com/title/tt2628232/",
"imdb_rating":	"8,2",
"lancamento":	2014,
"genero":	"Drama, Fantasy, Horror",
"atores":  "",
"imagem": ""
},	
{	
"id":	168,
"nome":	"The Marvelous Mrs. Maisel",
"url":	"https://www.imdb.com/title/tt5788792/",
"imdb_rating":	"8,7",
"lancamento":	2017,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	169,
"nome":	"How to Get Away with Murder",
"url":	"https://www.imdb.com/title/tt3205802/",
"imdb_rating":	"8,2",
"lancamento":	2014,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	170,
"nome":	"Skam",
"url":	"https://www.imdb.com/title/tt5288312/",
"imdb_rating":	"8,7",
"lancamento":	2015,
"genero":	"Drama, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	171,
"nome":	"Samurai chanpurû",
"url":	"https://www.imdb.com/title/tt0423731/",
"imdb_rating":	"8,6",
"lancamento":	2004,
"genero":	"Animation, Action, Adventure, Comedy, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	172,
"nome":	"The Inbetweeners",
"url":	"https://www.imdb.com/title/tt1220617/",
"imdb_rating":	"8,3",
"lancamento":	2008,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	173,
"nome":	"True Blood",
"url":	"https://www.imdb.com/title/tt0844441/",
"imdb_rating":	"7,9",
"lancamento":	2008,
"genero":	"Drama, Fantasy, Mystery, Romance, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	174,
"nome":	"Father Ted",
"url":	"https://www.imdb.com/title/tt0111958/",
"imdb_rating":	"8,6",
"lancamento":	1995,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	175,
"nome":	"Young Justice",
"url":	"https://www.imdb.com/title/tt1641384/",
"imdb_rating":	"8,7",
"lancamento":	2010,
"genero":	"Animation, Action, Adventure, Drama, Romance, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	176,
"nome":	"Altered Carbon",
"url":	"https://www.imdb.com/title/tt2261227/",
"imdb_rating":	"8,2",
"lancamento":	2018,
"genero":	"Action, Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	177,
"nome":	"Poirot",
"url":	"https://www.imdb.com/title/tt0094525/",
"imdb_rating":	"8,6",
"lancamento":	1989,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	178,
"nome":	"Carnivàle",
"url":	"https://www.imdb.com/title/tt0319969/",
"imdb_rating":	"8,5",
"lancamento":	2003,
"genero":	"Drama, Fantasy, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	179,
"nome":	"Pushing Daisies",
"url":	"https://www.imdb.com/title/tt0925266/",
"imdb_rating":	"8,4",
"lancamento":	2007,
"genero":	"Comedy, Drama, Fantasy, Mystery, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	180,
"nome":	"Misfits",
"url":	"https://www.imdb.com/title/tt1548850/",
"imdb_rating":	"8,2",
"lancamento":	2009,
"genero":	"Comedy, Drama, Fantasy, Romance, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	181,
"nome":	"Twin Peaks",
"url":	"https://www.imdb.com/title/tt4093826/",
"imdb_rating":	"8,5",
"lancamento":	2017,
"genero":	"Crime, Drama, Fantasy, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	182,
"nome":	"Star Trek",
"url":	"https://www.imdb.com/title/tt0060028/",
"imdb_rating":	"8,3",
"lancamento":	1966,
"genero":	"Action, Adventure, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	183,
"nome":	"The Knick",
"url":	"https://www.imdb.com/title/tt2937900/",
"imdb_rating":	"8,5",
"lancamento":	2014,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	184,
"nome":	"Ray Donovan",
"url":	"https://www.imdb.com/title/tt2249007/",
"imdb_rating":	"8,3",
"lancamento":	2013,
"genero":	"Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	185,
"nome":	"Bates Motel",
"url":	"https://www.imdb.com/title/tt2188671/",
"imdb_rating":	"8,2",
"lancamento":	2013,
"genero":	"Drama, Horror, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	186,
"nome":	"The Leftovers",
"url":	"https://www.imdb.com/title/tt2699128/",
"imdb_rating":	"8,3",
"lancamento":	2014,
"genero":	"Drama, Fantasy, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	187,
"nome":	"Billions",
"url":	"https://www.imdb.com/title/tt4270492/",
"imdb_rating":	"8,4",
"lancamento":	2016,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	188,
"nome":	"Arrow",
"url":	"https://www.imdb.com/title/tt2193021/",
"imdb_rating":	"7,7",
"lancamento":	2012,
"genero":	"Action, Adventure, Crime, Drama, Mystery, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	189,
"nome":	"The Good Wife",
"url":	"https://www.imdb.com/title/tt1442462/",
"imdb_rating":	"8,3",
"lancamento":	2009,
"genero":	"Crime, Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	190,
"nome":	"Behzat Ç.: Bir Ankara Polisiyesi",
"url":	"https://www.imdb.com/title/tt1795096/",
"imdb_rating":	"8,7",
"lancamento":	2010,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	191,
"nome":	"Gotham",
"url":	"https://www.imdb.com/title/tt3749900/",
"imdb_rating":	"7,9",
"lancamento":	2014,
"genero":	"Action, Crime, Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	192,
"nome":	"Blue Mountain State",
"url":	"https://www.imdb.com/title/tt1344204/",
"imdb_rating":	"8,4",
"lancamento":	2010,
"genero":	"Comedy, Sport",
"atores":  "",
"imagem": ""
},	
{	
"id":	193,
"nome":	"Utopia",
"url":	"https://www.imdb.com/title/tt2384811/",
"imdb_rating":	"8,5",
"lancamento":	2013,
"genero":	"Drama, Mystery, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	194,
"nome":	"The End of the F***ing World",
"url":	"https://www.imdb.com/title/tt6257970/",
"imdb_rating":	"8,2",
"lancamento":	2017,
"genero":	"Adventure, Comedy, Drama, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	195,
"nome":	"The Bugs Bunny Show",
"url":	"https://www.imdb.com/title/tt0053488/",
"imdb_rating":	"8,6",
"lancamento":	1960,
"genero":	"Animation, Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	196,
"nome":	"Master of None",
"url":	"https://www.imdb.com/title/tt4635276/",
"imdb_rating":	"8,3",
"lancamento":	2015,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	197,
"nome":	"Mahabharat",
"url":	"https://www.imdb.com/title/tt0158417/",
"imdb_rating":	"9,4",
"lancamento":	1988,
"genero":	"Drama, History, War",
"atores":  "",
"imagem": ""
},	
{	
"id":	198,
"nome":	"X-Men",
"url":	"https://www.imdb.com/title/tt0103584/",
"imdb_rating":	"8,5",
"lancamento":	1992,
"genero":	"Animation, Action, Family, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	199,
"nome":	"Gomorra: La serie",
"url":	"https://www.imdb.com/title/tt2049116/",
"imdb_rating":	"8,7",
"lancamento":	2014,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	200,
"nome":	"Skins",
"url":	"https://www.imdb.com/title/tt0840196/",
"imdb_rating":	"8,2",
"lancamento":	2007,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	201,
"nome":	"Smoke",
"url":	"https://www.imdb.com/title/tt9077626/",
"imdb_rating":	"9",
"lancamento":	2018,
"genero":	"Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	202,
"nome":	"Boston Legal",
"url":	"https://www.imdb.com/title/tt0402711/",
"imdb_rating":	"8,4",
"lancamento":	2004,
"genero":	"Comedy, Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	203,
"nome":	"Married with Children",
"url":	"https://www.imdb.com/title/tt0092400/",
"imdb_rating":	"8,1",
"lancamento":	1986,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	204,
"nome":	"Samurai Jack",
"url":	"https://www.imdb.com/title/tt0278238/",
"imdb_rating":	"8,4",
"lancamento":	2001,
"genero":	"Animation, Action, Adventure, Fantasy, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	205,
"nome":	"Gilmore Girls",
"url":	"https://www.imdb.com/title/tt0238784/",
"imdb_rating":	"8,2",
"lancamento":	2000,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	206,
"nome":	"Forever",
"url":	"https://www.imdb.com/title/tt3487382/",
"imdb_rating":	"8,3",
"lancamento":	2014,
"genero":	"Crime, Drama, Fantasy, Mystery, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	207,
"nome":	"Once Upon a Time",
"url":	"https://www.imdb.com/title/tt1843230/",
"imdb_rating":	"7,8",
"lancamento":	2011,
"genero":	"Adventure, Fantasy, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	208,
"nome":	"Malcolm in the Middle",
"url":	"https://www.imdb.com/title/tt0212671/",
"imdb_rating":	"8",
"lancamento":	2000,
"genero":	"Comedy, Family",
"atores":  "",
"imagem": ""
},	
{	
"id":	209,
"nome":	"Extras",
"url":	"https://www.imdb.com/title/tt0445114/",
"imdb_rating":	"8,3",
"lancamento":	2005,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	210,
"nome":	"Eastbound & Down",
"url":	"https://www.imdb.com/title/tt0866442/",
"imdb_rating":	"8,3",
"lancamento":	2009,
"genero":	"Comedy, Drama, Sport",
"atores":  "",
"imagem": ""
},	
{	
"id":	211,
"nome":	"The Fall",
"url":	"https://www.imdb.com/title/tt2294189/",
"imdb_rating":	"8,2",
"lancamento":	2013,
"genero":	"Crime, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	212,
"nome":	"M*A*S*H",
"url":	"https://www.imdb.com/title/tt0068098/",
"imdb_rating":	"8,3",
"lancamento":	1972,
"genero":	"Comedy, Drama, War",
"atores":  "",
"imagem": ""
},	
{	
"id":	213,
"nome":	"The Vampire Diaries",
"url":	"https://www.imdb.com/title/tt1405406/",
"imdb_rating":	"7,7",
"lancamento":	2009,
"genero":	"Drama, Fantasy, Horror, Mystery, Romance, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	214,
"nome":	"Lie to Me",
"url":	"https://www.imdb.com/title/tt1235099/",
"imdb_rating":	"8",
"lancamento":	2009,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	215,
"nome":	"The Adventures of Sherlock Holmes",
"url":	"https://www.imdb.com/title/tt0086661/",
"imdb_rating":	"8,7",
"lancamento":	1984,
"genero":	"Crime, Drama, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	216,
"nome":	"Senke nad Balkanom",
"url":	"https://www.imdb.com/title/tt6108262/",
"imdb_rating":	"9,4",
"lancamento":	2017,
"genero":	"Crime, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	217,
"nome":	"Hell on Wheels",
"url":	"https://www.imdb.com/title/tt1699748/",
"imdb_rating":	"8,3",
"lancamento":	2011,
"genero":	"Drama, Western",
"atores":  "",
"imagem": ""
},	
{	
"id":	218,
"nome":	"The Night Manager",
"url":	"https://www.imdb.com/title/tt1399664/",
"imdb_rating":	"8,2",
"lancamento":	2016,
"genero":	"Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	219,
"nome":	"The Thick of It",
"url":	"https://www.imdb.com/title/tt0459159/",
"imdb_rating":	"8,7",
"lancamento":	2005,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	220,
"nome":	"Weeds",
"url":	"https://www.imdb.com/title/tt0439100/",
"imdb_rating":	"8",
"lancamento":	2005,
"genero":	"Comedy, Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	221,
"nome":	"Bones",
"url":	"https://www.imdb.com/title/tt0460627/",
"imdb_rating":	"7,9",
"lancamento":	2005,
"genero":	"Comedy, Crime, Drama, Mystery, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	222,
"nome":	"SpongeBob SquarePants",
"url":	"https://www.imdb.com/title/tt0206512/",
"imdb_rating":	"8,1",
"lancamento":	1999,
"genero":	"Animation, Comedy, Family, Fantasy",
"atores":  "",
"imagem": ""
},	
{	
"id":	223,
"nome":	"Dirk Gently's Holistic Detective Agency",
"url":	"https://www.imdb.com/title/tt4047038/",
"imdb_rating":	"8,4",
"lancamento":	2016,
"genero":	"Action, Comedy, Crime, Fantasy, Mystery, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	224,
"nome":	"Happy Valley",
"url":	"https://www.imdb.com/title/tt3428912/",
"imdb_rating":	"8,5",
"lancamento":	2014,
"genero":	"Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	225,
"nome":	"Doctor Who",
"url":	"https://www.imdb.com/title/tt0056751/",
"imdb_rating":	"8,4",
"lancamento":	1963,
"genero":	"Adventure, Drama, Family, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	226,
"nome":	"Trailer Park Boys",
"url":	"https://www.imdb.com/title/tt0290988/",
"imdb_rating":	"8,4",
"lancamento":	2001,
"genero":	"Comedy, Crime",
"atores":  "",
"imagem": ""
},	
{	
"id":	227,
"nome":	"Naruto",
"url":	"https://www.imdb.com/title/tt0409591/",
"imdb_rating":	"8,2",
"lancamento":	2002,
"genero":	"Animation, Action, Adventure, Comedy, Fantasy, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	228,
"nome":	"The 100",
"url":	"https://www.imdb.com/title/tt2661044/",
"imdb_rating":	"7,8",
"lancamento":	2014,
"genero":	"Drama, Mystery, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	229,
"nome":	"The League",
"url":	"https://www.imdb.com/title/tt1480684/",
"imdb_rating":	"8,3",
"lancamento":	2009,
"genero":	"Comedy, Sport",
"atores":  "",
"imagem": ""
},	
{	
"id":	230,
"nome":	"The Last Kingdom",
"url":	"https://www.imdb.com/title/tt4179452/",
"imdb_rating":	"8,3",
"lancamento":	2015,
"genero":	"Action, Drama, History",
"atores":  "",
"imagem": ""
},	
{	
"id":	231,
"nome":	"Atypical",
"url":	"https://www.imdb.com/title/tt6315640/",
"imdb_rating":	"8,4",
"lancamento":	2017,
"genero":	"Comedy, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	232,
"nome":	"Monster",
"url":	"https://www.imdb.com/title/tt0434706/",
"imdb_rating":	"8,7",
"lancamento":	2004,
"genero":	"Animation, Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	233,
"nome":	"Frasier",
"url":	"https://www.imdb.com/title/tt0106004/",
"imdb_rating":	"8,1",
"lancamento":	1993,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	234,
"nome":	"Bosch",
"url":	"https://www.imdb.com/title/tt3502248/",
"imdb_rating":	"8,4",
"lancamento":	2014,
"genero":	"Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	235,
"nome":	"Permanent Roommates",
"url":	"https://www.imdb.com/title/tt4156586/",
"imdb_rating":	"8,6",
"lancamento":	2014,
"genero":	"Comedy, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	236,
"nome":	"Kenpû denki beruseruku",
"url":	"https://www.imdb.com/title/tt0318871/",
"imdb_rating":	"8,5",
"lancamento":	1997,
"genero":	"Animation, Action, Adventure, Fantasy, Horror, Romance",
"atores":  "",
"imagem": ""
},	
{	
"id":	237,
"nome":	"The Man in the High Castle",
"url":	"https://www.imdb.com/title/tt1740299/",
"imdb_rating":	"8,1",
"lancamento":	2015,
"genero":	"Drama, Sci-Fi, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	238,
"nome":	"Revenge",
"url":	"https://www.imdb.com/title/tt1837642/",
"imdb_rating":	"7,9",
"lancamento":	2011,
"genero":	"Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	239,
"nome":	"The Tudors",
"url":	"https://www.imdb.com/title/tt0758790/",
"imdb_rating":	"8,1",
"lancamento":	2007,
"genero":	"Drama, History, Romance, War",
"atores":  "",
"imagem": ""
},	
{	
"id":	240,
"nome":	"The Fresh Prince of Bel-Air",
"url":	"https://www.imdb.com/title/tt0098800/",
"imdb_rating":	"7,9",
"lancamento":	1990,
"genero":	"Comedy",
"atores":  "",
"imagem": ""
},	
{	
"id":	241,
"nome":	"The Good Doctor",
"url":	"https://www.imdb.com/title/tt6470478/",
"imdb_rating":	"8,3",
"lancamento":	2017,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	242,
"nome":	"The Venture Bros.",
"url":	"https://www.imdb.com/title/tt0417373/",
"imdb_rating":	"8,5",
"lancamento":	2003,
"genero":	"Animation, Comedy, Sci-Fi",
"atores":  "",
"imagem": ""	
},	
{	
"id":	243,
"nome":	"Mystery Science Theater 3000",
"url":	"https://www.imdb.com/title/tt0094517/",
"imdb_rating":	"8,5",
"lancamento":	1988,
"genero":	"Comedy, Sci-Fi",
"atores":  "",
"imagem": ""
},	
{	
"id":	244,
"nome":	"NCIS: Naval Criminal Investigative Service",
"url":	"https://www.imdb.com/title/tt0364845/",
"imdb_rating":	"7,9",
"lancamento":	2003,
"genero":	"Action, Comedy, Crime, Drama, Mystery, Thriller",
"atores":  "",
"imagem": ""	
},	
{	
"id":	245,
"nome":	"Wentworth",
"url":	"https://www.imdb.com/title/tt2433738/",
"imdb_rating":	"8,7",
"lancamento":	2013,
"genero":	"Crime, Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	246,
"nome":	"Jack Ryan",
"url":	"https://www.imdb.com/title/tt5057054/",
"imdb_rating":	"8,3",
"lancamento":	2018,
"genero":	"Action, Drama, Thriller",
"atores":  "",
"imagem": ""
},	
{	
"id":	247,
"nome":	"Stargate: Atlantis",
"url":	"https://www.imdb.com/title/tt0374455/",
"imdb_rating":	"8,1",
"lancamento":	2004,
"genero":	"Action, Adventure, Drama, Sci-Fi",
"atores":  "",
"imagem": ""	
},	
{	
"id":	248,
"nome":	"The Young Pope",
"url":	"https://www.imdb.com/title/tt3655448/",
"imdb_rating":	"8,4",
"lancamento":	2016,
"genero":	"Drama",
"atores":  "",
"imagem": ""
},	
{	
"id":	249,
"nome":	"Preacher",
"url":	"https://www.imdb.com/title/tt5016504/",
"imdb_rating":	"8,1",
"lancamento":	2016,
"genero":	"Adventure, Drama, Fantasy, Mystery",
"atores":  "",
"imagem": ""
},	
{	
"id":	250,
"nome":	"Marco Polo",
"url":	"https://www.imdb.com/title/tt2189461/",
"imdb_rating":	"8,1",
"lancamento":	2014,
"genero":	"Adventure, Drama, History",
"atores":  "",
"imagem": ""	
},	
{	
"id":	251,
"nome":	"Courage the Cowardly Dog",
"url":	"https://www.imdb.com/title/tt0220880/",
"imdb_rating":	"8,3",
"lancamento":	1999,
"genero":	"Animation, Comedy, Family, Fantasy, Horror",
"atores":  "",
"imagem": ""
}	
]
}



// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('dbfake'));
if (!db) {
    db = dbfake
};
console.log(db);
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertSeries(series) {

    let novoId;

	// Verificar se existe algum dado no LocalStorage
	if (db.data.length == 0) {
		novoId = 1;
	}
	else {
		// Calcula novo ID a parti do último ID existente
		novoId = db.data[db.data.length - 1].id + 1;
	}
    // Calcula novo Id a partir do último código existente no array
    // novoId = db.data[db.data.length - 1].id + 1;
    
    let novaSerie = {
        "id": novoId,
        "nome": series.nome,
        "url": series.url,
        "imdb_rating": series.imdb_rating,
        "lancamento": series.lancamento,
        "genero": series.genero,
        "atores": series.atores,
        "imagem": series.img
    };

    console.log(novaSerie)

    // Insere o novo objeto no array
    db.data.push(novaSerie);
    displayMessage("Serie inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateSeries(id, series) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    	db.data[index].nome = series.nome,
        db.data[index].url = series.url,
        db.data[index].imdb_rating = series.imdb_rating,
        db.data[index].lancamento = series.lancamento,
        db.data[index].genero = series.genero,
        db.data[index].atores = series.atores

    if (changed) {
        db.data[index].imagem = series.img;
        changed = false;
    }

    displayMessage("Serie alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteSeries(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Serie removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}