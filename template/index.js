/**
 * Documentation: Writing Plugins
 * @see https://github.com/lukeed/taskr#plugin
 * @see https://github.com/lukeed/taskr#external-plugins
 */
module.exports = function (task, utils) {
	task.plugin('<%= slugName %>', {/* every:true, files:true */}, function * (file, opts) {
		console.log('a single file object', file); //=> { base, dir, data }
		console.log('user-provided config', opts); //=> null || {}
		yield render(opts);
	});
};
