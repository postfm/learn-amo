export default function (widget) {
  widget.callbacks = {
    init: function () {
      console.log('Hello, World!');
      return true;
    },

    bind_actions: function () {
      return true;
    },

    render: function () {
      console.log('Я рендерюсь!');
      return true;
    },

    dpSettings: function () {},

    advancedSettings: function () {},

    destroy: function () {},

    contacts: {
      selected: function () {},
    },

    onSalesbotDesignerSave: function (handler_code, params) {},

    leads: {
      selected: function () {},
    },

    todo: {
      selected: function () {},
    },

    onSave: function () {
      return true;
    },

    onAddAsSource: function (pipeline_id) {},
  };
  return widget;
}
