/**
 * ACM @ USC — site content
 * Update this file each semester (team, events, links). Layout lives in index.html + site.css.
 */
window.SITE_DATA = {
	joinUrl: 'https://forms.gle/fEPVN2eKbFuNz1Vk9',
	/** RSVP hub: replace with Luma, Partiful, or your events calendar when ready */
	rsvpUrl: 'https://www.instagram.com/uscacm/',
	newsletter: {
		/** Formspree, Google Form POST URL, or leave empty to hide the form action */
		formAction: '',
		formNote:
			'Add your Formspree endpoint or Google Form action URL in js/site-data.js (newsletter.formAction).',
	},
	contactEmail: 'uscacm@gmail.com',
	social: {
		instagram: 'https://www.instagram.com/uscacm/',
		linkedin: 'https://www.linkedin.com/company/uscacm/',
	},
	sponsors: [
		{ name: 'Google' },
		{ name: 'Meta' },
		{ name: 'Microsoft' },
		{ name: 'Amazon' },
		{ name: 'Bloomberg' },
		{ name: 'And more' },
	],
	resources: [
		{
		  title: 'Event updates',
		  description: 'Follow us for weekly events, room locations, and RSVP links.',
		  href: 'https://www.instagram.com/uscacm/',
		},
		{
		  title: 'Past hackathons',
		  description: 'Explore projects from TrojanHacks and other ACM events on Devpost.',
		  href: 'https://acm-trojan-hacks-2026.devpost.com/',
		},
	  ],
	/**
	 * date: ISO 'YYYY-MM-DD' or null for recurring / TBA
	 * upcoming: include in "Upcoming" filter when true or when date is in the future
	 */
	events: [
		{
			slug: 'industry-night',
			title: 'Industry Night',
			short:
				'Our flagship recruiting evening: meet engineers and recruiters, ask real questions, and explore internships and new grad roles.',
			date: null,
			dateLabel: 'Fall & Spring — dates TBA',
			location: 'USC campus',
			image: 'img/industry/audience.jpg',
			imageAlt: 'Students seated at Industry Night',
			rsvpUrl: 'https://www.instagram.com/uscacm/',
			upcoming: true,
		},
		{
			slug: 'trojanhacks',
			title: 'TrojanHacks',
			short:
				'A beginner-friendly 24-hour hackathon with mentors, workshops, and teams forming on-site—food, swag, and your first shipped project.',
			date: null,
			dateLabel: 'Once per semester — date TBA',
			location: 'USC',
			image: 'img/trojanhacks/squad.jpg',
			imageAlt: 'TrojanHacks participants',
			rsvpUrl: 'https://www.instagram.com/uscacm/',
			upcoming: true,
		},
		{
			slug: 'social',
			title: 'Social events',
			short: 'Bowling, laser tag, beach days, and low-key hangouts with people who love tech.',
			date: null,
			dateLabel: 'Year-round',
			location: 'LA / USC',
			image: 'img/social/bowling.jpg',
			imageAlt: 'ACM social bowling event',
			rsvpUrl: 'https://www.instagram.com/uscacm/',
			upcoming: true,
		},
		{
			slug: 'workshops',
			title: 'Workshops',
			short: 'Git, web dev, interview prep, and tools you will use on day one of an internship.',
			date: null,
			dateLabel: 'Weekly during semester',
			location: 'USC',
			image: 'img/workshop/whiteboard.jpg',
			imageAlt: 'Workshop at a whiteboard',
			rsvpUrl: 'https://www.instagram.com/uscacm/',
			upcoming: true,
		},
	],
	  membershipBullets: [
		{
		  title: 'Attend workshops & events',
		  text: 'Join weekly study halls, technical workshops, speaker sessions, and hackathons throughout the semester.',
		},
		{
		  title: 'Learn from peers',
		  text: 'Connect with seniors and other students to get advice on classes, projects, and internships.',
		},
		{
		  title: 'Meet people in tech',
		  text: 'Go to events like Industry Night and socials to meet recruiters, alumni, and fellow students.',
		},
		{
		  title: 'Lead and Contribute',
		  text: 'Help organize events, join initiatives, or take on leadership roles within ACM.',
		},
	  ], 
	faq: [
		{
			q: 'Who can join ACM @ USC?',
			a: 'We welcome undergrad and grad students at USC who are interested in computing—CS majors, minors, and curious friends from other schools are all invited.',
		},
		{
			q: 'Do I need experience to participate?',
			a: 'No. We run beginner-friendly workshops and TrojanHacks is designed for first-time hackers. Come as you are; we will help you level up.',
		},
		{
			q: 'How do I RSVP for events?',
			a: 'RSVP links and room details are posted on our Instagram and in member announcements. Follow us so you do not miss a date change.',
		},
		{
			q: 'What does membership cost?',
			a: 'Dues and benefits are communicated on the membership form each semester. If cost is a barrier, email us—we want you here.',
		},
	],
	/**
	 * photo: path under site root; use placeholder if missing file
	 * linkedin / instagram: optional full URLs
	 */
	team: [
		{
			name: 'Alethea Nagahara',
			role: 'President',
			classYear: 'Class of 2025',
			major: 'Computer Science',
			photo: 'img/headshot/E-Board Headshots/Alethea_headshot.jpeg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Zachary Chung',
			role: 'Secretary',
			classYear: 'Class of 2025',
			major: 'Computer Science',
			photo: 'img/headshot/E-Board Headshots/Mike_headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Jasmine Luong',
			role: 'Treasurer',
			classYear: 'Class of 2024',
			major: 'Computer Science & Business Administration',
			photo: 'img/headshot/E-Board Headshots/Mike_headshot.jpg',
			note: 'Replace photo: export headshot as JPG (HEIC not supported on web).',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Anish Parkhe',
			role: 'Treasurer',
			classYear: 'Class of 2024',
			major: 'Applied Data Science',
			photo: 'img/headshot/E-Board Headshots/Anish_headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Kaiden Ko',
			role: 'Logistics Coordinator',
			classYear: 'Class of 2025',
			major: 'Computer Science',
			photo: 'img/headshot/E-Board Headshots/kaiden headshot.jpeg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Alana Zhao',
			role: 'Logistics Coordinator',
			classYear: 'Class of 2024',
			major: 'Computer Science',
			photo: 'img/headshot/E-Board Headshots/alana headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Minhao Li',
			role: 'Programming Chair',
			classYear: 'Class of 2026',
			major: 'Computer Science',
			photo: 'img/headshot/E-Board Headshots/Mike_headshot.jpg',
			note: 'Replace with real headshot file name in site-data.js.',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Amanda Huynh',
			role: 'Events Coordinator',
			classYear: 'Class of 2025',
			major: 'Electrical Engineering',
			photo: 'img/headshot/E-Board Headshots/Amanda.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Narineh Zargarian',
			role: 'Events Coordinator',
			classYear: 'Class of 2025',
			major: 'Electrical Engineering',
			photo: 'img/headshot/E-Board Headshots/Mike_headshot.jpg',
			note: 'Replace with real headshot.',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Li Ho',
			role: 'Events Coordinator',
			classYear: 'Class of 2025',
			major: 'Electrical Engineering',
			photo: 'img/headshot/E-Board Headshots/Mike_headshot.jpg',
			note: 'Replace with real headshot.',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Samruddhi Kale',
			role: 'Events Coordinator',
			classYear: 'Class of 2025',
			major: 'Electrical Engineering',
			photo: 'img/headshot/E-Board Headshots/Samruddhi_Headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Cynthia Huang',
			role: 'Social Media Coordinator',
			classYear: 'Class of 2025',
			major: 'Electrical Engineering',
			photo: 'img/headshot/E-Board Headshots/Cynthia_headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Dominic Woetzel',
			role: 'External Affairs',
			classYear: 'Class of 2025',
			major: 'Computer Science & Business Administration',
			photo: 'img/headshot/E-Board Headshots/Dominic Headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Brianna Huynh',
			role: 'External Affairs',
			classYear: 'Class of 2025',
			major: 'Computer Science & Business Administration',
			photo: 'img/headshot/E-Board Headshots/brianna-headshot.jpg',
			linkedin: '',
			instagram: '',
		},
		{
			name: 'Yashvi Hiranandani',
			role: 'Website Designer',
			classYear: 'Class of 2026',
			major: 'Computer Science',
			photo: 'img/headshot/E-Board Headshots/yashvi_headshot.jpg',
			linkedin: '',
			instagram: '',
		},
	],
};
