header = (function() {
  var that;
  header = function(el) {
    this.el = el;
    this.latestScrollY = 0;
    this.previousY = 0;
    this.minScrollHeight = el.clientHeight;
    window.onscroll = this._onScroll.bind(this);
    that = this;
  }

  header.prototype._onScroll = function() {
      that.previousY = that.latestScrollY;
      that.latestScrollY = that._getY();
      that._update.bind(that)();
  };

  header.prototype._show = function() {
      that.el.className = "links-visible top";
  };

  header.prototype._hide = function() {
      that.el.className = "links-hidden top";
  };

  header.prototype._update = function() {
    if(that.latestScrollY > that.minScrollHeight) {
      if (that.latestScrollY < that.previousY) that._show();
      else that._hide();
    }

    if (that.latestScrollY <= 0) that.el.className = "top";
  }

  header.prototype._getY = function() {
    return window.pageYOffset;
  }

  return header;
})();

var _x = new header(document.getElementById('links'));
