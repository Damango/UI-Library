import DropDownMenu from "../LibraryComponents/DropDownMenu/DropDownMenu";
import NavBar from "../LibraryComponents/NavBar/NavBar";
import DateSelector from "../LibraryComponents/DateSelector/DateSelector";
import SelectorBar from "../LibraryComponents/SelectorBar/SelectorBar";
import MenuPopUp from "../LibraryComponents/MenuPopUp/MenuPopUp";

//Code Formatter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

let componentData = [
	{
		title: "Drop Down Menu",
		component: (
			<DropDownMenu
				dropDownOptions={["Twisted Fate", "Veigar", "Orianna", "Darius"]}
			/>
		),
		usage: [
			{
				example: (
					<SyntaxHighlighter language="jsx" style={materialDark}>
						{`const [state, setState] = useState('');

<DropDownMenu setState={setState} dropDownOptions={["Twisted Fate", "Veigar", "Orianna", "Darius"]}/>`}
					</SyntaxHighlighter>
				),
				description:
					"--dropDownOptions is an array of strings to represent the options inside of the drop down menu. --setState property is the state you want the drop down menu to change. ",
			},
			{
				example: (
					<SyntaxHighlighter language="jsx" style={materialDark}>
						{`<DropDownMenu dropDownOptions={["Twisted Fate", "Veigar", "Orianna", "Darius"]}/>`}
					</SyntaxHighlighter>
				),
				description:
					"--setState is not needed if would like to see how it would fit in with your web design",
			},
		],
		properties: [
			{
				name: "Options",
				default: "[Option 1, Option 2, Option 3, Option 4]",
				type: "Array",
				description: "An array of text options to select",
			},
			{
				name: "setState",
				default: "undefined",
				type: "Function",
				description:
					"A setState function to change the state to the selected option in your React Components.",
			},
			{
				name: "Obilivion",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
			{
				name: "THE BILLIONAIRE",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
		],
	},
	{
		title: "Navigation Bar",
		component: (
			<NavBar
				navLinks={[
					{
						text: "Dashboard",
						link: "https://google.com",
						subLinks: [
							{ text: "Computer Science", link: "https://google.com" },
							{ text: "Calculus", link: "https://google.com" },
							{ text: "Electrical Engineering", link: "https://google.com" },
							{ text: "Computer Science", link: "https://google.com" },
							{ text: "Calculus", link: "https://google.com" },
							{ text: "Electrical Engineering", link: "https://google.com" },
						],
					},
					{ text: "Customization", link: "https://google.com" },
					{
						text: "Templates",
						link: "https://google.com",
						subLinks: [
							{ text: "Angular", link: "https://angular.io/" },
							{ text: "React", link: "https://reactjs.org/" },
							{ text: "Vue", link: "https://vuejs.org/" },
						],
					},
					{ text: "Blog", link: "https://google.com" },
					{ text: "Component API", link: "https://google.com" },
				]}
			/>
		),
		usage: [],
		properties: [
			{
				name: "Collapseable",
				default: "false",
				type: "boolean",
				description:
					"A boolean to determine if the navigation bar is collapseable or not.",
			},
			{
				name: "Logo",
				default: "false",
				type: "SVG or HTML Element",
				description:
					"A boolean for a footer to be placed on the bottom of the nav bar.",
			},
			{
				name: "Footer",
				default: "false",
				type: "boolean",
				description:
					"A boolean for a footer to be placed on the bottom of the nav bar.",
			},
		],
	},
	{
		title: "Date Selector",
		component: <DateSelector />,
		usage: [],
		properties: [
			{
				name: "Options",
				default: "[Option 1, Option 2, Option 3, Option 4]",
				type: "Array",
				description: "An array of text options to select",
			},
			{
				name: "Test",
				default: "673.53",
				type: "Inter / Variable",
				description: "A place holder for a property to fill text.",
			},
			{
				name: "Obilivion",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
			{
				name: "THE BILLIONAIRE",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
		],
	},
	{
		title: "Selector Bar",
		component: <SelectorBar />,
		usage: [],
		properties: [
			{
				name: "Options",
				default: "[Option 1, Option 2, Option 3, Option 4]",
				type: "Array",
				description: "An array of text options to select",
			},
			{
				name: "Test",
				default: "673.53",
				type: "Inter / Variable",
				description: "A place holder for a property to fill text.",
			},
			{
				name: "Obilivion",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
			{
				name: "THE BILLIONAIRE",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
		],
	},
	{
		title: "Menu Pop Up",
		component: <MenuPopUp />,
		usage: [
			{
				example: (
					<SyntaxHighlighter language="jsx" style={materialDark}>
						{`const [state, setState] = useState('');

<DropDownMenu setState={setState} dropDownOptions={["Twisted Fate", "Veigar", "Orianna", "Darius"]}/>`}
					</SyntaxHighlighter>
				),
				description:
					"--dropDownOptions is an array of strings to represent the options inside of the drop down menu. --setState property is the state you want the drop down menu to change. ",
			},
			{
				example: (
					<SyntaxHighlighter language="jsx" style={materialDark}>
						{`<DropDownMenu dropDownOptions={["Twisted Fate", "Veigar", "Orianna", "Darius"]}/>`}
					</SyntaxHighlighter>
				),
				description:
					"--setState is not needed if would like to see how it would fit in with your web design",
			},
		],
		properties: [
			{
				name: "Options",
				default: "[Option 1, Option 2, Option 3, Option 4]",
				type: "Array",
				description: "An array of options to select from",
			},
			{
				name: "setState",
				default: "undefined",
				type: "Function",
				description:
					"A setState function to change the state to the selected option in your React Components.",
			},
			{
				name: "Obilivion",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
			{
				name: "THE BILLIONAIRE",
				default: "doing the test",
				type: "String / Variable",
				description: "A place holder for a property to fill text.",
			},
		],
	},
];

export default componentData;
