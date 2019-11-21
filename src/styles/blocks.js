import { css } from "lit-element";

export default css`
	.block {
		background: transparent;
		color: var(--black);

		--local-size: calc(calc(var(--content-height) / 2) - calc(var(--padding) / 2));
		width: var(--local-size);
		height: var(--local-size);

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.full {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		margin-inline-end: var(--padding);
	}
	.width2 {
		width: calc(var(--local-size) * 2);
	}
	.block.topLeft {
		margin: 0 var(--padding) var(--padding) 0;
	}
	.block.bottomLeft {
		margin: 0 var(--padding) 0 0;
	}
	.block.black {
		background: var(--black);
	}
	.block.white {
		background: var(--white);
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
	.block.light-blue {
		background: var(--light-blue);
	}
	.block.dark-blue {
		background: var(--dark-blue);
	}
	.block.white,
	.block.green,
	.block.yellow,
	.block.orange,
	.block.red,
	.block.dark-blue {
		color: var(--black);
	}
	.block.black,
	.block.light-blue {
		color: var(--white);
	}
`;
