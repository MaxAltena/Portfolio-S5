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

	p {
		font-family: var(--font, sans-serif);
		font-weight: 600;
		font-size: var(--unit);
		line-height: 1.6;
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
