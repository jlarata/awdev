/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Forms.

	// Hack: Activate non-input submits.
	$('form').on('click', '.submit', function (event) {

		// Stop propagation, default.
		event.stopPropagation();
		event.preventDefault();

		// Submit form.
		$(this).parents('form').submit();

	});

	// Sidebar.
	if ($sidebar.length > 0) {

		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$sidebar_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					initialize: function () {

						// Deactivate section.
						$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($sidebar_a.filter('.active-locked').length == 0) {

							$sidebar_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			// If <=large, >small, and sidebar is present, use its height as the offset.
			if (breakpoints.active('<=large')
				&& !breakpoints.active('<=small')
				&& $sidebar.length > 0)
				return $sidebar.height();

			return 0;

		}
	});

	// Spotlights.
	$('.spotlights > section')
		.scrollex({
			mode: 'middle',
			top: '-10vh',
			bottom: '-10vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		})
		.each(function () {

			var $this = $(this),
				$image = $this.find('.image'),
				$img = $image.find('img'),
				x;

			// Assign image.
			$image.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set background position.
			if (x = $img.data('position'))
				$image.css('background-position', x);

			// Hide <img>.
			$img.hide();

		});

	// Features.
	$('.features')
		.scrollex({
			mode: 'middle',
			top: '-20vh',
			bottom: '-20vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		});

})(jQuery);

var skillvida = document.getElementById('bgVideoA');
var skillvidb = document.getElementById('bgVideoB');
var skillvidc = document.getElementById('bgVideoC');

skillvida.addEventListener('ended', function (e) {
	// get the active source and the next video source.
	// I set it so if there's no next, it loops to the first one
	var activesource = document.querySelector("#bgVideoA source.active");
	var nextsource = document.querySelector("#bgVideoA source.active + source") || document.querySelector("#bgVideoA source:first-child");

	// deactivate current source, and activate next one
	activesource.className = "";
	nextsource.className = "active";

	// update the video source and play
	skillvida.src = nextsource.src;
	skillvida.play();
});

skillvidb.addEventListener('ended', function (e) {
	var activesource = document.querySelector("#bgVideoB source.active");
	var nextsource = document.querySelector("#bgVideoB source.active + source") || document.querySelector("#bgVideoB source:first-child");

	activesource.className = "";
	nextsource.className = "active";

	skillvidb.src = nextsource.src;
	skillvidb.play();
});

skillvidc.addEventListener('ended', function (e) {
	var activesource = document.querySelector("#bgVideoC source.active");
	var nextsource = document.querySelector("#bgVideoC source.active + source") || document.querySelector("#bgVideoC source:first-child");

	activesource.className = "";
	nextsource.className = "active";

	skillvidc.src = nextsource.src;
	skillvidc.play();
});



function pruebitas() {
	datos = document.getElementById("contactForm");
	message = datos.name.value;

	emailjs.sendForm('Gmail', 'Template01', datos, 'r5c6zfyUhpvUTEPvZ')
		.then((result) => {
			this.setState({ isAlertVisible: true })
		}, (error) => {
			console.log(error.text);
		})
	console.log(message);
	};

	function sendEmail() {
		datos = document.getElementById("contactForm");
	
		emailjs.sendForm('Gmail', 'Template01', datos, 'r5c6zfyUhpvUTEPvZ')
			.then((result) => {
				this.setState({ isAlertVisible: true })
			}, (error) => {
				console.log(error.text);
			})
			
		};

$('#contactForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_qix95rb');
    formData.append('template_id', 'template_bph713p');
    formData.append('user_id', 'r5c6zfyUhpvUTEPvZ');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('thanks for reaching, I will answer you as soon as I can!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});