import { css } from "lit-element";

export default css`
	section {
		display: inline-block;
		position: relative;
		width: auto;
		height: var(--content-height);
		scroll-snap-align: start;
		scroll-snap-stop: normal;
		scroll-margin: var(--padding);
		box-sizing: border-box;
		margin-block-start: var(--padding);
		margin-block-end: var(--padding);
		margin-inline-start: var(--padding);
	}

	.inner {
		position: relative;
		display: flex;
		flex-direction: row;
		top: 0;

		height: 100%;

		--local-size: calc(var(--unit) * 10);

		margin-inline-start: calc(var(--local-size) + var(--padding));
	}

	.block.intro {
		overflow: hidden;
	}

	.block.intro p {
		color: var(--on-primary);
		transition: var(--color-transition);
		margin: 0;
		padding: 0;
		text-align: center;
		font-family: var(--font, sans-serif);
		font-weight: 700;
		font-size: calc(var(--unit) * 1.5);
	}

	.block.intro.links p {
		color: var(--on-primary);
		transition: var(--color-transition);
		font-family: var(--font, sans-serif);
		font-weight: 700;
		font-size: calc(var(--unit) * 2.5);
		line-height: calc(var(--unit) * 5);
	}
	.block.intro.links a {
		color: var(--on-primary);
		transition: var(--color-transition);
		font-family: var(--font, sans-serif);
		font-weight: 700;
		font-size: calc(var(--unit) * 2.5);
		line-height: calc(var(--unit) * 5);
		text-decoration: underline overline;
	}
	.block.intro.links a:hover,
	.block.intro.links a:active {
		text-decoration: line-through;
	}
`;
