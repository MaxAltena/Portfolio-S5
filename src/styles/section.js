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

		--local-size: calc(var(--unit) * 34);

		margin-inline-start: calc(var(--local-size) + var(--padding));
	}

	.block.intro p {
		color: var(--on-primary);
		transition: var(--color-transition);
		margin: 0;
		padding: 0;
		text-align: center;
		font-weight: bold;
		font-size: 150%;
		line-height: 175%;
	}

	.block.intro.links p {
		color: var(--on-primary);
		transition: var(--color-transition);
		font-weight: 600;
		font-size: 200%;
		line-height: 225%;
	}
	.block.intro.links a {
		color: var(--on-primary);
		transition: var(--color-transition);
		font-weight: 600;
		font-size: 200%;
		line-height: 225%;
	}
	.block.intro.links a:hover,
	.block.intro.links a:active {
		text-decoration: none;
	}
`;
