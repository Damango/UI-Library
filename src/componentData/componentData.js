import DropDownMenu from "../LibraryComponents/DropDownMenu/DropDownMenu";
import NavBar from "../LibraryComponents/NavBar/NavBar";
import DateSelector from "../LibraryComponents/DateSelector/DateSelector";
import SelectorBar from "../LibraryComponents/SelectorBar/SelectorBar";
import MenuPopUp from "../LibraryComponents/MenuPopUp/MenuPopUp";
import MenuPopUpButton from "../LibraryComponents/MenuPopUp/MenuPopUpButton/MenuPopUpButton";

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
		component: (
			<MenuPopUp options={["Option 1", "Option 2", "Option 3", "Option 4"]}>
				<MenuPopUpButton
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z" />
						</svg>
					}
					text="Move Branch"
				/>
				<MenuPopUpButton
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
						</svg>
					}
					text="Refresh"
					onClick={() => {
						alert("test");
					}}
				/>
				<MenuPopUpButton
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
						</svg>
					}
					text="Settings"
				/>
				<MenuPopUpButton
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M256 224C238.4 224 223.1 238.4 223.1 256S238.4 288 256 288c17.63 0 32-14.38 32-32S273.6 224 256 224zM470.2 128c-10.88-19.5-40.51-50.75-116.3-41.88C332.4 34.88 299.6 0 256 0S179.6 34.88 158.1 86.12C82.34 77.38 52.71 108.5 41.83 128c-16.38 29.38-14.91 73.12 25.23 128c-40.13 54.88-41.61 98.63-25.23 128c29.13 52.38 101.6 43.63 116.3 41.88C179.6 477.1 212.4 512 256 512s76.39-34.88 97.9-86.13C368.5 427.6 441 436.4 470.2 384c16.38-29.38 14.91-73.13-25.23-128C485.1 201.1 486.5 157.4 470.2 128zM95.34 352c-4.001-7.25-.1251-24.75 15-48.25c6.876 6.5 14.13 12.87 21.88 19.12c1.625 13.75 4.001 27.13 6.751 40.13C114.3 363.9 99.09 358.6 95.34 352zM132.2 189.1C124.5 195.4 117.2 201.8 110.3 208.2C95.22 184.8 91.34 167.2 95.34 160c3.376-6.125 16.38-11.5 37.88-11.5c1.75 0 3.876 .375 5.751 .375C136.1 162.2 133.8 175.6 132.2 189.1zM256 64c9.502 0 22.25 13.5 33.88 37.25C278.6 105 267.4 109.3 256 114.1C244.6 109.3 233.4 105 222.1 101.2C233.7 77.5 246.5 64 256 64zM256 448c-9.502 0-22.25-13.5-33.88-37.25C233.4 407 244.6 402.7 256 397.9c11.38 4.875 22.63 9.135 33.88 12.89C278.3 434.5 265.5 448 256 448zM256 336c-44.13 0-80.02-35.88-80.02-80S211.9 176 256 176s80.02 35.88 80.02 80S300.1 336 256 336zM416.7 352c-3.626 6.625-19 11.88-43.63 11c2.751-12.1 5.126-26.38 6.751-40.13c7.752-6.25 15-12.63 21.88-19.12C416.8 327.2 420.7 344.8 416.7 352zM401.7 208.2c-6.876-6.5-14.13-12.87-21.88-19.12c-1.625-13.5-3.876-26.88-6.751-40.25c1.875 0 4.001-.375 5.751-.375c21.5 0 34.51 5.375 37.88 11.5C420.7 167.2 416.8 184.8 401.7 208.2z" />
						</svg>
					}
					text="New Experiment"
					subMenu={["test 1", "test 2", "test 3", "test 4", "test 5"]}
				/>
			</MenuPopUp>
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
