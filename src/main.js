export default function (widget) {
  widget.cllbacks = {
    settings: function () { },
    init: function () {
      console.log('Hello, World!');
      return true;
    },
    bind_actions: function () {
      return true;
    },
    render: function () {
      return true;
    },
    dpSettings: function () { },
    advancedSettings: function () { },
    destroy: function () { },
    contacts: {
      selected: function () { }
    },
    onSalesbotDesignerSave: function (handler_code, params) { },
    leads: {
      selected: function () { }
    },
    todo: {
      selected: function () { }
    },
    onSave: function () { },
    onAddAsSource: function (pipeline_id) { }
  }
  return widget
}