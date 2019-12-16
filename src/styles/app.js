import { css } from "lit-element";

export default css`
	.app {
		overflow-y: scroll;
		overflow-x: hidden;
		scrollbar-width: none;
		-ms-overflow-style: none;
		transform: rotate(270deg) translateX(-100%);
		transform-origin: top left;
		position: relative;
		width: 100vh;
		min-height: 100vw;
		height: auto;
		background: var(--primary);
		color: var(--on-primary);
		transition: var(--color-transition);
		scroll-snap-type: y proximity;
	}
	.app::-webkit-scrollbar {
		display: none;
	}

	main {
		transform: rotate(90deg) translateY(-100vh);
		transform-origin: top left;
		white-space: nowrap;
		position: absolute;
		top: 0;
		height: var(--main-height);
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}
`;
