const initialImageData = [
	{
		img: '/assets/images/1.jpeg',
		name: 'Augusta (Shilpa)',
		place: 'Chennai',
		desc: 'A twitter friend, obviously nice & kind, too much into cats and dogs and books but still.',
		link: 'https://twitter.com/aunotgusta',
	},
	{
		img: '/assets/images/2.jpeg',
		name: 'Apoorva',
		place: 'Rewa, Madhya Pradesh',
		desc: "One of the best people I met on twitter, she's elderly people but one of the cooler ones. 😂",
		link: 'https://twitter.com/_aisikitaisi_',
	},
	{
		img: '/assets/images/3.jpeg',
		name: 'Aarti',
		place: 'Pooja ki thaali',
		desc: "Well, to be honest I don't really know her but that's the good thing about Twitter sometimes, nice people are everywhere." ,
		link: 'https://twitter.com/AartiModi0703',
	},
	{
		img: '/assets/images/4.jpeg',
		name: 'Prithviraj',
		place: 'Pune',
		desc: 'Again, one of my twitter friends, he likes reading way too much, toh like if you ever feel like the need to talk to someone about books, this would be the guy.',
		link: 'https://twitter.com/prithviralta',
	},
	{
		img: '/assets/images/5.jpeg',
		name: 'Dodo (probably Dhruvi or something)',
		place: 'Surat',
		desc: "I don't really know her, but she's like one of those people who posts nice things always and you like it when you see it on your timeline.",
		link: 'https://twitter.com/Dododhru',
	},
	{
		img: '/assets/images/6.jpeg',
		name: 'Mahima',
		place: 'Bhagwaan ke paas',
		desc: 'I know her kaam bhar ka, yeh bhi one of the nicest people that I know on twitter.',
		link: 'https://twitter.com/highongrammar',
	},
	{
		img: '/assets/images/7.jpeg',
		name: "Lekhika (I don't really know her name)",
		place: 'In a bookstore?',
		desc: "As I said, I don't really know her name or know her but obviously she's nice enough to write such nice things for you toh pata chal hi raha hai ki she's a nice person too.",
		link: 'https://twitter.com/lekhikaaaa',
	},
	{
		img: '/assets/images/8.jpeg',
		name: 'Ahilya',
		place: 'Duniya',
		desc: 'Idk this person too, but then again just shows how nice twitter is sometimes (also shows how much they love pets though). 😂',
		link: 'https://twitter.com/vadapavaurchai',
	},
	{
		img: '/assets/images/9.jpeg',
		name: 'Maggi (Rahul)',
		place: 'Surat',
		desc: "This is one of my twitter friends, he's nice and funny, typical hum log jaisa banda and engineer too." ,
		link: 'https://twitter.com/Rahul_utters',
	},
	{
		img: '/assets/images/10.jpeg',
		name: 'Dukhwinder (Idk the name, but Punjabi probably)',
		place: 'Probably Canada then',
		desc: "As can be seen, don't really know him as well, but a nice person.",
		link: 'https://twitter.com/dukhwinder',
	},
	{
		img: '/assets/images/11.jpeg',
		name: 'Asa',
		place: 'Earth',
		desc: 'You can sense the theme here, but Idk her as well, this is twitter and social media and nice people are ever present everywhere.',
		link: 'https://twitter.com/marauder_7',
	},
	{
		img: '/assets/images/12.jpeg',
		name: 'Khushi',
		place: 'Kolkata',
		desc: "This person I know, she's a very cool, mast, pagal si person, I told her annoy kar kar ke ki you have a crush on me, ab jab bhi baat kati hai toh bolti hai tum hi crush ho. 😂",
		link: 'https://twitter.com/itttisikhushi',
	},
	{
		img: '/assets/images/13.jpeg',
		name: "Again, idk let's call her Parvati",
		place: 'Kailash Parvat',
		desc: 'Idk this person as well but she was nice enough to wish meri bestfriend toh I have only respect for her.',
		link: 'https://twitter.com/Tumsehojaayega',
	},
	{
		img: '/assets/images/14.jpeg',
		name: 'Umar',
		place: 'New Delhi',
		desc: "He's also one of my twitter friends, ye bhi bahut hi mast accha person, also engineer.",
		link: 'https://twitter.com/UmarMasud07',
	},
	{
		img: '/assets/images/15.jpeg',
		name: 'Mitali',
		place: 'Newark, USA',
		desc: "She's also one of the friends and really nice, mast log hain yaar by god.",
		link: 'https://twitter.com/fluffydhoklaa',
	},
	{
		img: '/assets/images/16.jpeg',
		name: 'Shravani probably',
		place: 'Twitter',
		desc: "I know her kaafi time se, and have talked to her quite a bit but don't really know about her too much. Always is nice to me.",
		link: 'https://twitter.com/sheeraawaanee',
	},
	{
		img: '/assets/images/17.jpeg',
		name: 'Prachi',
		place: 'New Delhi',
		desc: "This girl definitely likes me, but sahi mein acchi hai and funny bhi (don't know why then). 😂",
		link: 'https://twitter.com/maymaymomos',
	},
	{
		img: '/assets/images/18.jpeg',
		name: 'Dilzer',
		place: 'Surat',
		desc: "She's also meri twitter ki friend, she's very nice and cute bacchi, always helps whenever required." ,
		link: 'https://www.instagram.com/dilzerkasad/',
	},
	{
		img: '/assets/images/19.jpeg',
		name: 'Val (Probably Vaishali)',
		place: 'Mere saath toh nahi rehti toh kya hi point',
		desc: "Again, a very nice person whom I see regularly on TL but haven't talked to much.",
		link: 'https://twitter.com/weirdonxtdoor_',
	},
	{
		img: '/assets/images/20.jpeg',
		name: 'Anshika (ISTG)',
		place: 'New Delhi',
		desc: 'Probably one of my best friends on twitter, I annoy isko bahut zyaada and ye bhi karti but is really nice and mast tbh.',
		link: 'https://twitter.com/itsafamilyhoe',
	},
	{
		img: '/assets/images/21.jpeg',
		name: 'Mahie (Sarah)',
		place: 'Pune',
		desc: "She's also cool ekdam, apparently we're married on twitter, like we don't talk much but jab bhi baat karte toh mast aaraam se hoti. Bahut hi mast person." ,
		link: 'https://twitter.com/thicckharipatti',
	}
]

export default initialImageData