import { css } from "lit-element";

export default css`
	.block {
		background: transparent;
		color: var(--on-primary);
		transition: var(--transition);
		box-sizing: border-box;

		--local-size: calc(calc(var(--content-height) / 2) - calc(var(--padding) / 2));
		width: var(--local-size);
		height: var(--local-size);

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		font-family: var(--font);
		font-size: var(--unit);
	}

	.full {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		margin-inline-end: var(--padding);
	}
	.full.end {
		margin-inline-end: 0;
	}
	.full.document,
	.full.image {
		max-width: calc(100vw - calc(var(--padding) * 2));
	}

	.full.text {
		justify-content: center;
		padding: var(--padding);
		font-size: var(--unit);
		line-height: 1.8;
	}

	.full.document {
		background: var(--document-gray);
	}
	.full.document iframe {
		width: 100%;
		height: 100%;
	}

	.width-50 {
		width: calc(var(--local-size) * 0.5);
	}
	.width-100 {
		width: var(--local-size);
	}
	.width-150 {
		width: calc(var(--local-size) * 1.5);
	}
	.width-200 {
		width: calc(var(--local-size) * 2);
	}
	.width-250 {
		width: calc(var(--local-size) * 2.5);
	}
	.width-300 {
		width: calc(var(--local-size) * 3);
	}
	.width-350 {
		width: calc(var(--local-size) * 3.5);
	}
	.width-400 {
		width: calc(var(--local-size) * 4);
	}
	.width-450 {
		width: calc(var(--local-size) * 4.5);
	}
	.width-500 {
		width: calc(var(--local-size) * 5);
	}
	.width-550 {
		width: calc(var(--local-size) * 5.5);
	}
	.width-600 {
		width: calc(var(--local-size) * 6);
	}
	.width-650 {
		width: calc(var(--local-size) * 6.5);
	}
	.width-700 {
		width: calc(var(--local-size) * 7);
	}
	.width-750 {
		width: calc(var(--local-size) * 7.5);
	}
	.width-800 {
		width: calc(var(--local-size) * 8);
	}
	.width-850 {
		width: calc(var(--local-size) * 8.5);
	}
	.width-900 {
		width: calc(var(--local-size) * 9);
	}
	.width-950 {
		width: calc(var(--local-size) * 9.5);
	}
	.width-1000 {
		width: calc(var(--local-size) * 10);
	}
	.height-25 {
		height: calc(var(--local-size) * 0.25);
	}
	.height-50 {
		height: calc(var(--local-size) * 0.5);
	}
	.height-75 {
		height: calc(var(--local-size) * 0.75);
	}
	.height-100 {
		height: var(--local-size);
	}
	.height-125 {
		height: calc(var(--local-size) * 1.25);
	}
	.height-150 {
		height: calc(var(--local-size) * 1.5);
	}
	.height-175 {
		height: calc(var(--local-size) * 1.75);
	}
	.height-200 {
		height: calc(var(--local-size) * 2);
	}

	.block.topLeft {
		margin: 0 var(--padding) var(--padding) 0;
	}
	.block.bottomLeft {
		margin: 0 var(--padding) 0 0;
	}
	.block.black {
		background: var(--on-primary);
	}
	.block.white {
		background: var(--primary);
	}
	.block.red {
		background: var(--red);
	}
	.block.green {
		background: var(--green);
	}
	.block.yellow {
		background: var(--yellow);
	}
	.block.orange {
		background: var(--orange);
	}
	.block.lightBlue {
		background: var(--light-blue);
	}
	.block.darkBlue {
		background: var(--dark-blue);
	}
	.block.white,
	.block.green,
	.block.yellow,
	.block.orange,
	.block.red,
	.block.darkBlue {
		color: var(--on-primary);
	}
	.block.black,
	.block.lightBlue {
		color: var(--primary);
	}
`;
