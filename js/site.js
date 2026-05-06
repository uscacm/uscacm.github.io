(function () {
	'use strict';

	function escapeHtml(s) {
		return String(s)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function isEventUpcoming(ev) {
		if (!ev.upcoming) return false;
		if (!ev.date) return true;
		var d = new Date(ev.date + 'T12:00:00');
		var today = new Date();
		today.setHours(0, 0, 0, 0);
		return d >= today;
	}

	function renderEvents(container, data, filter) {
		if (!container || !data.events) return;
		var list = data.events.filter(function (ev) {
			if (filter === 'upcoming') return isEventUpcoming(ev);
			return true;
		});
		container.innerHTML = list
			.map(function (ev) {
				return (
					'<article class="event-card" data-aos="fade-up" data-aos-duration="600">' +
					'<div class="event-card__media">' +
					'<img src="' +
					escapeHtml(ev.image) +
					'" alt="' +
					escapeHtml(ev.imageAlt || ev.title) +
					'" loading="lazy" width="640" height="400">' +
					'</div>' +
					'<div class="event-card__body">' +
					'<h3 class="event-card__title">' +
					escapeHtml(ev.title) +
					'</h3>' +
					'<p class="event-card__meta"><span class="event-card__icon" aria-hidden="true">&#128197;</span> ' +
					escapeHtml(ev.dateLabel || 'Date TBA') +
					'</p>' +
					'<p class="event-card__meta"><span class="event-card__icon" aria-hidden="true">&#128205;</span> ' +
					escapeHtml(ev.location || 'TBA') +
					'</p>' +
					'<p class="event-card__desc">' +
					escapeHtml(ev.short) +
					'</p>' +
					'<a class="btn btn-primary btn-block" href="' +
					escapeHtml(ev.rsvpUrl || data.rsvpUrl) +
					'" target="_blank" rel="noopener noreferrer">RSVP &amp; details</a>' +
					'</div></article>'
				);
			})
			.join('');
	}

	function renderTeam(container, data) {
		if (!container || !data.team) return;
		container.innerHTML = data.team
			.map(function (m) {
				var links = '';
				if (m.linkedin) {
					links +=
						'<a class="team-card__social" href="' +
						escapeHtml(m.linkedin) +
						'" target="_blank" rel="noopener noreferrer" aria-label="' +
						escapeHtml(m.name) +
						' on LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a>';
				}
				if (m.instagram) {
					links +=
						'<a class="team-card__social" href="' +
						escapeHtml(m.instagram) +
						'" target="_blank" rel="noopener noreferrer" aria-label="' +
						escapeHtml(m.name) +
						' on Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>';
				}
				return (
					'<article class="team-card" data-aos="fade-up" data-aos-duration="500">' +
					'<div class="team-card__photo">' +
					'<img src="' +
					escapeHtml(m.photo) +
					'" alt="' +
					escapeHtml(m.name) +
					'" loading="lazy" width="280" height="280">' +
					'</div>' +
					'<h3 class="team-card__name">' +
					escapeHtml(m.name) +
					'</h3>' +
					'<p class="team-card__role">' +
					escapeHtml(m.role) +
					'</p>' +
					'<p class="team-card__meta">' +
					escapeHtml(m.classYear) +
					'</p>' +
					'<p class="team-card__major">' +
					escapeHtml(m.major) +
					'</p>' +
					(links ? '<div class="team-card__links">' + links + '</div>' : '') +
					'</article>'
				);
			})
			.join('');
	}

	function renderFaq(container, data) {
		if (!container || !data.faq) return;
		container.innerHTML = data.faq
			.map(function (item, i) {
				var id = 'faq-panel-' + i;
				var btnId = 'faq-btn-' + i;
				return (
					'<div class="faq-item">' +
					'<button type="button" class="faq-item__btn" id="' +
					btnId +
					'" aria-expanded="false" aria-controls="' +
					id +
					'">' +
					escapeHtml(item.q) +
					'<span class="faq-item__chev" aria-hidden="true"></span></button>' +
					'<div class="faq-item__panel" id="' +
					id +
					'" role="region" aria-labelledby="' +
					btnId +
					'" hidden>' +
					'<p>' +
					escapeHtml(item.a) +
					'</p></div></div>'
				);
			})
			.join('');

		container.querySelectorAll('.faq-item__btn').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var panel = document.getElementById(btn.getAttribute('aria-controls'));
				var open = btn.getAttribute('aria-expanded') === 'true';
				btn.setAttribute('aria-expanded', !open);
				if (panel) {
					panel.hidden = open;
				}
			});
		});
	}

	function renderResourceCards(container, data) {
		if (!container || !data.resources) return;
		container.innerHTML = data.resources
			.map(function (r) {
				return (
					'<a class="resource-card" href="' +
					escapeHtml(r.href) +
					'" target="_blank" rel="noopener noreferrer" data-aos="fade-up">' +
					'<h3>' +
					escapeHtml(r.title) +
					'</h3>' +
					'<p>' +
					escapeHtml(r.description) +
					'</p>' +
					'<span class="resource-card__cta">Open link &rarr;</span></a>'
				);
			})
			.join('');
	}

	function renderSponsors(container, data) {
		if (!container || !data.sponsors) return;
		container.innerHTML = data.sponsors
			.map(function (s) {
				return '<li class="sponsor-pill">' + escapeHtml(s.name) + '</li>';
			})
			.join('');
	}

	function renderBenefits(container, data) {
		if (!container || !data.membershipBullets) return;
		container.innerHTML = data.membershipBullets
			.map(function (b, i) {
				return (
					'<div class="benefit-item" data-aos="fade-up">' +
					'<div class="benefit-item__mark">' +
					(i + 1) +
					'</div>' +
					'<div class="benefit-item__body"><h3>' +
					escapeHtml(b.title) +
					'</h3><p>' +
					escapeHtml(b.text) +
					'</p></div></div>'
				);
			})
			.join('');
	}

	function setupNewsletter(form, data) {
		if (!form || !data.newsletter) return;
		var action = data.newsletter.formAction;
		if (action) {
			form.action = action;
			form.method = 'POST';
		} else {
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				alert(data.newsletter.formNote);
			});
		}
	}

	function setupNavScrollSpy() {
		var links = document.querySelectorAll('.site-nav a[data-section]');
		if (!links.length) return;
		var header = document.querySelector('.site-header');

		function getScrollPad() {
			var raw = getComputedStyle(document.documentElement).scrollPaddingTop;
			var pad = parseFloat(raw, 10);
			if (!isNaN(pad) && pad > 0) return pad;
			var rem = parseFloat(getComputedStyle(document.documentElement).fontSize, 10) || 16;
			return (header ? header.offsetHeight : 72) + 1.5 * rem;
		}

		function orderedSectionIds() {
			var ids = ['hero'];
			links.forEach(function (a) {
				var href = a.getAttribute('href');
				if (href && href.charAt(0) === '#') {
					var sid = href.slice(1);
					if (sid && ids.indexOf(sid) === -1) ids.push(sid);
				}
			});
			return ids
				.filter(function (id) {
					return document.getElementById(id);
				})
				.sort(function (a, b) {
					var ra =
						document.getElementById(a).getBoundingClientRect().top + window.scrollY;
					var rb =
						document.getElementById(b).getBoundingClientRect().top + window.scrollY;
					return ra - rb;
				});
		}

		var sectionIds = orderedSectionIds();
		var pendingNav = null;
		var pendingTimer = null;

		function onScroll() {
			if (pendingNav) return;
			var pad = getScrollPad();
			var sample = document.querySelector('main .section');
			if (sample) {
				var sm = parseFloat(getComputedStyle(sample).scrollMarginTop, 10);
				if (!isNaN(sm) && sm > pad) pad = sm;
			}
			var lineY = window.scrollY + pad + 12;
			var currentId = sectionIds[0] || 'hero';
			sectionIds.forEach(function (sid) {
				var el = document.getElementById(sid);
				if (!el) return;
				var top = el.getBoundingClientRect().top + window.scrollY;
				if (top <= lineY) currentId = sid;
			});
			var current = '#' + currentId;
			links.forEach(function (a) {
				a.classList.toggle('is-active', a.getAttribute('href') === current);
			});
		}

		function endPendingNav() {
			pendingNav = null;
			if (pendingTimer) {
				clearTimeout(pendingTimer);
				pendingTimer = null;
			}
			onScroll();
		}

		links.forEach(function (a) {
			a.addEventListener('click', function () {
				var href = a.getAttribute('href');
				if (!href || href.charAt(0) !== '#') return;
				pendingNav = href;
				if (pendingTimer) clearTimeout(pendingTimer);
				links.forEach(function (l) {
					l.classList.toggle('is-active', l.getAttribute('href') === href);
				});
				pendingTimer = setTimeout(endPendingNav, 900);
			});
		});

		window.addEventListener('hashchange', onScroll);

		window.addEventListener(
			'resize',
			function () {
				sectionIds = orderedSectionIds();
				onScroll();
			},
			{ passive: true }
		);

		window.addEventListener('scrollend', endPendingNav, { passive: true });

		var ticking = false;
		window.addEventListener(
			'scroll',
			function () {
				if (!ticking) {
					window.requestAnimationFrame(function () {
						onScroll();
						ticking = false;
					});
					ticking = true;
				}
			},
			{ passive: true }
		);
		onScroll();
	}

	function setupMobileNav() {
		var toggle = document.getElementById('menu-button');
		var panel = document.getElementById('nav-panel');
		if (!toggle || !panel) return;

		function setOpen(open) {
			toggle.setAttribute('aria-expanded', open);
			panel.classList.toggle('is-open', open);
			document.body.classList.toggle('nav-open', open);
		}

		toggle.addEventListener('click', function () {
			setOpen(toggle.getAttribute('aria-expanded') !== 'true');
		});

		panel.querySelectorAll('a').forEach(function (a) {
			a.addEventListener('click', function () {
				setOpen(false);
			});
		});

		window.addEventListener('resize', function () {
			if (window.innerWidth > 900) setOpen(false);
		});
	}

	function setupStickyCta() {
		var bar = document.getElementById('sticky-cta');
		if (!bar || !window.matchMedia('(max-width: 768px)').matches) return;
		var hero = document.getElementById('hero');
		if (!hero) return;
		var io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					bar.classList.toggle('is-visible', !entry.isIntersecting);
				});
			},
			{ threshold: 0, rootMargin: '-80px 0px 0px 0px' }
		);
		io.observe(hero);
	}

	function applyGlobalLinks(data) {
		document.querySelectorAll('[data-site-join]').forEach(function (el) {
			el.setAttribute('href', data.joinUrl);
		});
		document.querySelectorAll('[data-site-rsvp]').forEach(function (el) {
			el.setAttribute('href', data.rsvpUrl);
		});
	}

	function init() {
		var data = window.SITE_DATA;
		if (!data) return;

		applyGlobalLinks(data);

		renderEvents(document.getElementById('event-cards'), data, 'upcoming');
		renderTeam(document.getElementById('team-grid'), data);
		renderFaq(document.getElementById('faq-list'), data);
		renderResourceCards(document.getElementById('resource-cards'), data);
		renderSponsors(document.getElementById('sponsor-list'), data);
		renderBenefits(document.getElementById('benefit-grid'), data);
		setupNewsletter(document.getElementById('newsletter-form'), data);

		var filterBtns = document.querySelectorAll('[data-event-filter]');
		var eventRoot = document.getElementById('event-cards');
		filterBtns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				var f = btn.getAttribute('data-event-filter');
				filterBtns.forEach(function (b) {
					b.classList.toggle('is-active', b === btn);
				});
				renderEvents(eventRoot, data, f);
				if (window.AOS) window.AOS.refresh();
			});
		});

		setupNavScrollSpy();
		setupMobileNav();
		setupStickyCta();

		if (window.AOS) {
			window.AOS.init({ duration: 650, once: true, offset: 40 });
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
