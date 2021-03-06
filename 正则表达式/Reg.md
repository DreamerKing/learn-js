# 优化建议 
1. 使用缓存 
2. 尽量正确表达意图
3. 避免重复匹配 
4. 独立出文本和锚点 
5. 不过分依赖正则表达式 
    1. 彻底放弃字符串操作 
        正则匹配需要先构建有穷自动机，这种操作成本是很高的，如果只需匹配特定的字符串，使用字符串函数效率可能要高一些。
    2. 思维定式 
        试图编写复杂而全的表达式，而忘记条件语句的使用
    3. 滥用正则表达式

正则表达式 模式匹配文本字符串的表达式

创建方式
1. 字面量 /pattern/igm
2. 构造函数 RegExp(pattern, modifier)
一般优先采用字面量形式创建，在需要动态构建正则表达式时才使用构造函数形式构建。

修饰符
+ i 忽略大小写
+ g 全局匹配
+ m 多行模式
+ y 粘连匹配
+ u 字符模式 一般是编码单元操作模式

使用正在表达精确匹配一个字符串(甚至忽略大小写)是没有意义的，因为这完全可以用字符串比较来实现。

精确匹配 除了特殊字符和操作符外，其他字符必须准确出现在表达式中。
匹配字符集 [] [^a-z]
分组 () 圆括号具有分组和创建捕获双重功能
预定义字符集和元字符
转义 \$ 、\\
起止符 开始 -> ^  结束 -> $
重复出现 ？+ * {n[, m]} 
默认贪婪模式, 非贪婪模式 在重复量词后加?,只进行最小限度的匹配。
或操作符 | 
反向引用  \num 或 $num 捕获分组

| 元字符 | 含义 |
|:----:|:----:|
| \t | 水平制表符 |
| \b | 空格 |
| \r | 换行符  |
| \f |   |
| \h | 换页符 |
| \d | [0-9] |
| \D | 匹配非数字 [0-9]  |
| \w | [A-Za-z0-9_] |
| \W | [^A-Za-z0-9_] |
| \s | 匹配空白字符(空格、制表符、换页符等) |
| \S | 匹配空白字符之外的字符 |
| \b | 匹配单词边界 |
| \B | 匹配非单词边界(单词内部) |

处理正则表达式一般要经历多个阶段，其中两个主要阶段是编译和执行。在编译阶段,表达式经过JS引擎解析转换为内部代码，并缓存表达编译结果,这个过程发生在表达式的创建时期。在执行阶段，使用表达式编译结果进行字符串匹配。

捕获引用主要有两种方式：
+ 自身匹配
+ 替换字符串 

非捕获分组 (?:)  被动子表达式


String.replace()
第二参数为函数时说明：
+ 全文匹配 
+ 捕获分组 
+ 匹配索引
+ 源字符串
+ 函数返回的值作为替换值

匹配所有字符
+ [\S\s]* 
+ (?:.|\s)*

<<Matering Regular Expression>> Jeffery E.F. Friedl
<<Introducing Regular Expression>> Jan Goyvaerts
<<Regular Expression Cookbook>>  Levihan  
[regex101](https://regex101.com/)
[regexplanet](http://www.regexplanet.com/advanced/javascript/index.html)
