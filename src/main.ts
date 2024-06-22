import { Widget } from './widget';

export default function (amoWidget: any) {
  let widget: Widget;
  const getWidget = async () => {
    if (process.env.NODE_ENV === 'production') {
      __webpack_public_path__ = `${amoWidget.params.path}/build/`;
    }
    if (!widget) {
      widget = new Widget(amoWidget);
    }
    return widget;
  };

  amoWidget.callbacks = {
    setting($box) {
      if (amoWidget.params.status === 'not_configured') {
        amoWidget.background_install();
      }
    },

    init: function () {
      console.log('Hello, World!');
      return true;
    },

    bind_actions: function () {
      return true;
    },

    render: async function () {
      (await getWidget()).onRender();
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
  return amoWidget;
}
