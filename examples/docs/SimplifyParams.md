### 所谓简化传参功能就是根据参数类型+参数优先级来匹配参数。
### 比如我们使用

```javascript
  $Message.open({
    message: '这是一个消息',
    duration: 3000,
    showClose: true,
    html: false,
    center: true
  });  
```

### 来打开一个消息提示，根据Message文档参数说明中的优先级描述，我们可以使用以下方式之一实现同样功能

```javascript
  $Message.open('这是一个消息', 3000, true, true, false);
  $Message.open(true, true, false, '这是一个消息', 3000);
  $Message.open(true, true, '这是一个消息', false, 3000);
  $Message.open(3000, true, true, '这是一个消息', false);
  $Message.open(3000, '这是一个消息', {
    showClose: true,
    html: false,
    center: true
  });
  
  //组合太多...以上只是5个例子
  
```
### 唯一要注意的是，如果给参数指定了参数名，那么将无视优先级强制使用该设置

### 换句话说，你可以以各种姿势设置参数，只要没指定参数名，这些参数将根据参数类型+优先级自动映射到对应属性上。

### 参数的优先级是我们根据开发者使用习惯设置的，如果你不喜欢这种方式或者你比较严谨，可以使用对象的方式指定参数名传参。
