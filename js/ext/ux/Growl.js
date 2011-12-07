Ext.namespace("Ext.ux");

Ext.ux.Growl = Ext.extend(Ext.Component, {
    closable: true,
    alignment: "t-t",
    duration: 3,
    context: document,
    offset: [0, 0],
    pin: false,
    iconCls: null,
    title: null,
    content: null,
    _closerTpl = '<div class="x-growl-msg-close"></div>',
    _basicTpl = '<div class="x-growl-msg">{0}</div>',
    _fullTpl = '<div class="x-growl-msg {2} {3}"><div class="x-growl-msg-title">{0}</div><div class="x-growl-msg-body">{1}</div></div>',

    initComponent: function() {
        //# add icon, title, closing button, etc
        this.on('click', this.onClick, this);
        return Ext.ux.Growl.superclass.initComponent.call(this);
    },

    show: function() {
        //# insertFirst or append
        this.showEffect();

        if(! this.pin) {
            this.getEl().pause(this.duration);
            this.hideEffect();
        }
    },

    showEffect: function() {
        this.getEl().fadeIn({
            duration: 1
        });
    },

    hideEffect: function() {
        this.getEl().fadeOut({
            duration: 1,
            remove: true
        });
    },

    close: function() {
        this.getEl().stopFx();
        this.hideEffect();
    },

    onClick: function(e, element) {
        if(Ext.fly(element).hasClass('x-growl-msg-close')) {
            this.close();
        } else {
            e.stopPropagation();
        }
    }
});

Ext.ux.Growl.notify = function(options) {
    return new Ext.ux.Growl(options);
};
