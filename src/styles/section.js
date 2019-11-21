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

		--local-size: calc(calc(var(--unit) * 6) + calc(var(--unit) * 8) + calc(var(--unit) * 18));

		margin-inline-start: calc(var(--local-size) + var(--padding));
	}

	.block.intro p {
		margin: 0;
		padding: 0;
		text-align: center;
		font-weight: bold;
		font-size: 1.5em;
		line-height: 1.8em;
	}

	.block.intro.links p {
		font-weight: 600;
		font-size: 2.2em;
		line-height: 2.5em;
	}
	.block.intro.links a {
		color: var(--white);
		font-weight: 600;
		font-size: 2.2em;
		line-height: 2.5em;
	}
	.block.intro.links a:hover,
	.block.intro.links a:active {
		text-decoration: none;
	}
`;
