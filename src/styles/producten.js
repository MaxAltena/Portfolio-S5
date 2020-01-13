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
		transition: var(--transition);
	}
	.producten a {
		font-size: calc(var(--unit) * 2.5);
		cursor: pointer;
	}
	.producten .img-background {
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		transition: background-size calc(var(--transition-speed) * 0.5) var(--transition-timing), var(--transition);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		user-select: none;
		-webkit-user-drag: none;
		color: var(--white);
	}
	.producten .img-background:active,
	.producten .img-background:hover,
	.producten .img-background:focus {
		background-size: 90%;
	}
	.producten .img-background::before {
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
	.producten .img-background span {
		pointer-events: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--white);
		transition: var(--transition);
		z-index: 1;
		text-align: center;
	}
	.producten .stofloos-data {
		background-color: #2d61ff;
		background-image: url("https://portfolio.maxaltena.com/images/stofloos-data-min.gif");
	}
	.producten .stofware-components {
		background-color: var(--black);
		background-image: url("https://portfolio.maxaltena.com/images/stofware-components-min.gif");
	}
	.producten .input-component {
		background-color: var(--black);
		background-image: url("https://portfolio.maxaltena.com/images/input-component-min.gif");
	}
	.producten .stofware-chat-module {
		background-color: var(--black);
		background-image: url("https://portfolio.maxaltena.com/images/stofware-chat-module-min.gif");
	}
`;
