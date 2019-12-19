import { css } from "lit-element";

export default css`
	main {
		min-width: 100vw;
		height: var(--main-height);
		position: relative;
		top: 0;
		left: 0;
		bottom: var(--nav-height);

		background: var(--primary);
		color: var(--on-primary);
		transition: var(--transition);

		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--primary);
		color: var(--on-primary);
		opacity: 0;
		pointer-events: none;
		transition: opacity calc(var(--transition-speed) * 0.75) var(--transition-timing), var(--transition);
		z-index: 200;
		overflow-x: hidden;
		overflow-y: auto;
		box-sizing: border-box;
		padding: calc(var(--padding) * 4);
	}

	.overlay[active] {
		opacity: 1;
		pointer-events: auto;
	}

	.overlay .close {
		cursor: pointer;
		padding: calc(var(--padding) * 0.25) 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.overlay .close:active::after,
	.overlay .close:hover::after,
	.overlay .close:focus::after {
		border: 2px solid var(--on-primary);
	}

	.overlay .close::after {
		content: "";
		position: absolute;
		top: calc(50% - 1px);
		left: 0;
		width: 100%;
		height: 0px;
		box-sizing: border-box;
		border: 2px dashed var(--on-primary);
		transition: var(--transition);
		z-index: -1;
	}

	.overlay .close span {
		background: var(--primary);
		color: var(--on-primary);
		transition: var(--transition);
		padding-inline-start: calc(var(--padding) * 0.5);
		padding-inline-end: calc(var(--padding) * 0.5);
	}

	.overlay .close span:first-child {
		padding-inline-start: 0;
	}

	.overlay .close span:last-child {
		padding-inline-end: 0;
	}

	.overlay p {
		line-height: 1.6;
		font-size: var(--unit);
	}

	.container {
		margin: 0 auto;
		max-width: 1280px;
		width: calc(100% - calc(var(--padding) * 2));
	}
	@media only screen and (min-width: 601px) {
		.container {
			width: 85%;
		}
	}
	@media only screen and (min-width: 993px) {
		.container {
			width: 75%;
		}
	}

	h1 {
		color: var(--on-primary);
		transition: var(--transition);
		font-family: var(--font, sans-serif);
		width: var(--content-height);
		transform: rotate(-90deg) translateX(calc(var(--content-height) * -1));
		transform-origin: left top;
		margin: 0;
		height: calc(var(--unit) * 10);
		font-size: calc(var(--unit) * 3);
		font-weight: 900;
		text-align: center;
		text-transform: lowercase;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1::before,
	h1::after {
		content: "";
		position: absolute;
		left: 0;
		width: var(--content-height);
		height: calc(var(--unit) * 1.5);
		background: var(--on-primary);
		transition: var(--transition);
	}
	h1::before {
		top: 0;
	}
	h1::after {
		bottom: 0;
	}

	h2 {
		color: var(--on-primary);
		transition: var(--transition);
		font-family: var(--font, sans-serif);
		position: relative;
		width: 100%;
		margin: var(--padding) 0;
		padding: var(--padding) 0;
		height: auto;
		font-size: calc(var(--unit) * 2.5);
		font-weight: 900;
		text-align: left;
		text-transform: lowercase;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	h2::before,
	h2::after {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		height: calc(var(--unit) * 0.75);
		background: var(--on-primary);
		transition: var(--transition);
	}
	h2::before {
		top: 0;
	}
	h2::after {
		bottom: 0;
	}

	a {
		color: var(--on-primary);
		transition: var(--transition);
		font-family: var(--font, sans-serif);
		font-weight: 700;
		text-decoration: underline overline;
	}
	a:hover,
	a:active,
	a:focus {
		text-decoration: wavy underline overline;
	}
`;
