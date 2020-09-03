 


_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

/**
 * 쿠키를 가져오는 메서드.
 * @param cname - 쿠키 이름.
 * @returns {string}  쿠키 값.
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

/**
 * 쿠키를 세팅해주는 메서드. (1주일)
 * @param cname - 쿠키이름
 * @param cvalue - 쿠키 값.
 *
 */
function setCookie(cname, cvalue, until) {
  var cuntil = until || new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  $.cookie(cname, cvalue, {path: '/', expires: cuntil});
}

function getParameter(param) {
  var returnValue;
  var url = location.href;
  var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
  for (var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split('=')[0];
    if (varName.toUpperCase() == param.toUpperCase()) {
      returnValue = parameters[i].split('=')[1];
      return decodeURIComponent(returnValue);
    }
  }
}

function getParameter_target_url(url, param) {
  var returnValue;
  var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
  for (var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split('=')[0];
    if (varName.toUpperCase() == param.toUpperCase()) {
      returnValue = parameters[i].split('=')[1];
      return decodeURIComponent(returnValue);
    }
  }
}

/**
 * 원하는 일수를 ms 단위로 리턴해줌.
 * @param day - 날 수
 * @returns {integer} - 날 수의 ms 단위
 */
function getDays(day) {
  var days,
      oneDay = 24 * 60 * 60 * 1000;

  if (day) {
    days = oneDay * parseInt(day);
  } else {
    days = oneDay;
  }

  return days;
}

/**
 * 현재 언어 설정을 리턴 해주는 메서드.
 * @returns {string} - 언어 설정 값.
 */
function getLanguage() {
  return get_language();
}

/**
 * 언어 설정을 바꿔주는 메서드.
 * @param language - 언어 이름.
 */
function changeLanguage(language) {
  //language Cookie key
  var languageKey = "language";

  setCookie(languageKey, language);
}

/**
 * 디테일 페이지의 picture를 laze 로딩 시켜주는 메서드.
 */
function photoLazyLoading() {
  var review_area = $(".picture_item");

  review_area.lazyload({
    // effect : "fadeIn"
  });
}

function showLodingblackScreen() {
  //검은 레이어 배경과 로딩바
  var $black_screen = $(".black_screen"),
      $loading_bar = $(".loading_bar");

  $black_screen.show();
  $loading_bar.show();
}

function hideLodingblackScreen() {
  //검은 레이어 배경과 로딩바
  var $black_screen = $(".black_screen"),
      $loading_bar = $(".loading_bar");

  $black_screen.hide();
  $loading_bar.hide();
}

function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function go_to_top(self) {
  $('html,body').animate({scrollTop: 0}, 500, function() {
    $(self).fadeOut();
  });
}

function off_scroll() {
  $(document).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function(e) {
    e.preventDefault();
    return;
  });
}

function on_scroll() {
  $(document).off(".disableScroll");
}

function str_cut(str, str_limit_length, prefix) {
  var prefix = prefix || "...";

  if (!str) {
    return "";
  }

  if (str.length > str_limit_length) {
    str = str.substring(0, str_limit_length - 1);
    str = str + prefix;
  }

  return str;
}

function go_to_app() {
  var is_android = false;
  var mobilewords = new Array("Android");
  for (var word in mobilewords) {
    if (navigator.userAgent.match(mobilewords[word]) != null) {
      is_android = true;
      location.href = "mangoplate://xn--main-ee6q572e";
      //setTimeout(function(){
      //    go_to_market();
      //}, 1500);
      break;
    }
  }

  var is_ios = false;
  var ios_words = new Array("iPhone", "iPod");
  for (var word in ios_words) {
    if (navigator.userAgent.match(ios_words[word]) != null) {
      is_ios = true;
      location.href = "mangoplate://xn--main-ee6q572e";
      //setTimeout(function(){
      //    go_to_market();
      //}, 1500);
      break;
    }
  }
}

function get_device_os_type() {
  var device_type = {
    "ios": false,
    "android": false,
    "androidChromeIntent": false,
    "androidChrome25over": false
  };

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    device_type.ios = true;
  } else if (navigator.userAgent.match(/Android/i)) {
    device_type.android = true;

    var chromeString = navigator.userAgent.match(/Chrome\/[0-9]*/g);

    // 크롬 중에 intent로만 호출되는 버전 확인.
    var supportsIntent = chromeString && chromeString[0].split('/')[1] >= 25;
    if (supportsIntent) {
      device_type.androidChromeIntent = true;
    }

    var is_matched = navigator.userAgent.match(/WebKit\/[^\ ]*/);

    if (is_matched) {
      device_type.androidChrome25over = parseFloat(is_matched[0].toLowerCase().substr(7)) > 537.22;
    } else {
      device_type.androidChrome25over = false;
    }

  }

  return device_type;
}

function go_to_app_restaurant(restaurant_uuid) {
  if (!restaurant_uuid) {
    return false;
  }

  var service_info = {
        "scheme_url": "mangoplate://restaurant_detail?restaurant_uuid=" + restaurant_uuid,
        "package": "com.mangoplate"
      },
      device_type_obj = get_device_os_type(),
      visited = (new Date()).getTime(),
      alreadyMoved = false;

  if (device_type_obj.androidChromeIntent) {
    // 안드로이드 크롬에서는 intent 만 동작하는 경우 처리.
    var intentUrl = "intent:" + service_info.scheme_url + "#Intent;package=" + service_info.package + ";end;";

    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = intentUrl;
  } else {
    window.location.href = service_info.scheme_url;
  }

  document.body.appendChild(iframe);

  // 뒤로가기 호출시 캐싱될 수도 있으므로 iframe을 삭제 한다.
  document.body.removeChild(iframe);
}

/**
 * 안드로이드 인지 아닌지 체크하는 함수.
 * @returns {boolean} - true : 안드로이드, false : 다른 OS
 * @private
 */
function _isAndroid() {
  var ua = navigator.userAgent.toLowerCase();

  return ua.indexOf("android") > -1;
}

/**
 * IOS 인지 아닌지 확인하는 메서드.
 * @returns {boolean} - true : IOS, false : 다른 OS
 * @private
 */
function _isIOS() {
  var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ],
      result = false;

  while (iDevices.length) {
    if (navigator.platform === iDevices.pop()) {
      result = true;
    }
  }

  return result;
}

function scroll_lock(not_fixed) {
  var css_property = {"overflow": "hidden"};

  if (is_mobile_viewport() && !not_fixed) {
    css_property['position'] = 'fixed';
  }

  $("body").css(css_property);
}

function unscroll_lock() {
  var css_property = {"overflow": "visible"};

  if (is_mobile_viewport()) {
    css_property['position'] = 'static';
  }

  $("body").css(css_property);
}

function scroll_toggle() {
  var now_overflow = $("body").css("overflow");

  if (now_overflow == "hidden") {
    unscroll_lock();
  } else {
    scroll_lock();
  }
}

function visible_black_screen() {
  $(".black_screen").fadeToggle();
}

function go_to_market(location, event) {
  if (event) {
    event.stopPropagation();
  }

  var iframe = document.createElement('iframe'),
      market_url_arr = {
        "android": "market://details?id=com.mangoplate",
        "ios": "https://itunes.apple.com/app/id628509224"
      };

  iframe.style.display = 'none';

  if (_isAndroid()) {
    var android_call_url;

    android_call_url = market_url_arr.android;
    window.location.href = android_call_url;

  } else if (_isIOS()) {
    window.location.href = market_url_arr.ios;
  } else {
    window.location.href = market_url_arr.android;
  }
}

function get_segment(index) {
  var pathname = window.location.pathname,
      pathname_arr = pathname.split("/");
  if (pathname_arr.length > 1) {
    pathname_arr = pathname_arr.slice(1, pathname.length);
  }
  if (index || index > -1) {
    return pathname_arr[index];
  } else {
    return pathname_arr;
  }
}

function scroll_event_able() {
  var $body = $("body"),
      check_events = $._data($body[0], "events"),
      event_array = ["touchmove", "scroll", "mousewheel"];

  $body.unbind(event_array.join(" "));
}

function scroll_event_disalbe() {
  var $body = $("body"),
      check_events = $._data($body[0], "events"),
      event_array = ["touchmove", "scroll", "mousewheel"];

  $body.on(event_array.join(" "), function(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  });
}

function check_safari() {
  if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    return /safari/.test(navigator.userAgent.toLocaleLowerCase()) && !/crios/.test(navigator.userAgent.toLocaleLowerCase());
  } else {
    return /safari/.test(navigator.userAgent.toLocaleLowerCase());
  }
}

function referrer_params(exclude_param_arr) {
  exclude_param_arr = exclude_param_arr || [];

  var a_tag = document.createElement("a"),
      referrer_param_arr,
      referrer_param_str_prefix = "?",
      referrer_param_str;

  a_tag.href = document.referrer;

  referrer_param_str = a_tag.search.replace("?", "");
  referrer_param_arr = referrer_param_str.split("&");

  referrer_param_arr.forEach(function(item) {
    var temp_arr = item.split("=");

    if (exclude_param_arr.indexOf(temp_arr[0]) > -1) {
      referrer_param_arr = _.without(referrer_param_arr, temp_arr.join("="));
    }
  });

  referrer_param_str = referrer_param_str_prefix + referrer_param_arr.join("&");

  return referrer_param_str;
}

function get_utm_string(target) {
  var $target = target ? $(target) : {data: function(){}};
  var origin_param = "?utm_source=organic&utm_medium=organic&utm_campaign=organic";
  var utm_param;
  var utm_term;

  if (window.location.search.indexOf("utm_source") > -1) {
    utm_param = window.location.search;
  } else {
    if (document.referrer.indexOf("utm_source") > -1) {
      utm_param = referrer_params(["keyword", "page"]);
    } else {
      utm_param = origin_param;
    }
  }

  if (is_naver_app()) {
    utm_term = "NAVER_APP";
    trackEvent(utm_term);
  } else {
    utm_term = $target.data('event_term') || "organic";
  }

  utm_param = utm_param + '&utm_content=' + ($target.data('event_name') || "organic") + '&utm_term=' + utm_term;

  if (utm_param.indexOf("mangoplate.com") == -1) {
    utm_param = "&referrer=" + encodeURIComponent(utm_param.replace('?', '&'));
  }

  return utm_param;
}

function go_to_app_or_market(target, device_os) {
  var OS_STRING = {
    "IOS": "ios",
    "ANDROID": "android"
  };
  var utm_param;
  var link_promise;
  var store_link;

  if(!is_mobile_viewport()){
    var locale;
    var host_url = "https://www.mangoplate.com";

    if(OS_STRING.ANDROID === device_os){
      store_link = "https://play.google.com/store/apps/details?id=com.mangoplate";
    } else if(OS_STRING.IOS === device_os){
      store_link = "https://itunes.apple.com/kr/app/id628509224";
    } else {
      locale = get_locale();

      if(locale === "ko") {
        store_link = host_url;
      } else {
        store_link = host_url + "/" + locale;
      }
    }

    window.open(store_link);
    return false;
  } else {
    if(OS_STRING.ANDROID === device_os && _isIOS()){
      return false;
    } else if(OS_STRING.IOS === device_os && _isAndroid()){
      return false;
    }
  }

  utm_param = get_utm_string(target);
  window.mp20.branch_io_service.init();
  link_promise = window.mp20.branch_io_service.make_link(utm_param);

  link_promise.then(function(link) {

  });
}

function get_default_language() {
  return "kor";
}

function get_language() {
  var locale_and_language_map = {"ko": "kor", "en": "eng", "zh": "zho"};
  var locale = I18n.currentLocale();

  if(locale_and_language_map[locale]){
    return locale_and_language_map[locale];
  } else {
    return get_default_language();
  }
}

function get_locale() {
  return I18n.currentLocale();
}

function get_locale_url(url) {
  var isFullURL = url.indexOf('http://') > -1 || url.indexOf('https://') > -1;

  if (isFullURL) {
    return url;
  }

  if(I18n.defaultLocale === I18n.currentLocale()){
    return url
  } else {
    return "/" + I18n.currentLocale() + url;
  }
}

function get_device_type() {
  return "web";
}

function get_device_uuid() {
  var device_uuid_name = "mp_device_uuid";

  return getCookie(device_uuid_name);
}

function toggle_menu_layer() {
  if (window.mp20.push_status_server) {
    window.mp20.push_status_server.trigger_event(window.mp20.push_status_server.make_open_action("menu"));
  } else {
    toggle_menu_layer_logic();
  }
}

function toggle_menu_layer_logic() {
  var $menu_module = $(".menu_module");

  if ($menu_module.css("display") === "none") {
    $menu_module.fadeIn("fast");
    //scroll_event_disalbe();
  } else {
    $menu_module.fadeOut("fast");
    //scroll_event_able();
  }
}

function close_menu_layer(callback) {
  if (window.mp20.push_status_server) {
    window.history.back();

    if (typeof callback === "function") {
      callback();
    }

    //window.mp20.push_status_server.trigger_event(window.mp20.push_status_server.make_close_action("menu"));
  } else {
    var $menu_module = $(".menu_module");

    $menu_module.fadeOut("fast");
  }
  //var $menu_module = $(".menu_module");
  //
  //$menu_module.hide();
  //scroll_event_able();
}

function trim(str) {
  if (str) {
    str = str.toString();
    return str.replace(/ /g, '');
  } else {
    return str;
  }
}

function replaceAll(str, replace_str, target_str) {
  return str.split(replace_str).join(target_str);
}

function number_comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function mp20_stop_scroll() {
  var $body = $('body');

  $body.addClass('stop-scrolling');
  $body.bind('touchmove scroll', function(e) {
    e.preventDefault()
  });
}

function mp20_start_scroll() {
  var $body = $('body');

  $body.removeClass('stop-scrolling');
  $body.unbind('touchmove');
}

function is_mobile_viewport() {
  var client_width = document.documentElement.clientWidth;

  return (320 <= client_width) && (client_width < 769);
};

function img_error(element, src) {
  element.onerror = "";
  element.src = src;
  return true;
}

function is_mobile_device() {
  var check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// GA
/** @deprecated */
function get_common_ga_page_name(pg_name) {
  var is_app_param = "is_app";

  if (is_mobile_viewport()) {
    if (getParameter(is_app_param)) {
      pg_name = pg_name + "_APP";
    } else {
      pg_name = pg_name + "_MOBILE";
    }
  }
  return pg_name;
}
/** @deprecated */
function common_ga(pg_name, event_name, event_label, evnet_value) {
  if (!pg_name) {
    pg_name = get_now_page_code();
  }

  pg_name = get_common_ga_page_name(pg_name);

  if(_.isNumber(event_label)){
    event_label = event_label.toString()
  }

  if (_.isObject(event_label)) {
    try {
      event_label = JSON.stringify(event_label)
    } catch (e) {
      event_label = undefined;
    }
  }

  ga('send', 'event', pg_name, event_name, event_label, evnet_value);
};
/** @deprecated */
function common_ga_page(pg_name) {
  pg_name = get_common_ga_page_name(pg_name);

  ga('send', 'pageview', pg_name);
}
////////////////////////////////////////////////////////////////////////////////////////////////

function get_image_size(name) {
  var image_size = {
    "small": "/256x256/",
    "normal": "/512x512/",
    "big": "/1024x1024/"
  };

  return image_size[name];
}

function get_recommand_class_and_message(action_value) {
  var recommend_list = [
    {
      "class_name": "bad",
      "msg": "별로"
    },
    {
      "class_name": "ok",
      "msg": "괜찮다"
    },
    {
      "class_name": "good",
      "msg": "맛있다"
    }
  ];

  return recommend_list[action_value];
}

function get_wannago_text(action_class) {
  return action_class === "not_wannago_btn"
    ? I18n.t("menu_name.mn_visited")
    : I18n.t("menu_name.mn_wannago");
}

function get_time_diff_date(target_date) {
  var today = new Date(),
      dateArray = target_date.split("-"),
      dateObj = new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]);

  return parseInt((today.getTime() - dateObj.getTime()) / 1000 / 60 / 60 / 24);
}

function get_common_params() {
  var common_param = {
    "language": getLanguage(),
    "device_uuid": get_device_uuid(),
    "device_type": get_device_type()
  };

  return common_param;
}

function get_region_text(common_code, region_code) {
  var type_name = "region_code";

  return get_commoncode_by_display_text(common_code, type_name, region_code);
}

/**
 * metro display_text를 가져오는 메서드.
 * @param common_code - commoncode_array
 * @param metro_code - metro code
 * @returns {string || undefined}
 */
function get_metro(common_code, metro_code) {
  var type_name = "metro_code";

  return get_commoncode_by_display_text(common_code, type_name, metro_code);
}

/**
 * sub_cuisine_code display_text를 가져오는 메서드.
 * @param common_code - commoncode_array
 * @param sub_cuisine_code - sub_cuisine_code
 * @returns {string} - cuisine code text
 */
function get_subcuisine(common_code, sub_cuisine_code) {
  var type_name = "subcusine_code";

  return get_commoncode_by_display_text(common_code, type_name, sub_cuisine_code);
}

/**
 * price code text를 가져오는 메서드.
 * @param common_code - common_code array
 * @param price_code - price_code
 * @returns {string} - price code text
 */
function get_price(common_code, price_code) {
  var type_name = "price_range_code";

  return get_commoncode_by_display_text(common_code, type_name, price_code);
}

/**
 * parking code text를 가져오는 메서드.
 * @param common_code - common code array
 * @param parking_code - parking code
 * @returns {string|undefined} - parking code text
 */
function get_parking(common_code, parking_code) {
  var type_name = "parking_option_code";

  return get_commoncode_by_display_text(common_code, type_name, parking_code);
}
/**
 * commoncode에서 display_text를 가져오는 메서드.
 * @param common_code - common_code Array
 * @param type_name - commoncode typeName
 * @param type_value - commoncode typeValue
 * @returns {string || undefined}
 */
function get_commoncode_by_display_text(common_code, type_name, type_value) {
  var metro_arr = _.where(common_code, {"type_name": type_name, "type_value": type_value}),
      metro_obj;

  metro_obj = metro_arr.length ? metro_arr[0] : {};

  return metro_obj.display_text || "";
}

function scroll_lock_for_gallery() {
  $("body").css("overflow", "hidden").css("position", "fixed");
}

function is_scroll_status() {
  var $body = $("body");

  return $body.css("overflow") === "hidden" && $body.css("position") === "fixed";
}

function unscroll_lock_for_gallery() {
  $("body").css("overflow", "visible").css("position", "static");
}

function get_ab_test_message(target, data_name, var_param) {
  var $target,
      return_data,
      type_str;

  if (target instanceof Event) {
    $target = $(target.currentTarget);
  } else {
    if (!(target instanceof $)) {
      $target = $(target);
    } else {
      $target = target;
    }
  }

  switch (var_param) {
    case 0:
      type_str = "_a";
      return_data = $target.data(data_name + type_str);
      break;
    case 1:
      type_str = "_b";
      return_data = $target.data(data_name + type_str);
      break;
  }

  return return_data;
}

function excute_ab_test_script(ab_script_array) {
  var var_params = getParameter("var");

  ab_script_array[parseInt(var_params ? var_params : 0)]();
}

function get_now_page_code() {
  var now_segment = get_segment(0),
      now_page_code,
      change_rule = {
        "SEARCH": "SEARCH_RESULT",
        "RESTAURANTS": "RESTAURANT",
        "TOP_LISTS": "TOP_LIST",
      };

  if (now_segment) {
    now_page_code = replaceAll(now_segment, "_", "");
    now_page_code = now_page_code.toUpperCase();
    now_page_code = change_rule[now_page_code] ? change_rule[now_page_code] : now_page_code;
  } else {
    now_page_code = "MAIN";
  }

  return "PG_" + now_page_code;
}

function reverse_str(str) {
  return str.split("").reverse().join("");
}

function insert_array_between(insert_index, plus_number, list, insert_data) {
  var one_more_index,
      origin_insert_index = insert_index,
      plus_number = plus_number || 0;

  _.each(list, function(item, index) {
    one_more_index = index + 1;

    if (!(one_more_index % insert_index)) {
      list.splice(index, 0, insert_data);
    }

    insert_index = insert_index + origin_insert_index + plus_number;
  });

  return list;
}

function get_between_number_arr(base_number, up_number, max_number) {
  var result_arr = [],
      now_number = base_number + up_number;

  for (; now_number < max_number; now_number = now_number + base_number + up_number) {
    result_arr.push(now_number);
  }

  return result_arr;
}

function get_og_meta_data() {
  var $meta = $("meta"),
      meta_content,
      meta_property,
      og_meta_list = [],
      $item;

  _.each($meta, function(item) {
    $item = $(item);
    meta_property = $item.attr("property");

    if (meta_property && meta_property.indexOf("og:") > -1) {
      meta_content = $item.attr("content");
      og_meta_list.push({
        "name": meta_property,
        "value": meta_content
      });
    }
  });

  return og_meta_list;
}

function convertUTCDateToLocalDate(date) {
  date = new Date(date);

  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate.toLocaleString();
}

function removeURLParameter(url, parameter) {
  //prefer to use l.search if you have a location/link object
  var urlparts = url.split('?');
  if (urlparts.length >= 2) {

    var prefix = encodeURIComponent(parameter) + '=';
    var pars = urlparts[1].split(/[&;]/g);

    //reverse iteration as may be destructive
    for (var i = pars.length; i-- > 0;) {
      //idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }

    url = urlparts[0] + '?' + pars.join('&');
    return url;
  } else {
    return url;
  }
}

function hangul_Josa_generator(txt, josa) {
  var code = txt.charCodeAt(txt.length - 1) - 44032;
  var cho = 19, jung = 21, jong = 28;
  var i1, i2, code1, code2;

  // 원본 문구가 없을때는 빈 문자열 반환
  if (txt.length == 0) return '';

  // 한글이 아닐때
  if (code < 0 || code > 11171) return txt;

  if (code % 28 == 0) return txt + Josa.get(josa, false);
  else return txt + Josa.get(josa, true);
}

hangul_Josa_generator.get = function(josa, jong) {
  // jong : true면 받침있음, false면 받침없음

  if (josa == '을' || josa == '를') return (jong ? '을' : '를');
  if (josa == '이' || josa == '가') return (jong ? '이' : '가');
  if (josa == '은' || josa == '는') return (jong ? '은' : '는');
  if (josa == '와' || josa == '과') return (jong ? '와' : '과');

  // 알 수 없는 조사
  return '';
};

function is_naver_app() {
  return navigator.userAgent.indexOf('NAVER(inapp') > -1;
}

function is_kakao_app() {
  return navigator.userAgent.indexOf('KAKAOTALK') > -1;
}

function to_safe_keyword(keyword) {
  keyword = replaceAll(keyword, ".", "");
  keyword = removeSpecialChar(keyword);
  return replaceAll(keyword, "/", "");
}

function go_to_search_page(keyword) {
  if (!keyword || keyword === "undefined") {
    alert(I18n.t('label.enter_the_keyword'));
    return false;
  }

  location.href = get_locale_url("/search/" + encodeURIComponent(to_safe_keyword(keyword)));
}

if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

function chunk(chunkSize, array) {
  return _.reduce(array, function(previous, current) {
    var chunk;
    if (previous.length === 0 ||
        previous[previous.length - 1].length === chunkSize) {
      chunk = [];   // 1
      previous.push(chunk);   // 2
    }
    else {
      chunk = previous[previous.length - 1];   // 3
    }
    chunk.push(current);   // 4
    return previous;   // 5
  }, []);   // 6
}

function get_picture_url_by_akamai(pic_domain, pic_key, width, height, ext) {
  if (!pic_domain || !pic_key) {
    return 'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80';
  }
  var picture_url = pic_domain + "/" + pic_key;

  width = width || "*"
  height = height || "*"
  ext = ext || "jpg"

  var akamai_qs = _.template("?fit=around|{{width}}:{{height}}&crop={{width}}:{{height}};*,*&output-format={{ext}}&output-quality=80")

  akamai_qs = akamai_qs({
    width: width,
    height: height,
    ext: ext
  })

  picture_url += akamai_qs

  return picture_url;
}

function get_full_picture_url_by_akamai(picture_url, width, height, ext) {
  width = width || "*"
  height = height || "*"
  ext = ext || "jpg"

  var akamai_qs = _.template("?fit=around|{{width}}:{{height}}&crop={{width}}:{{height}};*,*&output-format={{ext}}&output-quality=80")

  akamai_qs = akamai_qs({
    width: width,
    height: height,
    ext: ext
  })

  picture_url += akamai_qs

  return picture_url;
}

function nameSpace(namespace) {
  var nsparts = namespace.split(".");
  var parent = window

  for (var i = 0; i < nsparts.length; i++) {
    var partname = nsparts[i];

    if (typeof parent[partname] === "undefined") {
      parent[partname] = {};
    }

    parent = parent[partname];
  }

  return parent;
}

function get_rating(rating) {
  if (!rating || !parseFloat(rating)) {
    return "";
  } else {
    return parseFloat(rating).toFixed(1);
  }
}

function get_expected_rating_class(is_official_rating) {
  return is_official_rating ? "" : "expected"
}

/**
 * Image의 onerror에 바인딩 해주는 메서드
 * 바인딩 할때 bind(this)로 this 바인드도 해줘야 한다
 */
function image_on_error(){
  this.src='https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80'
}

function is_foreign_restaurant(region_code){
  return region_code >= 100
}

function get_facebook_user_picture(user){
  var facebook_id = user.facebook_id;
  var picture_url = user.picture_url;

  if(facebook_id && picture_url === ""){
    return "https://graph.facebook.com/" + facebook_id + "/picture?type=large&w‌​idth=128&height=128";
  } else {
    if (picture_url) {
      return get_full_picture_url_by_akamai(picture_url, mp20.constants.DEFAULT_IMAGE_SIZE.USER_PROFILE, mp20.constants.DEFAULT_IMAGE_SIZE.USER_PROFILE);
    } else {
      return mp20.constants.USER_FALLBACK_IMAGE_URL;
    }
  }
}

function get_user_picture_url_by_akamai(picture_url, facebook_id, width, height) {
  if(facebook_id && picture_url) {
    return get_facebook_user_picture({
      facebook_id: facebook_id,
      picture_url: picture_url
    });
  } else {
    return get_full_picture_url_by_akamai(picture_url, width, height);
  }
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

function detectIE11() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // other browser
  return false;
}


function get_page_segment() {
  var locale_map_str = '{"ko":"kor","en":"eng","zh":"zho"}';
  var locale_map = JSON.parse(locale_map_str);
  var locale_list = _.keys(locale_map);
  var segment = get_segment(0);

  if (locale_list.indexOf(segment) > -1){
    return get_segment(1);
  }

  return segment;
}

function get_search_keyword() {
  var locale_map_str = '{"ko":"kor","en":"eng","zh":"zho"}';
  var locale_map = JSON.parse(locale_map_str);
  var locale_list = _.keys(locale_map);
  var segment = get_segment(0);

  if (locale_list.indexOf(segment) > -1){
    return get_segment(2);
  }

  return get_segment(1);
}

function get_display_platform() {
  return is_mobile_viewport() ? "Web_Mobile" : "Web_Desktop";
}

function is_firefox() {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

function safe_json_parse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
}

function isJqueryInstance(instance) {
  return instance instanceof $;
}

function parse_json(str, default_value) {
  try {
    return JSON.parse(str);
  } catch(e) {
    return default_value;
  }
}

function findEl(selector) {
  return document.querySelector(selector);
}

function stringPXToNumber(str) {
  return parseInt(str.slice(0, str.length - 2), 10);
}

function moveArrayItem(array, fromIndex, toIndex) {
  array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);

  return array;
}

function is(instnace, klass) {
  return instnace instanceof klass;
}

function fileToBase64Encode(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      resolve(reader.result)
    };

    reader.onerror = function (error) {
      reject(error)
    };
  });
}

function throwOverrideMethodError(methodName) {
  throw new Error(methodName + ' is must override method');
}

function replaceAllLineBreakString(str, lineBreakString) {
  str = str || '';
  lineBreakString = lineBreakString || '<br/>';
  return str.replace(/(?:\r\n|\r|\n)/g, lineBreakString);
}

function removeSpecialChar(str) {
  var temp = str || '';
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  if(regExp.test(temp)){
    temp = temp.replace(regExp, '');
  }
  return temp;
}

function escapeString(text) {
  var result = text.replace(/</g,"&lt;").replace(/>/g,"&gt;");
  return result;
}

function encodeReviewKey(actionValue) {
  return btoa(actionValue);
}

function decodeReviewKey(reviewKey) {
  return atob(reviewKey);
}
;
(function () {
  var CONSTANTS = (function () {
    var constants = {
      "SLACK_WEB_HOOK_URL": "https://hooks.slack.com/services/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",
      "COOKIE_NAME_ENABLED": "debug_impression"
    };

    return {
      get: function (name) {
        return _.clone(constants[name]);
      }
    };
  })();

  var AdImpressionNotifier = {
    send_message: function (line_item_id, ad_unit_path) {
      if ($.cookie(CONSTANTS.get('COOKIE_NAME_ENABLED')) !== '1') {
        return;
      }

      var log_text = "Line Item ID: " + line_item_id + "\nAD Unit Path: " + ad_unit_path;

      $.ajax(CONSTANTS.get("SLACK_WEB_HOOK_URL"), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: "payload=" + encodeURIComponent(JSON.stringify({
          channel: "#web",
          username: "[WEB] DFP Impression Log",
          icon_emoji: ":kissing_heart:",
          attachments: [
            {
              "fallback": log_text,
              "title": "IMPRESSION",
              "text": log_text,
              "color": "#7CD197"
            }
          ]
        }))
      });
    },

    toggle: function() {
      var cookie_key = CONSTANTS.get('COOKIE_NAME_ENABLED');

      if($.cookie(cookie_key)) {
        $.removeCookie(cookie_key);
        alert("설정이 해제되었습니다.");
      } else {
        $.cookie(cookie_key, true);
        alert("설정이 완료되었습니다.");
      }
    }
  };

  window.AdImpressionNotifier = AdImpressionNotifier;
})();
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
!function(){"use strict";function a(){this.defaults={scrollButtons:{enable:!0},axis:"yx"},$.mCustomScrollbar.defaults.scrollButtons=this.defaults.scrollButtons,$.mCustomScrollbar.defaults.axis=this.defaults.axis,this.$get=function(){return{defaults:this.defaults}}}function b(a,b,c,d){c.mCustomScrollbar("destroy");var e={};d.ngScrollbarsConfig&&(e=d.ngScrollbarsConfig);for(var f in a)if(a.hasOwnProperty(f))switch(f){case"scrollButtons":e.hasOwnProperty(f)||(b.scrollButtons=a[f]);break;case"axis":e.hasOwnProperty(f)||(b.axis=a[f]);break;default:e.hasOwnProperty(f)||(e[f]=a[f])}c.mCustomScrollbar(e)}function c(a){return{scope:{ngScrollbarsConfig:"=?",ngScrollbarsUpdate:"=?",element:"=?"},link:function(c,d,e){c.elem=d;var f=a.defaults,g=$.mCustomScrollbar.defaults;c.ngScrollbarsUpdate=function(){d.mCustomScrollbar.apply(d,arguments)},c.$watch("ngScrollbarsConfig",function(a,e){void 0!==a&&b(f,g,d,c)}),b(f,g,d,c)}}}angular.module("ngScrollbars",[]).provider("ScrollBars",a).directive("ngScrollbars",c),a.$inject=[],c.$inject=["ScrollBars"]}();
(function () {
  var Coordinate = function (lat, lon) {
    this._lat = lat || 0;
    this._lon = lon || 0;
  };

  Coordinate.prototype = {
    get lat() {
      return this._lat;
    },

    get lon() {
      return this._lon;
    },

    toString: function () {
      return '(' + this.lat + ', ' + this.lon + ')';
    }
  };

  window.Coordinate = Coordinate;
})();
(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  // "mp20App" Angular App Create.
  var mp20App = angular.module("mp20App", ['ngSanitize', 'ngScrollbars']);

  mp20App.run(["$rootScope", function ($rootScope) {
    $rootScope.page_locale = I18n.currentLocale();
    window.is_login = $rootScope.is_login = auth_service.is_auth();
  }]);
})();
(function () {
  /**
   * page_history_service 네임 스페이스.
   * @type {Object}
   */
  var page_history_service = {};

  /**
   * page_history_service에서 사용할 각종 옵션 및 설정 사항.
   * @type {Object}
   */
  page_history_service.options = {
    "key": "mp_page_history",
    "target_element": $("body"),
    "max_count": 10
  };

  /**
   * localStorage에서 page history를 가져옴.
   * @return {Object || undefined}
   */
  page_history_service.get_page_history_from_localStorage = function () {
    return localStorage.getItem(this.options.key);
  };

  /**
   * localStorage에서 page history를 가져와서 JSON, 없으면 Array로 만들어 주는 메서드.
   * @return {JSON || Array}
   */
  page_history_service.get_page_history = function () {
    var page_history_str = this.get_page_history_from_localStorage(),
      page_history;

    if (page_history_str) {
      page_history = JSON.parse(page_history_str);
    } else {
      page_history = [];
    }

    return page_history;
  };

  /**
   * 데이터 저장시의 사용하는 구조를 만들어서 리턴해주는 메서드.
   * @param  {String} page_type [페이지 타입을 받음(get_segment(0))]
   * @param  {String} value     [페이지 값을 받음(get_segment(1))]
   * @return {Object}           [사용하는 구조로 리턴]
   */
  page_history_service.make_data_format = function (page_type, value) {
    return {
      "page_type": page_type,
      "value": value
    };
  };

  /**
   * localStorage에서 page history를 저장 하는 메서드.
   * 같은 값이 있으면 저장 하지 않고 없으면 저장.
   * @param  {String} restaurant_key [restaurant_key를 받음.]
   */
  page_history_service.set_page_history = function (restaurant_key) {
    var page_history = this.get_page_history();

    var temp_data = this.make_data_format("restaurants", restaurant_key);
    var is_same = _.where(page_history, temp_data);

    if (is_same.length) {
      page_history = this.remove_page_history(restaurant_key);
    }

    temp_data.visited_time = new Date();

    if (page_history.length >= this.options.max_count) {
      page_history = page_history.slice(1, page_history.length);
    }

    page_history.push(temp_data);
    localStorage.setItem(this.options.key, JSON.stringify(page_history));

  };

  /**
   *
   * @param restaurant_key
   */
  page_history_service.remove_page_history = function (restaurant_key) {
    var page_history = this.get_page_history(),
      remove_data = _.reject(page_history, function (data) {
        return data.value === restaurant_key;
      });

    localStorage.setItem(this.options.key, JSON.stringify(remove_data));

    return remove_data;
  };

  page_history_service.remove_all = function () {
    localStorage.setItem(this.options.key, "");
    this.update_count();
  };

  page_history_service.update_count = function (count) {
    var page_history_list = this.get_page_history();
    var page_history_count = page_history_list.length

    $(".user .count").html(page_history_count);
    $(".recent_view_counter").html(page_history_count);
  }


  //window 객체에 넣어줌.
  window.page_history_service = page_history_service;
})();
(function () {
  var auth_service = {};
  var $dom = {};

  $dom.init = function () {
    this.mp_login_btn = $(".mp_login_btn");
    this.mp_mine_btn = $(".mp_mine_btn");
    this.mp_mine_btn_none = $(".mp_mine_btn_none");
    this.wannago_btn = $(".wannago_btn");
    this.user_picture = $(".user_picture");
    this.user_name = $(".header .user .user_name");
    this.user_picture_btn = $(".header .user .is_login_status_btn .thumb");
    this.login_area = $(".login_loading_area");
  };

  $dom.init();
  auth_service.result_of_verify = null;
  auth_service.before_wannago = "before_wannago";
  auth_service.option = {
    "api_host": "https://stage.mangoplate.com",
    "api_subfix": ".js",
    "make_call_url": function (call_url, subfix) {
      var url_subfix = subfix || auth_service.option.api_subfix;
      return auth_service.option.api_host + call_url + url_subfix;
    },
    "save_auth_name": "mp_auth"
  };

  auth_service.is_auth = function () {
    return !!(auth_service.get_access_token());
  };

  auth_service.add_before_wannago = function () {
    var restaurantUUID = $.cookie(this.before_wannago);
    var dontWannagoActionTypes = [3, 4];
    if (!restaurantUUID) {
      return;
    }

    window.mp20.service.RestaurantSupplier.getRestaurant(restaurantUUID)
      .then(function (restaurant) {
        var isEmptyRestaurant = !restaurant;
        var isDontWannagoState = restaurant.action && dontWannagoActionTypes.indexOf(restaurant.action.action_type) > -1

        if (isEmptyRestaurant || isDontWannagoState) {
          throw new Error();
        }

        return mp20.wannago_http_service.wannago(restaurantUUID);
      })
      .then(function (wannago_info) {
        $(mp20.wannago_service.class_name + "[data-restaurant_uuid=" + restaurantUUID + "]").each(function (index, $el) {
          if (!wannago_info.error_code) {
            $(this).addClass(mp20.wannago_service.attr.selected_class);
            $(this).data(mp20.wannago_service.attr.action_id, wannago_info.action_id);
          }
        });

        auth_service.reset_before_wannago();
      })
      .catch(function () {

      });
  };

  auth_service.set_before_wannago = function (restaurant_uuid) {
    $.cookie(this.before_wannago, restaurant_uuid);
  };

  auth_service.reset_before_wannago = function () {
    $.removeCookie(this.before_wannago);
  };

  auth_service.auth_token_verify = function () {
    if (!auth_service.result_of_verify) {
      auth_service.result_of_verify = new Promise(function (resolve) {
        if (!auth_service.is_auth()) {
          resolve();
          return;
        }

        resolve(window.mp20.utils.HttpApi.checkVerifiedAccessToken(auth_service.get_access_token())
          .then(function (info) {
            if (typeof info === "string") {
              return JSON.parse(info);
            }
            return info;
          })
          .then(function (info) {
            if (info.error) {
              throw info.error;
            }
            return info;
          })
          .then(function (info) {
            auth_service.set_auth_info(info);
          })
          .catch(function () {
            alert(I18n.t('label.session_expire'));
            auth_service.logout();
          }));
      })
    }
    return auth_service.result_of_verify;
  };

  auth_service.logout = function () {
    localStorage.removeItem(auth_service.option.save_auth_name);

    function setCookie(cName, cValue, cDay) {
      var expire = new Date();
      expire.setDate(expire.getDate() + cDay);
      cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
      if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
      document.cookie = cookies;
    }

    setCookie("mp_auth", "", -1);
    window.location.reload();
  };

  auth_service.get_auth_info_by_storage = function () {
    var data = localStorage.getItem(auth_service.option.save_auth_name);
    if (data) {
      return JSON.parse(data)
    }
    return null;
  }

  auth_service.get_auth_info = function () {
    return new Promise(function (resolve) {
      if (!auth_service.is_auth()) {
        resolve(null);
        return;
      }

      var auth_info = auth_service.get_auth_info_by_storage();
      if (auth_info) {
        resolve(auth_info);
        return;
      }

      var verified_user_info_promise = auth_service.auth_token_verify()
        .then(function () {
          return auth_service.get_auth_info_by_storage();
        })
      resolve(verified_user_info_promise);
    });
  };

  auth_service.set_auth_info = function (auth_info) {
    if (typeof auth_info === "string") {
      setCookie("mp_auth", JSON.parse(auth_info).access_token);
    } else {
      setCookie("mp_auth", auth_info.access_token);
      auth_info = JSON.stringify(auth_info)
    }
    localStorage.setItem(auth_service.option.save_auth_name, auth_info);
  };

  auth_service.set_history_count = function () {
    page_history_service.update_count();
  };

  auth_service.check_policy_agreements = function (auth_info) {
    var nedd_property = ["private_info", "user_contract"],
      policy_agreements = auth_info.policy_agreements,
      is_verify = true;

    if (policy_agreements) {
      _.each(nedd_property, function (property) {
        var result = policy_agreements[property];

        if (!result) {
          is_verify = false;
        }
      })
    } else {
      is_verify = false;
    }
    return is_verify;
  };

  auth_service.get_access_token = function () {
    return $.cookie("mp_auth");
  };

  auth_service.get_member_uuid = function () {
    var auth_info = auth_service.get_auth_info_by_storage();
    return auth_info ? auth_info.member_uuid : null;
  };

  auth_service.is_holic_user = function () {
    if (auth_service.is_auth()) {
      var auth_info = auth_service.get_auth_info_by_storage();
      if (auth_info && auth_info.user_info) {
        return auth_info.user_info.is_holic;
      }
    }
    return false;
  }

  auth_service.is_validated_access_token = function () {
    var access_token = auth_service.get_access_token();
    var auth_info = this.get_auth_info();
    if (!auth_info) {
      return false;
    }
    return access_token != undefined && auth_info.access_token === access_token;
  };

  auth_service.policy_agreements = function (member_uuid, access_token) {
    window.mp20.utils.HttpApi.policyAgreements(member_uuid, access_token, auth_service.policy_agreements_data)
      .then(function (data) {
        window.location.reload();
      });
  };

  auth_service.set_policy_agreements_data = function (data) {
    this.policy_agreements_data = data;
  };

  auth_service.show_login_loading_area = function () {
    $dom.login_area.show();
  };

  auth_service.hide_login_loading_area = function () {
    $dom.login_area.hide();
  };

  auth_service.filter_terms_agreements = function (terms_agreements) {
    return terms_agreements.filter(function (term) {
      return term.term.id !== "location";
    });
  }

  window.auth_service = auth_service;
})();
(function () {
  var FacebookSDK = (function () {
    var STATUS = {
      CONNECTED: 'connected',
      notAuthorized: 'not_authorized',
      unknown: 'unknown'
    };

    function initialize() {
      FB.init({
        appId: 476661545693695,
        xfbml: true,
        version: 'v2.9'
      });
    }

    function getLoginStatus() {
      return new Promise(function (resolve) {
        FB.getLoginStatus(resolve);
      });
    }

    function login(scope) {
      return new Promise(function (resolve) {
        FB.login(resolve, {
          scope: scope
        });
      })
    }

    function api(path) {
      return new Promise(function (resolve) {
        FB.api(path, resolve);
      })
    }

    initialize();

    return {
      STATUS: STATUS,
      getLoginStatus: getLoginStatus,
      login: login,
      api: api
    };
  })();

  var MPFacebookAuthenticator = (function () {
    var FACEBOOK_PERMISSION_SCOPE = 'email,user_birthday,user_friends';

    function FBLogin() {
      return FacebookSDK.login(FACEBOOK_PERMISSION_SCOPE)
        .then(function (loginRes) {
          var isConnected = loginRes.status === FacebookSDK.STATUS.CONNECTED;

          if (isConnected) {
            return loginRes.authResponse;
          } else {
            throw new Error();
          }
        });
    }

    function FBGetLoginStatus() {
      return FacebookSDK.getLoginStatus()
        .then(function (res) {
          var isConnected = res.status === FacebookSDK.STATUS.CONNECTED;

          if (isConnected) {
            return res.authResponse;
          } else {
            return FBLogin();
          }
        })
    }

    function getFirstStepByViewport() {
      if (is_mobile_viewport()) {
        return FBLogin();
      }

      return FBGetLoginStatus();
    }

    function shouldRedirectToHTTPS() {
      var uriManager = new window.mp20.service.URIManager();

      if (uriManager.isHTTPSURL()) {
        return false;
      }

      var isProductionSubDomain = uriManager.isProductionSubDomain();
      var isBetaSubDomain = uriManager.isBetaSubDomain();
      var isAlphaSubdomain = uriManager.isAlphaSubdomain();
      var isUnknownSubDomain = !(isProductionSubDomain || isBetaSubDomain || isAlphaSubdomain);

      if (isUnknownSubDomain) {
        return false;
      }

      uriManager.toHTTPS();
      if (uriManager.isProductionSubDomain()) {
        uriManager.setSubDomain(window.mp20.service.URIManager.PHASE_BY_SUB_DOMAIN.PRODUCTION);
      }

      alert(I18n.t('label.to_https_redirect'));
      uriManager.toRedirect();
      return true;
    }

    function signIn() {
      if (shouldRedirectToHTTPS()) {
        return;
      }

      auth_service.show_login_loading_area();

      getFirstStepByViewport()
        .then(function (authResponse) {
          return window.mp20.utils.HttpApi.signInByFacebook(authResponse.userID, authResponse.accessToken)
            .then(function (res) {
              if (res.error) {
                return signUp(authResponse);
              }
              return res;
            });
        })
        .then(function (res) {
          var termsAgreements = auth_service.filter_terms_agreements(res.terms_agreements);
          if (termsAgreements.length) {
            auth_service.hide_login_loading_area();
            window.account_terms_layer.open(res.user_info.member_uuid, termsAgreements, res);
          } else {
            auth_service.set_auth_info(res);
            window.location.reload();
          }
        })
        .catch(function (err) {
          if (err.message) {
            alert(err.message);
          }
          auth_service.hide_login_loading_area();
        });
    }

    function signUp(authInfo) {
      return FacebookSDK.api('/me?fields=birthday,email,first_name,last_name,locale')
        .then(function (userInfo) {
          return {
            userId: authInfo.userID,
            accessToken: authInfo.accessToken,
            firstName: userInfo.first_name,
            lastName: userInfo.last_name,
            email: userInfo.email,
            locale: userInfo.locale,
            birthday: userInfo.birthday,
          };
        })
        .then(function (FBUserInfo) {
          return window.mp20.utils.HttpApi.signUpByFacebook(FBUserInfo);
        })
        .then(function (res) {
          if (res.error) {
            throw new Error("알 수 없는 오류가 발생하였습니다. 다시 시도해 주세요.");
          }

          return res;
        });
    }

    return {
      login: signIn
    }
  })();

  window.mp_facebook = MPFacebookAuthenticator;
})();
$(document).ready(function () {
  var mp_kakao = {};
  var constants = nameSpace("mp.module.constants");

  mp_kakao.option = {
    "loginSuccessCallback": function (authObj) {
      auth_service.show_login_loading_area();

      mp_kakao.auth_info = authObj;
      mp_kakao.get_me(mp_kakao.mp_login);
    },

    "loginFailCallback": function (err) {
      alert("카카오톡 로그인이 실패했습니다.");
    },

    "api_host": "https://stage.mangoplate.com",
    "api_subfix": ".json",
    "make_call_url": function (call_url) {
      return mp_kakao.option.api_host + call_url + mp_kakao.option.api_subfix;
    }
  };

  mp_kakao.mp_login = function (kakao_info) {
    var access_token = mp_kakao.auth_info.access_token;
    var kakao_id = kakao_info.id;
    var call_url = "/api/v5/account/login/by_kakao";

    $.ajax({
      "url": mp_kakao.option.make_call_url(call_url),
      "type": "post",
      "data": {
        "kakao_id": kakao_id,
        "kakao_access_token": access_token,
        "device_uuid": get_device_uuid(),
        "device_type": "web",
        "language": get_language()
      }
    }).done(function (auth_info) {
      if (auth_info.error) {
        var error_code = auth_info.error.error_code;
        if (error_code === window.mp20.constants.RESULT_CODE.MAINTENANCE_MODE) {
          window.location.reload();
          return;
        }
        mp_kakao.mp_join(kakao_info);
        return;
      }

      var terms_agreements = auth_service.filter_terms_agreements(auth_info.terms_agreements);
      if (terms_agreements.length) {
        auth_service.hide_login_loading_area();
        window.account_terms_layer.open(auth_info.user_info.member_uuid, terms_agreements, auth_info);
      } else {
        auth_service.set_auth_info(auth_info);
        window.location.reload();
      }
    });
  };

  mp_kakao.mp_join = function (kakao_info) {
    var self = this;
    var call_url = "/api/v5/account/signup/by_kakao";
    var email = kakao_info.kaccount_email ? kakao_info.kaccount_email : '';

    $.ajax({
      "url": self.option.make_call_url(call_url),
      "type": "post",
      "data": {
        "kakao_id": kakao_info.id,
        "kakao_access_token": mp_kakao.auth_info.access_token,
        "device_type": "web",
        "language": get_language(),
        "first_name": kakao_info.properties.nickname,
        "last_name": "",
        "email": email,
        "country": "",
        "picture_url": kakao_info.properties.thumbnail_image,
        "birthday": "",
        "gender": ""
      }
    }).done(function (auth_info) {
      if (auth_info.error) {
        alert("가입 실패.");
        return ;
      }
      var terms_agreements = auth_service.filter_terms_agreements(auth_info.terms_agreements);

      window.account_terms_layer.open(auth_info.user_info.member_uuid, terms_agreements, auth_info);
    })
  }

  mp_kakao.login = function (successCallback, fallCallback) {
    Kakao.Auth.login({
      success: mp_kakao.option.loginSuccessCallback,
      fail: mp_kakao.option.loginFailCallback,
      throughTalk: false
    });
  };

  mp_kakao.get_me = function (successCallback) {
    var options = {
      "url": "/v2/user/me",
      "success": successCallback
    };

    return Kakao.API.request(options);
  };

  mp_kakao.checkLoadKakao = function () {
    var result = false;

    if (window.Kakao) {
      result = true;
    }

    return result;
  }

  Kakao.init("c7a58d638097e8cc349f7700b267b64f");
  window.mp_kakao = mp_kakao;
});
$(document).ready(function () {
  window.mp_apple = (function () {
    function initialize() {
      AppleID.auth.init({
        clientId: 'com.mangoplate.www',
        scope: 'name email',
        redirectURI: 'https://' + window.location.hostname + '/auth/confirm_login/apple',
        usePopup: true
      });
    }

    initialize();

    function shouldRedirectToHTTPS() {
      var uriManager = new window.mp20.service.URIManager();

      if (uriManager.isHTTPSURL()) {
        return false;
      }

      if (!uriManager.isTargetHostDomain()) {
        return false;
      }

      uriManager.toHTTPS();
      if (uriManager.isProductionSubDomain()) {
        uriManager.setSubDomain(window.mp20.service.URIManager.PHASE_BY_SUB_DOMAIN.PRODUCTION);
      }

      alert(I18n.t('label.to_https_redirect'));
      uriManager.toRedirect();
      return true;
    }

    function login() {
      if (detectIE11()) {
        alert(I18n.t('label.not_supported_browser'));
        return;
      }
      if (shouldRedirectToHTTPS()) {
        return;
      }
      AppleID.auth.signIn();
    }

    function parseIdToken(id_token) {
      try {
        return JSON.parse(atob(id_token.split('.')[1]));
      } catch (e) {
        return null;
      }
    }

    return {
      login: login,
      parseIdToken: parseIdToken
    };
  })();

  document.addEventListener('AppleIDSignInOnSuccess', function (data) {
    var token = window.mp_apple.parseIdToken(data.detail.authorization.id_token);
    var aud = token.aud;
    var sub = token.sub;
    var email = token.email;
    var code = data.detail.authorization.code;
    var firstName = '';
    var lastName = '';
    if (data.detail.user) {
      firstName = data.detail.user.firstName;
      lastName = data.detail.user.lastName;
    }

    auth_service.show_login_loading_area();
    window.mp20.utils.HttpApi.startWithApple(aud, sub, code, email, firstName, lastName)
      .then(function (res) {
        if (res.error) {
          throw new Error(res.error.message);
        }
        var termsAgreements = auth_service.filter_terms_agreements(res.terms_agreements);
        if (termsAgreements.length) {
          auth_service.hide_login_loading_area();
          window.account_terms_layer.open(res.user_info.member_uuid, termsAgreements, res);
        } else {
          auth_service.set_auth_info(res);
          window.location.reload();
        }
      })
      .catch(function (err) {
        console.error(err);
        alert(I18n.t('error_meesage.default'));
        auth_service.hide_login_loading_area();
      });
  });

});

(function(){
    $(document).ready(function(){
        var $dom = {};
        var constants = nameSpace("mp.module.constants");
        var true_str = "true",
            false_str = "false",
            false_btn_src = get_full_picture_url_by_akamai("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/24_jjq1lbdgzpdnp.png", undefined, undefined, "png"),
            true_btn_src = get_full_picture_url_by_akamai("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ojlwsg-0cpi1dz8p.png", undefined, undefined, "png"),
            account_terms_layer = {},
            terms_title_map ={
              "privacy": I18n.t("terms.privacy"),
              "privacy_short": I18n.t("terms.privacy_short"),
              "contract": I18n.t("terms.contract")
            },
            has_click_class = "ischecked",
            terms_item_template;

        account_terms_layer.open = function(member_uuid, terms_list, auth_info){
            trackView("PG_AGREEMENT");

	          auth_service.hide_login_loading_area();
            mp_login_layer.close_layer();
            account_terms_layer.member_uuid = member_uuid;
            account_terms_layer.terms_list = terms_list;
            account_terms_layer.auth_info = auth_info;

            terms_list.forEach(function(terms_item) {
              terms_item = $.extend({}, terms_item, {
                title: I18n.t('login_popup.agree', {
                  title: terms_title_map[terms_item.term.id] || terms_item.term.title
                })
              });

              var $terms_item = $(account_terms_layer.build_terms_item_template(terms_item));

              if(terms_item.term.required === "required") {
                $terms_item.find('.required_message').show();
              }

              $dom.account_terms_items.append($terms_item);
            });

            $(".account_terms_layer").fadeIn('fast');
            scroll_lock();
        };

        account_terms_layer.build_terms_item_template = function(terms_data) {
          if (!terms_item_template) {
            terms_item_template = Handlebars.compile(account_terms_layer.get_terms_item_template_string());
          }

          return terms_item_template(terms_data);
        };

      account_terms_layer.get_terms_item_template_string = function () {
        return '<li class="account_terms_item">' +
          '        <p>' +
          '          <a href="' + get_locale_url('https://stage.mangoplate.com/api/terms/revisions/{{revisionID}}.html') + '" rel="nofollow" onclick="trackEvent(\'CLICK_TERMS\', \'{{ term.id }}\',\'\',\'PG_AGREEMENT\')" target="_blank" class="mango_color_under_bar">' +
          '            {{ title }}' +
          '          </a>' +
          '' +
          '          <span class="required_message">(' + I18n.t('login_popup.required') + ')</span>' +
          '        </p>' +
          '        <button class="check_terms_btn" data-ischecked="false" data-term-id="{{ term.id }}" data-revision-id="{{ revisionID }}">' +
          '          <img src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/24_jjq1lbdgzpdnp.png?fit=around|:&crop=:;*,*&output-format=png&output-quality=80"' +
          '               alt="arrow"' +
          '               title=""' +
          '          />' +
          '        </button>' +
          '      </li>';
      }

        account_terms_layer.close = function(){
            $(".account_terms_layer").fadeOut('fast');
            $dom.account_terms_items.find(".account_terms_item").remove();
            $dom.all_terms_btn.find("img").attr("src", false_btn_src);
            $dom.all_terms_btn.data(has_click_class, false_str);
            $dom.account_terms_layer_ok_btn.prop("disabled", true);
            unscroll_lock();
        };

        $dom.init = function(){
            this.check_terms_btn = $(".check_terms_btn");
            this.account_terms_layer_ok_btn = $(".account_terms_layer_ok_btn");
            this.all_terms_btn = $(".all_terms_btn");
            this.close_btn = $(".close_btn");
            this.account_terms_layer = $(".account_terms_layer");
            this.account_terms_items = $(".account_terms_items");
        };

        $dom.init();

        $dom.close_btn.on("click", function(){
            account_terms_layer.close();
        });

        $dom.account_terms_items.on("click", ".check_terms_btn", function(e){
            if($(this).hasClass("all_terms_btn")){
                return false;
            }

            var is_checked = $(this).data(has_click_class);

            if(is_checked === true_str){
                $(this).find("img").attr("src", false_btn_src);
                $(this).data(has_click_class, false_str);

            } else {
                $(this).find("img").attr("src", true_btn_src);
                $(this).data(has_click_class, true_str);
            }

            var true_count = 0,
                check_terms_btn_list = $(".account_terms_items .check_terms_btn");

            check_terms_btn_list.each(function(i, e){
                if($(this).data(has_click_class) == true_str){
                    true_count++;
                }
            });

            if(check_terms_btn_list.length == true_count){
                $dom.all_terms_btn.find("img").attr("src", true_btn_src);
                $dom.all_terms_btn.data(has_click_class, true_str);
            } else {
                $dom.all_terms_btn.find("img").attr("src", false_btn_src);
                $dom.all_terms_btn.data(has_click_class, false_str);
            }

            required_check(account_terms_layer.terms_list);
        });

        $dom.account_terms_layer_ok_btn.on("click", function(){
            var terms_list = account_terms_layer.terms_list;
            var term_el_list = terms_list.map(function(revisionItem) {
              return $(".check_terms_btn[data-term-id="+revisionItem.term.id+"]");
            });

            required_check(terms_list);

            var revisionIDs = term_el_list
              .map(function (revisionItem) {
                if (revisionItem.data("ischecked") === true_str) {
                  return revisionItem.data("revision-id");
                }
              }).filter(function (revisionItem) {
                if (typeof(revisionItem) !== "undefined") {
                  return revisionItem
                }
              });

            var check_terms_map = {};

            term_el_list.forEach(function(revisionItem) {
              var term_id = revisionItem.data('term-id');

              check_terms_map[term_id] = revisionItem.data("ischecked") === true_str;
            });

            trackEvent("CLICK_CONFIRM", JSON.stringify(check_terms_map), '', 'PG_AGREEMENT');

          window.mp20.utils.HttpApi.termsAgreements(account_terms_layer.auth_info.access_token, account_terms_layer.member_uuid, revisionIDs.join(","))
            .then(function (res) {
              if (res.error) {
                alert("가입 실패");
                return;
              }

              auth_service.set_auth_info(account_terms_layer.auth_info);
              location.reload();
            })
        });

        $dom.all_terms_btn.on("click", function(){
            var check_terms_btn = $(".check_terms_btn");
            if(String($(this).data("ischecked")) == false_str){
                check_terms_btn.data(has_click_class, true_str);
                check_terms_btn.find("img").attr("src", true_btn_src);
            } else {
                check_terms_btn.data(has_click_class, false_str);
                check_terms_btn.find("img").attr("src", false_btn_src);
            }

            required_check(account_terms_layer.terms_list);
        });

        function get_policy_agreements_data(){
            var policy_agreements_data = {};

            policy_agreements_data.user_contract = $(".user_contract_btn").data(has_click_class);
            policy_agreements_data.private_info = $(".private_info_btn").data(has_click_class);
            policy_agreements_data.location_info = $(".location_info_btn").data(has_click_class);
            policy_agreements_data.newsletter = "false"

            return policy_agreements_data;
        }

        function required_check(terms_list) {
            var count = 0;

            var requiredItemList = terms_list.filter(function(requiredItem) {
                return requiredItem.term.required === "required";
            }).map(function(requiredItem) {
                return $(".check_terms_btn[data-term-id="+requiredItem.term.id+"]");
            });

            $.each(requiredItemList, function(){
                if(String($(this).data(has_click_class)) == false_str){
                    return false;
                } else {
                    count++;
                }
            });

            if (count !== requiredItemList.length) {
                $dom.account_terms_layer_ok_btn.prop("disabled", true);
            } else {
                $dom.account_terms_layer_ok_btn.prop("disabled", false);
            }
        }

        window.account_terms_layer = account_terms_layer;
    });

    $(document).ready(function(){
        var touchstartClick = "touchstart click";
        var login_layer = {},
            $pg_login = $(".pg-login"),
            $facebook_login_btn = $pg_login.find(".btn-login.facebook"),
            $kakaotalk_login_btn = $pg_login.find(".btn-login.kakaotalk"),
            $apple_login_btn = $pg_login.find(".btn-login.apple"),
            $message = $pg_login.find(".message"),
            $closeBtnLogin = $(".close_btn_login");

        $facebook_login_btn.on("click", function eventCallback(e){
          e.preventDefault();
          mp_facebook.login();
        });

        $kakaotalk_login_btn.on("click", function eventCallback(e){
          e.preventDefault();
          mp_kakao.login();
        });

        $apple_login_btn.on("click", function eventCallback(e){
          e.preventDefault();
          mp_apple.login();
        });

        $pg_login.on(touchstartClick, function(e){
          e.stopPropagation();

          if($(e.target).hasClass("pg-login")){
            e.preventDefault();
            login_layer.close_layer();
          }
        });

        login_layer.open_layer = function (description) {
          description = description || I18n.t('login_popup.login_message');
	        trackView('PU_LOGIN');
	        login_layer._set_description(description);
          $pg_login.show();
        };

        login_layer._set_description = function (description) {
          $message.html(description);
        }

        login_layer.close_layer = function () {
          closeView('PU_LOGIN');
          $pg_login.hide();
        };

        login_layer.not_closed_mode = function () {
          $pg_login.off(touchstartClick);
          $('.btn-nav-close').hide();
        }

        $closeBtnLogin.on("click", function(){
          login_layer.close_layer();
        });

        window.mp_login_layer = login_layer;
    });
})();
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//




;
(function(){
	var MP_CONSTANTS = {
		"EVENT": {
			"PAGE_HISTORY_OPEN": "open_page_history_layer"
		},
		"MANGOPICK_TYPE_CLASS":{
			"1": "picks_tag_restaurant",
			"2": "picks_tag_mangolist",
			"3": "picks_tag_story"
		},
		"ERROR_IMAGE":{
			"RESTAURANT": "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg",
			"USER": "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/jmcmlp180qwkp1jj.png?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80"
		},
		"API": {
			"API_HOST": "https://stage.mangoplate.com",
			"COMMON_PARAMS": {
				"language": get_language(),
				"device_uuid": get_device_uuid(),
				"device_type": get_device_type()
			}
		},
		"SEARCH_PARAMS": {
			"ORDER_TYPES": {
				"RECOMMEND": 0,
				"DISTANCE": 1,
				"RATING": 2,
				"REVIEW": 3
			}
		},
		"VIEWPORT": {
			"MOBILE_MIN": 320,
			"MOBILE_MAX": 768,
			"DESKTOP_MIN": 769
		},
    "DEFAULT_LOCALE": "ko",
    "LOCALE_AND_LANGUAGE_MAP": {"kor": "ko", "eng": "en", "zho": "zho"},
		"TERMS_ID": {
			"LOCATION": "location"
		},
    "FILTER_NAMES": {
      "subcuisine_code": "subcuisine_codes",
      "metro_code": "metro_codes",
      "price_code": "price_codes",
      "cuisine_code":"cuisine_codes",
      "parking_available": "is_parking_available"
    },
    "DEFAULT_FILTER" : {
		  "subcuisine_codes": [],
      "metro_codes": [],
      "price_codes": [],
      "cuisine_codes": [],
      "is_parking_available": 0
    },
    "DEFAULT_SEARCH_ORDER_BY": "2",
	};

  var ns = nameSpace("mp.module");
  ns.constants = MP_CONSTANTS;
  angular.module("mp20App").constant("MP_CONSTANTS", MP_CONSTANTS);
})();
(function () {
  angular.module("mp20App").directive("keyupBind", keyup_bind);

  function keyup_bind() {
    return {
      restrict: "A",
      scope: {
        "callback": "&keyupBind"
      },
      link: function (scope, element) {
        var callback = scope.callback();

        //Firefix에서는 조합형 문자의 경우 keyup, keydown 이벤트가 발생이 안되어서 분기처리.
        if (is_firefox()) {
          var keyup_allow_keycode_list = [40, 38, 13];

          element.on("input", callback);
          element.on("keyup", function (e) {
            if (keyup_allow_keycode_list.indexOf(e.keyCode || e.which) > -1) {
              callback(e);
            }
          });
        } else {
          element.on("keyup", callback);
        }
      }
    };
  }
})();
(function(){
	mp20_util_service.$inject = ["MP_CONSTANTS", "$http", "$q"];
	angular.module("mp20App").factory("mp20_util_service", mp20_util_service);

	function mp20_util_service(MP_CONSTANTS, $http, $q){
		var mp20_util_service = {};

		/**
		 * API Call할때 공통으로 날아가야 하는 파라미터를 합쳐주는 메서드.
		 * @param params - 전송할 파라미터
		 * @returns {object} - 공통 파라미터 + 요청 파라미터 object
		 */
		mp20_util_service.make_params = function(params){
			params = params || {};
			var proxy = {};

			proxy = _.extend(proxy, MP_CONSTANTS.API.COMMON_PARAMS);
			proxy = _.extend(proxy, params);

			return proxy;
		};

		/**
		 * Promise Process를 공통 처리 할 수 있는 메서드.
		 * @param promise - 처리할 promise 객체
		 * @param successCallback - 성공시 호출되는 callback
		 * @param errorCallback - 실패치 호출되는 callback
		 */
		mp20_util_service.common_promise = function(promise, successCallback, errorCallback){
			errorCallback = errorCallback || function(err){
				console.error(err);
			};

			return promise.then(successCallback).catch(errorCallback);
		};

		/**
		 * start_index를 구할때 사용하는 메서드.
		 * @param page - 현재 페이지
		 * @returns {number} - start_index 값.
		 */
		mp20_util_service.get_start_index = function(page, request_count){
			request_count = request_count || 10;

			return (page - 1) * request_count;
		};

		/**
		 * Angular HTTP POST가 잘 동작하지 않기때문에 공통으로 사용할 목적으로 따로 만듬.
		 * @param url - Call URL
		 * @param params - 보낼 파라미터
		 * @returns {promise}
		 */
		mp20_util_service.http_post = function(url, params){
			params = $.param(params);

			return $http({
				method: 'POST',
				url: url,
				data: params,
				headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': auth_service.get_access_token()}
			});
		};

		/**
		 * Promise 공통 처리 메서드.
		 * @param call_url - 호출할 URL.
		 * @param method - 호출할 HTTP 메서드.
		 * @param param - 호출할때 포함 시킬 파라미터
		 * @returns {promise}
		 */
    mp20_util_service.call_api_promise = function (call_url, method, param) {
      var defer = $q.defer();
      var common_http;
      
      var getData = function (data) {
        return _.assign({
          'language': get_language(),
          'device_uuid': get_device_uuid(),
          'device_type': get_device_type(),
        }, data);
      };

      switch (method) {
        case "post":
          common_http = this.http_post(call_url, getData(param));
          break;

        case "get":
        default :
          common_http = $http.get(call_url, {
            "params": getData(param),
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': auth_service.get_access_token()}
          });
          break;
      }

      common_http.then(function (data) {
        defer.resolve(data.data);
      }).catch(function (err) {
        defer.reject(err);
      });

      return defer.promise;
    };

		/**
		 * 망고픽 타입에 대한 클레스를 리턴해주는 메서드.
		 * @param type - 망고픽 타입 number
		 * @returns {string} - 망고픽 클레스
		 */
		mp20_util_service.get_mango_pick_type_class = function(type){
			return MP_CONSTANTS.MANGOPICK_TYPE_CLASS[type];
		};

		/**
		 * 현재 Viewport가 Mobile Viewport인지 체크하는 함수.
		 * @returns {boolean}
		 */
		mp20_util_service.is_mobile_viewport = function(){
			var client_width = document.documentElement.clientWidth;

			return (MP_CONSTANTS.VIEWPORT.MOBILE_MIN <= client_width) && (client_width < MP_CONSTANTS.VIEWPORT.DESKTOP_MIN);
		};

    /**
     * paste Event 객체를 받아서 text 값을 꺼내는 함수
     * @param $event - Angular Event Object
     * @returns {(string|undefined)}
     */
    mp20_util_service.get_paste_text = function ($event) {
      if ($event && $event.type === "paste") {
        var clipboardData = $event.originalEvent.clipboardData || window.clipboardData;

        return clipboardData ? clipboardData.getData('Text') : undefined;
      }

      return undefined;
    }

		mp20_util_service.get_wannago_text = get_wannago_text;

		return mp20_util_service;
	}
})();
(function(){
	mp20_restaurant_info_service.$inject = ["MP_CONSTANTS", "mp20_util_service", "$window"];
	angular.module("mp20App").factory("mp20_restaurant_info_service", mp20_restaurant_info_service);

	function mp20_restaurant_info_service(MP_CONSTANTS, mp20_util_service, $window){
		var mp20_restaurant_info_service = {};

		//action_value - 1
    mp20_restaurant_info_service.recommend_list = [
      {
        "class_name": "bad",
        "msg": I18n.t("label.bad")
      },
      {
        "class_name": "ok",
        "msg": I18n.t("label.okay")
      },
      {
        "class_name": "good",
        "msg": I18n.t("label.good")
      }
    ];

		mp20_restaurant_info_service.thumb_size = {
			"small": "/256x256/",
			"normal": "/512x512/",
			"big": "/1024x1024/"
		};

		mp20_restaurant_info_service.empty_image = "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/jmcmlp180qwkp1jj.png?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80";

		mp20_restaurant_info_service.get_metro = get_metro;
		mp20_restaurant_info_service.get_subcuisine = get_subcuisine;
		mp20_restaurant_info_service.get_price = get_price;
		mp20_restaurant_info_service.get_parking = get_parking;
		mp20_restaurant_info_service.get_commoncode_by_display_text = get_commoncode_by_display_text;
		mp20_restaurant_info_service.is_what_action = is_what_action;
		mp20_restaurant_info_service.is_not_action_btn = is_not_action_btn;
		mp20_restaurant_info_service.get_background = get_background;
		mp20_restaurant_info_service.get_rating = get_rating;
		mp20_restaurant_info_service.from_date = from_date;
		mp20_restaurant_info_service.get_recommend = get_recommend;
		mp20_restaurant_info_service.get_user_picture = get_user_picture;
		mp20_restaurant_info_service.get_restaurant_meta = get_restaurant_meta;
		mp20_restaurant_info_service.get_recommend_class_name = get_recommend_class_name;
		mp20_restaurant_info_service.get_recommend_message = get_recommend_message;
		mp20_restaurant_info_service.get_user_background = get_user_background;
		mp20_restaurant_info_service.get_picture_url = get_picture_url;
		mp20_restaurant_info_service.diff_date_formatting = diff_date_formatting;
		mp20_restaurant_info_service.get_picture_url_by_akamai = $window.get_picture_url_by_akamai;
		mp20_restaurant_info_service.get_full_picture_url_by_akamai = $window.get_full_picture_url_by_akamai;

		/**
		 * metro display_text를 가져오는 메서드.
		 * @param common_code - commoncode_array
		 * @param metro_code - metro code
		 * @returns {string || undefined}
		 */
		function get_metro(common_code, metro_code) {
			var type_name = "metro_code";

			return get_commoncode_by_display_text(common_code, type_name, metro_code);
		}

		/**
		 * sub_cuisine_code display_text를 가져오는 메서드.
		 * @param common_code - commoncode_array
		 * @param sub_cuisine_code - sub_cuisine_code
		 * @returns {string} - cuisine code text
		 */
		function get_subcuisine(common_code, sub_cuisine_code) {
			var type_name = "subcusine_code";

			return get_commoncode_by_display_text(common_code, type_name, sub_cuisine_code);
		}

		/**
		 * price code text를 가져오는 메서드.
		 * @param common_code - common_code array
		 * @param price_code - price_code
		 * @returns {string} - price code text
		 */
		function get_price(common_code, price_code){
			var type_name = "price_range_code";

			return get_commoncode_by_display_text(common_code, type_name, price_code);
		}

		/**
		 * parking code text를 가져오는 메서드.
		 * @param common_code - common code array
		 * @param parking_code - parking code
		 * @returns {string|undefined} - parking code text
		 */
		function get_parking(common_code, parking_code){
			var type_name = "parking_option_code";

			return get_commoncode_by_display_text(common_code, type_name, parking_code);
		}
		/**
		 * commoncode에서 display_text를 가져오는 메서드.
		 * @param common_code - common_code Array
		 * @param type_name - commoncode typeName
		 * @param type_value - commoncode typeValue
		 * @returns {string || undefined}
		 */
		function get_commoncode_by_display_text(common_code, type_name, type_value) {
			var metro_arr = _.where(common_code, {"type_name": type_name, "type_value": type_value}),
							metro_obj;

			metro_obj = metro_arr.length ? metro_arr[0] : {};

			return metro_obj.display_text || "";
		}

		/**
		 * wannago action을 체크하기 위한 함수.
		 * @param action
		 * @returns {boolean}
		 */
		function is_what_action(action) {
			if (action) {
				return action.action_type == 4;
			} else {
				return false;
			}
		}

		/**
		 * wannago action을 체크하기 위한 함수.
		 * @param action
		 * @returns {boolean}
		 */
		function is_not_action_btn(action) {
			if (action) {
				return !(action.action_type == 4);
			} else {
				return false;
			}
		}

		/**
		 * background style을 리턴해주는 메서드.
		 * @param picture_url - background로 지정할 url.
		 * @returns {object}
		 */
		function get_background(picture_url){
			return {
				"background-image": 'url("'+picture_url+'"), url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg")'
			}
		}

		function get_user_background(picture_url){
			return {
				"background-image": 'url("'+picture_url+'"), url("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/jmcmlp180qwkp1jj.png?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80")'
			}
		}

		/**
		 * 레이팅을 소숫점이하 1자리로 맞춰주는 메서드.
		 * @param rating - 표시할 레이팅.
		 * @returns {float || ''}
		 */
		function get_rating(rating){
			if(!rating || !parseFloat(rating)){
				return "";
			} else {
				return parseFloat(rating).toFixed(1);
			}
		}

		/**
		 * 날짜를 기준으로 몇일 전인지 리턴해주는 메서드.
		 * @param date - 기준 날짜
		 */
		function from_date(date){
			return $.timeago(date);
		}

		function diff_date_formatting(target_date){
			return window.dateDiffFromNowToString(target_date);
		}

		function get_recommend(action_value){
			return mp20_restaurant_info_service.recommend_list[action_value - 1];
		}

		function get_user_picture(picture_url){
			var user_image = picture_url || this.empty_image;

			return {
				"background-image": "url('" + user_image + "')"
			}
		}

		function get_picture_url(restaurant_info, size){
			var picture_size = size ? mp20_restaurant_info_service.thumb_size[size] : "/";

			return restaurant_info.restaurant.pic_domain + picture_size + restaurant_info.restaurant.pic_key;
		}


		function get_restaurant_meta(restaurant_key){
			var call_url = MP_CONSTANTS.API.API_HOST + "/api/v2/web/restaurants/" + restaurant_key + "/meta.js";

			return mp20_util_service.call_api_promise(call_url, "get");
		}

		/**
		 * 리뷰의 recommend class name을 얻기위한 메서드.
		 * @param action_value - action_value
		 * @returns {string} - recommend class name
		 */
		function get_recommend_class_name(action_value){
			if(action_value < 0){
				return "";
			}

			return mp20_restaurant_info_service.recommend_list[action_value].class_name;
		}

    /**
     * 리뷰의 recommend message를 얻기 위한 메서드.
     * @param action_value - action value
     * @returns {string} - recommend message
     */
    function get_recommend_message(action_value) {
      if (action_value < 0) {
        return "";
      }

      return mp20_restaurant_info_service.recommend_list[action_value].msg;
    }

		return mp20_restaurant_info_service;
	}
})();
(function () {
	mp20_common_code_service.$inject = ["$q", "mp20_util_service", "MP_CONSTANTS"];
	angular.module("mp20App").factory("mp20_common_code_service", mp20_common_code_service);

	function mp20_common_code_service($q, mp20_util_service, MP_CONSTANTS) {
		var mp20_common_code_service = {};

		mp20_common_code_service.common_code = "";
		mp20_common_code_service.option = {
			"api_host": "https://stage.mangoplate.com",
			"call_url": "/api/common/codetable.js"
		};

		mp20_common_code_service.get_common_code = function () {
      if(this.common_code){
        var defer = $q.defer();

        defer.resolve(this.common_code);

        return defer.promise;
      } else {
        var call_url = MP_CONSTANTS.API.API_HOST + this.option.call_url;
        var params = mp20_util_service.make_params();
        var promise = mp20_util_service.call_api_promise(call_url, "GET", params);

        return promise.then(function(common_code){
          var common_code = {
            data: common_code
          };

          mp20_common_code_service.common_code = common_code;
          return common_code;
        });
      }
		};

		return mp20_common_code_service;
	}

})();
(function(){
	mp20_restaurant_http_service.$inject = ["MP_CONSTANTS", "mp20_util_service"];
	angular.module("mp20App").factory("mp20_restaurant_http_service", mp20_restaurant_http_service);

	function mp20_restaurant_http_service(MP_CONSTANTS, mp20_util_service){
		var mp20_restaurant_http_service = {};

		mp20_restaurant_http_service.api = {
			"get_restaurant_info": "/api/v5/restaurants/%restaurant_key%.json",
			"get_pictures": "/api/v1/web/restaurants/%restaurant_key%/pictures.js",
			"get_additional": "/api/v5/restaurants/%restaurant_uuid%/additional.json",
			"get_nearby_popular_restaurants": "/api/v5/restaurants/%restaurant_uuid%/nearby/popular_restaurants/as_top_list_item.json",
			"get_insta_official_picture": "/api/v5/restaurants/%restaurant_uuid%/insta/pictures/official.json",
			"get_insta_tagged_picture": "/api/v5/restaurants/%restaurant_uuid%/insta/pictures/tagged.json",
      "get_menu_picture": "/api/v5/restaurants/%restaurant_uuid%/menu_pictures.json",
		};

		mp20_restaurant_http_service.get_restaurant_info = function(restaurant_key){
			var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_restaurant_info.replace("%restaurant_key%", restaurant_key),
					make_params = mp20_util_service.make_params();

			return mp20_util_service.call_api_promise(call_url, "get", make_params);
		};

		mp20_restaurant_http_service.get_pictures = function(restaurant_key){
			var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_pictures.replace("%restaurant_key%", restaurant_key),
					make_params = mp20_util_service.make_params();

			return mp20_util_service.call_api_promise(call_url, "get", make_params);
		};

		mp20_restaurant_http_service.get_additional = function(restaurant_uuid, fields){
			var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_additional.replace("%restaurant_uuid%", restaurant_uuid),
					params = mp20_util_service.make_params({
						"fields": fields
					});

			return mp20_util_service.call_api_promise(call_url, "get", params);
		};

		mp20_restaurant_http_service.get_nearby_popular_restaurants = function(restaurant_uuid){
			var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_nearby_popular_restaurants.replace("%restaurant_uuid%", restaurant_uuid),
					params = mp20_util_service.make_params({
						"start_index": 0,
						"request_count": 4
					});

			return mp20_util_service.call_api_promise(call_url, "get", params);
		};

		mp20_restaurant_http_service.get_insta_official_picture = function(restaurant_uuid){
			var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_insta_official_picture.replace("%restaurant_uuid%", restaurant_uuid);

			return mp20_util_service.call_api_promise(call_url, "get", {});
		};

		mp20_restaurant_http_service.get_insta_tagged_picture = function(restaurant_uuid){
			var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_insta_tagged_picture.replace("%restaurant_uuid%", restaurant_uuid);

			return mp20_util_service.call_api_promise(call_url, "get", {});
		};

		mp20_restaurant_http_service.get_menu_picture = function(restaurant_uuid){
		  var call_url = MP_CONSTANTS.API.API_HOST + this.api.get_menu_picture.replace("%restaurant_uuid%", restaurant_uuid),
          params = mp20_util_service.make_params();

      return mp20_util_service.call_api_promise(call_url, "get", params);
    };

		return mp20_restaurant_http_service;
	}
})();
(function(){
	mp20_search_http_service.$inject = ["$http", "$q", "mp20_util_service", "MP_CONSTANTS"];
	angular.module("mp20App").factory("mp20_search_http_service", mp20_search_http_service);

	function mp20_search_http_service($http, $q, mp20_util_service, MP_CONSTANTS){
		var mp20_search_http_service = {};

		mp20_search_http_service.options = {
			"api_host": "https://mp-api-search.mangoplate.com",
			"search_by_keyword": "/api/v5/search/by_keyword.json",
			"search_by_keyword_count": "/api/v5/search/by_keyword/count.json",
			"suggest_keyword": "/api/v3/web/search/by_keyword/suggested.js",
			"suggest_keyword_temp": "/api/v3/web/search/by_keyword/suggested/temp.js",
			"recommend_popular_keyword" : "/api/v5/search/keyword/suggestion.json",
			"related_keyword" : "/api/v3/web/search/by_keyword/related_keywords.js",
			"summary_keyword" : "/api/v3/web/search/by_keyword/summary_keywords.js",
			"related_list": "/api/v3/web/search/by_keyword/related_list.js",
			"bounds_search": "/api/v1/web/search/nearby/map/bounds.json",
			"bounds_search_count": "/api/v1/web/search/nearby/map/bounds/count.js",
			"related_contents": "/api/v9/search/related_contents.json"
		};

		mp20_search_http_service.search_by_keyword = search_by_keyword;
		mp20_search_http_service.search_by_keyword_count = search_by_keyword_count;
		mp20_search_http_service.search_suggest_list = search_suggest_list;
		mp20_search_http_service.search_suggest_list_temp = search_suggest_list_temp;
		mp20_search_http_service.recommend_and_popular_keyword = recommend_and_popular_keyword;
		mp20_search_http_service.related_keyword = related_keyword;
		mp20_search_http_service.summary_keyword = summary_keyword;
		mp20_search_http_service.related_list = related_list;
		mp20_search_http_service.bounds_search = bounds_search;
		mp20_search_http_service.bounds_search_count = bounds_search_count;
		mp20_search_http_service.related_contents = related_contents;

		/**
		 * 키워드로 검색하는 메서드.
		 * @param keyword - 검색할 키워드.
		 * @returns {promise} - $q의 Promise 구현체.
		 */
		function search_by_keyword(keyword, params){
      var call_url = MP_CONSTANTS.API.API_HOST + this.options.search_by_keyword;
      params = mp20_util_service.make_params(params);

      return mp20_util_service.call_api_promise(call_url, "post", params);
		}

		/**
		 * 키워드로 검색한 결과의 count를 리턴해주는 메서드..
		 * @param keyword - 검색할 키워드.
		 * @returns {promise} - $q의 Promise 구현체.
		 */
    function search_by_keyword_count(keyword, params) {
      var params = params || {};

      var call_url = this.options.api_host + this.options.search_by_keyword_count;
      var request_params = {
        "keyword": keyword,
        "search_type": getParameter("search_type") || ""
      };

      request_params = $.extend(request_params, params);
      request_params = _.omit(request_params, 'request_count', 'start_index');
      request_params = mp20_util_service.make_params(request_params);

      return mp20_util_service.call_api_promise(call_url, "POST", request_params);
    }

		/**
		 * 입력한 키워드에 대한 suggest keyword를 가져오는 메서드.
		 * @param keyword - 검색 lkeyword
		 * @returns {promise} - suggest keyword가 담긴 promise 객체.
		 */
		function search_suggest_list(keyword, seq){
			var call_url = this.options.api_host + this.options.suggest_keyword;
      var params = mp20_util_service.make_params({
        'keyword': keyword,
        "seq": seq
      });

      return mp20_util_service.call_api_promise(call_url, "get", params);
		}

    /**
     * 추천검색어와 인기검색어를 가져오는 메서드.
     * @returns {promise}
     */
    function recommend_and_popular_keyword() {
      var call_url = this.options.api_host + this.options.recommend_popular_keyword;
      var params = mp20_util_service.make_params(params);

      return mp20_util_service.call_api_promise(call_url, "get", params);
    }

		/**
		 * 검색에 대한 연관 검색어를 가져오는 메서드.
		 * @returns {promise} - 연관 검색어를 가져오는 promise 객체.
		 */
		function related_keyword(params){
			var call_url = MP_CONSTANTS.API.API_HOST + this.options.related_keyword;

			params = mp20_util_service.make_params(params);

			return mp20_util_service.call_api_promise(call_url, "get", params);
		}

		/**
		 * related_list를 가져오는 메서드.
		 * @param keyword - 검색할 키워드
		 * @returns {promise} - related_list를 가져오는 promise 객체.
		 */
		function related_list(keyword){
      var call_url = MP_CONSTANTS.API.API_HOST + this.options.related_list;
      var params = mp20_util_service.make_params({
        "keyword": keyword
      });

      return mp20_util_service.call_api_promise(call_url, "GET", params)
		}

		function search_suggest_list_temp(){

		}

		function bounds_search(params){
			var call_url = MP_CONSTANTS.API.API_HOST + this.options.bounds_search;

			params = mp20_util_service.make_params(params);

			return mp20_util_service.call_api_promise(call_url, "get", params);
		}

		function bounds_search_count(params){
			var call_url = MP_CONSTANTS.API.API_HOST + this.options.bounds_search_count;

			params = mp20_util_service.make_params(params);

			return mp20_util_service.call_api_promise(call_url, "get", params);
		}

		function summary_keyword(params){
			var call_url = MP_CONSTANTS.API.API_HOST + this.options.summary_keyword;

			params = mp20_util_service.make_params(params);

			return mp20_util_service.call_api_promise(call_url, "get", params);
		}

		function related_contents(keyword) {
		  var call_url = MP_CONSTANTS.API.API_HOST + this.options.related_contents;
		  var params = mp20_util_service.make_params({
        keyword: keyword
      });

		  return mp20_util_service.call_api_promise(call_url, "get", params);
    }

		return mp20_search_http_service;
	}
})();
(function(){
	angular.module("mp20App").factory("mp20_search_util_service", mp20_search_util_service);

	function mp20_search_util_service(){
		var mp20_search_util_service = {};
		mp20_search_util_service.get_search_keyword_change_vo = function(keyword, key_code){
			return {
				"keyword": keyword || "",
				"key_code": key_code || ""
			}
		};
		return mp20_search_util_service;
	}
})();
(function(){
    /**
     * UTM 파라미터를 gennerating 해주는 유틸 객체.
     * @namespace utm_manager
     */
    var utm_manager = {

        /**
         * utm을 위한 파라미터를 Generate해주는 메서드.
         * @param platform_name - 공유 혹은 사용하는 source 이름.
         * @param target_url - 해당 파라미터를 붙일 URL
         * @param for_web_param - utm_term, utm_content 같은 web에서만 사용하는 파라미터를 넣어줄때 사용하는 파라미터.
         */
        generate_url: function(platform_name, target_url, for_web_param){
            var utm_obj = this.get_data_form(),
                result,
                utm_param;

            utm_obj.utm_source = platform_name || "organic";
            utm_obj.utm_medium = this.get_medium(target_url);
            utm_obj.utm_campaign = this.get_campaign(target_url);

            if(typeof for_web_param === "object"){
                $.extend(utm_obj, for_web_param);
            }

            utm_param = $.param(utm_obj);

            if(target_url){
                var a_tag = document.createElement("a");
                var pathname;

                a_tag.href = target_url;
                pathname = a_tag.pathname;

                if(pathname[0] !== "/"){
                  pathname = "/" + pathname;
                }

                target_url = a_tag.protocol + "//" + a_tag.host + pathname + "?" + utm_param;
                result = target_url;
                result = this.filter_url(result);
            } else {
                result = utm_param;
            }

            return result;
        },

        /**
         * utm의 기본 객체를 반환하는 메서드.
         * @returns {{utm_source: string, utm_medium: string, utm_campaign: string, utm_term: string, utm_content:
         *     string}}
         */
        get_data_form: function(){
            return {
                "utm_source": "organic",
                "utm_medium": "organic",
                "utm_campaign": "organic",
                "utm_term": "v1",
                "utm_content": "organic"
            }
        },

        /**
         * utm_medium을 리턴하는 메서드.
         * @returns {string}
         */
        get_medium: function(target_url){
            var result;

            if(target_url){
                var a_tag = this.make_a_tag(target_url);

                result = this.get_a_tag_by_segment(a_tag, 0);
            } else {
                result = get_segment(0);
            }

            return result;
        },

        /**
         * utm_campaign을 리턴하는 메서드.
         * @returns {string}
         */
        get_campaign: function(target_url){
            var result;

            if(target_url){
                var a_tag = this.make_a_tag(target_url);

                result = this.get_a_tag_by_segment(a_tag, 1);
            } else {
                result = get_segment(1);
            }

            return result;
        },

        get_utm_param: function(){
            var utm_param = this.get_data_form();

            utm_param.utm_source = getParameter("utm_source");
            utm_param.utm_medium = this.get_medium();
            utm_param.utm_campaign = this.get_campaign();

            return $.param(utm_param);
        },

        make_a_tag: function(url){
            var a_tag = document.createElement("a");
            a_tag.href = url;

            return a_tag;
        },

        get_a_tag_by_segment: function(a_tag, index){
            var pathname = a_tag.pathname,
                pathname_arr = pathname.split("/"),
                segment;

            if(pathname_arr.length > 1){
                pathname_arr = pathname_arr.slice(1, pathname.length);
            }
            if(index || index > -1){
                segment = pathname_arr[index];
            } else {
                segment = pathname_arr;
            }

            return segment;
        },
        
        el_by_for_web_param: function($el){
            return {
                "utm_term": $el.data("term") || "organic",
                "utm_content": $el.data("content") || "organic"
            }
        },

        filter_url: function(url){
            if(url.indexOf("ad-min.mangoplate.com") > -1 || url.indexOf("admin.mangoplate.com") > -1){
                url = removeURLParameter(url, "utm_referrer");
                url = removeURLParameter(url, "referrer");
            }

            return url;
        }
    };
    //
    //utm_manager.platform = {};
    //
    //utm_manager.platform['KAKAO'] = function(){
    //
    //};
    //
    //utm_manager.platform['FACEBOOK'] = function(){
    //
    //};
    //
    //utm_manager.platform['TWITTER'] = function(){
    //
    //};
    //
    //utm_manager.platform['BAND'] = function(){
    //
    //};
    //
    //utm_manager.platform['MAIL'] = function(){
    //
    //};

    /**
     * 전역 네임스페이스에 바인딩.
     */
    if (window.mp20){
        window.mp20.utm_manager = utm_manager;
    } else {
        window.mp20 = {};
        window.mp20.utm_manager = utm_manager;
    }
})();
(function(){
	/**
	 * push_status_server 네임스페이스.
	 * @namespace push_status_server
	 */
	var push_status_server = {},
					OPEN_TYPE = "OPEN",
					CLOSE_TYPE = "CLOSE";

	/**
	 * 이벤트 리스트가 담기는 객체 리터럴
	 * @type {object}
	 */
	push_status_server.events = {};
	push_status_server.current_name = [];

	/**
	 * popstate 이벤트를 받아주는 메서드.
	 */
	push_status_server.init = function(){

		$(window).on('popstate', function(event){
			var last_layer_name = push_status_server.current_name.splice(push_status_server.current_name.length - 1, 1);

			var close_action = this.make_close_action(last_layer_name.toString());
			this.trigger_event(close_action);
//			var state = event.originalEvent.state;

//			if(state === null){
//				window.history.back();
//			} else {
//				console.dir(state);
//			}
		}.bind(this));
	};

	/**
	 * 이벤트를 등록하는 메서드.
	 * @param name - 이벤트 이름.
	 * @param openCallback - Open시 발생할 Callback 함수.
	 * @param closeCallback - Close시 발생시킬 Callback 함수.
	 */
	push_status_server.add_event = function(name, openCallback, closeCallback){
		this.events[name] = {
			"event_name": name,
			"openCallback": openCallback,
			"closeCallback": closeCallback
		};
	};

	/**
	 * action을 전달받아서 Type에 맞는 메서드를 실행해주는 메서드.
	 * @param action - 이벤트 Action
	 */
	push_status_server.trigger_event = function(action, params){
		var target_event = this.events[action.event_name];

		if (target_event){
			switch (action.type){
				case OPEN_TYPE:
					this.trigger_open(target_event, params);
					break;
				case CLOSE_TYPE:
					this.trigger_close(target_event, params);
					break;
			}
		}
	};

	/**
	 * 레이어 Open시 실행하는 메서드.
	 * @param target_event - 이벤트 Target Object.
	 */
	push_status_server.trigger_open = function(target_event, params){
		var new_url;
		target_event.openCallback.apply(null, params);

		new_url =  window.location.protocol + "//" + window.location.host + window.location.pathname + "#open";
		push_status_server.current_name.push(target_event.event_name);
		history.pushState(this.make_open_action(target_event.event_name), null, new_url);
	};

	/**
	 * 레이어 Close시 발생하는 메서드.
	 * @param target_event - 이벤트 Target Object.
	 */
	push_status_server.trigger_close = function(target_event, params){
		target_event.closeCallback.apply(null, params);
	};

	/**
	 * Open, Close 규약을 위해 action을 만들어주는 메서드.
	 * @param event_name - 이벤트 이름.
	 * @param type - 이벤트 타입.
	 * @returns {{type: string, event_name: string}}
	 */
	push_status_server.make_action = function(event_name, type){
		return {
			"type": type,
			"event_name": event_name
		}
	};

	/**
	 * Open시 전달할 action을 만들어주는 메서드.
	 * @param event_name - 이벤트 이름.
	 * @returns {{type, event_name} | {type: string, event_name: string}}
	 */
	push_status_server.make_open_action = function(event_name){
		var type = "OPEN";

		return this.make_action(event_name, type);
	};

	/**
	 * Close시 전달할 action을 만들어주는 메서드.
	 * @param event_name - 이벤트이름
	 * @returns {{type, event_name} | {type: string, event_name: string}}
	 */
	push_status_server.make_close_action = function(event_name){
		var type = "CLOSE";

		return this.make_action(event_name, type);
	};

	push_status_server.init();

	/**
	 * 전역객체에 바인딩.
	 */
	if (window.mp20){
		window.mp20.push_status_server = push_status_server;
	} else {
		window.mp20 = {};
		window.mp20.push_status_server = push_status_server;
	}
})();
(function(){
	/**
	 * 네임스페이스
	 * @namespace band
	 */
	var band = {};

	/**
	 * band share 정보.
	 * @type {{method: string, param: string, a_store: string, g_store: string, a_proto: string, g_proto: string}}
	 */
	band.info = {
		method:'web2app',
		param:'create/post?text=',
		a_store:'itms-apps://itunes.apple.com/app/id542613198',
		g_store:'market://details?id=com.nhn.android.band',
		a_proto:'bandapp://',
		g_proto:'scheme=bandapp;package=com.nhn.android.band'
	};

	/**
	 * 밴드 공유 버튼 클레스.
	 * @type {string}
	 */
	band.class_name = ".band_share_btn";

	/**
	 * 밴드 공유를 위한 파라미터를 만들어서 share를 실행 해주는 메서드.
	 * @param message - 공유 메시지
	 * @param url - 공유 URL
	 */
	band.share = function(message, url, el_by_for_web_param){
		var platform_name = "BAND";

		if(!is_mobile_device()){
			alert("해당 기능은 망고플레이트 앱에서 사용하실 수 있습니다.");
			return false;
		}

		url = mp20.utm_manager.generate_url(platform_name, url, el_by_for_web_param);

		var lanunch_info = _.clone(band.info);
		lanunch_info.param += message + encodeURIComponent('\r\n') + encodeURIComponent(url);

		band.launch(lanunch_info);
	};

	/**
	 * 밴드 공유를 위해 앱을 런치하는 메서드.
	 * @param lanunch_info - 공유를 위해 앱을 런치할 정보를 담은 Object
	 */
	band.launch = function(lanunch_info){
		if(navigator.userAgent.match(/android/i)){
			// Android
			setTimeout(function(){ location.href = 'intent://' + lanunch_info.param + '#Intent;' + lanunch_info.g_proto + ';end'}, 100);
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			// Apple

			if(!check_safari()){
				setTimeout(function(){ location.href = lanunch_info.a_store; }, 200);
			}
			
			setTimeout(function(){ location.href = lanunch_info.a_proto + lanunch_info.param }, 100);
		}
	};

	/**
	 * 밴드 공유 버튼에 이벤트 바인딩
	 */
	$(document).on("click", band.class_name, function(e){
		var $band_share_btn = $(e.currentTarget),
				message = $band_share_btn.data("message") || "",
				is_not_script = $band_share_btn.data("not_script"),
				url = $band_share_btn.data("url") || window.location.href,
				el_by_for_web_param = mp20.utm_manager.el_by_for_web_param($band_share_btn);

		if(!is_not_script){
			band.share(message, url, el_by_for_web_param);
		}
	});

	/**
	 * 전역 네임스페이스에 바인딩.
	 */
	if(window.mp20){
		if(window.mp20.sns_share){
			window.mp20.sns_share.band = band;
		} else {
			window.mp20.sns_share = {};
			window.mp20.sns_share.band = band;
		}
	} else {
		window.mp20 = {};
		window.mp20.sns_share = {};
		window.mp20.sns_share.band = band;
	}
})();
(function(){
	/**
	 * 네임스페이스
	 * @namespace
	 */
	var mail = {};

	/**
	 * 메일 공유 버튼 클레스 이름
	 * @type {string}
	 */
	mail.class_name = ".mail_share_btn";

	/**
	 * 메일 공유 base 주소
	 * @type {string}
	 */
	mail.mailto_base = "mailto:?";

	/**
	 * 메일로 공유 해주는 메서드.
	 * @param title - 공유할 메일 제목
	 * @param message - 공유할 메일 내용
	 * @param url - 공유할 URL
	 */
	mail.share = function(title, message, url, el_by_for_web_param){
		var platform_name = "MAIL";

		window.location.href = this.mailto_base + "subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(message) + "%0D%0A" + encodeURIComponent(mp20.utm_manager.generate_url(platform_name, url, el_by_for_web_param));
	};

	/**
	 * 메일 공유 버튼에 이벤트 바인딩.
	 */
	$(document).on("click", mail.class_name, function(e){
		var $mail_share_btn = $(e.currentTarget),
				title = $mail_share_btn.data("title"),
				message = $mail_share_btn.data("message"),
				url = $mail_share_btn.data("url") ||   window.location.href,
				el_by_for_web_param = mp20.utm_manager.el_by_for_web_param($mail_share_btn);

		mail.share(title, message, url, el_by_for_web_param);
	});

	/**
	 * 전역 네임스페이스에 바인딩.
	 */
	if(window.mp20){
		if(window.mp20.sns_share){
			window.mp20.sns_share.mail = mail;
		} else {
			window.mp20.sns_share = {};
			window.mp20.sns_share.mail = mail;
		}
	} else {
		window.mp20 = {};
		window.mp20.sns_share = {};
		window.mp20.sns_share.mail = mail;
	}
})();
(function(){
	/**
	 * 네임스페이스
	 * @namespace facebook
	 */
	var facebook = {};

	/**
	 * String Attribute
	 * @type {{url: string}}
	 */
	facebook.attr = {
		"url": "url"
	};

	/**
	 * facebook share button Class
	 * @type {string}
	 */
	facebook.class_name = ".facebook_share_btn";

	/**
	 * facebook share base URL
	 * @type {string}
	 */
	facebook.url = "http://www.facebook.com/sharer/sharer.php?u=";

	/**
	 * 페이스북 공유를 위해 공유 창을 띄우는 메서드.
	 * @param share_url - 창을 띄울 페이스북 공유 URL.
	 */
	facebook.share = function(share_url){
		window.open(share_url);
	};

	/**
	 * 페이스북 공유 버튼에 이벤트 바인딩.
	 */
	$(document).on("click", facebook.class_name, function(e){
		var $facebook_share_btn = $(e.currentTarget),
				url = $facebook_share_btn.data(facebook.attr.url) || window.location.href,
				platform_name = "FACEBOOK",
				share_url = facebook.url + mp20.utm_manager.generate_url(platform_name, url, mp20.utm_manager.el_by_for_web_param($facebook_share_btn));

		facebook.share(share_url);
	});

	/**
	 * 전역 네임스페이스에 바인딩.
	 */
	if(window.mp20){
		if(window.mp20.sns_share){
			window.mp20.sns_share.facebook = facebook;
		} else {
			window.mp20.sns_share = {};
			window.mp20.sns_share.facebook = facebook;
		}
	} else {
		window.mp20 = {};
		window.mp20.sns_share = {};
		window.mp20.sns_share.facebook = facebook;
	}
})();
(function(){
	/**
	 * 네임스페이스
	 * @namespace twitter
	 */
	var twitter = {};

	/**
	 * String Attribute
	 * @type {{url: string}}
	 */
	twitter.attr = {
		"url": "url",
		"message": "message",
		"replace_message": '%message%',
		"replace_url": "%url%"
	};

	/**
	 * twitter share button Class
	 * @type {string}
	 */
	twitter.class_name = ".twitter_share_btn";

	/**
	 * twitter share base URL
	 * @type {string}
	 */
	twitter.url = "https://twitter.com/intent/tweet?text=" + twitter.attr.replace_message + "&url=" + twitter.attr.replace_url;

	/**
	 * 트위터 공유를 위해 공유 창을 띄우는 메서드.
	 * @param share_url - 창을 띄울 페이스북 공유 URL.
	 */
	twitter.share = function(message, share_url, for_web_data){
		var platform_name = "TWITTER";

		share_url = mp20.utm_manager.generate_url(platform_name, share_url, for_web_data);

		message = encodeURIComponent(message) || "";

		share_url = encodeURIComponent(share_url) || "";

		share_url = twitter.url.replace(this.attr.replace_message, message).replace(this.attr.replace_url, share_url);
		window.open(share_url);
	};

	/**
	 * 트위터 공유 버튼에 이벤트 바인딩.
	 */
	$(document).on("click", twitter.class_name, function(e){
		var $twitter_share_btn = $(e.currentTarget),
				url = $twitter_share_btn.data(twitter.attr.url) || window.location.href,
				message = $twitter_share_btn.data(twitter.attr.message),
				for_web_data = window.mp20.utm_manager.el_by_for_web_param($twitter_share_btn);

		twitter.share(message, url, for_web_data);
	});

	/**
	 * 전역 네임스페이스에 바인딩.
	 */
	if (window.mp20){
		if (window.mp20.sns_share){
			window.mp20.sns_share.facebook = twitter;
		} else {
			window.mp20.sns_share = {};
			window.mp20.sns_share.facebook = twitter;
		}
	} else {
		window.mp20 = {};
		window.mp20.sns_share = {};
		window.mp20.sns_share.facebook = twitter;
	}
})();
(function () {
  /**
   * kakao SDK Init
   */
//	Kakao.init("c7a58d638097e8cc349f7700b267b64f");

  /**
   * 네임스페이스
   * @namespace kakao
   */
  var kakao = {};

  /**
   * kakaotalk share button class
   * @type {string}
   */
  kakao.class_name = ".kakaotalk_share_btn";

  /**
   * 사진이 없거나 크기가 클 경우 사용할 이미지.
   * @type {string[]}
   */
  kakao.empty_image = [
    "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ou_pzrjjkiovam6z.jpg",
    "https://d1jrqqyoo3n46w.cloudfront.net/web/resources/ghbqfvg-0zz2jr4n.jpg",
    "https://d1jrqqyoo3n46w.cloudfront.net/web/resources/rnv04dw2u3h6gxmb.jpg"
  ];

  /**
   * kakao share button image info
   * @type {{width: string, height: string}}
   */
  kakao.image = {
    "width": "300",
    "height": "200"
  };

  /**
   * kakao share button info
   * @type {{text: string}}
   */
  kakao.button = {
    "text": "웹에서 보기"
  };

  kakao.akamai_subfix = "fit=around|300:200&crop=600:400;*,*&output-format=jpg&output-quality=80";

  /**
   * 카카오톡 share 하기.
   * @param message - 공유 버튼에 나올 message
   * @param image - 공유 버튼에 나올 이미지
   * @param url - 공유 버튼 누를때 갈 Web URL
   */
  kakao.share = function (message, image, url, el_by_for_web_param, button_name) {
    var platform_name = "KAKAO";
    var share_url = mp20.utm_manager.generate_url(platform_name, url, el_by_for_web_param);
    var linkVO = new window.mp20.vo.KakaoTalkLinkVO(share_url, share_url);
    var contentVO = new window.mp20.vo.KakaoTalkContentVO(message.slice(0, 100), image, linkVO);
    var buttonVO = new window.mp20.vo.KakaoTalkButtonVO(button_name, linkVO);
    
    window.mp20.service.KakaoTalkShare.shareFeedMessage(contentVO, null, [buttonVO]); 
  };

  /**
   * 이미지를 akamai로 리사이징 해주는 메서드.
   * @param image - 이미지 URL.
   * @returns {string} - akamia로 리사이징한 이미지.
   */
  kakao.image_resize_by_akamai = function (image) {
    var query_string_divier;

    if (image.indexOf("?") > -1) {
      query_string_divier = "&";
    } else {
      query_string_divier = "?";
    }

    return image + query_string_divier + this.akamai_subfix;
  };

  /**
   * 카카오톡 공유 버튼 이벤트 바인딩.
   */
  $(document).on("click", kakao.class_name, function (e) {
    var $kakao_share_btn = $(e.currentTarget);
    var is_not_script = $kakao_share_btn.data("not_script");

    if (is_not_script) {
      return;
    }

    var message = $kakao_share_btn.data("message");
    var image = $kakao_share_btn.data("image");
    var button_name = $kakao_share_btn.data("button_name");
    var url = $kakao_share_btn.data("url") || window.location.href;
    var el_by_for_web_param = mp20.utm_manager.el_by_for_web_param($kakao_share_btn);

    kakao.share(message, image, url, el_by_for_web_param, button_name);
  });

  /**
   * 전역 네임스페이스에 바인딩.
   */
  if (window.mp20) {
    if (window.mp20.sns_share) {
      window.mp20.sns_share.kakao = kakao;
    } else {
      window.mp20.sns_share = {};
      window.mp20.sns_share.kakao = kakao;
    }
  } else {
    window.mp20 = {};
    window.mp20.sns_share = {};
    window.mp20.sns_share.kakao = kakao;
  }
})();
(function(){
	/**
	 * 네임스페이스
	 * @namespace layer
	 */
	var layer = {},
			page_name = "PU_SHARE";

	/**
	 * 공유 layer 클레스 string.
	 * @type {string}
	 */
	layer.layer_class = ".mp20_share_layer";

	/**
	 * layer wrap
	 * @type {jQuery|HTMLElement}
	 */
	layer.$el = $(layer.layer_class);

	/**
	 * share button의 class name
	 * @type {{kakaotalk: string, facebook: string, band: string, mail: string, twitter: string}}
	 */
	layer.btn_class = {
		"kakaotalk": ".kakaotalk_share_btn",
		"facebook": ".facebook_share_btn",
		"band": ".band_share_btn",
		"mail": ".mail_share_btn",
		"twitter": ".twitter_share_btn"
	};

	/**
	 * 내부에서 사용할 고정 string
	 * @type {{hide_class: string, show_class: string}}
	 */
	layer.attr = {
		"hide_class": "hide",
		"show_class": "show"
	};

	/**
	 * share_info에서 필수로 있어야 하는 key 리스트.
	 * @type {string[]}
	 */
	layer.data_list = ["message", "image", "url", "title"];

	layer.open = function(share_info){
		window.mp20.push_status_server.trigger_event(window.mp20.push_status_server.make_open_action("restaurant_together_share"), [share_info]);
	};

	/**
	 * share layer를 열어주는 메서드.
	 * share layer가 있는지 먼저 체크 후 없다면 다시 select해주고 다시 없다면 console에 오류를 표출하고 작동 중지.
	 * share_info에 필수 key가 있는지 검증 후 모두 있다면 share_info를 button에 bind해주고 open 시켜줌.
	 * @param share_info {object} - 공유할 정보가 담긴 object
	 */
	layer.open_logic = function(share_info){
		if(!layer.$el.length){
			layer.$el = $(layer.layer_class);

			if(!layer.$el.length){
				console.error("share layer가 없습니다.");
				return false;
			}
		}

		common_ga_page(page_name);
		layer.find_share_btn();
		layer.bind_event();

		var share_info_validate = layer.share_info_validation(share_info);

		if(share_info_validate){
			layer.bind_info(share_info);
			layer.$el.removeClass(layer.attr.hide_class);
		} else {
			console.error("share info를 확인해주세요.");
		}
	};


	layer.close = function(){
		window.mp20.push_status_server.trigger_event(window.mp20.push_status_server.make_close_action("restaurant_together_share"), []);
	};

	/**
	 * share_layer를 닫아주는 메서드.
	 */
	layer.close_logic = function(){
		common_ga(page_name, "CLICK_CLOSE_SHARE_POPUP");
		layer.$el.addClass(layer.attr.hide_class);
		layer.unbind_event();
		unscroll_lock();
	};

	/**
	 * share info를 share button에 바인딩 해주는 메서드.
	 * @param share_info {object} - 공유할 정보가 담긴 object
	 */
	layer.bind_info = function(share_info){
		var $share_btns = _.values(this.share_btn);

		_.each($share_btns, function($share_btn){
			this.bind_info_el(share_info, $share_btn);
		}.bind(this));
	};

	/**
	 * share_info를 버튼마다 바인딩해주는 메서드.
	 * @param share_info {object} - 공유할 정보가 담긴 object
	 * @param $share_btn {jQuery} - 정보를 바인딩할 elements
	 */
	layer.bind_info_el = function(share_info, $share_btn){
		_.each(this.data_list, function(data_name){
			$share_btn.data(data_name, share_info[data_name]);
		})
	};

	/**
	 * share_info에 필수 key들이 있는지 검증하는 메서드.
	 * @param share_info - 공유할 정보가 담긴 object
	 * @returns {boolean} - true : 검증 완료, false: 필수 key가 없는 info
	 */
	layer.share_info_validation = function(share_info){
		var validate = true;

		_.each(this.data_list, function(data_name){
			if(!share_info[data_name]){
				validate = false;
			}
		});

		return validate;
	};

	/**
	 * share button selecting 메서드.
	 */
	layer.find_share_btn = function(){
		/**
		 * share layer안에 있는 공유 버튼 리스트.
		 * @type {{$facebook: jQuery, $kakao_talk: jQuery, $band: jQuery, $mail: jQuery, $twitter: jQuery}}
		 */
		this.share_btn = {
			"$facebook": this.$el.find(this.btn_class.facebook),
			"$kakao_talk": this.$el.find(this.btn_class.kakaotalk),
			"$band": this.$el.find(this.btn_class.band),
			"$mail": this.$el.find(this.btn_class.mail),
			"$twitter": this.$el.find(this.btn_class.twitter)
		};
	};

	/**
	 * layer에 이벤트를 정해주는 메서드.
	 */
	layer.bind_event = function(){
		this.$el.bind("click", function(e){
			if($(e.target).hasClass(this.layer_class.replace(".", ""))){
				this.close();
			}
		}.bind(this));
	};

	/**
	* layer에 binding된 이벤트를 unbind해주는 메서드.
	*/
	layer.unbind_event = function(){
		this.$el.unbind("click");
	};

	window.mp20.push_status_server.add_event("restaurant_together_share", layer.open_logic, layer.close_logic);

	/**
	 * 전역 네임스페이스에 바인딩.
	 */
	if(window.mp20){
		if(window.mp20.sns_share){
			window.mp20.sns_share.layer = layer;
		} else {
			window.mp20.sns_share = {};
			window.mp20.sns_share.layer = layer;
		}
	} else {
		window.mp20 = {};
		window.mp20.sns_share = {};
		window.mp20.sns_share.layer = layer;
	}
})();







/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(A,e,B){'use strict';function C(a){var c=[];v(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function D(a,c){null===a||a===B?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw w("uinput");b--;11>=document.documentMode&&n(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),E(b.attributes));
break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function E(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function x(a){return a.replace(/&/g,"&amp;").replace(F,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(G,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&H[a]&&(b=a);b||!0!==t[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==I[g]||!0===y[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(x(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==t[a]||!0===z[a]||(d("</"),d(a),d(">"));a==
b&&(b=!1)},chars:function(a){b||d(x(a))}}}function n(a){if(a.nodeType===Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.indexOf("ns1:"))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&n(c);(c=a.nextSibling)&&n(c)}var w=e.$$minErr("$sanitize"),F=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,G=/([^\#-~ |!])/g,z=h("area,br,col,hr,img,wbr"),q=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),u=e.extend({},k,q),q=e.extend({},
q,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),J=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
H=h("script,style"),t=e.extend({},z,q,k,u),y=h("background,cite,href,longdesc,src,xlink:href"),u=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),I=e.extend({},y,k,u),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw w("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(A);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(t,J);return function(a){var d=
[];D(a,v(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,m){function k(a){a&&p.push(C(a))}function q(a,b){var c;p.push("<a ");e.isFunction(m)&&(m=m(a));if(e.isObject(m))for(c in m)p.push(c+
'="'+m[c]+'" ');else m={};!e.isDefined(h)||"target"in m||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');k(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=f,p=[],s,n;f=r.match(c);)s=f[0],f[2]||f[4]||(s=(f[3]?"http://":"mailto:")+s),n=f.index,k(r.substr(0,n)),q(s,f[0].replace(b,"")),r=r.substring(n+f[0].length);k(r);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;
(function(){
	/**
	 * Branch.Io 네임스페이스.
	 * @namespace
	 */
	var branch_io_service = {}, branch;

	branch_io_service.PAGE_KEY = {
		"TOP_LIST": "TOP_LIST",
		"RESTAURANT": "RESTAURANT",
		"MANGO_POST": "POST",
    "EMAIL_VERIFICATION": "EMAIL_VERIFICATION",
    "PURCHASED_EAT_DEAL": "eat_deal_purchase",
    "RESERVATION_RESTAURANTS": "reservations",
    "RESERVATION_RESTAURANT": "reservation",
    "MY_RESERVATIONS": "my_reservations",
    "MY_RESERVATION": "my_reservation",
    "REVIEW_WRITING": "REVIEW_WRITING",
    "SEARCH": "search",
    "EAT_DEAL": "eat_deal",
    "EAT_DEALS": "eat_deals",
    "EAT_DEAL_COLLECTIONS": "eat_deal_collection",
	};

	branch_io_service.page_data = {};
	branch_io_service.set_page_data = {};

	/**
	 * 세팅 정보.
	 * @type {{branch_key: string, user_data: string}}
	 */
	branch_io_service.config = {
		"branch_key": "key_live_beeMcFpDWQgi7SKuIfO8hbmnvyac1zPZ",
		"IOS_url": "https://itunes.apple.com/kr/app/id628509224",
		"Android_url": "https://play.google.com/store/apps/details?id=com.mangoplate",
		"user_data": {}
	};

	/**
	 * 초기화 여부.
	 * @type {boolean}
	 */
	branch_io_service.is_init = false;

	/**
	 * 초기화 메서드.
	 * @returns {{object}}
	 */
	branch_io_service.init = function(page_key, page_data){
		if (this.is_init || !window.branch){
			return false;
		} else {
			branch = window.branch;
		}

		this.init_page_data_function();
		this.set_page_mapping_data(page_key, page_data);

		return branch.init(this.config.branch_key, {}, function(err, data){
			if (err){
				console.error(err);
				return;
			}

			this.config.user_data = data;
			this.is_init = true;
		}.bind(this));
	};

	/**
	 * 각 페이지 Mapping되는 DataSet을 만들어주는 메서드.
	 * @returns {object} - 해당 페이지에 Mapping되는 데이터.
	 */
	branch_io_service.set_page_mapping_data = function(page_key, page_data){
		var page_data_function = this["set_page_data"][page_key];

		if(typeof page_data_function === "function"){
			this.page_data = page_data_function(page_data);
		}
	};

  branch_io_service.make_data = function(destinationData, utm_url){
    var og_data = {
      "$desktop_url": window.location.href
    };

    var page_data = _.extend({}, destinationData, this.get_install_referrer(utm_url));
    return _.assign(og_data, page_data, {$deeplink_path: '', $android_deeplink_path: '', $ios_deeplink_path: ''});
  };

  branch_io_service.make_branch_link = function(data, callback){
    callback = callback || function(err, link){
      if (err){
        console.error(err);
        return false;
      }

      window.location.href = link;
    };

    branch.link({
      tags: [],
      channel: 'mp_web',
      feature: 'web_to_app_conversion',
      data: data
    }, callback);
  };

	/**
	 * DeepLink를 만들어서 반환하는 메서드.
	 */
  branch_io_service.make_link = function(utm_url){
    if(_isAndroid() && getParameter('utm_source') === 'pikicast') {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.mangoplate'
      return new Promise();
    }

    return new Promise(function(resolve, reject){
      var branch_data = this.make_data(this.page_data, utm_url);

      this.make_branch_link(branch_data, function(err, link){
        if (err){
          console.error(err);
          reject(resolve);
          return false;
        }
        window.location.href = link;
      });
    }.bind(this));
	};

	branch_io_service.get_install_referrer = function(utm_install_referrer){
		return {
			"install_referrer": utm_install_referrer
		}
	};

	branch_io_service.init_page_data_function = function(){
		var this_set_page_data = this["set_page_data"];

		this_set_page_data[this.PAGE_KEY.TOP_LIST] = function(data){
			return {
				"destination": branch_io_service.PAGE_KEY.TOP_LIST,
				"extra": data
			};
		};

		this_set_page_data[this.PAGE_KEY.MANGO_POST] = function(data){
			return {
				"destination": branch_io_service.PAGE_KEY.MANGO_POST,
				"extra": data
			}
		};

		this_set_page_data[this.PAGE_KEY.RESTAURANT] = function(data){
			return {
				"destination": branch_io_service.PAGE_KEY.RESTAURANT,
				"extra": data
			}
		}

		this_set_page_data[this.PAGE_KEY.EMAIL_VERIFICATION] = function(data) {
		  return {
		    "destination": "signup/email_verification",
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.PURCHASED_EAT_DEAL] = function (data) {
		  return {
        "destination": "eat_deal_purchase",
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.RESERVATION_RESTAURANTS] = function (data) {
		  return {
        "destination": "reservations",
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.RESERVATION_RESTAURANT] = function (data) {
      return {
        "destination": "reservation",
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.MY_RESERVATION] = function (data) {
      return {
        "destination": "my_reservation",
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.MY_RESERVATIONS] = function (data) {
      return {
        "destination": "my_reservations",
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.SEARCH] = function (data) {
      return {
        "destination": branch_io_service.PAGE_KEY.SEARCH,
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.REVIEW_WRITING] = function (data) {
      return {
        "destination": branch_io_service.PAGE_KEY.RESTAURANT,
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.EAT_DEAL] = function (data) {
      return {
        "destination": branch_io_service.PAGE_KEY.EAT_DEAL,
        "extra": data
      }
    }

    this_set_page_data[this.PAGE_KEY.EAT_DEALS] = function (data) {
      return {
        "destination": branch_io_service.PAGE_KEY.EAT_DEALS,
        "extra": undefined
      }
    }

    this_set_page_data[this.PAGE_KEY.EAT_DEAL_COLLECTIONS] = function (data) {
      return {
        "destination": branch_io_service.PAGE_KEY.EAT_DEAL_COLLECTIONS,
        "extra": data
      }
    }
	};

	/**
	 * 전역 네임스페이스에 바인딩.
	 */
	if (window.mp20){
		window.mp20.branch_io_service = branch_io_service;
	} else {
		window.mp20 = {};
		window.mp20.branch_io_service = branch_io_service;
	}
})();
(function () {
  var bottom_sns_share_service = {
    hide_class: "down",

    init: function () {
      this.select_dom();
      this.toggle_btn_event_bind();
      this.scroll_event_bind();
    },

    select_dom: function () {
      this.$bottom_sns_share = $(".share-sns-another");
      this.$etc_btn = this.$bottom_sns_share.find(".etc-btn");
    },

    toggle_btn_event_bind: function () {
      this.$etc_btn.on("click", function () {
        var on_class = "slide";
        //$share_list = $bottom_sns_share.find(".share-list");
        trackEvent("CLICK_SHARE_TOGGLE");
        if (this.$bottom_sns_share.hasClass(on_class)) {
          this.$bottom_sns_share.removeClass(on_class);
        } else {
          this.$bottom_sns_share.addClass(on_class);
        }
      }.bind(this));
    },

    scroll_event_bind: function () {
      var fade_speed = "fast";

      (function () {
        var prev_scroll = 0;
        var bottom_sns_share_height = this.$bottom_sns_share.outerHeight()

        var throttle = _.throttle(function (event) {
          var now_scroll = $(window).scrollTop();
          var last_scroll_position = $(document).outerHeight() - bottom_sns_share_height

          if (now_scroll < 30) {
            this.$bottom_sns_share.removeClass(this.hide_class);
            return false;
          }

          // 최대 스크롤 위치 여부
          if (now_scroll + window.innerHeight > last_scroll_position) {
            this.$bottom_sns_share.addClass(this.hide_class);
            return false;
          }

          if (prev_scroll > now_scroll || prev_scroll == now_scroll) {
            //Scroll Up
            this.$bottom_sns_share.removeClass(this.hide_class);
          } else if (prev_scroll < now_scroll) {
            //Scroll Down
            this.$bottom_sns_share.addClass(this.hide_class);
          }

          prev_scroll = now_scroll;
        }.bind(this), 200);

        $(window).scroll(throttle);
      }.bind(this))();
    }
  };

  /**
   * 전역객체에 바인딩.
   */
  if (window.mp20) {
    window.mp20.bottom_sns_share_service = bottom_sns_share_service;
  } else {
    window.mp20 = {};
    window.mp20.bottom_sns_share_service = bottom_sns_share_service;
  }

})();
(function(){
	var wannago_sign_popup = {};

	wannago_sign_popup.now_tab = "signin";
	wannago_sign_popup.select_tab_class = "selected";
	wannago_sign_popup.open_class = "on";
	wannago_sign_popup.popup_name = "PU_WANNAGO_LOGIN";

	wannago_sign_popup.tab_code = {
		"signin": "signin",
		"signup": "signup"
	};

	wannago_sign_popup.dom = {
		"popup": ".wannago_login_popup",
		"popup_main_image": ".wannago_login_popup_main_img",
		"popup_msg": ".wannago_login_popup_msg",
		"tabs": ".wannago_login_popup_main_tab .tab",
		"signin_tab": ".wannago_login_popup_signin",
		"signup_tab": ".wannago_login_popup_signup",
		"facebook_text": ".wannago_login_popup_facebook_text",
		"kakao_text": ".wannago_login_popup_kakao_text",
		"close_btn": ".close_btn",
		"wannago_login_popup_sign_wrap": ".wannago_login_popup_sign_wrap",
		"black_screen": ".black_screen",
		"facebook_btn": ".wannago_login_popup_sign.facebook",
		"kakao_btn": ".wannago_login_popup_sign.kakao"
	};

	var resources = {
    ko: {
      signin: {
        popup_msg: "로그인 해보세요<br />가고싶은 곳을 저장할 수 있어요",
        kakao_msg: "클릭 한 번이면 카카오톡 로그인",
        facebook_msg: "클릭 한 번이면 페이스북 로그인"
      },
      signup: {
        popup_msg: "회원가입 해보세요<br />가고싶은 곳을 저장할 수 있어요",
        kakao_msg: "클릭 한 번이면 카카오톡 회원가입",
        facebook_msg: "클릭 한 번이면 페이스북 회원가입"
      }
    },

    en: {
      signin: {
        popup_msg: "Sign in and you can save the places you 'wannago'!",
        kakao_msg: "Sign in via KakaoTalk with one click",
        facebook_msg: "Sign in via Facebook with one click"
      },
      signup: {
        popup_msg: "Sign up and you can save the places you 'wannago'!",
        kakao_msg: "Sign up via KakaoTalk with one click",
        facebook_msg: "Sign up via Facebook with one click"
      }
    }
  };

  var used_locale = resources[get_locale()];
	wannago_sign_popup.init = function(){
		this.bind_event();
	};

	wannago_sign_popup.tab_active_obj= {
		"signin": function(){
			var $popup = $(this.dom.popup),
					$image = $popup.find(this.dom.popup_main_image),
					$msg = $popup.find(this.dom.popup_msg),
					$signin_tab = $popup.find(this.dom.signin_tab),
					$kakao_text = $popup.find(this.dom.kakao_text),
					$facebook_text = $popup.find(this.dom.facebook_text),
					$wannago_login_popup_sign_wrap = $popup.find(this.dom.wannago_login_popup_sign_wrap);

			trackEvent("CLICK_WANNAGO_LOG_IN");
			$image.attr("src", get_full_picture_url_by_akamai("https://mp-seoul-image-production-s3.mangoplate.com/web/resources/belwdh7sngu0nq9r.png", undefined, undefined, "png"));
			$msg.html(used_locale.signin.popup_msg);
			$signin_tab.addClass(this.select_tab_class);
			$kakao_text.html(used_locale.signin.kakao_msg);
			$facebook_text.html(used_locale.signin.facebook_msg);
			$wannago_login_popup_sign_wrap.removeClass("signup");
		},
		"signup": function(){
			var $popup = $(this.dom.popup),
					$image = $popup.find(this.dom.popup_main_image),
					$msg = $popup.find(this.dom.popup_msg),
					$signup_tab = $popup.find(this.dom.signup_tab),
					$kakao_text = $popup.find(this.dom.kakao_text),
					$facebook_text = $popup.find(this.dom.facebook_text),
					$wannago_login_popup_sign_wrap = $popup.find(this.dom.wannago_login_popup_sign_wrap);

      trackEvent("CLICK_WANNAGO_SIGN_UP");
			$image.attr("src", "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/zdqfzo8gcjmjec34.png");
			$msg.html(used_locale.signup.popup_msg);
			$signup_tab.addClass(this.select_tab_class);
			$kakao_text.html(used_locale.signup.kakao_msg);
			$facebook_text.html(used_locale.signup.facebook_msg);
			$wannago_login_popup_sign_wrap.addClass("signup");
		}
	};

	wannago_sign_popup.bind_event = function(){
		var $popup = $(this.dom.popup),
				$tabs = $popup.find(this.dom.tabs),
				$close_btn = $popup.find(this.dom.close_btn),
				$black_screen = $popup.next(this.dom.black_screen),
				$facebook_btn = $popup.find(this.dom.facebook_btn),
				$kakao_btn = $popup.find(this.dom.kakao_btn);

		$tabs.on("click", function(e){
			var $target = $(e.target),
					tab_name = $target.data("tab_name"),
					tab_function;

			if(this.now_tab === tab_name){return false;}

			this.now_tab = tab_name;

			tab_function = this.tab_active_obj[tab_name];

			if(typeof tab_function === "function"){
				$tabs.removeClass(this.select_tab_class);
				tab_function.bind(this)();
			}
		}.bind(this));

		$close_btn.on("click", function(){
      trackEvent("CLICK_WANNAGO_CLOSE_BTN");
			this.close();
		}.bind(this));

		$black_screen.on("click", function(){
      trackEvent("CLICK_WANNAGO_CLOSE_OTHER");
			this.close();
		}.bind(this));

		$facebook_btn.on("click", function(){
			switch (wannago_sign_popup.now_tab){
				case wannago_sign_popup.tab_code.signin:
          trackEvent("CLICK_WANNAGO_LOG_IN_FACEBOOK");
					break;
				case wannago_sign_popup.tab_code.signup:
          trackEvent("CLICK_WANNAGO_SIGN_UP_FACEBOOK");
					break;
			}
			mp_facebook.login();
		});

		$kakao_btn.on("click", function(){
			switch (wannago_sign_popup.now_tab){
				case wannago_sign_popup.tab_code.signin:
          trackEvent("CLICK_WANNAGO_LOG_IN_KAKAO");
					break;
				case wannago_sign_popup.tab_code.signup:
          trackEvent("CLICK_WANNAGO_SIGN_UP_KAKAO");
					break;
			}

			mp_kakao.login();
		});
	};

	wannago_sign_popup.open = function(){
		var $popup = $(this.dom.popup);
		trackView(this.popup_name);
		$popup.addClass(this.open_class);
	};

	wannago_sign_popup.close = function(){
		var $popup = $(this.dom.popup);
		closeView(this.popup_name);
		$popup.removeClass(this.open_class);
	};

	wannago_sign_popup.init();

	/**
	 * 전역객체에 바인딩.
	 */
	if(window.mp20){
		if(window.mp20.wannago_popup){
			window.mp20.wannago_popup.wannago_sign_popup = wannago_sign_popup;
		} else {
			window.mp20.wannago_popup = {};
			window.mp20.wannago_popup.wannago_sign_popup = wannago_sign_popup;
		}
	} else {
		window.mp20 = {};
		window.mp20.wannago_popup = {};
		window.mp20.wannago_sign_popup = wannago_sign_popup;
	}
})();
(function(){
	var wannago_go_app_popup = {};

	wannago_go_app_popup.open_class = "on";
	wannago_go_app_popup.popup_name = "PU_WANNAGO_MORE";

	wannago_go_app_popup.dom = {
		"popup": ".wannago_go_app_popup",
		"black_screen": ".black_screen",
		"close_btn": ".close_btn"
	};

	wannago_go_app_popup.open = function(){
		var $popup = $(this.dom.popup);

		$popup.addClass(this.open_class);
		trackView(this.popup_name);
	};

	wannago_go_app_popup.close = function(){
		var $popup = $(this.dom.popup);
		$popup.removeClass(this.open_class);
		closeView(this.popup_name);
	};

	wannago_go_app_popup.bind_event = function(){
		var $popup = $(this.dom.popup);

		$popup.find(this.dom.close_btn).on("click", function(){
			trackView("CLICK_WANNAGO_CLOSE_BTN");
			this.close();
		}.bind(this));

		$popup.next(this.dom.black_screen).on("click", function(){
      trackView("CLICK_WANNAGO_CLOSE_OTHER");
			this.close();
		}.bind(this));
	};

	wannago_go_app_popup.bind_event();

	/**
	 * 전역객체에 바인딩.
	 */
	if (window.mp20){
		if (window.mp20.wannago_popup){
			window.mp20.wannago_popup.wannago_go_app_popup = wannago_go_app_popup;
		} else {
			window.mp20.wannago_popup = {};
			window.mp20.wannago_popup.wannago_go_app_popup = wannago_go_app_popup;
		}
	} else {
		window.mp20 = {};
		window.mp20.wannago_popup = {};
		window.mp20.wannago_go_app_popup = wannago_go_app_popup;
	}
})();
(function () {
  var CookieStorage = (function () {
    return {
      get length() {
        return _.size($.cookie());
      },

      getItem: function (key) {
        if (!key) {
          return null;
        }

        return $.cookie(key) || null;
      },

      setItem: function (key, value, option) {
        if (!key) {
          return;
        }

        $.cookie(key, value, option);
      },

      removeItem: function (key) {
        $.removeCookie(key);
      },

      clear: function () {

      }
    };
  })();

  window.CookieStorage = CookieStorage;
})();
(function () {
  var AdSlotByAreaStorage = (function () {
    var storage = {};

    return {
      get: function (slotElementId) {
        return storage[slotElementId];
      },

      set: function (slotElementId, area) {
        storage[slotElementId] = area;
      }
    };
  })();

  window.AdSlotByAreaStorage = AdSlotByAreaStorage;
})();
(function () {
  var AdRepo = function (json) {
    this._records = _.map(json, function (e) {
      return new AdInventory(
        e.platform,
        e.page,
        e.inventory,
        e.tag,
        e.sizes,
        e.args
      );
    });
  };

  AdRepo.prototype = {
    find: function (platform, page, inventory) {
      return _.findWhere(this._records, {
        platform: platform,
        page: page,
        name: inventory
      });
    },

    where: function (condition) {
      var clause = {};
      var regex = {};

      _.each(condition, function (v, k) {
        if (!_.isRegExp(v)) {
          clause[k] = v;
        } else {
          regex[k] = v;
        }
      });

      return _.filter(this._records, function (e) {
        if (!_.every(clause, function (v, k) {
            return e[k] === v;
          })) {
          return false;
        } else if (!_.every(regex, function (v, k) {
            return e[k].match(v);
          })) {
          return false;
        }

        return true;
      });
    }
  };

  window.AdRepo = AdRepo;
})();
(function () {
  var AdInventory = function (platform, page, name, tag, sizes, args) {
    this._platform = platform;
    this._page = page;
    this._name = name;
    this._tag = tag;
    this._sizes = sizes;
    this._args = args || {};
  };

  AdInventory.prototype = {
    get platform() {
      return this._platform;
    },

    get page() {
      return this._page;
    },

    get name() {
      return this._name;
    },

    get tag() {
      return this._tag;
    },

    get sizes() {
      return this._sizes;
    },

    get display_type() {
      return this.arg_value('display_type', 'banner');
    },

    arg_value: function (name, default_value) {
      return this._args.hasOwnProperty(name) ? this._args[name].value : default_value;
    }
  };

  window.AdInventory = AdInventory;
})();
(function () {
  var AdAreaPool = function () {
    this._pool = {};
  };

  AdAreaPool.prototype = {
    add: function (area) {
      if (area.id in this._pool)
        return false;

      this._pool[area.id] = area;
      return true;
    },

    get: function (area_id) {
      return this._pool[area_id];
    },

    get areas() {
      return _.values(this._pool);
    }
  };

  window.AdAreaPool = AdAreaPool;
})();

(function () {
  var Placer = function () {

  };

  Placer.replace = function (position, $wrapper) {
    $(position).replaceWith($wrapper);
  };

  Placer.after = function (position, $wrapper) {
    $(position).after($wrapper);
  };

  window.AdPlacer = Placer;
})();

(function () {
  var AdRenderer = function () {
    this._area_pool = new AdAreaPool();
  };

  AdRenderer.area_id = function(inventory, index) {
    var id_elements = [inventory.platform, inventory.page, inventory.name];

    if (!_.isUndefined(index) && !_.isNull(index)) {
      id_elements.push(index);
    }

    return id_elements.join('-');
  };

  AdRenderer.area_content_id = function(inventory, index) {
    return AdRenderer.area_id(inventory, index) + '-content';
  };

  AdRenderer.prototype = {
    get areas() {
      return this._area_pool.areas;
    },

    find_area: function(inventory, index) {
      return this._area_pool.get(AdRenderer.area_id(inventory, index));
    },

    render: function (inventory, position, placer, index, class_names) {
      if(_.isNull(inventory) || _.isUndefined(inventory))
        return;

      class_names = !_.isUndefined(class_names) && !_.isNull(class_names) ? [].concat(class_names) : [];
      class_names.push(inventory.name);
      if (inventory.platform === 'web_mobile') {
        class_names.push('only-mobile');
      } else if (inventory.platform === 'web_desktop') {
        class_names.push('only-desktop');
      }

      var delegator;
      switch (inventory.arg_value('display_type', 'banner')) {
        case 'popup':
          delegator = AdPopup;
          break;

        case 'custom_photo':
          delegator = AdCustomPhoto;
          break;

        case 'banner':
        default:
          delegator = AdBanner;
          break;
      }

      var area = new delegator(
        inventory,
        index,
        class_names
      );

      this._area_pool.add(area);

      area.render(position, placer);
      return area;
    }
  };

  window.AdRenderer = AdRenderer;
})();
(function () {
  var Publisher = function (args) {
    args = args || {};

    window.googletag.cmd.push(function () {
      window.googletag.pubads().disableInitialLoad();
      window.googletag.pubads().enableSingleRequest();
      window.googletag.pubads().collapseEmptyDivs();

      if (args.hasOwnProperty('coordinate')) {
        window.googletag.pubads().setLocation(args.coordinate.lat, args.coordinate.lon);
      }

      if (args.hasOwnProperty('targeting')) {
        var targeting = args.targeting;
        for (var key in targeting) {
          if(!targeting.hasOwnProperty(key)) continue;
          var value = targeting[key];
          if (value) {
            window.googletag.pubads().setTargeting(key, value);
          }
        }
      }

      window.googletag.enableServices();
    });
  };

  Publisher.prototype = {
    add_event_listener: function(event, fn) {
      window.googletag.cmd.push(function() {
        window.googletag.pubads().addEventListener("slotRenderEnded", function (event) {
          fn(event);
        });
      });
    },

    publish: function (areas) {
      window.googletag.cmd.push(function () {
        var slot;
        var slots = [];
        _.each(areas, function (area) {
          if (area.inventory.sizes) {
            var max_size = _.max(area.inventory.sizes, function(e) {
              return e[0];
            });
            var min_size = _.min(area.inventory.sizes, function(e) {
              return e[0];
            });

            var size = (document.documentElement.clientWidth >= 336) ? max_size : min_size;
            slot = window.googletag.defineSlot(
              area.inventory.tag,
              [size],
              area.content_id
            )
          } else {
            slot = window.googletag.defineOutOfPageSlot(
              area.inventory.tag,
              area.content_id
            );
          }

          if (slot) {
            AdSlotByAreaStorage.set(slot.getSlotElementId(), area);
            slot.addService(window.googletag.pubads());
            slots.push(slot);
            window.googletag.display(area.content_id);
          }

        }.bind(this));

        window.googletag.pubads().refresh(slots);
      }.bind(this));
    }
  };

  window.Publisher = Publisher;
})();

var AdSeries = function () {
  var AdSeries = function (a, b, count) {
    this.a = a;
    this.b = b;
    this.count = count;
  };

  AdSeries.prototype = {
    contains: function (value) {
      if (this.b === 0) {
        return this.a === value;
      }

      var matched = (value - this.a) % this.b === 0 && this.index(value) >= 0;
      if(_.isNull(this.count) || _.isUndefined(this.count))
        return matched;

      return matched && this.index(value) < this.count;
    },

    value: function (index) {
      return this.a + this.b * index;
    },

    index: function (value) {
      return (value - this.a) / this.b;
    },

    toArray: function (count) {
      count = count || this.count;

      var arr = [];
      for (var i = 0; i < count; i++) {
        arr.push(this.value(i));
      }
      return arr;
    }
  };

  return AdSeries;
}();

(function () {
  var AdMatcher = function () {
  };

  AdMatcher.is_match = function (inventory, index) {
    var start = inventory.arg_value('start', 0);
    var every = inventory.arg_value('every', 0);
    var series = new AdSeries(start, every);

    return AdMatcher.is_match_with(series, index);
  };

  AdMatcher.is_match_with = function (series, index) {
    return series.contains(index);
  };

  window.AdMatcher = AdMatcher;
})();
(function () {

  var AdRepeater = function () {
  };

  AdRepeater.repeat = function (inventories, collection, start_index, repeat_fn) {
    var index = start_index;
    _.each(collection, function (item) {
      _.each(inventories, function (i) {
        if(AdMatcher.is_match(i, index)) {
          repeat_fn(i, item, index);
        }
      });

      index++;
    });
  };

  window.AdRepeater = AdRepeater;
})();
(function () {
  var AdBanner = function (inventory, index, class_names) {
    this._inventory = inventory;
    this._index = index;
    this._class_names = !_.isUndefined(class_names) && !_.isNull(class_names) ? [].concat(class_names) : [];
  };

  AdBanner.prototype = {
    get inventory() {
      return this._inventory;
    },

    get id() {
      var id_elements = [this._inventory.platform, this._inventory.page, this._inventory.name];

      if (!_.isUndefined(this._index) && !_.isNull(this._index)) {
        id_elements.push(this._index);
      }

      return id_elements.join('-');
    },

    get content_id() {
      return this.id + '-content';
    },

    render: function (position, placer) {
      var $template = $('<div class="ad_wrap"><div class="content"></div></div>');
      $template.find('.content').attr('id', this.content_id);

      var $wrapper = $('<div class="ad_area"></div>');
      $wrapper
        .attr('id', this.id)
        .addClass(this._class_names.join(' '))
        .html($template);

      placer(position, $wrapper);
    },

    show: function (event) {

    }
  };

  window.AdBanner = AdBanner;
})();


(function () {
  var scrollCallback;

  function scrollLock() {
    $('body').css('overflow', 'hidden');

    scrollCallback = function () {
      window.scrollTo(0, 0);
    };
    $(document).bind('scroll', scrollCallback);
  }

  function scrollUnlock() {
    $('body').css('overflow', 'visible');
    $(document).unbind('scroll', scrollCallback);
  }

  var AdPopup = function (inventory, index, class_names) {
    this._inventory = inventory;
    this._index = index;
    this._class_names = !_.isUndefined(class_names) && !_.isNull(class_names) ? [].concat(class_names) : [];
  };

  AdPopup.closeAd = function () {
    scrollUnlock();
    $('.dfp_ad_front_popup').hide();
  };

  AdPopup.prototype = {
    get inventory() {
      return this._inventory;
    },

    get id() {
      var id_elements = [this._inventory.platform, this._inventory.page, this._inventory.name];

      if (!_.isUndefined(this._index) && !_.isNull(this._index)) {
        id_elements.push(this._index);
      }

      return id_elements.join('-');
    },

    get content_id() {
      return this.id + '-content';
    },

    render: function (position, placer) {
      var $wrapper = $('<div class="dfp_ad_front_popup">' +
        '  <div class="dfp_ad_front_banner_wrap">\n' +
        '    <div class="dfp_ad_front_banner_content">\n' +
        '      <div class="ad_area">\n' +
        '        <div class="ad_wrap"><div class="content"></div></div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>');

      $wrapper.on('click', function () {
        AdPopup.closeAd();
      });

      $wrapper
        .addClass([this.inventory.platform, this.inventory.name].join('_'))
        .addClass(this._class_names.join(' '));

      $wrapper.find('.ad_area')
        .attr('id', this.id);

      $wrapper.find('.content').attr('id', this.content_id);

      placer(position, $wrapper);
    },

    show: function (event) {
      AdPopupManager.setCreativeID(event.creativeId);

      if (!AdPopupManager.isCanShowPopup()) {
        return;
      }

      var area = AdSlotByAreaStorage.get(event.slot.getSlotElementId());
      var $element = $('.dfp_ad_front_popup.' + area.inventory.platform + '_' + area.inventory.name);
      switch (area.inventory.arg_value('display', 'once')) {
        case 'every':
          this._fadeIn($element);
          break;

        case 'once':
        default:
          // 전면 팝업은 인벤토리에 관계 없이 세션당 1회 노출되어야 함
          if (window.sessionStorage) {
            if (!window.sessionStorage.getItem('ad_popup')) {
              this._fadeIn($element);
              window.sessionStorage.setItem('ad_popup', true);
            }
          } else {
            if ($.cookie('ad_popup') === undefined) {
              this._fadeIn($element);
              $.cookie('ad_popup', true, {path: '/'});
            }
          }
      }
    },

    _fadeIn: function ($element) {
      $element.fadeIn();
      scrollLock();
    }
  };

  window.AdPopup = AdPopup;
})();
(function () {
  var AdCustomPhoto = function (inventory, index, class_names) {
    this._inventory = inventory;
    this._index = index;
    this._class_names = !_.isUndefined(class_names) && !_.isNull(class_names) ? [].concat(class_names) : [];

    window.addEventListener('message', function (event) {
      if (event.data.img) {
        this._data = event.data;
      }
    }.bind(this));
  };

  var template = _.template('<div><div id="photo_viewer_ad">\n' +
    '<a class="photo_wrap" href="{{link_url}}" target="_blank" style="background-image: url({{img}});height: {{height}}px">\n' +
    '</a>\n' +
    '<a class="ad_detail_btn" href="{{link_url}}" target="_blank">더 알아보기<img class="ad_detail_btn_arrow" src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/phgvzdixyeycxuay.png" alt="text_arrow_img" />\n' +
    '</a>\n' +
    '</div></div>');

  function get_image_height(width_ratio, height_ratio) {
    var viewport_width = document.documentElement.clientWidth;
    return (viewport_width * height_ratio) / width_ratio;
  }

  AdCustomPhoto.prototype = {
    get inventory() {
      return this._inventory;
    },

    get id() {
      var id_elements = [this._inventory.platform, this._inventory.page, this._inventory.name];

      if (!_.isUndefined(this._index) && !_.isNull(this._index)) {
        id_elements.push(this._index);
      }

      return id_elements.join('-');
    },

    get content_id() {
      return this.id + '-content';
    },

    get $element() {
      return template({
        link_url: this._data.link_url,
        img: this._data.img,
        height: get_image_height(5,4)
      });
    },

    render: function (position, placer) {
      var $template = $('<div class="ad_wrap"><div class="content"></div></div>');
      $template.find('.content').attr('id', this.content_id);

      var $wrapper = $('<div class="ad_area"></div>');
      $wrapper
        .attr('id', this.id)
        .addClass(this._class_names.join(' '))
        .html($template);

      placer(position, $wrapper);
    }
  };

  window.AdCustomPhoto = AdCustomPhoto;
})();
(function () {
  var STORAGE_KEY = {
    BLOCKED_CREATIVE_ID: 'BlockedPopupCreativeID',
    BLOCKED_CREATIVE_DATE: 'BlockedPopupCreativeDate'
  };
  var Storage = window.localStorage
    ? window.localStorage
    : window.cookieStorage;
  var COOKIE_OPTION = {expires: 1000, path: '/'};

  var AdPopupManager = function (locale) {
    this._creativeID = null;
    this._locale = locale;
  };
  var ALLOW_LOCALE = ['ko'];

  AdPopupManager.prototype = {
    setCreativeID: function (creativeID) {
      this._creativeID = creativeID;
    },

    isCanShowPopup: function () {
      if (!this._creativeID) {
        return false;
      }

      if (!this._isAllowLocale()) {
        return false;
      }

      if (this._isSameBlockedCreativeID()) {
        return this._hasBlockedDate()
          ? this._isOverBlockedDate()
          : false
      }

      return true;
    },

    showAdPopup: function (ad_popup, ad_popup_event) {
      if (is_mobile_viewport()) {
        // 모바일 경우 앱 유도 팝업 -> 전면 팝업 순으로 나오게 처리
        if (window.mp20.PopupUseAppView) {
          window.mp20.PopupUseAppView.show(ad_popup, ad_popup_event);
        }
      } else {
        // 테스크탑일 경우 기존대로 바로 보여주기
        if (window.mp20.PopupUseAppView) {
          window.mp20.PopupUseAppView.clear();
        }
        if (ad_popup && ad_popup_event) {
          ad_popup.show(ad_popup_event);
        }
      }
    },

    blockCreative: function () {
      this._setBlockedCreativeID();
      this._removeSameBlockedDate();
    },

    blockCreativeByToday: function () {
      this._setBlockedCreativeID();
      this._setSameBlockedDate();
    },

    clearAll: function() {
      this.clearLocalData();
      this.clearSession();
    },

    clearSession: function() {
      window.sessionStorage.removeItem('ad_popup');
    },

    clearLocalData: function() {
      this._removeSameBlockedDate();
      this._removeSameBlockedID();
    },

    _setBlockedCreativeID: function () {
      Storage.setItem(
        STORAGE_KEY.BLOCKED_CREATIVE_ID,
        this._creativeID,
        {expires: 1000, path: '/'}
      );
    },

    _setSameBlockedDate: function () {
      Storage.setItem(
        STORAGE_KEY.BLOCKED_CREATIVE_DATE,
        this._getTodayValue(),
        COOKIE_OPTION
      );
    },

    _removeSameBlockedDate: function () {
      Storage.removeItem(STORAGE_KEY.BLOCKED_CREATIVE_DATE);
    },

    _removeSameBlockedID: function() {
      Storage.removeItem(STORAGE_KEY.BLOCKED_CREATIVE_ID);
    },

    _getTodayValue: function () {
      var now = new Date();

      return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
    },

    _isSameBlockedCreativeID: function () {
      var blockedCreativeID = this._getBlockedCreativeID();

      return this._creativeID.toString() === (blockedCreativeID ? blockedCreativeID.toString() : null);
    },

    _getBlockedCreativeID: function () {
      return Storage.getItem(STORAGE_KEY.BLOCKED_CREATIVE_ID);
    },

    _isOverBlockedDate: function () {
      var blockedDate = this._getBlockedDate();

      return this._getTodayValue() > (blockedDate ? blockedDate.valueOf() : 0);
    },

    _getBlockedDate: function () {
      return Storage.getItem(STORAGE_KEY.BLOCKED_CREATIVE_DATE);
    },

    _hasBlockedDate: function () {
      return !!this._getBlockedDate()
    },

    _isAllowLocale: function () {
      return ALLOW_LOCALE.indexOf(this._locale) > -1;
    }
  };

  window.AdPopupManager = new AdPopupManager(I18n.locale);
})();
(function () {
  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];

  var AdManager = function () {
    this._repo = new AdRepo(parse_json($('#dfp_ads').html(), []));
    this._area_renderer = new AdRenderer();

    var args = {};
    var location = parse_json($('#location').html(), undefined);
    if (location !== undefined) {
      args['coordinate'] = new Coordinate(location.latitude, location.longitude);
    }
    var dfp_targeting = parse_json($('#dfp_targeting').html(), undefined);
    if (dfp_targeting !== undefined) {
      args['targeting'] = dfp_targeting;
    }

    this._publisher = new Publisher(args);

    this._is_previous_viewport_mobile = is_mobile_viewport();
    this._handle_window_resize();
    this._handle_ad_area();
    this._handle_impression();
  };

  var instance;
  AdManager.get_instance = function () {
    instance = instance ? instance : new AdManager();

    return instance;
  };

  AdManager.prototype = {
    get repo() {
      return this._repo;
    },

    get area_renderer() {
      return this._area_renderer;
    },

    publish: function () {
      this._render_placeholders();
      this._publisher.publish(this._areas_by_viewport());
    },

    _render_placeholders: function () {
      var areas = {};
      _.each($('.ad_placeholder').toArray(), function (e) {
        var $e = $(e);
        var area = this._area_renderer.render(
          this.repo.find($e.data('platform'), $e.data('page'), $e.data('inventory')),
          $e,
          AdPlacer.replace,
          undefined
        );
        areas[area.id] = area;
      }.bind(this));

      this._publisher.add_event_listener("slotRenderEnded", function (event) {
        var area = AdSlotByAreaStorage.get(event.slot.getSlotElementId());
        if (area.inventory.arg_value('display_type', undefined) === 'popup') {
          if (areas[area.id]) {
            window.AdPopupManager.showAdPopup(areas[area.id], event);
          }
        }
      });
    },

    _areas_by_viewport: function () {
      if (is_mobile_viewport()) {
        return _.filter(this._area_renderer.areas, function (e) {
          return e.inventory.platform === 'web_mobile';
        });
      }

      return _.filter(this._area_renderer.areas, function (e) {
        return e.inventory.platform === 'web_desktop';
      });
    },

    _handle_window_resize: function () {
      var handle_resize = _.throttle(function () {
        if (this._is_previous_viewport_mobile !== is_mobile_viewport()) {
          this.publish();
          this._is_previous_viewport_mobile = is_mobile_viewport();
        }
      }.bind(this), 100);

      $(window).on('resize', handle_resize);
    },

    _handle_ad_area: function () {
      window.googletag.cmd.push(function () {
        window.googletag.pubads().addEventListener('slotRenderEnded', function (event) {
          var area = AdSlotByAreaStorage.get(event.slot.getSlotElementId());
          var $content = $('#' + area.content_id);
          if (!event.advertiserId) {
            $content.parents(".ad_area").hide();
            return;
          }
        }.bind(this));
      }.bind(this));
    },

    _handle_impression: function () {
      window.googletag.cmd.push(function () {
        window.googletag.pubads().addEventListener('impressionViewable', function (event) {
          var slot = event.slot;

          if (window.AdImpressionNotifier) {
            window.AdImpressionNotifier.send_message(slot.getResponseInformation().sourceAgnosticLineItemId,
              slot.getAdUnitPath());
          }
        });
      });
    },

    _is_direct_ad: function ($element) {
      return !$element.find('iframe').data('is-safeframe');
    }
  };

  window.AdManager = AdManager;
})();
(function () {
  /**
   * 전역객체에 바인딩.
   */
  if (!window.mp20) {
    window.mp20 = {};
  }

  window.mp20.vo = {};
  window.mp20.model = {};
  window.mp20.view = {
    templateBuilder: {},
    decorator: {}
  };
  window.mp20.controller = {};
  window.mp20.service = {};
  window.mp20.constants = {};
  window.mp20.utils = {};
  window.mp20.mapper = {};
  window.mp20.module = {};
})();
(function () {
  var constants = (function () {
    return {
      MANGO_API_HOST: 'https://stage.mangoplate.com',
      IMAGE_UPLOAD_HOST: 'https://image-upload.mangoplate.com',
      ANALYTIES_HOST: 'https://tracking.mangoplate.com/collect',
      MANGO_ORIGIN: 'mangoplate.com',

      IMAGE_UPLOAD_API_KEY: 'OCPgtFnAx27bDWd0gS74Z5hmnv3KV1pJ7TPeykTc',
      USER_FALLBACK_IMAGE_URL: 'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/jmcmlp180qwkp1jj.png?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80',
      DEFAULT_IMAGE_SIZE: {
        USER_PROFILE: 56,
        RESTAURANT_LIST: 738,
      },

      RESULT_CODE: {
        SUCCESS: 200,
        ERROR: 500,
        UNAUTHORIZED: 401,
        MAINTENANCE_MODE: 911
      },

      STATUS_CODES: {
        ACTIVE: 1,
        CLOSED: 2,
        PENDING: 3,
        DUPLICATED: 4,
        NEED_MORE_INFO: 5,
        INACTIVE: 0
      },

      MESSAGE_TYPE: {
        EAT_DEAL_PURCHASE_LOADED: 'EatDealPurchase/loaded',
        EAT_DEAL_PURCHASE_INIT: 'EatDealPurchase/init',
        EAT_DEAL_PURCHASE_RESULT: 'EatDealPurchase/result',
      },

      EAT_DEAL_RESULT_STATE: {
        SUCCESS: 'success',
        FAIL: 'fail',
      },

      EAT_DEAL_STATUS: {
        // Client Status
        NOT_ONLY_TARGET_USER_FOR_ZERO_DEAL: 1001,
        NOT_ONLY_HOLIC_USER_FOR_DEAL: 1002,

        // Server Status
        CAN_PURCHASE: 100,
        BEFORE_SALES: 510,
        OUT_OF_ORDER: 520,
        SALES_END: 530,
        EXCEEDED_INDIVIDUAL_HOLD_COUNT: 540,
        EXCEEDED_INDIVIDUAL_PURCHASE_COUNT: 550
      },

      ANALYTIC_PAGE_NAME: {
        HOME: 'PG_MAIN',
        EAT_DEAL_DETAIL: 'PG_EATDEAL',
        EAT_DEAL_DETAIL_SHARE_LAYER: 'PU_EATDEAL_SHARE',
        EAT_DEAL_DETAIL_PICTURE_LAYER: 'PU_EATDEAL_PICTURE',
        EAT_DEAL_DETAIL_COMPLETE_LAYER: 'PU_EATDEAL_FINISH',
        EAT_DEAL_COLLECTION_DETAIL: 'PG_EATDEAL_COLLECTION',
        EAT_DEAL_COLLECTION_SHARE_LAYER: 'PU_SHARE_EATDEAL_COLLECTION',
        STORY_MAIN: 'PG_STORY_LIST',
        TOPLIST_MAIN: 'PG_TOPLIST_LIST',
        TOPLIST: 'PG_TOPLIST',
        ENGAGEMENT_REVIEW_COMPOSER: 'PG_ENGAGEMENT_REVIEW_COMPOSER',
        STORY: 'PG_MANGOPICKS'
      },

      EAT_DEAL_PURCHASE_ERROR_CODE: {
        BROWSER_BACK: 30100,
        NOT_MATCHED_PASS_CODE: 40124,
        EXPIRED_PASS_CODE: 40125,
        EXCEEDED_INDIVIDUAL_HOLD_COUNT: 40514,
        ONLY_BUY_EATDEAL_FOR_HOLIK: 40312
      },

      EAT_DEALS_AND_COUPONS_ITEM_TYPE: {
        EAT_DEAL: 'eat_deal',
        COUPON: 'coupon'
      },

      EAT_DEAL_DISCOUNT_TYPE: {
        NONE: 'none',
        PRICE: 'price',
        RATE: 'rate'
      },

      APP_MARKET_LINK: {
        ANDROID: 'https://play.google.com/store/apps/details?id=com.mangoplate',
        IOS: 'https://itunes.apple.com/app/id628509224'
      },

      SUBACTION_TYPE: {
        DO_NOT_RECOMMEND: 1,
        ITS_OK: 2,
        RECOMMEND: 3
      },

      RESTAURANT_ACTION_TYPE: {
        REVIEW: 3
      },

      REVIEW_IMAGE_UPLOAD_ERROR_TYPE: {
        OVER_FILE_SIZE: 1,
        NOT_SUPPORT_FILE_EXTENSION: 2,
        MAX_PICTURE_COUNT: 3,
        UNKNOWN: 4
      },

      REVIEW_CONTEXT_MODE_TYPES: {
        WRITE: 'WRITE',
        EDIT: 'EDIT',
        DRAFT: 'DRAFT'
      },

      RELATED_CONTENT_TYPE: {
        MANGO_PICK: "mango_pick",
        TOP_LIST: "top_list",
        EAT_DEAL_COLLECTION: "eat_deal_collection"
      },

      REVIEW_PICTURE_UPLOADED_STATE: {
        NOT_UPLOADED: 'NOT_UPLOADED',
        UPLOADED: 'UPLOADED',
        READY: 'READY'
      },

      KAKAO_TALK_TEMPLATE_ID: {
        NORMAL_CONTENT: 13433,
        STORY_MY_LIST: 7903
      },

      RELATED_EAT_DEAL_PAGE_TYPE: {
        EAT_DEAL_DETAIL: 'eat_deal_detail',
        EAT_DEAL_PURCHASE_CONFIRMED: 'eat_deal_purchase_confirmed'
      }
    };
  })();

  mp20.constants = constants;
})();
(function () {
  function Model() {
    this._listeners = [];
  }

  Model.prototype = {
    subscribe: function (listener) {
      this._listeners.push(listener);
    },

    _notify: function (data) {
      this._listeners.forEach(function (listener) {
        listener(data);
      });
    },

    getData: function () {
      throw new Error('getData is must override');
    }
  };

  window.mp20.model['Interface'] = Model;
})();
(function () {
  function HttpFetcher() {

  }

  HttpFetcher.prototype = {
    get: function (url, data, header, option) {
      return this._getPromise({
        url: url,
        method: 'GET',
        data: data,
      }, header, option);
    },

    post: function (url, data, header, option) {
      return this._getPromise({
        url: url,
        method: 'POST',
        data: data,
      }, header, option);
    },

    put: function (url, data, header, option) {
      return this._getPromise({
        url: url,
        method: 'PUT',
        data: data,
      }, header, option);
    },

    'delete': function (url, data, header, option) {
      return this._getPromise({
        url: url,
        method: 'DELETE',
        data: data,
      }, header, option);
    },

    _getPromise: function (config, headers, option) {
      option = option || {};
      var self = this;

      return new Promise(function (resolve, reject) {
        var defaultConfig = {
          success: function (data) {
            if (data.error) {
              var error_code = data.error.error_code;
              if (error_code === window.mp20.constants.RESULT_CODE.MAINTENANCE_MODE) {
                window.location.reload();
                reject(data.error);
                return;
              }
            }
            resolve(data);
          },

          error: function (err) {
            reject(err);
          },

          beforeSend: function (xhr) {
            self._setHeaderToRequest(xhr, headers, option);
          },
        };

        var baseParams = {};
        if (option.includeFileData) {
          baseParams = {
            contentType: false,
            processData: false,
          };
        }

        var params = _.assign(baseParams, defaultConfig, config);
        $.ajax(params);
      });
    },

    _setHeaderToRequest: function (xhr, headers, option) {
      for (var key in headers) {
        if (!headers.hasOwnProperty(key)) {
          continue;
        }

        if (option.includeFileData && key === 'Content-Type') {
          continue;
        }

        xhr.setRequestHeader(key, headers[key]);
      }
    },
  };

  window.mp20.utils['HttpFetcher'] = new HttpFetcher();
})();
(function () {
  var constants = window.mp20.constants;
  var httpFetcher = window.mp20.utils.HttpFetcher;
  var header = {
    Authorization: auth_service.get_access_token(),
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };
  var getApiUrl = function (path) {
    return constants.MANGO_API_HOST + path;
  };
  var getData = function (data) {
    return _.assign({
      'language': get_language(),
      'device_uuid': get_device_uuid(),
      'device_type': get_device_type(),
    }, data);
  };
  var restaurantAdditionalInfoType = {
    RELATED_MANGO_PICKS: 'related_mango_picks',
    RELATED_TOP_LIST: 'related_list',
    NEAR_BY_POPULAR_RESTAURANT: 'near_popular_restaurants',
  };

  function toFormData(data) {
    var formData = new FormData();

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    return formData;
  }

  function HttpApi() {

  }

  HttpApi.prototype = {
    get: function (url, data) {
      return httpFetcher.get(
        url,
        getData(data),
        header
      );
    },

    post: function (url, data) {
      return httpFetcher.post(
        url,
        getData(data),
        header
      );
    },

    searchByFilter: function (filter, orderBy, startIndex, requestCount) {
      return httpFetcher.post(
        getApiUrl('/api/v6/search/by_filter.json'),
        getData({
          filter: filter,
          order_by: orderBy,
          start_index: startIndex,
          request_count: requestCount,
        }),
        header
      );
    },

    getCommonCode: function () {
      return httpFetcher.get(
        getApiUrl('/api/common/codetable.js'),
        getData(),
        header
      );
    },

    getRestaurantsByKeys: function (restaurantKeys) {
      var restaurantKeysString = restaurantKeys.join(',');

      return httpFetcher.get(
        getApiUrl('/api/v2/web/recently_viewed/restaurants/by_restaurant_keys.json'),
        getData({
          restaurant_keys: restaurantKeysString,
        }),
        header
      );
    },

    wannago: function (restaurantUUID) {
      return httpFetcher.post(
        getApiUrl('/api/restaurant/action/create.json'),
        getData({
          action_type: 4,
          restaurant_uuid: restaurantUUID,
        }),
        header
      ).then(function (res) {
        if (res.error) {
          throw res.error;
        }

        return res;
      })
    },

    cancelWannago: function (actionID) {
      return httpFetcher.post(
        getApiUrl('/api/restaurant/action/delete.json'),
        getData({action_id: actionID}),
        header
      );
    },

    getWannagoRestaurants: function (memberUUID, startIndex, requestCount) {
      return httpFetcher.post(
        getApiUrl('/api/v5/consumers/' + memberUUID + '/wannago/restaurants.json'),
        getData({
          start_index: startIndex,
          request_count: requestCount,
        }),
        header
      );
    },

    getRestaurantByToplist: function (keyword, startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v2/web/top_lists/' + keyword + '/restaurants.js'),
        getData({
          start_index: startIndex,
          request_count: requestCount,
        }),
        header
      );
    },

    getTopList: function (startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v5/top_lists/list.json'),
        getData({
          start_index: startIndex,
          request_count: requestCount,
        }),
        header
      );
    },

    getTopListByKeyword: function (keyword, startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v5/top_lists/list/search.json'),
        getData({
          keyword: keyword,
          start_index: startIndex,
          request_count: requestCount,
        }),
        header
      );
    },

    getMangoPickList: function (startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v5/mango_picks/list.json'),
        getData({
          start_index: startIndex,
          request_count: requestCount,
        }),
        header
      );
    },

    checkVerifiedAccessToken: function (accessToken) {
      return httpFetcher.post(
        getApiUrl('/api/v5/account/verification/user.json'),
        getData(),
        {
          Authorization: accessToken,
        }
      );
    },

    policyAgreements: function (member_uuid, accessToken, policyAgreementsData) {
      return httpFetcher.post(
        getApiUrl('/api/v1/consumer/' + member_uuid + '/policy_agreements.json'),
        getData(policyAgreementsData),
        {
          Authorization: accessToken,
        }
      );
    },

    termsAgreements: function (accessToken, userID, revisionIDs) {
      return httpFetcher.post(
        getApiUrl('/api/terms/agreements.json'),
        getData({
          'userID': userID,
          'revisionIDs': revisionIDs,
        }),
        {
          Authorization: accessToken,
        }
      );
    },

    signInByFacebook: function (facebookID, facebookAccessToken) {
      return httpFetcher.post(
        getApiUrl('/api/v5/account/login/by_facebook.json'),
        getData({
          facebook_id: facebookID,
          facebook_access_token: facebookAccessToken
        })
      );
    },

    signUpByFacebook: function (FBUserInfo) {
      return httpFetcher.post(
        getApiUrl('/api/v5/account/signup/by_facebook.json'),
        getData({
          facebook_id: FBUserInfo.userId,
          facebook_access_token: FBUserInfo.accessToken,
          first_name: FBUserInfo.firstName,
          last_name: FBUserInfo.lastName,
          email: FBUserInfo.email,
          country: FBUserInfo.locale,
          picture_url: "",
          birthday: FBUserInfo.birthday,
        })
      );
    },

    startWithApple: function (clientId, sub, code, email, firstName, lastName) {
      return httpFetcher.post(
        getApiUrl('/api/v5/account/start_with/apple.json'),
        getData({
          client_id: clientId,
          sub: sub,
          code: code,
          email: email,
          first_name: firstName,
          last_name: lastName
        })
      );
    },

    getEatDeals: function (startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v2/eat_deals/search/by_filter.json'),
        getData({
          filter: '{}',
          start_index: startIndex,
          request_count: requestCount,
          order_by: 0
        }),
        header
      );
    },

    getEatDealsFilterData: function () {
      return httpFetcher.post(
        getApiUrl('/api/v1/eat_deals/search/by_filter/count.json'),
        getData()
      );
    },

    getEatDealsByFilter: function (filter, startIndex, requestCount) {
      return httpFetcher.post(
        getApiUrl('/api/v2/eat_deals/search/by_filter.json'),
        getData({
          filter: JSON.stringify(filter),
          start_index: startIndex,
          request_count: requestCount,
          order_by: 0
        }),
        header
      );
    },

    uploadReviewPicture: function (base64EncodedPicture, pictureMimeType, restaurantID, userID) {
      var uriManager = new window.mp20.service.URIManager(constants.IMAGE_UPLOAD_HOST + '/upload-image');
      var key = restaurantID + '/' + userID + '_' + Date.now();
      uriManager.addQuery('key', key);
      uriManager.addQuery('content_type', pictureMimeType);

      // return new Promise(function (resolve) {
      //   httpFetcher.post(
      //     uriManager.get(),
      //     base64EncodedPicture,
      //     {
      //       'x-api-key': constants.IMAGE_UPLOAD_API_KEY
      //     }
      //   ).then(function (res) {
      //     setTimeout(function () {
      //       resolve(res);
      //     }, 3000);
      //   })
      // });

      return httpFetcher.post(
        uriManager.get(),
        base64EncodedPicture,
        {
          'x-api-key': constants.IMAGE_UPLOAD_API_KEY
        }
      );
    },

    getReview: function (restaurantKey, startIndex, requestCount, sortBy, actionValue) {
      var data = {
        start_index: startIndex,
        request_count: requestCount,
        sort_by: sortBy,
      };

      if (actionValue) {
        data.action_values = actionValue;
      }

      return httpFetcher.get(
        getApiUrl('/api/v5/restaurants/' + restaurantKey + '/reviews.json'),
        getData(data),
        header
      );
    },

    createReview: function (restaurantUUID, recommendValue, reviewText, pictureUrls) {
      return httpFetcher.post(
        getApiUrl('/api/v6/engagement/reviews/create.json'),
        getData({
          restaurant_uuid: restaurantUUID,
          action_type: mp20.constants.RESTAURANT_ACTION_TYPE.REVIEW,
          action_value: recommendValue,
          comment: reviewText,
          comment_image_urls: pictureUrls,
        }),
        header
      );
    },

    updateReview: function (reviewKey, restaurantUUID, recommendValue, reviewText, pictureUrls) {
      return httpFetcher.post(
        getApiUrl('/api/v6/engagement/reviews/update.json'),
        getData({
          comment_uuid: decodeReviewKey(reviewKey),
          restaurant_uuid: restaurantUUID,
          action_type: mp20.constants.RESTAURANT_ACTION_TYPE.REVIEW,
          action_value: recommendValue,
          comment: reviewText,
          comment_image_urls: pictureUrls,
        }),
        header
      );
    },

    deleteReview: function (reviewKey) {
      return httpFetcher.post(
        getApiUrl('/api/v6/engagement/reviews/delete.json'),
        getData({
          comment_uuid: decodeReviewKey(reviewKey)
        }),
        header
      );
    },

    getEatDealCollectionInfo: function (linkKey) {
      return httpFetcher.get(
        getApiUrl('/api/v2/eat_deal_collections/' + linkKey + '.json'),
        getData(),
        header
      )
    },

    getEatDealCollectionDeals: function (linkKey, startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v2/eat_deal_collections/' + linkKey + '/eat_deals.json'),
        getData({
          filter: '{}',
          start_index: startIndex,
          request_count: requestCount
        }),
        header
      );
    },

    getEatDealCollectionDealsWithFilter: function (linkKey, filter, startIndex, requestCount) {
      return httpFetcher.get(
        getApiUrl('/api/v2/eat_deal_collections/' + linkKey + '/eat_deals.json'),
        getData({
          filter: JSON.stringify(filter),
          start_index: startIndex,
          request_count: requestCount
        }),
        header
      );
    },

    getEatDealCollectionRegionData: function (linkKey) {
      return httpFetcher.get(
        getApiUrl('/api/v2/eat_deal_collections/' + linkKey + '/eat_deals/count.json'),
        getData(),
        header
      );
    },

    getRecommendAndPopularKeyword: function () {
      return httpFetcher.get(
        getApiUrl('/api/v5/search/keyword/suggestion.json'),
        getData(),
        header
      );
    },

    getSuggestKeyword: function (keyword, seq) {
      return httpFetcher.get(
        getApiUrl('/api/v3/web/search/by_keyword/suggested.json'),
        getData({
          keyword: keyword,
          seq: seq
        }),
        header
      );
    },

    getRelatedEatDeals: function (eatDealId, pageType) {
      return httpFetcher.get(
        getApiUrl('/api/v1/eat_deals/' + eatDealId + '/related_eat_deals.json'),
        getData({
          page_type: pageType
        }),
        header
      );
    },

    getRelatedEatDealsByRestaurantKey: function (restaurantKey) {
      return httpFetcher.get(
        getApiUrl('/api/v8/restaurants/' + restaurantKey + '/eat_deals.json'),
        getData(),
        header
      );
    },

    getRestaurantAdditionalInfo: function (restaurantKey, fieldList) {
      return httpFetcher.get(
        getApiUrl('/api/v5/restaurants/' + restaurantKey + '/additional.json'),
        getData({
          fields: fieldList.join(','),
        }),
        header
      );
    },

    getRelatedStory: function (restaurantKey) {
      return this.getRestaurantAdditionalInfo(restaurantKey, [restaurantAdditionalInfoType.RELATED_MANGO_PICKS])
        .then(function (res) {
          return res.related_mango_picks;
        });
    },

    getNearByPopularRestaurant: function (restaurantKey) {
      return this.getRestaurantAdditionalInfo(restaurantKey, [restaurantAdditionalInfoType.NEAR_BY_POPULAR_RESTAURANT])
        .then(function (res) {
          return res.near_popular_restaurants;
        });
    },

    getRelatedTopList: function (restaurantKey) {
      return this.getRestaurantAdditionalInfo(restaurantKey, [restaurantAdditionalInfoType.RELATED_TOP_LIST])
        .then(function (res) {
          return res.related_list;
        });
    },

    getDraftReviews: function (restaurantUUID) {
      return httpFetcher.get(
        getApiUrl('/api/v6/reviews.json'),
        getData({
          restaurant_uuid: restaurantUUID,
          status: "DRAFT"
        }),
        header
      );
    },

    createDraftReview: function (restaurantUUID, recommendValue, reviewText, pictureUrls) {
      return httpFetcher.post(
        getApiUrl('/api/v6/reviews.json'),
        getData({
          restaurant_uuid: restaurantUUID,
          rating: recommendValue,
          content: reviewText,
          picture_urls: pictureUrls,
          status: "DRAFT"
        }),
        header
      );
    },

    updateDraftReview: function (reviewID, restaurantUUID, recommendValue, reviewText, pictureUrls) {
      return httpFetcher.put(
        getApiUrl('/api/v6/reviews/' + reviewID + '.json'),
        getData({
          restaurant_uuid: restaurantUUID,
          rating: recommendValue,
          content: reviewText,
          picture_urls: pictureUrls,
          status: "DRAFT"
        }),
        header
      );
    },

    deleteDraftReview: function (reviewID) {
      return httpFetcher.delete(
        getApiUrl('/api/v6/reviews/' + reviewID + '.json'),
        getData(),
        header
      );
    }

  };

  window.mp20.utils['HttpApi'] = new HttpApi();
})();
function trackEvent(event_name, event_label, evnet_value, page) {
  if (_.isNumber(event_label)) {
    event_label = event_label.toString()
  }
  if (_.isObject(event_label)) {
    try {
      event_label = JSON.stringify(event_label)
    } catch (e) {
      event_label = undefined;
    }
  }
  window.mp20.utils.AnalyticsHelper.trackEvent(event_name, event_label, evnet_value, page);
}

function trackView(name) {
  window.mp20.utils.AnalyticsHelper.trackView(name);
}

function closeView(name) {
  window.mp20.utils.AnalyticsHelper.closeView(name);
}

function getCurrentPage() {
  return window.mp20.utils.AnalyticsHelper.getPage();
}
;
(function () {
  var KakaoTalkLinkVO = function (webURL, mobileWebURL, androidExecParams, iosExecParams) {
    this._webUrl = webURL || '';
    this._mobileWebUrl = mobileWebURL || '';
    this._androidExecParams = androidExecParams || '';
    this._iosExecParams = iosExecParams || '';
  };
  
  KakaoTalkLinkVO.prototype = {
    toJSON: function () {
      return {
        webUrl: this._webUrl,
        mobileWebUrl: this._mobileWebUrl,
        androidExecParams: this._androidExecParams,
        iosExecParams: this._iosExecParams,
      };
    },
  };
  
  window.mp20.vo['KakaoTalkLinkVO'] = KakaoTalkLinkVO;
})();
(function () {
  var KakaoTalkButtonVO = function (title, linkVO) {
    this._title = title;
    this._link = linkVO;
  };
  
  KakaoTalkButtonVO.prototype = {
    toJSON: function () {
      return {
        title: this._title,
        link: this._link.toJSON(),
      };
    },
  };
  
  window.mp20.vo['KakaoTalkButtonVO'] = KakaoTalkButtonVO;
})();
(function () {
  var KakaoTalkCommerceVO = function (regularPrice, discountPrice, discountRate, fixedDiscountPrice) {
    this._regularPrice = regularPrice || 0;
    this._discountPrice = discountPrice || 0;
    this._discountRate = discountRate || 0;
    this._fixedDiscountPrice = fixedDiscountPrice || 0;
  };
  
  KakaoTalkCommerceVO.prototype = {
    toJSON: function () {
      return {
        regularPrice: this._regularPrice,
        discountPrice: this._discountPrice,
        discountRate: this._discountRate,
        fixedDiscountPrice: this._fixedDiscountPrice,
      };
    },
  };
  
  window.mp20.vo['KakaoTalkCommerceVO'] = KakaoTalkCommerceVO;
})();
(function () {
  var LIMIT_TITLE_LENGTH = 100;
  
  var KakaoTalkContentVO = function (title, imageURL, kakaoLinkVO, imageWidth, imageHeight) {
    this._title = title ? title.slice(0, LIMIT_TITLE_LENGTH) : '';
    this._imageUrl = imageURL || '';
    this._link = kakaoLinkVO;
    this._imageWidth = imageWidth || '';
    this._imageHeight = imageHeight || '';
  };
  
  KakaoTalkContentVO.prototype = {
    toJSON: function () {
      var json = {
        title: this._title,
        imageUrl: this._imageUrl,
        link: this._link.toJSON(),
      };
      
      if (this._imageWidth) {
        json['imageWidth'] = this._imageWidth;
      }
      
      if (this._imageHeight) {
        json['imageHeight'] = this._imageHeight;
      }
      
      return json;
    },
  };
  
  window.mp20.vo['KakaoTalkContentVO'] = KakaoTalkContentVO;
})();
(function () {
  var KAKAO_MESSAGE_OBJECT_TYPE = {
    COMMERCE: 'commerce',
    FEED: 'feed',
  };

  var MAX_SHARE_CONTENT_LENGTH = 100;

  var KakaoTalkShare = Object.create({
    shareCommerceMessage: function (contentVO, commerceVO, buttonVOList) {
      var data = {
        objectType: KAKAO_MESSAGE_OBJECT_TYPE.COMMERCE,
        content: contentVO.toJSON(),
        commerce: commerceVO.toJSON(),
        buttons: buttonVOList.map(function (buttonVO) {
          return buttonVO.toJSON();
        }),
      };

      this._defaultShare(data);
    },

    shareFeedMessage: function (contentVO, socialVO, buttonVOList) {
      var data = {
        objectType: KAKAO_MESSAGE_OBJECT_TYPE.FEED,
        content: contentVO.toJSON(),
        buttons: buttonVOList.map(function (buttonVO) {
          return buttonVO.toJSON();
        }),
      };

      if (socialVO) {
        data.social = socialVO.toJSON();
      }

      this._defaultShare(data);
    },

    shareScrapMessage: function (url) {
      Kakao.Link.sendScrap({
        requestUrl: url
      });
    },

    shareCustomTemplate: function (templateID, shareData) {
      var title = shareData.title;
      if (title && title.length > MAX_SHARE_CONTENT_LENGTH) {
        title = title.substring(0, MAX_SHARE_CONTENT_LENGTH);
      }
      var description = shareData.description;
      if (description && description.length > MAX_SHARE_CONTENT_LENGTH) {
        description = description.substring(0, MAX_SHARE_CONTENT_LENGTH);
      }
      Kakao.Link.sendCustom({
        templateId: templateID,
        templateArgs: {
          image: shareData.image,
          title: title,
          description: description,
          button_name: shareData.buttonName,
          url: shareData.url,
          resource: shareData.resource
        },
        installTalk: true
      });
    },

    shareStoryOrMyListTemplate: function (templateID, shareData) {
      var title = shareData.title;
      if (title && title.length > MAX_SHARE_CONTENT_LENGTH) {
        title = title.substring(0, MAX_SHARE_CONTENT_LENGTH);
      }
      var subtitle = shareData.subtitle;
      if (subtitle && subtitle.length > MAX_SHARE_CONTENT_LENGTH) {
        subtitle = subtitle.substring(0, MAX_SHARE_CONTENT_LENGTH);
      }
      Kakao.Link.sendCustom({
        templateId: templateID,
        templateArgs: {
          editor_image: shareData.editorImage,
          editor_name: shareData.editorName,
          view_count: shareData.viewCount,
          image: shareData.image,
          title: title,
          subtitle: subtitle,
          button_name: shareData.buttonName,
          exec_params: shareData.execParams,
          path: shareData.path
        },
        installTalk: true
      });
    },

    _defaultShare: function (data) {
      Kakao.Link.sendDefault(data);
    },
  });

  window.mp20.service['KakaoTalkShare'] = KakaoTalkShare;
})();
(function () {
  var httpApi = window.mp20.utils.HttpApi;
  var RESTAURANT_INFO_ELEMENT_ID = 'restaurant_info';

  function RestaurantSupplier() {
    this._restaurantCache = {};
  }

  RestaurantSupplier.prototype = {
    getRestaurant: function (restaurantKey) {
      if (!this._restaurantCache[restaurantKey]) {
        this._cacheRestaurant(restaurantKey, this._getRestaurant(restaurantKey));
      }

      return this._restaurantCache[restaurantKey];
    },

    getRestaurantByElement: function () {
      return new Promise(function (resolve) {
        var restaurant = this._getRestaurantByElement();

        if (!restaurant) {
          resolve();
          return;
        }

        var restaurantKey = restaurant.restaurant_key;
        this._cacheRestaurant(restaurantKey, restaurant);

        resolve(this.getRestaurant(restaurantKey));
      }.bind(this));
    },

    _cacheRestaurant: function (restaurantKey, restaurant) {
      this._restaurantCache[restaurantKey] = restaurant;
    },

    _getRestaurant: function (restaurantKey) {
      return new Promise(function (resolve) {
        var restaurantInfo = this._getRestaurantByElement();

        if (restaurantInfo) {
          resolve(restaurantInfo);
          return;
        }

        resolve(this._fetchRestaurantInfo(restaurantKey));
      }.bind(this));
    },

    _getRestaurantByElement: function () {
      var el = this._getRestaurantInfoElement();
      var restaurantInfo;

      if (!el) {
        return null;
      }

      try {
        restaurantInfo = JSON.parse(el.innerHTML);
      } catch (e) {
        restaurantInfo = null;
      }

      return restaurantInfo;
    },

    _getRestaurantInfoElement: function () {
      return document.getElementById(RESTAURANT_INFO_ELEMENT_ID);
    },

    _fetchRestaurantInfo: function (restaurantKey) {
      return httpApi.getRestaurantsByKeys(restaurantKey)
        .then(function (restaurants) {
          return restaurants[0];
        })
        .catch(function () {
          return {};
        });
    }
  };

  window.mp20.service['RestaurantSupplier'] = new RestaurantSupplier();
})();
(function () {
  var PROTOCOL = {
    HTTP: 'http',
    HTTPS: 'https'
  };

  var SUB_DOMAIN_BY_PHASE = {
    ALPHA: 'alpha-web',
    BETA: 'beta-web',
    PRODUCTION: 'www'
  };

  var HOST_DOMAINS = [
    'alpha-web.mangoplate.com',
    'beta-web.mangoplate.com',
    'www.mangoplate.com'
  ];

  function URIManager(url) {
    this.url = URI(url || window.location.href);
  }

  URIManager.PHASE_BY_SUB_DOMAIN = SUB_DOMAIN_BY_PHASE;
  URIManager.prototype = {
    addQuery: function (key, value) {
      this.url.addQuery(key, value);
      return this;
    },

    removeQuery: function (keys) {
      this.url.removeQuery(keys);
      return this;
    },

    toHTTPS: function () {
      this.url.protocol(PROTOCOL.HTTPS);
      return this;
    },

    setSubDomain: function (subdomain) {
      this.url.subdomain(subdomain);
      return this;
    },

    get: function () {
      return this.url.toString();
    },

    getHost: function () {
      return this.url.host();
    },

    getQuery: function () {
      return this.url.query();
    },

    getPath: function () {
      return this.url.path();
    },

    getResource: function () {
      return this.url.resource();
    },

    getProtocol: function () {
      return this.url.protocol();
    },

    getSubDomain: function () {
      return this.url.subdomain();
    },

    getOrigin: function () {
      return this.url.origin();
    },

    isSameProtocol: function (protocol) {
      return this.getProtocol() === protocol;
    },

    isSameSubDomain: function (subdomain) {
      return this.getSubDomain() === subdomain;
    },

    isHTTPURL: function () {
      return this.isSameProtocol(PROTOCOL.HTTP);
    },

    isHTTPSURL: function () {
      return this.isSameProtocol(PROTOCOL.HTTPS);
    },

    toRedirect: function () {
      window.location.href = this.get();
    },

    isAlphaSubdomain: function () {
      return this.isSameSubDomain(SUB_DOMAIN_BY_PHASE.ALPHA);
    },

    isBetaSubDomain: function () {
      return this.isSameSubDomain(SUB_DOMAIN_BY_PHASE.BETA);
    },

    isProductionSubDomain: function () {
      return this.isSameSubDomain(SUB_DOMAIN_BY_PHASE.PRODUCTION) || this.isSameSubDomain('');
    },

    isTargetHostDomain: function () {
      return HOST_DOMAINS.includes(this.getHost())
    }
    
  };

  window.mp20.service['URIManager'] = URIManager;
})();
(function(){
	/**
	 * 네임스페이스 오브잭트.
	 * @namespace wannago_http_service
	 */
	var wannago_http_service = {};

	/**
	 * wannago 처리를 해주는 메서드.
	 * @param restaurant_uuid - wannago 해줄 식당의 uuid
	 * @returns {promise} - response를 담은 Promise 객체.
	 */
	wannago_http_service.wannago = function(restaurant_uuid){
	  return window.mp20.utils.HttpApi.wannago(restaurant_uuid);
	};

	/**
   * wannago를 cancel 처리 해주는 메서드.
	 * @param action_id - 캔슬할 wannago의 action_id
	 * @returns {promise} - response를 담은 Promise 객체.
	 */
	wannago_http_service.cancel_wannago = function(action_id){
    return window.mp20.utils.HttpApi.cancelWannago(action_id);
	};

	/**
	 * wannago 리스트를 가져오는 메서드.
	 * @param start_index - 가져오기 시작할 index
	 * @param request_count - 가져올 레코드 갯수.
	 * @returns {promise} - response를 담은 promise 객체.
	 */
	wannago_http_service.get_wannago_list = function(start_index, request_count){
    return auth_service.get_auth_info()
      .then(function (auth_info) {
        return window.mp20.utils.HttpApi.getWannagoRestaurants(auth_info.user_info.member_uuid, start_index, request_count)
      })
	};

	/**
	 * 전역객체에 바인딩.
	 */
	if(window.mp20){
		window.mp20.wannago_http_service = wannago_http_service;
	} else {
		window.mp20 = {};
		window.mp20.wannago_http_service = wannago_http_service;
	}
})();
(function(){
	/**
	 * Wannago 네임 스페이스
	 * @namespace wannago
	 */
	var wannago = {};

	wannago.list_request_count = 10;
	wannago.list_start_index = 0;
  wannago.SET_ACTION_TIMESTAMP_COOKIE_NAME = "mp_auth_last_action_timestamp";
  wannago.queue = {};

	/**
	 * wanngo 할때 사용하는 Attribute String 모음.
	 * @type {{action_id: string, restaurant_uuid: string, selected_class: string}}
	 */
	wannago.attr = {
		"action_id": "action_id",
		"restaurant_uuid": "restaurant_uuid",
		"selected_class": "selected",
		"not_wannago_btn_class": "not_wannago_btn"
	};

	wannago.action_type = {
	  wannago: 4,
    beenhere: 3,
  }

	wannago.action_types = [wannago.action_type.wannago, wannago.action_type.beenhere]

	/**
	 * wannago button의 class
	 * @type {string}
	 */
	wannago.class_name = ".wannago_btn";

  /**
   * 해당 id로 된 queue가 있는지 체크하는 메서드.
   * @param id
   * @return {boolean}
   */
	wannago.is_processing_id = function(id) {
	  return wannago.queue.hasOwnProperty(id);
  };

  /**
   * Wannago / cancel Wannago 작업을 하기전에 queue에 넣어주는 메서드.
   * @param id
   */
	wannago.process_start = function(id) {
	  if (wannago.queue[id]) {
	    return ;
    }

    wannago.queue[id] = true;
  };

  /**
   * wannago queue에서 해당 id를 지워주는 메서드.
   * @param id
   */
  wannago.process_end = function(id) {
    delete wannago.queue[id];
  }

	/**
	 * promise 처리를 공통으로 해주는 메서드.
	 * @param promise - 처리할 Promise
	 * @param success - 성공시 호출할 callback 함수.
	 */
	wannago.common_promise = function(promise, success){
		promise.then(success).catch(function(err){
			console.error(err);
		});
	};

	wannago.get_wannago_list = function(start_index, request_count){
		var list_wannago_promise = mp20.wannago_http_service.get_wannago_list(start_index, request_count);
		wannago.common_promise(list_wannago_promise, function success(wannago_list){
		});
	};

	wannago.get_wannago_count = function(){
		return $.cookie(this.attr.user_wannago_count) || 0;
	};

  wannago.set_wannago_btn = function (action, targetEl) {
    if (!action) {
      return;
    }
    var wannago_class = wannago.get_action_class(action);
    var $targetEl = $(targetEl);
    if ($targetEl.length) {
      $targetEl.addClass(wannago_class).data(wannago.attr.action_id, action.action_id);
      if (wannago_class === 'not_wannago_btn') {
        $targetEl.parent('.wannago_wrap').addClass('notPoint');
      }
    }
  }

	wannago.set_cookie_auth_last_action_timestamp = function(){
    var time_stamp = new Date().getTime();

    $.cookie(this.SET_ACTION_TIMESTAMP_COOKIE_NAME, time_stamp);
  };

	/**
	 * wannago button에 적용할 클레스를 리턴하는 메서드.
	 * @param action - action Object
	 * @returns {string} - 적용할 클레스.
	 */
	wannago.get_action_class = function(action){
		var return_class = "";
    if (action) {
			if(parseInt(action.action_type) === wannago.action_type.wannago){
				return_class = "selected";
			} else if (parseInt(action.action_type) === wannago.action_type.beenhere){
				return_class = "not_wannago_btn";
			}
		}

		return return_class;
	};

	wannago.map_wannago_sync = function(){

	};

	/**
	 * Wannago Button Class에 이벤트 바인딩.
	 */
	$(document).on("click", wannago.class_name, function (e) {
    e.preventDefault();
    e.stopPropagation();
    handleClickWannago($(e.currentTarget))
  });

  function handleClickWannago($wannago_btn) {
    var action_id = $wannago_btn.data(wannago.attr.action_id);
    var restaurant_uuid = $wannago_btn.data(wannago.attr.restaurant_uuid);
    var $same_wannago_btn_list;

    if ($wannago_btn.hasClass(wannago.attr.not_wannago_btn_class)) {
      return false;
    }

    if (!restaurant_uuid) {
      return;
    }

    if (!auth_service.is_auth()) {
      window.mp_login_layer.open_layer();
      auth_service.set_before_wannago(restaurant_uuid);
      return false;
    }

    if (wannago.is_processing_id(restaurant_uuid)) {
      return;
    }
    wannago.process_start(restaurant_uuid);

    $same_wannago_btn_list = $(wannago.class_name + "[data-restaurant_uuid=" + restaurant_uuid + "]");
    /**
     * action_id가 있으면 cacenl_wannago를 하고
     * action_id가 없으면 wannago를 한다.
     */
    if (trim(action_id)) {
      //가고싶다 취소 처리.
      trackEvent("CLICK_WANNAGO_OFF", JSON.stringify({restaurant_uuid:restaurant_uuid}));
      $same_wannago_btn_list.each(function () {
        $(this).removeClass(wannago.attr.selected_class);
      });
      var cancel_wannago_promise = mp20.wannago_http_service.cancel_wannago(action_id);
      cancel_wannago_promise.then(function (wannago_info) {
        $wannago_btn.data(wannago.attr.action_id, "");
        wannago.set_cookie_auth_last_action_timestamp();
        wannago.process_end(restaurant_uuid);
      }).catch(function (err) {
        window.location.reload();
        console.error(err);
      });
    } else {
      //가고싶다 처리.
      trackEvent("CLICK_WANNAGO_ON", JSON.stringify({restaurant_uuid:restaurant_uuid}));
      $same_wannago_btn_list.each(function () {
        $(this).addClass(wannago.attr.selected_class);
      });
      var wannago_promise = mp20.wannago_http_service.wannago(restaurant_uuid);
      wannago_promise.then(function (wannago_info) {
        $same_wannago_btn_list.each(function () {
          $(this).addClass(wannago.get_action_class(wannago_info));
        });
        $wannago_btn.data(wannago.attr.action_id, wannago_info.action_id);
        wannago.set_cookie_auth_last_action_timestamp();
        wannago.process_end(restaurant_uuid);
      }).catch(function (err) {
        window.location.reload();
        console.error(err);
      });
    }
  }

  if (auth_service.is_auth()) {
    auth_service.add_before_wannago();
  } else {
    auth_service.reset_before_wannago();
  }

	wannago.handleClickWannago = handleClickWannago;
	/**
	 * 전역객체에 바인딩.
	 */
	if(window.mp20){
		window.mp20.wannago_service = wannago;
	} else {
		window.mp20 = {};
		window.mp20.wannago_service = wannago;
	}
})();
(function () {
  if (!auth_service.is_auth()) {
    return;
  }


  $(document).ready(function () {
    window.auth_service
      .auth_token_verify()
      .then(function () {
        return auth_service.get_auth_info_by_storage();
      })
      .then(function (authInfo) {
        var terms_agreements = auth_service.filter_terms_agreements(authInfo.terms_agreements);

        if (terms_agreements.length > 0) {
          window.account_terms_layer.open(authInfo.member_uuid, terms_agreements, authInfo);
        }
      });
  });
})();
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//























































;
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */


(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute))
                        .on("error", function(){
                          var error =  $self.attr("data-error");

                          if($self.is("img")) {
                            $self.attr("src",error);
                          } else {
                            $self.css("background-image", "url('" + error + "')");
                          }
                        });
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/
 Version: 1.6.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
  d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
(function () {
  var MAX_RELATED_CONTENT_WIDTH = 710;

  function RelatedContentVO(type, title, description, pictureURL, publishedAt, isSponsored) {
    this._type = type;
    this._title = title;
    this._description = description;
    this._pictureURL = pictureURL;
    this._publishedAt = publishedAt;
    this._isSponsored = isSponsored;
  }

  RelatedContentVO.prototype = {
    getType: function () {
      return this._type;
    },

    getTitle: function () {
      return this._title;
    },

    getDescription: function () {
      return this._description;
    },

    getPictureURL: function () {
      return this._pictureURL;
    },

    getOptimizedPictureURL: function() {
      return get_full_picture_url_by_akamai(this.getPictureURL(), MAX_RELATED_CONTENT_WIDTH);
    },

    getPublishedAt: function () {
      return this._publishedAt;
    },

    getContentURL: function () {
      throw new Error('getContentURL method is must override');
    },

    getIsSponsored: function () {
      return this._isSponsored;
    },

    setTitle: function (title) {
      this._title = title;
    },

    setDescription: function (description) {
      this._description = description;
    },

    setPictureURL: function (pictureURL) {
      this._pictureURL = pictureURL;
    },

    setPublishedAt: function (publishedAt) {
      this._publishedAt = publishedAt;
    },

    setIsSponsored: function (isSponsored) {
      this._isSponsored = isSponsored;
    }
  };

  window.mp20.vo['RelatedContentVO'] = RelatedContentVO;
})();
(function () {
  var RelatedContentVO = window.mp20.vo.RelatedContentVO;
  var mangoPickType = mp20.constants.RELATED_CONTENT_TYPE.MANGO_PICK;

  function RelatedMangoPickContentVO(title, description, pictureURL, publishedAt, postID, postType, isSponsored) {
    RelatedContentVO.call(this, mangoPickType, title, description, pictureURL, publishedAt, isSponsored);
    this._postID = postID;
    this._postType = postType;
  }

  RelatedMangoPickContentVO.prototype = Object.create(RelatedContentVO.prototype, {
    getPostID: {
      value: function () {
        return this._postID;
      },
    },

    getPostType: {
      value: function () {
        return this._postType;
      },
    },

    getContentURL: {
      value: function () {
        return get_locale_url('/mango_picks/' + this.getPostID());
      },
    },

    setPostID: {
      value: function (postID) {
        this._postID = postID;
      }
    },

    setPostType: {
      value: function (postType) {
        this._postType = postType;
      }
    },

    getJSON: function () {
      return {
        title: this._title,
        description: this._description,
        pictureURL: this._pictureURL,
        publishedAt: this._publishedAt,
        viewCount: this._viewCount,
        postID: this._postID,
        postType: this._postType,
      }
    }
  });

  RelatedMangoPickContentVO.prototype.constructor = RelatedMangoPickContentVO;

  window.mp20.vo['RelatedMangoPickContentVO'] = RelatedMangoPickContentVO;
})();
(function () {
  var RelatedContentVO = window.mp20.vo.RelatedContentVO;
  var topListType = mp20.constants.RELATED_CONTENT_TYPE.TOP_LIST;

  function RelatedToplistContentVO(title, description, pictureURL, publishedAt, linkKey, linkName, isSponsored) {
    RelatedContentVO.call(this, topListType, title, description, pictureURL, publishedAt, isSponsored);
    this._linkKey = linkKey;
    this._linkName = linkName;
  }

  RelatedToplistContentVO.prototype = Object.create(RelatedContentVO.prototype, {
    getLinkKey: {
      value: function () {
        return this._linkKey;
      },
    },

    getLinkName: {
      value: function () {
        return this._linkName;
      },
    },

    getContentURL: {
      value: function () {
        return get_locale_url('/top_lists/' + this.getLinkName());
      },
    },

    setLinkKey: {
      value: function (linkKey) {
        this._linkKey = linkKey;
      },
    },

    setLinkName: {
      value: function (linkName) {
        this._linkName = linkName;
      },
    },

    toJSON: {
      value: function () {
        return {
          title: this._title,
          description: this._description,
          pictureURL: this._pictureURL,
          publishedAt: this._publishedAt,
          viewCount: this._viewCount,
          linkKey: this._linkKey,
          linkName: this._linkName
        }
      }
    }
  });
  RelatedToplistContentVO.prototype.constructor = RelatedToplistContentVO;

  window.mp20.vo['RelatedToplistContentVO'] = RelatedToplistContentVO;
})();
(function () {
  var RelatedContentVO = window.mp20.vo.RelatedContentVO;
  var eatDealCollectionType = mp20.constants.RELATED_CONTENT_TYPE.EAT_DEAL_COLLECTION;

  function RelatedEatDealCollectionContentVO(title, description, pictureURL, publishedAt, collectionID, isSponsored) {
    RelatedContentVO.call(this, eatDealCollectionType, title, description, pictureURL, publishedAt, isSponsored);
    this._collectionID = collectionID;
  }

  RelatedEatDealCollectionContentVO.prototype = Object.create(RelatedContentVO.prototype, {
    getCollectionID: {
      value: function () {
        return this._collectionID;
      },
    },

    getContentURL: {
      value: function () {
        return get_locale_url('/eat_deal_collections/' + this.getCollectionID());
      },
    },

    getJSON: function () {
      return {
        title: this._title,
        description: this._description,
        pictureURL: this._pictureURL,
        publishedAt: this._publishedAt,
        viewCount: this._viewCount,
        collectionID: this._collectionID,
      }
    }
  });
  RelatedEatDealCollectionContentVO.prototype.constructor = RelatedEatDealCollectionContentVO;

  window.mp20.vo['RelatedEatDealCollectionContentVO'] = RelatedEatDealCollectionContentVO;
})();
(function () {
  var RELATED_CONTENT_TYPE = mp20.constants.RELATED_CONTENT_TYPE;

  var RelatedContentMapper = (function () {
    return {
      _createTopListVO: function (relatedContent, extra) {
        return new window.mp20.vo.RelatedToplistContentVO(
          relatedContent.title,
          relatedContent.description,
          relatedContent.picture_url,
          relatedContent.published_at,
          extra.link_key,
          extra.link_name,
          relatedContent.is_sponsored
        );
      },

      _createMangoPickVO: function (relatedContent, extra) {
        return new window.mp20.vo.RelatedMangoPickContentVO(
          relatedContent.title,
          relatedContent.description,
          relatedContent.picture_url,
          relatedContent.published_at,
          extra.post_id,
          extra.post_type,
          relatedContent.is_sponsored
        );
      },

      _createEatDealCollectionVO: function (relatedContent, extra) {
        return new window.mp20.vo.RelatedEatDealCollectionContentVO(
          relatedContent.title,
          relatedContent.description,
          relatedContent.picture_url,
          relatedContent.published_at,
          extra.link_key,
          relatedContent.is_sponsored
        );
      },

      mapping: function (relatedContents) {
        if (!Array.isArray(relatedContents)) {
          throw new Error('relatedContents is not a array type');
        }

        return relatedContents.map(function (relatedContent) {
          var extra = safe_json_parse(relatedContent.extra);

          switch (relatedContent.dst) {
            case RELATED_CONTENT_TYPE.TOP_LIST:
              return this._createTopListVO(relatedContent, extra);

            case RELATED_CONTENT_TYPE.MANGO_PICK:
              return this._createMangoPickVO(relatedContent, extra);

            case RELATED_CONTENT_TYPE.EAT_DEAL_COLLECTION:
              return this._createEatDealCollectionVO(relatedContent, extra);

            default:
              return null;
          }
        }.bind(this));
      }
    };
  })();

  window.mp20.mapper['RelatedContentMapper'] = RelatedContentMapper;
})();
(function () {
  var EllipsisTextView = function (selector, config) {
    this._$el = $(selector);
    this._config = config;

    this._ellipsis();

    if (config.responsive) {
      this._bindResizeEvent();
    }
  };

  EllipsisTextView.prototype = {
    _ellipsis: function () {
      this._$el.ellipsis(this._config);
    },

    _bindResizeEvent: function () {
      $(window).on('resize', this._handleResizeEvent.bind(this));
    },

    _handleResizeEvent: function () {
      this._ellipsis();
    },
  };

  window.mp20.view['EllipsisTextView'] = EllipsisTextView;
})();
(function(){
	image_error.$inject = ["MP_CONSTANTS"];
	angular.module("mp20App").directive("imageError", image_error);

	function image_error(MP_CONSTANTS){
		return {
			link: function(scope, element, attrs) {
				var image_type = attrs.imageType.toUpperCase() || "RESTAURANT";

				if(!attrs.src){
					attrs.$set('src', MP_CONSTANTS.ERROR_IMAGE[image_type]);
				}

				element.bind('error', function() {
					$(element).attr("src", MP_CONSTANTS.ERROR_IMAGE[image_type]);
				});
			}
		};
	}
})();
(function () {
  angular.module("mp20App")
    .directive("searchItem", search_item);

  search_item.$inject = ["$timeout"];

  function search_item($timeout) {
    return {
      templateUrl: "/assets/directive/search_item.html",
      replace: true,
      restrict: "E",
      link: function (scope, element, attrs) {
        scope.picture_label = attrs.pictureLebel;
        scope.fallback_image = "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg?fit=around|*:*&crop=*:*;*,*&output-format=jpg&output-quality=80";

        $timeout(function () {
          $(element).find(".lazy").lazyload({
            effect: "fadeIn",
            threshold: 200
          });
        });
      }
    };
  }
})();
angular.module("mp20App")
    .directive("imageTag", imageTag);

function imageTag() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      pictureUrl: "=",
      alt: "@",
      class_name: "@class"
    },
    templateUrl: "/assets/directive/image_tag.html.erb"
  }
}
;
(function() {
  mp20_search_filter_service.$inject = ["MP_CONSTANTS", "mp20_common_code_service", "$q"];
  angular.module("mp20App").factory("mp20_search_filter_service", mp20_search_filter_service);

  function mp20_search_filter_service(MP_CONSTANTS, mp20_common_code_service, $q) {
    /**
     * 네임스페이스
     * @namespace mp20_search_filter_service
     */
    var mp20_search_filter_service = {};

    var Filter = _.clone(MP_CONSTANTS.FILTER_NAMES);

    var filter_list = _.values(Filter);
    var temp_filter = angular.copy(MP_CONSTANTS.DEFAULT_FILTER);

    /**
     * 필터 이름 enum
     * @type {{subcuisine_code: string, metro_code: string, price_code: string, cuisine_code: string, parking_available: string}}
     */
    mp20_search_filter_service.filter_names = Filter;

    /**
     * 필터 값들이 들어가는 메서드.
     * @type {{subcuisine_codes: string, metro_codes: string, price_codes: string, is_parking_available: boolean}}
     */
    mp20_search_filter_service.filter_value = angular.copy(MP_CONSTANTS.DEFAULT_FILTER);

    window.filter = mp20_search_filter_service.filter_value;
    /**
     * cuisine_list Array
     * @type {Array}
     */
    mp20_search_filter_service.cuisine_list = [];

    /**
     * region list Array
     * @type {Array}
     */
    mp20_search_filter_service.region_list = [];

    /**
     * subcuisine_list Array
     * @type {Array}
     */
    mp20_search_filter_service.subcuisine_list = [];

    /**
     * metro_list Array
     * @type {Array}
     */
    mp20_search_filter_service.metro_list = [];

    /**
     * 정렬순서 값을 저장하는 변수.
     * 정렬순서는 필터에 포함되어있지 않고 따로 보내야 하기때문에 따로 변수를 둠.
     * RECOMMEND = 0, DISTANCE = 1, RATING = 2, REVIEW = 3
     * @type {number}
     */
    mp20_search_filter_service.order_by = MP_CONSTANTS.DEFAULT_SEARCH_ORDER_BY;

    /**s
     * filter value의 data-name 값.
     * @type {string}
     */
    mp20_search_filter_service.filter_value_name = "filter";

    mp20_search_filter_service.common_code = undefined;

    mp20_search_filter_service.temp_filter = temp_filter;

    /**
     * filter value를 리턴해주는 메서드.
     * @returns {object} - 필터 값.
     */
    mp20_search_filter_service.get_filter_value = function() {
      return mp20_search_filter_service.filter_value;
    };

    /**
     * order by 값을 리턴하는 메서드.
     * @returns {number} - order by 값.
     */
    mp20_search_filter_service.get_orber_by = function() {
      return mp20_search_filter_service.order_by;
    };

    /**
     * cuisine 값을 필터에 세팅해주는 메서드.
     * @param $e - 클릭 이벤트 객체.
     */
    mp20_search_filter_service.set_cuisine_codes = function($e) {
      var filter_name = "cuisine_codes";

      mp20_search_filter_service.common_filter_logic(filter_name, $e);
    };

    /**
     * subcuisine 값을 필터에 세팅해주는 메서드.
     * @param $e - 클릭 이벤트 객체.
     */
    mp20_search_filter_service.set_subcuisine_codes = function($e) {
      var filter_name = "subcuisine_codes";

      mp20_search_filter_service.common_filter_logic(filter_name, $e);
    };

    /**
     * metro 값을 필터에 세팅해주는 메서드.
     * @param $e - 클릭 이벤트 객체.
     */
    mp20_search_filter_service.set_metro_codes = function($e) {
      $e.stopPropagation();

      var filter_name = "metro_codes";

      mp20_search_filter_service.common_filter_logic(filter_name, $e);
    };

    /**
     * price 값을 필터에 세팅해주는 메서드.
     * @param $e - 클릭 이벤트 객체.
     */
    mp20_search_filter_service.set_price_codes = function($e) {
      var filter_name = "price_codes";

      mp20_search_filter_service.common_filter_logic(filter_name, $e);
    };

    /**
     * 주차여부를 필터에 세팅해주는 메서드.
     * @param $e - 클릭 이벤트 객체.
     */
    mp20_search_filter_service.set_is_parking_available = function(parking_value) {
      var filter_name = "is_parking_available";

      mp20_search_filter_service.filter_value[filter_name] = Boolean(parseInt(parking_value));
    };

    /**
     * offset을 세팅하는 메서드.
     * @param order_by_value
     */
    mp20_search_filter_service.set_offset = function(order_by_value) {
      mp20_search_filter_service.order_by = order_by_value;
    };

    /**
     * 필터 공통 처리 로직.
     * @param filter_name - 처리할 필터의 이름.
     * @param $e - 클릭시 발생한 이벤트 객체.
     */
    mp20_search_filter_service.common_filter_logic = function(filter_name, $e, filter_value_handler) {
      var $target = $($e.currentTarget),
          selected_value = $target.data(mp20_search_filter_service.filter_value_name);

      if(selected_value == undefined) {
        return
      }

      if(_.isFunction(filter_value_handler)) {
        var filter = mp20_search_filter_service.temp_filter[filter_name]
        mp20_search_filter_service.temp_filter[filter_name] = filter_value_handler.call(null, filter, selected_value)
      }
    };

    mp20_search_filter_service.default_filter_value_handler = function(filter_value, value) {
        if(_.isArray(filter_value)) {
            var is_selected = filter_value.indexOf(value) > -1;

            if (!is_selected) {
                filter_value.push(value);
            } else {
                filter_value = _.without(filter_value, value);
            }
            return filter_value
        } else {
            return value
        }
    };

    mp20_search_filter_service.price_filter_value_handler = function(filter_value, value) {
      var val_s = value.toString();

      if(_.isArray(filter_value)) {
        var value_arr = val_s.split(","); // "4,5"

        value_arr.forEach(function(v) {
          var is_selected = filter_value.indexOf(v) > -1;
          if(!is_selected) {
            filter_value.push(v)
          } else {
            filter_value = _.without(filter_value, v)
          }
        })
        return filter_value
      } else {
        return value
      }
    };

    /**
     * label을 이용하여 체크박스가 체크된 상태인지 확인하는 메서드.
     * @param $el - jquery label element.
     * @returns {boolean} - 체크 여부.
     */
    mp20_search_filter_service.get_checkbox_value = function($el) {
      var target_id = $el.attr("for");

      return $("#" + target_id).prop("checked");
    };

    /**
     * common_code list를 가져오는 공통 메서드.
     * @param target_list - 가져올 리스트가 담긴 변수.
     * @param filter_object - filter 조건 Object
     * @param callback - callback function
     */
    mp20_search_filter_service.get_common_list = function(target_list, filter_object, callback) {
      if(this.common_code) {
        target_list = _.where(this.common_code, filter_object);

        if(typeof callback === "function"){
          callback(target_list);
        }
      } else {
        mp20_common_code_service.get_common_code().then(function(common_code) {
          this.common_code = _.clone(common_code.data);
          target_list = _.where(this.common_code, filter_object);

          if(typeof callback === "function"){
            callback(target_list);
          }
        }.bind(this));
      }
    };

    /**
     * subcuisine list를 가져오는 메서드.
     * @param cuisine_value - subcuisine의 부모 cuisine type value
     * @returns {promise} - subcuisine list를 담은 promise
     */
    mp20_search_filter_service.get_subcuisine_list = function(cuisine_value) {
      var type_name = "subcusine_code",
          filter_object = {
            "type_name": type_name,
            "parent_type_value": cuisine_value
          },
          defer = $q.defer();

      mp20_search_filter_service.get_common_list(mp20_search_filter_service.subcuisine_list, filter_object, function success(list) {
        mp20_search_filter_service.subcuisine_list = list;
        defer.resolve(list);
      });

      return defer.promise;
    };

    /**
     * region list를 가져오는 메서드.
     * @returns {promise} - region list를 넘겨주는 promise
     */
    mp20_search_filter_service.get_region_list = function() {
      var type_name = "region_code",
          filter_object = {
            "type_name": type_name
          },
          defer = $q.defer();

      mp20_search_filter_service.get_common_list(mp20_search_filter_service.region_list, filter_object, function success(list) {
        mp20_search_filter_service.region_list = list;
        defer.resolve(list);
      });

      return defer.promise;
    };

    /**
     * metro list를 가져오는 메서드.
     * @returns {promise} - metro list를 넘겨주는 promise
     */
    mp20_search_filter_service.get_metro_list = function(region_value) {
      var type_name = "metro_code",
          filter_object = {
            "type_name": type_name
          },
          defer = $q.defer();

      if(region_value) {
        filter_object.parent_type_value = region_value;
      }

      mp20_search_filter_service.get_common_list([], filter_object, function success(list) {
        mp20_search_filter_service.metro_list = list;
        defer.resolve(list);
      });

      return defer.promise;
    };

    /**
     * cuisine list를 가져오는 메서드.
     * @returns {promise} - cuisine_list Array를 넘겨주는 promise
     */
    mp20_search_filter_service.get_cuisine_list = function() {
      var type_name = "cusine_code",
          filter_object = {
            "type_name": type_name
          },
          defer = $q.defer();

      mp20_search_filter_service.get_common_list(mp20_search_filter_service.cuisine_list, filter_object, function success(list) {
        mp20_search_filter_service.cuisine_list = list;
        defer.resolve(list);
      });

      return defer.promise;
    };

    mp20_search_filter_service.set_temp_filter_init = function(){
      this.temp_filter = {
        "subcuisine_codes": [],
        "metro_codes": [],
        "price_codes": [],
        "cuisine_codes": [],
        "is_parking_available": 0,
      };
    }

    mp20_search_filter_service.apply_temp_filter = function() {
      var temp = {};

      filter_list.forEach(function(filter_name){
        temp[filter_name] = mp20_search_filter_service.temp_filter[filter_name];
      });

      mp20_search_filter_service.filter_value = JSON.parse(JSON.stringify(temp));
      return mp20_search_filter_service.filter_value;
    };

    mp20_search_filter_service.sync_by_apply_fileter = function() {
      var temp = {};

      filter_list.forEach(function(filter_name){
        temp[filter_name] = mp20_search_filter_service.filter_value[filter_name];
      });

      mp20_search_filter_service.temp_filter = JSON.parse(JSON.stringify(temp));
    };

    return mp20_search_filter_service;
  }
})();
(function () {
  mp20_search_result_controller.$inject = ["$scope", "$rootScope", "$q", "mp20_search_http_service", "mp20_common_code_service", "mp20_util_service", "mp20_search_filter_service", "$timeout", "mp20_restaurant_info_service", "MP_CONSTANTS", "$window"];
  angular.module("mp20App").controller("mp20_search_result_controller", mp20_search_result_controller);

  var RELATED_CONTENT_TYPE = window.mp20.constants.RELATED_CONTENT_TYPE;

  function mp20_search_result_controller($scope, $rootScope, $q, mp20_search_http_service, mp20_common_code_service, mp20_util_service, mp20_search_filter_service, $timeout, mp20_restaurant_info_service, MP_CONSTANTS, $window) {
    var $list_restaurants = $('.list-restaurants');
    var $title;
    $scope.relatedContents = null;
    $scope.relatedContentLoaded = false;
    $scope.search_result_list = [];
    $scope.related_keyword_list = [];
    $scope.summary_keyword_list = [];
    $scope.related_list = [];
    $scope.filter_cuisine_list = [];
    $scope.filter_subcuisine_list = [];
    $scope.filter_region_list = [];
    $scope.filter_metro_list = [];
    $scope.filter_region_list_length = 5;
    $scope.search_limit_count = 20;
    $scope.max_page = 10;
    $scope.related_keyword_top_limit = 5;
    $scope.filter_cuisine_value = 1;
    $scope.related_keyword_bottom_limit = 10;
    $scope.summary_keyword_limit = 10;
    $scope.related_top_list_limit = 4;
    $scope.thumb_size = mp20_restaurant_info_service.thumb_size;
    $scope.page = parseInt(getParameter("page")) || 1;
    $scope.is_last_page = false;
    $scope.use_filter = false;
    $scope.first_search_complate = false;
    $scope.move_map = false;
    $scope.move_search = false;
    $scope.map_big_mode = false;
    $scope.is_first_search_result = false;
    $scope.map_size_btn_message = I18n.t('search.expand');
    $scope.before_filter = "";
    $scope.common_code = [];
    $scope.order_by = MP_CONSTANTS.DEFAULT_SEARCH_ORDER_BY;
    $scope.temp_order_by = MP_CONSTANTS.DEFAULT_SEARCH_ORDER_BY;
    $scope.parking = 0;
    $scope.temp_parking = 0;
    $scope.last_page = 0;
    $scope.search_result_call_count = MP_CONSTANTS.DEFAULT_FILTER.is_parking_available;

    $scope.ajaxing = false;

    $scope.search_by_keyword = search_by_keyword;
    $scope.set_view_filter = set_view_filter;
    $scope.init = init;
    $scope.get_rating = get_rating;
    $scope.get_metro = get_metro;
    $scope.get_subcuisine = get_subcuisine;
    $scope.get_background = get_background;
    $scope.go_to_restaurant = go_to_restaurant;
    $scope.is_what_action = is_what_action;
    $scope.is_not_action_btn = is_not_action_btn;
    $scope.get_next_page = get_next_page;
    $scope.get_prev_page = get_prev_page;
    $scope.open_filter = open_filter;
    $scope.do_filter_search = do_filter_search;
    $scope.related_keyword = related_keyword;
    $scope.summary_keyword = summary_keyword;
    $scope.open_map = open_map;
    $scope.ajax_complate = ajax_complate;
    $scope.go_to_search_page = go_to_search_page;
    $scope.get_related_list = get_related_list;
    $scope.go_to_top_list = go_to_top_list;
    $scope.get_list_count = get_list_count;
    $scope.tag_click = tag_click;
    $scope.get_next_page_item_count = get_next_page_item_count;
    $scope.filter_init = filter_init;
    $scope.show_filter_more_region = show_filter_more_region;
    $scope.selected_region = selected_region;
    $scope.is_metro_selected = is_metro_selected;
    $scope.is_metro_filter_on = is_metro_filter_on;
    $scope.reset_metro = reset_metro;
    $scope.close_filter = close_filter;
    $scope.get_paging_array = get_paging_array;
    $scope.move_map_search = move_map_search;
    $scope.change_map_mode = change_map_mode;
    $scope.get_first_search_result = get_first_search_result;
    $scope.close_filter_button = close_filter_button;
    $scope.is_checked_filter_value = is_checked_filter_value;
    $scope.is_checked_sorting_value = is_checked_sorting_value;
    $scope.is_checked_parking_value = is_checked_parking_value;
    $scope.set_parking = set_parking;
    $scope.get_expected_rating_class = window.get_expected_rating_class;
    $scope.get_locale_url = $window.get_locale_url;
    $scope.get_picture_url_by_akamai = mp20_restaurant_info_service.get_picture_url_by_akamai;
    $scope.get_full_picture_url_by_akamai = $window.get_full_picture_url_by_akamai;

    $scope.set_cuisine_codes = mp20_search_filter_service.set_cuisine_codes;
    $scope.set_subcuisine_codes = mp20_search_filter_service.set_subcuisine_codes;
    $scope.set_filter_value = set_filter_value;
    $scope.set_is_parking_available = mp20_search_filter_service.set_is_parking_available;
    $scope.set_offset = set_offset;
    $scope.set_temp_offset = set_temp_offset;
    $scope.get_action_class = window.mp20.wannago_service.get_action_class;
    $scope.temp_filter = mp20_search_filter_service.temp_filter;

    $scope.str_cut = window.str_cut;
    $scope.number_comma = window.number_comma;
    $scope.map = "";
    $scope.is_apply_filter = false;

    $scope.price_filter_name = mp20_search_filter_service.filter_names.price_code
    $scope.parking_filter_name = mp20_search_filter_service.filter_names.parking_available
    $scope.cusine_filter_name = mp20_search_filter_service.filter_names.cuisine_code
    $scope.metro_filter_name = mp20_search_filter_service.filter_names.metro_code
    $scope.subcusine_filter_name = mp20_search_filter_service.filter_names.subcuisine_code

    $scope.default_filter_value_hadler = mp20_search_filter_service.default_filter_value_handler;
    $scope.price_filter_value_hadler = mp20_search_filter_service.price_filter_value_handler;

    $scope.handleClickFirstPaginationButton = handleClickFirstPaginationButton;
    $scope.handleClickNextPaginationButton = handleClickNextPaginationButton;
    $scope.handleClickPrevPaginationButton = handleClickPrevPaginationButton;
    $scope.handleClickRelatedContent = handleClickRelatedContent;
    $scope.isEatDealCollectionType = isEatDealCollectionRelatedContentType;

    $scope.getRelatedContents = getRelatedContents;

    // Init 실행.
    $scope.init();

    /**
     * pushState에 넣은 history로 뒤로가기 & 앞으로가기 할때 발생하는 이벤ㅡ.
     * 저장된 값들을 이용해서 다시 검색을 불러옴.
     */
    $(window).on('popstate', function (event) {
      var state = event.originalEvent.state;

      $timeout(function () {
        if (!state) {
          state = {
            "page": 1,
            "keyword": $scope.keyword
          };

          $scope.page = 1;
        } else if (state.page && state.keyword) {
          $scope.page = state.page;
          $scope.keyword = state.keyword;
        }

        $scope.search_by_keyword($scope.keyword, true, state);
      });
    });

    /**
     * 처음 실행시 실행하는 메서드.
     * 키워드를 가져와서 검색해줌.
     */
    function init() {
      var keyword = $(".pg-search").data("keyword").toString();
      keyword = replaceAll(keyword, "\\", "");
      $("#search").val(keyword);

      mp20_search_filter_service.get_cuisine_list();
      $scope.keyword = keyword;
      $scope.search_by_keyword(get_first_search_result(), true);
      $scope.getRelatedContents();
      $scope.filter_init();

      init_branch(keyword);
    }

    /**
     * 서버에서 뿌려준 첫 검색결과 JSON을 가져와서 세팅해주는 메서드.
     * 첫 결과를 서버에서 뿌려주기 때문에 map에 세팅해주기 위해 해당 메서드가 필요.
     */
    function get_first_search_result() {
      return JSON.parse(_.unescape($("#search_first_result_json").html()));
    }

    function get_filter_string(filter) {
      var filter_keys = _.keys(filter),
        temp_filter = {};

      _.each(filter_keys, function (key) {
        temp_filter[key] = mp20_search_filter_service.filter_value[key];
      });

      return JSON.stringify(temp_filter);
    }

    /**
     * 검색시 보여줄 애니메이션을 실행하는 함수.
     */
    function searching_animation() {
      var mobile_scroll_top_margin = 60; // 해당 값을 안주면 Header로 인해서 레스토랑 영역이 가리게 됩니다.
      var scrollY = is_mobile_viewport()
        ? $list_restaurants.offset().top - mobile_scroll_top_margin
        : 0;

      window.scrollTo(0, scrollY);
    }

    function get_search_promise() {
      var search_result_promise,
        result_promise,
        keyword,
        params;

      switch (arguments.length) {
        case 1:
          search_result_promise = $q.defer();
          search_result_promise.resolve(get_first_search_result());

          result_promise = search_result_promise.promise;
          break;
        case 2:
          keyword = arguments[0];
          params = arguments[1];

          result_promise = mp20_search_http_service.search_by_keyword(keyword, params).then(function (res) {
            return res.result;
          });
          break;
      }

      return result_promise;
    }

    function set_temp_offset($e) {
      $timeout(function () {
        var order_by_value = $($e.target).data(mp20_search_filter_service.filter_value_name);

        $scope.temp_order_by = order_by_value.toString();
      });
    }

    function set_offset() {
      $scope.order_by = $scope.temp_order_by;
      mp20_search_filter_service.set_offset($scope.order_by);
    }

    function set_parking() {
      $scope.parking = $scope.temp_parking;
      mp20_search_filter_service.set_is_parking_available($scope.parking);
    }

    /**
     * 검색 파라미터를 반환하는 메서드.
     * @param keyword - 검색 키워드.
     * @returns {{start_index: number, request_count: number, keyword: (*|string|string|keyword), filter: *,
     *     order_by: (number|*)}}
     */
    function get_search_params(keyword, filter) {
      return {
        "start_index": get_start_index(),
        "request_count": $scope.search_limit_count,
        "keyword": $scope.keyword || keyword,
        "filter": get_filter_string(filter),
        "order_by": mp20_search_filter_service.order_by
      };
    }

    /**
     * keyword로 검색하는 메서드.
     * @param keyword - 검색 키워드
     * @param is_popstate - popstate에 push할껀지 여부.
     */
    function search_by_keyword(keyword, is_popstate) {
      var filter_param = {"filter": mp20_search_filter_service.apply_temp_filter()},
        restaurant_uuids = [],
        params = get_search_params(keyword, filter_param.filter),
        search_promise, common_code_promise, search_count_promise;

      check_apply_filter(filter_param.filter);

      if ($scope.move_search) {
        $scope.move_map_search();
        return false;
      }

      $scope.use_filter = is_filter_search(filter_param);

      if (Array.isArray(keyword)) {
        // 키워드가 배열일 경우 식당리스트.
        // keyword === restaurant_list
        set_search_result_list(keyword);
        $scope.is_first_search_result = true;
        search_promise = get_search_promise(keyword);
      } else {
        $scope.ajaxing = true;
        $scope.is_first_search_result = false;
        search_promise = get_search_promise(keyword, params);
      }

      common_code_promise = mp20_common_code_service.get_common_code();
      search_count_promise = mp20_search_http_service.search_by_keyword_count($scope.keyword, params);

      if ($scope.first_search_complate) {
        searching_animation();
      }

      $q.all([search_promise, common_code_promise, search_count_promise]).then(function (data) {
        var search_result_list = data[0],
          common_code = data[1].data,
          search_all_count = data[2].count;

        $scope.common_code = common_code;
        $scope.search_all_count = search_all_count;
        $scope.last_page = get_paging_array(search_all_count).length;

        if (!search_result_list) {
          console.error("검색중 서버에러 발생.");
          return;
        }

        search_result_list = _.map(search_result_list, function (item) {
          item.restaurant.metro_text = get_metro(common_code, item.restaurant.metro_code);
          item.restaurant.sub_cuisine_text = get_subcuisine(common_code, item.restaurant.subcusine_code);

          restaurant_uuids.push(item.restaurant.restaurant_uuid);
          return item;
        });

        if (!Array.isArray(keyword)) {
          set_search_result_list(search_result_list);
          off_server_search_result();
        }

        $scope.related_keyword($scope.keyword, restaurant_uuids);
        $scope.summary_keyword($scope.keyword, restaurant_uuids.join(","));
        $scope.ajaxing = false;

        set_restaurant_in_map(search_result_list);

        $scope.first_search_complate = true;

        // next / prev를 통해서 호출한 경우 history push.
        if (!is_popstate) {
          get_history_push_statue();
        }
      }).catch(function (err) {
        console.error(err);
      });
    }

    /**
     * 레스토랑 정보를 지도에 뿌려주는 메서드.
     * @param search_result_list - 뿌려줄 레스토랑 리스트.
     */
    function set_restaurant_in_map(search_result_list) {
      var foreign_restaurants = _.filter(search_result_list, function (restaurant) {
        return is_foreign_restaurant(restaurant.restaurant.region_code);
      });

      function set_map_callback(callback_map_obj) {
        var map_obj = callback_map_obj,
          map_for_data_list;

        $scope.map = map_obj;

        map_obj.use_api(function () {
          if (search_result_list.length) {
            map_for_data_list = _.map(search_result_list, function (restaurant) {
              return map_obj.make_info_obj(
                restaurant.restaurant.latitude,
                restaurant.restaurant.longitude,
                restaurant.restaurant.name,
                restaurant.rating,
                restaurant.official_rating_available,
                restaurant.restaurant.sub_cuisine_text,
                restaurant.restaurant.metro_text,
                restaurant.action,
                restaurant.restaurant.restaurant_uuid,
                restaurant.restaurant.restaurant_key,
                restaurant.restaurant.review_count,
                restaurant.restaurant.wannago_count,
                get_full_picture_url_by_akamai(restaurant.restaurant.pic_domain + "/" + restaurant.restaurant.pic_key, 105, 105)
              );
            });

            map_obj.init(".map-container", map_for_data_list, {
              "drag_event_function": function () {
                $timeout(function () {
                  $scope.move_map = true;
                }, 0);
              }
            });
          }
        });
      }

      if (foreign_restaurants.length) {
        var google_map = new mp20.google_map();

        google_map._get_script()
          .then(function (google_map) {
            set_map_callback(google_map);
          });
      } else {
        new window.mp20.MapInterface(false, set_map_callback);
      }
    }

    /**
     * 검색시에 start index를 page값으로부터 도출해주는 메서드.
     * @returns {number} - stat index 값
     */
    function get_start_index() {
      if ($scope.page == 1) {
        return 0;
      } else {
        return ($scope.page - 1) * $scope.search_limit_count;
      }
    }

    /**
     * Rating을 소숫점 아래 자리까지 reFormat해주는 메서드.
     * @param rating - 변환할 Rating
     * @returns {number || undefined}
     */
    function get_rating(rating) {
      var under_number = 1;
      if (rating) {
        rating = parseFloat(rating).toFixed(under_number);
      } else {
        rating = "";
      }
      return rating;
    }

    /**
     * metro display_text를 가져오는 메서드.
     * @param common_code - commoncode_array
     * @param metro_code - metro code
     * @returns {string || undefined}
     */
    function get_metro(common_code, metro_code) {
      var type_name = "metro_code";
      return get_commoncode_by_display_text(common_code, type_name, metro_code);
    }

    /**
     * sub_cuisine_code display_text를 가져오는 메서드.
     * @param common_code - commoncode_array
     * @param sub_cuisine_code - sub_cuisine_code
     * @returns {string || undefined}
     */
    function get_subcuisine(common_code, sub_cuisine_code) {
      var type_name = "subcusine_code";
      return get_commoncode_by_display_text(common_code, type_name, sub_cuisine_code);
    }

    /**
     * commoncode에서 display_text를 가져오는 메서드.
     * @param common_code - common_code Array
     * @param type_name - commoncode typeName
     * @param type_value - commoncode typeValue
     * @returns {string || undefined}
     */
    function get_commoncode_by_display_text(common_code, type_name, type_value) {
      var metro_arr = _.where(common_code, {"type_name": type_name, "type_value": type_value}), metro_obj;
      metro_obj = metro_arr.length ? metro_arr[0] : {};
      return metro_obj.display_text;
    }

    /**
     * background setting을 위한 메서드.
     * @param pictrue_url - background picture url
     * @returns {object}
     */
    function get_background(pictrue_url) {
      var empty_image = "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/kssf5eveeva_xlmy.jpg";
      return {
        "background-image": "url('" + pictrue_url + "'), url('" + empty_image + "')"
      };
    }

    /**
     * 레스토랑 페이지로 이동할때 사용하는 메서드.
     * @param restaurant_key
     */
    function go_to_restaurant(restaurant_key) {
      // 검색 결과 식당 클릭
      trackEvent("CLICK_RESTAURANT", {restaurant_key: restaurant_key});
      window.location.href = "/restaurants/" + restaurant_key;
    }

    /**
     * wannago action을 체크하기 위한 함수.
     * @param action
     * @returns {boolean}
     */
    function is_what_action(action) {
      if (action) {
        return action.action_type == 4;
      } else {
        return false;
      }
    }

    /**
     * wannago action을 체크하기 위한 함수.
     * @param action
     * @returns {boolean}
     */
    function is_not_action_btn(action) {
      if (action) {
        return !(action.action_type == 4);
      } else {
        return false;
      }
    }

    /**
     * 다음 페이지를 Search할때 호출 하는 메서드
     */
    function get_next_page(page) {
      trackEvent("CLICK_PAGE", {page: page});
      $scope.page = page;
      search_by_keyword($scope.keyword);
    }

    /**
     * 이전 페이지를 Search할때 호출 하는 메서드
     */
    function get_prev_page() {
      // 검색결과 1번째 페이지 이후페이지에서 다음 보기 클릭
      trackEvent("CLICK_BACK");
      if ($scope.page === 1) {
        return false;
      } else {
        $scope.page = parseInt($scope.page) - 1;
        search_by_keyword($scope.keyword);
      }
    }

    /**
     * search시에 history.pushState에 히스토리를 넣어주는 메서드.
     */
    function get_history_push_statue() {
      var param_url = get_search_state_url_param(),
        new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + param_url,
        state_param = {
          "page": $scope.page,
          "keyword": $scope.keyword
        };

      state_param = $.extend(state_param, get_filter());
      history.pushState(state_param, null, new_url);
    }

    /**
     * pushState 세팅시 세팅할 URL을 반환하는 메서드.
     * @returns {string} - 세팅할 URL.
     */
    function get_search_state_url_param() {
      var param_url = "?keyword=" + encodeURIComponent($scope.keyword) + "&page=" + $scope.page;
      return param_url;
    }

    //필터에 대한 black_screen을 열어주는 메서드.
    function open_black_screen(class_name) {
      $($(class_name).siblings(".black_screen")[0]).fadeIn('fast');
    }

    //필터에 대한 black_screen을 닫아주는는 서드
    function close_black_screen(class_name) {
      $($(class_name).siblings(".black_screen")[0]).fadeOut('fast');
    }

    function set_view_filter() {
      var filter_info = $scope.act_filter;

      if (!filter_info) {
        return;
      }

      if (filter_info.order_by !== undefined) {
        var order_by = filter_info.order_by,
          $order_by_element = $(".filter_sorting"),
          btn_class = ".filter_order_btn",
          order_class = "selected";

        $order_by_element.find(btn_class).removeClass(order_class);
        $order_by_element.find(btn_class + "[data-order=" + order_by + "]").addClass(order_class);
      }

      if (filter_info.filter !== undefined) {
        var price_codes = filter_info.filter.price_codes,
          price_codes_list = JSON.parse(price_codes),
          $price_element = $(".btns_price_container_inner"),
          price_class = "on";

        $price_element.find("div").removeClass(price_class);

        _.each(price_codes_list, function (item) {

          if (item > 3) {
            $price_element.find("div[data-price='4,5']").addClass(price_class);
          } else {
            $price_element.find("div[data-price='" + item + "']").addClass(price_class);
          }
        });
      }
    }

    /**
     * Map 다운로드 레이어를 열어주는 메서드.
     */
    function open_map() {
      // 검색 결과 지도 클릭
      trackEvent("CLICK_MAP");

      open_black_screen(".map_download_layer");
      $(".map_download_layer").addClass("show");
      $(".black_screen").on("click touch", function () {
        // 맵 팝업 오픈 상태에서 딤(cancel) 영역 클릭
        trackEvent("CLICK_CANCEL", '', 1);
        close_map();
      });

      scroll_event_disalbe();
    }

    /**
     * Map 다운로드 레이어를 닫아주는 메서드.
     */
    function close_map() {
      close_black_screen(".map_download_layer");
      $(".map_download_layer").removeClass("show");
      $(".black_screen").off("click touch");
      scroll_event_able();
    }

    /**
     * 필터에서 세팅한 값을 가져오는 메서드,
     * @returns {object} - 세팅된 필터값.
     */
    function get_filter() {
      var filter_params = {
        order_by: get_filter_order(),
        filter: {
          price_codes: get_filter_price()
        }
      };

      if (filter_params.filter.price_codes === "[]") {
        delete filter_params.filter;
      }

      if (filter_params.order_by === undefined) {
        delete filter_params.order_by;
      }

      return filter_params;
    }

    /**
     * Filter의 Order값을 가져오는 메서드.
     * @returns {string || undefined}
     */
    function get_filter_order() {
      return $(".filter_order_btn.selected").data("order") || "";
    }

    /**
     * Filter의 price값을 가져오는 메서드.
     * @returns {string || undefined}
     */
    function get_filter_price() {
      var price_array = [];

      $(".price_filter_btn.on").each(function () {
        price_array.push($(this).data("price"));
      });

      return "[" + price_array.toString() + "]";
    }

    /**
     * 필터로 검색하는 메서드.
     */
    function do_filter_search() {
      // 필터 적용 버튼 클릭
      trackEvent("CLICK_FILTER_APPLY");

      var filter_value = {"filter": mp20_search_filter_service.apply_temp_filter()};

      if (typeof filter_value.filter.metro_codes === "string") {
        filter_value.filter.metro_codes = JSON.parse(filter_value.filter.metro_codes);
      }

      $scope.act_filter = filter_value;
      $scope.is_first_search_result = false;
      $scope.page = 1;
      $scope.set_offset();
      $scope.set_parking();
      search_by_keyword($scope.keyword);
      close_filter();
      window.scrollTo(0, 0);
    }

    /**
     * 현재 검색이 필터를 포함한 검색인지 체크하는 메서드.
     * @param filter_param - 검색 파라미터
     * @returns {boolean}
     */
    function is_filter_search(filter_param) {
      var filter = filter_param.filter,
        use_filter = false;

      _.each(filter, function (item) {
        if (!use_filter) {
          if (Array.isArray(item)) {
            use_filter = item.length ? true : false;
          } else {
            use_filter = item ? true : false;
          }
        }
      });

      return use_filter;
    }

    function get_price_string(price_codes) {
      if (!price_codes) {
        return "";
      }
      return '{"price_codes":["' + JSON.parse(price_codes).join('", "') + '"]}'
    }

    /**
     * 연관 검색어를 가져오는 메서드.
     * @param keyword - 가져올 키워드.
     * @param restaurant_uuids - 키워드에 대한 레스토랑 uuid 리스트.
     */
    function related_keyword(keyword, restaurant_uuids) {
      var params = {
          "restaurant_uuids": restaurant_uuids,
          "keyword": keyword
        },
        related_keyword_promise = mp20_search_http_service.related_keyword(params);

      mp20_util_service.common_promise(related_keyword_promise, function success(related_keyword_list) {
        $scope.related_keyword_list = related_keyword_list;
      });
    }

    /**
     * 관련 키워드를 가져오는 메서드.
     * @param keyword - 가져올 키워드.
     * @param restaurant_uuids - 키워드에 대한 레스토랑 uuid 리스트.
     */
    function summary_keyword(keyword, restaurant_uuids) {
      var params = {
          "restaurant_uuids": restaurant_uuids,
          "keyword": keyword
        },
        summary_keyword_promise = mp20_search_http_service.summary_keyword(params);

      mp20_util_service.common_promise(summary_keyword_promise, function success(summary_keyword_list) {
        $scope.summary_keyword_list = summary_keyword_list;
      });
    }

    /**
     * 검색 페이지로 이동시켜주는 메서드.
     * @param keyword - 검색 키워드.
     */
    function go_to_search_page(keyword) {
      go_to_search_page(keyword);
    }

    /**
     * 태그 클릭시 처리하는 함수.
     * @param keyword - 검색할 키워드.
     * @param position - 태그 위치.
     * @param index - 트래킹용 index
     */
    function tag_click(keyword, position, index) {
      trackEvent("CLICK_RELATED_TAG", {keyword: keyword, position: position, index: index});
      go_to_search_page(keyword);
    }

    /**
     * ajax complate시 로딩바를 지워주는 메서드.
     * @param className - 지울 로딩바의 클레스 이름.
     */
    function ajax_complate(className) {
      $(className).hide();
    }

    /**
     * 관련 리스트를 가져오는 메서드.
     * @param keyword - 관련 리스트에 대한 키워드.
     */
    function get_related_list(keyword) {
      mp20_search_http_service
        .related_list(keyword)
        .then(function (data) {
          $scope.related_list = data.data;
        }).catch(function (err) {
        console.error(err)
      });
    }

    /**
     * TopList 페이지로 이동하는 메서드.
     * @param link_name - 이동할 리스트의 list name
     */
    function go_to_top_list(link_name) {
      // 검색결과 리스트 클릭
      trackEvent("CLICK_RELATED_TOPLIST", {link_key: link_name});
      window.location.href = "/top_lists/" + link_name;
    }

    /**
     * 검색 다음 페이지 item 갯수를 리턴해주는 메서드.
     * @returns {number} - 다음 페이지 item 갯수.
     */
    function get_next_page_item_count() {
      var next_all_count = $scope.search_all_count - ($scope.page * $scope.search_limit_count);

      if (next_all_count > $scope.search_limit_count) {
        return $scope.search_limit_count;
      } else {
        return next_all_count;
      }
    }

    /**
     * 리스트에 들어가는 index를 리턴해주는 메서드.
     * @param index - 현재 index
     * @returns allcount - 총 index
     */
    function get_list_count(index) {
      var temp_number = ($scope.page - 1) * 10 + 1;
      return temp_number + index;
    }

    /**
     * filter에 init을 위한 메서드.
     */
    function filter_init() {
      mp20_search_filter_service.get_region_list().then(function (region_list) {
        $scope.filter_region_list = region_list;
      });

      mp20_search_filter_service.get_metro_list($scope.filter_cuisine_value).then(function (metro_list) {
        $scope.filter_metro_list = metro_list;
      });
    }

    function show_filter_more_region() {
      var $more_region = $(".more-region");
      if ($more_region.css("display") !== "none") {
        $more_region.hide();
      } else {
        $more_region.show();
      }
    }

    function selected_region($event) {
      var $target = $($event.target), $more_region = $(".more-region");
      var filter_value = $target.data("filter");
      mp20_search_filter_service.get_metro_list(filter_value).then(function (metro_list) {
        $scope.filter_metro_list = metro_list;
        // setTimeout을 사용한 이유는 rerender가 Async로 불리기때문에 Event Queue 맨 뒤에 필터 적용 작업을 넣은것이다. by Jason
        setTimeout(function () {
          set_apply_metro_filter();
        }, 0);
      });
      $more_region.hide();
      $scope.filter_cuisine_value = filter_value;
    }

    function is_metro_selected(metro_value) {
      var metro_codes = mp20_search_filter_service.filter_value['metro_codes'];
      return metro_codes.indexOf(metro_value) > -1;
    }

    function is_metro_filter_on() {
      return mp20_search_filter_service.temp_filter['metro_codes'].length > 0;
    }

    function reset_metro() {
      $timeout(function () {
        mp20_search_filter_service.temp_filter['metro_codes'] = [];
        set_apply_metro_filter();
      });
    }

    function check_apply_filter(filter) {
      var is_apply_filter = false;
      var order_by = $scope.temp_order_by;
      var filter_value;

      for (var filter_key in filter) {
        if (!filter.hasOwnProperty(filter_key)) {
          continue;
        }
        filter_value = filter[filter_key];
        if (_.isEqual(MP_CONSTANTS.DEFAULT_FILTER[filter_key], filter_value) === false) {
          is_apply_filter = true;
        }
      }
      if (_.isEqual(order_by, MP_CONSTANTS.DEFAULT_SEARCH_ORDER_BY) === false) {
        is_apply_filter = true;
      }
      $scope.is_apply_filter = is_apply_filter;
    }

    function open_filter() {
      $timeout(function () {
        if (is_mobile_viewport()) {
          return false;
        }

        $(".search-filter").show();
        trackView('PU_DWN_FILTER');

        if (!is_mobile_viewport()) {
          window.scrollTo(0, 0);
          var $black_screen = $(".contents > .black_screen");
          $black_screen.show();

          $black_screen.on("click", function () {
            $scope.close_filter_button();
            $black_screen.off("click");
          });
          scroll_lock();
        }
      });
    }

    function close_filter() {
      $(".search-filter").hide();
      closeView('PU_DWN_FILTER');

      if (!is_mobile_viewport()) {
        $(".contents > .black_screen").hide();

        unscroll_lock();
      }
    }

    function close_filter_button() {
      close_filter();
      mp20_search_filter_service.sync_by_apply_fileter();

      set_apply_order_filter();
      set_apply_parking_filter();
      set_apply_price_filter();
      set_apply_food_filter();
      set_apply_metro_filter();

      mp20_search_filter_service.get_common_list(undefined, {
        type_name: "metro_code"
      });
    }

    function set_apply_order_filter() {
      $("input[name=sorting]").each(function () {
        if ($(this).val() == $scope.order_by) {
          $(this).prop("checked", "checked");
        } else {
          $(this).prop("checked", false);
        }
      });

      $scope.temp_order_by = $scope.order_by;
    }

    function set_apply_parking_filter() {
      $("input[name=parking]").each(function () {
        if ($(this).val() == mp20_search_filter_service.temp_filter["is_parking_available"]) {
          $(this).prop("checked", "checked");
        } else {
          $(this).prop("checked", false);
        }
      });

      $scope.temp_parking = $scope.parking;
    }

    function set_apply_price_filter() {
      $("input[name=cost]").each(function () {
        var price_value = $(this).data("value").toString();
        if (mp20_search_filter_service.temp_filter["price_codes"].indexOf(price_value) > -1) {
          $(this).prop("checked", "checked");
        } else {
          $(this).prop("checked", false);
        }
      });
    }

    function set_apply_food_filter() {
      $("input[name=food]").each(function () {
        var cuisine_value = $(this).data("value");
        if (mp20_search_filter_service.temp_filter["cuisine_codes"].indexOf(cuisine_value) > -1) {
          $(this).prop("checked", "checked");
        } else {
          $(this).prop("checked", false);
        }
      });
    }

    function set_apply_metro_filter(metro_filter) {
      $("input[name=region]").each(function () {
        var cuisine_value = $(this).data("value");
        if (mp20_search_filter_service.temp_filter["metro_codes"].indexOf(cuisine_value) > -1) {
          $(this).prop("checked", "checked");
        } else {
          $(this).prop("checked", false);
        }
      });
    }

    function get_paging_array() {
      var temp_array = [];
      if ($scope.search_all_count) {
        temp_array = new Array(Math.ceil($scope.search_all_count / $scope.search_limit_count));
      } else {
        temp_array = [];
      }
      return temp_array;
    }

    function change_map_mode() {
      var change_map_class = "reverse";
      var $map_container_wrap = $(".map-container_wrap");
      var $dfp_ad_tag = $(".dfp_ad_container.only-desktop.dfp_ad_tag");
      var $dfp_ad_paging_bottom = $(".dfp_ad_paging_bottom");

      if (!$scope.map_big_mode) {
        //맵을 크게
        trackEvent("CLICK_MAP_LARGE");
        $(".pg-search").addClass(change_map_class);
        $scope.map_big_mode = true;
        $scope.map_size_btn_message = I18n.t('search.minify');
        $dfp_ad_tag.hide();
        $dfp_ad_paging_bottom.hide();
      } else {
        //맵을 작게
        trackEvent("CLICK_MAP_SMALL");
        $(".pg-search").removeClass(change_map_class);
        $scope.map_big_mode = false;
        $scope.map_size_btn_message = I18n.t('search.expand');
        $dfp_ad_tag.show();
        $dfp_ad_paging_bottom.show();
      }

      $scope.map.resize_map({
        width: $map_container_wrap.width(),
        height: $map_container_wrap.height()
      });
    }

    function off_server_search_result() {
      $scope.is_first_search_result = false;
      $(".server_render_search_result_item").remove();
    }

    function set_move_map_search_msg() {
      $(".search_info > .title").html(I18n.t('search_result.search_on_map_title'));
      $scope.keyword = "";
    }

    function move_map_search(is_new_location) {
      is_new_location = is_new_location || false;
      if (!$scope.move_search || is_new_location) {
        $scope.page = 1;
      }

      $scope.ajaxing = true;
      $scope.move_map = false;
      $scope.move_search = true;

      var bounds = $scope.map.get_bounds(),
        sw = bounds.sw,
        ne = bounds.ne,
        params = {
          "sw": sw,
          "ne": ne,
          "order_by": get_filter_order(),
          "start_index": get_start_index(),
          "request_count": $scope.search_limit_count
        },
        bounds_promise,
        bounds_count_promise,
        filter;

      if ($scope.is_apply_filter) {
        filter = mp20_search_filter_service.get_filter_value();
        filter = get_filter_string(filter);
        params['filter'] = filter;
      }

      searching_animation();

      bounds_count_promise = mp20_search_http_service.bounds_search_count(params);
      bounds_promise = mp20_search_http_service.bounds_search(params);

      mp20_util_service.common_promise(bounds_count_promise, function (count) {
        $scope.search_all_count = count.count;
      });

      mp20_util_service.common_promise(bounds_promise, function success(data) {
        var search_result_list = data.result,
          restaurant_uuids = [];

        // Metro & subcuisine 세팅.
        var search_result_list = _.map(search_result_list, function (item) {
          var metro_text = get_metro($scope.common_code, item.restaurant.metro_code);
          var sub_cuisine_text = get_subcuisine($scope.common_code, item.restaurant.subcusine_code);
          item.restaurant.metro_text = metro_text;
          item.restaurant.sub_cuisine_text = sub_cuisine_text;

          restaurant_uuids.push(item.restaurant.restaurant_uuid);
          return item;
        });

        $scope.related_keyword($scope.keyword, restaurant_uuids);

        var map_for_data_list = _.map(search_result_list, function (restaurant) {
          return $scope.map.use_api(function () {
            return $scope.map.make_info_obj(
              restaurant.restaurant.latitude,
              restaurant.restaurant.longitude,
              restaurant.restaurant.name,
              restaurant.rating,
              restaurant.official_rating_available,
              restaurant.restaurant.sub_cuisine_text,
              restaurant.restaurant.metro_text,
              restaurant.action,
              restaurant.restaurant.restaurant_uuid,
              restaurant.restaurant.restaurant_key,
              restaurant.restaurant.review_count,
              restaurant.restaurant.wannago_count,
              get_full_picture_url_by_akamai(restaurant.restaurant.pic_domain + "/" + restaurant.restaurant.pic_key, 105, 105)
            );
          });
        });

        $scope.map.init(".map-container", map_for_data_list, {
          "drag_event_function": function () {
            $timeout(function () {

              $scope.move_map = true;
            }, 0);
          }
        });

        // Angular에 리스트 바인딩.
        set_search_result_list(search_result_list);
        off_server_search_result();
        set_move_map_search_msg();
        $rootScope.$broadcast("mp20_search_input_keyword_reset");
        $scope.first_search_complate = true;
        $scope.ajaxing = false;

        // next / prev를 통해서 호출한 경우 history push.
        get_history_push_statue();
      });

      if (!$title) {
        $title = $('title');
      }

      $title.html(I18n.t('search_result.location_search_meta_title'));
    }

    function is_checked_filter_value(filter_name, metro_value) {
      return mp20_search_filter_service.temp_filter[filter_name].indexOf(metro_value.toString()) > -1;
    }

    function is_checked_sorting_value(order_by_value) {
      if ($scope.order_by == order_by_value) {
        return "checked";
      }
    }

    function is_checked_parking_value(parking_value) {
      if ($scope.parking == parking_value) {
        return "checked";
      }
    }

    function set_filter_value(filter_name, event, filter_value_hadnler) {
      $timeout(function () {
        mp20_search_filter_service.common_filter_logic(filter_name, event, filter_value_hadnler);
      });
    }

    function set_search_result_list(search_result_list) {
      $scope.search_result_list = chunk(2, search_result_list);
      $scope.search_result_call_count++;
    }

    function handleClickFirstPaginationButton() {
      get_next_page(1);
    }

    function handleClickNextPaginationButton() {
      get_next_page($scope.page + 1);
    }

    function handleClickPrevPaginationButton() {
      get_next_page($scope.page - 1);
    }

    function getRelatedContents() {
      mp20_search_http_service
        .related_contents($scope.keyword)
        .then(function (relatedContents) {
          $scope.relatedContents = window.mp20.mapper.RelatedContentMapper.mapping(relatedContents);
          $scope.relatedContentLoaded = true;
          setTimeout(function () {
            new window.mp20.view.EllipsisTextView('.related-list .desc', {
              lines: 2,
              responsive: true
            });
            $('.RelatedContentSlider__LoadingBar').fadeOut('fast');
          }, 0);
        })
        .catch(function (e) {
          console.error(e);
          $scope.relatedContentLoaded = true;
        });
    }

    function handleClickRelatedContent(relatedContent, keyword, index) {
      var analyticsData = {
        search_keyword: keyword,
        position: index
      };
      var eventName;

      switch (relatedContent.getType()) {
        case RELATED_CONTENT_TYPE.TOP_LIST: {
          analyticsData = _.extend(analyticsData, {
            toplist_id: relatedContent.getLinkKey()
          });
          eventName = 'CLICK_TOPLIST';
          break;
        }

        case RELATED_CONTENT_TYPE.MANGO_PICK: {
          analyticsData = _.extend(analyticsData, {
            mangopick_id: relatedContent.getPostID()
          });
          eventName = 'CLICK_STORY';
          break;
        }

        case RELATED_CONTENT_TYPE.EAT_DEAL_COLLECTION: {
          analyticsData = _.extend(analyticsData, {
            link_key: relatedContent.getCollectionID()
          });
          eventName = 'CLICK_EATDEAL_COLLECTION';
          break;
        }

        default:
          break;
      }

      trackEvent(eventName, analyticsData);
    }

    function isEatDealCollectionRelatedContentType(type) {
      return type === RELATED_CONTENT_TYPE.EAT_DEAL_COLLECTION;
    }

    /**
     * Branch.IO Init 및 데이터 전달.
     */
    function init_branch(keyword) {
      window.mp20.branch_io_service.init(window.mp20.branch_io_service.PAGE_KEY.SEARCH, {
        keyword: keyword
      });
    }
  }
})();
$(document).ready(function(){
    var $window = $(window),
        $submit_container = $(".submit-container"),
        $popup = $(".popup"),
        $map_btn = $(".btn.map"),
        $filter_btn = $(".btn.filter"),
        $connect_mp_app = $(".connect-mp-app.map"),
        $black_screen = $(".connect-mp-app.map + .black_screen"),
        submit_container_height = $submit_container.height();

    $(".lazy").lazyload({
      effect: "fadeIn",
      threshold: 150,
      failure_limit: 10
    });

    filter_submit_btn_top_init();
    window.mp20.bottom_sns_share_service.init();

    $window.on("scroll", filter_submit_btn_top_init);
    $window.on("resize", filter_submit_btn_top_init);
    $map_btn.on("click", open_map_for_app_popup);
    $filter_btn.on("click", open_map_for_app_popup);

    function open_map_for_app_popup(e){
        if(!is_mobile_viewport()){return false;}

        var $target = $(e.currentTarget),
            $popup = $("body > .connect-mp-app"),
            $popup_btn = $popup.find(".btn-shortcut-app"),
            random_number = Math.round(Math.random() * 1);

        var event_name = get_ab_test_message($target, "event_name", random_number),
            message= get_ab_test_message($target, "message", random_number),
            page_name = $target.data("page_name"),
            btn_msg = $target.data("btn_msg"),
            bg_url = $target.data("background_url");

        $popup.css("background", "url('" + bg_url + "')");
        $popup.find(".message").html(message);
        $popup_btn.attr("ga_page_name", page_name).data("ga_page_name", page_name);
        $popup_btn.attr("page_name", page_name).data("page_name", page_name);

        $popup_btn.attr("ga_event_name", event_name).data("ga_event_name", event_name);
        $popup_btn.attr("event_name", event_name).data("event_name", event_name);

        $popup_btn.html(btn_msg);

        //			var $black_screen = $connect_mp_app.siblings(".black_screen");
        $connect_mp_app.css("bottom", 0);
        $black_screen.show();

        $black_screen.on("click", function(){
            trackEvent("CLICK_OUTSIDE_CANCEL");
            close_map_for_app_popup();
        });
    }

    function close_map_for_app_popup(){
        //			var $black_screen = $connect_mp_app.siblings(".black_screen");
        $connect_mp_app.css("bottom", "-100%");
        $black_screen.hide();

        $black_screen.off("click");
    }

    function filter_submit_btn_top_init(){
        if(!is_mobile_viewport()){
            set_submit_container_for_height();
        } else {
            $submit_container.css("top", "initial")
        }
    }

    function get_submit_container_for_height(){
        return document.documentElement.clientHeight - (70 + submit_container_height - $window.scrollTop());
    }

    function set_submit_container_for_height(){
        var submit_container_for_height = get_submit_container_for_height(),
            max_top = $popup.outerHeight() - $submit_container.height() - 220;

        if(max_top > submit_container_for_height){
            $submit_container.css("top", submit_container_for_height);
        } else {
            $submit_container.css("top", "initial");
            $submit_container.css("bottom", "0");
        }
    }

    $('.connect-mp-app.map .btn.cancel').on("click",function(){
      trackEvent('CLICK_CLOSE_MAP');
      close_map_for_app_popup();

    });

    var adm = AdManager.get_instance();
    AdRepeater.repeat(
      adm.repo.where({page: 'search', name: /card_list.*/}),
      $(".adview_server_render_search_result_item"),
      0,
      function (inventory, item, index) {
        adm.area_renderer.render(inventory, item, AdPlacer.after, index, 'card_list');
      }
    );
    adm.publish();


});
(function(){
  function MapInterface(param, callback){
    this.implements = [window.mp20.naver_map, window.mp20.google_map];
    var locale = get_locale();
    var process_arr = this.get_process_arr(),
      process_function = process_arr[locale][typeof param];

    process_function(param, callback);
  }

  MapInterface.SERVICE_NAME = {
    NAVER: 'naver',
    GOOGLE: 'google'
  };

  MapInterface.prototype = {
    get_process_arr: function(){
      var process_arr_ko = [];
      var process_arr_foreign = [];

      process_arr_ko["object"] = function(inplementObject, callback){
        this.inplementObject = inplementObject;

        if(_.isFunction(callback)){
          callback(inplementObject);
        }
      }.bind(this);

      process_arr_ko["boolean"] = function(bool, callback){
        if(bool){
          // 상속 받을때.
        } else {
          // limit에 맞춰서 자동으로 로딩.
          var result_promise;

          var naver_instance = new window.mp20.naver_map();
          result_promise = naver_instance._get_script();

          result_promise.then(function(instance){
            this.inplementObject = instance;
            callback(instance);
          });
        }
      }.bind(this);

      process_arr_ko["undefined"] = function(){

      };


      process_arr_foreign["object"] = function(inplementObject, callback){
        this.inplementObject = inplementObject;

        if(_.isFunction(callback)){
          callback(inplementObject);
        }
      }.bind(this);

      process_arr_foreign["boolean"] = function(bool, callback){
        if(bool){
          // 상속 받을때.
        } else {
          var google_instance = new window.mp20.google_map(),
            google_promise = google_instance._get_script();

          google_promise.then(function(instance){
            this.inplementObject = instance;
            callback(instance);
          });
        }
      }.bind(this);

      process_arr_foreign["undefined"] = function(){

      };

      return {
        ko: process_arr_ko,
        en: process_arr_foreign,
        zh: process_arr_foreign
      };
    },

    get_service_name: function() {
      return this.inplementObject.service_name;
    },

    init: function(selector, marker_info, option){
      this.inplementObject._init(selector, marker_info, option);
    },

    make_map: function(selector, latlng){
      this.inplementObject._make_map(selector, latlng);
    },

    make_latlng: function(latlng){
      this.inplementObject._make_latlng(latlng);
    },

    add_marker: function(marker_info){
      this.inplementObject._add_marker(marker_info);
    },

    set_bounds: function(marker_info){
      this.inplementObject._set_bounds(marker_info);
    },

    set_info_window: function(){
      this.inplementObject._set_info_window();
    },

    make_info_window: function(){
      this.inplementObject._make_info_window();
    },

    make_info_obj: function(lat, lng, name, rating, official_rating_available, subcuisine, metro, action, restaurant_uuid, restaurant_key, review_count, wannago_count, picture_url){
      return this.inplementObject._make_info_obj(lat, lng, name, rating, official_rating_available, subcuisine, metro, action, restaurant_uuid, restaurant_key, review_count, wannago_count, picture_url);
    },

    hide_info_window: function(){
      this.inplementObject._hide_info_window();
    },

    hide_marker: function(){
      this.inplementObject._hide_marker();
    },

    bind_marker_click_event: function(marker, callback){
      this.inplementObject._bind_marker_click_event(marker, callback);
    },

    bind_map_event: function(event_name, callback, map){
      this.inplementObject._bind_map_event(event_name, callback, map);
    },

    use_api: function(callback){
      return this.inplementObject._use_api(callback);
    },

    parse_array: function(obj){
      return this.inplementObject._parse_array(obj);
    },

    create_static_map: function(selector, lat, lng, option){
      return this.inplementObject._create_static_map(selector, lat, lng, option);
    },

    resize_map: function(size){
      return this.inplementObject._resize_map(size);
    },

    get_bounds: function(){
      return this.inplementObject._get_bounds();
    },

    get_script: function(callback){
      this.inplementObject._get_script(callback);
    },

    set_center: function (lat, lng) {
      this.inplementObject.set_center(lat, lng);
    }
  };

  if (window.mp20){
    window.mp20.MapInterface = MapInterface;
  } else {
    window.mp20 = {};
    window.mp20.MapInterface = MapInterface;
  }
})();
(function() {
  var CONSTANTS = {
    STATIC_MAP_HOST: "https://naveropenapi.apigw.ntruss.com/map-static/v2/raster",
    STATIC_MAP_ZOOM_LEVEL: 16,
    STATIC_MAP_SCALE: 2,
    STATIC_MAP_KEY: "AIzaSyDa1oMWcI7Up7rw6bpbfE5BLGskPjB-4XM"
  };

  /**
   * 네임스페이스
   * @type {Object}
   */
  function GoogleMap() {
    this.service_name = 'google';
    /**
     * 초기화 함수.
     */
    this._init = function(selector, marker_info, option) {
      /**
       * 다음지도의 기본 정보 및 실제 객체들이 세팅 되는 객체.
       * @type {{zoom: number, marker_list: Array, map: null}}
       */
      this.info = {
        "zoom": 16,
        "marker_list": [],
        "info_window_list": [],
        "map": null,
        "info_window_template_id": "map_info_window_template",
        "marker_image": 'https://d1jrqqyoo3n46w.cloudfront.net/web/resources/4eewowfvvde0l9mz.png',
        "options": null
      };

      this.info_window_html = document.getElementById(this.info.info_window_template_id).innerHTML;
      option = option || {};
      this.info.marker_list = [];
      this.info.info_window_list = [];

      this.info.options = option;

      var latlng;

      if(Array.isArray(marker_info)) {
        latlng = marker_info[0];
      } else {
        latlng = marker_info;
      }

      if(!latlng) {
        latlng = {
          "lat": "37.4990328",
          "lng": "127.0357378"
        };
        this._make_map(selector, latlng);
        return false;
      }

      /**
       * info Window에서 사용 할 template 문법 재정의.
       * hello! {{ name }} 과 같은 형식으로 변경.
       */
      _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
      };

      this._make_map(selector, latlng);
      this._add_marker(this.info.map, marker_info, option.onMarkerClickCallback);

      if(marker_info.length > 1) {
        this._set_bounds(marker_info);
      }

			this._bind_map_click_evnet(this.info.map, function(){
				this._hide_info_window();
			}.bind(this));

      //drgg event bind
      if(typeof option.drag_event_function === "function") {
        this._bind_drag_event(option.drag_event_function);
      }
    };

    this._make_map = function(selector, option) {
      var container = document.querySelector(selector);

      this.info.map = new google.maps.Map(container, {
        center: {lat: parseFloat(option.lat), lng: parseFloat(option.lng)},
        scrollwheel: _.isUndefined(this.info.options.scrollWheel) ? true : this.info.options.scrollWheel,
        zoom: this.info.zoom,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: _.isUndefined(option.zoomControl) ? true : option.zoomControl,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
        },
      });

      this.info.map.addListener('click', function() {
        trackEvent("CLICK_MAP");
      });

      this.info.map.addListener('dragstart', function() {
        trackEvent("CLICK_MAP_DRAG");
      });

      // TODO: Zoom Controller Add
    };

    this._make_latlng = function(latlng) {
      return {
        "lat": parseFloat(latlng.lat),
        "lng": parseFloat(latlng.lng)
      };
    };

    this._add_marker = function(map, marker_info, callback) {
      marker_info = this._parse_array(marker_info);

      _.each(marker_info, function(marker_i) {
        var marker = new google.maps.Marker({
          map: this.info.map,
          position: this._make_latlng(marker_i),
          icon: this.info.marker_image
        });

        this.info.marker_list.push(marker);

        if(!this.info.options.not_set_open_window) {
          this._bind_marker_click_event(marker, function () {
            if (_.isFunction(callback)) {
              callback();
            }

            this._set_info_window(marker_i, marker);
          }.bind(this));
        }

        marker.setMap(map);

        this.info.marker_list.push(marker);
      }.bind(this));
    };

    this._set_bounds = function(marker_info) {
      var bounds = new google.maps.LatLngBounds();

      marker_info = this._parse_array(marker_info);

      _.each(marker_info, function(item) {

        if(!(item instanceof google.maps.LatLng)) {
          item = this._make_latlng_google(item);
        }

        bounds.extend(item);
      }.bind(this));

      this.info.map.fitBounds(bounds);
    };

    this._set_info_window = function(info_obj, marker) {
      if (is_mobile_viewport()) {
        return false;
      }

      var info_window_compiled = _.template(this.info_window_html, {
        "imports": {
          "get_action_class": window.mp20.wannago_service.get_action_class,
          "get_action_id": function(action) {
            var action_id = "";
            if(action) {
              action_id = action.action_id;
            }
            return action_id;
          }
        }
      })(info_obj);

      var infowindow = new google.maps.InfoWindow({
        content: info_window_compiled,
        maxWidth: 500,
        maxheight: 140
      });
      this._hide_info_window();

      this.info.info_window_list.push(infowindow);

      infowindow.open(this.info.map, marker);
    };

    this._make_info_window = function() {

    };

    this._hide_info_window = function() {
      _.each(this.info.info_window_list, function(info_window) {
        info_window.close();
      });

      this.info.info_window_list = [];
    };

    this._make_info_obj = function(lat, lng, name, rating, official_rating_available, subcuisine, metro, action, restaurant_uuid, restaurant_key, review_count, wannago_count, picture_url) {
      if(rating) {
        rating = parseFloat(rating).toFixed(1);
      } else {
        rating = "";
      }

      return {
        "lat": lat,
        "lng": lng,
        "name": name,
        "rating": rating,
        "official_rating_available": official_rating_available,
        "action": action,
        "subcuisine": subcuisine,
        "metro": metro,
        "restaurant_uuid": restaurant_uuid,
        "restaurant_key": restaurant_key,
        "review_count": review_count,
        "wannago_count": wannago_count,
        "picture_url": picture_url
      };
    };

    this._hide_marker = function() {

    };

    this._bind_marker_click_event = function(marker, callback) {
      marker.addListener('click', function() {
        callback();
      });
    };

    this._use_api = function(callback) {
      var result;

      function google_map_limit_check() {
        return (!window.google);
      }

      if(google_map_limit_check()) {
        var map_class = ".map_wrap";

        $(".btn-map").hide();
        $(map_class).hide();
        return false;
      } else {
        result = callback();
      }

      return result;
    };

    this._parse_array = function(obj) {
      if(!Array.isArray(obj)) {
        obj = [obj];
      }
      return obj;
    };

    this._make_latlng_google = function(latlng) {
      return new google.maps.LatLng(latlng.lat, latlng.lng);
    };

    this._bind_drag_event = function(event_callback) {
      this.info.map.addListener("drag", event_callback);
    };

    this._resize_map = function() {
      google.maps.event.trigger(this.info.map, "resize");
    };

    this._get_bounds = function() {
      var bounds = this.info.map.getBounds(),
          sw = bounds.getSouthWest(),
          ne = bounds.getNorthEast(),
          swne = {};

      swne.sw = sw.lat() + ", " + sw.lng();
      swne.ne = ne.lat() + ", " + ne.lng();

      return swne;
    };

    this._bind_map_click_evnet = function(map, callback) {
      map.addListener("click", callback);
    }

    this._get_script = function(callback) {
      var script_url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDa1oMWcI7Up7rw6bpbfE5BLGskPjB-4XM";

      var promise = new Promise(function(resolve, reject) {
        if(window.google){
          resolve(new window.mp20.MapInterface(new window.mp20.google_map()));
        } else {
          $.getScript(script_url, function(data, textStatus, jqxhr) {
            if(parseInt(jqxhr.status) === 200) {
              var new_instance = new window.mp20.MapInterface(new window.mp20.google_map());
//						callback(new_instance);
              resolve(new_instance);
            } else {
              reject();
            }
          });
        }
      });

      return promise;
    };


    this._create_static_map = function(selector, lat, lng, option) {
      var $selector = $(selector);

      var google_static_map_address = this._get_static_map_image_url({
        width: option.width,
        height: option.height,
        lat: lat,
        lng: lng
      });
      var $img = $("<img class='static_map " + (option.class_name || '') + "' src='" + google_static_map_address + "' alt='google_map_image'/>");

      if (option.class_name) {
        $img.addClass(option.class_name);
      }

      $selector.append($img);

      return $selector;
    };

    this._get_static_map_image_url = function (params) {
      var url = "https://maps.googleapis.com/maps/api/staticmap?"
      url += "center=" + params.lat + "," + params.lng;
      url += "&zoom=" + CONSTANTS.STATIC_MAP_ZOOM_LEVEL;
      url += "&size=" + params.width + "x" + params.height
      url += "&scale=" + CONSTANTS.STATIC_MAP_SCALE;
      url += "&key=" + CONSTANTS.STATIC_MAP_KEY;

      return url;
    }

    /**
     * Map 객체에 Evnet를 바인딩 해주는 메서드
     * @param event_name - event name
     * @param callback - event callback function
     * @param map - event target map
     * @private
     */
    this._bind_map_event = function(event_name, callback, map){
      map = map || this.info.map;

      if(!map){
        return false;
      }

      if(map instanceof $) {
        // is Jquery Element
        // Static Map Case
        map.on(event_name, callback);
      } else {
        // is google map object
        map.addListener(event_name, callback);
      }
    }

    this.set_center = function (lat, lng) {
      var latlng = this._make_latlng({
        lat: lat,
        lng: lng
      });

      latlng = this._make_latlng_google(latlng);
      this.info.map.setCenter(latlng);
    }
  }


  if(window.mp20) {
    window.mp20.google_map = GoogleMap;
  } else {
    window.mp20 = {};
    window.mp20.google_map = GoogleMap;
  }

  GoogleMap.prototype = new window.mp20.MapInterface();
})();
(function(){
  var CONSTANTS = {
    STATIC_MAP_HOST: "https://naveropenapi.apigw.ntruss.com/map-static/v2/raster",
    STATIC_MAP_ZOOM_LEVEL: 15,
    STATIC_MAP_SCALE: 2
  };

  function NaverMap(){
    this.service_name = 'naver';
    this.markers = [];
    this.info_windows = [];
    this.option = {};

    /**
     * 초기화 메서드
     * @param selector - Map을 init할 Selector
     * @param marker_info - 표시할 Marker info
     * @param option - Map init시 사용할 option 값
     * @private
     */
    this._init = function(selector, marker_info, option){
      this.info_window_template = _.template($("#map_info_window_template").html());
      this.map = this._make_map(selector, option);
      if (option.map_popup_view && detectIE()) {
        // Naver Map이 타일이 다운로드 변경되지 않는 이슈가 있어서 IE 버전에서는 리플레이쉬 되도록 처리
        var naver_map = this.map;
        naver.maps.Event.once(this.map, 'tilesloaded', function () {
          naver_map.setZoom(17, false);
        });
      }
      this.option = option;

      if(!_.isEmpty(marker_info)){
        this._add_marker(marker_info, undefined, option.onMarkerClickCallback);
        this._set_bounds(marker_info);
      }

      this.bind_event();
      this._off_options(option, this.map);
    };

    /**
     * Naver MAP API Script를 Load하는 메서드
     * @returns {promise} - http status를 담은 Promise
     * @private
     */
    this._get_script = function(){
      var script_url = "//openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vzt6er0j7l";

      function get_naver_script_promise(resolve, reject){
        function get_script(data, textStatus, jqxhr){
          var status_code = parseInt(jqxhr.status);
          var is_success_response = status_code >= 200 && status_code < 300;

          if(is_success_response){
            var new_instance = new window.mp20.MapInterface(new window.mp20.naver_map());
            resolve(new_instance);
          } else {
            reject();
          }
        }

        $.getScript(script_url, get_script);
      }

      return new Promise(get_naver_script_promise);
    };

    /**
     * map을 실제로 draw해주는 메서드
     * @param selector - darw할 DOM Element.
     * @param option
     * @private
     */
    this._make_map = function(selector, option){
      selector = document.querySelector(selector);

      var mapOptions = {
        center: new naver.maps.LatLng(option.lat, option.lng),
        useStyleMap: true,
        zoom: 16,
        mapDataControl: false,
        scaleControl: _.isUndefined(option.scaleControl) ? true : option.scaleControl,
        zoomControl: _.isUndefined(option.zoomControl) ? true : option.zoomControl,
        scrollWheel: _.isUndefined(option.scrollWheel) ? true : option.scrollWheel,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.LARGE,
          position: naver.maps.Position.TOP_RIGHT
        }
      };

      return new naver.maps.Map(selector, mapOptions);
    };

    /**
     * LatLng 객체를 반환하는 메서드.
     * @param latlng
     */
    this._make_latlng = function(latlng){
      return new naver.maps.LatLng(latlng.lat, latlng.lng);
    };

    /**
     * 지도에 Marker를 추가하는 메서드.
     * @param marker_info - 마커 정보를 담은 객체.
     */
    this._add_marker = function(marker_info, map, callback) {
      marker_info = this._parse_array(marker_info);

      marker_info.forEach(function(marker_i) {
        var marker = new naver.maps.Marker({
          position: this._make_latlng(marker_i),
          map: map || this.map,
          icon: {
            url: "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ikpswdksy8bnweeq.png?fit=around|*:*&crop=*:*;*,*&output-format=png&output-quality=80",
            size: new naver.maps.Size(25, 35),
            origin: new naver.maps.Point(0, 0),
            scaledSize: new naver.maps.Size(25, 35)
          }
        });

        if(!this.option.not_set_open_window){
          this._bind_marker_click_event(marker, marker_i, callback);
        }

        this.markers.push(marker);
      }.bind(this));
    };

    /**
     * 마커에 클릭 이벤트를 바인딩 하는 메서드.
     * @param marker - 이벤트를 바인딩할 마커.
     * @param callback - click시 실행될 callback 함수.
     */
    this._bind_marker_click_event = function(marker, marker_info, callback) {
      var template = this.info_window_template(marker_info);

      var infowindow = new naver.maps.InfoWindow({
        content: template
      });

      this.info_windows.push(infowindow);

      naver.maps.Event.addListener(marker, "click", function(e) {
        if (_.isFunction(callback)) {
          callback();
        }

        if (is_mobile_viewport()) {
          return ;
        }

        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(this.map, marker);
        }
      }.bind(this));
    };

    /**
     * 맵을 마커가 모두 보이는 위치로 이동시켜주는 메서드.
     * @param marker_info - 마커 정보.
     * @private
     */
    this._set_bounds = function(marker_info) {
      if(!Array.isArray(marker_info)){
        this.map.setCenter(this._make_latlng(marker_info));
        return false;
      }

      var latlngArr = _.map(marker_info, function(marker_i){
        return [marker_i.lng, marker_i.lat];
      });
      var latlngArrCount = latlngArr.length;

      if(latlngArrCount > 1){
        this.map.fitBounds(latlngArr);
      } else if (latlngArrCount === 1) {
        this.map.setCenter(this._make_latlng(marker_info[0]));
      }
    };

    /**
     * info window를 모두 닫는 메서드.
     */
    this._hide_info_window = function(){
      _.each(this.info_windows, function(info_window){
        info_window.close();
      });
    };

    /**
     * 전체적인 이벤트를 바인딩 해주는 메서드
     */
    this.bind_event = function(){
      this._bind_map_click_evnet(this.map);


      if(this.option.drag_event_function){
        naver.maps.Event.addListener(this.map, "dragend", this.option.drag_event_function);
      }
    };

    /**
     * Map에 클릭 이벤트를 바인딩 해주는 메서드.
     * @param map - click event를 바인딩할 지도.
     */
    this._bind_map_click_evnet = function(map) {
      naver.maps.Event.addListener(map, "click", function(){
        this.info_windows.forEach(function(info_window) {
          info_window.close();
        });
      }.bind(this));
    };

    /**
     * 해당 객체를 Array로 wrap해주는 메서드.
     * @param obj - Array로 wrap할 값.
     * @returns {Array} - wrap한 Array.
     */
    this._parse_array = function(obj){
      if(!Array.isArray(obj)){
        obj = [obj];
      }

      return obj;
    };

    /**
     * API 사용시 호출하는 Proxy 함수.
     * @param callback
     * @returns {boolean}
     */
    this._use_api = function(callback){
      return callback();
    };

    this._make_info_obj = function(lat, lng, name, rating, official_rating_available, subcuisine, metro, action, restaurant_uuid, restaurant_key, review_count, wannago_count, picture_url) {
      if(rating) {
        rating = parseFloat(rating).toFixed(1);
      } else {
        rating = "";
      }

      return {
        "lat": lat,
        "lng": lng,
        "name": name,
        "rating": rating,
        "official_rating_available": official_rating_available,
        "action": action,
        "subcuisine": subcuisine,
        "metro": metro,
        "restaurant_uuid": restaurant_uuid,
        "restaurant_key": restaurant_key,
        "review_count": review_count,
        "wannago_count": wannago_count,
        "picture_url": picture_url || mp.module.constants.ERROR_IMAGE.RESTAURANT
      };
    };

    /**
     * Static Map Image Element를 append 해주는 method.
     * @param selector - 지도를 만들 Element
     * @param lat - lat
     * @param lng - lng
     * @param option
     * @private
     */
    this._create_static_map = function(selector, lat, lng, option){
      var $selector = $(selector);
      var naver_static_map_address = this._get_static_map_image_url({
        width: option.width,
        height: option.height,
        lat: lat,
        lng: lng
      });
      var $img = $("<img class='naver_static_map' src='" + naver_static_map_address + "' alt='naver_map_image' />");

      if (option.class_name) {
        $img.addClass(option.class_name);
      }

      $selector.append($img);

      return $selector;
    };

    this._get_static_map_image_url = function (params) {
      var url = CONSTANTS.STATIC_MAP_HOST + "?";
      url += "X-NCP-APIGW-API-KEY-ID=vzt6er0j7l";
      url += "&X-NCP-APIGW-API-KEY=rGndKFtWTmPVJk1HgKy15Yt3YdD8RB6XEin7RZFs";
      url += "&center=" + params.lng + "," + params.lat;
      url += "&level=" + CONSTANTS.STATIC_MAP_ZOOM_LEVEL;
      url += "&w=" + params.width;
      url += "&h=" + params.height;
      url += "&scale=" + CONSTANTS.STATIC_MAP_SCALE;
      url += "&baselayer=default";

      return url;
    }

    /**
     * Naver Map 객체에 Evnet를 바인딩 해주는 메서드
     * @param event_name - event name
     * @param callback - event callback function
     * @param map - event target map
     * @private
     */
    this._bind_map_event = function(event_name, callback, map){
      map = map || this.map;

      if(map){
        naver.maps.Event.addListener(map, event_name, callback);
      }
    };

    this._off_map_interation = function(map){
      map = map || this.map;

      if(!map){
        return false;
      }

      if(map.getOptions("draggable")){
        map.setOptions({
          draggable: false,
          pinchZoom: false,
          scrollWheel: false,
          keyboardShortcuts: false,
          disableDoubleTapZoom: true,
          disableDoubleClickZoom: true,
          disableTwoFingerTapZoom: true
        });
      }
    };

    this._off_options = function(off_options, map){
      map = map || this.map;

      for(var key in off_options){
        if(off_options.hasOwnProperty(key) && off_options[key] === false){
          map.setOptions(key, false);
        }
      }
    };

    this._get_bounds = function(map){
      map = map || this.map;

      var bounds = map.getBounds();

      return {
        sw: bounds._sw._lat + ", " +  bounds._sw._lng,
        ne: bounds._ne._lat + ", " + bounds._ne._lng
      }
    };

    this._resize_map = function(size){
      this.map.setSize(size);
    }

    this.set_center = function(lat, lng){
      var latlng = new naver.maps.LatLng(lat, lng);
      this.map.setCenter(latlng);
    };
  }

  /**
   * 전역객체에 바인딩.
   */
  if(window.mp20){
    window.mp20.naver_map = NaverMap;
  } else {
    window.mp20 = {};
    window.mp20.naver_map = NaverMap;
  }

  NaverMap.prototype = new window.mp20.MapInterface();

})();
(function () {
  angular.module("mp20App").directive("adBanner", banner);
  var default_inventory = /card_list.*/

  function banner() {
    return {
      restrict: 'E',
      scope: {
        adm: '&',
        collection: '&',
        platform: '@',
        page: '@',
        inventory: '@',
        additionalClass: '@',
        start: '&',
        index: '&'
      },

      link: function (scope, element) {
        if (!(scope.start() > 1)) {
          return;
        }
        var adm = window.AdManager.get_instance();
        var inventories = adm.repo.where({
          platform: scope.platform,
          page: scope.page,
          name: scope.inventory || default_inventory
        });

        _.each(inventories, function (inventory) {
          if (AdMatcher.is_match(inventory, scope.index())) {
            adm.area_renderer.render(inventory, element, AdPlacer.after, scope.start() + "_" + scope.index(), scope.additionalClass);
          }
        });
        adm.publish();
      }
    }
  }
})();
(function () {
  angular.module("mp20App").directive("paginationTypeMobile", PaginationTypeMobile);

  function PaginationTypeMobile() {
    return {
      restrict: 'E',
      templateUrl: "/assets/directive/pagination_type_mobile.directive.html",
      scope: {
        page: '=',
        lastPage: '=',
        onClickFirst: '=',
        onClickNext: '=',
        onClickPrev: '=',
        isActiveFirstButton: '=',
        isActiveNextButton: '=',
        isActivePrevButton: '=',
      },
      link: function (scope) {
        scope.handleClickFirstButton = function () {
          if (scope.isActiveFirstButton) {
            scope.onClickFirst();
          }
        }

        scope.handleClickNextButton = function () {
          if (scope.isActiveNextButton) {
            scope.onClickNext();
          }
        }

        scope.handleClickPrevButton = function () {
          if (scope.isActivePrevButton) {
            scope.onClickPrev();
          }
        }

      }
    }
  }
})();
(function () {
  angular.module("mp20App").directive("relatedContentSlider", RelatedContentSlider);

  RelatedContentSlider.$inject = ["$timeout"];
  function RelatedContentSlider($timeout) {
    return {
      restrict: 'E',
      templateUrl: "/assets/directive/related_content_slider.directive.html",
      scope: {
        relatedContents: '=',
        handleClickRelatedContent: "=",
        isEatDealCollectionType: "=",
        keyword: "="
      },
      replace: true,
      link: function (scope) {
        scope.size = calculateRelatedContentSize();
        scope.isLoaded = false;
        watchRelatedContents(scope, $timeout);
      }
    }
  }

  function calculateRelatedContentSize() {
    const clientWidth = window.document.documentElement.clientWidth;
    const itemWidth = clientWidth * (92 / 100);
    const itemHeight = itemWidth * (47.5 / 100);

    return {width: itemWidth + 'px', height: itemHeight + 'px'};
  }

  function watchRelatedContents(scope, $timeout) {
    scope.$watch('relatedContents', function (newValue) {
      if (newValue && newValue.length) {
        if (scope.isLoaded) {
          return ;
        }

        scope.isLoaded = true;

        $('.RelatedContentSlider').slick({
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          centerPadding: 15
        });

        $timeout(function () {
          new window.mp20.view.EllipsisTextView('.RelatedContentSlider__SubTitle', {
            lines: 2,
            responsive: true
          });
        }, 0);
      }
    });
  }
})();

























