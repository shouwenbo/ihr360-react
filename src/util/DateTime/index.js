//let oneDayLong = 24 * 60 * 60 * 1000;
const resource = {
  weekEasy: {
    'zh-cn': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    'en': ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
  },
  week: {
    'zh-cn': ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  monthEasy: {
    'zh-cn': ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  month: {
    'zh-cn': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  am: {
    'zh-cn': '上午',
    'en': 'am'
  },
  pm: {
    'zh-cn': '下午',
    'en': 'pm'
  }
};
export default class DateTime {
  value = new Date();
  constructor(obj) {
    if (obj instanceof Date) {
      this.value = obj;
    } else if (obj instanceof DateTime) {
      this.value = obj.getValue();
    } else if (typeof (obj) == 'string') {
      this.value = new Date(obj.replace(/-/g, "/"));
    } else {
      this.value = new Date();
    }
  }
  getValue = () => {
    return this.value;
  }
  isDate = () => {
    return this.value != 'Invalid Date';
  }
  static get Now() {
    return new DateTime();
  }
  tostr = (fmt, lang) => {
    if (this.isDate()) {
      if (typeof (fmt) != 'string') {
        fmt = 'yyyy-MM-dd HH:mm:ss';
      }
      if (typeof (lang) != 'string') {
        lang = 'zh-cn';
      }
      var paddNum = function(num) {
        num += ""; return num.replace(/^(\d)$/, "0$1");
      }
      var o = {
        yyyy: this.value.getFullYear(),
        yy: this.value.getFullYear().toString().substring(2),
        M: this.value.getMonth() + 1,
        MM: paddNum(this.value.getMonth() + 1),
        MMM: resource.monthEasy[lang][this.value.getMonth()],
        MMMM: resource.month[lang][this.value.getMonth()],
        d: this.value.getDate(),
        dd: paddNum(this.value.getDate()),
        ddd: resource.weekEasy[lang][this.value.getDay()],
        dddd: resource.week[lang][this.value.getDay()],
        HH: paddNum(this.value.getHours()),
        hh: this.value.getHours() % 12 || 12,
        mm: paddNum(this.value.getMinutes()),
        ss: paddNum(this.value.getSeconds()),
        s: this.value.getSeconds(),
        tt: this.value.getHours() < 12 ? resource.am[lang] : resource.pm[lang],
        TT: this.value.getHours() < 12 ? resource.am[lang].toUpperCase() : resource.pm[lang].toUpperCase()
      };
      return fmt.replace(/([a-z])(\1)*/ig, function(m) {
        return o[m];
      });
    } else {
      return null;
    }
  }
}