import { LitElement, html } from "lit-element";
import { app, navigation, overlay, section, blocks, leeswijzer, opdracht, producten, reflectie } from "./styles";

class PortfolioApp extends LitElement {
	static get styles() {
		return [app, navigation, overlay, section, blocks, leeswijzer, opdracht, producten, reflectie];
	}

	constructor() {
		super();

		this.overlay = false;
		this.clicked = false;
		this.sections = ["leeswijzer", "opdracht", "producten", "reflectie"];
		this.activeSection = 0;
		this.items = [
			{ slug: "woordenlijst", title: "woordenlijst" },
			{ slug: "stofloos-data", title: "stofloos data" },
			{ slug: "stofware-components", title: "stofware components" },
			{ slug: "input-component", title: "stofware input component" },
			{ slug: "product", title: "chat module" },
		];
		this.activeItem = "";
		this.words = [
			{ word: "Stofloos", meaning: "Bedrijf waar stage is gelopen." },
			{ word: "Stofware", meaning: "Naam voor software die Stofloos ontwikkelt." },
			{
				word: "Datastudio",
				meaning: "Webapplicatie waarmee je data dashboards kunt maken met je eigen databronnen.",
			},
			{
				word: "Repository",
				meaning: "Map of opslagruimte waar (code) projecten kunnen worden opgeslagen. Afkorting is 'repo'.",
			},
			{
				word: "Monorepo",
				meaning:
					"Softwareontwikkelingsstrategie waarbij code voor veel projecten in dezelfde repository wordt opgeslagen.",
			},
			{
				word: "PWA",
				meaning:
					"Progressieve Web Applicatie is een soort applicatiesoftware die via het web wordt geleverd en is gebouwd met behulp van veelgebruikte webtechnologieën, waaronder HTML, CSS en JavaScript.",
			},
			{ word: "Component", meaning: "Onderdeel of element van een groter geheel." },
			{
				word: "LitElement",
				meaning:
					"Techniek waarbij basis klasse wordt gebruikt voor het maken van snelle, lichtgewicht webcomponenten.",
			},
			{
				word: "Edge case",
				meaning: "Probleem of situatie die alleen optreedt bij een extreme (maximale of minimale) parameter.",
			},
		];
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
		[].forEach.call(navigationElements, function (elm) {
			elm.classList.remove("active");
		});

		nextActive.classList.add("active");
	}

	setPage(target) {
		const anchorElement = this.shadowRoot.querySelector(`section[data-target='${target}']`);

		this.clicked = true;

		let padding = getComputedStyle(document.documentElement).getPropertyValue("--padding");
		padding = padding.slice(0, -3);
		padding = parseInt(padding);
		const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

		window.scroll({
			left: anchorElement ? anchorElement.offsetLeft - padding * rem : 0,
			top: 0,
			behavior: "smooth",
		});

		setTimeout(() => (this.clicked = false), 1000);
	}

	handleLinkClick(e) {
		let scrollToHash;

		if (e.path) {
			// Chrome
			if (typeof e.path[0].className === "object") return;

			// Scroll to element when an a tag or element with the class link was clicked
			if (e.path[0].className.includes("link")) scrollToHash = e.path[0].hash;
			else if (e.path[0].className.includes("internal")) scrollToHash = e.path[0].hash;
			else return;
		} else if (e.originalTarget) {
			// Firefox
			if (typeof e.originalTarget.className === "object") return;

			if (e.originalTarget.className.includes("link")) scrollToHash = e.originalTarget.hash;
			else if (e.originalTarget.className.includes("internal")) scrollToHash = e.originalTarget.hash;
			else return;
		} else scrollToHash = e.composedPath()[0].hash;

		if (scrollToHash) {
			scrollToHash = scrollToHash.substr(1);

			if (this.sections.includes(scrollToHash)) {
				const anchorElement = this.shadowRoot.querySelector(`section[name='${scrollToHash}']`);

				this.clicked = true;

				let padding = getComputedStyle(document.documentElement).getPropertyValue("--padding");
				padding = padding.slice(0, -3);
				padding = parseInt(padding);
				const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

				window.scroll({
					left: anchorElement ? anchorElement.offsetLeft - padding * rem : 0,
					top: 0,
					behavior: "smooth",
				});

				setTimeout(() => (this.clicked = false), 1000);
			} else if (this.items.find(_item => _item.slug === scrollToHash)) this.toggleOverlay(true, scrollToHash);
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

	toggleOverlay(overlay, activeItem) {
		this.overlay = overlay;
		if (activeItem) this.activeItem = activeItem;
		this.requestUpdate();
	}

	firstUpdated() {
		// eslint-disable-next-line no-undef
		scrollConverter.activate();

		this.updatePage();

		// Scroll to provided hash after loaded
		setTimeout(() => {
			let scrollToHash = window.location.hash;
			scrollToHash = scrollToHash.substr(1);
			if (!scrollToHash) return;
			if (this.sections.includes(scrollToHash)) {
				const anchorElement = this.shadowRoot.querySelector(`section[name='${scrollToHash}']`);

				if (anchorElement.dataset) this.updatePage(anchorElement.dataset.target);
			} else if (this.items.find(_item => _item.slug === scrollToHash)) this.toggleOverlay(true, scrollToHash);
		}, 500);

		// Check if font is available
		function c(c) {
			b.style.fontFamily = c;
			e.appendChild(b);
			f = b.clientWidth;
			e.removeChild(b);
			return f;
		}
		let f,
			e = document.body,
			b = document.createElement("span");
		b.innerHTML = Array(100).join("wi");
		b.style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;");
		let g = c("monospace"),
			h = c("serif"),
			k = c("sans-serif");
		let isFontAvailable = function (b) {
			return g !== c(b + ",monospace") || k !== c(b + ",sans-serif") || h !== c(b + ",serif");
		};

		this.shadowRoot.querySelectorAll(".repeat-background").forEach(_background => {
			const text = _background.dataset.name;

			const font = `bold 25px ${isFontAvailable("Internacional") ? "Internacional" : "InternacionalExt"}`;
			const color = _background.dataset.color || "black";
			const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(
				`--${_background.dataset.backgroundcolor}`
			);
			const dimensions = this.getTextDimensions(text, font);

			let canvas = document.createElement("canvas");
			canvas.setAttribute("height", 60);
			canvas.setAttribute("width", dimensions.width + 30);

			let context = canvas.getContext("2d");

			context.font = font;
			switch (color) {
				case "white":
					context.fillStyle = "rgba(255,255,255,1)";
					break;
				case "black":
				default:
					context.fillStyle = "rgba(0,0,0,1)";
					break;
			}
			context.fillText(text, 15, 60 * 0.6);
			const id = this.makeID(4);
			_background.classList.add(id);

			let css = `.repeat-background.${id}:before{background:${backgroundColor};background-image: url(${canvas.toDataURL(
					"image/png",
					1
				)});}`,
				style = document.createElement("style");

			this.shadowRoot.appendChild(style);

			style.type = "text/css";
			if (style.styleSheet) style.styleSheet.cssText = css;
			else style.appendChild(document.createTextNode(css));

			_background.style.background = "none";
		});
	}

	updated() {
		/* eslint-disable no-undef */
		if (this.overlay) scrollConverter.deactivate();
		else if (!this.overlay) scrollConverter.activate();
		/* eslint-enable no-undef */
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

	getTextDimensions(text, font) {
		let canvas = document.createElement("canvas");
		let context = canvas.getContext("2d");
		context.font = font;
		const metrics = context.measureText(text);
		return metrics;
	}

	makeID(length) {
		let result = "";
		let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		let charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	renderInnerSection(section) {
		if (!section) return;

		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

		switch (section) {
			case "leeswijzer":
				return html`
					<div class="inner">
						<div class="full first">
							<div class="intro block">
								<p>Stageportfolio S5</p>
								<a href="https://maxaltena.com/" target="_blank" style="margin-block-end: var(--unit);"
									>Max Altena</a
								>
								<p>
									<a
										href="https://docs.google.com/document/d/1cW7S2UyAR8aWSMqr0sNC_yPw1W04syNS8fzDCQRSw0U/"
										target="_blank"
										class="doc"
										>leeswijzer</a
									>
								</p>
								<p><a href="#woordenlijst" class="internal">woordenlijst</a></p>
							</div>
							<div class="intro links block lightBlue">
								${this.sections.map((_section, i) => {
									if (_section === "leeswijzer") return html` <p>inhoudsopgave</p> `;
									else
										return html`
											<a
												@click="${() => this.updatePage(i)}"
												href="#${_section.toLowerCase()}"
												class="link"
											>
												${_section.toLowerCase()}</a
											>
										`;
								})}
							</div>
						</div>
						${isSafari
							? html`
									<div class="full center end width-100 block" style="padding: var(--padding);">
										<a
											href="https://docs.google.com/document/d/1cW7S2UyAR8aWSMqr0sNC_yPw1W04syNS8fzDCQRSw0U/"
											target="_blank"
											class="doc"
											>leeswijzer</a
										>
										<p>
											Hier zou eigenlijk een groot iframe komen met het leeswijzer document erin,
											maar omdat <strong>Safari</strong> niet zo leuk is doet hij het niet. Dus je
											hebt deze leuke tekst met een link.
										</p>
									</div>
							  `
							: html`
									<div class="full end width-150 document block">
										<iframe
											src="https://docs.google.com/document/d/1cW7S2UyAR8aWSMqr0sNC_yPw1W04syNS8fzDCQRSw0U/preview"
											frameborder="0"
											title="Leeswijzer"
										></iframe>
									</div>
							  `}
					</div>
				`;
			case "opdracht":
				return html`
					<div class="inner">
						<div class="full">
							<div class="block text height-150">
								<p>
									De opdracht voor mijn stage was het ontwerpen en het ontwikkelen van een
									geïntegreerde stofware chat module die generiek is opgezet en ingezet kan worden
									voor verschillende projecten.
								</p>
								<p>
									De module moet daarnaast nog aan enkele eisen voldoen. Deze zijn het gemakkelijk
									overdraagbaar maken en de koppeling tussen front en back end werkend maken.
								</p>
								<p>
									Er is stage gelopen bij
									<a href="https://stofloos.nl/" target="_blank">stofloos</a> van 2 September 2019 tot
									en met 24 Januari 2020.
								</p>
							</div>
							<a href="https://stofloos.nl/" target="_blank" class="block green logo height-50">
								<img
									src="https://static.maxaltena.com/image/portfolio-s5/stofloos-logo-min.png"
									alt="Stofloos logo"
								/>
							</a>
						</div>
						<div class="full end image width-450">
							<img
								src="https://static.maxaltena.com/image/portfolio-s5/s5-opdracht-min.jpg"
								alt="Scrumboard op een muur"
							/>
						</div>
					</div>
				`;
			case "producten":
				return html`
					<div class="inner">
						<div class="full">
							<div class="block text">
								<p>
									Al deze producten zijn tijdens de stageperiode gemaakt. De volgende producten zijn
									gemaakt vanuit het project.
								</p>
								<p>
									Bij elk product heb ik mijn uiterste best gedaan om het zo mooi en soms functioneel
									mogelijk te maken.
								</p>
								<p>
									In de leeswijzer wordt er naar alle producten verwezen. Voor de laatste keer
									hieronder:<br />de leeswijzer.
								</p>
							</div>
							<a
								href="https://docs.google.com/document/d/1cW7S2UyAR8aWSMqr0sNC_yPw1W04syNS8fzDCQRSw0U/"
								class="block darkBlue repeat-background external"
								target="_blank"
								data-name="leeswijzer"
								data-backgroundcolor="darkBlue"
								><span>leeswijzer</span></a
							>
						</div>
						<div class="full">
							<a
								href="#woordenlijst"
								class="block orange repeat-background internal"
								data-name="woordenlijst"
								data-backgroundcolor="orange"
								><span>woordenlijst</span></a
							>
							<a
								href="https://docs.google.com/document/d/1K62zx8B6QyolTnbk-e-hvvbOhAChoIPzKODntn7oSpY/"
								target="_blank"
								class="block green repeat-background external"
								data-name="logboek"
								data-backgroundcolor="green"
								><span>logboek</span></a
							>
						</div>
						<div class="full">
							<a
								href="https://docs.google.com/document/d/1a8lroPIhC11S_SQNRVg5YGFnMW1SH9XdeET7nsnA7J8/"
								target="_blank"
								class="block lightBlue repeat-background external"
								data-name="projectplan"
								data-color="white"
								data-backgroundcolor="lightBlue"
								><span>projectplan</span></a
							>
							<a
								href="https://docs.google.com/document/d/1CaszETCNuhY-0TPfQCgh7yk2IWd4He8Jg63xCEJUq-Y/"
								target="_blank"
								class="block red repeat-background external"
								data-name="klant interviews"
								data-backgroundcolor="red"
								><span>klant interviews</span></a
							>
						</div>
						<div class="full">
							<a
								href="https://docs.google.com/document/d/1tCnu7FOvjtm3QTP__BQxucHydDw0d0Hp3GpIUp8hV9s/"
								target="_blank"
								class="block yellow repeat-background external"
								data-name="technische pocs"
								data-color="white"
								data-backgroundcolor="yellow"
								><span>technische pocs</span></a
							>
							<a
								href="https://docs.google.com/document/d/10w_x7qFX0_7He8vqHuSACGVczj6E-nMUI1HSKjZZ36E/"
								target="_blank"
								class="block darkBlue repeat-background external"
								data-name="requirements"
								data-backgroundcolor="darkBlue"
								><span>requirements</span></a
							>
						</div>
						<div class="full">
							<a
								href="https://docs.google.com/document/d/1QjI84SsJwOXTNURsX73uv12CW2bQk5SXc-WT7FPUvTo/"
								target="_blank"
								class="block green repeat-background external"
								data-name="wireframes"
								data-backgroundcolor="green"
								><span>wireframes</span></a
							>
							<a
								href="https://docs.google.com/document/d/105e_4gVtpggsav1pGrHQdQJG80vdPOLQ8jAJZtpLMds/"
								target="_blank"
								class="block lightBlue repeat-background external"
								data-name="werkwijze &amp; tooling"
								data-color="white"
								data-backgroundcolor="lightBlue"
								><span>werkwijze &amp; tooling</span></a
							>
						</div>
						<div class="full">
							<a
								href="https://docs.google.com/document/d/1tioV_d3cDisFzGwMcp02D_rNO3Md2iueAB4NX35S9qw/"
								target="_blank"
								class="block orange repeat-background external"
								data-name="persoonlijke ontwikkeling"
								data-backgroundcolor="orange"
								><span>persoonlijke ontwikkeling</span></a
							>
							<a href="#product" class="block stofware-chat-module img-background internal"
								><span>chat module</span></a
							>
						</div>
						<div class="divider"></div>
						<div class="full">
							<div class="block text">
								<p>
									De volgende producten zijn gemaakt in opdracht van stofloos tijdens mijn
									stageperiode.
								</p>
								<p>Hier heb ik net als de rest van mijn producten mijn uiterste best op gedaan.</p>
							</div>
							<a href="#stofloos-data" class="block stofloos-data img-background internal"
								><span>stofloos data</span></a
							>
						</div>
						<div class="full end">
							<a href="#stofware-components" class="block stofware-components img-background internal"
								><span>stofware components</span></a
							>
							<a href="#input-component" class="block input-component img-background internal"
								><span>input component</span></a
							>
						</div>
					</div>
				`;
			case "reflectie":
				return html`
					<div class="inner last">
						<div class="full text width-250">
							<p>
								Tijdens mijn stage bij Stofloos heb ik diverse dingen geleerd. Verschillende positieve
								en goede dingen op diverse vlakken, maar ook enkele verbeterpunten geïdentificeerd voor
								mijzelf om nog beter mijn talenten en ambities te kunnen ontwikkelen.
							</p>
							<p>
								Waar het deze periode goed ging voor mij als stagiair is dat ik een uiteenlopend aantal
								nieuwe innoverende technieken heb geleerd en toegepast. Hiermee heb ik een werkend
								product kunnen ontwikkelen waar ik erg trots op ben. Om tot dit product te kunnen komen
								ben ik vanaf het begin al aan het onderzoeken naar wat de gebruiker eist en verwacht van
								een chat module.<br /><br />
								<a
									href="https://docs.google.com/document/d/1cW7S2UyAR8aWSMqr0sNC_yPw1W04syNS8fzDCQRSw0U/#heading=h.e1ttg6hn1aer"
									target="_blank"
									class="external"
									>Meer lezen...</a
								>
							</p>
						</div>
						<div class="full end image width-600">
							<img
								src="https://static.maxaltena.com/image/portfolio-s5/s5-reflectie-min.jpg"
								alt="Max die hard aan het werk is"
							/>
						</div>
					</div>
				`;
			default:
				return null;
		}
	}

	renderInnerOverlay(item) {
		if (!item) return null;

		switch (item.slug) {
			case "woordenlijst":
				return html`
					${this.words.map(
						_word => html`
							<p>
								<span class="word">${_word.word}</span>
								<span>${_word.meaning}</span>
							</p>
						`
					)}
				`;
			case "stofloos-data":
				return html`
					<small>Deze opdracht is gemaakt in opdracht van Stofloos.</small>
					<img
						src="https://static.maxaltena.com/image/portfolio-s5/stofloos-data-min.gif"
						alt="Stofloos Data website"
					/>
					<p>
						Live website:
						<a href="https://stofloosdata.nl/" target="_blank" class="external">https://stofloosdata.nl/</a>
					</p>
					<p>
						De website is mijn eerste project geweest met LitElement, een techniek om web componenten te
						maken, waarbij ik met een PWA template van Stofloos aan de slag ben gegaan. Van Stofloos kreeg
						ik een design die gemaakt is door een designer. In het design stond weinig over de
						functionaliteit van secties en componenten. Evenals wat er zou moeten gebeuren als er een ander
						schermformaat was anders dan een normaal desktop scherm. Beide van deze 2, functionaliteit en
						responsiveness, heb ik on the fly erbij ontwikkelt. Het eindresultaat is Stofloos Data.
					</p>
				`;
			case "stofware-components":
				return html`
					<small>Deze opdracht is gemaakt in opdracht van Stofloos.</small>
					<img
						src="https://static.maxaltena.com/image/portfolio-s5/stofware-components-min.gif"
						alt="Stofware Components"
					/>
					<p>
						Stofware Components is een monorepo voor alle componenten en herbruikbare stukken code van
						Stofloos. Hierin staan dus code voor front- en backend. Ik heb hiervoor de frontend code en de
						opzet van de gehele monorepo geupdate.
					</p>
				`;
			case "input-component":
				return html`
					<small>Deze opdracht is gemaakt in opdracht van Stofloos.</small>
					<img
						src="https://static.maxaltena.com/image/portfolio-s5/input-component-min.gif"
						alt="Stofware input component"
					/>
					<p>
						Dit is een input component die ik in opdracht van Stofloos heb gemaakt om hun (binnenkort)
						nieuwe login forms te mogen populeren. Er is veel tijd in gaan zitten om alles werkend te
						krijgen op verschillende browsers en ander edge cases.
					</p>
				`;
			case "product":
				return html`
					<img
						src="https://static.maxaltena.com/image/portfolio-s5/stofware-chat-module-min.gif"
						alt="Stofware chat module"
					/>
					<p>
						De Stofware chat module, het product waar ik mijn hele stage aan heb gewerkt, staat hier dan als
						een GIF hierboven. Ik heb hier heel wat tijd ingestoken, van onderzoeken tot ontwikkelen. Het
						ontwikkelen vond ik hierbij toch het leukste maar was niet het belangrijkste.
					</p>
					<p>De chat module houdt functioneel gezien het volgende in:</p>
					<ul>
						<li>Het sturen en ontvangen van berichten</li>
						<li>Het aanmaken van een nieuw gesprek</li>
						<li>Aangeven als iemand aan het typen is</li>
						<li>Persoonlijke assistent die reageert op vragen en diverse triggers</li>
						<li>Persoonlijke assistent suggesteert diverse acties</li>
					</ul>
				`;
			default:
				return html`
					<p style="text-align: center; margin: var(--padding);">Er is nog niks op deze pagina. 404?</p>
				`;
		}
	}

	render() {
		return html`
			<main>
				${this.sections.map(
					(_section, i) =>
						html`
							<section
								data-target="${i}"
								name="${_section.toLowerCase()}"
								class="${_section.toLowerCase()}"
							>
								<h1>${_section.toLowerCase()}</h1>
								${this.renderInnerSection(_section)}
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
						(_section, i) =>
							html`
								<li>
									<a
										data-target="${i}"
										@click="${() => this.setSelector(i)}"
										class="link ${i === 0 ? " active" : ""}"
										href="#${_section.toLowerCase()}"
									>
										${_section.toLowerCase()}</a
									>
								</li>
							`
					)}
				</ul>
				<footer>
					<span
						>Stageportfolio S5 –
						<a href="https://maxaltena.com/" target="_blank" style="color: var(--primary);"
							>Max Altena</a
						></span
					>
				</footer>
			</nav>

			<div class="overlay" ?active="${this.overlay}">
				<div class="container">
					<div @click="${() => this.toggleOverlay(false)}" class="close">
						<span>x</span><span>sluiten</span><span>x</span>
					</div>
					${this.activeItem
						? html`
								<h2>${this.items.find(_item => _item.slug === this.activeItem).title || "404"}</h2>
								${this.renderInnerOverlay(this.items.find(_item => _item.slug === this.activeItem))}
						  `
						: null}
				</div>
			</div>
		`;
	}
}

customElements.define("portfolio-app", PortfolioApp);
