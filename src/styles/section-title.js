import { css } from "lit-element";

export default css`
	h1 {
		color: var(--black);
		font-family: var(--swc-font, sans-serif);
		width: var(--content-height);
		transform: rotate(-90deg) translateX(calc(var(--content-height) * -1));
		transform-origin: left top;
		margin: 0;
		padding: calc(var(--unit) * 8) 0;
		height: calc(var(--unit) * 18);
		font-size: 2.5em;
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
		height: calc(var(--unit) * 2);
		background: var(--black);
	}
	h1::before {
		top: 0;
	}
	h1::after {
		bottom: 0;
	}
`;
