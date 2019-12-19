import { css } from "lit-element";

export default css`
	.reflectie .block {
		padding: var(--padding);
	}
	.reflectie .text p {
		line-height: 1.8;
	}
	.reflectie .image {
		padding: 0;
	}
	.reflectie .image img {
		max-height: 100%;
		object-fit: cover;
		object-position: right;
	}
`;
