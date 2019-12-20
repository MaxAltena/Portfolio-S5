import { css } from "lit-element";

export default css`
	.producten .block.text {
		padding: var(--padding);
	}
	.producten .stofloos-data {
		background-color: #2d61ff;
		background-image: url("https://portfolio.maxaltena.com/images/stofloos-data-min.gif");
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		color: var(--white);
		transition: background-size calc(var(--transition-speed) * 0.5) var(--transition-timing), var(--transition);
		position: relative;
		font-size: calc(var(--unit) * 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		user-select: none;
		-webkit-user-drag: none;
	}
	.producten .stofloos-data:active,
	.producten .stofloos-data:hover,
	.producten .stofloos-data:focus {
		background-size: 90%;
	}
	.producten .stofloos-data::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		opacity: 0.33;
		background: var(--black);
		transition: var(--transition);
	}
	.producten .stofloos-data span {
		pointer-events: none;
		font-size: calc(var(--unit) * 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--white);
		z-index: 1;
	}
`;
