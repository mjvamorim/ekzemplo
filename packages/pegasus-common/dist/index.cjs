function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/e(require("faker"));exports.event=function(){return{id:t.default.random.uuid(),name:t.default.lorem.words(4),date:t.default.date.future()}},exports.user=function(){return{id:t.default.random.uuid(),username:t.default.internet.userName(),password:"pw"}};
//# sourceMappingURL=index.cjs.map
