/*! BitMEX-Frontend - v1.1.0 - 2016-11-10 */
webpackJsonp([12], {
	409: function(a, b) {
		!

		function() {

			function a() {
				var a = document.getElementById("troll_filter");
				a && a.addEventListener("change", b);
				document.querySelector("form")
			}

			function b(a) {
				var b = a.target,
					d = b.value === b.max;
				d && c(b)
			}

			function c(a) {
				var b = document.getElementById("troll_text");
				b.style.display = "none";
				var c = document.getElementById("troll_text_solved");
				c.style.display = "block", a.type = "hidden", a.value = d(a.getAttribute("data-scrambly")), a.id = a.name = "captchaKey"
			}

			function d(a) {
				return window.atob(a)
			}
			window.addEventListener("load", function() {
				a()
			})
		}()
	},
	915: function(a, b, c) {
		a.exports = c(409)
	}
}, [915]);
//# sourceMappingURL=debugging_uglify/captcha-f6b21b49928da0a59091.js.map