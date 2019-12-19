import { css } from "lit-element";

export default css`
	.leeswijzer .block.intro {
		overflow: hidden;
	}

	.leeswijzer .block.intro p {
		color: var(--on-primary);
		transition: var(--transition);
		margin: 0;
		padding: 0;
		text-align: center;
		font-family: var(--font, sans-serif);
		font-weight: 700;
		font-size: calc(var(--unit) * 2.5);
	}

	.leeswijzer .links p {
		color: var(--on-primary);
		transition: var(--transition);
		font-family: var(--font, sans-serif);
		font-weight: 700;
		font-size: calc(var(--unit) * 2.5);
		line-height: calc(var(--unit) * 5);
	}
	.leeswijzer .links a {
		color: var(--on-primary);
		transition: var(--transition);
		font-family: var(--font, sans-serif);
		font-weight: 700;
		font-size: calc(var(--unit) * 2.5);
		line-height: calc(var(--unit) * 5);
		text-decoration: underline overline;
	}
	.leeswijzer .links a:hover,
	.leeswijzer .links a:active {
		text-decoration: line-through;
	}
`;
