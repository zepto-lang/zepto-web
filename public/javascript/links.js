header = (function() {
  header = function(el, cls) {
    if (!el) return;
    this.el = el;
    this.cls = cls;
    this.latestScrollY = 0;
    this.previousY = 0;
    this.minScrollHeight = el.clientHeight;
    if (!window.onscroll) {
      window.onscroll = this._onScroll.bind(this);
    } else {
      var old = window.onscroll;
      var that = this;
      window.onscroll = function() { that._onScroll(); old(); };
    }
  }

  header.prototype._onScroll = function() {
      this.previousY = this.latestScrollY;
      this.latestScrollY = this._getY();
      this._update.bind(this)();
  };

  header.prototype._show = function() {
      this.el.className = "links-visible " + this.cls;
  };

  header.prototype._hide = function() {
      this.el.className = "links-hidden " + this.cls;
  };

  header.prototype._update = function() {
    if(this.latestScrollY > this.minScrollHeight) {
      if (this.latestScrollY < this.previousY) this._show();
      else this._hide();
    }

    if (this.latestScrollY <= 0) this.el.className = this.cls;
  }

  header.prototype._getY = function() {
    return window.pageYOffset;
  }

  return header;
})();

var _x = new header(document.getElementById('links'), "top");
var _y = new header(document.getElementById('responsive-nav'), "top-right");
