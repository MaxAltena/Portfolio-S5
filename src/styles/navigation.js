import { css } from "lit-element";

export default css`
	nav {
		transform: rotate(90deg) translateY(calc(var(--nav-height) * -1));
		transform-origin: top left;
		position: sticky;
		height: calc(var(--nav-height) + 1px);
		top: 0;
		left: -1px;
		bottom: -1px;
		right: -1px;
		width: calc(100vw + 2px);
		padding: var(--padding);
		background: var(--on-primary);
		color: var(--primary);
		transition: var(--color-transition);
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		z-index: 1;

		overflow-x: auto;
		overflow-y: hidden;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	nav::-webkit-scrollbar {
		display: none;
	}

	/* nav::before {
		content: "";
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: var(--nav-height);
		background: var(--on-primary);
		color: var(--primary);
		transition: var(--color-transition);
	}

	nav::after {
		content: "";
		z-index: -2;
		position: absolute;
		top: 0;
		left: -5px;
		right: -5px;
		bottom: -5px;
		width: calc(100vw + 10px);
		height: calc(var(--nav-height) + 5px);
		background: var(--on-primary);
		color: var(--primary);
		transition: var(--color-transition);
	} */

	nav ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
		flex-grow: 1;
		height: 100%;
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

	@media (max-width: 450px) {
		nav ul li:last-child {
			margin-inline-end: var(--padding);
		}
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
		font-size: var(--unit);
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
