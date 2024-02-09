export type WorkItem = {
	id: string;
	title: string;
	description: string;
	tags: string[];
	flyout: Flyout;
	icon?: 'link' | 'github';
	link?: string;
};

export type Flyout = {
	imgs: string[];
	content: string;
};

export default [
	{
		id: '1',
		title: 'Servicecam',
		description:
			'Servicecam enables car mechanics & dealerships to visually document errors and create offers for their customers. It\'s used by more than 20.000 delerships.',
		tags: ['React.js', 'AWS', 'Java', 'Kotlin', 'MySql', 'Node.js', 'React-Native'],
		flyout: {
			imgs: ['flyout/servicecam-1.png', 'flyout/servicecam-2.png', 'flyout/servicecam-3.png'],
			content:
				'Id excepteur culpa incididunt dolore ullamco nulla minim ex ut eu consectetur culpa proident tempor.Id id deserunt aute consequat pariatur.Anim proident aute eiusmod amet in et ullamco exercitation sint irure officia enim.'
		},
		icon: 'link',
		link: 'https://www.volkswagen.ch/de/dienstleistungen/fahrzeug-reparatur/service-cam.html'
	},
	{
		id: '2',
		title: 'TimeTracker',
		description:
			'Mobile App that assists the user by conveniently tracking their working hours and calculating the billable project time for their customers.',
		tags: ['React-Native', 'Typescript', 'Sqlite'],
		flyout: {
			imgs: ['flyout/timetracker-1.png', 'flyout/timetracker-2.png', 'flyout/timetracker-3.png'],
			content:
				'Sit irure ipsum reprehenderit tempor et ex ad voluptate do veniam.Sint exercitation adipisicing enim ipsum velit anim dolor anim tempor.Sunt ex voluptate deserunt veniam mollit.'
		}
	},
	{
		id: '3',
		title: 'Serverless Twitter Bot',
		description:
			"Small app that posts tweets, generated by OpenAI's ChatGPT4. Running on AWS Lambda, based on a cron based event bridge schedule.",
		tags: ['AWS', 'Twitter Api', 'OpenAi', 'Typescript', 'Serverless'],
		flyout: {
			imgs: ['flyout/autotweeter-1.png', 'flyout/autotweeter-2.png', 'flyout/autotweeter-3.png'],
			content:
				'Amet qui amet esse dolor ea commodo consectetur adipisicing ea id esse esse est consequat.Commodo exercitation id ullamco sunt excepteur in ullamco.Culpa voluptate ullamco Lorem exercitation sit consectetur proident ipsum adipisicing laborum adipisicing fugiat culpa.'
		},
		icon: 'github',
		link: 'https://github.com/timges/serverless-twitter-bot'
	},
	{
		id: '4',
		title: 'Beverage Payment',
		description:
			'Mobile App to organize beverages for your office. Allows you to purchase & offer drinks for/from your colleagues',
		tags: ['Typescript', 'React-Native', 'deno', 'MongoDB'],
		flyout: {
			imgs: ['flyout/beverage-1.png', 'flyout/beverage-2.png', 'flyout/beverage-3.png'],
			content:
				'Sint reprehenderit amet adipisicing enim in voluptate velit cupidatat ea amet reprehenderit incididunt.Adipisicing nisi ut reprehenderit occaecat dolore proident in minim proident elit.Eiusmod ad laborum ex qui voluptate pariatur eu amet et ad do sit elit magna.'
		}
	},
	{
		id: '5',
		title: 'Volkswagen GroupUI',
		description:
			'Design system and component library of the Volkswagen Group. It is the standard for all internal Volkswagen applications. Winner of the RedDot Design award in 2019',
		tags: ['Typescript', 'Stencil.js', 'Figma', 'Github Actions', 'AWS', 'Svelte'],
		flyout: {
			imgs: ['flyout/groupui-1.png', 'flyout/groupui-2.png', 'flyout/groupui-3.png'],
			content:
				'Mollit duis exercitation tempor sunt mollit esse nostrud fugiat exercitation esse eiusmod.Fugiat et ex veniam labore ipsum veniam mollit ipsum eiusmod sit minim laboris.Esse reprehenderit ut ad officia ex.'
		},
		icon: 'link',
		link: 'https://www.red-dot.org/de/project/groupui-41315'
	},
	{
		id: '6',
		title: 'Personal Website',
		description:
			'This is the website you are currently visiting. Built with SvelteKit, Typescript & SCSS. Hosted on Vercel.',
		tags: ['Typescript', 'SvelteKit', 'SCSS', 'Github-Actions', 'Vercel'],
		flyout: {
			imgs: ['flyout/website-1.png', 'flyout/website-2.png', 'flyout/website-3.png'],
			content:
				'Exercitation et aute quis et esse ut culpa dolor nulla.Do ut commodo elit occaecat voluptate eu exercitation.Fugiat amet irure culpa do et culpa cupidatat nulla laborum.'
		},
		icon: 'github',
		link: 'https://github.com/timges'
	}
] as WorkItem[];
