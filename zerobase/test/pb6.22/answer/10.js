function solution(live, commands) {
  let max = live[0];
  const segs = new TreeMultiSet((a, b) => a[1] < b[1]);
  console.log(segs);
  segs.insert([live[0], 0, 0]);

  live.forEach((x, i) => {
    if (x < max) {
      segs.insert([x, i, i]);
      max = x;
    } else {
      segs.rbegin().value[2] = i;
    }
  });

  return commands.map(([k, d]) => {
    k--;
    const iter = segs.upper_bound([0, k, k]).prev();
    const value = iter.value;

    if (live[k] - d < value[0]) {
      let last = iter;
      while (
        last.next() !== segs.end() &&
        last.next().value[0] >= live[k] - d
      ) {
        last = last.next();
      }
      const add = [live[k] - d, k, last.value[2]];
      let start = iter;
      if (value[1] < k) {
        value[2] = k - 1;
        start = iter.next();
      }
      if (start !== segs.end() && start.value[1] <= last.value[1]) {
        segs.erase(start, last.next());
      }
      segs.insert(add);
    }
    live[k] -= d;
    return segs.size();
  });
}

const TreeMultiSet = (function () {
  var { TreeMultiSet: t } = (function (t) {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          }),
        e(t, n)
      );
    };
    function n(t, n) {
      if ('function' != typeof n && null !== n)
        throw new TypeError(
          'Class extends value ' + String(n) + ' is not a constructor or null'
        );
      function r() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r()));
    }
    function r(t) {
      var e = 'function' == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
      if (n) return n.call(t);
      if (t && 'number' == typeof t.length)
        return {
          next: function () {
            return (
              t && r >= t.length && (t = void 0),
              { value: t && t[r++], done: !t }
            );
          },
        };
      throw new TypeError(
        e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
      );
    }
    function o(t, e) {
      var n = 'function' == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        o,
        i = n.call(t),
        s = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
          s.push(r.value);
      } catch (t) {
        o = { error: t };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    }
    function i(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = e.length; o < i; o++)
          (!r && o in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
      return t.concat(r || Array.prototype.slice.call(e));
    }
    var s,
      u = (function () {
        function t(t, e) {
          (this.it_ = t), (this.last_ = e);
        }
        return (
          (t.prototype.next = function () {
            if (this.it_.equals(this.last_)) return { done: !0, value: void 0 };
            var t = this.it_;
            return (this.it_ = this.it_.next()), { done: !1, value: t.value };
          }),
          (t.prototype[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
      })(),
      a = (function () {
        function t() {}
        return (
          (t.prototype.empty = function () {
            return 0 === this.size();
          }),
          (t.prototype.rbegin = function () {
            return this.end().reverse();
          }),
          (t.prototype.rend = function () {
            return this.begin().reverse();
          }),
          (t.prototype[Symbol.iterator] = function () {
            return new u(this.begin(), this.end());
          }),
          (t.prototype.toJSON = function () {
            var t,
              e,
              n = [];
            try {
              for (var o = r(this), i = o.next(); !i.done; i = o.next()) {
                var s = i.value;
                n.push(s);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (e = o.return) && e.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            return n;
          }),
          t
        );
      })(),
      c = (function () {
        function t(t, e) {
          (this.data_ = t), (this.index_ = e);
        }
        return (
          (t.prototype.index = function () {
            return this.index_;
          }),
          Object.defineProperty(t.prototype, 'value', {
            get: function () {
              return this.data_[this.index_];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.prev = function () {
            return --this.index_, this;
          }),
          (t.prototype.next = function () {
            return ++this.index_, this;
          }),
          (t.prototype.advance = function (t) {
            return (this.index_ += t), this;
          }),
          (t.prototype.equals = function (t) {
            return this.data_ === t.data_ && this.index_ === t.index_;
          }),
          (t.prototype.swap = function (t) {
            var e, n;
            (e = o([t.data_, this.data_], 2)),
              (this.data_ = e[0]),
              (t.data_ = e[1]),
              (n = o([t.index_, this.index_], 2)),
              (this.index_ = n[0]),
              (t.index_ = n[1]);
          }),
          t
        );
      })(),
      _ = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.data_ = e(n)), n;
        }
        return (
          n(e, t),
          (e.prototype.assign = function (t, e) {
            this.clear(), this.insert(t, e);
          }),
          (e.prototype.clear = function () {
            this.data_.clear();
          }),
          (e.prototype.begin = function () {
            return this.data_.begin();
          }),
          (e.prototype.end = function () {
            return this.data_.end();
          }),
          (e.prototype.has = function (t) {
            return !this.find(t).equals(this.end());
          }),
          (e.prototype.size = function () {
            return this.data_.size();
          }),
          (e.prototype.push = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if (0 === t.length) return this.size();
            var n = new c(t, 0),
              r = new c(t, t.length);
            return this._Insert_by_range(n, r), this.size();
          }),
          (e.prototype.insert = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 1 === t.length
              ? this._Insert_by_key(t[0])
              : t[0].next instanceof Function && t[1].next instanceof Function
              ? this._Insert_by_range(t[0], t[1])
              : this._Insert_by_hint(t[0], t[1]);
          }),
          (e.prototype.erase = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 1 !== t.length ||
              (t[0] instanceof this.end().constructor && t[0].source() === this)
              ? 1 === t.length
                ? this._Erase_by_range(t[0])
                : this._Erase_by_range(t[0], t[1])
              : this._Erase_by_val(t[0]);
          }),
          (e.prototype._Erase_by_range = function (t, e) {
            void 0 === e && (e = t.next());
            var n = this.data_.erase(t, e);
            return this._Handle_erase(t, e), n;
          }),
          e
        );
      })(a),
      l = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          n(e, t),
          (e.prototype.insert = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return t.prototype.insert.apply(this, i([], o(e), !1));
          }),
          (e.prototype._Erase_by_val = function (t) {
            var e = this.find(t);
            if (!0 === e.equals(this.end())) return 0;
            for (
              var n = e.next(), r = 1;
              !n.equals(this.end()) && this._Key_eq(t, n.value);

            )
              (n = n.next()), ++r;
            return this._Erase_by_range(e, n), r;
          }),
          (e.prototype.merge = function (t) {
            this.insert(t.begin(), t.end()), t.clear();
          }),
          e
        );
      })(_);
    !(function (t) {
      t.construct = function (t) {
        for (var e, n, r = [], s = 1; s < arguments.length; s++)
          r[s - 1] = arguments[s];
        return (
          r.length >= 1 && r[0] instanceof Array
            ? ((e = function () {
                var e = r[0];
                t.push.apply(t, i([], o(e), !1));
              }),
              (n = r.slice(1)))
            : r.length >= 2 &&
              r[0].next instanceof Function &&
              r[1].next instanceof Function
            ? ((e = function () {
                var e = r[0],
                  n = r[1];
                t.assign(e, n);
              }),
              (n = r.slice(2)))
            : ((e = null), (n = r)),
          { ramda: e, tail: n }
        );
      };
    })(s || (s = {}));
    var h = null;
    function p() {
      return (
        null === y &&
          (null === h &&
            (h =
              'object' == typeof global &&
              'object' == typeof global.process &&
              'object' == typeof global.process.versions &&
              void 0 !== global.process.versions.node),
          void 0 === (y = h ? global : self).__s_iUID && (y.__s_iUID = 0)),
        y
      );
    }
    var f,
      y = null;
    function v(t) {
      if (t instanceof Object) {
        if (!1 === t.hasOwnProperty('__get_m_iUID')) {
          var e = ++p().__s_iUID;
          Object.defineProperty(t, '__get_m_iUID', {
            value: function () {
              return e;
            },
          });
        }
        return t.__get_m_iUID();
      }
      return void 0 === t ? -1 : 0;
    }
    function d(t, e) {
      return (
        (t = t ? t.valueOf() : t),
        (e = e ? e.valueOf() : e),
        t instanceof Object && t.equals instanceof Function
          ? t.equals(e)
          : t === e
      );
    }
    function g(t, e) {
      return (
        (t = t.valueOf()),
        (e = e.valueOf()),
        t instanceof Object
          ? t.less instanceof Function
            ? t.less(e)
            : v(t) < v(e)
          : t < e
      );
    }
    function b(t, e) {
      return (e ^= t ? 1 : 0), (e *= k);
    }
    function m(t, e) {
      return x(t.toString(), e);
    }
    function x(t, e) {
      for (var n = 0; n < t.length; ++n) (e ^= t.charCodeAt(n)), (e *= k);
      return Math.abs(e);
    }
    !(function (t) {
      (t.construct = function (t, e, n) {
        for (var r = [], u = 3; u < arguments.length; u++)
          r[u - 3] = arguments[u];
        var a = null,
          c = g;
        if (1 === r.length && r[0] instanceof e) {
          var _ = r[0];
          (c = _.key_comp()),
            (a = function () {
              var e = _.begin(),
                n = _.end();
              t.assign(e, n);
            });
        } else {
          var l = s.construct.apply(s, i([t], o(r), !1));
          (a = l.ramda), l.tail.length >= 1 && (c = l.tail[0]);
        }
        n(c), null !== a && a();
      }),
        (t.emplacable = function (t, e, n) {
          var r = e.prev(),
            o = r.equals(t.end()) || t.value_comp()(r.value, n);
          return (o = o && (e.equals(t.end()) || t.value_comp()(n, e.value)));
        });
    })(f || (f = {}));
    var w,
      I = 2166136261,
      k = 16777619,
      q = (function () {
        function t(t, e) {
          (this.first = t), (this.second = e);
        }
        return (
          (t.prototype.equals = function (t) {
            return d(this.first, t.first) && d(this.second, t.second);
          }),
          (t.prototype.less = function (t) {
            return !1 === d(this.first, t.first)
              ? g(this.first, t.first)
              : g(this.second, t.second);
          }),
          (t.prototype.hashCode = function () {
            return (function () {
              for (var t, e, n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o];
              var i = I;
              try {
                for (var s = r(n), u = s.next(); !u.done; u = s.next()) {
                  var a = u.value,
                    c = typeof (a = a ? a.valueOf() : a);
                  if ('boolean' === c) i = b(a, i);
                  else if ('number' === c || 'bigint' === c) i = m(a, i);
                  else if ('string' === c) i = x(a, i);
                  else if (
                    a instanceof Object &&
                    a.hashCode instanceof Function
                  ) {
                    var _ = a.hashCode();
                    if (1 === n.length) return _;
                    (i ^= _), (i *= k);
                  } else i = m(v(a), i);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  u && !u.done && (e = s.return) && e.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
              return Math.abs(i);
            })(this.first, this.second);
          }),
          t
        );
      })(),
      E = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          n(e, t),
          (e.prototype.find = function (t) {
            var e = this.lower_bound(t);
            return !e.equals(this.end()) && this._Key_eq(t, e.value)
              ? e
              : this.end();
          }),
          (e.prototype.count = function (t) {
            for (
              var e = this.find(t), n = 0;
              !e.equals(this.end()) && this._Key_eq(e.value, t);
              e = e.next()
            )
              ++n;
            return n;
          }),
          (e.prototype.equal_range = function (t) {
            return new q(this.lower_bound(t), this.upper_bound(t));
          }),
          (e.prototype.value_comp = function () {
            return this.key_comp();
          }),
          (e.prototype._Key_eq = function (t, e) {
            return !this.key_comp()(t, e) && !this.key_comp()(e, t);
          }),
          (e.prototype._Insert_by_key = function (t) {
            var e = this.upper_bound(t);
            return (
              (e = this.data_.insert(e, t)), this._Handle_insert(e, e.next()), e
            );
          }),
          (e.prototype._Insert_by_hint = function (t, e) {
            if (f.emplacable(this, t, e)) {
              var n = this.data_.insert(t, e);
              return this._Handle_insert(n, n.next()), n;
            }
            return this._Insert_by_key(e);
          }),
          (e.prototype._Insert_by_range = function (t, e) {
            for (var n = t; !n.equals(e); n = n.next())
              this._Insert_by_key(n.value);
          }),
          e
        );
      })(l),
      O = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return n(e, t), e;
      })(
        (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this,
              o = n.prototype;
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(r, o)
                : (r.__proto__ = o),
              r
            );
          }
          return (
            n(e, t),
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this.constructor.name;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.what = function () {
              return this.message;
            }),
            (e.prototype.toJSON = function () {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
              };
            }),
            e
          );
        })(Error)
      ),
      F = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return n(e, t), e;
      })(O),
      S = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return n(e, t), e;
      })(O);
    !(function (t) {
      function e(t) {
        if ('string' == typeof t) return t;
        var e = t.constructor.name;
        return (
          t.constructor.__MODULE && (e = t.constructor.__MODULE + '.' + e),
          'std.' + e
        );
      }
      (t.get_class_name = e),
        (t.empty = function (t, n) {
          return new S(
            'Error on ' + e(t) + '.' + n + "(): it's empty container."
          );
        }),
        (t.negative_index = function (t, n, r) {
          return new S(
            'Error on ' +
              e(t) +
              '.' +
              n +
              '(): parametric index is negative -> (index = ' +
              r +
              ').'
          );
        }),
        (t.excessive_index = function (t, n, r, o) {
          return new S(
            'Error on ' +
              e(t) +
              '.' +
              n +
              '(): parametric index is equal or greater than size -> (index = ' +
              r +
              ', size: ' +
              o +
              ').'
          );
        }),
        (t.not_my_iterator = function (t, n) {
          return new F(
            'Error on ' +
              e(t) +
              '.' +
              n +
              "(): parametric iterator is not this container's own."
          );
        }),
        (t.erased_iterator = function (t, n) {
          return new F(
            'Error on ' +
              e(t) +
              '.' +
              n +
              '(): parametric iterator, it already has been erased.'
          );
        }),
        (t.negative_iterator = function (t, n, r) {
          return new S(
            'Error on ' +
              e(t) +
              '.' +
              n +
              '(): parametric iterator is directing negative position -> (index = ' +
              r +
              ').'
          );
        }),
        (t.iterator_end_value = function (t, n) {
          void 0 === n && (n = 'end');
          var r = e(t);
          return new S(
            'Error on ' +
              r +
              '.Iterator.value: cannot access to the ' +
              r +
              '.' +
              n +
              '().value.'
          );
        }),
        (t.key_nout_found = function (t, n, r) {
          throw new S(
            'Error on ' +
              e(t) +
              '.' +
              n +
              '(): unable to find the matched key -> ' +
              r
          );
        });
    })(w || (w = {}));
    var j = (function () {
        function t(t, e, n) {
          (this.prev_ = t), (this.next_ = e), (this.value_ = n);
        }
        return (
          (t._Set_prev = function (t, e) {
            t.prev_ = e;
          }),
          (t._Set_next = function (t, e) {
            t.next_ = e;
          }),
          (t.prototype.prev = function () {
            return this.prev_;
          }),
          (t.prototype.next = function () {
            return this.next_;
          }),
          Object.defineProperty(t.prototype, 'value', {
            get: function () {
              return this._Try_value(), this.value_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype._Try_value = function () {
            if (
              void 0 === this.value_ &&
              !0 === this.equals(this.source().end())
            )
              throw w.iterator_end_value(this.source());
          }),
          (t.prototype.equals = function (t) {
            return this === t;
          }),
          t
        );
      })(),
      z = (function () {
        function t(t, e) {
          (this.index_ = t), (this.value_ = e);
        }
        return (
          (t.prototype.index = function () {
            return this.index_;
          }),
          Object.defineProperty(t.prototype, 'value', {
            get: function () {
              return this.value_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.next = function () {
            return ++this.index_, this;
          }),
          (t.prototype.equals = function (t) {
            return this.index_ === t.index_;
          }),
          t
        );
      })();
    var R = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (e.end_ = e._Create_iterator(null, null)), e.clear(), e;
        }
        return (
          n(e, t),
          (e.prototype.assign = function (t, e) {
            this.clear(), this.insert(this.end(), t, e);
          }),
          (e.prototype.clear = function () {
            j._Set_prev(this.end_, this.end_),
              j._Set_next(this.end_, this.end_),
              (this.begin_ = this.end_),
              (this.size_ = 0);
          }),
          (e.prototype.resize = function (t) {
            var e = t - this.size();
            e > 0
              ? this.insert(this.end(), e, void 0)
              : e < 0 &&
                this.erase(
                  (function (t, e) {
                    if (0 === e) return t;
                    if (t.advance instanceof Function) return t.advance(e);
                    var n;
                    if (e < 0) {
                      if (!(t.prev instanceof Function))
                        throw new F(
                          'Error on std.advance(): parametric iterator is not a bi-directional iterator, thus advancing to negative direction is not possible.'
                        );
                      (n = function (t) {
                        return t.prev();
                      }),
                        (e = -e);
                    } else
                      n = function (t) {
                        return t.next();
                      };
                    for (; e-- > 0; ) t = n(t);
                    return t;
                  })(this.end(), -e),
                  this.end()
                );
          }),
          (e.prototype.begin = function () {
            return this.begin_;
          }),
          (e.prototype.end = function () {
            return this.end_;
          }),
          (e.prototype.size = function () {
            return this.size_;
          }),
          (e.prototype.push_front = function (t) {
            this.insert(this.begin_, t);
          }),
          (e.prototype.push_back = function (t) {
            this.insert(this.end_, t);
          }),
          (e.prototype.pop_front = function () {
            if (!0 === this.empty())
              throw w.empty(this.end_.source().constructor.name, 'pop_front');
            this.erase(this.begin_);
          }),
          (e.prototype.pop_back = function () {
            if (!0 === this.empty())
              throw w.empty(this.end_.source().constructor.name, 'pop_back');
            this.erase(this.end_.prev());
          }),
          (e.prototype.push = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if (0 === t.length) return this.size();
            var n = new c(t, 0),
              r = new c(t, t.length);
            return this._Insert_by_range(this.end(), n, r), this.size();
          }),
          (e.prototype.insert = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            if (t.source() !== this.end_.source())
              throw w.not_my_iterator(this.end_.source(), 'insert');
            if (!0 === t.erased_)
              throw w.erased_iterator(this.end_.source(), 'insert');
            return 1 === e.length
              ? this._Insert_by_repeating_val(t, 1, e[0])
              : 2 === e.length && 'number' == typeof e[0]
              ? this._Insert_by_repeating_val(t, e[0], e[1])
              : this._Insert_by_range(t, e[0], e[1]);
          }),
          (e.prototype._Insert_by_repeating_val = function (t, e, n) {
            var r = new z(0, n),
              o = new z(e);
            return this._Insert_by_range(t, r, o);
          }),
          (e.prototype._Insert_by_range = function (t, e, n) {
            for (
              var r = t.prev(), o = null, i = 0, s = e;
              !1 === s.equals(n);
              s = s.next()
            ) {
              var u = this._Create_iterator(r, null, s.value);
              0 === i && (o = u), j._Set_next(r, u), (r = u), ++i;
            }
            return (
              !0 === t.equals(this.begin()) && (this.begin_ = o),
              j._Set_next(r, t),
              j._Set_prev(t, r),
              (this.size_ += i),
              o
            );
          }),
          (e.prototype.erase = function (t, e) {
            return void 0 === e && (e = t.next()), this._Erase_by_range(t, e);
          }),
          (e.prototype._Erase_by_range = function (t, e) {
            if (t.source() !== this.end_.source())
              throw w.not_my_iterator(this.end_.source(), 'insert');
            if (!0 === t.erased_)
              throw w.erased_iterator(this.end_.source(), 'insert');
            if (t.equals(this.end_)) return this.end_;
            var n = t.prev();
            j._Set_next(n, e), j._Set_prev(e, n);
            for (var r = t; !r.equals(e); r = r.next())
              (r.erased_ = !0), --this.size_;
            return t.equals(this.begin_) && (this.begin_ = e), e;
          }),
          (e.prototype.swap = function (t) {
            var e, n, r;
            (e = o([t.begin_, this.begin_], 2)),
              (this.begin_ = e[0]),
              (t.begin_ = e[1]),
              (n = o([t.end_, this.end_], 2)),
              (this.end_ = n[0]),
              (t.end_ = n[1]),
              (r = o([t.size_, this.size_], 2)),
              (this.size_ = r[0]),
              (t.size_ = r[1]);
          }),
          e
        );
      })(a),
      P = (function () {
        function t(t) {
          this.base_ = t.prev();
        }
        return (
          (t.prototype.source = function () {
            return this.base_.source();
          }),
          (t.prototype.base = function () {
            return this.base_.next();
          }),
          Object.defineProperty(t.prototype, 'value', {
            get: function () {
              return this.base_.value;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.prev = function () {
            return this._Create_neighbor(this.base().next());
          }),
          (t.prototype.next = function () {
            return this._Create_neighbor(this.base_);
          }),
          (t.prototype.equals = function (t) {
            return this.base_.equals(t.base_);
          }),
          t
        );
      })(),
      C = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.associative_ = e), n;
        }
        return (
          n(e, t),
          (e.prototype._Create_iterator = function (t, n, r) {
            return e.Iterator.create(this, t, n, r);
          }),
          (e._Swap_associative = function (t, e) {
            var n;
            (n = o([e.associative_, t.associative_], 2)),
              (t.associative_ = n[0]),
              (e.associative_ = n[1]);
          }),
          (e.prototype.associative = function () {
            return this.associative_;
          }),
          e
        );
      })(R);
    !(function (t) {
      var e = (function (t) {
        function e(e, n, r, o) {
          var i = t.call(this, n, r, o) || this;
          return (i.source_ = e), i;
        }
        return (
          n(e, t),
          (e.create = function (t, n, r, o) {
            return new e(t, n, r, o);
          }),
          (e.prototype.reverse = function () {
            return new r(this);
          }),
          (e.prototype.source = function () {
            return this.source_.associative();
          }),
          e
        );
      })(j);
      t.Iterator = e;
      var r = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          n(e, t),
          (e.prototype._Create_neighbor = function (t) {
            return new e(t);
          }),
          e
        );
      })(P);
      t.ReverseIterator = r;
    })(C || (C = {}));
    var M = (function () {
        function t(t, e) {
          (this.value = t),
            (this.color = e),
            (this.parent = null),
            (this.left = null),
            (this.right = null);
        }
        return (
          Object.defineProperty(t.prototype, 'grand', {
            get: function () {
              return this.parent.parent;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'sibling', {
            get: function () {
              return this === this.parent.left
                ? this.parent.right
                : this.parent.left;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'uncle', {
            get: function () {
              return this.parent.sibling;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      D = (function (t) {
        function e(e, n) {
          return (
            t.call(this, e, n, function (t, e) {
              var r = n(t.value, e.value);
              return r || n(e.value, t.value) ? r : v(t) < v(e);
            }) || this
          );
        }
        return (
          n(e, t),
          (e.prototype.insert = function (e) {
            v(e), t.prototype.insert.call(this, e);
          }),
          (e.prototype._Nearest_by_key = function (t, e) {
            if (null === this.root_) return null;
            for (var n = this.root_, r = null; ; ) {
              var o = n.value,
                i = null;
              if (
                (this.key_comp()(t, o.value)
                  ? (i = n.left)
                  : this.key_comp()(o.value, t)
                  ? (i = n.right)
                  : ((r = n), (i = e(n))),
                null === i)
              )
                break;
              n = i;
            }
            return null !== r ? r : n;
          }),
          (e.prototype.nearest_by_key = function (t) {
            return this._Nearest_by_key(t, function (t) {
              return t.left;
            });
          }),
          (e.prototype.upper_bound = function (t) {
            var e = this._Nearest_by_key(t, function (t) {
              return t.right;
            });
            if (null === e) return this.source().end();
            var n = e.value;
            return this.key_comp()(t, n.value) ? n : n.next();
          }),
          e
        );
      })(
        (function (t) {
          function e(e, n, r) {
            var o = t.call(this, r) || this;
            return (
              (o.source_ = e),
              (o.key_comp_ = n),
              (o.key_eq_ = function (t, e) {
                return !n(t, e) && !n(e, t);
              }),
              o
            );
          }
          return (
            n(e, t),
            (e._Swap_source = function (t, e) {
              var n;
              (n = o([e.source_, t.source_], 2)),
                (t.source_ = n[0]),
                (e.source_ = n[1]);
            }),
            (e.prototype.get_by_key = function (t) {
              var e = this.nearest_by_key(t);
              return null !== e && this.key_eq_(t, e.value.value) ? e : null;
            }),
            (e.prototype.lower_bound = function (t) {
              var e = this.nearest_by_key(t);
              return null === e
                ? this.source_.end()
                : this.key_comp_(e.value.value, t)
                ? e.value.next()
                : e.value;
            }),
            (e.prototype.equal_range = function (t) {
              return new q(this.lower_bound(t), this.upper_bound(t));
            }),
            (e.prototype.source = function () {
              return this.source_;
            }),
            (e.prototype.key_comp = function () {
              return this.key_comp_;
            }),
            (e.prototype.key_eq = function () {
              return this.key_eq_;
            }),
            (e.prototype.value_comp = function () {
              return this.key_comp_;
            }),
            e
          );
        })(
          (function () {
            function t(t) {
              (this.root_ = null),
                (this.comp_ = t),
                (this.equal_ = function (e, n) {
                  return !t(e, n) && !t(n, e);
                });
            }
            return (
              (t.prototype.clear = function () {
                this.root_ = null;
              }),
              (t.prototype.root = function () {
                return this.root_;
              }),
              (t.prototype.get = function (t) {
                var e = this.nearest(t);
                return null !== e && this.equal_(t, e.value) ? e : null;
              }),
              (t.prototype.nearest = function (t) {
                if (null === this.root_) return null;
                for (var e = this.root_; ; ) {
                  var n = null;
                  if (this.comp_(t, e.value)) n = e.left;
                  else {
                    if (!this.comp_(e.value, t)) return e;
                    n = e.right;
                  }
                  if (null === n) break;
                  e = n;
                }
                return e;
              }),
              (t.prototype._Fetch_maximum = function (t) {
                for (; null !== t.right; ) t = t.right;
                return t;
              }),
              (t.prototype.insert = function (t) {
                var e = this.nearest(t),
                  n = new M(t, 1);
                null === e
                  ? (this.root_ = n)
                  : ((n.parent = e),
                    this.comp_(n.value, e.value)
                      ? (e.left = n)
                      : (e.right = n)),
                  this._Insert_case1(n);
              }),
              (t.prototype._Insert_case1 = function (t) {
                null === t.parent ? (t.color = 0) : this._Insert_case2(t);
              }),
              (t.prototype._Insert_case2 = function (t) {
                0 !== this._Fetch_color(t.parent) && this._Insert_case3(t);
              }),
              (t.prototype._Insert_case3 = function (t) {
                1 === this._Fetch_color(t.uncle)
                  ? ((t.parent.color = 0),
                    (t.uncle.color = 0),
                    (t.grand.color = 1),
                    this._Insert_case1(t.grand))
                  : this._Insert_case4(t);
              }),
              (t.prototype._Insert_case4 = function (t) {
                t === t.parent.right && t.parent === t.grand.left
                  ? (this._Rotate_left(t.parent), (t = t.left))
                  : t === t.parent.left &&
                    t.parent === t.grand.right &&
                    (this._Rotate_right(t.parent), (t = t.right)),
                  this._Insert_case5(t);
              }),
              (t.prototype._Insert_case5 = function (t) {
                (t.parent.color = 0),
                  (t.grand.color = 1),
                  t === t.parent.left && t.parent === t.grand.left
                    ? this._Rotate_right(t.grand)
                    : this._Rotate_left(t.grand);
              }),
              (t.prototype.erase = function (t) {
                var e = this.get(t);
                if (null !== e) {
                  if (null !== e.left && null !== e.right) {
                    var n = this._Fetch_maximum(e.left);
                    (e.value = n.value), (e = n);
                  }
                  var r = null === e.right ? e.left : e.right;
                  0 === this._Fetch_color(e) &&
                    ((e.color = this._Fetch_color(r)), this._Erase_case1(e)),
                    this._Replace_node(e, r),
                    1 === this._Fetch_color(this.root_) &&
                      (this.root_.color = 0);
                }
              }),
              (t.prototype._Erase_case1 = function (t) {
                null !== t.parent && this._Erase_case2(t);
              }),
              (t.prototype._Erase_case2 = function (t) {
                1 === this._Fetch_color(t.sibling) &&
                  ((t.parent.color = 1),
                  (t.sibling.color = 0),
                  t === t.parent.left
                    ? this._Rotate_left(t.parent)
                    : this._Rotate_right(t.parent)),
                  this._Erase_case3(t);
              }),
              (t.prototype._Erase_case3 = function (t) {
                0 === this._Fetch_color(t.parent) &&
                0 === this._Fetch_color(t.sibling) &&
                0 === this._Fetch_color(t.sibling.left) &&
                0 === this._Fetch_color(t.sibling.right)
                  ? ((t.sibling.color = 1), this._Erase_case1(t.parent))
                  : this._Erase_case4(t);
              }),
              (t.prototype._Erase_case4 = function (t) {
                1 === this._Fetch_color(t.parent) &&
                null !== t.sibling &&
                0 === this._Fetch_color(t.sibling) &&
                0 === this._Fetch_color(t.sibling.left) &&
                0 === this._Fetch_color(t.sibling.right)
                  ? ((t.sibling.color = 1), (t.parent.color = 0))
                  : this._Erase_case5(t);
              }),
              (t.prototype._Erase_case5 = function (t) {
                t === t.parent.left &&
                null !== t.sibling &&
                0 === this._Fetch_color(t.sibling) &&
                1 === this._Fetch_color(t.sibling.left) &&
                0 === this._Fetch_color(t.sibling.right)
                  ? ((t.sibling.color = 1),
                    (t.sibling.left.color = 0),
                    this._Rotate_right(t.sibling))
                  : t === t.parent.right &&
                    null !== t.sibling &&
                    0 === this._Fetch_color(t.sibling) &&
                    0 === this._Fetch_color(t.sibling.left) &&
                    1 === this._Fetch_color(t.sibling.right) &&
                    ((t.sibling.color = 1),
                    (t.sibling.right.color = 0),
                    this._Rotate_left(t.sibling)),
                  this._Erase_case6(t);
              }),
              (t.prototype._Erase_case6 = function (t) {
                (t.sibling.color = this._Fetch_color(t.parent)),
                  (t.parent.color = 0),
                  t === t.parent.left
                    ? ((t.sibling.right.color = 0), this._Rotate_left(t.parent))
                    : ((t.sibling.left.color = 0),
                      this._Rotate_right(t.parent));
              }),
              (t.prototype._Rotate_left = function (t) {
                var e = t.right;
                this._Replace_node(t, e),
                  (t.right = e.left),
                  null !== e.left && (e.left.parent = t),
                  (e.left = t),
                  (t.parent = e);
              }),
              (t.prototype._Rotate_right = function (t) {
                var e = t.left;
                this._Replace_node(t, e),
                  (t.left = e.right),
                  null !== e.right && (e.right.parent = t),
                  (e.right = t),
                  (t.parent = e);
              }),
              (t.prototype._Replace_node = function (t, e) {
                null === t.parent
                  ? (this.root_ = e)
                  : t === t.parent.left
                  ? (t.parent.left = e)
                  : (t.parent.right = e),
                  null !== e && (e.parent = t.parent);
              }),
              (t.prototype._Fetch_color = function (t) {
                return null === t ? 0 : t.color;
              }),
              t
            );
          })()
        )
      );
    return (
      (t.TreeMultiSet = (function (t) {
        function e() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var s =
            t.call(this, function (t) {
              return new C(t);
            }) || this;
          return (
            f.construct.apply(
              f,
              i(
                [
                  s,
                  e,
                  function (t) {
                    s.tree_ = new D(s, t);
                  },
                ],
                o(n),
                !1
              )
            ),
            s
          );
        }
        return (
          n(e, t),
          (e.prototype.clear = function () {
            t.prototype.clear.call(this), this.tree_.clear();
          }),
          (e.prototype.swap = function (t) {
            var e, n;
            (e = o([t.data_, this.data_], 2)),
              (this.data_ = e[0]),
              (t.data_ = e[1]),
              C._Swap_associative(this.data_, t.data_),
              D._Swap_source(this.tree_, t.tree_),
              (n = o([t.tree_, this.tree_], 2)),
              (this.tree_ = n[0]),
              (t.tree_ = n[1]);
          }),
          (e.prototype.key_comp = function () {
            return this.tree_.key_comp();
          }),
          (e.prototype.lower_bound = function (t) {
            return this.tree_.lower_bound(t);
          }),
          (e.prototype.upper_bound = function (t) {
            return this.tree_.upper_bound(t);
          }),
          (e.prototype._Handle_insert = function (t, e) {
            for (; !t.equals(e); t = t.next()) this.tree_.insert(t);
          }),
          (e.prototype._Handle_erase = function (t, e) {
            for (; !t.equals(e); t = t.next()) this.tree_.erase(t);
          }),
          e
        );
      })(E)),
      (function (t) {
        (t.Iterator = C.Iterator), (t.ReverseIterator = C.ReverseIterator);
      })(t.TreeMultiSet || (t.TreeMultiSet = {})),
      Object.defineProperty(t, '__esModule', { value: !0 }),
      t
    );
  })({});
  return t;
})();

const input = [
  [
    [6, 89, 86, 31, 88, 48, 13, 93, 75, 38],
    [
      [10, 21],
      [5, 68],
      [7, 12],
      [4, 18],
      [4, 4],
    ],
  ],
  [
    [20, 32, 37, 7, 2, 57, 94],
    [
      [1, 16],
      [5, 1],
      [4, 3],
      [7, 19],
      [4, 2],
      [3, 32],
    ],
  ],
  [
    [85, 60],
    [
      [2, 35],
      [1, 20],
      [1, 15],
      [1, 30],
      [2, 7],
    ],
  ],
  [
    [25, 12, 94, 57],
    [
      [4, 48],
      [3, 11],
      [1, 21],
      [2, 11],
      [3, 78],
    ],
  ],
  [
    [23, 59, 97, 73, 26, 68],
    [
      [4, 45],
      [2, 33],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
