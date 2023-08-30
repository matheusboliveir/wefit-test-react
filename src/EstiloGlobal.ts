import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: Open Sans;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	body {
		background-color:#2F2E41;
	}
`;
export default EstiloGlobal;
