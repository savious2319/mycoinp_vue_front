const CmnUtil = {

    thd: null,

    dcm: null,

    changer: function(target) {
        target = target + "";
        target = target.replace(/,/gi, "C");
        target = target.replace(/\./gi, ",");
        target = target.replace(/C/gi, ".");
        return target;
    },

    size: function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            //console.log("obj.hasOwnProperty("+key+") : " + obj.hasOwnProperty(key));
            if (obj.hasOwnProperty(key)) size++;
        }
        //alert("size:"+size);
        return size;
    },

    isNull: function(obj) {
        if (obj == null || obj == undefined || obj == '') {
            return true;
        }
        return false;
    },

    //무조건 버림으로 변경
    numf: function(val, type, noDecimal) {
        //FutureData에서 EL로 곱셈을 해버리면 조금 큰 수라도 지수표현식으로 주는데 
        //숫자의경우 numeral(1.189152768E7).value() = 11891527.68
        //문자의경우 numeral('1.189152768E7').value() = 1.1891527687
        //이런식으로 되서 Number()로 형변환 일단 해줌.

        //Number() : 문자열을 숫자로 변환하는 함수
        //numeral : 통화 표시, 천 단위 콤마 등 숫자 형식 지정할 때 유용한 라이브러리
        val = numeral(Number(val)).value();
        if (val == null || val == undefined) {
            return 0;
        }
        var returnVal = "";
        //무조건 양수로 변환 로직 위치 바꿈 
        var sign = false;
        if (val < 0) {
            val = val * (-1);
            sign = true;
        }

        //0.000001 보다 작을경우 지수표현이되므로 toFixed(8)로 문자열로 만들어줌.
        if (val < 0.000001 && val != 0) {
            val = val.toFixed(9).substring(0, 10);
            //0.0000 0001과 크거나 같을 경우  '0.0000 00xx'로 else 처리된다.
            //0.0000 0001보다 작을경우 '0.0000 0000'로  else if 처리된다.
        }

        //TODO 유주임 정수4자리 이상일때 반올림 추가 (포트폴리오는 정확한금액을 찍어줄지 사장님이 고민해보신다고 함!)
        if (val > 10000) {
            val = val.toFixed(1).split('.')[0]; //New 무조건 버림
            var addZero = '';

            for (var i = 4; i < val.length; i++) { //ex) 123456.length > 6 (4,5 두번 돈다)  
                addZero += '0';
            }
            val = val.substring(0, 4) + addZero; //ex) '1234'+'00'

            var temp;
            if (noDecimal) {
                temp = val;
            } else {
                temp = numeral(val).format('0,0'); //ex) 123,500
            }

            returnVal = temp;
        } else if (val >= 1000) { // 1000보다 큰경우 int형으로 노출

            var temp;
            val = val.toFixed(1).split('.')[0];
            if (noDecimal) {
                temp = val;
            } else {
                temp = numeral(val).format('0,0');
            }

            returnVal = temp;
            //여기서부터는 150.0 같은 경우 150으로 변경되어야기 때문에 numeral.value() 후 String 형변환
        } else if (val > 100) { // 100보다 큰경우 소숫점 한자리만 노출
            //toFixed() : 소수점 자리수 지정(자르기)
            //String() : 숫자를 문자열로 변환하는 함수
            //alert((val.toFixed(2).substring(0,5)));
            var temp = String(numeral(val.toFixed(2).substring(0, 5)).value()); //New 무조건 버림
            returnVal = temp;
        } else if (val > 10) { // 10보다 큰경우 소숫점 두자리만 노출
            var temp = String(numeral(val.toFixed(3).substring(0, 5)).value()); //New 무조건 버림
            returnVal = temp;
        } else if (val >= 1) {
            var temp = String(numeral(val.toFixed(4).substring(0, 5)).value());
            returnVal = temp;
        } else if (val === 0) {
            returnVal = "0";
            //[2020-01-31 유주임] 이제 coin가격을 생으로 보내주기 때문에 0과, '0.00000000'를 구분한다.
        } else if (val === '0.00000000') {
            returnVal = '<0.00000001';
        } else {
            //무조건 내림으로 다시 변경
            var tmp = String(val);
            var k = 0;
            for (var i = 2; i < tmp.length; i++) {
                if ('0' != tmp.charAt(i)) {
                    k = i + 4;
                    break;
                }
            }
            if (k > 10) {
                k = 10;
            }
            returnVal = tmp.substring(0, k);
        }
        let qsym_t = '<sup style="color:#808080;">' + GlobalLocale.qSymbol + '</sup>';

        if (GlobalLocale.decimal === 'b') {
            returnVal = CmnUtil.changer(returnVal);
        }

        if (type) {
            return (sign ? '-' : '') + returnVal;
        } else {
            return (sign ? qsym_t + '-' : qsym_t) + returnVal;
        }

    },

    //임시 테스트용 사장님이 상용반영전까지는 순수한 숫자로 보고싶다고하시는거 이 함수 사용
    pureNumf: function(val, type) {
        val = numeral(Number(val)).value();
        if (val == null || val == undefined) {
            return 0;
        }
        var returnVal = "";
        //무조건 양수로 변환 로직 위치 바꿈 
        var sign = false;
        if (val < 0) {
            val = val * (-1);
            sign = true;
        }

        if (val < 0.000001 && val != 0) {
            val = val.toFixed(9).substring(0, 10);
        }
        if (val >= 1) {
            var tmp = String(val);
            var addDecimal = '';
            if (tmp.split('.')[1]) {
                var k = tmp.split('.')[1].length;
                if (k > 8) {
                    k = 8;
                }
                val = val.toFixed(k);
                addDecimal = '.' + val.split('.')[1];
            }
            var temp = numeral(val).format('0,0') + addDecimal;
            returnVal = temp;
        } else if (val === 0) {
            returnVal = "0";
            //[2020-01-31 유주임] 이제 coin가격을 생으로 보내주기 때문에 0과, '0.00000000'를 구분한다.
        } else if (val === '0.00000000') {
            returnVal = '<0.00000001';
        } else {
            var tmp = String(val);
            var k = tmp.length;
            if (k > 10) {
                k = 10;
            }
            returnVal = tmp.substring(0, k);
        }
        let qsym_t = '<sup style="color:#808080;">' + GlobalLocale.qSymbol + '</sup>';

        if (GlobalLocale.decimal === 'b') {
            returnVal = CmnUtil.changer(returnVal);
        }

        if (type) {
            return (sign ? '-' : '') + returnVal;
        } else {
            return (sign ? qsym_t + '-' : qsym_t) + returnVal;
        }

    },

    amtNumf: function(val, type) {

        if (val === 'N/A' || val === '∞') {
            return val;
        }

        if (val.indexOf(".") === -1 && numeral(val).value() < 1000) {
            return val;
        }

        val = numeral(val).value();
        var returnVal = "";
        var sign = false;
        if (val < 0) {
            val = val * (-1);
            sign = true;
        }

        if (val >= 1000) { // 1000보다 큰경우 int형으로 노출
            var temp = numeral(val).format('0,0.0');
            returnVal = String(temp).substring(0, temp.length - 2);
        } else if (val > 100) { // 100보다 큰경우 소숫점 한자리만 노출
            var temp = numeral(val).format('0,0.00');
            returnVal = String(temp).substring(0, temp.length - 1);
        } else if (val > 10) { // 10보다 큰경우 소숫점 두자리만 노출
            var temp = numeral(val).format('0,0.000');
            returnVal = String(temp).substring(0, temp.length - 1);

            if (returnVal.substring(returnVal.length - 1, returnVal.length) === '0') {
                returnVal = returnVal.substring(0, returnVal.length - 1);
            }
        } else if (val >= 1) {
            var temp = String(val);
            returnVal = temp.substring(0, 5);
        } else if (val === 0) {
            returnVal = "0";
        } else {
            var tmp = String(val);
            var k = 0;
            for (var i = 2; i < tmp.length; i++) {
                if ('0' != tmp.charAt(i)) {
                    k = i + 4;
                    break;
                }
            }
            if (k > 10) {
                k = 10;
            }
            returnVal = tmp.substring(0, k);
        }

        if (GlobalLocale.decimal === 'b') {
            returnVal = CmnUtil.changer(returnVal);
        }

        return (sign ? "-" : "") + CmnUtil.showFullNumber(returnVal);
    },

    bigNum: function(val) {

        console.log("************");
        console.log("val : " + val);
        console.log("val.length : " + val.length);
        console.log("val.length - 1 : " + val.length - 1);
        let tmp = val.charAt(val.length - 1);
        console.log("tmp : " + tmp);

        if (val === 'N/A' || val === '∞') {
            return val;
        }

        val = numeral(val).value();
        console.log("numeral(val).value() : " + numeral(val).value());

        if (val === 0) {
            return 'N/A';
        }

        let valStr = "";
        let valStrLen = "";
        let tag = "";

        if (GlobalLocale.lang === 'ko') {

            if (tmp == '만') {
                val += '0000';
            } else if (tmp == '억') {
                val += '00000000';
            } else if (tmp == '조') {
                val += '000000000000';
            } else if (tmp == '경') {
                val += '0000000000000000';
            }

            valStr = Math.round(val) + "";
            valStrLen = valStr.length;
            tag = "";

            console.log("valStr : " + valStr);
            console.log("valStrLen : " + valStrLen);

            if (valStrLen >= 17) {
                tag = " <span style='color:#ec9b2a'>경</span>"
                valStr = valStr.substring(0, valStrLen - 16);
                if (valStr.length == 1) {

                    valStr = (Number(val) / 10000000000000000).toFixed(1);
                }

            } else if (valStrLen >= 13) {
                tag = " <span style='color:#ec9b2a'>조</span>"
                valStr = valStr.substring(0, valStrLen - 12);
                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000000000000).toFixed(1);
                }
            } else if (valStrLen >= 9) {
                tag = " <span style='color:#ec9b2a'>억</span>"
                valStr = valStr.substring(0, valStrLen - 8);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 100000000).toFixed(1);
                }
            } else if (valStrLen >= 5) {
                tag = " <span style='color:#ec9b2a'>만</span>"
                valStr = valStr.substring(0, valStrLen - 4);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 10000).toFixed(1);
                }
            } else {
                valStr = valStr;

                if (valStr.length == 1) {
                    valStr = Number(val).toFixed(1);
                }
            }
            //    		valStr = numeral(valStr).format('0,0');
        } else if (GlobalLocale.lang === 'zh') {

            if (tmp == '万') {
                val += '0000';
            } else if (tmp == '亿') {
                val += '00000000';
            } else if (tmp == '万亿') {
                val += '000000000000';
            } else if (tmp == '亿亿') {
                val += '0000000000000000';
            }

            valStr = Math.round(val) + "";
            valStrLen = valStr.length;
            tag = "";

            if (valStrLen >= 17) {
                tag = " <span style='color:#ec9b2a'>亿亿</span>"
                valStr = valStr.substring(0, valStrLen - 16);
                if (valStr.length == 1) {

                    valStr = (Number(val) / 10000000000000000).toFixed(1);
                }

            } else if (valStrLen >= 13) {
                tag = " <span style='color:#ec9b2a'>万亿</span>"
                valStr = valStr.substring(0, valStrLen - 12);
                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000000000000).toFixed(1);
                }
            } else if (valStrLen >= 9) {
                tag = " <span style='color:#ec9b2a'>亿</span>"
                valStr = valStr.substring(0, valStrLen - 8);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 100000000).toFixed(1);
                }
            } else if (valStrLen >= 5) {
                tag = " <span style='color:#ec9b2a'>万</span>"
                valStr = valStr.substring(0, valStrLen - 4);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 10000).toFixed(1);
                }
            } else {
                valStr = valStr;

                if (valStr.length == 1) {
                    valStr = Number(val).toFixed(1);
                }
            }
            //    		valStr = numeral(valStr).format('0,0');
        } else if (GlobalLocale.lang === 'ja') {

            if (tmp == '万') {
                val += '0000';
            } else if (tmp == '億') {
                val += '00000000';
            } else if (tmp == '兆') {
                val += '000000000000';
            } else if (tmp == '京') {
                val += '0000000000000000';
            }

            valStr = Math.round(val) + "";
            valStrLen = valStr.length;
            tag = "";

            if (valStrLen >= 17) {
                tag = " <span style='color:#ec9b2a'>京</span>"
                valStr = valStr.substring(0, valStrLen - 16);
                if (valStr.length == 1) {

                    valStr = (Number(val) / 10000000000000000).toFixed(1);
                }

            } else if (valStrLen >= 13) {
                tag = " <span style='color:#ec9b2a'>兆</span>"
                valStr = valStr.substring(0, valStrLen - 12);
                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000000000000).toFixed(1);
                }
            } else if (valStrLen >= 9) {
                tag = " <span style='color:#ec9b2a'>億</span>"
                valStr = valStr.substring(0, valStrLen - 8);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 100000000).toFixed(1);
                }
            } else if (valStrLen >= 5) {
                tag = " <span style='color:#ec9b2a'>万</span>"
                valStr = valStr.substring(0, valStrLen - 4);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 10000).toFixed(1);
                }
            } else {
                valStr = valStr;

                if (valStr.length == 1) {
                    valStr = Number(val).toFixed(1);
                }
            }
            //    		valStr = numeral(valStr).format('0,0');
        } else if (GlobalLocale.lang === 'de') {

            if (tmp == 'Tsd') {
                val += '000';
            } else if (tmp == 'Mio') {
                val += '000000';
            } else if (tmp == 'Mrd') {
                val += '000000000';
            } else if (tmp == 'Brd') {
                val += '000000000000';
            }

            valStr = Math.round(val) + "";
            valStrLen = valStr.length;
            tag = "";

            if (valStrLen >= 13) {
                tag = " <span style='color:#ec9b2a'>Brd</span>"
                valStr = valStr.substring(0, valStrLen - 12);
                if (valStr.length == 1) {

                    valStr = (Number(val) / 1000000000000).toFixed(1);
                }

            } else if (valStrLen >= 10) {
                tag = " <span style='color:#ec9b2a'>Mrd</span>"
                valStr = valStr.substring(0, valStrLen - 9);

                if (valStr.length == 1) {

                    valStr = (Number(val) / 1000000000).toFixed(1);
                }
            } else if (valStrLen >= 7) {
                tag = " <span style='color:#ec9b2a'>Mio</span>"
                valStr = valStr.substring(0, valStrLen - 6);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000000).toFixed(1);
                }
            } else if (valStrLen >= 4) {
                tag = " <span style='color:#ec9b2a'>Tsd</span>"
                valStr = valStr.substring(0, valStrLen - 3);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000).toFixed(1);
                }
            } else {
                valStr = valStr;

                if (valStr.length == 1) {
                    valStr = Number(val).toFixed(1);
                }
            }

        } else {
            //console.log("$$$$ tmp : " + tmp);
            if (tmp == 'K') {
                val += '000';
            } else if (tmp == 'M') {
                val += '000000';
            } else if (tmp == 'B') {
                val += '000000000';
            } else if (tmp == 'T') {
                val += '000000000000';
            }

            valStr = Math.round(val) + "";
            valStrLen = valStr.length;
            tag = "";

            console.log("valStr : " + valStr);
            console.log("valStrLen : " + valStrLen);

            if (valStrLen >= 13) {
                tag = " <span style='color:#ec9b2a'>T</span>"
                valStr = valStr.substring(0, valStrLen - 12);
                if (valStr.length == 1) {

                    valStr = (Number(val) / 1000000000000).toFixed(1);
                }

            } else if (valStrLen >= 10) {
                tag = " <span style='color:#ec9b2a'>B</span>"
                valStr = valStr.substring(0, valStrLen - 9);

                if (valStr.length == 1) {

                    valStr = (Number(val) / 1000000000).toFixed(1);
                    console.log("valStr.length==1 : " + valStr);
                }
            } else if (valStrLen >= 7) {
                tag = " <span style='color:#ec9b2a'>M</span>"
                valStr = valStr.substring(0, valStrLen - 6);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000000).toFixed(1);
                }
            } else if (valStrLen >= 4) {
                tag = " <span style='color:#ec9b2a'>K</span>"
                valStr = valStr.substring(0, valStrLen - 3);

                if (valStr.length == 1) {
                    valStr = (Number(val) / 1000).toFixed(1);
                }
            } else {
                valStr = valStr;

                if (valStr.length == 1) {
                    valStr = Number(val).toFixed(1);
                }
            }

        }
        if (valStr === '0.0') valStr = '<' + valStr;

        if (GlobalLocale.decimal === 'b') {
            valStr = CmnUtil.changer(valStr);
        }

        return '<sup style="color:#808080;">' + GlobalLocale.qSymbol + '</sup>' + valStr + tag;
    },

    testchul: function(val) {
        var str = String(numeral(val).value());
        var arr = str.split('.');
        var last = '';

        if (2 > arr.length) {} else {

            if (Number(arr[0]) > 0) {
                var cnt = String(arr[0]).length;
                var len = (4 - cnt);
                if (len > 0) {
                    last = arr[1].substring(0, len);
                }
            } else {

                var len = 0;
                var cnt = 0;
                var carr = String(arr[1]).split('');

                for (i in carr) {
                    len++;
                    if (Number(carr[i]) != 0) {
                        cnt++;
                        if (cnt == 4) {
                            break;
                        }
                    }
                }
                last = arr[1].substring(0, len);
            }
        }

        var result = arr[0];
        if (last != '') {
            result += "." + last;
        }
        return result;
    },
    // 색깔, 자릿수 맞추기
    changeColorNum: function(element) {
        //console.log("changeColorNum");
        var elementThis = $(element);

        var checkUp = "";
        // 음수 양수 색깔 칠하기.
        elementThis.find('.checkPlusMinus').each(function() {
            var cpmThis = $(this);
            var tmp = numeral(cpmThis.text()).value();
            console.log("tmp : " + tmp);
            //포트폴리오 전용인듯?
            if (cpmThis.hasClass('im')) {
                //alert("im")
                if (tmp > 0) {
                    cpmThis.addClass('up_im').removeClass('down_im');
                } else if (tmp < 0) {
                    cpmThis.addClass('down_im').removeClass('up_im');
                }

            } else {
                if (cpmThis.hasClass('listProfit')) {
                    if (tmp > 0) {
                        cpmThis.addClass('up').removeClass('down_profit');
                    } else if (tmp < 0) {
                        cpmThis.addClass('down_profit').removeClass('up');
                    }
                } else {
                    if (tmp > 0) {
                        cpmThis.addClass('up').removeClass('down');
                    } else if (tmp < 0) {
                        cpmThis.addClass('down').removeClass('up');
                    }
                }

            }
        });

        //자릿수 다듬기
        elementThis.find('.fiatNumFmt').each(function() {
            $(this).html(CmnUtil.numf($(this).text()));
        });

        //테스트용 유효숫자4자리 제거
        elementThis.find('.pureFiatNumFmt').each(function() {
            $(this).html(CmnUtil.pureNumf($(this).text()));
        });

        elementThis.find('.amountNum').each(function() {

            $(this).text(CmnUtil.amtNumf($(this).text()));

        });
        elementThis.find('.bigNum').each(function() {
            $(this).html(CmnUtil.bigNum($(this).text()));

        });

        elementThis.find('.percent').each(function() {
            var pctThis = $(this);
            var tmpNum = numeral(pctThis.text()).value();
            var thisText = "";
            if (Math.abs(tmpNum) < 100) {
                thisText = numeral(tmpNum).format('0.00');
            } else {
                thisText = numeral(tmpNum).format('0');
            }

            if (pctThis.hasClass('showPlus')) {
                thisText = (thisText > 0 ? "+" : "") + thisText;
            }

            if (GlobalLocale.decimal === 'b') {
                thisText = CmnUtil.changer(thisText);
            }

            pctThis.html(thisText + '<sup>%</sup>');
        });

        elementThis.find('.weight').each(function() {
            var pctThis = $(this);
            if (pctThis.text() === '-') {
                return;
            }
            var tmpNum = numeral(pctThis.text()).value();
            //	0/0 == NaN, 5/0 == Infinity
            if (isNaN(pctThis.text()) || Infinity == pctThis.text()) {
                tmpNum = 0;
            }
            var thisText = "";

            if (tmpNum < 0.1 && tmpNum != 0) {
                thisText = '<0.1';
            } else {
                thisText = numeral(tmpNum).format('0.0');
            }

            if (GlobalLocale.decimal === 'b') {
                thisText = CmnUtil.changer(thisText);
            }
            pctThis.html(thisText + '<sup>%</sup>');
        });

        elementThis.find('.difSignColor').each(function() {
            var pctThis = $(this);
            var tmpNum = numeral(pctThis.text()).value();
            var thisText = Math.abs(tmpNum);
            if (thisText < 100) {
                thisText = numeral(thisText).format('0,0.00');
            } else {
                thisText = numeral(thisText).format('0,0');
            }

            if (GlobalLocale.decimal === 'b') {
                thisText = CmnUtil.changer(thisText);
            }
            pctThis.html((thisText === '0.00' ? '' : tmpNum > 0 ? '<span  style="color:#6bbd46;">+</span>' : '<span  style="color:#ec9b2a;">-</span>') + thisText + '<sup>%</sup>');
        });

        //.name > .small_name이라고 생각되는데 이러면 가차없이 고쳐도될거같지만 혹시모르는거고,
        //만약 .name || .small_name이면 그냥 .coin_na만 추가하면됨. 
        elementThis.find(".name .small_name").each(function() {
            if ($(this).text().length > 17) {
                $(this).addClass('move');
            } else {
                $(this).removeClass('move');
            }
        });

    },

    drawChart: function(element, params) {
        let elementThis = $(element);

        if (params[8] !== 0 && (params[6] !== null && params[6] !== undefined)) {

            let ldAvg = params[6];
            let avg = params[7];
            let maxAvg = params[4];
            let minAvg = params[5];

            let diffAb = maxAvg - minAvg;
            let startDiff = 0;
            let priceDiff = 0;
            let isUpward = true;
            let relativeBoxTop = 0;
            let relativeBoxSize = 0;
            let udFlag = 0; // 0 : 변화가 없음.. 1 : 상승중 -1 : 하락중

            if (diffAb === 0) {
                elementThis.find('.baseline').hide();
            } else {
                priceDiff = avg - ldAvg;
                isUpward = (priceDiff >= 0);
                if (isUpward) {

                    startDiff = maxAvg - avg;

                    relativeBoxTop = startDiff / diffAb * 100;
                    relativeBoxSize = priceDiff / diffAb * 100;
                    udFlag = 1;
                } else {
                    startDiff = maxAvg - ldAvg;

                    relativeBoxTop = startDiff / diffAb * 100;
                    relativeBoxSize = priceDiff / diffAb * 100 * -1;
                    udFlag = -1;
                }
            }

            if (relativeBoxTop === 0 && relativeBoxSize === 0) {
                elementThis.find('.chart_wrap>div').show();
                elementThis.find('.baseline').hide();
                relativeBoxTop = 49;
                relativeBoxSize = 2;
            } else {
                elementThis.find('.chart_wrap>div').show();
                elementThis.find('.baseline').show();
            }

            let addClass = udFlag >= 0 ? 'up' : 'down';
            let removeClass = udFlag >= 0 ? 'down' : 'up';

            if (relativeBoxSize < 2) relativeBoxSize = 2;

            elementThis.find('.baseline').addClass(addClass).removeClass(removeClass);
            elementThis.find('.chart_con').css({
                'height': relativeBoxSize + '%',
                'top': relativeBoxTop + '%',
            }).addClass(addClass).removeClass(removeClass);
            elementThis.find('.chart_line').css({
                'top': relativeBoxTop + '%',
            }).addClass(addClass).removeClass(removeClass);

        } else {

            elementThis.find('.chart_wrap>div').hide();
        }
    },

    idToSym: function(pair) {
        var pairArr = pair.split("/");
        var rtn = "";
        for (var i in pairArr) {
            var tmp = _coinMapList[pairArr[i]];
            if (tmp == null || tmp == undefined) {
                rtn += (i == 1 ? ("/" + pairArr[i]) : pairArr[i]);
            } else {
                rtn += (i == 1 ? ("/" + tmp['symbol']) : tmp['symbol']);
            }
        }
        return rtn;
    },
    /**
    
         *  yyyyMMdd 포맷으로 반환
    
         */
    getFormatDate: function(date) {

        var year = date.getFullYear(); //yyyy
        var month = (1 + date.getMonth()); //M
        month = month >= 10 ? month : '0' + month; // month 두자리로 저장
        var day = date.getDate(); //d
        day = day >= 10 ? day : '0' + day; //day 두자리로 저장
        return year + '-' + month + '-' + day;

    },
    addHypenDate: function(yyyymmdd) {
        if (yyyymmdd === null || yyyymmdd === undefined || yyyymmdd.length !== 8) {
            return yyyymmdd;
        }
        return yyyymmdd.substring(0, 4) + '-' + yyyymmdd.substring(4, 6) + '-' + yyyymmdd.substring(6, 8);
    },
    /**
     * 지수표현 숫자를 완전한 숫자로 표시
     * showFullDecimalPoints
     */
    showFullNumber: function(value) {
        if (value === null || value === undefined || Number(value) === 'NaN') {
            return value;
        }
        let strVal = String(value);
        if (strVal.indexOf('e') === -1) {
            return value;
        }
        let howLong = strVal.substring(strVal.length - 1, strVal.length);
        return Number(value).toFixed(Number(howLong) + 1);
    },
    /**
     * 첫글자를 대문자로 바꿔줌
     * showFullDecimalPoints
     */
    capFirst: function(str) {
        if (str !== null && str !== undefined && str.length > 0) {
            str = str.charAt(0).toUpperCase() + str.slice(1);
        }
        return str;
    }

}