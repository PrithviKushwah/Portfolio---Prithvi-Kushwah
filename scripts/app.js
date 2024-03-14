$(document).ready(function () { var e, t, a, i, s, o, r, l, d = $(window).width(); e = document, a = { kitId: "vyv3bxf", scriptTimeout: 3e3, async: !0 }, i = e.documentElement, s = setTimeout(function () { i.className = i.className.replace(/\bwf-loading\b/g, "") + " wf-inactive" }, a.scriptTimeout), o = e.createElement("script"), r = !1, l = e.getElementsByTagName("script")[0], i.className += " wf-loading", o.src = "https://use.typekit.net/" + a.kitId + ".js", o.async = !0, o.onload = o.onreadystatechange = function () { if (t = this.readyState, !(r || t && "complete" != t && "loaded" != t)) { r = !0, clearTimeout(s); try { Typekit.load(a) } catch (e) { } } }, l.parentNode.insertBefore(o, l); var c = location.search.substring(1); "top" == c && ($(".loadingContents").hide(), setTimeout(function () { $("body#toppage #wrapper").css({ display: "block" }) }, 200)), "toppage" === window.document.body.id || $("body .cursor").removeClass("none"), "top" == c && $("body .cursor").removeClass("none"), $(function () { $('a[href^="#"]').click(function () { var e = $(this).attr("href"), t = $("#" == e || "" == e ? "html" : e).offset().top; return $("body,html").animate({ scrollTop: t }, 600, "swing"), !1 }) }); document.body.scrollLeft, document.body.scrollTop; if (window.scroll(0, 0), d <= 770) $(".refraction").addClass("slideUp01"); else new Rellax(".refraction", { center: !0 }); if (d <= 770); else { var m = $("#kiwamibitoPage .HolderL"), p = $("#kiwamibitoPage .HolderR"), v = $("#staffPage .HolderL"), h = $("#staffPage .HolderR"); $(document).on("scroll", function () { var e = $(this).scrollTop(), t = e / 30, a = 5 * t - 300, i = e / 50, n = 3 * t - 300; p.css({ "-moz-transform": " translate(0, " + a + "px)", "-ms-transform": " translate(0, " + a + "px)", "-o-transform": " translate(0, " + a + "px)", transform: " translate(0, " + a + "px)" }), m.css({ "-moz-transform": " translate(0, -" + t + "px)", "-ms-transform": " translate(0, -" + t + "px)", "-o-transform": " translate(0, -" + t + "px)", transform: " translate(0, -" + t + "px)" }), h.css({ "-moz-transform": " translate(0, " + n + "px)", "-ms-transform": " translate(0, " + n + "px)", "-o-transform": " translate(0, " + n + "px)", transform: " translate(0, " + n + "px)" }), v.css({ "-moz-transform": " translate(0, -" + i + "px)", "-ms-transform": " translate(0, -" + i + "px)", "-o-transform": " translate(0, -" + i + "px)", transform: " translate(0, -" + i + "px)" }) }) } $("body").removeClass("fadeAnim"), $('a:not([href^="#"]):not([target])').on("click", function (e) { return e.preventDefault(), url = $(this).attr("href"), "" !== url && ($("body").addClass("fadeAnim"), setTimeout(function () { window.location = url }, 1e3)), !1 }); var u = window.innerHeight; document.documentElement.style.setProperty("--vh", u / 100 + "px"), d <= 770 ? $(window).on("scroll", function () { var e = window.innerHeight; document.documentElement.style.setProperty("--vh", e / 100 + "px") }) : $(window).resize(function () { var e = window.innerHeight; document.documentElement.style.setProperty("--vh", e / 100 + "px") }); var g = $(".loadingContents .loading-page"), f = ($(".loadingContents .loading-page .counter .num"), $(".loadingContents .loading-page .counter .imgArea")), b = $(".loadingContents .loadingMessage"), w = $(".loadingContents .loadingMessage .closeBtn"); if ((setTimeout(function () { f.css({ opacity: "1" }) }, 500), setTimeout(function () { g.css({ opacity: "0", transition: "2s" }) }, 4e3), setTimeout(function () { b.css({ opacity: "1", transition: "4s" }) }, 5e3), setTimeout(function () { g.css({ display: "none" }) }, 7e3), setTimeout(function () { $("body#toppage #wrapper").css({ display: "none" }) }, 100), w.on("click", function () { setTimeout(function () { b.css({ opacity: "0", transition: "2s" }), $("body").removeClass("fadeAnim") }, 500), setTimeout(function () { b.css({ display: "none" }) }, 2500), $("body#toppage #wrapper").css({ display: "block" }) }), $(function () { ABRundum = new Array, ABRundum[0] = ".randomWrapper .random01", ABRundum[1] = ".randomWrapper .random02", ABRundum[2] = ".randomWrapper .random03", ABRundum[3] = ".randomWrapper .random04", ABRundum[4] = ".randomWrapper .random05", ABRundum[5] = ".randomWrapper .random06", ABRundum[6] = ".randomWrapper .random07", n = Math.floor(Math.random() * ABRundum.length), $(ABRundum[n]).css("display", "block") }), $(".menu").on("click", function () { $("#header").toggleClass("active"), $("body").toggleClass("active"), $(".menuContents").toggleClass("active") }), d <= 770) && ("ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) try { for (var C in document.styleSheets) { var y = document.styleSheets[C]; if (y.rules) for (var x = y.rules.length - 1; x >= 0; x--)y.rules[x].selectorText && y.rules[x].selectorText.match(":hover") && y.deleteRule(x) } } catch (e) { } if ("toppage" === window.document.body.id) { window.onload = (() => { var t = new e; window.onresize = (() => { t.resize() }) }); class e { constructor() { this.vertShader = document.getElementById("vs").textContent, this.fragShader = document.getElementById("fs").textContent, this.setProps(), this.init() } init() { this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(45, this.props.width / this.props.height, this.props.near, this.props.far), this.camera.position.set(10, 10, -10), this.camera.lookAt(this.scene.position), this.renderer = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 }), this.renderer.setPixelRatio(1.5), this.renderer.setSize(this.props.width, this.props.height), this.div = document.getElementById("soul"), this.div.appendChild(this.renderer.domElement), this.obj = new t(this), this.render() } setProps() { var e = document.body.clientWidth, t = window.innerHeight, a = e / t; this.props = { width: e, height: t, aspect: a, left: -e / 2, right: e / 2, top: t / 2, bottom: -t / 2, near: .1, far: 1e4 } } resize() { this.setProps(), this.renderer.setSize(this.props.width, this.props.height), this.camera.aspect = this.props.width / this.props.height, this.camera.updateProjectionMatrix() } render() { this.obj.uniforms.uTick.value += 1, this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.render.bind(this)) } } class t { constructor(e) { this.webgl = e, this.init() } paramFunc() { return new THREE.Vector3(0, 0, 0) } init() { var e = new THREE.ParametricBufferGeometry(this.paramFunc, 300, 300); this.uniforms = { uTick: { type: "f", value: 0 } }; var t = new THREE.ShaderMaterial({ vertexShader: this.webgl.vertShader, fragmentShader: this.webgl.fragShader, uniforms: this.uniforms, side: THREE.DoubleSide, shading: THREE.FlatShading }), a = new THREE.Mesh(e, t); this.webgl.scene.add(a) } } } if ($.fn.letterSpan = function () { $(this).each(function () { var e = $.trim(this.textContent), t = ""; e.split("").forEach(function (e) { t += "<span>" + e + "</span>" }), this.innerHTML = t }) }, $("h4").letterSpan(), d <= 480) new Swiper(".slider01", { navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, slidesPerView: 1.5, spaceBetween: 2, centeredSlides: !0, loop: !0, pagination: { el: ".swiper-pagination", type: "fraction", clickable: !0 }, speed: 1e3 }), new Swiper(".slider02", { initialSlide: 0, slidesPerView: 1.1, spaceBetween: 5, draggable: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, speed: 1e3 }); else if (d <= 770) new Swiper(".slider01", { navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, slidesPerView: 1.5, spaceBetween: 5, centeredSlides: !0, loop: !0, pagination: { el: ".swiper-pagination", type: "fraction", clickable: !0 }, speed: 1e3 }), new Swiper(".slider02", { initialSlide: 0, slidesPerView: 1.2, spaceBetween: 5, draggable: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, speed: 1e3 }); else new Swiper(".slider01", { navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, slidesPerView: 3, spaceBetween: 30, centeredSlides: !0, loop: !0, pagination: { el: ".swiper-pagination", type: "fraction", clickable: !0 }, speed: 1e3 }), new Swiper(".slider02", { initialSlide: 0, slidesPerView: 2.6, spaceBetween: 10, draggable: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, speed: 1e3 }); var P = $(".catFilter [data-filter]"), E = $(".infoContents [data-category]"); P.on("click", function (e) { e.preventDefault(); var t = $(this); P.removeClass("active"), t.addClass("active"); var a = t.attr("data-filter"); "all" == a ? E.removeClass("active").fadeOut().promise().done(function () { E.addClass("active").fadeIn() }) : E.removeClass("active").fadeOut().promise().done(function () { E.filter('[data-category = "' + a + '"]').addClass("active").fadeIn() }); location.search.substring(1); var i = $(this).data("filter"), n = location.pathname; window.history.pushState(null, null, n + "#" + i) }); var S = location.hash.substring(1), T = $(".catFilter a:eq(0)"), k = $(".catFilter a:eq(1)"), H = $(".catFilter a:eq(2)"), R = $(".catFilter a:eq(3)"), A = $(".catFilter a:eq(4)"), B = $(".catFilter a:eq(5)"), M = $(".catFilter a:eq(6)"), q = $(".infoContents .list"), L = $(".infoContents .list.news"), _ = $(".infoContents .list.media"), D = $(".infoContents .list.sns"), F = $(".infoContents .list.interview"), O = $(".infoContents .list.event"), j = $(".infoContents .list.goods"), I = $(".infoContents .btnArea"); "" == S && (T.addClass("active"), q.addClass("active")), "all" == S && (T.addClass("active"), q.addClass("active")), "news" == S && (k.addClass("active"), L.addClass("active"), T.removeClass("active"), L.removeClass("hidden"), I.hide()), "media" == S && (H.addClass("active"), _.addClass("active"), T.removeClass("active"), _.removeClass("hidden"), I.hide()), "sns" == S && (R.addClass("active"), D.addClass("active"), T.removeClass("active"), D.removeClass("hidden"), I.hide()), "interview" == S && (A.addClass("active"), F.addClass("active"), T.removeClass("active"), F.removeClass("hidden"), I.hide()), "event" == S && (B.addClass("active"), O.addClass("active"), T.removeClass("active"), O.removeClass("hidden"), I.hide()), "goods" == S && (M.addClass("active"), j.addClass("active"), T.removeClass("active"), j.removeClass("hidden"), I.hide()), "infoPage" === window.document.body.id && $(".catFilter").parents("*").css({ overflow: "visible", "overflow-x": "visible", "overflow-y": "visible" }); var z = $(window).width(); $SliderMaster = $("section#instagram .container"), $SliderHolder = $("section#instagram .wrapper"), $SliderDiv = $("section#instagram .slide"); var W = 172 * $SliderDiv.length; if ($SliderHolder.width(W), $(window).width() < 415) { W = 142 * $SliderDiv.length; $SliderHolder.width(W) } var V = 0, N = setInterval(G, 50), U = 1; function G() { V == W - z ? U = 0 : 0 == V && (U = 1), U ? V += 1 : V -= 1, $SliderMaster.scrollLeft(V) } function Y() { clearInterval(N) } var J = 0; $SliderMaster.mouseenter(function () { Y(), J = $(this).scrollLeft() }), $SliderMaster.mouseleave(function () { V = $(this).scrollLeft(), U = J < V ? 1 : 0, N = setInterval(G, 50) }), $SliderMaster.bind("touchstart", function () { Y(), J = $(this).scrollLeft() }); let K = $("#companyPage .tab"); $("#companyPage .tab").on("click", function (e) { $(".active").removeClass("active"), $(this).addClass("active"); const t = K.index(this); $("#companyPage .panel").removeClass("active").eq(t).addClass("active"); var a = $("#companyPage section#tab").offset().top + 1; $("body,html").animate({ scrollTop: a }, 1e3, "swing") }); var Q = $("#companyPage section#tab .Holder .tabHeader [data-tabs]"); $("#companyPage section#tab .Holder .tabMain [data-panel]"); Q.on("click", function (e) { console.log("YES"), e.preventDefault(); var t = $(this); Q.removeClass("active"), t.addClass("active"); t.attr("data-tabs"), location.search.substring(1); var a = $(this).data("tabs"); console.log(a); var i = location.pathname; window.history.pushState(null, null, i + "#" + a) }); S = location.hash.substring(1); var X = $("#companyPage section#tab .Holder .tabHeader .tab"), Z = $("#companyPage section#tab .Holder .tabMain .panel"); "" == S && (X.eq(0).addClass("active"), Z.eq(0).addClass("active")), "OverseasActivities" == S && (X.eq(0).addClass("active"), Z.eq(0).addClass("active")), "Memorial" == S && (X.eq(1).addClass("active"), Z.eq(1).addClass("active")), "CourtDocuments" == S && (X.eq(2).addClass("active"), Z.eq(2).addClass("active")), "Letter" == S && (X.eq(3).addClass("active"), Z.eq(3).addClass("active")), "Tournament" == S && (X.eq(4).addClass("active"), Z.eq(4).addClass("active")), $("#companyPage section#tab .Holder .tabMain .panel .textArea .box .block .acHeader").click(function () { $(this).next().is(":hidden") ? $(this).next().slideDown("selected") : $(this).next().slideUp("selected"), $(this).toggleClass("active") }); var ee = $("#companyPage section#tab .panel#OverseasActivities"), te = $("#companyPage section#tab .panel#OverseasActivities .box"), ae = $("#companyPage section#tab .panel#OverseasActivities .moreBtn"); $("#companyPage section#tab .panel#OverseasActivities .box:nth-child(n + 6)").addClass("hidden"), ee.length && te.length <= 5 && ae.fadeOut(), ae.on("click", function () { $("#companyPage section#tab .panel#OverseasActivities .box.hidden").slice(0, 5).removeClass("hidden"), 0 == $("#companyPage section#tab .panel#OverseasActivities .box.hidden").length && ae.fadeOut() }); var ie = $("#companyPage section#tab .panel#CourtDocuments"), ne = $("#companyPage section#tab .panel#CourtDocuments .box"), se = $("#companyPage section#tab .panel#CourtDocuments .moreBtn"), oe = $("#companyPage section#tab .panel#Letter"), re = $("#companyPage section#tab .panel#Letter .box"), le = $("#companyPage section#tab .panel#Letter .moreBtn"); $("#companyPage section#tab .panel#CourtDocuments .box:nth-child(n + 4)").addClass("hidden"), ie.length && ne.length <= 3 && se.fadeOut(), se.on("click", function () { $("#companyPage section#tab .panel#CourtDocuments .box.hidden").slice(0, 3).removeClass("hidden"), 0 == $("#companyPage section#tab .panel#CourtDocuments .box.hidden").length && se.fadeOut() }), $("#companyPage section#tab .panel#Letter .box:nth-child(n + 4)").addClass("hidden"), oe.length && re.length <= 3 && le.fadeOut(), le.on("click", function () { $("#companyPage section#tab .panel#Letter .box.hidden").slice(0, 3).removeClass("hidden"), 0 == $("#companyPage section#tab .panel#Letter .box.hidden").length && le.fadeOut() }), $("#companyPage section#tab .Holder .tabMain .panel .textArea .box .block .imgBlock").each(function () { var e = $(this).find(".img").length; e < 4 && $(this).find(".img").addClass("img30"), e < 3 && ($(this).find(".img").removeClass("img30"), $(this).find(".img").addClass("img50")), e < 2 && ($(this).find(".img").removeClass("img30"), $(this).find(".img").removeClass("img50"), $(this).find(".img").addClass("img100")) }); var de = { distance: "50px", origin: "bottom", interval: 300, duration: 3e3, mobile: !0, scale: 1 }, ce = new ScrollReveal; if (ce.reveal(".fadeIn01", { distance: "0px", origin: "bottom", interval: 1e3, duration: 4e3, mobile: !0, viewFactor: .1, scale: 1 }), ce.reveal(".fadeIn02", { distance: "0px", origin: "bottom", interval: 1e3, duration: 2e3, mobile: !0, viewFactor: .1, scale: 1 }, 1e3), ce.reveal(".slideUp01", de), ce.reveal(".slideUp02, .slideUp02_1", de, 300), ce.reveal(".slideLeft01", { distance: "100px", origin: "left", interval: 1e3, duration: 3e3, mobile: !0, scale: 1 }), ce.reveal(".slideLeft02", { distance: "50px", origin: "left", interval: 1e3, duration: 3e3, mobile: !0, scale: 1 }), ce.reveal(".slideRight01", { distance: "300px", origin: "right", interval: 1e3, duration: 3e3, mobile: !0, scale: 1 }), ce.reveal(".slideRight02", { distance: "100px", origin: "right", interval: 1e3, duration: 3e3, mobile: !0, scale: 1 }, 200), ce.reveal(".contentsAnim, .nextContents, .swiper-container, .loadingContents .loadingMessage .messageContents", { afterReveal: function (e) { e.classList.add("show") } }), d <= 770); else { function me(e) { var t = videoControl.movie_list[e].address, a = videoControl.movie_list[e].address.querySelector("video"); videoControl.movie_list[e].active ? (t.classList.remove("js-movie_active"), a.pause(), videoControl.movie_list[e].active = !1) : (t.classList.add("js-movie_active"), a.play(), videoControl.movie_list[e].active = !0) } videoControl = new function () { }, videoControl.movie_list = []; for (var pe = document.getElementsByClassName("js-movie__button"), ve = 0; ve < pe.length; ve++) { var he = pe[ve].closest(".jsMovie"), ue = he.querySelector(".js-movie__target"), ge = { active: !1, address: he }; if (he.dataset.vide_no = ve, videoControl.movie_list.push(ge), pe[ve].addEventListener("click", function () { me(this.closest(".jsMovie").dataset.vide_no) }), ue.addEventListener("ended", function () { me(this.closest(".jsMovie").dataset.vide_no) }), "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) me(this.closest(".jsMovie").dataset.vide_no) } } });