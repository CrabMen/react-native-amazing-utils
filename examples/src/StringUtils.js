
StringUtils = {

    capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },


    localeCompare(str1, str2,locales,ignoreCase) {

        if (ignoreCase) {
            const newStr1 = str1.toLocaleLowerCase(locales)
            const newStr2 = str2.toLocaleLowerCase(locales) 
            return newStr1.localeCompare(newStr2,locales)
        }
        return str1.localeCompare(str2,locales)
    },

    contains: function (str, searchStr,ignoreCase) {

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

    containsIgnoreCase(str, searchSeq) {

        if (str.length == 0 || searchSeq.length == 0) return false

        let searchStr = searchSeq.toLowerCase()

        return str.toLowerCase().indexOf(searchStr)

    },
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
    containsWhitespace: function (input) {
        return this.contains(input, ' ');
    },
    //统计含有的子字符串的个数
    countMatches: function (input, sub) {
        if (this.isEmpty(input) || this.isEmpty(sub)) {
            return 0;
        }
        var count = 0;
        var index = 0;
        while ((index = input.indexOf(sub, index)) != -1) {
            index += sub.length;
            count++;
        }
        return count;
    },
    // defaultIfBlank() { },
    defaultIfBlank: function (input, defaultStr) {
        return this.isBlank(input) ? defaultStr : input;
    },
    defaultIfEmpty: function (input, defaultStr) {
        return this.isEmpty(input) ? defaultStr : input;
    },
    defaultString: function (input, defaultStr) {
        return input == null ? defaultStr : input;
    },
    deleteWhitespace: function (input) {
        return input.replace(/\s+/g, '');
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

    endsWith: function (input, suffix) {
        String
        return input.lastIndexOf(suffix) === 0;
    },
    // endsWithAny() { },

    // endsWithIgnoreCase() { },
    equals: function (input1, input2) {
        return input1 == input2;
    },

    // equalsAny() { },
    // equalsAnyIgnoreCase() { },
    equalsIgnoreCase: function (input1, input2) {
        return input1.toLocaleLowerCase() == input2.toLocaleLowerCase();
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
        const newStr = str.toLowerCase()
        const newSearchStr = serachStr.toLowerCase()
        return indexOf(newStr, newSearchStr)
    },
    isAllLowerCase: function (input) {
        return /^[a-z]+$/.test(input);
    },
    isAllUpperCase: function (input) {
        return /^[A-Z]+$/.test(input);
    },
    //只包含字母
    isAlpha: function (input) {
        return /^[a-z]+$/i.test(input);
    },
    //只包含字母、空格
    isAlphaSpace: function (input) {
        return /^[a-z\s]*$/i.test(input);
    },
    //只包含字母、数字
    isAlphanumeric: function (input) {
        return /^[a-z0-9]+$/i.test(input);
    },
    //只包含字母、数字和空格
    isAlphanumericSpace: function (input) {
        return /^[a-z0-9\s]*$/i.test(input);
    },
    //数字
    isNumeric: function (input) {
        return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
    },
    //小数
    isDecimal: function (input) {
        return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },
    //负小数
    isNegativeDecimal: function (input) {
        return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },
    //正小数
    isPositiveDecimal: function (input) {
        return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },
    //整数
    isInteger: function (input) {
        return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
    },
    //正整数
    isPositiveInteger: function (input) {
        return /^\+?(?:0|[1-9]\d*)$/.test(input);
    },
    //负整数
    isNegativeInteger: function (input) {
        return /^\-?(?:0|[1-9]\d*)$/.test(input);
    },
    //只包含数字和空格
    isNumericSpace: function (input) {
        return /^[\d\s]*$/.test(input);
    },
    //首大写字母转小写
    uncapitalize: function (input) {
        var strLen = 0;
        if (input == null || (strLen = input.length) == 0) {
            return input;
        }
        return input.replace(/^[A-Z]/, function (matchStr) {
            return matchStr.toLocaleLowerCase();
        });
    },

    isEmpty: function (input) {
        return input == null || input == '';
    },
    isNotEmpty: function (input) {
        return !this.isEmpty(input);
    },
    isBlank: function (input) {
        return input == null || /^\s*$/.test(input);
    },
    isNotBlank: function (input) {
        return !this.isBlank(input);
    },
    trim: function (input) {
        return input.replace(/^\s+|\s+$/, '');
    },
    trimToEmpty: function (input) {
        return input == null ? "" : this.trim(input);
    },
    startsWith: function (input, prefix) {
        return input.indexOf(prefix) === 0;
    },




    //生成指定个数的字符
    repeat: function (ch, repeatTimes) {
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

    rightPad: function (input, size, padStr) {
        return input + this.repeat(padStr, size);
    },
    leftPad: function (input, size, padStr) {
        return this.repeat(padStr, size) + input;
    },

    //首大写字母转小写
    uncapitalize: function (input) {
        var strLen = 0;
        if (input == null || (strLen = input.length) == 0) {
            return input;
        }
        return input.replace(/^[A-Z]/, function (matchStr) {
            return matchStr.toLocaleLowerCase();
        });
    },
    //大写转小写，小写转大写
    swapCase: function (input) {
        return input.replace(/[a-z]/ig, function (matchStr) {
            if (matchStr >= 'A' && matchStr <= 'Z') {
                return matchStr.toLocaleLowerCase();
            } else if (matchStr >= 'a' && matchStr <= 'z') {
                return matchStr.toLocaleUpperCase();
            }
        });
    },


    isWhitespace: function (input) {
        return /^\s*$/.test(input);
    },

    //字符串反转
    reverse: function (input) {
        if (this.isBlank(input)) {
            input;
        }
        return input.split("").reverse().join("");
    },
    //删掉特殊字符(英文状态下)
    removeSpecialCharacter: function (input) {
        return input.replace(/[!-/:-@\[-`{-~]/g, "");
    },
    //只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
    isSpecialCharacterAlphanumeric: function (input) {
        return /^[!-~]+$/.test(input);
    },

    //中文校验
    isChinese: function (input) {
        return /^[\u4E00-\u9FA5]+$/.test(input);
    },
    //去掉中文字符
    removeChinese: function (input) {
        return input.replace(/[\u4E00-\u9FA5]+/gm, "");
    },
    //转义元字符
    escapeMetacharacter: function (input) {
        var metacharacter = "^$()*+.[]|\\-?{}|";
        if (metacharacter.indexOf(input) >= 0) {
            input = "\\" + input;
        }
        return input;
    },
    //转义字符串中的元字符
    escapeMetacharacterOfStr: function (input) {
        return input.replace(/[\^\$\(\)\*\+\.\[\]\|\\\-\?\{\}\|]/gm, "\\$&");
    }

};



export default StringUtils;