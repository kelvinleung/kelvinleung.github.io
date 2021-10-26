const fm = require("gray-matter");

module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = fm(src);
  const code =
    `import configurePostLayout from 'components/PostLayout';
export default configurePostLayout(${JSON.stringify(data)});
` + content;
  return callback(null, code);
};
