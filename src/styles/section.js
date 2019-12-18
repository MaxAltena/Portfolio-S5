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
		height: var(--content-height);
		width: auto;
		display: inline-flex;

		--local-size: calc(var(--unit) * 10);
		margin-inline-start: calc(var(--local-size) + var(--padding));
	}

	.inner.last {
		margin-inline-end: var(--padding);
	}
`;
