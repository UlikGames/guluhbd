$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});

const animationDuration = 3;
const animationRepeatDelay = 3;
const totalDuration = animationDuration + animationRepeatDelay;
const mouthDuration = 0.4;
const mouthDelay = 0.4;

const mouthBorderRadius = "0.8rem 0.8rem 10rem 10rem";
const mouthHeight = "13vmin";
const mouthWidth = "95%";

gsap.registerEffect({
	name: "rotate",
	effect: (targets, config) => {
		return gsap.to(targets, {
			duration: animationDuration,
			rotate: 360 * 3,
			repeat: -1,
			repeatDelay: animationRepeatDelay,
			ease: "back.inOut"
		});
	}
});

gsap.effects.rotate(".head");

var mouthTimeline = gsap.timeline();
mouthTimeline.fromTo(
	".face__mouth",
	{
		borderRadius: mouthBorderRadius,
		width: mouthWidth,
		height: mouthHeight
	},
	{
		borderRadius: "50%",
		width: "4vmin",
		height: "4vmin",
		duration: mouthDuration,
		delay: mouthDelay,
		repeat: -1,
		repeatDelay: totalDuration - mouthDuration
	}
);
mouthTimeline.to(".face__mouth", {
	borderRadius: mouthBorderRadius,
	width: mouthWidth,
	height: mouthHeight,
	duration: mouthDuration,
	delay: animationDuration,
	repeat: -1,
	repeatDelay: totalDuration - mouthDuration
});

var tongueTimeline = gsap.timeline();
tongueTimeline.to(".face__tongue", {
	scale: "0",
	duration: mouthDuration,
	delay: mouthDelay,
	repeat: -1,
	repeatDelay: totalDuration - mouthDuration
});
tongueTimeline.to(".face__tongue", {
	scale: "1",
	duration: mouthDuration,
	delay: animationDuration,
	repeat: -1,
	repeatDelay: totalDuration - mouthDuration
});