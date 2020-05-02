<template>
  <div>
    <p>The blue dialog will be shown on top because it's in a different namespace and declared last. Red dialogs will be shown one after the other:</p>
    <el-button type="primary" @click="isDialog1Visible = isDialog2Visible = isDialog3Visible = true">
      Open all dialogs
    </el-button>

    <Enqueue namespace="red">
      <el-dialog v-if="isDialog1Visible" visible title="Dialog 1" @close="isDialog1Visible = false">
        <p style="color: #F56C6C">
          Tristique lobortis fringilla elementum dapibus platea sociis fermentum, consequat cum laoreet phasellus sapien morbi, feugiat in etiam conubia porta suscipit. Suspendisse faucibus montes cubilia tempor nibh habitant, fermentum libero conubia ipsum vehicula class condimentum, pellentesque orci sociis varius curabitur. Phasellus sociosqu interdum sagittis urna varius tellus curabitur tincidunt quis molestie, natoque dapibus lacinia iaculis per platea pharetra laoreet eleifend pretium, consequat semper cubilia sapien nibh mauris quisque gravida suscipit. Lobortis hendrerit nisi ligula cubilia euismod luctus iaculis habitant tellus, ac massa dignissim fames felis eget mi curabitur nam, varius inceptos ipsum nulla duis magnis aliquet eros. Fusce pharetra euismod rhoncus dis, quisque accumsan penatibus tempor aliquam, at pulvinar nibh.
        </p>
      </el-dialog>
    </Enqueue>

    <Enqueue namespace="red">
      <el-dialog v-if="isDialog2Visible" visible title="Dialog 2" @close="isDialog2Visible = false">
        <p style="color: #F56C6C">
          Facilisi donec nascetur quam laoreet odio tristique sodales dictum lectus mauris, dictumst mus ultricies arcu iaculis elementum mollis semper ornare habitasse, himenaeos fames augue convallis amet scelerisque cras neque bibendum. Fames sodales senectus nascetur rutrum vel lectus aenean dis, praesent mus fermentum dolor massa arcu facilisi tincidunt et, tellus per ligula tortor mattis aliquam fusce. Tempus risus ligula fringilla litora facilisi felis purus, bibendum vivamus eu dignissim adipiscing egestas, habitant auctor turpis nascetur nostra lacinia. Sodales vulputate duis posuere convallis eu suscipit, sit dictum phasellus tincidunt pharetra, magnis orci torquent sed at. Scelerisque primis class himenaeos accumsan pharetra sed sollicitudin tempor curae eros, tellus litora tincidunt rutrum mollis posuere at turpis diam eleifend, suspendisse quisque sit nibh eget sapien mauris in mi.
        </p>
      </el-dialog>
    </Enqueue>

    <Enqueue namespace="blue">
      <el-dialog v-if="isDialog3Visible" visible title="Dialog 3" @close="isDialog3Visible = false" width="30%" top="10vh">
        <p style="color: #409EFF">
          Risus laoreet massa ad odio turpis luctus senectus non malesuada dictum, facilisis blandit mattis quis purus curabitur convallis elementum. Mattis a et luctus justo massa vehicula metus suscipit curabitur nascetur, ante inceptos etiam platea fringilla sed ornare cursus sociis, quam quis iaculis ultricies euismod quisque purus sociosqu posuere. Orci lectus ultricies sociosqu dui quam curabitur, suspendisse neque netus feugiat lobortis laoreet inceptos, nisl tristique commodo facilisi vel. Ornare nulla curabitur commodo duis porttitor tempus massa volutpat odio nec, per natoque sapien nam himenaeos torquent tristique vulputate felis, egestas quisque nostra eros convallis dictumst facilisi ullamcorper elementum. Elementum penatibus sit conubia neque duis fermentum vulputate praesent, congue fringilla justo fames habitasse enim maecenas vitae, sociosqu felis nisl varius libero magna in. Ipsum sociosqu iaculis auctor tempor dapibus suscipit quam fringilla amet sociis, feugiat sem id platea leo maecenas eget orci suspendisse, sollicitudin elementum conubia pretium ad litora habitasse ornare duis. Malesuada vel rutrum libero suspendisse potenti luctus curabitur venenatis sed, ad nisl felis primis at ac nec varius, eros gravida tempus quam dictumst pulvinar sit senectus. Class venenatis sapien etiam varius amet pharetra eros justo, viverra hac eget condimentum semper senectus platea, nulla ridiculus nascetur libero mi vulputate potenti.
        </p>
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
    isDialog3Visible: false,
  }),
}
</script>

<style scoped>
button {
  margin-bottom: 30px;
}
</style>
