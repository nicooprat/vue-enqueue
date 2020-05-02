<template>
  <div>
    <p>This would show both dialogs at once, but <strong>they will be shown one after the other</strong>:</p>
    <el-button type="primary" @click="isDialog1Visible = isDialog2Visible = true">
      Open both dialogs
    </el-button>

    <p>In any other case, it still works as usual because <strong>Enqueue is totally transparent</strong>:</p>
    <el-button type="default" @click="isDialog1Visible = true">
      Open 1st dialog only
    </el-button>
    <el-button type="default" @click="isDialog2Visible = true">
      Open 2nd dialog only
    </el-button>

    <Enqueue>
      <el-dialog v-if="isDialog1Visible" visible title="Dialog 1" @close="isDialog1Visible = false">
        Tristique lobortis fringilla elementum dapibus platea sociis fermentum, consequat cum laoreet phasellus sapien morbi, feugiat in etiam conubia porta suscipit. Suspendisse faucibus montes cubilia tempor nibh habitant, fermentum libero conubia ipsum vehicula class condimentum, pellentesque orci sociis varius curabitur. Phasellus sociosqu interdum sagittis urna varius tellus curabitur tincidunt quis molestie, natoque dapibus lacinia iaculis per platea pharetra laoreet eleifend pretium, consequat semper cubilia sapien nibh mauris quisque gravida suscipit. Lobortis hendrerit nisi ligula cubilia euismod luctus iaculis habitant tellus, ac massa dignissim fames felis eget mi curabitur nam, varius inceptos ipsum nulla duis magnis aliquet eros. Fusce pharetra euismod rhoncus dis, quisque accumsan penatibus tempor aliquam, at pulvinar nibh.
      </el-dialog>
    </Enqueue>

    <Enqueue>
      <el-dialog v-if="isDialog2Visible" visible title="Dialog 2" @close="isDialog2Visible = false">
        Risus laoreet massa ad odio turpis luctus senectus non malesuada dictum, facilisis blandit mattis quis purus curabitur convallis elementum. Mattis a et luctus justo massa vehicula metus suscipit curabitur nascetur, ante inceptos etiam platea fringilla sed ornare cursus sociis, quam quis iaculis ultricies euismod quisque purus sociosqu posuere. Orci lectus ultricies sociosqu dui quam curabitur, suspendisse neque netus feugiat lobortis laoreet inceptos, nisl tristique commodo facilisi vel. Ornare nulla curabitur commodo duis porttitor tempus massa volutpat odio nec, per natoque sapien nam himenaeos torquent tristique vulputate felis, egestas quisque nostra eros convallis dictumst facilisi ullamcorper elementum. Elementum penatibus sit conubia neque duis fermentum vulputate praesent, congue fringilla justo fames habitasse enim maecenas vitae, sociosqu felis nisl varius libero magna in. Ipsum sociosqu iaculis auctor tempor dapibus suscipit quam fringilla amet sociis, feugiat sem id platea leo maecenas eget orci suspendisse, sollicitudin elementum conubia pretium ad litora habitasse ornare duis. Malesuada vel rutrum libero suspendisse potenti luctus curabitur venenatis sed, ad nisl felis primis at ac nec varius, eros gravida tempus quam dictumst pulvinar sit senectus. Class venenatis sapien etiam varius amet pharetra eros justo, viverra hac eget condimentum semper senectus platea, nulla ridiculus nascetur libero mi vulputate potenti.
      </el-dialog>
    </Enqueue>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Dialog } from 'element-ui';
import Enqueue from '../../../../../packages/vue-enqueue/src/Enqueue'

export default {
  components: {
    [Button.name]: Button,
    [Dialog.name]: Dialog,
    Enqueue,
  },
  data: () => ({
    isDialog1Visible: false,
    isDialog2Visible: false,
  }),
}
</script>

<style scoped>
button {
  margin-bottom: 30px;
}
</style>
