import { css } from "lit-element";

export default css`
	h1 {
		color: var(--on-primary);
		transition: var(--color-transition);
		font-family: var(--font, sans-serif);
		width: var(--content-height);
		transform: rotate(-90deg) translateX(calc(var(--content-height) * -1));
		transform-origin: left top;
		margin: 0;
		height: calc(var(--unit) * 10);
		font-size: 3rem;
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
		transition: var(--color-transition);
	}
	h1::before {
		top: 0;
	}
	h1::after {
		bottom: 0;
	}
`;
