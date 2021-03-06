var FormView = require('lib/config/form-view');
var hbs = require('handlebars');
var $ = require('jquery');
var Numpad = require('lib/components/numpad/behavior');
var Utils = require('lib/utilities/utils');
var polyglot = require('lib/utilities/polyglot');

module.exports = FormView.extend({

  initialize: function() {
    this.template = hbs.compile(
      $('script[data-gateway="' + this.model.id + '"]').html()
    );
    this.order_total = this.model.collection.order.get('total');
    this.updateStatusMessage();
  },

  templateHelpers: function(){
    return {
      total: this.order_total
    };
  },

  behaviors: {
    Numpad: {
      behaviorClass: Numpad
    }
  },

  modelEvents: {
    'change:message': 'updateStatusMessage'
  },

  onRender: function(){
    var self = this;

    if(this.model.id === 'pos_cash'){
      return this.posCashRender();
    }

    if(this.model.id === 'pos_card'){
      return this.posCardRender();
    }

    this.$('input, select, textarea').each(function(){
      var name = $(this).attr('name');
      var id = $(this).attr('id');
      if(name){
        self.addBinding(null, '*[name="' + name + '"]', name);
      }
      if(!name && id){
        self.addBinding(null, '#' + id, id);
      }
    });
  },

  posCashRender: function(){
    this.addBinding(null, {
      '#pos-cash-tendered': {
        observe: 'pos-cash-tendered',
        onGet: function(value){
          this.calcChange(value);
          return Utils.formatNumber(value);
        },
        onSet: function(value){
          var val = Utils.unformat(value);
          this.calcChange(val);
          return val;
        },
        initialize: function($el, model){
          if(!model.get('pos-cash-tendered')){
            model.set({ 'pos-cash-tendered': this.order_total });
          }
        }
      }
    });
  },

  posCardRender: function(){
    this.addBinding(null, {
      '#pos-cashback': {
        observe: 'pos-cashback',
        onGet: Utils.formatNumber,
        onSet: Utils.unformat
      }
    });
  },

  onShow: function() {
    this.$el.hide().slideDown(250);
  },

  remove: function() {
    this.$el.slideUp( 250, function() {
      FormView.prototype.remove.call(this);
    }.bind(this));
  },

  calcChange: function(tendered){
    var change = tendered - this.order_total;
    var msg = polyglot.t('titles.change') + ': ' + Utils.formatMoney(change);
    this.model.set({ message: msg });
  },

  updateStatusMessage: function(){
    this.model.collection.order.set({
      'payment_details.message': this.model.get('message')
    });
  }

});