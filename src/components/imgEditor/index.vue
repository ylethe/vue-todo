<template>
<div class="container">
  <div class="operations">
    <ul>
      <li @click="mosaic">马赛克</li>
      <li @click="addText">添加文字</li>
      <li @click="tailor">裁剪</li>
      <li @click="translate">旋转</li>
      <li @click="exportImg">导出图片</li>
    </ul>
  </div>
  <canvas ref="imgContent" class="img-wrap">
    你的浏览器太low🌶
  </canvas>
</div>
</template>

<script>
  export default {
    data () {
      return {
        context: '',
        canvas: '',
        isMasic: false,
        isText: false,
        isTailor: false,
        isTranslate: false,
        squareEdgeLength: 20
      }
    },
    mounted () {
      this.initData()
    },
    methods: {
      initData () {
        let imgContent = this.$refs.imgContent
        this.canvas = imgContent
        this.context = imgContent.getContext('2d')
        let  Img = new Image()
        Img.crossOrigin = "Anonymous"
        Img.src = 'http://oia85104s.bkt.clouddn.com/PictureUnlock_193139.pictureunlock.jpg'
        this.canvas.setAttribute('width', Img.width)
        this.canvas.setAttribute('height', Img.height)
        let self = this
        Img.onload = () => {
          let beginX, beginY, endX, endY
          self.context.drawImage(Img, 0, 0)
          self.context.save()

          self.canvas.addEventListener('mousedown', e => {
            beginX = e.offsetX
            beginY = e.offsetY
            self.canvas.addEventListener('mouseup', e => {
              endX = e.offsetX
              endY = e.offsetY
              if (self.isMasic) {
                self.makeGrid(beginX, beginY, endX - beginX, endY - beginY)
                return
              }
              if (self.isTailor) {
                self.context.drawImage(Img, beginX, beginY, endX - beginX, endY - beginY, 0, 0, endX - beginX, endY - beginY)
              }
            })
          })
        }
      },
      drawRect  (x, y, width, height, fillStyle, lineWidth, strokeStyle, globalAlpha) {
        this.context.beginPath()
        this.context.rect(x, y, width, height)
        this.context.lineWidth = lineWidth
        this.context.strokeStyle = strokeStyle
        fillStyle && (this.context.fillStyle = fillStyle)
        globalAlpha && (this.context.globalAlpha = globalAlpha)
        
        this.context.fill()
        this.context.stroke()
      },
      // 打马赛克
      mosaic () {
        let r = 0, g = 0, b = 0, a = 0
        let beginX, beginY, endX, endY
        let self = this
        this.resetClickStatus()
        this.isMasic = true
      },
      makeGrid (beginX, beginY, rectWidth, rectHight) {
        const row = Math.round(rectWidth / this.squareEdgeLength) + 1
        const column = Math.round(rectHight / this.squareEdgeLength) + 1
        for (let i = 0; i < row * column; i++) {
          let x = (i % row) * this.squareEdgeLength + beginX 
          let y = parseInt(i / row) * this.squareEdgeLength + beginY
          this.setColor(x, y)
        }
      },
      setColor (x, y) {
        const imgData = this.context.getImageData(x, y, this.squareEdgeLength, this.squareEdgeLength).data
        let r = 0, g = 0, b = 0, a = 0
        console.log(this.context.getImageData(x, y, this.squareEdgeLength, this.squareEdgeLength))
        for (let i = 0; i < imgData.length; i += 4) {
          r += imgData[i]
          g += imgData[i + 1]
          b += imgData[i + 2]
          a += imgData[i + 3]
        }
        r = Math.round(r / (imgData.length / 4))
        g = Math.round(g / (imgData.length / 4))
        b = Math.round(b / (imgData.length / 4))
        this.drawRect(x, y, this.squareEdgeLength, this.squareEdgeLength, `rgba(${r}, ${g}, ${b}, ${a})`, 2, `rgb(${r}, ${g}, ${b})`)
      },
      // 添加文字
      addText () {
        this.resetClickStatus()
        this.isText = true
        console.log('添加文字')
        this.context.fillText('text', 0, 0)
        this.context.font = 16+"px Arial";
        this.context.textBaseline = 'middle';//更改字号后，必须重置对齐方式，否则居中麻烦。设置文本的垂直对齐方式
        this.context.textAlign = 'center';
        let ftop = 80;
        let fleft = 40;
        this.context.fillStyle="#ff0000";
        this.context.fillStyle="#ffffff";
        this.context.fillText('hello',fleft,ftop);//文本元素在画布居中方式
        this.context.strokeStyle = 'yellow';
        this.context.strokeText('hello',fleft,ftop);//文字边框
      },
      // 裁剪
      tailor () {
        this.resetClickStatus()
        this.isTailor = true
        console.log('裁剪')
      } ,
      // 旋转
      translate () {
        this.resetClickStatus()
        this.isTranslate = true
        console.log('旋转')
      },
      resetClickStatus () {
        this.isMasic = false
        this.isText = false
        this.isTailor = false
        this.isTranslate = false
      },
      exportImg () {
        this.resetClickStatus()
        const exportUrl = this.canvas.toDataURL("image/jpeg")
        let a = document.createElement('a')
        a.setAttribute('download', '')
        a.href = exportUrl
        document.body.appendChild(a)
        a.click()
      }
    }
  }
</script>

<style scoped lang="less">
.operations {
  width: 1200px;
  margin: 0 auto;
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    li {
      list-style: none;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
.img-wrap {
  display: block;
  margin: 0 auto;
  border: 2px solid #000;
}
</style>