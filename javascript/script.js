
// 카테고리 바 슬라이드


const swiper = new Swiper('.mySwiper', { //전체 프레임
  // Optional parameters
  direction: 'horizontal', //스와이프 방향
  loop: false,
  spaceBetween: 0,
  grabCursor: true, //잡는 커서 모양 (손바닥)
  slidesPerView: 'auto', //css에서 설정한 슬라이더 크기
  centeredSlides: false, //슬라이드를 가운데로 정렬
  speed: 500, //슬라이더 이동 속도
  effect: "slidesPerViewAuto", //swiper 사이트 demos의 효과 적용

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //인디케이터
    type: 'fraction', //페이징 형식 (현재 번호)
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});


// 여기까지 swiper in js 초기화, 설정



// 카테고리 아이템 클릭 이벤트

$('.swiper-slide').click( function () {
  let i = $(this).index();
  $(this).addClass('on');
  $('.swiper-slide').not(this).removeClass('on');
});

// 카테고리 전체보기 버튼 클릭 이벤트

let cate = 0;

$('.category-bar-filter').click(function () {
  if(cate == 0) {
    $('.category-bar').css({
      overflow: 'visible'
    });
    cate++;
  } else if(cate == 1) {
    $('.category-bar').css({
      overflow: 'hidden'
    });
    cate = 0;
  }
});

// 로그인창 클릭 이벤트

let join = 0

$('.header-profile > i').click(function () {

  if(join == 0) {
    $('.header-join').addClass('on');
    join++;
    console.log(join);
  } else if(join == 1) {
    $('.header-join').removeClass('on');
    join = 0;
    console.log(join);
  }
})

$('body').click(function(e){

  if( !$(e.target).is('.header-profile > i') && $('.header-join').hasClass('on') ){

      $('.header-join').removeClass('on');
      
      join = 0;

  }

})


// 스크롤 이벤트




// 컨텐츠 - 하트 아이콘


$('.contents > i').click(function () {
  let i = $(this).parents('.contents').index();

  if ($('.contents').eq(i).hasClass('active')) {
    $('.contents').eq(i).removeClass('active');
  } else {
    $('.contents').eq(i).addClass('active');
  }

});


// 카테고리 클릭 시 알맞은 컨텐츠 분류

if($('.swiper-slide').hasClass('on')) {
  $('.contents').addClass('show');
};

$('.swiper-slide').not('.hanok, .wow, .mountain').click( function () {
  $('.contents').addClass('show');
});

$('.hanok-icon').click( function () {
  $('.contents').not('.hanok').removeClass('show');
  $('.contents').hasClass('hanok').addClass('show');
})

$('.wow-icon').click( function () {
  $('.contents').not('.wow').removeClass('show');
  $('.contents').hasClass('wow').addClass('show');
})

$('.mountain-icon').click( function () {
  $('.contents').not('.mountain').removeClass('show');
  $('.contents').hasClass('mountain').addClass('show');
});


// 지도

function init_map () { //맵 초기화 함수 이름으로 자주 쓰임 -> init_map

  // 지도 객체 생성 후 #map에 지도 표시
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 38.047217, // 위도 - 소수점은 6번째까지 입력
      lng: 69.517180 // 경도
    },
    zoom: 4,
    scrollwheel: false
  }); // new로 객체 생성, 구글에 있는 maps(지도) 가져오기 매소드 .Map()에는 삽입하고자 하는 DOM 쓰기 - 지도가 들어갈 영역

  const icons = {
    bnb: {
      icon: "images/map-ping.PNG"
    }};

  // 마커 생성

var locations = [

  [38.907292, 110.157331],

  [36.856031, 128.715043],

  [35.029860, 126.498017],

  [45.941899, 25.020079],

  [2.445649, 117.888799],
  
  [1.360328, 83.895473],

  [35.815840, 127.116119],

  [11.697835, 122.621754],

  [64.55875, 17.709949]

];

var infowindow = new google.maps.InfoWindow();



var marker, i;



for (i = 0; i < locations.length; i++) {  

  marker = new google.maps.Marker({

    position: new google.maps.LatLng(locations[i][0], locations[i][1]),

    map: map

  });



  google.maps.event.addListener(marker, 'click', (function(marker, i) {

    return function() {

      infowindow.setContent(locations[i][0]);

      infowindow.open(map, marker);

    }

  })(marker, i));

}};




$('.map-button').click(function () {
  $('footer').css({
    display: 'none'
  });
  $('.category-bar').css({
    display: 'none'
  });
  $('.contents-wrap').css({
    display: 'none'
  });
  $('.section').css({
    display: 'block'
  });
  $('.map-button').css({
    display: 'none',
    zIndex: -1
  });
  $('.list-button').css({
    display: 'block',
    zIndex: 9999
  });
});

$('.list-button').click(function () {
  $('footer').css({
    display: 'block'
  });
  $('.category-bar').css({
    display: 'block'
  });
  $('.contents-wrap').css({
    display: 'block'
  });
  $('.section').css({
    display: 'none'
  });
  $('.list-button').css({
    display: 'none',
    zIndex: 0
  });
  $('.map-button').css({
    display: 'block',
    zIndex: 9999
  });
});