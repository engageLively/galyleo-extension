System.register(['./__rootModule___commonjs-entry-039abf1b.js', './index-0250cb25.js', './loading-indicator.cp-668e5ddc.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var component, Color, pt, rect, ShadowObject, List, DropDownListModel, MorphList, SystemButton, SystemButtonDark;
  return {
    setters: [function (module) {
      component = module.c;
      Color = module.C;
      pt = module.b;
      rect = module.ap;
      ShadowObject = module.ao;
    }, function (module) {
      List = module.s;
      DropDownListModel = module.p;
      MorphList = module.M;
    }, function (module) {
      SystemButton = module.a;
      SystemButtonDark = module.b;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/list.cp.js", __contextModule__);
      __varRecorder__.DefaultList = component["for"](function () {
        return component({
          type: List,
          name: "default list",
          borderColor: Color.rgb(149, 165, 166),
          extent: pt(226.5, 93.5),
          itemHeight: 20,
          itemPadding: rect(3, 2, -2, -1),
          manualItemHeight: true
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DefaultList",
        range: {
          start: 246,
          end: 702
        }
      }, System, __varRecorder__, "DefaultList");
      __varRecorder__.DarkList = component["for"](function () {
        return component(__varRecorder__.DefaultList, {
          name: "dark list",
          borderColor: Color.rgb(149, 165, 166),
          borderRadius: 4,
          dropShadow: new ShadowObject({
            distance: 3,
            rotation: 75,
            color: Color.rgba(0, 0, 0, 0.2)
          }),
          extent: pt(194, 91.9),
          fill: Color.rgba(66, 73, 73, 0.85),
          fontFamily: "IBM Plex Mono",
          nonSelectionFontColor: Color.rgb(204, 204, 204),
          selectionColor: Color.rgb(230, 230, 230),
          selectionFontColor: Color.rgb(0, 0, 0)
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DarkList",
        range: {
          start: 711,
          end: 1156
        }
      }, System, __varRecorder__, "DarkList");
      __varRecorder__.DropDownList = component["for"](function () {
        return component(SystemButton, {
          defaultViewModel: DropDownListModel,
          name: "drop down list"
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DropDownList",
        range: {
          start: 1165,
          end: 1272
        }
      }, System, __varRecorder__, "DropDownList");
      __varRecorder__.DarkDropDownList = component["for"](function () {
        return component(SystemButtonDark, {
          name: "dark drop down list",
          defaultViewModel: DropDownListModel
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DarkDropDownList",
        range: {
          start: 1281,
          end: 1401
        }
      }, System, __varRecorder__, "DarkDropDownList");
      var DefaultList = exports('b', __varRecorder__.DefaultList);
      var DarkList = exports('c', __varRecorder__.DarkList);
      var DropDownList = exports('D', __varRecorder__.DropDownList);
      var DarkDropDownList = exports('a', __varRecorder__.DarkDropDownList);
      __varRecorder__.DefaultList = DefaultList;
      __varRecorder__.DarkList = DarkList;
      __varRecorder__.DropDownList = DropDownList;
      __varRecorder__.DarkDropDownList = DarkDropDownList;
      __varRecorder__.MorphList = MorphList;

    })
  };
}));
