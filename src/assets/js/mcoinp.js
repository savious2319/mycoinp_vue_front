var _coinMeta = new Object(); // 코인 전체 정보를 담을거임.
var _coinMapList = new Object(); // coinMeta.coinList 코인정보 array가 들어있음.
var _coinMapListCur = new Object(); // 대표가격이 형성된 코인리스트.
let _myCoinpUserInfo = new Object(); // 개인 관련 정보들 담겨있을거임. myCoinUserInfo.id, mycoinUserInfo.data
let _exchangeList = new Object();

let isGoogleDriveReadyFlag = false;

function isGoogleDriveReadyFn(flag) {
    isGoogleDriveReadyFlag = flag;
}

const LayerFunction = {
    /**
     * 중첩일 경우 현재중첩창 수를 layerDepth로 int로 넘김. 그땐 반드시 element를 this로 넘겨야함.
     * @param layerDepth
     * @param element
     * @returns
     */
    btnLock: false,
    layerDepth: 0,
    closeLayers: function(element) {
        if (LayerFunction.btnLock) return;
        LayerFunction.btnLock = true;

        if (LayerFunction.layerDepth < 1) {
            LayerFunction.layerDepth = 1;
        }

        if (LayerFunction.layerDepth == 2) {
            $('.mask').css("z-index", "700");
            $(element).closest('.layer_pop').hide();
        } else {
            $('.mask').hide();
            $('.layer_pop').hide();
        }

        LayerFunction.layerDepth--;

        LayerFunction.btnLock = false;
    },
    /**
     * @param layerIdentity
     * @returns
     */
    openLayers: function(layerIdentity) {
        if (LayerFunction.btnLock) return;
        LayerFunction.btnLock = true;

        LayerFunction.layerDepth++;
        $('.mask').show();
        $(layerIdentity).show();

        LayerFunction.btnLock = false;
    }
}
const GlobalLocale = {
    qSymbol: '$',
    rate: 1,
    lang: 'en',
    decimal: 'a', //['a': 3.14], ['b':3,14]
    langList: {},
    currList: {},
    currency: '100001'
}

const _cookieData = {
    currencyCd: '100001',
    langCd: 'en'
}

var _userIdKey = "myCoinpUserInfo";
var _userId = "myCoinpUserId_"; //+utcYMD;

function tooltip() {
    var tooltipImg = $('.tooltip_img');

    tooltipImg.hover(function() {
        $(this).closest('.total').css({ overflow: 'visible' });
    }, function() {
        $(this).closest('.total').css({ overflow: 'hidden' });
    });
}

function screen() {
    // 2019-03-27 수정

    var Height = $(window).height();
    var container_coin = Height - 191;
    var $Height_coin = $(".data_list, .data_con, .data_list .div");
    $Height_coin.css('height', container_coin);

    $(window).bind('scroll resize', function() {
        if ($(window).width() >= 1200) {
            $('.fixed #total_wrap').css({ left: 'auto' });
        } else {
            $('.fixed #total_wrap').css('left', 10 - $(this).scrollLeft());
        }

        if ($(window).width() >= 1200) {
            $('.tab_tit.fix_tit.fixed').css({ left: 'auto' });
        } else {
            $('.tab_tit.fix_tit.fixed').css('left', 615 - $(this).scrollLeft());
        }

        if ($(window).width() >= 1200) {
            $('.scroll_allcoin .tab_con.ex_header.fixed').css({ left: 'auto' });
        } else {
            $('.scroll_allcoin .tab_con.ex_header.fixed').css('left', 615 - $(this).scrollLeft());
        }

    });

    tooltip();

    /* 메인 우측 스크롤 2020-07-17 수정*/
    $('.scroll_portfolio').mCustomScrollbar({
        callbacks: {
            whileScrolling: function() {

                if (typeof _mCustomScrollbar_whileScrolling === "function") {
                    _mCustomScrollbar_whileScrolling(this);
                }

                if (this.mcs.top <= -305) {
                    $(".tab_tit").addClass("fixed");
                    $("#buy_sell .sub_dep").addClass("fixed"); // 2020-10-07 수정
                } else {
                    $(".tab_tit").removeClass("fixed").css({ left: "auto" });
                    $("#buy_sell .sub_dep").removeClass("fixed").css({ left: "auto" }); // 2020-10-07 수정
                }

                if ($(window).width() >= 1200) {
                    $("#total_wrap.fixed").css({ left: "auto" });
                    $("#buy_sell .sub_dep").css({ left: "auto" }); // 2020-10-07 수정
                } else {
                    $(".tab_tit.fix_tit.fixed").css("left", 615 - $(window).scrollLeft()); // 2019-12-13  숫자변경
                    $("#buy_sell .sub_dep").css("left", 615 - $(this).scrollLeft()); // 2020-10-07 수정
                }
                if (this.mcs.top <= -230) {
                    $(".top_btn_right").fadeIn();
                } else {
                    $(".top_btn_right").fadeOut();
                }

            },

            onScroll: function() {
                if (typeof _mCustomScrollbar_onScroll === 'function') {

                    _mCustomScrollbar_onScroll(this);
                }
            },
            onTotalScroll: function() {
                if (typeof _mCustomScrollbar_onTotalScroll === 'function') {

                    _mCustomScrollbar_onTotalScroll(this);
                }
            }
        },
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside",
        scrollInertia: 1500
            //		, mouseWheelPixels: 80/* 2019-09-20 속도 수정 */
    });

    /* 메인 좌측 스크롤 2020-07-17 수정*/
    $('.data_list.main .div').mCustomScrollbar({
        callbacks: {
            whileScrolling: function() {

                if (typeof _mCustomScrollbar_whileScrolling === 'function') {
                    _mCustomScrollbar_whileScrolling(this);
                }
                if (this.mcs.top <= -157) {
                    $(".data_list.main .div").addClass("fixed");

                } else {
                    $(".data_list.main .div").removeClass("fixed");
                }

                if (this.mcs.top <= -230) {
                    $(".top_btn").fadeIn();
                } else {
                    $(".top_btn").fadeOut();
                }

                if ($(window).width() >= 1200) {
                    $(" #total_wrap").css({ left: "auto" }); // 2020-03-27  클래스 변경
                } else {
                    if (this.mcs.top <= -157) {
                        $(" #total_wrap").css("left", 10 - $(window).scrollLeft());

                    } else {
                        $(" #total_wrap").css({ left: "auto" });
                    }

                }
            },
            onScroll: function() {
                if (typeof _mCustomScrollbar_onScroll === 'function') {

                    _mCustomScrollbar_onScroll(this);
                }
            },
            onTotalScroll: function() {
                if (typeof _mCustomScrollbar_onTotalScroll === 'function') {

                    _mCustomScrollbar_onTotalScroll(this);
                }
            }
        },
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside",
        setHeight: false,
        autoDraggerLength: false,
        autoExpandScrollbar: false
            /* , snapAmount: 60 */
            ,
        mouseWheel: {
            enable: true,
            scrollAmount: 59,
            normalizeDelta: true
        },
        keyboard: {
            enable: true,
            scrollType: "stepped",
            scrollAmount: 59
        },
        scrollInertia: 400
    });


    /* allcoin 우측 스크롤 2020-07-17 수정*/
    $('.scroll_allcoin').mCustomScrollbar({
        callbacks: {
            whileScrolling: function() {

                if (this.mcs.top <= -318) {
                    $('.scroll_allcoin .ex_header').addClass('fixed');
                } else {
                    $('.scroll_allcoin .ex_header').removeClass('fixed');
                }

                if ($(window).width() >= 1200) {
                    $('.coin.watchlist_list').css({ left: 'auto' });
                } else {
                    $('.scroll_allcoin .tab_con.ex_header.fixed').css('left', 615 - $(window).scrollLeft());
                }

                if (this.mcs.top <= -230) {
                    $(".top_btn_right").fadeIn();
                } else {
                    $(".top_btn_right").fadeOut();
                }
            }
        },
        onScroll: function() {
            if (typeof _mCustomScrollbar_onScroll === 'function') {

                _mCustomScrollbar_onScroll(this);
            }
        },
        onTotalScroll: function() {
            if (typeof _mCustomScrollbar_onTotalScroll === 'function') {

                _mCustomScrollbar_onTotalScroll(this);
            }
        },

        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside",
        setHeight: false,
        autoDraggerLength: false,
        autoExpandScrollbar: false,
        snapAmount: 48,
        mouseWheel: {
            enable: true,
            scrollAmount: 48,
            normalizeDelta: true
        },
        keyboard: {
            enable: true,
            scrollType: "stepped",
        },
        scrollInertia: 400
    });

    $(".layer_pop").find(".search_wrap").mCustomScrollbar({
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside"
    });


    //2020-01-09 추가
    $(".exchange_wrap .con_list.mt50").mCustomScrollbar({
        callbacks: {
            whileScrolling: function() {
                if (this.mcs.top <= -230) {
                    $(".top_btn_right").fadeIn();
                } else {
                    $(".top_btn_right").fadeOut();
                }
            }
        },
        onScroll: function() {
            if (typeof _mCustomScrollbar_onScroll === "function") {

                _mCustomScrollbar_onScroll(this);
            }
        },
        onTotalScroll: function() {
            if (typeof _mCustomScrollbar_onTotalScroll === "function") {

                _mCustomScrollbar_onTotalScroll(this);
            }
        },
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside",
        setHeight: false,
        autoDraggerLength: false,
        autoExpandScrollbar: false,
        snapAmount: 59 ///2020-07-23 수정
            ,
        mouseWheel: {
            enable: true,
            scrollAmount: 59, ///2020-07-23 수정
            normalizeDelta: true
        },
        keyboard: {
            enable: true,
            scrollType: "stepped",
        },
        scrollInertia: 400 /* 2019-09-20 속도 수정 */
    });

    //2020-01-09 추가
    //.coin.watchlist_list로 .exchange, .allcoin 공용이지만, 
    //allcoin의 경우 따로 페이징을 위하여 acList.js에서 따로 걸었습니다.
    $(".coin.watchlist_list.exchange").mCustomScrollbar({
        callbacks: {
            whileScrolling: function() {

                if (typeof _mCustomScrollbar_whileScrolling === "function") {
                    _mCustomScrollbar_whileScrolling(this);
                }
                if (this.mcs.top <= -230) {
                    $(".top_btn").fadeIn();
                } else {
                    $(".top_btn").fadeOut();
                }

            },
            onScroll: function() {
                if (typeof _mCustomScrollbar_onScroll === "function") {

                    _mCustomScrollbar_onScroll(this);
                }
            },
            onTotalScroll: function() {
                if (typeof _mCustomScrollbar_onTotalScroll === "function") {

                    _mCustomScrollbar_onTotalScroll(this);
                }
            }
        },
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside",
        setHeight: false,
        autoDraggerLength: false,
        autoExpandScrollbar: false,
        snapAmount: 59,
        mouseWheel: {
            enable: true,
            scrollAmount: 59,
            normalizeDelta: true
        },
        keyboard: {
            enable: true,
            scrollType: "stepped",
        },
        scrollInertia: 400
    });

    //2020-03-25 반영
    //.scroll_con의 경우 exchange에서 따로 빼서 쓰고, allcoin또한 빼서 쓰기때문에 제거함(동적 태그)
    $('.search_txt, .coin.exchange.watchlist_list, .abnormal_price, #tab_currency .currency').mCustomScrollbar({
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside",
        mouseWheelPixels: 100 /* 2019-09-20 속도 수정 */
    });

    $(".layer_pop.addcoin #tab01 .coins").mCustomScrollbar({
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside"
    });
    $(".layer_pop").find(".coins").mCustomScrollbar({
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside"
    });
    // 2019-08-02 수정
    $(".layer_pop").find(".info").mCustomScrollbar({
        axis: "y",
        scrollButtons: { enable: true },
        theme: "3d",
        scrollbarPosition: "outside"
    });
}

$(document).ready(function() {
    //layer popup
    var $mask = $(".mask");

    setGlobalLocale();

    //CmnUtil.changeColorNum($('#futureData')); //#futureData가 주석처리되어 있어서 사용하지않음...

    screen(); //화면 스크롤 설정

    $(window).resize(function() { //창 사이즈 조정했을 때 화면 설정
        screen();
    });

    publishingJS(); //top 버튼 설정, 거래소 즐겨찾기에 추가하고 뺄때 class에 on 더하고 빼는 로직

    bindButtonsHeader(); //goMenu 클래스가 있는 태그를 클릭했을 때 이동하는 url 설정

    showCookieAccept(); //isFirstVisit key값을 가져와서 T이면 쿠키 승락 화면을 hide, 값이 T가 아니면 화면을 show


    //[2019-10-04] 유병현 유저 접속 수를 위한 쿠키 설정
    //showCookie로 쿠키를 사용을 알리고, loginAndGet에 쓸 id값을 미리 쿠키로 발급받기 때문에 그 중간에 삽입.
    userCookie(); //userSeq와 userToday값을 설정한다

    loginAndGetPersonalData();

    getCoinList(); // 코인리스트 가져오기. 

    getExchangeList(); // 거래소 정보 가져오기.

    headerPageInit(); // 최종 페이지 변화값 보여주기

    GoogleUtil.drive.setGoogleDriveUtil(drawGoogleDriveFileList, isGoogleDriveReadyFn, adaptData, convertToFile);

    $('.nav_wrap .right.cf').show(); //헤더부분 처음에 숫자가 너무커서 보기싫은거 가렸다가 마지막에 보여줌.

});

function publishingJS() {
    //top버튼
    var $scrollbtn = $(".top_btn"); //왼쪽 화면 포트폴리오 코인 리스트 맨 위로 가기버튼
    $scrollbtn.on("click", function() {
        $('.topline').mCustomScrollbar('scrollTo', "top", { scrollInertia: 0 }, { scrollEasing: "easeOut" });
        return false;
    });

    //2020-01-09 우측화면 top버튼 수정
    var $scrollbtnright = $(".top_btn_right"); //오른쪽 화면 BUY/SELL 탭 & 트위터 맨 위로 가기버튼
    $scrollbtnright.on("click", function() {
        $(".toplineright").mCustomScrollbar("scrollTo", "top", { scrollInertia: 0 }, { scrollEasing: "easeOut" });
        return false;
    });

    // 거래소 즐겨찾기
    $('.exch_list .swiper-slide li a').click(function() {
        if ($(this).parent().hasClass('on') == false) {
            $(this).parent().addClass('on');
        } else {
            $(this).parent().removeClass('on');
        }
    });

}

//[2019-10-04] 유병현 유저 접속 수를 위한 쿠키 설정
function userCookie() {

    //console.log('user쿠키 시작')
    //console.log('userSeq: '+CookieUtil.get('userSeq'));
    //console.log('userToday: '+ CookieUtil.get('userToday'));

    //추후에 param값을 넘기게 된다면 사용하면됩니다. 
    //[param]var params = {userSeq: '', userToday: ''};

    //사이트에 처음 방문한 사용자면 (=userSeq가 쿠키에 없으면)
    if (null == CookieUtil.get('userSeq')) {
        //user PK발행
        AjaxUtil.get('/mp/cc/api/userSequence', null, function(data) {
            if (data.retCd == '0000') {
                CookieUtil.set('userSeq', data.userSeq);

                //user 접속 수 통계 +1
                AjaxUtil.get('/mp/st/userAttendance', null, function(data) {
                    if (data.retCd == '0000') {
                        CookieUtil.set('userToday', data.userToday, 'TODAY'); //expires가 TODAY면 다음날 00:00:00에 만료됨
                    }
                }, false);
            }
        }, false);

    } else { //굳이 이게 필요하나??
        //사이트에 오늘 처음 방문이면 (=userToday가 쿠키에 없으면)
        if (null == CookieUtil.get('userToday')) {
            //[param]params.userSeq = CookieUtil.get('userSeq');
            //user 접속 수 통계 +1
            AjaxUtil.get('/mp/st/userAttendance', null, function(data) {
                if (data.retCd == '0000') {
                    CookieUtil.set('userToday', data.userToday, 'TODAY');
                }
            }, false);
        }
    }

    //console.log('userSeq: '+CookieUtil.get('userSeq'));
    //console.log('userToday: '+ CookieUtil.get('userToday'));
    //console.log('user쿠키 끝');
}


function drawGoogleDriveFileList(data) {

    if (CmnUtil.size(data) > 0) {

        var sortedList = getSortingList(data, 'name', 'desc');
        $('#googleDriveLayerpop .coins .liList').append('');
        let blankElement = $(document.createDocumentFragment());
        let blankElement1 = $(document.createDocumentFragment());
        let blankElement2 = $(document.createDocumentFragment());
        let blankElement3 = $(document.createDocumentFragment());

        let effCnt = 0;

        for (let i in sortedList) {
            var searchItem = null;
            if ('application/vnd.google-apps.folder' === data[sortedList[i]]['mimeType']) {
                //				searchItem = $('<li><span class="fileSeq">(폴더) ' + data[sortedList[i]]['name']+ '</span><input type="checkbox" name="fileSeq" class="exclusiveCheck folder" value="'+data[sortedList[i]]['id']+'"></li>');
                //				blankElement1.append(searchItem);
            } else if ('application/vnd.google-apps.document' === data[sortedList[i]]['mimeType']) {
                //				searchItem = $('<li><span class="fileSeq">(google Doc) ' + data[sortedList[i]]['name']+ '</span><input type="checkbox" name="fileSeq" class="exclusiveCheck googleDoc" value="'+data[sortedList[i]]['id']+'"></li>');
                //				blankElement3.append(searchItem);

            } else {
                //파일 리스트를 불러올 경우 로컬에서 생성해서 구글드라이브에 업로드한 파일도 읽어와야 하기때문에 mycoinp단어를 찾음
                if (data[sortedList[i]]['name'].indexOf("mycoinp") > -1 && data[sortedList[i]]['name'].endsWith(".csv")) {
                    effCnt++;
                    searchItem = $('<li><span class="fileSeq">(file) ' + data[sortedList[i]]['name'] + '</span><input type="checkbox" name="fileSeq" class="exclusiveCheck file" value="' + data[sortedList[i]]['id'] + '"></li>');
                    searchItem.data('name', data[sortedList[i]]['name']);
                    blankElement2.append(searchItem);
                }

            }

        }
        blankElement.append(blankElement1);
        blankElement.append(blankElement2);
        blankElement.append(blankElement3);


        if (effCnt < 1) {
            searchItem = $('<li><span>Cannot find .csv file contains with "mycoinp"</span></li>');
            blankElement2.append(searchItem);
        }

        $('#googleDriveLayerpop .coins .liList').append(blankElement);

        $('#googleDriveLayerpop .coins .exclusiveCheck').on('click', function(e) {
            $('#googleDriveLayerpop .coins .exclusiveCheck').prop('checked', false);

            // var sentence = "Is it correct ["+ $(this).closest('li').data('name') +"] ?";
            var sentence = "Are you sure to import?";
            if (confirm(sentence)) {
                $(this).prop('checked', true);
                GoogleUtil.drive.fileDownload($(this).val());
            }
        });

        $('#googleDriveLayerpop').find('.liList').show();
        $('#googleDriveLayerpop').find('.noLiList').hide();

    } else {
        $('#googleDriveLayerpop').find('.noLiList').show();
        $('#googleDriveLayerpop').find('.liList').hide();
    }

    LayerFunction.openLayers('#googleDriveLayerpop');

}


function showCookieAccept() {

    let isFirstVisit = CookieUtil.get("isFirstVisit");

    if (isFirstVisit === 'T') {
        $('#acceptCookies').hide();
    } else {
        $('#acceptCookies').show();
    }


}

function setGlobalLocale() {

    let lang = CookieUtil.get("lang");
    let currency = CookieUtil.get("currency");
    let decimal = CookieUtil.get("decimal");
    //alert(decimal); -> null

    console.log('lang : ' + lang + ", currency : " + currency + ", decimal : " + decimal);
    if (lang === null || lang === undefined) {
        lang = 'en';
        //		CookieUtil.set("lang", lang);
    }
    if (currency === null || currency === undefined) {
        currency = '100001';
        //		CookieUtil.set("currency", currency);
    }
    if (decimal === null || decimal === undefined) {
        decimal = 'a';
    }

    GlobalLocale.lang = lang;
    GlobalLocale.currency = currency;
    GlobalLocale.decimal = decimal;

    let rate = $('#rate').val();
    let qSymbol = $('#qSymbol').val();

    if (rate != null && rate !== undefined && rate !== '') {
        ////alert("rate : " +rate);
        GlobalLocale.rate = numeral(rate).value(); //Javascript 숫자 포맷 라이브러리
    } else {
        GlobalLocale.rate = 1;
    }

    if (qSymbol != null && qSymbol !== undefined && qSymbol !== '') {
        GlobalLocale.qSymbol = qSymbol;
    } else {
        GlobalLocale.qSymbol = '$';
    }

    //쿠키에 있는 decimal에 맞게 라디오버튼 체크
    if (GlobalLocale.decimal === 'b') {
        $('#decimal2').prop('checked', true);
    } else {
        $('#decimal1').prop('checked', true);
    }

}

function bindButtonsHeader() {

    // 메뉴버튼
    $('.goMenu').click(function() {

        var menuThis = $(this);
        if (menuThis.hasClass('pf')) {
            location.href = "/mp/pf/pfList";
        } else if (menuThis.hasClass('wl')) {
            //          location.href = "/list.do";
        } else if (menuThis.hasClass('ac')) {
            location.href = "/mp/ac/acList";
        } else if (menuThis.hasClass('ex')) {
            location.href = "/mp/ex/exList";

            //2019-12-11 유주임 햄버거메뉴 추가	
        } else if (menuThis.hasClass('notice')) {
            location.href = "/mp/menu/notice";
        } else if (menuThis.hasClass('aboutus')) {
            location.href = "/mp/menu/aboutus";
        } else if (menuThis.hasClass('termsofuse')) {
            location.href = "/mp/menu/termsofuse";
        } else if (menuThis.hasClass('privacypolicy')) {
            location.href = "/mp/menu/privacypolicy";
        } else if (menuThis.hasClass('cookiepolicy')) {
            location.href = "/mp/menu/cookiepolicy";
        } else if (menuThis.hasClass('businessproposal')) {
            location.href = "/mp/menu/businessproposal";
        } else if (menuThis.hasClass('advertising')) {
            location.href = "/mp/menu/advertising";
        } else if (menuThis.hasClass('changelog')) {
            location.href = "/mp/menu/changelog";


        } else if (menuThis.hasClass('senddev')) {
            location.href = "/mp/menu/senddev";
        } else if (menuThis.hasClass('sendbug')) {
            location.href = "/mp/menu/sendbug";


        } else if (menuThis.hasClass('api')) {
            location.href = "/mp/menu/api";
        } else if (menuThis.hasClass('widget')) {
            location.href = "/mp/menu/widget";
        } else if (menuThis.hasClass('faq')) {
            location.href = "/mp/menu/faq";
        }

    });

    $('.plusMenu').click(function() {
        let menuThis = $(this);

        if (menuThis.hasClass('highLow')) {
            location.href = "/mp/plus/highLow";
        }
    });

    // CSV로 저장하기 ( 내컴퓨터에 )
    $('#saveCsvFile').on('click', function() {
        saveCsv();
    });

    // CSV에서 불러오기  ( 내컴퓨터로부터 )
    $('#loadCsvFile').on('click', function() {
        loadCsv();
    });

    // CSV로 저장하기 ( 구글드라이브에 )
    $('#saveCsvGoogle').on('click', function() {
        saveCsvGoogle();
    });

    // CSV에서 불러오기  ( 구글드라이브로부터 )
    $('#loadCsvGoogle').on('click', function() {
        loadCsvGoogle();
    });

    //2019-12-03화폐/언어선택
    $(".load_wrap .tab_btn li>a").on("click", function() {
        var link = $(this).attr("href");
        $(".select_load").hide();
        $(link).show();
        $(this).parent().addClass("on").siblings().removeClass("on");

        return false;

    });

    //2019-12-03 업로드/다운로드선택
    $(".select_cnl .tab_btn li>a").on("click", function() {
        var link = $(this).attr("href");
        $(".select_wrap").hide();
        $(link).show();
        $(this).parent().addClass("on").siblings().removeClass("on");

        return false;

    });

    //2019-12-03 통화변경
    $("header>.inner>.right>.btn").click(function() {
        var cur_ul = $(".select_cnl");
        if (cur_ul.is(":hidden")) {
            cur_ul.show();
        } else {
            cur_ul.hide();
        }
    });
    //2019-12-03 업로드/다운로드 변경
    $("header>.inner>.right>.btn_load").click(function() {
        var cur_ul = $(".load_wrap");
        if (cur_ul.is(":hidden")) {
            cur_ul.show();
        } else {
            cur_ul.hide();
        }
    });

    /* 2020-03-18 유주임 죽임 (View의 경우 이벤트를 죽였다가 아닐때는 살려야하는데 공통에있으면 그걸 못함.)    
        // 2019-11-26 수정 라디오 선택
        $("#tab01_1 label.radio").on('click',function () {
        	
        	console.log('하이루!');
    //    	2020.02.04 정달 막음. 중복됨
    //        var nm = $(this).find("input").attr("name");
    //        $("input[name=" + nm + "]").parents().removeClass("on");
    //        $(this).addClass("on");
            $(".radio").siblings("ul").hide();
            var cur_ul = $(this).siblings("ul");
            if (cur_ul.is(":hidden")) {
                cur_ul.show();
            } else {
                cur_ul.hide();
            }
        });
    */
    //2020-01-30 다른영역 선택시 숨기기 추가
    $(document).mouseup(function(e) {

        //search_wrap은 포트폴리오에서 해결하는 것으로 알고 있습니다.
        var container = $(" .select_cnl, .load_wrap , .btn_lang>ul, .data_list .sell_select>ul , .data_con .sell_select>ul, .layer_pop .layer_cur, .layer_pop .coin_sel");

        if (container.has(e.target).length === 0) {
            container.hide();

        }
    });

    //쿠키 close
    $('.cookie .close, .cookie .accept').on('click', function() {
        CookieUtil.set("isFirstVisit", 'T');
        $(this).parents('.cookie').fadeOut();
    });


    //2019-08-07 upload 추가
    $("header .upload>li").click(function() {
        var show_ul = $(this).children('ul');
        if (show_ul.is(':hidden')) {
            show_ul.show();
        } else {
            show_ul.hide();
        }
    });

    //	레이어 닫기 버튼
    $('.closeLayerBtn').on('click', function() {
        LayerFunction.closeLayers(this);
        //2019-12-27 유주임 구글 드라이브 리스트 비우기 (안그러면 계속 리스트가 쌓임)
        $('.liList').html('');
    });

    //2019-12-11 양대리님의 햄버거 메뉴  js를 추가했습니다.
    //2019-12-10 햄버거 메뉴
    $("header>.inner>.left>.left_btn").click(function() {
        $(this).toggleClass("is-active");
        var cur_ul = $(".left_menu");
        if (cur_ul.is(":hidden")) {
            cur_ul.show();
        } else {
            cur_ul.hide();
        }
    });
    //2020-02-04 faq **(공통으로 쓰는게아니고 faq페이지에서만 쓰는데 이게 여기있어야되는게 맞는건가 싶습니다.)
    $(".inq_list>li>.state>h2>a").click(function() {
        if ($(this).parents(".state").next(".box").is(':hidden')) {
            $(".state").next(".box").slideUp('normal');
            $(".inq_list>li>.state>h2>a").removeClass("on");
            $(this).addClass("on");
            $(this).parents(".state").next(".box").slideDown('normal');
        } else {
            $(this).removeClass("on");
            $(this).parents(".state").next(".box").slideUp('normal');

        }
    });
    // 2019-12-16 수정
    //말흐르기
    $(".exchange_ico .country_name").each(function() {

        if ($(this).text().length > 235) {
            $(this).addClass("move");
        } else {
            $(this).removeClass("move");
        }

    });
    // 2020-01-16 추가
    //말흐르기
    $(".allcoin .name .small_name").each(function() {

        if ($(this).width() > 156) {
            $(this).addClass("move");
        } else {
            $(this).removeClass("move");
        }

    });

    //2020-02-04 hi-low layerpopuop
    $(".hilow_setting").on("click", function() {
        $(".hilowpopup_wrap").show();
    });
    $(".hilowpopup_wrap .btn").on("click", function() {
        $(".hilowpopup_wrap").hide();
    });

    //2020-02-04 hi-low tab
    /* 유주임 직접처리
    $(".plus_tab ul li a").on("click", function () {
    	$(this).parent().addClass("on").siblings().removeClass("on");
    	return false;
    });
    */

    //2020-01-30 decimal 클릭이벤트 추가
    //통일성맞게 a태그에 직접걸려고했지만 label때문에 이벤트가 씹힘
    $('#decimal1').on('click', function() {
        chgDecimal($(this).val());
    });
    $('#decimal2').on('click', function() {
        chgDecimal($(this).val());
    });


    //2020-03-24 알림 메뉴
    $("header>.inner .notice_btn").click(function() {
        $(this).toggleClass("is-active");
        var cur_ul = $(".notice_menu");
        if (cur_ul.is(":hidden")) {
            cur_ul.show();
        } else {
            cur_ul.hide();
        }
    });
    //2020-03-24 알림 메뉴 닫기
    $("header>.inner .notice_close").click(function() {
        $("header>.inner .notice_menu").hide();
    });

    //2020-07-10 검색창 삭제버튼 
    $(".search input").on("input", function() {
        if ($(this).val() == '') {
            $(this).siblings(".input_del").hide();
        } else {
            $(this).siblings(".input_del").show();
        }
    });

    //2020-07-10 레이어 검색창 삭제버튼
    $(".layer_pop.addcoin section input").on("input", function() {
        if ($(this).val() == '') {
            $(this).siblings("button").hide();
        } else {
            $(this).siblings("button").show();
        }
    });
}

function saveCsvGoogle() {
    if (!isGoogleDriveReadyFlag) {
        //alert("Goole Drive Api is not ready yet.");
        return;
    }

    if (!GoogleUtil.drive.isSingedIn) {
        GoogleUtil.drive.doLogin();
    }

    if (GoogleUtil.drive.isSingedIn) {
        GoogleUtil.drive.fileUpload();
    }
}

function loadCsvGoogle() {
    alert(isGoogleDriveReadyFlag);
    if (!isGoogleDriveReadyFlag) {
        alert("Goole Drive Api is not ready yet.");
        return;
    }

    if (!GoogleUtil.drive.isSingedIn) {
        GoogleUtil.drive.doLogin();
    }

    if (GoogleUtil.drive.isSingedIn) {
        GoogleUtil.drive.listFiles();
    }

}

function headerPageInit() {

    var nowMenu = document.getElementById('nowMenuFlag').value;
    $('.goMenu').removeClass('on');
    $('.goMenu.' + nowMenu).addClass('on');

    calculateMenuCnt(); // 메뉴 항목 갯수 보여주기.
    $('select').selectric(); //select 폼을 꾸며주는 jQuery 이벤트 핸들러 라이브러리
}

function loginAndGetPersonalData() {
    //alert("_userIdKey : " + JSON.stringify(LocalStorage.get(_userIdKey)));
    _myCoinpUserInfo = LocalStorage.get(_userIdKey);
    //alert("_myCoinpUserInfo : " + JSON.stringify(_myCoinpUserInfo));

    // 로그인한 적이 없다면 로그인 시킴.
    if (_myCoinpUserInfo == null || _myCoinpUserInfo == undefined || _myCoinpUserInfo == '' || _myCoinpUserInfo.id != _userId) {
        console.log("LOGIN_1ST]----------------");

        //        getCoinList();

        LocalStorage.remove(_userIdKey);
        _myCoinpUserInfo = new Object();

        _myCoinpUserInfo["id"] = _userId;
        _myCoinpUserInfo["data"] = null;
        _myCoinpUserInfo["memo"] = null;

        LocalStorage.set(_userIdKey, _myCoinpUserInfo);
        //alert("_userIdKey : " + JSON.stringify(LocalStorage.get(_userIdKey)));
    }

}


// 메뉴 항목 갯수 보여주기
function calculateMenuCnt() {
    //alert("calculateMenuCnt");
    //alert("_myCoinpUserInfo : " + JSON.stringify(_myCoinpUserInfo));
    if (_myCoinpUserInfo != null && _myCoinpUserInfo != undefined) {
        //alert("_myCoinpUserInfo['data'] : " + JSON.stringify(_myCoinpUserInfo["data"]));
        cnt = CmnUtil.size(_myCoinpUserInfo['data']);
        ////alert("calculateMenuCnt");
        ////alert("cnt:"+cnt); cnt
    }

    //alert("_coinMapListCur : " + JSON.stringify(_coinMapListCur));
    //alert("_exchangeList : " + JSON.stringify(_exchangeList));

    $('#pfCnt').text(cnt);

    $('#acCnt').text(CmnUtil.size(_coinMapListCur));


    $('#exCnt').text(CmnUtil.size(_exchangeList));

}

function loadCsv() {
    console.log("loadCsv==========================");

    FileUtil.openTextFile(function(data) {
        adaptData(data);
    });

}

//TODO Import!!
function adaptData(data) {
    // 파싱 및 save
    console.log("adaptData");
    console.log("data : " + data);
    //    
    try {

        let allRows = data.split(/\r?\n|\r/);
        let allRowsCnt = allRows.length;
        let myTradeMap = {};
        let myMemoMap = {};
        let myCoinpUserInfo = {};
        let myFavCoins = [];
        let myFavExs = [];
        let myAcFavExs = [];

        let startRow = 1;

        /*
         * CSV 파일 Version 관리
         * 
         * 1. version 이 명시 되지 않은 csv 파일은 최초 버전
         * 2. CSV 첫번째 줄은 version, userSeq 등 기본 Data
         * 3. CSV 세번째 줄 부터는 포트폴리오 Data
         */
        let rowKeyCells = allRows[0].split(',');
        if (rowKeyCells[0] !== 'version') {
            console.log('CRV version is empty');
            // 버전 없음
            if (allRows[0] !== 'seq,curCoin,date,type,isFree,buyAmount,amount,base,curBase,fiatBase,buyExch,parentSeq,symbol,name,holdWallet,regDttm,fiat,fiatUSD') {
                throw "올바른 mycoinp 데이터가 아닙니다.";
            }
        } else {

            let rowCells = allRows[1].split(',');
            if (rowCells[0] == 'v1') {
                console.log(`CRV version is "${rowCells[0]}"`);
                /*
                 * version 추가
                 * userSeq 추가
                 * 기존 키들은 3번째 줄부터 시작하는 것으로 변경
                 */
                startRow = 3;

                if (allRows[2] !== 'seq,curCoin,date,type,isFree,buyAmount,amount,base,curBase,fiatBase,buyExch,parentSeq,symbol,name,holdWallet,regDttm,fiat,fiatUSD') {
                    throw "올바른 mycoinp 데이터가 아닙니다."
                }

                // userSeq 셋팅
                if (confirm("data 가 덮어 씌워 집니다.")) {
                    // cookie userSeq 가 CSV 에 있는userSeq 로 덮어 씌어 짐
                    let userSeq = rowCells[1];
                    // let oldUserSeq = CookieUtil.get('userSeq');
                    CookieUtil.set('userSeq', userSeq);

                    localStorage.removeItem("userGasSettingInLocalStorage");

                    if (myToken && myToken != '') {
                        /*
                         * 브라우저 fcmToken 의 userSeq 가 Csv 파일의 userSeq 로 대체 됨
                         */

                        // oldUserSeq 와 fcmToken csvUserSeq 로 대체 
                        $.ajax({
                            url: "/mp/api/fcm/updateTokenUserSeq",
                            type: 'post',
                            data: {
                                // "oldUserSeq": oldUserSeq,
                                "newUserSeq": userSeq,
                                "fcmToken": myToken,
                                "device_type": "w"
                            },
                            success: function(data) {
                                callback(data.data);
                            },
                            function(err) {

                            }
                        });
                    }
                }
            }
        } // rowKeyCells[0] !== 'version'

        for (let i = startRow; i < allRowsCnt; i++) {

            if (allRows[i].length < 1) {
                continue;
            }

            let rowCells = allRows[i].split(',');

            if (rowCells[0] === 'MEMO_DATA') {

                let memoTxt = '';
                let coinCd = rowCells[1];
                memoTxt = rowCells[2] + '';

                myMemoMap[coinCd] = decodeURIComponent(memoTxt);

            } else if (rowCells[0] === 'FAV_COIN') {
                myFavCoins.push(rowCells[1]);
            } else if (rowCells[0] === 'FAV_EX') {
                if (_exchangeList[rowCells[1]] !== undefined && _exchangeList[rowCells[1]] !== null) {
                    myFavExs.push(rowCells[1]);
                }

            } else if (rowCells[0] === 'AC_FAV_EX') {
                if (_exchangeList[rowCells[1]] !== undefined && _exchangeList[rowCells[1]] !== null) {
                    myAcFavExs.push(rowCells[1]);
                }
            } else {

                let coinCd = rowCells[1] + '';
                let tradeData = {};

                if (coinCd === '0' || coinCd === null || coinCd === undefined) {
                    continue;
                }

                tradeData['seq'] = rowCells[0] + '';
                tradeData['curCoin'] = rowCells[1] + '';
                tradeData['date'] = rowCells[2] + '';
                tradeData['type'] = rowCells[3] + '';
                tradeData['isFree'] = (rowCells[4] + '').toLowerCase();
                tradeData['buyAmount'] = rowCells[5] * 1;
                tradeData['amount'] = rowCells[6] * 1;
                tradeData['base'] = rowCells[7] + '';
                tradeData['curBase'] = rowCells[8] * 1;
                tradeData['fiatBase'] = rowCells[9] * 1;
                tradeData['buyExch'] = decodeURIComponent(rowCells[10]) + '';
                tradeData['parentSeq'] = rowCells[11] + '';
                tradeData['symbol'] = rowCells[12] + '';
                tradeData['name'] = rowCells[13] + '';
                tradeData['holdWallet'] = decodeURIComponent(rowCells[14]) + '';
                tradeData['regDttm'] = rowCells[15] + '';

                //TODO 사장님 요구사항 추가
                tradeData['fiat'] = rowCells[16] + '';
                tradeData['fiatUSD'] = rowCells[17] * 1;

                if (myTradeMap[coinCd] === null || myTradeMap[coinCd] === undefined) {
                    myTradeMap[coinCd] = {};
                }

                myTradeMap[coinCd][rowCells[0]] = tradeData;

            }

        }
        //    
        myCoinpUserInfo["data"] = myTradeMap;
        myCoinpUserInfo["memo"] = myMemoMap;
        myCoinpUserInfo['favCoins'] = myFavCoins;
        myCoinpUserInfo['acFavEx'] = myAcFavExs;
        myCoinpUserInfo['favEx'] = myFavExs;
        myCoinpUserInfo["id"] = "myCoinpUserId_";
        // console.log("LOADING_SUCCESS, " + CmnUtil.size(myTradeMap) + " trade Data, " + CmnUtil.size(myMemoMap) + " memo Data Has Been Added." );
        LocalStorage.set("myCoinpUserInfo", myCoinpUserInfo);

        //alert("upload complete!");

        location.reload();
    } catch (e) {
        console.log(e);
        //alert(e);
    } finally {
        GoogleUtil.drive.doLogout();
        LayerFunction.closeLayers();
    }


}

function convertToFile() {

    let version = 'v1';

    let userIdKey = "myCoinpUserInfo";
    let myCoinpUserInfo = LocalStorage.get(_userIdKey);
    let carrageReturn = '\r\n';
    //fiat, fiatUSD 추가
    let csvLawFormStr = '';

    try {

        if (myCoinpUserInfo !== null && myCoinpUserInfo !== undefined) {
            let sprt = ',';

            let now = new Date();
            let myTradeMap = myCoinpUserInfo['data'];
            let myMemoMap = myCoinpUserInfo['memo'];
            let myFavCoins = myCoinpUserInfo['favCoins'];
            let myFavExs = myCoinpUserInfo['favEx'];
            let myAcFavExs = myCoinpUserInfo['acFavEx'];
            let userSeq = CookieUtil.get('userSeq');

            csvLawFormStr += 'version' + sprt + 'userSeq' + carrageReturn;
            csvLawFormStr += version + sprt + userSeq + carrageReturn;
            csvLawFormStr += 'seq,curCoin,date,type,isFree,buyAmount,amount,base,curBase,fiatBase,buyExch,parentSeq,symbol,name,holdWallet,regDttm,fiat,fiatUSD' + carrageReturn;


            for (let coinCd in myTradeMap) {
                let coinData = myTradeMap[coinCd];
                if (coinData !== null && coinData !== undefined && CmnUtil.size(coinData) > 0) {
                    for (let seq in coinData) {


                        let data = coinData[seq];
                        if (data !== null && data !== undefined && CmnUtil.size(data) > 0) {

                            csvLawFormStr += data['seq'] + sprt;
                            csvLawFormStr += data['curCoin'] + sprt;
                            csvLawFormStr += data['date'] + sprt;
                            csvLawFormStr += data['type'] + sprt;
                            csvLawFormStr += data['isFree'] + sprt;
                            csvLawFormStr += data['buyAmount'] + sprt;
                            csvLawFormStr += data['amount'] + sprt;
                            csvLawFormStr += data['base'] + sprt;
                            csvLawFormStr += data['curBase'] + sprt;
                            csvLawFormStr += data['fiatBase'] + sprt;
                            csvLawFormStr += encodeURIComponent(data['buyExch']) + sprt;
                            csvLawFormStr += data['parentSeq'] + sprt;
                            csvLawFormStr += data['symbol'] + sprt;
                            csvLawFormStr += data['name'] + sprt;
                            csvLawFormStr += encodeURIComponent(data['holdWallet']) + sprt;
                            csvLawFormStr += data['regDttm'] + sprt;

                            //TODO 사장님 요구사항 추가
                            csvLawFormStr += data['fiat'] + sprt;
                            csvLawFormStr += data['fiatUSD'] + carrageReturn;

                        }
                    }
                }
            }
            if (CmnUtil.size(myMemoMap) > 0) {
                for (let coinCd in myMemoMap) {
                    let data = myMemoMap[coinCd];
                    if (data !== null && data !== undefined && CmnUtil.size(data) > 0) {
                        csvLawFormStr += 'MEMO_DATA' + sprt;
                        csvLawFormStr += coinCd + sprt;
                        csvLawFormStr += encodeURIComponent(data) + carrageReturn;
                    }
                }
            }


            if (CmnUtil.size(myFavCoins) > 0) {
                for (let coinCd in myFavCoins) {
                    let data = myFavCoins[coinCd];
                    if (data !== null && data !== undefined && CmnUtil.size(data) > 0) {
                        csvLawFormStr += 'FAV_COIN' + sprt;
                        csvLawFormStr += data + carrageReturn;
                    }
                }
            }

            if (CmnUtil.size(myFavExs) > 0) {
                for (let index in myFavExs) {
                    let data = myFavExs[index];
                    if (data !== null && data !== undefined && CmnUtil.size(data) > 0) {
                        csvLawFormStr += 'FAV_EX' + sprt;
                        csvLawFormStr += data + carrageReturn;
                    }
                }
            }

            if (CmnUtil.size(myAcFavExs) > 0) {
                for (let index in myAcFavExs) {
                    let data = myAcFavExs[index];
                    if (data !== null && data !== undefined && CmnUtil.size(data) > 0) {
                        csvLawFormStr += 'AC_FAV_EX' + sprt;
                        csvLawFormStr += data + carrageReturn;
                    }
                }
            }

        }
    } catch (e) {
        // TODO: handle exception
    } finally {
        //		GoogleUtil.drive.doLogout();
    }
    return csvLawFormStr;
}

function saveCsv() {
    let csvLawFormStr = convertToFile();
    let pom = document.createElement('a');
    let blob = new Blob([csvLawFormStr], { type: 'text/csv;charset=utf-8,\uFEFF' });
    let today = new Date().simpleDateFormat('YYMMDD');
    // pom.setAttribute('download', 'new_coin_data.csv');
    pom.setAttribute('download', 'mycoinp' + today + '.csv');

    let url = URL.createObjectURL(blob);
    pom.href = url;
    pom.click();
}

function saveScvGoogle() {
    //		let csvLawFormStr = convertToFile();
    //		
    //		AjaxUtil.get("/uploadToGoogle.aj", params , function(data) {
    //    	  if ( _coinMeta === null || _coinMeta === undefined || CmnUtil.size(_coinMeta) < 1 
    //                || _coinMeta.lastUpdateHash === null || _coinMeta.lastUpdateHash === undefined
    //                || _coinMeta.coinList === null || _coinMeta.coinList === undefined || CmnUtil.size(_coinMeta.coinList) < 1
    //                || _coinMeta.lastUpdateHash !== data.lastUpdateHash ) {
    //    		  _coinMeta = data;
    //    		  LocalStorage.remove('coinMeta');
    //    		  LocalStorage.set('coinMeta', _coinMeta);
    //    	  }
    //      }, false);
}

// 코인리스트를 로컬에서 가져옴. 하루에 한번씩 리프레쉬 한다.
function getCoinList() {
    ////alert("getCoinList");

    _coinMeta = LocalStorage.get('coinMeta');
    //alert("_coinMeta : " + JSON.stringify(_coinMeta));
    let params = {
            lastUpdateHash: _coinMeta === null || _coinMeta === undefined ? '' : _coinMeta.lastUpdateHash === null || _coinMeta.lastUpdateHash === undefined ? '' : _coinMeta.lastUpdateHash
        }
        //alert("params.lastUpdateHash : " + params.lastUpdateHash); 처음 접속시에는 ''(비어있음)
    AjaxUtil.get("/mp/cc/api/getCoinList", params, function(data) {

        //console.log("getCoinList : " + data);

        if (_coinMeta === null || _coinMeta === undefined || CmnUtil.size(_coinMeta) < 1 ||
            _coinMeta.lastUpdateHash === null || _coinMeta.lastUpdateHash === undefined ||
            _coinMeta.coinList === null || _coinMeta.coinList === undefined || CmnUtil.size(_coinMeta.coinList) < 1 ||
            _coinMeta.lastUpdateHash !== data.lastUpdateHash) {
            console.log("COIN META IS UPDATED!!")
            _coinMeta = data;

            LocalStorage.remove('coinMeta');

            LocalStorage.set('coinMeta', _coinMeta);

        }

    }, false);
    console.log("_coinMeta.coinList : " + JSON.stringify(_coinMeta.coinList));
    let tempCoinList = _coinMeta.coinList;

    for (let index in tempCoinList) {
        let coinCd = tempCoinList[index]['coin_cd'];
        //console.log("coinCd : " + coinCd);
        //console.log("tempCointList["+index+"]:"+ JSON.stringify(tempCoinList[index]));
        _coinMapList[coinCd] = tempCoinList[index];
        //console.log("tempCointList["+index+"]['avg']:"+ tempCoinList[index]['avg']);

        if (tempCoinList[index]['avg'] !== null && tempCoinList[index]['avg'] !== undefined && tempCoinList[index]['avg'] !== 0) {
            _coinMapListCur[coinCd] = tempCoinList[index];
        }
    }

    console.log("!!!!!! _coinMapList : " + JSON.stringify(_coinMapList));
}

//ajax로 거래소 리스트를 가져옴 >> 무조건 보내도록 수정
function getExchangeList() {
    _exchangeList = JSON.parse(document.getElementById('exchangeList').value);
    console.log("getExchangeList");
    console.log(JSON.stringify(_exchangeList));
    //console.log(document.getElementById('exchangeList').value );
}

function chgFiat(data) {
    //data : fiat코드가 들어옴
    CookieUtil.set("currency", data);
    //	location.href = "<%=self%>";
    location.reload();
}

function chgLang(data) {
    //	console.log(data);
    CookieUtil.set("lang", data);
    //	location.href = "<%=self%>";
    location.reload();
}

function chgDecimal(data) {
    console.log(data);
    CookieUtil.set("decimal", data);
    //	location.href = "<%=self%>";
    location.reload();
}

function simpletest() {
    var dt = new Date('2019-05-31');
    dt.setMonth(dt.getMonth() - 1);
    console.log(dt);
}

function wsFutureInterface(data) {
    futureDrawer(data['data']);
}

function futureDrawer(futureData) {
    let target = $('#futureData');
    //	p: 0.015139267843740834, b: 70.4113200285392, c: "300001", d: "20190927", l: 9833.38}
    let closeDttm = new Date(CmnUtil.addHypenDate(futureData['d']));

    $('#closeDttm').text(closeDttm.toLocaleString(GlobalLocale.lang, { month: 'long' }) + " " + closeDttm.getDate() + ", " + closeDttm.getFullYear());

    let futureCoin = $('.futureCoin.btc');
    if (futureData['c'] === '300001') {
        futureCoin = $('.futureCoin.btc');
    } else {
        futureCoin = $('.futureCoin.eth');
    }
    futureCoin.find('.futurePrice').html(futureData['l'] * GlobalLocale.rate);
    futureCoin.find('.futureChg').html(futureData['p'] * 100);
    futureCoin.find('.futureBasis').html(futureData['b'] * GlobalLocale.rate);
    CmnUtil.changeColorNum(futureCoin);
}

function wsGasPriceInterface(data) {
    //	console.log('wsGasPriceInterface');
    wsGasPriceDrawer(data['data']);
}

function wsGasPriceDrawer(data) {
    //	console.log('wsGasPriceDrawer');
    //	document.getElementById('gas_slow').innerText = data['safeLow'] / 10;
    //	document.getElementById('gas_standard').innerText = data['average'] / 10;
    document.getElementById('gas_fast').innerText = data['fastest'];
    document.getElementById('gasPriceInUserSetting').innerText = data['fastest'];
    let gasTitle = "slow: " + data['safeLow'] + ", average: " + data['average'] + ", fastest: " + data['fastest'];
    document.getElementById('eth_gas_fee').title = gasTitle;
}

function pairSite(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

const headerFn = {
    searchCurrencyReset: function(obj) {
        document.getElementById('searchCurrency').value = '';
        headerFn.searchCurrency('');
    },
    searchCurrency: function(searchValue) {
        searchValue = searchValue.trim();
        //console.log("searchValue : " + searchValue);
        var currencyUl = document.querySelector('ul.currency');
        var innerDiv = currencyUl.getElementsByClassName('currencySymbol');
        var elementLi = currencyUl.getElementsByTagName('li');
        for (var i = 0; i < innerDiv.length; i++) {
            var className = innerDiv[i].classList[0];
            //console.log("innerDiv["+i+"].classList["+i+"] : " + innerDiv[i].classList[i]);
            //console.log("className : " + className);
            //console.log("className.indexOf(searchValue) : " + className.indexOf(searchValue));
            if (className.indexOf(searchValue) != -1) {
                elementLi[i].style.display = "block";
            } else {
                elementLi[i].style.display = "none";
            }
        }
    }
}