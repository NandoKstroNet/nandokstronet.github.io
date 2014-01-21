$(document).ready(
	function() 
	{
		setInterval(animate_circle, 1000);
	}
);

function animate_circle() 
{
	function up() {
		$(".magenta").animate({'top' : '-280px'}, 20000, down);
		$(".blue").animate({'top' : '-280px'}, 25000, down);
		$(".yellow").animate({'top' : '-280px'}, 30000, down);
		$(".green").animate({'top' : '-280px'}, 35000, down);
	}
	function down() {
		$(".magenta").animate({'top' : '+280px'}, 20000, up);
		$(".blue").animate({'top' : '+280px'}, 25000, up);
		$(".yellow").animate({'top' : '+280px'}, 30000, up);
		$(".green").animate({'top' : '+280px'}, 35000, up);
	}

	up();
	down();
}


$(".menu a").hover(function()
	{
		var ref = $(this).attr('href');

		if(ref == '#aovivo') {
			$('.menu').css({'border-top':'5px solid purple'});
		}

		if(ref == '#palestrantes') {
			$('.menu').css({'border-top':'5px solid #8AA64E'});
		}

		if(ref == '#inscrevase') {
			$('.menu').css({'border-top':'5px solid #092140'});
		}

		if(ref == '#comochegar') {
			$('.menu').css({'border-top':'5px solid #E3CB25'});
		}

	    if(ref == '#evento') {
			$('.menu').css({'border-top':'5px solid #BF2A2A'});
		}
	}
);