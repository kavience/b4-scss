# b4-scss
Make a shop web page by laravel-mix and bootstrap 4.0.*

## 使用说明
- 项目列表:
![](https://github.com/kavience/b4-scss/blob/master/public/img/x2.png)
- 下载项目:
```
https://github.com/kavience/b4-scss.git
```
- 安装依赖
```
npm install
```

- 将项目放在web目录，或者是安装php7之后执行(可选，如果有web容器，Apache之类的，把项目直接放进去即可)
```
php -S localhost:8080
```
- laravel-mix编译前端资源
```
npm run watch
```
- 打开站点看效果(完)
![](https://github.com/kavience/b4-scss/blob/master/public/img/x.png)

## 关于
> 项目由laravel-mix和bootstrap 4.0.* 构成。之前使用bootstrap一直没有接触到源码层次，正好有点时间，又使用laravel框架一段时间了，觉得laravel-mix很不错，于是就有了一个这样的想法：
laravel-mix单独拿出来，编译前端资源，等前端样式做的差不多了，再集成到laravel框架或其他框架中。由于使用的是bootstrap sass源码，因此需要掌握一定的
sass知识，还有一定的前端调试能力。



