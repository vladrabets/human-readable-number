module.exports = function toReadable(number) {
    function units(num){
        switch(num){
            case 0:
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }
    function dozens(num){
        switch(num){
            case 20:
                return 'twenty';
            case 30:
                return 'thirty';
            case 40:
                return 'forty';
            case 50:
                return 'fifty';
            case 60:
                return 'sixty';
            case 70:
                return 'seventy';
            case 80:
                return 'eighty';
            case 90:
                return 'ninety';
        }
    }
    let str='';
    let numLen = number.toString().length;
    switch(numLen){
        case 3:
            str += units(parseInt(number/100));
            str += ' hundred';
            number=number%100;
        case 2:
            if(number==0)
                break;
            if(number<20){
                if(numLen==3)
                    str += ' ';
				str += units(number);
                break;
            }
            if(number%10==0){
                if(numLen==3)
                    str += ' ';
                str += dozens(number);
            }
            else{
                if(numLen==3)
                    str += ' ';
                str += dozens(parseInt(number/10)*10)+ ' ' + units(number%10)
            }
            break;
        case 1:
            str += units(number);
    }
    return str;
}
