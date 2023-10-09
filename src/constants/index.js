import {
	web,
	creator,
	mobile,
	backend,
	html,
	css,
	javascript,
	typescript,
	docker,
	figma,
	nodejs,
	mongodb,
	reactjs,
	redux,
	tailwind,
	threejs,
	git,
	shopify,
	meta,
	starbucks,
	tesla,
	tripguide,
	carrent,
	jobit,
	angular,
	cpp,
	go,
	r,
	python,
	bash,
	flask,
	jquery,
	java,
	lua,
	php,
	sqlite,
	kotlin,
	ruby,
	csharp,
} from '../assets';


export const navLinks = [
	{ id: "about", title: 'About' },
	{ id: "work", title: 'Works' },
	{ id: 'tech', title: "Tech" },
	{ id: 'social', title: "Social" },
	{ id: 'contact', title: 'Contact' },
]

const socialLinks = [
	{ id: 'fa-brands fa-github', title: 'GitHub', link: "https://github.com/sera619" },
	{ id: 'fa-brands fa-codepen', title: 'Codepen', link: "https://codepen.io/sera619" },
	{ id: 'fa-solid fa-user-secret', title: 'TryHackMe', link: "https://tryhackme.com/p/S3R43o3" },
	{ id: 'fa-brands fa-youtube', title: 'Youtube', link: "https://youtube.com/@S3R43o3?si=Lxzenb7_NlTL0E9i" },
];

const services = [
	{
		title: "Indy-Game Developer",
		icon: web,
	},
	{
		title: "Cyber Security Expert",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Frontend Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "Python",
		icon: python
	},
	{
		name: "LUA",
		icon: lua,
	},
	{
		name: "R",
		icon: r,
	},
	{
		name: "Kotlin",
		icon: kotlin,
	},
	{
		name: "Java",
		icon: java
	},
	{
		name: "Bash",
		icon: bash,
	},
	{
		name: "C++",
		icon: cpp
	},
	{
		name: "Flask",
		icon: flask
	},
	{
		name: "GO",
		icon: go,
	},
	{
		name: "Php",
		icon: php,
	},
	{
		name: "Csharp",
		icon: csharp
	},
	{
		name: "Angular",
		icon: angular
	},
	{
		name: "Ruby",
		icon: ruby
	},
	{
		name: "jQuery",
		icon: jquery
	},
	{
		name: "SQLite",
		icon: sqlite
	},

];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

const gameElements = [
	{ id: "Ape", image: "🦍", stat: "" },
	{ id: "Tiger", image: "🐅", stat: "" },
	{ id: "Dodo", image: "🦤", stat: "" },
	{ id: "Snake", image: "🐍", stat: "" },
	{ id: "Whale", image: "🐋", stat: "" },
	{ id: "Ape", image: "🦍", stat: "" },
	{ id: "Tiger", image: "🐅", stat: "" },
	{ id: "Dodo", image: "🦤", stat: "" },
	{ id: "Snake", image: "🐍", stat: "" },
	{ id: "Whale", image: "🐋", stat: "" },
	{ id: "Bat", image: "🦇", stat: "" },
	{ id: "Crab", image: "🦞", stat: "" },
	{ id: "Dog", image: "🐕‍🦺", stat: "" },
	{ id: "Pinguin", image: "🐧", stat: "" },
	{ id: "Flamigo", image: "🦩", stat: "" },
	{ id: "Bat", image: "🦇", stat: "" },
	{ id: "Crab", image: "🦞", stat: "" },
	{ id: "Dog", image: "🐕‍🦺", stat: "" },
	{ id: "Pinguin", image: "🐧", stat: "" },
	{ id: "Flamigo", image: "🦩", stat: "" },

]

const gameSteps = [
	{
		target: '#step-0',
		placement: 'top',
		title: "Welcome!",
		spotlightPadding: 20,
		disableOverlayClose: true,
		hideCloseButton: true,
		disableBeacon: true,
		spotlightClicks: true,
		locale: { open: "Start the Intro-Tour!" },
		content: 'Welcome to the memory Game!\nJust click the blue buttons to start.'
	},
	{
		target: '#step-1',
		title: 'Gamestats',
		content: 'Here you can see your current move count and your highscore.',
	},
	{
		target: '#step-2',
		title: 'Restart Game',
		content: 'Click this button to restart the game anytime!',
	},
	{
		target: '#step-3',
		title: 'Reset Highscore',
		content: 'Click here to DELETE the saved highscore',
	},
	{
		target: '#step-4',
		title: 'Back',
		content: 'Finally if you dont want play anymore click here to go back to menu.'
	},
	{
		target: '#step-5',
		title: 'Help',
		content: 'Click here to show this tour again!\nHave fun to play!'
	}
]

const homeSteps = [
	{
		content: "Hello! Welcome this is a small showcase!",
		target: '#step-0',
		placement: 'top',
		title: "Welcome!",
		spotlightPadding: 20,
		disableOverlayClose: true,
		hideCloseButton: true,
		disableBeacon: true,
		spotlightClicks: true,
		locale: { open: "Start the Intro-Tour!" }
	},
	{
		content: "Click here to see my Portfolio!",
		target: '#step-1',
		placement: 'bottom',
		hideCloseButton: true,

	},
	{
		content: "Click here to see play a nice memory game!",
		target: '#step-2',
		placement: 'top',
		hideCloseButton: true,

	},
	{
		content: "Finally you can restart this small intro tour.",
		target: '#step-3',
		placement: 'bottom',
		hideCloseButton: true,

	},
]

const introSteps = {
	home: homeSteps,
	game: gameSteps
}




export { services, technologies, experiences, testimonials, projects, socialLinks, gameElements, introSteps };