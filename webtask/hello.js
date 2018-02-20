'use latest';
module.exports = (ctx, done) => {
    done(null, `Hello, ${ctx.data.name}`);
}