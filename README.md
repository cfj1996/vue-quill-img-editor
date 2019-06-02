
# vue-quill-img-editor
🍡Quill editor component for Vue, support SPA.

基于 Quill、适用于 Vue 的富文本编辑器，支持单页应用。

#### NPM

``` bash
npm install vue-quill-img-editor quill --save
```

### Mount

#### mount with global

``` javascript
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-img-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
```

#### mount with component

```javascript
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { vueQuillImgEditor } from 'vue-quill-img-editor'

export default {
  components: {
    vueQuillImgEditor
  }
}
```
### vue测试环境注意要配置babel
```javascript
module.exports = {
  presets: [
      ['@vue/app', {modules: 'umd', useBuiltIns: 'entry'}]
  ]
}
```

### Difference（使用方法）

### SPA

``` vue
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                :upload="upload"
                :headers="headers"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>

  <!-- Or manually control the data synchronization（或手动控制数据流） -->
  <quill-editor :content="content"
                :options="editorOption"
                @change="onEditorChange($event)">
  </quill-editor>
</template>

<script>

  // you can also register quill modules in the component
  import Quill from 'quill'
  import { someModule } from '../yourModulePath/someQuillModule.js'
  Quill.register('modules/someModule', someModule)
  
  export default {
    data () {
      return {
        upload: '', // 图片文件上传地址
        headers:{},//请求头
        content: '<h2>I am Example</h2>',
        editorOption: {
          // some quill options
        }
      }
    },
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>
```
### 配置服务器

```javascript(get)
 {
     code: 200
     msg: "quilljs"
 }
```
```javascript(post)
 {
     code: 200
     url: "http://127.0.0.1:7001/public/uploads/fb3d66947fa94904e13a4a118a590ed5.png"
 }
```

## Modules
- [quill-image-extend-module](https://github.com/NextBoy/quill-image-extend-module)
- [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module)
- [quill-image-drop-module](https://github.com/kensnyder/quill-image-drop-module)
- [quilljs-table](https://github.com/dost/quilljs-table)
- [more modules...](https://github.com/search?o=desc&q=quill+module&s=stars&type=Repositories&utf8=%E2%9C%93)


## Issues
- [Add attributes from toolbar options](https://github.com/quilljs/quill/issues/1084)
- [Option to insert an image from a URL](https://github.com/quilljs/quill/issues/893)
- [How vue-quill-img-editor combine with the syntax highlighter module of highlight.js](https://github.com/surmon-china/vue-quill-img-editor/issues/39)
- [配合 element-ui 实现上传图片/视频到七牛 demo](https://github.com/surmon-china/vue-quill-img-editor/issues/102)
- [How to fix “Can’t find variable: Quill”, “Quill is undefined”, “window.Quill is undefined” errors when trying to use Quill modules that use Webpack in Nuxt/SSR](https://github.com/surmon-china/vue-quill-img-editor/issues/171#issuecomment-370253411)


## Quill documents
[Api docs](https://quilljs.com/docs/quickstart/)


## Author
[Surmon](https://surmon.me)
