
var StringUtils = {

    capitalize (str) {
        if(str.length == 0) return str
        return str.charAt(0).toUpperCase() + str.slice(1)
    },


    localeCompare(str1, str2,locales,ignoreCase) {

        if (ignoreCase) {
            const newStr1 = str1.toLocaleLowerCase(locales)
            const newStr2 = str2.toLocaleLowerCase(locales) 
            return newStr1.localeCompare(newStr2,locales)
        }
        return str1.localeCompare(str2,locales)
    },

    contains (str, searchStr,ignoreCase) {

        if (str.length == 0 || searchSeq.length == 0) return false

        if(ignoreCase){
            const newStr = str.toLowerCase()
            const newSearchStr= searchStr.toLowerCase(locales) 
            return newStr.indexOf(newSearchStr) >= 0;
        }

        return str.indexOf(searchStr) >= 0;
    },

    containsAny(str, array) {
        if (str.length == 0 || array.length == 0) return false

        array.forEach(element => {
            if (!contains(str, element)) return false
        });
        return true
    },

    // containsIgnoreCase(str, searchSeq) {

    //     if (str.length == 0 || searchSeq.length == 0) return false

    //     let searchStr = searchSeq.toLowerCase()

    //     return str.toLowerCase().indexOf(searchStr)

    // },
    // 判断字符串中是否不包含指定的字符或指定的字符串中的字符，区分大小写
    containsNone(str, searchSeq) {
        return !containsOnly(str, searchSeq)
    },

    containsOnly(str, searchSeq) {
        let newStr = removeRepeatStr(str)
        for (let index = 0; index < str.length; index++) {
            const char = str.charAt(index);
            if (!contains(searchSeq, char)) return false
        }
        return true
    },
    containsWhitespace (str) {
        return this.contains(str, ' ');
    },
    //统计含有的子字符串的个数
    countMatches (str, sub) {
        if (this.isEmpty(str) || this.isEmpty(sub)) {
            return 0;
        }
        var count = 0;
        var index = 0;
        while ((index = str.indexOf(sub, index)) != -1) {
            index += sub.length;
            count++;
        }
        return count;
    },
    // defaultIfBlank() { },
    defaultIfBlank (str, defaultStr) {
        return this.isBlank(str) ? defaultStr : str;
    },
    defaultIfEmpty (str, defaultStr) {
        return this.isEmpty(str) ? defaultStr : str;
    },
    defaultString (str, defaultStr) {
        return str == null ? defaultStr : str;
    },
    deleteWhitespace (str) {
        return str.replace(/\s+/g, '');
    },

    difference(str1, str2) {

        if (str1 == null) return str2
        if (str2 == null) return str1

        let index = indexOfDifference(str1, str2)

        if (index == -1) {

            return ''
        }
        return str2.substring(index)
    },

    indexOfDifference(str1, str2) {


    },

    endsWith (str, suffix) {
        String
        return str.lastIndexOf(suffix) === 0;
    },
    // endsWithAny() { },

    // endsWithIgnoreCase() { },
    equals (str1, str2) {
        return str1 == str2;
    },

    // equalsAny() { },
    // equalsAnyIgnoreCase() { },
    equalsIgnoreCase (str1, str2) {
        return str1.toLocaleLowerCase() == str2.toLocaleLowerCase();
    },
    // firstNonBlank(){},
    // firstNonEmpty(){},
    // getCommonPrefix(){},
    // getDigits(){},
    indexOf(str, searchStr) {
        return str.indexOf(searchStr)
    },
    //找出字符数组searChars第一次出现在字符串中的位置
    indexOfAny(str, chars) {
        if (str.length == 0 || chars.length == 0) return -1

        const index = -1

        chars.forEach(element => {
            index = str.indexOf(element)
            if (index >= 0) return index
        });

        return index

    },


    // indexOfAnyBut(str, chars) {


    // },
    // indexOfDifference(){},
    indexOfIgnoreCase(str, serachStr) {
        String
        const newStr = str.toLowerCase()
        const newSearchStr = serachStr.toLowerCase()
        return indexOf(newStr, newSearchStr)
    },
    isAllLowerCase (str) {
        return /^[a-z]+$/.test(str);
    },
    isAllUpperCase (str) {
        return /^[A-Z]+$/.test(str);
    },
    //只包含字母
    isAlpha (str) {
        return /^[a-z]+$/i.test(str);
    },
    //只包含字母、空格
    isAlphaSpace (str) {
        return /^[a-z\s]*$/i.test(str);
    },
    //只包含字母、数字
    isAlphanumeric (str) {
        return /^[a-z0-9]+$/i.test(str);
    },
    //只包含字母、数字和空格
    isAlphanumericSpace (str) {
        return /^[a-z0-9\s]*$/i.test(str);
    },
    //数字
    isNumeric (str) {
        return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(str);
    },
    //小数
    isDecimal (str) {
        return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(str);
    },
    //负小数
    isNegativeDecimal (str) {
        return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(str);
    },
    //正小数
    isPositiveDecimal (str) {
        return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(str);
    },
    //整数
    isInteger (str) {
        return /^[-+]?(?:0|[1-9]\d*)$/.test(str);
    },
    //正整数
    isPositiveInteger (str) {
        return /^\+?(?:0|[1-9]\d*)$/.test(str);
    },
    //负整数
    isNegativeInteger (str) {
        return /^\-?(?:0|[1-9]\d*)$/.test(str);
    },
    //只包含数字和空格
    isNumericSpace (str) {
        return /^[\d\s]*$/.test(str);
    },
    //首大写字母转小写
    uncapitalize (str) {
        var strLen = 0;
        if (str == null || (strLen = str.length) == 0) {
            return str;
        }
        return str.replace(/^[A-Z]/, function (matchStr) {
            return matchStr.toLocaleLowerCase();
        });
    },

    isEmpty (str) {
        return str == null || str == '';
    },
    isNotEmpty (str) {
        return !this.isEmpty(str);
    },
    isBlank (str) {
        return str == null || /^\s*$/.test(str);
    },
    isNotBlank (str) {
        return !this.isBlank(str);
    },
    trim (str) {
        return str.replace(/^\s+|\s+$/, '');
    },
    trimToEmpty (str) {
        return str == null ? "" : this.trim(str);
    },
    startsWith (str, prefix) {
        return str.indexOf(prefix) === 0;
    },




    //生成指定个数的字符
    repeat (ch, repeatTimes) {
        var result = "";
        for (var i = 0; i < repeatTimes; i++) {
            result += ch;
        }
        return result;
    },


    removeRepeatStr(str) {
        var obj = {};
        var newStr = '';
        var len = str.length;
        for (var i = 0; i < len; i++) {
            if (!obj[str[i]]) {
                newStr = newStr + str[i];
                obj[str[i]] = 1;//注意，这里的1是给对象属性赋值，这个值可以任意取。意思是把每个遍历的字符作为对象属性并赋值保存，保证该属性的唯一性
            }
        }
        return newStr;
    },

    rightPad (str, size, padStr) {
        return str + this.repeat(padStr, size);
    },
    leftPad (str, size, padStr) {
        return this.repeat(padStr, size) + str;
    },

    //首大写字母转小写
    uncapitalize (str) {
        var strLen = 0;
        if (str == null || (strLen = str.length) == 0) {
            return str;
        }
        return str.replace(/^[A-Z]/, function (matchStr) {
            return matchStr.toLocaleLowerCase();
        });
    },
    //大写转小写，小写转大写
    swapCase (str) {
        return str.replace(/[a-z]/ig, function (matchStr) {
            if (matchStr >= 'A' && matchStr <= 'Z') {
                return matchStr.toLocaleLowerCase();
            } else if (matchStr >= 'a' && matchStr <= 'z') {
                return matchStr.toLocaleUpperCase();
            }
        });
    },


    isWhitespace (str) {
        return /^\s*$/.test(str);
    },

    //字符串反转
    reverse (str) {
        if (this.isBlank(str)) {
            str;
        }
        return str.split("").reverse().join("");
    },
    //删掉特殊字符(英文状态下)
    removeSpecialCharacter (str) {
        return str.replace(/[!-/:-@\[-`{-~]/g, "");
    },
    //只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
    isSpecialCharacterAlphanumeric (str) {
        return /^[!-~]+$/.test(str);
    },

    //中文校验
    isChinese (str) {
        return /^[\u4E00-\u9FA5]+$/.test(str);
    },
    //去掉中文字符
    removeChinese (str) {
        return str.replace(/[\u4E00-\u9FA5]+/gm, "");
    },
    //转义元字符
    escapeMetacharacter (str) {
        var metacharacter = "^$()*+.[]|\\-?{}|";
        if (metacharacter.indexOf(str) >= 0) {
            str = "\\" + str;
        }
        return str;
    },
    //转义字符串中的元字符
    escapeMetacharacterOfStr (str) {
        return str.replace(/[\^\$\(\)\*\+\.\[\]\|\\\-\?\{\}\|]/gm, "\\$&");
    }

};


module.exports = StringUtils;
