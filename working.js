webpackChunkdiscord_app.push([["wp_isdev_patch"], {}, r => cache=Object.values(r.c)]);
var UserStore = cache.find(m => m?.exports?.default?.getCurrentUser).exports.default;
var actions = Object.values(UserStore._dispatcher._actionHandlers._dependencyGraph.nodes);
var user = UserStore.getCurrentUser();
actions.find(n => n.name === "ExperimentStore").actionHandler.CONNECTION_OPEN({
	type: "CONNECTION_OPEN", user: {flags: user.flags |= 1}, experiments: [],
});
actions.find(n => n.name === "DeveloperExperimentStore").actionHandler.CONNECTION_OPEN();
webpackChunkdiscord_app.pop(); user.flags &= ~1; "done";
