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
		right: 0;
		width: 100vw;
		padding: var(--padding);
		background: var(--on-primary);
		color: var(--primary);
		transition: var(--color-transition);
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
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	nav ul::-webkit-scrollbar {
		display: none;
	}

	div.selector {
		position: absolute;
		top: calc(var(--padding) / 2);
		left: var(--padding);

		width: auto;
		height: auto;
		transition: all var(--transition-speed) var(--transition-timing);
		pointer-events: none;
	}

	div.selector::before,
	div.selector::after {
		background: var(--primary);
		color: var(--on-primary);
		width: 100%;
		height: calc(var(--unit) * 0.3);
		content: "";
		position: absolute;
		left: 0;
		transition: all var(--transition-speed) var(--transition-timing);
	}
	div.selector::before {
		top: 0;
	}
	div.selector::after {
		bottom: 0;
	}

	nav ul li a {
		color: var(--primary);
		transition: var(--color-transition);
		text-transform: lowercase;
		cursor: pointer;
		padding: calc(var(--unit) * 0.6);
		text-decoration: none;
		text-align: center;
		font-family: var(--font, sans-serif);
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		-webkit-user-drag: none;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline-start: calc(var(--padding) * 2);
		font-weight: 600;
	}

	footer span {
		color: var(--primary);
		transition: var(--color-transition);
	}

	@media only screen and (max-width: 800px) {
		nav ul {
			max-width: none;
		}
		footer {
			display: none;
		}
	}
`;
