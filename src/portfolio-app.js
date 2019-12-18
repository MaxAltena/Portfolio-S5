import { LitElement, html } from "lit-element";
import { app, navigation, section, sectionTitle, blocks, leeswijzer, opdracht, producten, reflectie } from "./styles";

class PortfolioApp extends LitElement {
	static get styles() {
		return [app, navigation, section, sectionTitle, blocks, leeswijzer, opdracht, producten, reflectie];
	}

	constructor() {
		super();

		this.sections = ["Leeswijzer", "Opdracht", "Producten", "Reflectie"];
		this.clicked = false;
		this.activeSection = 0;
	}

	updatePage(nextSection) {
		if (nextSection) {
			this.activeSection = nextSection;
			this.clicked = true;
			setTimeout(() => (this.clicked = false), 1000);
		}
		this.setSelector(this.activeSection);
		this.setPage(this.activeSection);
	}

	setSelector(target) {
		const selector = this.shadowRoot.querySelector(".selector");
		const nextActive = this.shadowRoot.querySelector(`a[data-target='${target}']`);

		selector.style.top = nextActive.offsetTop + "px";
		selector.style.left = nextActive.offsetLeft + "px";
		selector.style.width = nextActive.offsetWidth + "px";
		selector.style.height = nextActive.offsetHeight + "px";

		let navigationElements = this.shadowRoot.querySelectorAll("nav ul li a");
		[].forEach.call(navigationElements, function(elm) {
			elm.classList.remove("active");
		});

		nextActive.classList.add("active");
	}

	setPage(target) {
		const scrollElement = this.shadowRoot.querySelector(".app");
		const anchorElement = this.shadowRoot.querySelector(`section[data-target='${target}']`);

		this.clicked = true;
		scrollElement.scrollTo({
			left: 0,
			top: anchorElement ? anchorElement.offsetLeft - 25 : 0,
			behavior: "smooth"
		});
		setTimeout(() => (this.clicked = false), 1000);
	}

	handleLinkClick(e) {
		let scrollToHash;

		if (e.path) {
			// Chrome
			if (typeof e.path[0].className === "object") return;

			// Scroll to element when an a tag or element with the class link was clicked
			if (e.path[0].className.includes("link")) {
				scrollToHash = e.path[0].hash || window.location.hash;
			}
		} else if (e.originalTarget) {
			// Firefox
			if (typeof e.originalTarget.className === "object") return;

			if (e.originalTarget.className.includes("link")) {
				scrollToHash = e.originalTarget.hash || window.location.hash;
			} else return;
		} else return;

		if (scrollToHash) {
			scrollToHash = scrollToHash.substr(1);

			const scrollElement = this.shadowRoot.querySelector(".app");

			const anchorElement = this.shadowRoot.querySelector(`section[name='${scrollToHash}']`);

			this.clicked = true;
			scrollElement.scrollTo({
				left: 0,
				top: anchorElement ? anchorElement.offsetLeft - 25 : 0,
				behavior: "smooth"
			});
			setTimeout(() => (this.clicked = false), 1000);
		}
	}

	handleScroll(e) {
		if (this.clicked) return;

		const sections = this.shadowRoot.querySelectorAll("section");
		let biggerSections = [];

		sections.forEach(section => {
			if (
				section.offsetLeft - window.innerWidth / 2 <= e.target.scrollTop ||
				section.offsetLeft + 50 <= e.target.scrollTop
			)
				biggerSections.push(section);
		});

		if (biggerSections.length >= 1) {
			if (this.activeSection === biggerSections[biggerSections.length - 1].dataset.target) return;
			this.activeSection = biggerSections[biggerSections.length - 1].dataset.target;
			this.setSelector(this.activeSection);
		} else this.setSelector(0);
	}

	handleResize() {
		this.setSelector(this.activeSection);
	}

	firstUpdated() {
		this.updatePage();

		// Scroll to provided hash after loaded
		setTimeout(() => {
			let scrollToHash = window.location.hash;
			scrollToHash = scrollToHash.substr(1);

			const anchorElement = this.shadowRoot.querySelector(`section[name='${scrollToHash}']`);

			this.section = anchorElement.dataset.target;
			this.updatePage();
		}, 500);
	}

	connectedCallback() {
		super.connectedCallback();

		window.addEventListener("resize", this.handleResize.bind(this));
		document.addEventListener("click", this.handleLinkClick.bind(this));
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		window.removeEventListener("resize", this.handleResize.bind(this));
		document.removeEventListener("click", this.handleLinkClick.bind(this));
	}

	renderInnerSection(section) {
		switch (section) {
			case "Leeswijzer":
				return html`
					<div class="inner leeswijzer">
						<div class="full first">
							<div class="intro block">
								<p>Stageportfolio S5</p>
								<p style="margin-block-end: var(--unit);">Max Altena</p>
								<p>leeswijzer</p>
							</div>
							<div class="intro links block lightBlue">
								${this.sections.map((section, i) => {
									if (section === "Leeswijzer")
										return html`
											<p>inhoudsopgave</p>
										`;
									else
										return html`
											<a @click="${() => this.updatePage(i)}" href="#${section.toLowerCase()}">
												${section.toLowerCase()}</a
											>
										`;
								})}
							</div>
						</div>
						<div class="full end width1Half document block green">leeswijzer pdf</div>
					</div>
				`;
			case "Opdracht":
				return html`
					<div class="inner">
						<div class="full">
							<div class="block red"></div>
							<div class="block green"></div>
						</div>
						<div class="full">
							<div class="block darkBlue"></div>
							<div class="block lightBlue"></div>
						</div>
						<div class="full">
							<div class="block orange"></div>
						</div>
					</div>
				`;
			case "Producten":
				return html`
					<div class="inner">
						<div class="full">
							<div class="block orange"></div>
							<div class="block black"></div>
						</div>
						<div class="full">
							<div class="block white"></div>
							<div class="block red"></div>
						</div>
						<div class="full">
							<div class="block darkBlue"></div>
						</div>
					</div>
				`;
			case "Reflectie":
				return html`
					<div class="inner last">
						<div class="full">
							<div class="block red"></div>
							<div class="block green"></div>
						</div>
						<div class="full">
							<div class="block darkBlue"></div>
							<div class="block lightBlue"></div>
						</div>
						<div class="full">
							<div class="block orange"></div>
						</div>
					</div>
				`;
			default:
				return null;
		}
	}

	render() {
		return html`
			<div class="app" @scroll="${this.handleScroll}">
				<main>
					${this.sections.map(
						(section, i) =>
							html`
								<section data-target="${i}" name="${section.toLowerCase()}">
									<h1>${section}</h1>
									${this.renderInnerSection(section)}
								</section>
							`
					)}
				</main>

				<nav>
					<style>
						nav ul {
							max-width: ${this.sections.length * 125}px;
						}
					</style>
					<ul>
						<div class="selector"></div>
						${this.sections.map(
							(section, i) =>
								html`
									<li>
										<a
											data-target="${i}"
											@click="${() => this.setSelector(i)}"
											class="link ${i === 0 ? " active" : ""}"
											href="#${section.toLowerCase()}"
										>
											${section}</a
										>
									</li>
								`
						)}
					</ul>
					<footer>
						<span>Stageportfolio S5 - Max Altena</span>
					</footer>
				</nav>
			</div>
		`;
	}
}

customElements.define("portfolio-app", PortfolioApp);