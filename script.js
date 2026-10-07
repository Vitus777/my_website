const details = {
  website: { title: '我的第一个个人空间', description: '这是一个持续更新的个人网站，也是把想法付诸实践的第一步。', items: ['用首页介绍自己，分享兴趣与探索。', '逐步加入真实作品和项目背后的故事。', '让手机和电脑上的访问都清晰、舒适。'] },
  notes: { title: '学习与实践手记', description: '这个栏目还在准备中，未来将在这里整理学习过程中的积累。', items: ['遇到了什么问题，以及如何找到答案。', '值得反复阅读的知识与方法。', '从小练习到完整项目的实践过程。'] },
  life: { title: '日常灵感收集簿', description: '这个栏目还在准备中，未来将收藏那些让日常变得有意思的瞬间。', items: ['阅读时留下的一段思考。', '生活中发现的细节与灵感。', '想要尝试的新事物与新方向。'] }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const item = details[button.dataset.project];
    document.querySelector('#dialog-title').textContent = item.title;
    document.querySelector('#dialog-description').textContent = item.description;
    document.querySelector('#dialog-list').replaceChildren(...item.items.map(text => {
      const li = document.createElement('li'); li.textContent = text; return li;
    }));
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
