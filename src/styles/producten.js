import { css } from "lit-element";

export default css`
	.producten .block.text {
		padding: var(--padding);
	}
	.producten .repeat-background {
		position: relative;
		overflow: hidden;
	}
	.producten .repeat-background:active:before,
	.producten .repeat-background:hover:before,
	.producten .repeat-background:focus:before {
		transform: scale(1);
	}
	.producten .repeat-background:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		transition: transform calc(var(--transition-speed) * 0.5) var(--transition-timing), var(--transition);
		background-repeat: repeat;
		background-position: center;
		transform: scale(1.1);
	}
	.producten a span {
		pointer-events: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
		text-align: center;
	}
	.producten a {
		font-size: calc(var(--unit) * 2.5);
		cursor: pointer;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--white);
		z-index: 1;
		text-align: center;
	}
`;
