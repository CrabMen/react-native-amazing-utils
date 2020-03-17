declare module "react-native-progress-circle" {

    export interface StringUtils {

        capitalize(): string;

        localeCompare(str1: string, str2: string, locales: string, ignoreCase:boolean=false): number;

        contains(str: string, searchStr: string, ignoreCase: boolean=false): boolean;

        containsAny(str: string, array: string | string[]): boolean;

        containsNone(str: string, searchSeq: string): string;

        containsOnly(str: string, searchSeq: string): string;

        containsWhitespace(str: string): string;

        countMatches(str: string, sub: string): string;
        // defaultIfBlank() { },
        defaultIfBlank(str: string, defaultStr: string): string;

        defaultIfEmpty(str: string, defaultStr: string): string;

        defaultString(str: string, defaultStr: string): string;

        deleteWhitespace(str: string): string;

        difference(str1: string, str2: string): string;

        indexOfDifference(str1: string, str2: string): string

        endsWith(str: string, suffix: string): string;

        equals(str1: string, c: string): string;

        equalsIgnoreCase(str1: string, str2: string): string;

        indexOf(str: string, searchStr: string): string;
        //找出字符数组searChars第一次出现在字符串中的位置
        indexOfAny(str: string, chars: string): string;

        indexOfIgnoreCase(str: string, serachStr: string): string;

        isAllLowerCase(str: string): string;

        isAllUpperCase(str: string): string;
        //只包含字母
        isAlpha(str: string): string;
        //只包含字母、空格
        isAlphaSpace(str: string): string;
        //只包含字母、数字
        isAlphanumeric(str: string): string;
        //只包含字母、数字和空格
        isAlphanumericSpace(str: string): string;
        //数字
        isNumeric(str: string): string;
        //小数
        isDecimal(str: string): string;
        //负小数
        isNegativeDecimal(str: string): string;
        //正小数
        isPositiveDecimal(str: string): string;
        //整数
        isInteger(str: string): string;
        //正整数
        isPositiveInteger(str: string): string;
        //负整数
        isNegativeInteger(str: string): string;
        //只包含数字和空格
        isNumericSpace(str: string): string;
        //首大写字母转小写
        uncapitalize(str: string): string;

        isEmpty(str: string): string;

        isNotEmpty(str: string): string;

        isBlank(str: string): string;

        isNotBlank(str: string): string;

        trim(str: string): string;

        trimToEmpty(str: string): string;

        startsWith(str: string, prefix: string): string
        //生成指定个数的字符
        repeat(ch: string, repeatTimes: string): string;

        removeRepeatStr(str: string): string;

        rightPad(str: string, size: number, padStr: string): string;

        leftPad(str: string, size: number, padStr: string): string;
        //首大写字母转小写
        uncapitalize(str: string): string;
        //大写转小写，小写转大写
        swapCase(str: string): string;

        isWhitespace(str: string): string;
        //字符串反转
        reverse(str: string): string;
        //删掉特殊字符(英文状态下)
        removeSpecialCharacter(str: string): string;
        //只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
        isSpecialCharacterAlphanumeric(str: string): string;
        //中文校验
        isChinese(str: string): string;
        //去掉中文字符
        removeChinese(str: string): string;
        //转义元字符
        escapeMetacharacter(str: string): string;
        //转义字符串中的元字符
        escapeMetacharacterOfStr(str: string): string;
    };


}