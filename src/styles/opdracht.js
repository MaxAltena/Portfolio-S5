import { css } from "lit-element";

export default css`
	.opdracht .block {
		padding: var(--padding);
	}
	.opdracht .logo img {
		max-height: 100%;
		max-width: 100%;
		object-fit: contain;
	}
	.opdracht .text p {
		line-height: 1.8;
	}
	.opdracht .image {
		padding: 0;
	}
	.opdracht .image img {
		max-height: 100%;
		object-fit: cover;
	}
`;
