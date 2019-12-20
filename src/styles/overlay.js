import { css } from "lit-element";

export default css`
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
		padding: calc(var(--padding) * 4) var(--padding);
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

	.overlay .container {
		margin: 0 auto;
		max-width: 1280px;
		width: calc(100% - calc(var(--padding) * 2));
	}
	@media only screen and (min-width: 601px) {
		.overlay .container {
			width: 85%;
		}
	}
	@media only screen and (min-width: 993px) {
		.overlay .container {
			width: 75%;
		}
	}

	.overlay p .word {
		font-weight: 900;
	}

	.overlay p .word::after {
		content: " – ";
		font-weight: 600;
	}

	.overlay img {
		max-width: 100%;
	}
`;
