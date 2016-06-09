var accordion = $('.accordion');

accordion.find('dd').hide();
accordion.find('dt').on('click', function(){
	$(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
});

var accordion_2 = $('.accordion_2');

accordion_2.find('dd').hide();
accordion_2.find('dt').on('click', function(){
	$(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
});






var alphabet = [
	{
  		image: "./images/test-icon.jpg",
		description:'A is the 1st letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'B is the 2nd letter of the alphabet, etc'  
	},
	{
  		image: "./images/test-icon.jpg",
		description:'C is the 3rd letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'D is the 4th letter of the alphabet, etc'  
	},
	{
  		image: "./images/test-icon.jpg",
		description:'E is the 5th letter of the alphabet, etc'
	},
	{
	  	image:"./images/test-icon.jpg",
  		description:'F is the 6th letter of the alphabet, etc'  
	},
	{
  		image: "./images/test-icon.jpg",
		description:'G is the 7th letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'H is the 8th letter of the alphabet, etc'  
	},
	{
  		image: "./images/test-icon.jpg",
		description:'I is the 9th letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'J is the 10th letter of the alphabet, etc'  
	},
	{
  		image: "./images/test-icon.jpg",
		description:'K is the 11th letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'L is the 12th letter of the alphabet, etc'  
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'M is the 13th letter of the alphabet, etc'  
	},
];


$('.thumbnail_equipment').on('click',function(){
	$(this).toggleClass('thumbnail_pressed_equipment');

	$('.thumbnail_pressed_equipment').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_equipment');
	});

	load_equip_card($(this).attr('data-ref'));
});

$('.thumbnail_spells').click(function(){
	$(this).toggleClass('thumbnail_pressed_spells');

	$('.thumbnail_pressed_spells').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_spells');
	});

	load_spell_card($(this).attr('data-ref'));
});

$('.thumbnail_races').click(function(){
	$(this).toggleClass('thumbnail_pressed_races');

	$('.thumbnail_pressed_races').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_races');
	});

	load_race_card($(this).attr('data-ref'));
});

$('.thumbnail_classes').click(function(){
	$(this).toggleClass('thumbnail_pressed_classes');

	$('.thumbnail_pressed_classes').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_classes');
	});

	load_class_card($(this).attr('data-ref'));
});


/*	$("#imgLocation").attr("src", obj.image);*/

function load_equip_card(ref){
	var obj = alphabet[ref];
	$("#img_equipment").attr("src", obj.image);
	//$('.img_equipment').html(obj.image);
	$('.info_equipment').html(obj.description);
};

function load_spell_card(ref){
	var obj = alphabet[ref];
	$("#img_spells").attr("src", obj.image);
	//$('#img_spells').html(obj.image);
	$('.info_spells').html(obj.description);
};

function load_race_card(ref){
	var obj = alphabet[ref];
	$("#img_races").attr("src", obj.image);
	//$('#img_races').html(obj.image);
	$('.info_races').html(obj.description);
};

function load_class_card(ref){
	var obj = alphabet[ref];
	$("#img_classes").attr("src", obj.image);
	//$('#img_classes').html(obj.image);
	$('.info_classes').html(obj.description);
};


	//var img = new Image();
	//img.src = obj.image;
	//document.getElementById('img_equipment').appendChild(img);

	//var myImage = '<img src="' + obj.image'">' + '</img>';
	//$('.img_equipment').html(myImage);
	//$('.img_equipment').html(load_image($(this).attr('data-ref')));

/*<img src="images/test-icon.jpg" width="60px"></img>*/
/*$.getJSON("feed.json", loadImage);

function load_image(ref) {
	var image = alphabet[ref].image;
	$("<img/>").attr("src", image);
};*/



var equipment = '{"Equipment": [' + 
	'{"EquipmentType": "bow", "EquipmentName": "Solaris", "Description": "This is Lathender\'s bow"},' +
	'{"EquipmentType": "sword", "EquipmentName": "Numeril", "Description": "This is Arathorn\'s sword"},' +
	'{"EquipmentType": "axe", "EquipmentName": "Treefell", "Description": "This is Paul Bunyan\'s axe"},' +
	'{"EquipmentType": "hammer", "EquipmentName": "Judgement", "Description": "The sacred hammer of House Ironblood"} ]}';

var arrEquipment = JSON.parse(equipment);

document.getElementById("demo2").innerHTML =
	arrEquipment.Equipment[0].EquipmentName + "<br>" +
	arrEquipment.Equipment[1].EquipmentName + "<br>" +
	arrEquipment.Equipment[2].EquipmentName + "<br>" +
	arrEquipment.Equipment[3].EquipmentName;


/*
var alphabet = [
	{
  		letter: "A",
		description:'A is the first letter of the alphabet, etc'
	},
	{
	  	letter:"B",
  		description:'B is the 2nd letter of the alphabet, etc'  
	}
];

$('.thumbnail').on('click',function(){
	$('.thumbnail').removeClass('selected');
  $(this).addClass('selected');
  load_card($(this).attr('data-ref'));
});

function load_card(ref){
	var obj = alphabet[ref];
  $('#letter_area').html(obj.letter);
  $('#description_area').html(obj.description);
};*/