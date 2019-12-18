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
	}
	.full.end {
		margin-inline-end: var(--padding);
	}
	.width1Half {
		width: calc(var(--local-size) * 1.5);
	}
	.width2 {
		width: calc(var(--local-size) * 2);
	}

	.document {
		max-width: calc(100vw - var(--padding));
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
		color: var(--black);
	}
	.block.black,
	.block.lightBlue {
		color: var(--white);
	}
`;
