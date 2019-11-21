import { css } from "lit-element";

export default css`
	nav {
		transform: rotate(90deg) translateY(calc(var(--nav-height) * -1));
		transform-origin: top left;
		position: sticky;
		height: var(--nav-height);
		top: 0;
		left: 0;
		bottom: 0;
		width: 100vw;
		padding: var(--padding);
		background: var(--black);
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		z-index: 1;
	}

	nav ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
		flex-grow: 1;
	}

	div.selector {
		position: absolute;
		top: calc(var(--padding) / 2);
		left: var(--padding);

		width: auto;
		height: auto;
		transition: all 0.3s ease-in-out;
		pointer-events: none;
	}

	div.selector::before,
	div.selector::after {
		background: var(--white);
		width: 100%;
		height: var(--unit);
		content: "";
		position: absolute;
		left: 0;
		transition: all 0.3s ease-in-out;
	}
	div.selector::before {
		top: 0;
	}
	div.selector::after {
		bottom: 0;
	}

	nav ul li a {
		color: var(--white);
		text-transform: lowercase;
		cursor: pointer;
		padding: calc(var(--unit) * 2) calc(var(--unit) * 2) calc(var(--unit) * 3) calc(var(--unit) * 2);
		text-decoration: none;
		font-family: var(--swc-font, sans-serif);
		user-select: none;
		-webkit-user-drag: none;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline-start: calc(var(--padding) * 2);
	}

	footer span {
		color: var(--white);
	}
`;
