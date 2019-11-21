import { LitElement, html, css } from "lit-element";

class LitApp extends LitElement {
	static get styles() {
		return css`
			.app {
				height: 100vh;
			}

			main {
				height: calc(100vh - 122px);
				width: auto;
				padding: 25px;
				background: white;
				position: relative;
				display: inline-flex;
				flex-direction: row;
			}

			main div {
				width: 500px;
				height: 100%;
				background: gray;
				margin-right: 25px;
			}

			main div p {
				margin: 0;
			}

			nav {
				position: fixed;
				left: 0;
				bottom: 0;
				right: 0;
				height: 22px;
				padding: 25px;
				background: black;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			nav ul {
				display: flex;
				justify-content: space-between;
				align-items: center;
				list-style: none;
				padding: 0;
				margin: 0;
				flex-grow: 1;
			}

			nav ul li {
				color: white;
			}

			footer {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-inline-start: 50px;
			}

			footer span {
				color: white;
			}
		`;
	}

	render() {
		return html`
			<div class="app">
				<main>
					<div>
						<p>Tekst enzo</p>
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</main>
				<nav>
					<ul>
						<li>Leeswijzer</li>
						<li>Opdracht</li>
						<li>Producten</li>
						<li>Reflectie</li>
					</ul>
					<footer>
						<span>Stageportfolio Max Altena</span>
					</footer>
				</nav>
			</div>
		`;
	}
}

customElements.define("lit-app", LitApp);
