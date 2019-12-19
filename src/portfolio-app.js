import { LitElement, html } from "lit-element";
import { app, navigation, section, sectionTitle, blocks, leeswijzer, opdracht, producten, reflectie } from "./styles";

class PortfolioApp extends LitElement {
	static get styles() {
		return [app, navigation, section, sectionTitle, blocks, leeswijzer, opdracht, producten, reflectie];
	}

	constructor() {
		super();

		this.sections = ["leeswijzer", "opdracht", "producten", "reflectie"];
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
		const anchorElement = this.shadowRoot.querySelector(`section[data-target='${target}']`);

		this.clicked = true;

		window.scroll({
			left: anchorElement ? anchorElement.offsetLeft - 25 : 0,
			top: 0,
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

			const anchorElement = this.shadowRoot.querySelector(`section[name='${scrollToHash}']`);

			this.clicked = true;
			window.scroll({
				left: anchorElement ? anchorElement.offsetLeft - 25 : 0,
				top: 0,
				behavior: "smooth"
			});
			setTimeout(() => (this.clicked = false), 1000);
		}
	}

	handleScroll() {
		if (this.clicked) return;

		const sections = this.shadowRoot.querySelectorAll("section");
		let biggerSections = [];

		sections.forEach(section => {
			if (
				section.offsetLeft - window.innerWidth / 2 <= window.scrollX ||
				section.offsetLeft + 50 <= window.scrollX
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
		// eslint-disable-next-line no-undef
		scrollConverter.activate();

		this.updatePage();

		// Scroll to provided hash after loaded
		setTimeout(() => {
			let scrollToHash = window.location.hash;
			scrollToHash = scrollToHash.substr(1);

			const anchorElement = this.shadowRoot.querySelector(`section[name='${scrollToHash}']`);

			this.section = anchorElement.dataset.target;

			this.updatePage(this.section);
		}, 500);
	}

	connectedCallback() {
		super.connectedCallback();

		window.addEventListener("resize", this.handleResize.bind(this));
		window.addEventListener("scroll", this.handleScroll.bind(this));
		document.addEventListener("click", this.handleLinkClick.bind(this));
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		window.removeEventListener("resize", this.handleResize.bind(this));
		window.removeEventListener("scroll", this.handleScroll.bind(this));
		document.removeEventListener("click", this.handleLinkClick.bind(this));
	}

	renderInnerSection(section) {
		switch (section) {
			case "leeswijzer":
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
									if (section === "leeswijzer")
										return html`
											<p>inhoudsopgave</p>
										`;
									else
										return html`
											<a
												@click="${() => this.updatePage(i)}"
												href="#${section.toLowerCase()}"
												class="link"
											>
												${section.toLowerCase()}</a
											>
										`;
								})}
							</div>
						</div>
						<div class="full end width-200 document block red">leeswijzer pdf</div>
					</div>
				`;
			case "opdracht":
				return html`
					<div class="inner">
						<div class="full">
							<div class="block text height-150">
								<p>
									De opdracht die voor mijn stage is vastgesteld is het maken van een chat module. //
									TODO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur,
									iure culpa iste consequatur hic quaerat saepe dolore aliquam voluptates ipsa aut
									assumenda ea laudantium magnam atque quis natus. Iusto!
								</p>
							</div>
							<div class="block green logo height-50">
								<img src="./images/stofloos-logo.png" alt="Stofloos logo" />
							</div>
						</div>
						<div class="full end image width-450">
							<img src="./images/opdracht.jpg" alt="Scrumboard op een muur" />
						</div>
					</div>
				`;
			case "producten":
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
			case "reflectie":
				return html`
					<div class="inner last">
						<div class="full text width-250">
							<p>
								Reflectie van mijn stageperiode // TODO Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Suscipit commodi esse at rerum quisquam voluptas! Minima quia tempore
								neque sunt odio, cumque quaerat temporibus voluptas nihil ut exercitationem omnis totam.
							</p>
						</div>
						<div class="full end image width-600">
							<img src="./images/reflectie.jpg" alt="Max die hard aan het werk is" />
						</div>
					</div>
				`;
			default:
				return null;
		}
	}

	render() {
		return html`
			<main>
				${this.sections.map(
					(section, i) =>
						html`
							<section
								data-target="${i}"
								name="${section.toLowerCase()}"
								class="${section.toLowerCase()}"
							>
								<h1>${section.toLowerCase()}</h1>
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
		`;
	}
}

customElements.define("portfolio-app", PortfolioApp);
