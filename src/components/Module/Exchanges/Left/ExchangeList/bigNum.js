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


    valStr = Math.round(val) + "";
    valStrLen = valStr.length;
    tag = "";

    console.log("valStr : " + valStr);
    console.log("valStrLen : " + valStrLen);

    if (valStrLen >= 13) {

        valStr = valStr.substring(0, valStrLen - 12);
        if (valStr.length == 1) {

            valStr = (Number(val) / 1000000000000).toFixed(1);
        }

    } else if (valStrLen >= 10) {
        valStr = valStr.substring(0, valStrLen - 9);

        if (valStr.length == 1) {

            valStr = (Number(val) / 1000000000).toFixed(1);
            console.log("valStr.length==1 : " + valStr);
        }
    } else if (valStrLen >= 7) {
        valStr = valStr.substring(0, valStrLen - 6);

        if (valStr.length == 1) {
            valStr = (Number(val) / 1000000).toFixed(1);
        }
    } else if (valStrLen >= 4) {
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

    return valStr;
}