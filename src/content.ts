import type { ExperienceCardProps } from './components/ExperienceCard.astro';
import type { ProjectCardProps } from './components/ProjectCard.astro';
import Inploi from './assets/inploi.svg';
import Winden from './assets/winden.svg';
import Teya from './assets/teya.svg';
import ReactRouterTypesafe from './assets/react-router-typesafe.svg';
import DrizzleToolbelt from './assets/drizzle-toolbelt.svg';
import ZustandContext from './assets/zustand-context.svg';
import InploiSdk from './assets/inploi-sdk.svg';
import InploiDashboard from './assets/inploi-dashboard.svg';
import WindenUi from './assets/winden-ui.svg';

export const experience: ExperienceCardProps[] = [
	{
		title: 'Inploi',
		fromYear: 2023,
		description: 'Product engineer building the dashboard, sdk and other projects.',
		image: Inploi,
	},
	{
		title: 'Winden',
		fromYear: 2022,
		toYear: 2023,
		description: 'Frontend platform engineer, introduced design system internal library, refactor & tests to modernise legacy codebase.',
		image: Winden,
	},
	{
		title: 'Teya',
		fromYear: 2021,
		toYear: 2022,
		description: 'Frontend engineer, led the frontend development for customer-facing dashboard.',
		image: Teya,
	},
];

export const projects: ProjectCardProps[] = [
	{
		title: 'Inploi SDK',
		description:
			'The official Software Development Kit for Inploi. consists of 8 packages (and counting) with a core and many lightweight ways to implement features of the inploi platform on any website, such as chatbot, job search and job alerts.',
		href: 'https://www.npmjs.com/package/@inploi/sdk',
		image: InploiSdk,
	},
	{
		title: 'Inploi Dashboard',
		description: 'Customer-facing dashboard built on Remix as a BFF interplaying with the Laravel api that powers the inploi platform.',
		image: InploiDashboard,
	},
	{
		title: 'Winden UI',
		description: 'Internal design system library with about 50 components. built for React, styled with Vanilla Extract.',
		href: 'https://vite-and-design-system-ui-docs.vercel.app/?path=/story/atoms-amountinput--uncontrolled-default',
		image: WindenUi,
	},
];

export const openSource: ProjectCardProps[] = [
	{
		title: 'React Router Typesafe',
		description: 'Small typescript library to add type hints to parts of react router 6 that makes it more ergonomic to develop with.',
		href: 'https://github.com/fredericoo/react-router-typesafe',
		image: ReactRouterTypesafe,
		githubStars: { author: 'fredericoo', repo: 'react-router-typesafe' },
	},
	{
		title: 'Drizzle Toolbelt',
		description:
			'Set of utilities to make interacting with queries in Drizzle ORM easier, such as aggregate, transform, and take functions.',
		href: 'https://github.com/fredericoo/drizzle-toolbelt',
		image: DrizzleToolbelt,
		githubStars: { author: 'fredericoo', repo: 'drizzle-toolbelt' },
	},
	{
		title: 'Zustand Context',
		description:
			'Wraps a zustand store in context. useful for making independent zustand stores per-component or making zustand easier to unit test.',
		href: 'https://github.com/fredericoo/zustand-context',
		image: ZustandContext,
		githubStars: { author: 'fredericoo', repo: 'zustand-context' },
	},
	{
		title: 'Tome TCG',
		description:
			'Real-time card game with quick and meta-game oriented matches. currently in progress, being built with Bun, Elysia, React.',
		href: 'https://github.com/fredericoo/tome-tcg',
	},
];
