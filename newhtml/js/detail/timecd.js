var fnTimeCountDown = function (e, r, o, n) {
    n || (n = (new Date).getTime());
    var i = (new Date).getTime() - n,
        t = {
            zero: function (e) {
                var e = parseInt(e, 10);
                return e > 0 ? (9 >= e && (e = "0" + e), String(e)) : "00"
            },
            dv: function () {
                e = e || Date.UTC(2050, 0, 1);
                var r = new Date(e),
                    n = new Date,
                    a = Math.round((r.getTime() - n.getTime() + i) / 1e3),
                    u = {
                        sec: "00",
                        mini: "00",
                        hour: "00",
                        day: "00",
                        month: "00",
                        year: "0"
                    };
                if (a > 0) u.sec = t.zero(a % 60), u.mini = Math.floor(a / 60) > 0 ? t.zero(Math.floor(a / 60) % 60) : "00", u.hour = Math.floor(a / 3600) > 0 ? t.zero(Math.floor(a / 3600) % 24) : "00", u.day = Math.floor(a / 86400), u.month = Math.floor(a / 2629744) > 0 ? t.zero(Math.floor(a / 2629744) % 12) : "00", u.year = Math.floor(a / 31556926) > 0 ? Math.floor(a / 31556926) : "0";
                else if (o) return o(), clearTimeout(t.ui), null;
                return u
            },
            ui: function () {
                return t.dv() ? (r.sec && (r.sec.innerHTML = t.dv().sec), r.mini && (r.mini.innerHTML = t.dv().mini), r.hour && (r.hour.innerHTML = t.dv().hour), r.day && (r.day.innerHTML = t.dv().day), r.month && (r.month.innerHTML = t.dv().month), r.year && (r.year.innerHTML = t.dv().year), void setTimeout(t.ui, 1e3)) : void clearTimeout(t.ui)
            }
        };
    clearTimeout(t.ui), t.ui()
};