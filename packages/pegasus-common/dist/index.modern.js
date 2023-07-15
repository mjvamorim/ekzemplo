import e from"faker";const r=()=>({id:e.random.uuid(),name:e.lorem.words(4),date:e.date.future()}),d=()=>({id:e.random.uuid(),username:e.internet.userName(),password:"pw"});export{r as event,d as user};
//# sourceMappingURL=index.modern.js.map
