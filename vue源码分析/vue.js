class Vue {
  constructor(options) {
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    // console.log(this.$el, this.$data);
    this.compile(this.$el);
  }
  compile(node) {
    // console.log(node.childNodes);
    node.childNodes.forEach((item, index) => {
      //   console.log(item.nodeType);
      // 元素节点
      if (item.nodeType == 1) {
        this.compile(item);
      }

      // 这是文本节点，如果有{{}}就替换成数据
      if (item.nodeType == 3) {
        // 正则匹配{{}}
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;
        // 给节点赋值
        item.textContent = text.replace(reg, (match, vmKey) => {
          vmKey = vmKey.trim();
          return this.$data[vmKey];
        });
      }
    });
  }
}
