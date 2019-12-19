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
`;
